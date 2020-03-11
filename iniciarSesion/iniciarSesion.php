<?php
    $usuario = $_POST['usuario'];
    $contra = $_POST['contra'];

    $coneccion = mysqli_connect("localhost", "root", "admin", "Recicladora");

    if($coneccion->connect_error)
        die($coneccion->connect_error);

    $consultaRecicladora = mysqli_query($coneccion, "SELECT usuario, contra FROM Recicladoras WHERE usuario = '$usuario' AND contra = '$contra'");
    $resultadoRecicladora = mysqli_num_rows($consultaRecicladora);

    $consultaUsuario = mysqli_query($coneccion, "SELECT usuario, contra FROM Usuarios WHERE usuario = '$usuario' AND contra = '$contra'");
    $resultadoUsuario = mysqli_num_rows($consultaUsuario);

    if($resultadoUsuario > 0){
        header('Location: ../sesionUsuario/sesionUsuario.html');
        exit();
    }

    if($resultadoRecicladora > 0){
        header('Location: ../sesionRecicladora/sesionRecicladora.html');
        exit();
    } else {
        header('Location: iniciarSesion.html');
    }

    $coneccion->close();
    exit(1);
?>