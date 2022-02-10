Proceso poema_segun_estado_de_animo
	Definir estadoAnimo Como Entero;
			
	Escribir 'Ingrese su estado de ánimo 1 (Feliz) | 2 (Desamor) | 3 (Enamorado)';
	Leer estadoAnimo;
	
	Segun estadoAnimo Hacer
		1:
			Escribir '¿Qué es poesía?, dices, mientras clavas en mi pupila tu pupila azul, ¡Qué es poesía! ¿Y tú me lo preguntas? Poesía... eres tú.';
		2:
			Escribir 'Asomaba a sus ojos una lágrima y a mi labio una frase de perdón; habló el orgullo y se enjugo su llanto y la frase en mis labios expiró. Yo voy por un camino: ella, por otro; pero al pensar en nuestro mutuo amor, yo digo aún, ¿por qué callé aquel día? Y ella dirá, ,¿por qué no lloré yo?';
		3:
			Escribir '¿Qué es poesía?, dices, mientras clavas en mi pupila tu pupila azul, ¡Qué es poesía! ¿Y tú me lo preguntas? Poesía... eres tú.';
		De Otro Modo:
			Escribir 'No cuento con poemas para ti';
	FinSegun
	
FinProceso
