describe('Carrito', function() {
	it('Debe tener 0 articulos', function() {
		expect(devuelveCantidad()).toBe(0);
	});

	it("El precio total de la compra debe ser 0", function() {
		expect(devuelveTotal()).toBe(0);
	});

	it('El carrito tiene los articulos iniciados a 0', function() {
		expect(devuelveArticuloCarro(1)).toBe(0);
	});
});