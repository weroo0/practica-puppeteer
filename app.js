import puppeteer from "puppeteer";

async function abrirPaginaWeb() {
    console.log(':::INICIO:::');

    const navegador = await puppeteer.launch({
        headless: false,
        slowMo: 800
    });

    const pagina = await navegador.newPage();
    await pagina.goto('https://example.com');
    navegador.close();

    console.log(':::TERMINO:::');
}

//abrirPaginaWeb();

async function capturarScreen(){
    console.log(':::Inicio:::');

    const navegador = await puppeteer.launch({
        headless: false,
        slowMo: 800
    });

    const pagina = await navegador.newPage();

    await pagina.goto('https://utsh.edu.mx/');

    await pagina.screenshot(
        {
            path: `./screenshots/ejemplo-${Date.now()}.png`,
            fullPage: false
        }
    )

    navegador.close();

    console.log(':::Termine:::');
}

//capturarScreen();


async function navegarentrepaginas(){
    console.log(':::Inicio:::');

    const navegador = await puppeteer.launch({
        headless: false,
        slowMo: 800
    });


    const pagina = await navegador.newPage();
    await pagina.goto('https://example.com/');
    await pagina.click(`div>p>a[href="https://www.iana.org/domains/example"]`);
    await new Promise ((resolve)=>setTimeout(resolve, 300))

    await pagina.screenshot(
        {
            path: `./screenshots/ejemplo-${Date.now()}.png`,
            fullPage: true,
        }
    )

    navegador.close();

    console.log(':::Termine:::');
}


//navegarentrepaginas();

async function obtenerDatosAngular() {
    //INSTANCIAR NAVEGADOR
    const navegador = await puppeteer.launch({
        headless: false,
        slowMo: 500
    });

    //CREAR NUEVA PESTANA EN NAVEGADOR
    const pagina = await navegador.newPage();

    //VISITAR O ABRIR LA PAGINA
    await pagina.goto('https://example.com/');

    //OBTENER LOS DATOS
    const datos = await pagina.evaluate(()=>{

        const arregloResultados = [];

        const titulo = document.querySelector('div>h1')?.innerText;
        const parrafo = document.querySelector('div>p')?.innerText;
        const enlace = document.querySelector('div>p:nth-child(3)')?.innerText;
        

    

        const objetoResultado = {
            titulo: titulo,
            parrafo: parrafo,
            enlace: {
                enlace : enlace,

            }
        }

        arregloResultados.push(objetoResultado);
        return arregloResultados;
    })
    
    console.log(':::datos:::', datos);

    navegador.close()
}

obtenerDatosAngular()