//soal 4,week 3

var dataHandling = [
	'0001',
	'Roman Alamsyah ',
	'Bandar Lampung',
	'21/05/1989',
	'Membaca',
];
dataHandling.splice(1, 1, 'Roman Alamsyah Elsharawy');
dataHandling.splice(2, 1, 'Provinsi Bandar Lampung');
dataHandling.splice(4, 0, 'Pria');
dataHandling.splice(5, 1, 'SMA Internasional Metro');
console.log(dataHandling);

// ["0001", "Roman Alamsyah Elsharawy", "Provinsi Bandar Lampung", "21/05/1989", "Pria", "SMA Internasional Metro"]

var hasil = dataHandling[3][4].split();
var angka = Number(hasil);
// console.log(angka)
switch (angka) {
	case 1: {
		console.log('Januari');
		break;
	}
	case 2: {
		console.log('Februari');
		break;
	}
	case 3: {
		console.log('Maret');
		break;
	}
	case 4: {
		console.log('April');
		break;
	}
	case 5: {
		console.log('Mei');
		break;
	}
}

var hasil1 = dataHandling[3].split('/');
var hasiIni = [];
for (var i = 0; i < hasil1.length; i++) {
	var angka = Number(hasil1[i]);
	hasiIni.push(angka);
}
hasiIni.sort(function(a, b) {
	return a < b;
});
console.log(hasiIni);

var hasil2 = dataHandling[3].split('/').join('-');
console.log(hasil2);

var hasil4 = dataHandling[1].split(' ');
var iniAja = hasil4.slice(0, 2).join(' ');
console.log(iniAja);
