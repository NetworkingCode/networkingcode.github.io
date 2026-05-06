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

const menuToggle = document.getElementById('menuToggle');
const navLinks = document.getElementById('navLinks');

menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

document.querySelectorAll('#navLinks a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
    });
});