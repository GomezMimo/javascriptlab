var patron = null;
var vocales = "AEIOU";
var consonantes = "BCDFGHJKLMNOPQRSTUVWXYZ";
var cantidad_nombres = 0;

$( document ).ready(function() {
    
    $("#generar").click(function(){
    	generar_nombres();
    });

});

function generar_nombres(){
	patron = $("#patron").val().toLowerCase();
	cantidad_nombres = $("#cantidad").val();

	var textoHtml = "<p style='margin-left: 20px'>Patron : <label>" + patron + "</label></p>";
	textoHtml += "<p style='margin-left: 20px'>Cantidad : <label>" + cantidad_nombres + "</label></p>";
	$("#entradas").html(textoHtml);

	textoHtml = "";
	for(i=0; i<cantidad_nombres; i++){
		var nombre = "";
		for(j=0; j<=patron.length; j++){
			if(patron.charAt(j).toLowerCase() == 'c'){
				nombre += consonantes.charAt(Math.floor(Math.random() * consonantes.length));
			}else if(patron.charAt(j).toLowerCase() == 'v'){
				nombre += vocales.charAt(Math.floor(Math.random() * vocales.length));
			}			
		}
		textoHtml += "<tr><th> " + (i+1) + "</th><td>" + nombre + "</td></tr>";
	}

	$("#resultado table tbody").html(textoHtml);

}