Proceso calculadora_tecsup_3001
	Definir numero1 Como Entero;
	Definir numero2 Como Entero;
	Definir suma Como Entero;
	Definir resta Como Entero;
	Definir producto Como Entero;
	Definir cociente Como Real;
	
	Escribir 'Ingrese el n?mero 1';
	Leer numero1;
	Escribir 'Ingrese el n?mero 2';
	Leer numero2;
	
	// suma <- numero1 + numero2;
	suma = numero1 + numero2;
	resta = numero1 - numero2;
	producto = numero1 * numero2;
	
	cociente = 0;
	
	Si (numero2<>0) Entonces
		cociente = numero1 / numero2;
	FinSi
	
	Escribir 'Suma: ', (suma);
	Escribir 'Resta: ', (resta);
	Escribir 'Producto: ', (producto);
	Escribir 'Cociente: ', (cociente);
	
	Escribir 'Si ingresó cero en el número 2 no se realizará la división';
FinProceso
