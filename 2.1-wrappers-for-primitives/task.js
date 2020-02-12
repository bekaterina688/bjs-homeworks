function calculateTotalMortgage(percent, contribution, amount, date) {
    // код для задачи №1 писать здесь
    // return totalAmount;
}

function getGreeting(name) {
    function getGreeting(name) {
        switch(name) {
            case '':
            case undefined:
            case null:
            name = 'Аноним';
            break;
        }
        console.log(typeof name);
        let greeting = `Привет, мир! Меня зовут ${name}`;
        return greeting;
    }
}