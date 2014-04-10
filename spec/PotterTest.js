describe('Consultas al carrito', function() {
	it('El precio total de la compra es de 0 euros', function() {
		expect(devuelveTotalEuros()).toBe(0);
	});

	it('La cantidad de libros de Potter #1 en el carro debe ser 0', function() {
		expect(devuelveCantidadLibro(1)).toBe(0);
	});

	it('El total de libros que hay dentro del carro es 0', function() {
		expect(devuelveCantidadTotal()).toBe(0);
	});
});

describe('Operaciones con el carrito', function() {
	
});