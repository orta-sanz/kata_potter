describe('Carrito', function() {
	it("El precio total de la compra debe ser 0", function() {
		expect(devuelveTotal()).toBe(0);
	});
});