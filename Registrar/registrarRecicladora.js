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
    var campoUsuario = document.getElementById("campoUsuario_registrarRecicladora");
    var campoNombre = document.getElementById("campoNombre_registrarRecicladora");
    var campoContra = document.getElementById("campoContra_registrarRecicladora");
    var campoConfirmContra = document.getElementById("campoConfirmContra_registrarRecicladora");

    if(campoUsuario.value.length > 2 &&
        campoNombre.value.length > 1 &&
        campoContra.value.length > 2 &&
        campoConfirmContra.value.length > 2){
        
        alert("Recicladora registrada exitosamente!");
        regresar();
    } else {
        campoUsuario.style.borderColor = "red"
        campoNombre.style.borderColor = "red"
        campoContra.style.borderColor = "red"
        campoConfirmContra.style.borderColor = "red"
        alert("Debes completar todos los datos con minimo 3 carácteres");
    }
}

function regresar() {
    window.history.back();
}