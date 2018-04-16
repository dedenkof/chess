// Иницаллизация доски
var table = new Array(10);

for (var i = 0; i < table.length; i++){ // 10 строк в таблице
	table[i] = new Array(10); // в каждой строке 10 столбцов
}

for (var row = 0; row < table.length; row++){
	for (var col = 0; col < table[row].length; col++){
		if((row + col) % 2 == 1){
			table[row][col] = '<div class=\"square-black\"></div>';
		}else{
			table[row][col] = '<div class=\"square-white\"></div>';
		}
	}
}

table[8][1] = '<div class=\"square-quest\"></div>';

for (var row = 0; row < table.length; row++){
	for (var col = 0; col < table[row].length; col++){
		document.write(table[row][col]);
	}
	document.write("<br>");
}

var prod = table[8][1];