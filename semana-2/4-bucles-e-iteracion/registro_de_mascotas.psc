Proceso registro_de_mascotas
	Definir nombres Como Caracter;
	Definir nombreIngresado Como Caracter;
	Definir respuesta Como Entero;
	nombres = '';
	
	Repetir
		Escribir 'Escribir nombre de la mascota';
		Leer nombreIngresado;
		Escribir '¿Desea registrar otra mascota? Sí (1) No (2)';
		Leer respuesta;
		nombres = nombres + nombreIngresado + ', ';
	Hasta Que respuesta == 2 
	
	Escribir 'Ha registrado a : ' + nombres;
FinProceso
