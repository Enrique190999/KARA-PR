
#   KAPA

## Objetivo

El objetivo de este proyecto, denominado KAPA, es obtener datos estadísticos mediante el uso de técnicas de _web scraping_, exportarlos a un documento en formato PDF y, además, crear una presentación de los datos utilizando IA.

## Requisitos

1.  Tener instalado un entorno de desarrollo integrado (IDE) compatible con:
- JavaScript
- VB. Net y C#
- Python

El más indicado para este proyecto será: [*Visual Studio Code*](https://code.visualstudio.com/)

## Objetivos

Para lograr el objetivo propuesto, se deben seguir los siguientes pasos:

***Todos estos requisitos podrán ser modificados si no se consiguen realizar en un plazo de tiempo coherente***

### 1. Identificación de la fuente de datos

Debemos encontrar sitios web donde podamos obtener, de forma global, datos estadísticos de distintos ámbitos, son necesarias páginas web donde tengan un buscador y se puedan buscar palabras clave.

### 2. Desarrollo de nuestro Back-end
#### Requisitos para esta tarea:
-  [*Visual Studio Code*](https://code.visualstudio.com/): IDE más completo para realizar esta tarea
- [Express Js](https://expressjs.com/): Librería con la que conseguiremos hacer nuestro backend, donde ser realizaran peticiones y seran respondidas con los datos necesarios.
-  *[Puppeteer](https://pptr.dev/)*: Librería con la que se desarrollara el scrapping para recabar los datos.
- [PopAI](https://www.popai.pro/?utm_source=google&utm_medium=YM_popai&utm_campaign=0922&utm_term=es&utm_content=general_ppt&gclid=EAIaIQobChMI057-w77bggMVvpRoCR0zowK9EAAYASAAEgLXgPD_BwE): IA capaz de crear presentaciones mediante texto *(Este ultimo punto sera opcional si no conseguimos automatizar la presentación mediante el uso de una API gratuita)*.
- Conocimientos básicos de DOM, JavaScript y peticiones HTTP.

#### 2.1. Desarrollo del REST API

Para desarrollar este punto usaremos la librería  [Express Js](https://expressjs.com/), esta librería nos permitirá crear puntos API para realizar las búsquedas, realizar el documento, presentación...

#### 2.2. Desarrollo del Scraper

Para ello se hará uso de la librería *[Puppeteer](https://pptr.dev/)*, gracias a esta librería podremos extraer datos para posteriormente ser tratados

####  2.3. Exportación a PDF

Para realizar esta tarea volveremos a usar la librería *[Puppeteer](https://pptr.dev/)*, la cual, a parte de sernos de gran ayuda para el *web scraping* también tiene funcionalidades en las que nos permite convertir HTML a PDF 

#### 2.4. Creación de Presentación con IA

> *Este punto desconocemos su complejidad hasta empezarla, si en un plazo de tiempo coherente no se consigue realizar nos adaptaremos únicamente con los documentos PDF*

Para iniciar esta terea haremos uso de cualquier IA que nos permita realizar esta tarea, podemos empezar probando con [PopAI](https://www.popai.pro/?utm_source=google&utm_medium=YM_popai&utm_campaign=0922&utm_term=es&utm_content=general_ppt&gclid=EAIaIQobChMI057-w77bggMVvpRoCR0zowK9EAAYASAAEgLXgPD_BwE), esta plataforma *promete* realizar presentaciones estilo *Canva* con el uso de la IA mediante un texto.

### 3. Desarrollo del Front-end
>*Este apartado puede ser desarrollado con el lenguaje y framework que el encargado desee oportuno en el que se sienta cómodo, tenga soltura y sobre todo, que sea óptima para trabajar con peticiones HTTP*

#### Requisitos para esta tarea:
-  Según la tecnología usada sera necesario el IDE que mas se le adapte a ella.
- Conocimientos básicos en peticiones HTTP

Este parte del trabajo consiste en realizar una plataforma *(Online o de escritorio)* que nos permita trabajar con la API sin hacer uso directo de peticiones HTTP.

### 7. Pruebas y Optimización

Realizar pruebas exhaustivas para asegurar la precisión de los datos, así como la calidad y coherencia de la presentación generada. Realizar ajustes y optimizaciones según sea necesario.

### 8. Documentación

Documentar el proceso completo, incluyendo el código fuente del scraper, los métodos de procesamiento de datos, la generación de PDF y la integración con la inteligencia artificial. Esto facilitará futuras referencias y posibles mejoras.

Al seguir estos pasos, se espera lograr el objetivo de obtener datos estadísticos, exportarlos a un documento PDF y crear una presentación automatizada utilizando inteligencia artificial, todo dentro de un entorno de desarrollo integrado compatible.

## Reparto de tareas
Segun vayamos iniciando el proyecto cada persona debe modificar este *README* y modificar esta tabla indicando la tarea o tareas que se ha asignado. 
|Persona|Tarea asignada |
|-|--|
|  Enrique | - |
|Rafael|-|
|Alicia|-|
|Adrian|-|

## Como empezar

1. Primero debes realizar un *clone* de esta práctica de forma local en tu equipo
```bash
git clone https://github.com/Enrique190999/KARA-PR.git
```
2. Desarrolla una rama con tu nombre siguiendo el formato *NOMBRE_APELLIDO1*

Usa este comando si la rama no existe:
```bash
git checkout -b NOMBRE_APELLIDO1
```

Si la rama ya existe en el servidor utiliza este otro comando para ubicarte en ella para trabajar:
```bash
git checkout NOMBRE_APELLIDO1
```
*Recuerda realizar un pull antes de comenzar de nuevo por donde lo dejaste*

3. Cada cambio que realices haz un *commit* del mismo

```bash
git add .
git commit -m "Mensaje del commit"
git push
```
4. Para continuar por el código por donde lo dejaste recuerda hacer un *pull* del mismo antes

```bash
git pull
```

