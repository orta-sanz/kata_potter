describe('Carrito', function() {
	it("El precio total de la compra debe ser 0", function() {
		expect(devuelveTotal()).toBe(0);
	});

	it('El carrito tiene los articulos iniciados a 0', function() {
		expect(devuelveArticuloCarro(1)).toBe(0);
	});
});