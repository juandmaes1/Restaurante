document.addEventListener("DOMContentLoaded", function() {
    const menu = document.getElementById('menu');
    const cartContainer = document.getElementById('cart-container');
    const clearCartBtn = document.getElementById('clear-cart');
    const orderBtn = document.getElementById('order-btn'); // Nuevo botón para ordenar

    const platos = [
        { nombre: 'Ajiaco', precio: 10, imagen: "C:/Users/PC-01/Desktop/ajiaco.jfif" },
        { nombre: 'Arepa Rellena 2', precio: 12, imagen: "C:/Users/PC-01/Desktop/arepa.jfif" },
        { nombre: 'Bandeja Paisa', precio: 15, imagen: "C:/Users/PC-01/Desktop/bandeja.jfif" },
        { nombre: 'Chicharron', precio: 18, imagen: "C:/Users/PC-01/Desktop/chicha.jfif" },
        { nombre: 'Arroz con Camaron', precio: 20, imagen: "C:/Users/PC-01/Desktop/arrozcam.jfif" },
        { nombre: 'T-Bone Steak', precio: 25, imagen: "C:/Users/PC-01/Desktop/tbone.jfif"},
        { nombre: 'Coca Cola', precio: 12, imagen: "C:/Users/PC-01/Desktop/coc.jfif" },
        { nombre: 'Margarita', precio: 15, imagen: "C:/Users/PC-01/Desktop/mar.jfif" },
        { nombre: 'Shot de Tequila', precio: 18, imagen: "C:/Users/PC-01/Desktop/teq.jfif" },
        { nombre: 'Milhoja', precio: 20, imagen: "C:/Users/PC-01/Desktop/mil.jfif" },
        { nombre: 'Cheesecake ', precio: 25, imagen:"C:/Users/PC-01/Desktop/chees.jfif"},
        { nombre: 'Bomba de chocolate ', precio: 25, imagen: "C:/Users/PC-01/Desktop/bomb.jfif"}
    ];

    // Inicializar el carrito
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

    // Agregar la lógica para enviar el formulario y mostrar los detalles del carrito
    orderBtn.addEventListener('click', () => {
        enviarFormulario();
    });

    // Función para agregar un plato al carrito
    function agregarAlCarrito(plato) {
        carrito.push(plato);
        mostrarCarrito();
    }

    // Función para mostrar los platos en el carrito
    function mostrarCarrito() {
        cartContainer.innerHTML = ''; // Limpiar el contenido anterior del carrito

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

    // Función para calcular el total del carrito
    function calcularTotal() {
        const total = carrito.reduce((acc, plato) => acc + plato.precio, 0);
        const totalElement = document.createElement('p');
        totalElement.textContent = `Total: $${total.toFixed(2)}`;
        cartContainer.appendChild(totalElement);
    }

    // Función para enviar el formulario simulado y mostrar los detalles del carrito en la consola
    function enviarFormulario() {
        console.log("Pedido enviado:");
        carrito.forEach(plato => {
            console.log(`${plato.nombre} - Precio: $${plato.precio.toFixed(2)}`);
        });
    }
});