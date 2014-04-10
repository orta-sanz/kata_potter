var libros = [0, 0 ,0 ,0 ,0];
var carro = {totalEuros: 0, productos: libros, totalProductos: 0};

function devuelveTotalEuros() {
	return carro.totalEuros;
}

function devuelveCantidadLibro(index) {
	return carro.productos[index];
}

function devuelveCantidadTotal() {
	return carro.totalProductos;
}

function meteLibro(index, cantidad) {
	carro.productos[index] += cantidad;
	carro.totalProductos += cantidad;	
}