class Usuario {
    constructor(nombre, apellido, libros, mascotas){
        this.nombre = nombre;
        this.apellido = apellido;
        this.libros = libros;
        this.mascotas = mascotas;
    }

    getFullName() {
        return console.log(`Nombre completo del usuario ${this.nombre} ${this.apellido}`);
    }

    addMascota(nombre) {
        this.mascotas.push(nombre);   
        return console.log(`El nombre de su mascota es: ${this.mascotas}`);
    }
    
    countMascotas() {
        return console.log(`La cantidad de mascotas del usuario es: ${this.mascotas.length}`); 
    }

    addBook(nombre, autor){
        this.libros.push({nombre, autor});
    }

    getBookName() {
        const nameBooks = this.libros.map((item) => item.nombre);
        return console.log(`Libros del usuario: ${nameBooks}`);
    }

}

const usuario = new Usuario('Orlando', 'Repetto', [{nombre: 'La sombra', autor: 'John Katzenbach'}], ['rocko', 'tomi'])

usuario.getFullName();

usuario.addMascota(prompt('Ingrese el nombre de su mascota: '));

usuario.countMascotas();

usuario.addBook('El profesor', 'John Katzenbach');

usuario.addBook(prompt(`Ingrese el nombre y autor de su libro: `, `Nombre del libro`), prompt('', `Autor`));

usuario.getBookName();