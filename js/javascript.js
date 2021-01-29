function validacion()
 {  
    var nombre = document.getElementById("name").value;
    var tipom = document.getElementById("type").value;
    var mensaje = "";
    
    

    if (tipom == ""){
        alert("el campo tipo de mensaje esta vacio");
        document.getElementById("type").focus();
    }

    if (nombre == ""){
        alert("él campo nombre esta vacio");
        document.getElementById("name").focus();
    }

    if (nombre == ""){
        alert("él campo Email esta vacio");
        document.getElementById("Email").focus();
    }

    if (nombre == ""){
        alert("él campo Celular esta vacio");
        document.getElementById("Celular").focus();
    }

    if (nombre == ""){
        alert("él campo Comentario esta vacio");
        document.getElementById("Comentario").focus();
    }


     
    if(tipom =="" || nombre == ""){
        if(tipom == "") {
            mensaje += "el campo tipo de mensaje esta vacio";
        }
        if (nombre == "") {
            mensaje += "\nEl campo  nombre esta vacio";
        }
        alerta(mensaje);
    }
    
}