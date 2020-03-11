function caracteresEspeciales(e) {
    tecla = (document.all) ? e.keyCode : e.which;
    //Tecla de retroceso para borrar, siempre la permite
    if (tecla == 8) {
        return true;
    }
    // Patron de entrada, en este caso solo acepta numeros y letras y espacio
    patron = /[A-Za-z0-9 ]/;
    tecla_final = String.fromCharCode(tecla);
    return patron.test(tecla_final);
  };

function validar(){
    var campoUsuario = document.getElementById("campoUsuario_registroUsuario");
    var campoContra = document.getElementById("campoContra_registroUsuario");
    var campoConfirmContra = document.getElementById("confirmaContra_registroUsuario");

    if(campoUsuario.value.length > 2 &&
        campoContra.value.length > 2 &&
        campoConfirmContra.value.length > 2){

        if(campoContra.value == campoConfirmContra.value){
            alert("Usuario registrado exitosamente!");
            return true;
        } else {
            alert("Las contraseñas no coinciden");
            return false;
        }
    } else {
        campoUsuario.style.borderColor = "red"
        campoContra.style.borderColor = "red"
        campoConfirmContra.style.borderColor = "red"
        alert("Debes completar todos los datos con minimo 3 carácteres");
        return false;
    }
}

function regresar() {
    window.history.back();
}