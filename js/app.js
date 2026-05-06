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