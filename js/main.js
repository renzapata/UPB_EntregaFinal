
let frm_login, frm_registro, frm_entrAnimal, home, btn_event;
let btn_ir_a_registro, btn_enviar_registrar,btn_enviar;
var btnevent;
let correo;
let img_perfil = "https://icons.iconarchive.com/icons/jonathan-rey/star-wars-vehicles/48/Death-Star-2nd-icon.png";

window.onload = function(){
  frm_login = document.getElementById("frm_login");
  btn_enviar = document.getElementById("btn_enviar");
  btn_enviar_registrar = document.getElementById("btn_enviar_registrar");
  frm_registro = document.getElementById("frm_registro");
  home = document.getElementById("home");
  btn_ir_a_registro = document.getElementById("btn_ir_a_registro");
  //btn_event= document.getElementById("btn_event");

  //btn_enviar.addEventListener("click",validar);
  //btn_enviar_registrar.addEventListener("click",registrar);

     btnevent = document.getElementById('btn_event');
    btnevent.addEventListener('click',EntrAnimal);
  configurar_login();
  configurar_registro();
  init;
}

function EntrAnimal(){
  //document.getElementById('menu1').style.display = 'none';
  document.getElementById('frm_EntrAnimal').style.display = 'block';
  menu1.classList.toggle('show');
  frm_EntrAnimal.classList.toggle('show');
}

function configurar_login(){
    frm_login.addEventListener('submit', event => {
      event.preventDefault();
      event.stopPropagation();
      if (frm_login.checkValidity()) {
       compararClave();
      }
      frm_login.classList.add('was-validated')
    }, false);
}

function configurar_registro(){
  frm_registro.addEventListener('submit', event => {
      event.preventDefault();
      event.stopPropagation();
      if (frm_registro.checkValidity()) 
      {
         registrar();
      }
      frm_registro.classList.add('was-validated');
    }, false);
}

function irARegistro(event){
  frm_login.reset();
  cambiarFormulario();
}

function cambiarFormulario()
{
  frm_login.classList.toggle("ocultar");
  frm_registro.classList.toggle("ocultar");
}

function compararClave(){
  let correo = document.getElementById("correo");
  let clave = document.getElementById("clave");
  event.preventDefault();
  let usuario = JSON.parse(localStorage.getItem("usuario"));
  let html;
  if(correo.value==usuario.correo && clave.value== usuario.clave)
  {
    frm_login.reset();
    frm_login.classList.remove('was-validated');
    frm_login.classList.add("ocultar");
    home.classList.remove("ocultar");
    
    document.getElementById('frm_login').style.display = 'none';
    



    html = `
      <nav>
        <img src=" class="sidebarToggler" />
        <a href="javascript:void(0);" id="btn_cerrar_sesion" onclick="cerrarSesion();">IR AL MENU</a>
      </nav>
      <h4>Pagina intermedia para llegar al menu principal.  Hola ${usuario.nombre}, puedes ir al menu principal>> </h2> 
      <h5>Luego en el menu principal al dar click en la derecha arriba menu rojo.  a medida que presionas desplega y oculta el menu lateral</h3> 
      <h6>En eso estoy trabajando y entrego de manera pacial</h4> 
       
     `;
    home.innerHTML = html;
    
  }
  else{
    alert("Datos incorrectos");
  }
}

function cerrarSesion(event){
  frm_login.classList.remove("ocultar");
  home.classList.add("ocultar");
}

function registrar(){
 
  let nombre = document.getElementById("nombre");
  let apellido = document.getElementById("apellido");
  let celular = document.getElementById("celular");
  let direccion = document.getElementById("direccion");
  let correo = document.getElementById("correo1");
  let clave = document.getElementById("clave1");
  let usuario = {
    nombre:nombre.value,
    apellido:apellido.value,
    celular:celular.value,
    direccion:direccion.value,
    correo:correo.value,
    clave:clave.value
  };
  
  localStorage.setItem("usuario",JSON.stringify(usuario));
  alert("¡Muy bien, registro exitoso!")
  cambiarFormulario();

  function EntradAnimal(){
    frm_entrAnimal.addEventListener('submit', event => {
      event.preventDefault();
      event.stopPropagation();
      if (frm_login.checkValidity()) {
       compararClave();
      }
      frm_entrAnimal.classList.add('was-validated')
    }, false);
}

}

