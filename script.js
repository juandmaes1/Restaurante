document.addEventListener("DOMContentLoaded", function() {
    const menu = document.getElementById('menu');
    const cartLink = document.getElementById('cart-link');

    const platos = [
        { nombre: 'Plato 1', precio: 10, imagen: "C:/Users/PC-01/Desktop/ajiaco.jfif" },
        { nombre: 'Plato 2', precio: 12, imagen: "C:/Users/PC-01/Desktop/arepa.jfif" },
        { nombre: 'Plato 3', precio: 15, imagen: "C:/Users/PC-01/Desktop/bandeja.jfif" },
        { nombre: 'Plato 4', precio: 18, imagen: "C:/Users/PC-01/Desktop/chicha.jfif" },
        { nombre: 'Plato 5', precio: 20, imagen: "C:/Users/PC-01/Desktop/arrozcam.jfif" },
        { nombre: 'Plato 6', precio: 25, imagen: "C:/Users/PC-01/Desktop/tbone.jfif"}
    ];

    // Agregar los platos al menú
    platos.forEach(plato => {
        const menuItem = document.createElement('div');
        menuItem.classList.add('menu-item');

        const imagen = document.createElement('img');
        imagen.src = plato.imagen;
        imagen.alt = plato.nombre;

        const nombre = document.createElement('h3');
        nombre.textContent = plato.nombre;

        const precio = document.createElement('p');
        precio.textContent = `$${plato.precio}`;

        const botonAgregar = document.createElement('button');
        botonAgregar.textContent = 'Agregar al carrito';

        menuItem.appendChild(imagen);
        menuItem.appendChild(nombre);
        menuItem.appendChild(precio);
        menuItem.appendChild(botonAgregar);

        menu.appendChild(menuItem);
    });

    // Agregar la imagen del carrito con el enlace a la página del carrito
    const imagenCarrito = document.createElement('img');
    imagenCarrito.src = 'carrito_icono.png'; // Ruta de la imagen del carrito
    imagenCarrito.alt = 'Ver carrito de compras';
    const enlaceCarrito = document.createElement('a');
    enlaceCarrito.href = 'carrito.html'; // Ruta de la página del carrito
    enlaceCarrito.appendChild(imagenCarrito);
    cartLink.appendChild(enlaceCarrito);
});