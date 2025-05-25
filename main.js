// Datos de los productos
const productos = [
    {
        "id": "P001",
        "nombre": "Menu 2 Piezas Para 1",
        "categoria": "Menú",
        "precio": 8.99,
        "imagen": "menu-2-piezas-para-1.avif"
    },
    {
        "id": "P002",
        "nombre": "Menu 3 Piezas Para 1",
        "categoria": "Menú",
        "precio": 9.99,
        "imagen": "menu-3-piezas-para-1.avif"
    },
    {
        "id": "P003",
        "nombre": "Menu 5 Tiras Para 1",
        "categoria": "Menú",
        "precio": 10.49,
        "imagen": "menu-5-tiras-para-1.avif"
    },
    {
        "id": "P004",
        "nombre": "Menu 6 Piezas Para 2",
        "categoria": "Menú",
        "precio": 15.99,
        "imagen": "menu-6-piezas-para-2.avif"
    },
    {
        "id": "P005",
        "nombre": "Menu 12 Tiras Para 2",
        "categoria": "Menú",
        "precio": 16.99,
        "imagen": "menu-12-tiras-para-2.avif"
    },
    {
        "id": "P006",
        "nombre": "The Chicken Sandwich",
        "categoria": "Menú",
        "precio": 7.99,
        "imagen": "the-chicken-sandwich.avif"
    },
    {
        "id": "P007",
        "nombre": "The Jazzy Bacon",
        "categoria": "Menú",
        "precio": 8.49,
        "imagen": "the-jazzy-bacon.avif"
    },
    {
        "id": "P008",
        "nombre": "The Soul",
        "categoria": "Menú",
        "precio": 8.99,
        "imagen": "the-soul.avif"
    },
    {
        "id": "P009",
        "nombre": "6 Nuggets",
        "categoria": "Entrante",
        "precio": 4.49,
        "imagen": "6-nuggets.avif"
    },
    {
        "id": "P010",
        "nombre": "Patatas Bacon Queso",
        "categoria": "Entrante",
        "precio": 3.99,
        "imagen": "patatas-bacon-queso.avif"
    },
    {
        "id": "P011",
        "nombre": "Patatas Cajun",
        "categoria": "Entrante",
        "precio": 3.49,
        "imagen": "patatas-cajun.avif"
    },
    {
        "id": "P012",
        "nombre": "Ice Caramelo",
        "categoria": "Postre",
        "precio": 2.99,
        "imagen": "ice-caramelo.avif"
    },
    {
        "id": "P013",
        "nombre": "Ice Chocolate Blanco",
        "categoria": "Postre",
        "precio": 2.99,
        "imagen": "ice-chocolate-blanco.avif"
    },
    {
        "id": "P014",
        "nombre": "Pop Cream Kit Kat",
        "categoria": "Postre",
        "precio": 3.49,
        "imagen": "pop-cream-kit-kat.avif"
    },
    {
        "id": "P015",
        "nombre": "Pop Cream Oreo",
        "categoria": "Postre",
        "precio": 3.49,
        "imagen": "pop-cream-oreo.avif"
    }
];

if (!localStorage.getItem('productos')) {
    localStorage.setItem('productos', JSON.stringify(productos));
}

const productosGuardados = JSON.parse(localStorage.getItem('productos'));

function mostrarProductos() {
    const menusContainer = document.getElementById('menus-container');
    const entrantesContainer = document.getElementById('entrantes-container');
    const postresContainer = document.getElementById('postres-container');

    menusContainer.innerHTML = '';
    entrantesContainer.innerHTML = '';
    postresContainer.innerHTML = '';

    productosGuardados.forEach(producto => {
        const card = document.createElement('div');
        card.className = 'img-card';
        card.innerHTML = `
            <img src="./img/carta/${producto.imagen}" alt="${producto.nombre}">
            <p>${producto.nombre}</p>
            <p>€${producto.precio.toFixed(2)}</p>
        `;

        if (producto.categoria === 'Menú') {
            menusContainer.appendChild(card);
        } else if (producto.categoria === 'Entrante') {
            entrantesContainer.appendChild(card);
        } else if (producto.categoria === 'Postre') {
            postresContainer.appendChild(card);
        }
    });
}

document.addEventListener('DOMContentLoaded', mostrarProductos);
