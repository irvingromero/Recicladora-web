<?php
    $usuario = $_POST['usuario'];
    $contra = $_POST['contra'];

    $con = mysqli_connect("localhost", "root", "admin", "Recicladora");

    if($con->connect_error)
        die($con->connect_error);

//    print("Conexion!\n");
    
    $sql = "INSERT INTO Usuarios (usuario, contra)
    VALUES ('$usuario', '$contra')";

    if ($con->query($sql) === TRUE) {
        echo "Datos agregados!";
    } else {
        echo "Error: " . $sql . "<br>" . $con->error;
    }

    $con->close();
    header('Location: ../iniciarSesion/iniciarSesion.html');
    exit(1);  
?>