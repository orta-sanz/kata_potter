describe('Carrito', function() {
	it('El precio total de la compra es de 0 euros', function() {
		expect(devuelveTotal()).toBe(0);
	});

	it('La cantidad de libros de Potter #1 en el carro debe ser 0', function() {
		expect(devuelveCantidadLibro()).toBe(0);
	});
});