function copiarEmail() {
    const email = document.getElementById("email").innerText;

    navigator.clipboard.writeText(email)
        .then(() => {
            mostrarToast("Correo copiado");
        })
        .catch(() => {
            mostrarToast("No se pudo copiar");
        });
}

function mostrarToast(mensaje) {
    const toast = document.getElementById("toast");
    toast.innerText = mensaje;

    toast.classList.add("show");

    setTimeout(() => {
        toast.classList.remove("show");
    }, 2000);
}

// Seleccionamos por clase para que coincida con tu CSS
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

if (menuToggle && navLinks) {
    menuToggle.addEventListener('click', () => {
        // Esto activa el menú
        navLinks.classList.toggle('active');
        // Esto sirve por si quieres animar las rayitas del botón
        menuToggle.classList.toggle('active');
    });

    // Cerrar el menú al hacer clic en un link
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
            menuToggle.classList.remove('active');
        });
    });
}

// Elementos del panel de desarrollador
const devMenu = document.getElementById('dev-menu');
const btnToggleOutlines = document.getElementById('btn-toggle-outlines');

// 1. Escuchar la combinación de teclas: Ctrl + Shift + D
window.addEventListener('keydown', (event) => {
    // Comprobamos si se presionó Ctrl, Shift y la tecla D (minúscula o mayúscula)
    if (event.ctrlKey && event.shiftKey && event.key.toLowerCase() === 'd') {
        event.preventDefault(); // Evita que el navegador ejecute otra acción por defecto
        
        // Alterna la visibilidad del menú
        devMenu.classList.toggle('show');
    }
});

// 2. Activar/Desactivar los bordes de debug al hacer clic en el botón
btnToggleOutlines.addEventListener('click', () => {
    document.body.classList.toggle('debug-active');
    
    // Opcional: Cambiar el estilo del botón para saber si está activo
    if (document.body.classList.contains('debug-active')) {
        btnToggleOutlines.style.borderColor = '#00ff66';
        btnToggleOutlines.style.color = '#00ff66';
    } else {
        btnToggleOutlines.style.borderColor = '#555';
        btnToggleOutlines.style.color = '#fff';
    }
});