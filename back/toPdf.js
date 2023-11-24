

const { readFileSync } = require('fs');
const puppeteer = require('puppeteer');
const path = require('path');

const toPdfData = async (items) => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();

    const currentDirectory = process.cwd();

    let dataFormatted = ``

    items.forEach((item) => {
   
        dataFormatted += `
        <br>
            <article>
                <h2>${item.title}</h2>
                <a href="${item.url}"> Fuente</a>
                <img src="data:image/jpeg;base64,${
                    readFileSync(`./${item.img}`).toString('base64')
                  }"/>
            </article>
        `
    });


    const htmlContent = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>K.A.P.A</title>
    </head>
    <style>
        .portada{
            text-align: center;
            width: 100%;
        }
        .portada h1{
            font-size: 14rem;
        }
    </style>
    <body>
        <div class="portada">
            <img src="./Escudo-Color-WEB-.jpg"/>
            <h1>KAPA</h1>
            <h3>Enrique Padilla</h3>
            <h3>Alicia García</h3>
            <h3>Rafael Treceño</h3>
            <h3>Adrian Caballero</h3>
        </div>
        <div>
            ${dataFormatted}
        </div>
        
    </body>
    </html>`;

    console.log(htmlContent)
    await page.setContent(htmlContent);

    await page.pdf({ path: 'output.pdf', format: 'A4' });

    await browser.close();
}

module.exports = toPdfData