//SIDEBAR
// Visible y no visible
//window.onload = init;

  /* Sidebar */// Mostrar por CLASS: Menu1
  var sidebar = document.querySelector('.sidebar');
  const sidebarToggler = document.querySelector('.sidebar_toggler');
 
  // Mostrar por CLASS: Menu1 Menu ppal
  sidebarToggler.addEventListener('click', () => {
   // sidebar.classList.remove('show');
  // ocultar();
    menu1.classList.toggle('show');
   // alert ("This is an alert dialog box ocultar togg"); 
  });

// Mostrar por ID:
function init() {
    var btnes, btnen,bteven, btnctr, btnpry, btnhat, btnotr, btnean, ff243;

  //  bteven = document.getElementById('btn_event');
  //  bteven.addEventListener('click', frm_EntrAnimal);
   
    btnpry = document.getElementById('btn_proy');
    btnpry.addEventListener('click', menu23);

    btnotr = document.getElementById('btn_otrs');
    btnotr.addEventListener('click', menu25);
    
  }


  function ocultar() {
    //document.getElementById('menu1').style.display = 'none';
    document.getElementById('menu21').style.display = 'none';
    document.getElementById('menu22').style.display = 'none';
    document.getElementById('menu23').style.display = 'none';
    document.getElementById('menu24').style.display = 'none';
    document.getElementById('menu25').style.display = 'none';
    document.getElementById('s3').style.display = 'none';
    document.getElementById('f243').style.display = 'none';
    document.getElementById('f211').style.display = 'none';
    document.getElementById('f212').style.display = 'none';
    document.getElementById('en1').style.display = 'none';
    document.getElementById('frm_login').style.display = 'none';

    //sidebar.classList.remove('show');
    
    alert ("This is an alert dialog box ocultar"); 
  }
    
  
// Toggling the  Menu21 Eventos
btn_event.addEventListener('click', () => {
  menu1.classList.remove('show');
  frm_EntrAnimal.classList.toggle('show');
});

// Toggling the  Menu22 controles
btn_ctrl.addEventListener('click', () => {
  menu1.classList.remove('show');
  menu22.classList.toggle('show');
});

// Toggling the  Menu23 Presupuesto
btn_proy.addEventListener('click', () => {
  menu1.classList.remove('show');
  menu23.classList.toggle('show');
});

// Toggling the  Menu24 Hato
btn_hato.addEventListener('click', () => {
  //sidebar.classList.remove('show');
  menu1.classList.remove('show');
  menu24.classList.toggle('show');
  alert ("This is an alert dialog box f24");  
});




// Formulario servicio animal  
btn_serv.addEventListener('click', () => {
  sidebar.classList.remove('show');
  menu21.classList.remove('show');
  f211.classList.toggle('show');

});

// Formulario secado animal  
btn_seca.addEventListener('click', () => {
  sidebar.classList.remove('show');
  menu21.classList.remove('show');
  f212.classList.toggle('show');
});

// Formulario Parto animal  
btn_part.addEventListener('click', () => {
  ocultar();
  sidebar.classList.remove('show');
  menu21.classList.remove('show');
  f213.classList.toggle('show');
  
});

// Formulario Tratamiento animal  
btn_trat.addEventListener('click', () => {
  sidebar.classList.remove('show');
  menu21.classList.remove('show');
  f211.classList.toggle('show');
});

// Formulario secado animal  
btn_srv.addEventListener('click', () => {
  sidebar.classList.remove('show');
  menu21.classList.remove('show');
  f211.classList.toggle('show');
});

// Formulario entrada animal  
btn_eanim.addEventListener('click', () => {
  sidebar.classList.remove('show');
  menu24.classList.remove('show');
  f243.classList.toggle('show');
  alert ("This is an alert dialog box f24");  
});

// Toggling the  Menu25 otros
btn_otrs.addEventListener('click', () => {
  menu1.classList.remove('show');
  menu25.classList.toggle('show');
});

// Toggling the  f243
btn_entra.addEventListener('click', () => {
  

});


function menu21s() {
  //sidebar.classList.remove('show');
  
  document.getElementById('menu21').style.display = 'block';
  document.getElementById('menu1').style.display = 'none';
}

function menu99() {
  document.getElementById('es1').style.display = 'block';
  document.getElementById('en1').style.display = 'none';
}

function Menu88() {
  document.getElementById('en1').style.display = 'block';

  
}
