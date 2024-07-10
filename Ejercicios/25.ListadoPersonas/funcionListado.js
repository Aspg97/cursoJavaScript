const lista = document.querySelector('.listado');
const nombre = document.getElementById('in-nom');
const apellido = document.getElementById('in-ape');

// Primera forma de agregar listado

/*function add(){
    let persona = document.createElement('li');
    console.log(nombre.value + apellido.value);
    persona.innerHTML = nombre.value + ' ' +apellido.value;
    lista.appendChild(persona);
    nombre.value = "";
    apellido.value = '';
}*/

// Segunda forma de hacerlo con objetos
const personas = [
    new Persona('Anthony','Pacheco'),
    new Persona('Steven','Gallegos')
]

function mostrarListado(){
    let contenido = '';
    for(let persona of personas){
        contenido += `<li>${persona.nombre} ${persona.apellido}</li>`
    }
    lista.innerHTML=contenido;
}

function add(){
    const formulario = document.forms['form-agregar'];
    const nombre2 = formulario['in-nom'];
    const apellido2 = formulario['in-ape'];
    if(nombre2.value != "" && apellido2.value!=""){
        let persona = new Persona(nombre2.value,apellido2.value);
        personas.push(persona);
        mostrarListado();
        nombre2.value = "";
        apellido2.value = '';
    }else alert("ingrese todos los datos");
}
