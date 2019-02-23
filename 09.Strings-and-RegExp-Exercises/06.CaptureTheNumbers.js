function captureTheNumbers(input) {
    let regex = /\d+/g;
    let text = input.join(' ');
    let numbers = text.match(regex);

    console.log(numbers.join(' '));
}

captureTheNumbers(['The300', 'What is that?', 'I think it’s the 3rd movie.' ,'Lets watch it at 22:45']); //300 3 22 45