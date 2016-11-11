function intext(){

	var txt=document.getElementById("mensajes").value
	document.getElementById("mensajes").value="";

	var insertaTexto= document.createTextNode(txt);

	
	var cajatextos=document.getElementById("conversacion");
	var conversation=document.createElement("div");
	var textoNuevo=document.createElement("div");
	var parrafo=document.createElement("p");
	var tiempo=document.createElement("div");

	conversation.setAttribute("class","w-message w-message-out");
	textoNuevo.setAttribute("class","w-message-text");
	tiempo.setAttribute("class","time");

	conversation.appendChild(textoNuevo);
	textoNuevo.appendChild(parrafo);
	textoNuevo.appendChild(tiempo);
	parrafo.appendChild(insertaTexto);
	cajatextos.appendChild(conversation);



}

function elige(){

	//var panelChat=document.getElementById("pchat");
	var entradaChat=document.getElementById("chat");
	entradaChat.innerHTML="";
	var avatares=document.getElementsClassName("avatar");
	avatares.innerHTML="";
	var fotos=document.getElementsClassName("wh-44")

	var entradamensaje=document.createElement("div");
	var mensajetexto=document.createElement("div");
	var titulo=document.createElement("h5");
	var parrafotexto=document.createElement("p");
	var tiempoChat=document.createElement("div");

	entradamensaje.setAttribute("class","w-message w-message-in");
	mensajetexto.setAttribute("class","w-message-text");
	titulo.setAttribute("blue-1");
	tiempoChat.setAttribute("time");

	avatares.appendChild(fotos);
	entradaChat.appendChild(entradamensaje);
	entradamensaje.appendChild(mensajetexto);
	mensajetexto.appendChild(titulo);
	mensajetexto.appendChild(parrafotexto);
	mensajetexto.appendChild(time);





	/*panelChat.removeChild(entradaChat);*/
}