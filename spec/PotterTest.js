describe('Carrito', function() {
	it('El precio total de la compra es de 0 euros', function() {
		expect(devuelveTotal()).toBe(0);
	});
});