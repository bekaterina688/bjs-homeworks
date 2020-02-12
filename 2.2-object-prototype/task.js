function getAnimalSound(animal) {
	let animalSound;
    if (animal == undefined) {
		animalSound = null;
	} else {
		animalSound = animal.sound;
	}
    return animalSound;
}

function getAverageMark(marks) {
	let total = 0;
	if (marks.length == 0) {
		return 0;
	} else {
		for (let i = 0; i < marks.length; i ++) {
			total = total + Number(marks[i]);
		}
	}
	
	let average = total / marks.length;
	let roundedAverage = Math.round(average);
    return roundedAverage;
}

function checkBirthday(birthday) {
    // код для задачи №3 писать здесь
    // return verdict
}