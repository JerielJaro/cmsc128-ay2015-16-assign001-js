function numToWords(number){
	var words = '';
	var hundreds = [0,0,0];
	var hundred = 0;
	var ten = 0;
	var one = 0;
	var i = 0;
	
	for(i=0;i<hundreds.length;i++){
		hundreds[hundreds.length-i-1] = parseInt(number%1000);
		number = parseInt(number/1000);
	}
	
	for(i=0; i < hundreds.length; i++){
		hundred = parseInt(hundreds[i]/100);
		ten = parseInt((hundreds[i]%100)/10);
		one = (ten === 1) ? parseInt(ten) : parseInt(hundreds[i]%10);
		
		switch(hundred){
			case 1:
				words = words+' one hundred';
				break;
			case 2:
				words = words+' two hundred';
				break;
			case 3:
				words = words+' three hundred';
				break;
			case 4:
				words = words+' four hundred';
				break;
			case 5:
				words = words+' five hundred';
				break;
			case 6:
				words = words+' six hundred';
				break;
			case 7:
				words = words+' seven hundred';
				break;
			case 8:
				words = words+' eight hundred';
				break;
			case 9:
				words = words+' nine hundred';
				break;
		}
	
		if(ten !== 1){
			switch(ten){
				case 2:
					words = words+' twenty';
					break;
				case 3:
					words = words+' thirty';
					break;
				case 4:
					words = words+' forty';
					break;
				case 5:
					words = words+' fifty';
					break;
				case 6:
					words = words+' sixty';
					break;
				case 7:
					words = words+' seventy';
					break;
				case 8:
					words = words+' eighty';
					break;
				case 9:
					words = words+' ninety';
					break;
				default:
					break;
			}
		}
	
		switch(one){
			case 1:
				words = words+' one';
				break;
			case 2:
				words = words+' two';
				break;
			case 3:
				words = words+' three';
				break;
			case 4:
				words = words+' four';
				break;
			case 5:
				words = words+' five';
				break;
			case 6:
				words = words+' six';
				break;
			case 7:
				words = words+' seven';
				break;
			case 8:
				words = words+' eight';
				break;
			case 9:
				words = words+' nine';
				break;
			case 10:
				words = words+' ten';
				break;
			case 11:
				words = words+' eleven';
				break;
			case 12:
				words = words+' twelve';
				break;
			case 13:
				words = words+' thirteen';
				break;
			case 14:
				words = words+' fourteen';
				break;
			case 15:
				words = words+' fifteen';
				break;
			case 16:
				words = words+' sixteen';
				break;
			case 17:
				words = words+' seventeen';
				break;
			case 18:
				words = words+' eighteen';
				break;
			case 19:
				words = words+' nineteen';
				break;
			default:
				break;
		}
		
		if(i === 0 ) words = words+' million';
		else if(i === 1) words = words+' thousand';
	}

	return words;
	
}