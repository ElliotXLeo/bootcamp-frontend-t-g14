Proceso adivina_el_numero
	Definir numeroAdivinar Como Entero;
	Definir numeroIngresado Como Entero;
	numeroAdivinar = azar(100);
	
	Escribir '¿En qué número estoy pensando?';
	Leer numeroIngresado;
	
	Mientras numeroIngresado <> numeroAdivinar Hacer
		Si (numeroIngresado > numeroAdivinar) Entonces
			Escribir '¡Te has pasado!';
		SiNo
			Escribir '¡Te falta para llegar!';
		FinSi
		Escribir 'Vuelve a intentarlo';
		Leer numeroIngresado;
	FinMientras
	Escribir '¡Felicidades lo lograste!';
FinProceso
