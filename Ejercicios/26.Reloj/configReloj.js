const hora = document.getElementById('in-hora');
const fecha = document.getElementById('in-fecha');



function mostrarReloj(){
    let fechaCompleta = new Date();
    let hr = fechaCompleta.getHours();
    let mn = fechaCompleta.getMinutes();
    let sg = fechaCompleta.getSeconds();

    let dy = fechaCompleta.getDay();
    let numDy = fechaCompleta.getDate();
    let mt = fechaCompleta.getMonth();
    let yr = fechaCompleta.getFullYear();

    if(hr<10) hr = "0"+hr;

    if(mn<10) mn = "0"+mn;

    if(sg<10) sg = "0"+sg;

    switch (dy){
    case 1:
        dy = 'Lunes';
    break;
    case 2:
        dy = 'Martes';
    break;
    case 3:
        dy = 'Miércoles';
    break;
    case 4:
        dy = 'Jueves';
    break;
    case 5:
        dy = 'Viernes';
    break;
    case 6:
        dy = 'Sábado'; 0
    break;
    case 7:
        dy = 'Domingo'; 
    break;
    }

    switch (mt){
        case 0:
            mt = 'enero';
        break;
        case 1:
            mt = 'febrero';
        break;
        case 2:
            mt = 'marzo';
        break;
        case 3:
            mt = 'abril';
        break;
        case 4:
            mt = 'mayo';
        break;
        case 5:
            mt = 'junio';
        break;
        case 6:
            mt = 'julio'; 
        break;
        case 7:
            mt = 'agosto'; 
        break;
        case 8:
            mt = 'septiembre'; 
        break;
        case 9:
            mt = 'octubre'; 
        break;
        case 10:
            mt = 'noviembre'; 
        break;
        case 11:
            mt = 'diciembre'; 
        break;
        }
    hora.innerHTML = `${hr}:${mn}:${sg}`;
    fecha.innerHTML = `${dy}, ${numDy} de ${mt} de ${yr}`;
}

setInterval(mostrarReloj,1000);
