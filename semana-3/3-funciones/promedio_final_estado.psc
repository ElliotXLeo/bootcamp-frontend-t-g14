SubProceso notaFinal <- promedio ( primeraNota, nota2, TerceraNota )
	Definir notaFinal Como Real;
	notaFinal = (primeraNota + nota2 + TerceraNota) / 3;
FinSubProceso

SubProceso estado(notaFinal)
	Si notaFinal>=13 Entonces
        Escribir "Aprobaste";
    SiNo
        Escribir "Desaprobaste";
    FinSi
FinSubProceso

Proceso promedio_final_estado
	Definir nota1 Como Entero;
	Definir nota2 Como Entero;
	Definir nota3 Como Entero;
	Definir notaFinal Como Real;
		
	Escribir 'Ingrese sus 3 notas';
	Leer nota1;
	Leer nota2;
	Leer nota3;
	
	notaFinal = promedio(nota1, nota2, nota3);
	Escribir 'Su nota final es :' + ConvertirATexto(notaFinal);
	estado(notaFinal);

FinProceso