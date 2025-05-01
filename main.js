const imagenes = [
    "6-nuggets.avif",
    "caja-mixta-a-para-1.avif",
    "caja-mixta-b-para-2.avif",
    "caja-mixta-c-para-2.avif",
    "ice-caramelo.avif",
    "ice-chocolate-blanco.avif",
    "menu-2-piezas-para-1.avif",
    "menu-3-piezas-para-1.avif",
    "menu-5-tiras-para-1.avif",
    "menu-6-piezas-para-2.avif",
    "menu-12-tiras-para-2.avif",
    "menu-the-chicken-sandwich.avif",
    "menu-the-jazzy-bacon.avif",
    "menu-the-soul.avif",
    "patatas-bacon-queso.avif",
    "patatas-cajun.avif",
    "pop-cream-kit-kat.avif",
    "pop-cream-oreo.avif"
];

const contenedor = document.getElementById("galeria-carta");

imagenes.forEach(nombre => {
    const img = document.createElement("img");
    img.src = `img/carta/${nombre}`;
    img.alt = nombre.replace(/[-_]/g, ' ').replace('.avif', '');
    img.style.width = "200px";
    img.style.margin = "10px";
    img.style.borderRadius = "10px";
    contenedor.appendChild(img);
});
