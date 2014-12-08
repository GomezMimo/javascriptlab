var patron = null;
var vocales = Array("a", "e", "i", "o", "u");
var consonantes = Array("b", "c", "d","f", "g", "h", "j", "k","l","m","n","p","q","r","s","t","v","w","x","y","z");
var cantidad_nombres = 0;

$( document ).ready(function() {
    
    $("#generar").click(function(){
    	generar_nombres();
    });

});

function generar_nombres(){
	patron = $("#patron").val();
	cantidad_nombres = $("#cantidad").val();

	var html = "Patron : <strong>" + patron + "</strong>";
	html += "<br/>Cantidad : <strong>" + cantidad_nombres + "</strong>";

	for(i=0; i<cantidad_nombres; i++){
		var nombre = "";
		for(j=0; j<=patron.length; j++){
			if(patron.charAt(j) == 'c'){
				nombre += consonantes[Math.floor(Math.random() * consonantes.length)];				
			}else if(patron.charAt(j) == 'v'){
				nombre += vocales[Math.floor(Math.random() * vocales.length)];
			}			
		}
		html += "<br> " + (i+1) + ". " + nombre;
	}

	$("#resultado").html(html);

}