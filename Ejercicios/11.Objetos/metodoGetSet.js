let persona = {
    nombre: "Persona 1",
    edad: 25,
    idioma: 'es',
    get lang(){
        return this.idioma.toUpperCase();
    },
    set lang(lang){
        this.idioma = lang.toUpperCase();
    },
    get presentacion(){
        return "Hola soy la "+this.nombre+" y mi edad es: "+this.edad;
    }
}

console.log(persona.presentacion);
console.log(persona.lang);
persona.lang="en";
console.log(persona.lang);
