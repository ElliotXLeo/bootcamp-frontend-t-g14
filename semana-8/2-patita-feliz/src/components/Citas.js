const Citas = ({ citas, eliminarCita }) => {
  const tituloCitas = citas.length === 0 ? '🐤Registra tu cita🐤' : '🐤Administra tus citas🐤';

  let citaWhatsApp = 'https://api.whatsapp.com/send?phone=51997045329&text=Confirmo%20mi%20cita:';

  const handleSubmit = (id) => {
    eliminarCita(id);
  };

  return (
    <>
      <h3>{tituloCitas}</h3>
      {citas.map((element) => {
        const { id, formCitaNombreMascota, formCitaNombrePropietario, formCitaFecha, formCitaHora, formCitaSintomas } = element;
        return (
          <div className="cita animate__animated animate__fadeInUp" key={id}>
            <p>Mascota: <span>{formCitaNombreMascota}</span></p>
            <p>Propietario: <span>{formCitaNombrePropietario}</span></p>
            <p>Fecha: <span>{formCitaFecha}</span></p>
            <p>Hora: <span>{formCitaHora}</span></p>
            <p>Síntomas: <span>{formCitaSintomas}</span></p>
            <div className="d-grid gap-2">
              <a
                href={`${citaWhatsApp} Mascota: ${formCitaNombreMascota}, Dueño: ${formCitaNombrePropietario}, Fecha: ${formCitaFecha}, Hora: ${formCitaHora}, Síntomas: ${formCitaSintomas}.`}
                className="btn btn-primary"
                target="_blank"
                rel="noreferrer"
              >
                🦄 Confirmar Cita 🦄
              </a>
              <button
                className="btn btn-danger"
                onClick={() => handleSubmit(id)}
              >
                🐹 Eliminar Cita 🐹
              </button>
            </div>
          </div>
        );;
      })}
    </>
  );
}

export default Citas;