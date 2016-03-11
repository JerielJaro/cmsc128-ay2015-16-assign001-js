function wordToNum(words){
	var hundreds = words.split(/ million| thousand/);
	var hundred = '';
	var temp = '';
	var temp2 = [];
	var ten = '';
	var one = '';
	var i = 0;
	var j = 0;
	var number = '';
	
	
	
	for(i=0;i<hundreds.length;i++){
		hundreds[i] = hundreds[i].replace(/ /g, '');
		hundreds[i] = hundreds[i].split(/hundred/);
		hundred = (hundreds[i].length !== 1) ? hundreds[i][0] : '';
		temp = new String((hundreds[i].length !== 1) ? hundreds[i][1] : hundreds[i][0]);
		temp2 = (temp.length === 0) ? [''] : temp.match(/one|two|three|four|five|six|seven|eight|nine|ten|eleven|twelve|thirteen|fourteen|fifteen|sixteen|seventeen|eighteen|nineteen/);
		one = temp2.toString();
		ten = temp.replace(one, '');
		
		
		//for(j = 0;j < hundreds[i].length;j++){
			if(hundred === 'one')number = number+'1';
			else if(hundred === 'two')number = number + '2';
			else if(hundred === 'three') number = number +'3';
			else if(hundred === 'four') number = number + '4';
			else if(hundred === 'five') number = number + '5';
			else if(hundred === 'six') number = number + '6';
			else if(hundred === 'seven') number = number +'7';
			else if (hundred === 'eight') number = number + '8';
			else if (hundred === 'nine') number = number + '9';
			else if(hundred === '' || hundred === ' ') number = number + '0';
			
			if(ten === 'twenty')number = number + '2';
			else if(ten === 'thirty') number = number +'3';
			else if(ten === 'forty') number = number + '4';
			else if(ten === 'fifty') number = number + '5';
			else if(ten === 'sixty') number = number + '6';
			else if(ten === 'seventy') number = number +'7';
			else if (ten === 'eighty') number = number + '8';
			else if (ten === 'ninety') number = number + '9';
			else if((ten === '' || ten === ' ') && ((/one|two|three|four|five|six|seven|eight|nine/).test(ten))) number = number + '0'
			
			if(one === 'one')number = number + '1';
			else if(one === 'two')number = number + '2';
			else if(one === 'three') number = number +'3';
			else if(one === 'four') number = number + '4';
			else if(one === 'five') number = number + '5';
			else if(one === 'six') number = number + '6';
			else if(one === 'seven') number = number +'7';
			else if (one === 'eight') number = number + '8';
			else if (one === 'nine') number = number + '9';
			else if(one === 'ten')number = number + '10';
			else if(one === 'eleven')number = number + '11';
			else if(one === 'twelve') number = number +'12';
			else if(one === 'thirteen') number = number + '13';
			else if(one === 'fourteen') number = number + '14';
			else if(one === 'fifteen') number = number + '15';
			else if(one === 'sixteen') number = number +'16';
			else if (one === 'seventeen') number = number + '17';
			else if (one === 'eighteen') number = number + '18';
			else if (one === 'nineteen') number = number + '19';
			else if(one === '' || one === ' ') number = number + '0';
		//}
	}
	
	return number;
	
}