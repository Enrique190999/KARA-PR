const puppeteer = require('puppeteer');
const toPdfData = require('./toPdf');

async function autoScroll(page) {
    await page.evaluate(async () => {
        await new Promise((resolve) => {
            var totalHeight = 0;
            var distance = 100;
            var timer = setInterval(() => {
                var scrollHeight = document.body.scrollHeight;
                window.scrollBy(0, distance);
                totalHeight += distance;

                if (totalHeight >= scrollHeight - window.innerHeight) {
                    clearInterval(timer);
                    resolve();
                }
            }, 200);
        });
    });
}

const cleanFileName = (text) => {
    // Reemplazar caracteres no permitidos en nombres de archivo
    return text.replace(/[\/\?<>\\:\*\|":]/g, '_');
};

const EPPDATA = async () => {
    console.log('ESTOY DENTRO')
    // CAMBIAR EL HEADLESS A NEW
    const browser = await puppeteer.launch({ headless: false, defaultViewport: null, });
    const page = await browser.newPage();
    await page.goto(`https://www.epdata.es/datos/datos-graficos-estadisticas-municipio/52/burgos/1795`);

    const buttonAceptar = "button[aria-label=\"Aceptar\""
    await page.waitForSelector(buttonAceptar);
    await page.click(buttonAceptar)

    await page.waitForSelector('div[id^="componente-representacion-"]');
    await autoScroll(page)
    const divs = await page.$$('div[id^="componente-representacion-"]:not([id^="componente-representacion-botonera-"])');
    let i = 0

    let result = []

    for (let index = 0; index < divs.length; index++) {

        const aInfo = await divs[index].evaluate(div => {
            const anchor = div.querySelector('a');
            return anchor ? { href: anchor.href, text: anchor.innerText } : null;
        });
        const cleanedText = cleanFileName(aInfo.text);
        await divs[index].screenshot({ path: `imagen_${index}.png` })
        const obj = {
            title: cleanedText,
            url: aInfo.href,
            img: `imagen_${index}.png`
        }
        result.push(obj)
        /*  for (const svgItem of svg){
            
         } */

         console.log(result)

         toPdfData(result)

    }


    // return result;
};

EPPDATA()

// toPdfData(await EPPDATA());
