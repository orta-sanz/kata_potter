//var articulos	= {potter_1: 0, potter_2: 0, potter_3: 0, potter_4: 0, potter_5: 0};
var carro 		= 	{
					cantidad: 0, 
					articulos: {'potter_1': 0, 'potter_2': 0, 'potter_3': 0, 'potter_4': 0, 'potter_5': 0}, 
					total_euros: 0
					};

function devuelveCantidad() {
	return carro.cantidad;
}

function devuelveArticuloCarro(index) {
	switch (index) {
		case 1: 
				return carro.articulos.potter_1
				break;
		case 2: 
				return carro.articulos.potter_2
				break;
		case 3: 
				return carro.articulos.potter_3
				break;
		case 4: 
				return carro.articulos.potter_4
				break;
		case 5: 
				return carro.articulos.potter_5
				break;
	}
}

function devuelveTotal() {
	return carro.total_euros;
}