document.addEventListener("DOMContentLoaded", function() {
    const menu = document.getElementById('menu');
    const cartContainer = document.getElementById('cart-container');
    const clearCartBtn = document.getElementById('clear-cart');
    const orderBtn = document.getElementById('order-btn');

    //Platos
    const platos = [
        { nombre: 'Ajiaco', precio: 10, imagen: "images/ajiaco.jfif" },
        { nombre: 'Arepa Rellena 2', precio: 12, imagen: "images/arepa.jfif" },
        { nombre: 'Bandeja Paisa', precio: 15, imagen: "images/bandeja.jfif" },
        { nombre: 'Chicharron', precio: 18, imagen: "images/chicha.jfif" },
        { nombre: 'Arroz con Camaron', precio: 20, imagen: "images/arrozcam.jfif" },
        { nombre: 'T-Bone Steak', precio: 25, imagen: "images/tbone.jfif"},
        { nombre: 'Coca Cola', precio: 12, imagen: "images/coc.jfif" },
        { nombre: 'Margarita', precio: 15, imagen: "images/mar.jfif" },
        { nombre: 'Shot de Tequila', precio: 18, imagen: "images/teq.jfif" },
        { nombre: 'Milhoja', precio: 20, imagen: "images/mil.jfif" },
        { nombre: 'Cheesecake ', precio: 25, imagen:"images/chees.jfif"},
        { nombre: 'Bomba de chocolate ', precio: 25, imagen: "images/bomb.jfif"}
    ];

    let carrito = [];

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
        precio.textContent = `$${plato.precio.toFixed(2)}`;

        const botonAgregar = document.createElement('button');
        botonAgregar.textContent = 'Agregar al carrito';
        botonAgregar.addEventListener('click', () => {
            agregarAlCarrito(plato);
        });

        menuItem.appendChild(imagen);
        menuItem.appendChild(nombre);
        menuItem.appendChild(precio);
        menuItem.appendChild(botonAgregar);

        menu.appendChild(menuItem);
    });

    clearCartBtn.addEventListener('click', () => {
        carrito = [];
        mostrarCarrito();
    });

    orderBtn.addEventListener('click', () => {
        enviarFormulario();
    });

    //Agregar un plato al carrito
    function agregarAlCarrito(plato) {
        carrito.push(plato);
        mostrarCarrito();
    }

    //Mostrar carrito
    function mostrarCarrito() {
        cartContainer.innerHTML = ''; // Limpiar carrito

        carrito.forEach(plato => {
            const cartItem = document.createElement('div');
            cartItem.classList.add('cart-item');

            const nombre = document.createElement('h4');
            nombre.textContent = plato.nombre;

            const precio = document.createElement('p');
            precio.textContent = `$${plato.precio.toFixed(2)}`;

            cartItem.appendChild(nombre);
            cartItem.appendChild(precio);

            cartContainer.appendChild(cartItem);
        });

        calcularTotal();
    }

    //Total
    function calcularTotal() {
        const total = carrito.reduce((acc, plato) => acc + plato.precio, 0);
        const totalElement = document.createElement('p');
        totalElement.textContent = `Total: $${total.toFixed(2)}`;
        cartContainer.appendChild(totalElement);
    }

    //Enviar carrito
    function enviarFormulario() {
        console.log("Pedido enviado:");
        carrito.forEach(plato => {
            console.log(`${plato.nombre} - Precio: $${plato.precio.toFixed(2)}`);
        });
    }
});