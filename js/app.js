function copiarEmail() {
    const email = document.getElementById("email").innerText;

    navigator.clipboard.writeText(email)
        .then(() => {
            alert("Correo copiado");
        })
        .catch(() => {
            alert("No se pudo copiar");
        });
}