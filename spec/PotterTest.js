describe('Carrito', function() {
	it('El precio total de la compra es de 0 euros', function() {
		expect(devuelveTotal()).toBe(0);
	});

	it('La cantidad de libros de Potter #1 en el carro debe ser 0', function() {
		expect(devuelveCantidadLibro(1)).toBe(0);
	});

	it('Añadimos dos libros de Potter #4 al carro', function() {
		meteLibro(1, 2);

		expect(devuelveCantidadLibro(1)).toBe(2);
	});

	it('El total de libros que hay dentro del carro es 0', function() {
		expect(devuelveCantidadTotal()).toBe(0);
	});
});