//Esto se ejecuta al cargar la página
(function (){
    //asignamos el metodo al boton
    document.getElementById('mostrar_ocultar').onclick = ocultarColumna;
})();
//Oculta o muestra columna
function ocultarColumna () {
    // alert('hola');
    //aquí utilizamos el id de la tabla, en este caso es 'tabla'
    var i,
        columna = 15,
        fila = document.getElementById('tabla').getElementsByTagName('tr');

    //mostramos u ocultamos la cabecera de la columna 
    if (fila[0].getElementsByTagName('th')[columna].style.display === 'none') {
        fila[0].getElementsByTagName('th')[columna].style.display = '';
    } else {
        fila[0].getElementsByTagName('th')[columna].style.display = 'none';
    }
    //mostramos u ocultamos las celdas de la columna seleccionada
    for ( i = 1; i < fila.length; i ++ ) {
        if (fila[i].getElementsByTagName('td')[columna].style.display === 'none') {
            fila[i].getElementsByTagName('td')[columna].style.display = '';
        } else {
            fila[i].getElementsByTagName('td')[columna].style.display = 'none';
        }
    }
}