describe('Carrito', function() {
	it('Debe tener 0 articulos', function() {
		expect(devuelveCantidad()).toBe(0);
	});
	
	it("El precio total de la compra debe ser 0", function() {
		expect(devuelveTotal()).toBe(0);
	});
});