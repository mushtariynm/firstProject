let name = 'Alex'
let money = 10000
let account = 7777
let namePrompt = prompt('Как вас зовут?')

if (namePrompt.toLowerCase() == name.toLowerCase()) {
    let pin = prompt('Номер счета')

    if(+pin === account){
        alert(true)
    } else{
        console.log('Неправильный номер счета');
    }
    let cashPrompt = prompt('Сколько обналичить?')

    if(+cashPrompt <= money){
        alert('Все отлично')
    } else{
        console.log('Недостаточно средств');
    }
    let result = money - cashPrompt
    alert(result + ' Осталось');
    
}else {
    console.log('Пользователь не найден');
}




