
// Variables.
const formulario = document.getElementById('Formulario');
const inputs = document.querySelectorAll('#Formulario input');
const expresiones = {
	nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/,
	contra: /^.{4,8}$/,
	correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
}
const todos = {
	nombre: false,
	correo: false,
	clave: false,
    clave2: false
}
var error1 = document.getElementById("errorNombre");
var error2 = document.getElementById("errorEmail");
var error3 = document.getElementById("errorClave");
var error4 = document.getElementById("errorClave2")

// Validaciones formulario.
const validarFormulario = (e) => {
    switch (e.target.name) {
        case "nombre":
            if(expresiones.nombre.test(e.target.value)){
                document.getElementById('nombre').classList.remove('campo-invalido');
                document.getElementById('nombre').classList.add('campo-valido');
                todos['nombre'] = true;
                error1.innerHTML = "";
                return true;
            } else {
                document.getElementById('nombre').classList.add('campo-invalido');
                document.getElementById('nombre').classList.remove('campo-valido');
                todos['nombre'] = false;
                error1.innerHTML = "Nombre inválido";
                return false;
            }
        break;
        case "email-usuario":
            if(expresiones.correo.test(e.target.value)){
                document.getElementById('email-usuario').classList.remove('campo-invalido');
                document.getElementById('email-usuario').classList.add('campo-valido');
                todos['correo'] = true;
                error2.innerHTML = "";
                return true;
            } else {
                document.getElementById('email-usuario').classList.add('campo-invalido');
                document.getElementById('email-usuario').classList.remove('campo-valido');
                todos['correo'] = false;
                error2.innerHTML = "Email inválido";
                return false;
            }
        break;
        case "clave":
            if(expresiones.contra.test(e.target.value)){
                document.getElementById('clave').classList.remove('campo-invalido');
                document.getElementById('clave').classList.add('campo-valido');
                todos['clave'] = true;
                error3.innerHTML = "";
                return true;
            } else {
                document.getElementById('clave').classList.add('campo-invalido');
                document.getElementById('clave').classList.remove('campo-valido');
                todos['clave'] = false;
                error3.innerHTML = "No debe tener más de 8 caracteres";
                return false;
            }
        break;
    }
}

const validarClaves = () => {
    const clave1 = document.getElementById("clave");
    const clave2 = document.getElementById("clave2");

    if(clave1.value !== clave2.value){
        document.getElementById("clave2").classList.add("campo-invalido");
        document.getElementById("clave2").classList.remove("campo-valido");
        todos['clave'] = false;
        todos['clave2'] = false;

        error4.innerHTML = "Las contraseñas no coinciden";
        return false;
    } else {
        document.getElementById("clave2").classList.add("campo-valido");
        document.getElementById("clave2").classList.remove("campo-invalido");
        todos['clave'] = true;
        todos['clave2'] = true;

        error4.innerHTML = "";
        return true;
    }
}

// Eventos.
inputs.forEach((input) => {
    input.addEventListener('keyup', validarFormulario);
});

formulario.addEventListener('submit', (e) => {
    e.preventDefault();

    if(todos.nombre && todos.correo && todos.clave && todos.clave2) {       
        document.getElementById('nombre').classList.remove('campo-valido');
        document.getElementById('email-usuario').classList.remove('campo-valido');
        document.getElementById('clave').classList.remove('campo-valido');
        document.getElementById("clave2").classList.remove("campo-valido");
        formulario.reset();

    } else {
        document.getElementById('nombre').classList.add('campo-invalido');
        document.getElementById('email-usuario').classList.add('campo-invalido');
        document.getElementById('clave').classList.add('campo-invalido');
        document.getElementById("clave2").classList.add("campo-invalido");
        error1.innerHTML = "Rellene este campo";
        error2.innerHTML = "Rellene este campo";
        error3.innerHTML = "Rellene este campo";
        error4.innerHTML = "Rellene este campo";
    }
});

