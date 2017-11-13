//AÃ‘O	INVENTO	INVENTOR
//	{anyo:1804,	invento: 'LOCOMOTORA',	nombre:	'RICHARD TREVITHICK'},
var inventores =[
	{anyo:1804,	invento: 'LOCOMOTORA',	nombre:	'RICHARD, TREVITHICK'},
	{anyo:1826,	invento: 'FOTOGRAFÃA',	nombre:	'NICÃ‰PHORE, NIEPCE'},
	{anyo:1846,	invento: 'ANESTESIA',	nombre:	'WILLIAM, MORTON'},
	{anyo:1846,	invento: 'MÃQUINA DE COSER',	nombre:	'ELÃAS, HOWE'},
	{anyo:1851,	invento: 'ASCENSOR',	nombre:	'ELISHA, OTIS GRAVE'},
	{anyo:1854,	invento: 'LÃMPARA INCANDESCENTE'  ,	nombre:	'HEINRICH, GÃ–BEL'},
	{anyo:1854,	invento: 'TELÃ‰FONO',	nombre:	'ANTONIO, MEUCCI'},
	{anyo:1859,	invento: 'SUBMARINO',	nombre:	'NARCISO, MONTURIOL'},
	{anyo:1861,	invento: 'BICICLETA',	nombre:	'PIERRE, MICHAUX'},
	{anyo:1863,	invento: 'DIRIGIBLE',	nombre: 'SOLOMON, ANDREWS'},
	{anyo:1866,	invento: 'TERMÃ“METRO CLÃNICO',	nombre:	'THOMAS, CLIFFORD ALLBUTT'},
	{anyo:1872,	invento: 'MÃQUINA DE ESCRIBIR',	nombre:	'CHRISTOPHER, SHOLES'},
	{anyo:1878,	invento: 'FONÃ“GRAFO',	nombre: 'THOMAS, ALVA EDISON'},
	{anyo:1884,	invento: 'PASTILLA DE JABÃ“N',	nombre:	'WILLIAM, HESKETH LEVER'},
	{anyo:1885,	invento: 'AUTOMÃ“VIL',	nombre:	'KARL, BENZ'},
	{anyo:1886,	invento: 'COCA-COLA',	nombre:	'JOHN, PENBERTON'},
	{anyo:1888,	invento: 'GRAMÃ“FONO',	nombre:	'EMILE, BERLINER'},
	{anyo:1890,	invento: 'AVIÃ“N',	nombre:	'CLÃ‰MENT, ADER'},
	{anyo:1894,	invento: 'CINEMATÃ“GRAFO'  ,	nombre:	'HERMANOS, LUMIÃˆRE'},
	{anyo:1899,	invento: 'ASPIRINA',	nombre:	'FÃ‰LIX, HOFFMAN'}
];

var personas=[
	'RICHARD, TREVITHICK',
	'NICÃ‰PHORE, NIEPCE',
	'WILLIAM, MORTON',
	'ELÃAS, HOWE',
	'ELISHA, OTIS GRAVE',
	'HEINRICH, GÃ–BEL',
	'ANTONIO, MEUCCI',
	'NARCISO, MONTURIOL',
	'PIERRE, MICHAUX',
	'SOLOMON, ANDREWS',
	'THOMAS, CLIFFORD ALLBUTT',
	'CHRISTOPHER, SHOLES',
	'THOMAS, ALVA EDISON',
	'WILLIAM, HESKETH LEVER',
	'KARL, BENZ',
	'JOHN, PENBERTON',
	'EMILE, BERLINER',
	'CLÃ‰MENT, ADER',
	'HERMANOS, LUMIÃˆRE',
	'FÃ‰LIX, HOFFMAN'
];

//console.table(inventores);

/*
var r = inventores.filter( function(valor){
		if(valor.anyo >= 1850  && valor.anyo <1860){
			return true;
		}
	}
);

var c = inventores.filter( function(valor){
	if(valor.nombre>="H" && valor.nombre<="P"){
		return true;
	}
});

console.table(r);
console.table(c);

*/

var r = inventores.map( 
	function(a){
		return{
			inicio:a.anyo+100, descripcion: a.invento + " - " + a.nombre
		};
	}
);

console.table(r);


var r = inventores.reduce(
	function(suma, a){
		return suma + a.anyo;
	},
	0  //Valor inicial de suma
);

console.log(r);

var r = inventores.filter(
		function(a){
			if(a.anyo >= 1850 && a.anyo<1860){
				return true;
			}
		}
	).reduce(
		function(suma, a){
			return suma + a.anyo%10;
		},
		0  //Valor inicial de suma
);

console.log(r);

var tabla = inventores.filter(
		function(a){
			if(a.anyo >= 1850 && a.anyo<1860){
				return true;
			}
		}
	).reduce(
		function(suma, a){// suma debe concatenar y agregar codigo html para mostrar la tabla con todo
			return suma + "<tr><td>"+a.anyo+"</td><tr>"+%10;
		},
		""  //Valor inicial de suma
);

