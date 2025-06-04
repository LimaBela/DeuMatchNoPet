function alterarFoto(event) {
    const input = event.target;
    const foto = document.getElementById('fotoPerfil');

    if (input.files && input.files[0]) {
        const reader = new FileReader();

        reader.onload = function (e) {
            foto.src = e.target.result;
        };

        reader.readAsDataURL(input.files[0]);
    }
}