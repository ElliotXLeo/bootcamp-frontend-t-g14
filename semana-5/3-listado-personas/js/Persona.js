class Persona {

  static contadorPersona = 0;

  _nombre;
  _apellido;

  constructor(nombre, apellido) {
    this._id = ++Persona.contadorPersona;
    this._nombre = nombre;
    this._apellido = apellido;
  }

  get id() {
    return this._id;
  }

  get nombre() {
    return this._nombre;
  }

  set nombre(nombre) {
    this._nombre = nombre;
  }

  get apellido() {
    return this._apellido;
  }

  set apellido(apellido) {
    this._apellido = apellido;
  }

} 