//documentgetElementById


/*



//AÃ‘O	INVENTO	INVENTOR
//	{anyo:1804,	invento: 'LOCOMOTORA',	nombre:	'RICHARD TREVITHICK'},
var inventores =[
	{anyo:1804,	invento: 'LOCOMOTORA',	nombre:	'RICHARD, TREVITHICK'},
	{anyo:1826,	invento: 'FOTOGRAFÃA',	nombre:	'NICÃ‰PHORE, NIEPCE'},
	{anyo:1846,	invento: 'ANESTESIA',	nombre:	'WILLIAM, MORTON'},
	{anyo:1846,	invento: 'MÃQUINA DE COSER',	nombre:	'ELÃAS, HOWE'},
	{anyo:1851,	invento: 'ASCENSOR',	nombre:	'ELISHA, OTIS GRAVE'},
	{anyo:1854,	invento: 'LÃMPARA INCANDESCENTE'  ,	nombre:	'HEINRICH, GÃ–BEL'},
	{anyo:1854,	invento: 'TELÃ‰FONO',	nombre:	'ANTONIO, MEUCCI'},
	{anyo:1859,	invento: 'SUBMARINO',	nombre:	'NARCISO, MONTURIOL'},
	{anyo:1861,	invento: 'BICICLETA',	nombre:	'PIERRE, MICHAUX'},
	{anyo:1863,	invento: 'DIRIGIBLE',	nombre: 'SOLOMON, ANDREWS'},
	{anyo:1866,	invento: 'TERMÃ“METRO CLÃNICO',	nombre:	'THOMAS, CLIFFORD ALLBUTT'},
	{anyo:1872,	invento: 'MÃQUINA DE ESCRIBIR',	nombre:	'CHRISTOPHER, SHOLES'},
	{anyo:1878,	invento: 'FONÃ“GRAFO',	nombre: 'THOMAS, ALVA EDISON'},
	{anyo:1884,	invento: 'PASTILLA DE JABÃ“N',	nombre:	'WILLIAM, HESKETH LEVER'},
	{anyo:1885,	invento: 'AUTOMÃ“VIL',	nombre:	'KARL, BENZ'},
	{anyo:1886,	invento: 'COCA-COLA',	nombre:	'JOHN, PENBERTON'},
	{anyo:1888,	invento: 'GRAMÃ“FONO',	nombre:	'EMILE, BERLINER'},
	{anyo:1890,	invento: 'AVIÃ“N',	nombre:	'CLÃ‰MENT, ADER'},
	{anyo:1894,	invento: 'CINEMATÃ“GRAFO'  ,	nombre:	'HERMANOS, LUMIÃˆRE'},
	{anyo:1899,	invento: 'ASPIRINA',	nombre:	'FÃ‰LIX, HOFFMAN'}
];

var personas=[
	'RICHARD, TREVITHICK',
	'NICÃ‰PHORE, NIEPCE',
	'WILLIAM, MORTON',
	'ELÃAS, HOWE',
	'ELISHA, OTIS GRAVE',
	'HEINRICH, GÃ–BEL',
	'ANTONIO, MEUCCI',
	'NARCISO, MONTURIOL',
	'PIERRE, MICHAUX',
	'SOLOMON, ANDREWS',
	'THOMAS, CLIFFORD ALLBUTT',
	'CHRISTOPHER, SHOLES',
	'THOMAS, ALVA EDISON',
	'WILLIAM, HESKETH LEVER',
	'KARL, BENZ',
	'JOHN, PENBERTON',
	'EMILE, BERLINER',
	'CLÃ‰MENT, ADER',
	'HERMANOS, LUMIÃˆRE',
	'FÃ‰LIX, HOFFMAN'
];


//console.table(inventores);
/*
var r = inventores.filter( function(valor){
	if(valor.anyo >=1850 && valor.anyo<1860)
		return true;

} );


var r = inventores.filter(
		function(k){
			if(k.nombre>="H" && k.nombre<="P")
				return true;
		}
	);


var r = inventores.filter( k => (k.nombre>="H" && k.nombre<="P"));


console.table(r);




var r = inventores.map(
	function(a){
		return {
			inicio: a.anyo+100,  
			descripcion: a.invento  + " - " + a.nombre};
});
console.table(r);



var r = inventores.reduce(
		function(suma , a){
			return suma + a.anyo%10;
		},
		0
	);
console.log(r);

var r = inventores.filter(
		function(a){
			if(a.anyo>=1850 && a.anyo<=1860)
				return true;
		}
	).reduce(
		function(suma , a){
			return suma + a.anyo%10;
		},
		0
	);
console.log(r);


var tabla = inventores.filter(
		function(a){
			if(a.anyo>=1850 && a.anyo<=1860)
				return true;
		}
	).reduce(
		function(suma , a){
			return suma + "<tr><td>" + a.anyo +  "</td><tr>";
		},
		""
	);

console.log(tabla);

document.getElementById('tabla').innerHTML = tabla;

*/