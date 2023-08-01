var salida = 1;
var controlador = 0;
let cantidad = prompt("Ingrese la cantidad de libros que quiere registrar: ");
const libros = new Array(cantidad);
prompt("A continuación agregue sus datos para crear su cuenta");
let nombreU = prompt("Nombre: ");
let dniU = prompt("DNI: ");
usuario = new Usuario(nombreU, dniU, 0);
prompt("¡Bienvenido " + usuario.nombre + "!");
do {
  var opcion1 = prompt(
    "1 - Administrar libros \n2 - Administrar cuenta \n3 - Comprar libros \n4 - Salir"
  );
  switch (opcion1) {
    case "1":
      do {
        var opcion2 = prompt(
          "1 - Agregar libro \n2 - Buscar libro \n3 - Ver libros \n4 - Salir"
        );
        switch (opcion2) {
          case "1":
            if (controlador < cantidad) {
              let titulo = prompt("Título del libro:");
              let genero = prompt("Género del libro:");
              let precio = prompt("Precio del libro:");
              var posicion = controlador;
              libros[controlador] = new Libro(titulo, genero, precio, posicion);
              controlador++;
            }
            if (controlador >= cantidad) {
              prompt("Ya no hay más lugar para agregar libros");
            }
            break;
          case "2":
            let tituloBuscar = prompt(
              "Ingrese el título del libro que busca: "
            );
            var x = 0;
            for (i = 0; i < cantidad; i++) {
              if (libros[i] != null) {
                if (tituloBuscar == libros[i].titulo) {
                  prompt(
                    "Título:" +
                      libros[i].titulo +
                      "\nGénero: " +
                      libros[i].genero +
                      "\nPrecio: " +
                      libros[i].precio
                  );
                  x = 1;
                  break;
                }
              }
            }
            if (x == 0) {
              prompt("Error: no se encontró ese título");
            }
            break;
          case "3":
            if (controlador != 0) {
              for (var i = 0; i <= posicion; i++) {
                prompt(
                  "Título:" +
                    libros[i].titulo +
                    "\nGénero: " +
                    libros[i].genero +
                    "\nPrecio: " +
                    libros[i].precio
                );
              }
            } else {
              prompt("Error! no hay libros cargados");
            }
            break;
          case "4":
            break;
        }
      } while (opcion2 != 4);
      break;
    case "2":
      do {
        var opcion2 = prompt("1 - Agregar Saldo \n2 - Ver Datos \n3 - Salir");
        switch (opcion2) {
          case "1":
            let saldoString = prompt("Ingrese su saldo a depositar: ");
            let saldo = parseInt(saldoString);
            usuario.dinero = usuario.dinero + saldo;
            prompt("Cargado exitosamente! su saldo es de: " + usuario.dinero);
            break;
          case "2":
            prompt(
              "Nombre: " +
                usuario.nombre +
                "\nDNI: " +
                usuario.dni +
                "\nSaldo: " +
                usuario.dinero
            );
            break;
          case "3":
            break;
        }
      } while (opcion2 != 3);
      break;
    case "3":
      if (controlador != 0) {
        for (i = 0; i < cantidad; i++) {
          for (i = 0; i < cantidad; i++) {
            if (libros[i] != null) {
              prompt(
                "Título: " +
                  libros[i].titulo +
                  "\nGénero: " +
                  libros[i].genero +
                  "\nPrecio: " +
                  libros[i].precio
              );
            }
          }
        }
        let tituloLibro = prompt(
          "Ingrese el título del libro que quiere comprar: "
        );
        for (i = 0; i < cantidad; i++) {
          if (libros[i] != null) {
            if (libros[i].titulo == tituloLibro) {
              if (libros[i].precio < usuario.dinero) {
                usuario.dinero = usuario.dinero - libros[i].precio;
                prompt("¡Usted ha comprado el libro satisfactoriamente!");
                break;
              } else {
                prompt(
                  "¡Error! no posee el dinero suficiente para esta compra"
                );
                break;
              }
            } else {
              prompt("¡Error! no existe un libro con ese título");
            }
          }
        }
      } else {
        prompt("Error! no hay libros cargados");
      }
      break;
    case "4":
      break;
  }
} while (opcion1 != 4);

function Libro(titulo, genero, precio, id) {
  this.titulo = titulo;
  this.genero = genero;
  this.precio = precio;
  this.id = id;
}

function Usuario(nombre, dni, dinero) {
  this.nombre = nombre;
  this.dni = dni;
  this.dinero = dinero;
}
