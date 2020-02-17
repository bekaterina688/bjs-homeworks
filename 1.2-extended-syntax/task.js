function getResult(a,b,c){
    let x;
	let discriminant = Math.pow(b,2) - 4 * a * c;
	 console.log(discriminant);
	
	if (discriminant < 0) {
		return [];
	} else if (discriminant == 0) {
		x = [-b / (2 * a)];
		return x;
	} else {
		x = [((-1 * b) + Math.sqrt(discriminant)) / (2 * a) , ((-1 * b) - Math.sqrt(discriminant)) / (2 * a)];
		return x;
	}
}

function getAverageMark(marks){
	let marksOptimal = marks;
	let sum = 0;
	if (marks.length > 5) {
		console.log("Превышено допустимое количество оценок");
		marksOptimal = marks.slice(0, 5);
	}
	
	for (let i = 0; i < marksOptimal.length; i++ ) {
		sum = sum + marksOptimal[i];
	}
	
	let averageMark = sum /marksOptimal.length;
	return averageMark;
}


function askDrink(name,dateOfBirthday){
	let yearOfBirthday = dateOfBirthday.getFullYear();
	let dateNow = new Date();
	let yearNow = dateNow.getFullYear();
	let result;

	if (yearNow - yearOfBirthday > 18) {
		result = `Не желаете ли олд-фэшн, ${name}`;
	} else { 
		result = `Сожалею, ${name}, но я не могу вам продать алкоголь. Зато могу предложить вам замечательный клюквенный компот!`;
	}
	return result;
}