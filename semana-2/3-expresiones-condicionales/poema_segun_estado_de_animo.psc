Proceso poema_segun_estado_de_animo
	Definir estadoAnimo Como Entero;
			
	Escribir 'Ingrese su estado de �nimo 1 (Feliz) | 2 (Desamor) | 3 (Enamorado)';
	Leer estadoAnimo;
	
	Segun estadoAnimo Hacer
		1:
			Escribir '�Qu� es poes�a?, dices, mientras clavas en mi pupila tu pupila azul, �Qu� es poes�a! �Y t� me lo preguntas? Poes�a... eres t�.';
		2:
			Escribir 'Asomaba a sus ojos una l�grima y a mi labio una frase de perd�n; habl� el orgullo y se enjugo su llanto y la frase en mis labios expir�. Yo voy por un camino: ella, por otro; pero al pensar en nuestro mutuo amor, yo digo a�n, �por qu� call� aquel d�a? Y ella dir�, ,�por qu� no llor� yo?';
		3:
			Escribir '�Qu� es poes�a?, dices, mientras clavas en mi pupila tu pupila azul, �Qu� es poes�a! �Y t� me lo preguntas? Poes�a... eres t�.';
		De Otro Modo:
			Escribir 'No cuento con poemas para ti';
	FinSegun
	
FinProceso
