var libros = [0, 0 ,0 ,0 ,0];
var carro = {total: 0, productos: libros};

function devuelveTotal() {
	return carro.total;
}

function devuelveCantidadLibro(index) {
	return carro.productos[index];
}

function meteLibro(index, cantidad) {
	carro.productos[index] += cantidad;
}