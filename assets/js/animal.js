export default class Animal {
        constructor(nombre, edad, img, comentarios, sonido) {
            this._nombre = nombre;
            this._edad = edad;
            this._img = img;
            this._comentarios = comentarios;
            this._sonido = sonido;
        }
        get nombre() {
            return _nombre;
        }
        get edad() {
            return _edad;
        }
        get img() {
            return _img;
        }
        set comentarios(nuevosComentarios) {
            _comentarios = nuevosComentarios;
        }
        set sonido(nuevoSonido) {
            _sonido = nuevoSonido;
        }
};
