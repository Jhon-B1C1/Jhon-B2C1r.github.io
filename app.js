function mostrarLogin() {
    document.getElementById("menu").style.display = "none";
    document.getElementById("registro-container").style.display = "none";
    document.getElementById("login-container").style.display = "block";
}

function mostrarRegistro() {
    document.getElementById("login-container").style.display = "none";
    document.getElementById("registro-container").style.display = "block";
}

function iniciarSesion(event) {
    event.preventDefault();

    // Obtener los valores del formulario de inicio de sesión
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    // Recuperar los usuarios desde localStorage
    const usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];
    
    // Buscar el usuario que coincida con el email y la contraseña
    const usuario = usuarios.find(u => u.email === email && u.password === password);
    
    if (usuario) {
        // Guardar el usuario en sessionStorage para la sesión actual
        sessionStorage.setItem('usuarioActual', JSON.stringify(usuario));
        alert("Iniciando sesión como: " + usuario.nombre);

        // Redirigir al menú
        window.location.href = 'menu.html';
    } else {
        alert("Email o contraseña incorrectos");
    }
}

function crearCuenta(event) {
    event.preventDefault();
    
    // Obtener la información del formulario de registro
    const nombre = document.getElementById("nombre").value;
    const email = document.getElementById("emailRegistro").value;
    const password = document.getElementById("passwordRegistro").value;

    // Crear un objeto para el nuevo usuario
    const nuevoUsuario = {
        nombre,
        email,
        password,
    };

    // Obtener usuarios existentes de localStorage
    let usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];

    // Verificar si el correo ya está registrado
    const usuarioExistente = usuarios.find(usuario => usuario.email === email);
    if (usuarioExistente) {
        alert("Este correo ya está registrado. Por favor, inicia sesión.");
        return;
    }

    // Agregar el nuevo usuario
    usuarios.push(nuevoUsuario);

    // Guardar la lista de usuarios actualizada en localStorage
    localStorage.setItem('usuarios', JSON.stringify(usuarios));

    alert("Registro exitoso para: " + nombre);
    window.location.href = 'menu.html'; // Redirigir al menú después del registro exitoso
}

function mostrarContenido() {
    document.getElementById('menu').style.display = 'none';
    document.getElementById('contenido').style.display = 'block';
    document.getElementById('miVideo').play(); // Inicia el video automáticamente
}

function mostrarOpciones() {
    document.getElementById('contenido').style.display = 'none';
    document.getElementById('opciones-container').style.display = 'block';
}

function mostrarResultado() {
    const opcionesForm = document.getElementById('opcionesForm');
    const opciones = opcionesForm.elements['opcion'];
    let seleccionada = '';

    for (let i = 0; i < opciones.length; i++) {
        if (opciones[i].checked) {
            seleccionada = opciones[i].value;
            break;
        }
    }

    const resultadoTexto = document.getElementById('resultado-texto');
    const textoAdicional = document.getElementById('texto-adicional');
    const resultadoVideo = document.getElementById('resultadoVideo');

    if (seleccionada) {
        switch (seleccionada) {
            case 'opcion1':
                resultadoTexto.textContent = "Incorrecto";
                resultadoVideo.src = document.querySelector('video source[data-option="opcion1"]').src;
                textoAdicional.textContent = "Sufriste un accidente y tristemente falleciste al no contar con el cinturón de seguridad puesto.";
                break;
            case 'opcion2':
                resultadoTexto.textContent = "Incorrecto";
                resultadoVideo.src = document.querySelector('video source[data-option="opcion2"]').src;
                textoAdicional.textContent = "Chocaste ya que olvidaste colocarte el cinturón de seguridad.";
                break;
            case 'opcion3':
                resultadoTexto.textContent = "Correcto";
                resultadoVideo.src = document.querySelector('video source[data-option="opcion3"]').src;
                textoAdicional.textContent = "Muy bien, ahora estás listo para manejar de manera segura.";
                break;
        }

        resultadoVideo.load(); // Cargar el nuevo video
        resultadoVideo.play(); // Reproducir el video

        document.getElementById('opciones-container').style.display = 'none';
        document.getElementById('resultado').style.display = 'block';
    } else {
        resultadoTexto.textContent = 'Por favor, selecciona una opción antes de enviar.';
    }
}

function volverAlMenu() {
    document.getElementById('resultado').style.display = 'none';
    document.getElementById('menu').style.display = 'block';
}

console.log("Usuarios Registrados:");
const usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];
usuarios.forEach(usuario => {
    console.log("Nombre: " + usuario.nombre + ", Email: " + usuario.email);
});

// Se eliminó la función de verificación de acceso a usuarios

// Llamada a la verificación eliminada
// if (window.location.pathname.endsWith('usuarios.html')) {
//     verificarAccesoUsuarios();
// }

function registrarUsuario(event) {
    event.preventDefault();

    const nombre = document.getElementById("nombre").value;
    const email = document.getElementById("emailRegistro").value;
    const password = document.getElementById("passwordRegistro").value;

    let usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];

    usuarios.push({ nombre, email, password });

    localStorage.setItem('usuarios', JSON.stringify(usuarios));

    alert("Registro exitoso para: " + nombre);
    
    console.log("Usuarios después del registro:", usuarios);

    // Redirigir a la página de usuarios para ver la lista
    window.location.href = 'usuarios.html';
}
function registrarUsuario(event) {
    event.preventDefault();

    const nombre = document.getElementById("nombre").value;
    const email = document.getElementById("emailRegistro").value;
    const password = document.getElementById("passwordRegistro").value;

    let usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];

    usuarios.push({ nombre, email, password });

    localStorage.setItem('usuarios', JSON.stringify(usuarios));

    alert("Registro exitoso para: " + nombre);

    // Redirigir a la página de usuarios para ver la lista
    window.location.href = 'usuarios.html';
}
