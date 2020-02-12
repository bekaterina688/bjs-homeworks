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
    // код для задачи №2 писать здесь
    // return averageMark;
}

function askDrink(name,dateOfBirthday){
    // код для задачи №3 писать здесь
    // return result;
}