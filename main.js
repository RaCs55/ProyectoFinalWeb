document.addEventListener("DOMContentLoaded", function () {
    const imagenes = [
        'menu-2-piezas-para-1.avif',
        'menu-3-piezas-para-1.avif',
        'menu-5-tiras-para-1.avif',
        'menu-6-piezas-para-2.avif',
        'menu-12-tiras-para-2.avif',
        'menu-the-chicken-sandwich.avif',
        'menu-the-jazzy-bacon.avif',
        'menu-the-soul.avif',
        'entrantes-6-nuggets.avif',
        'entrantes-patatas-bacon-queso.avif',
        'entrantes-patatas-cajun.avif',
        'postres-ice-caramelo.avif',
        'postres-ice-chocolate-blanco.avif',
        'postres-pop-cream-kit-kat.avif',
        'postres-pop-cream-oreo.avif'
    ];

    const cartaSection = document.querySelector('.carta');

    const categorias = {
        menu: [],
        entrantes: [],
        postres: []
    };

    imagenes.forEach(nombre => {
        if (nombre.startsWith('menu-')) {
            categorias.menu.push(nombre);
        } else if (nombre.startsWith('entrantes-')) {
            categorias.entrantes.push(nombre);
        } else if (nombre.startsWith('postres-')) {
            categorias.postres.push(nombre);
        }
    });

    function crearCategoria(titulo, imagenes) {
        const contenedor = document.createElement('div');

        const h3 = document.createElement('h3');
        h3.textContent = titulo.charAt(0).toUpperCase() + titulo.slice(1);
        contenedor.appendChild(h3);

        const grid = document.createElement('div');
        if (titulo === 'menu') {
            grid.classList.add('grid-menu');
        } else {
            grid.classList.add('grid');
        }

        imagenes.forEach(nombre => {
            const imgContainer = document.createElement('div');
            imgContainer.classList.add('img-card');

            const img = document.createElement('img');
            img.src = `./img/carta/${nombre}`;
            img.alt = nombre;

            const label = document.createElement('p');
            label.textContent = nombre
                .replace(`${titulo}-`, '')
                .replace(/-/g, ' ')
                .replace('.avif', '')
                .replace(/\b\w/g, c => c.toUpperCase());

            imgContainer.appendChild(img);
            imgContainer.appendChild(label);
            grid.appendChild(imgContainer);
        });

        contenedor.appendChild(grid);
        cartaSection.appendChild(contenedor);
    }

    crearCategoria('menu', categorias.menu);
    crearCategoria('entrantes', categorias.entrantes);
    crearCategoria('postres', categorias.postres);
});
