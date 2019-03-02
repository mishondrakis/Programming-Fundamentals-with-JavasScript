function priceCalculate(day, service, time) {
    let timeNumber = time;
    let price = 0;
    if (service === 'Fitness' && timeNumber >= 8 && timeNumber < 15) {
        if (day === 'Monday' || day === 'Tuesday' || day === 'Wednesday' || day === 'Thursday'
            || day === 'Friday') {
            price = 5.00;
            console.log(price);
        } else if (day === 'Saturday' || day === 'Sunday') {
            price = 8.00;
            console.log(price);
        }
    } else if (service === 'Fitness' && timeNumber >= 15 && timeNumber <= 22) {
        if (day === 'Monday' || day === 'Tuesday' || day === 'Wednesday' || day === 'Thursday'
            || day === 'Friday') {
            price = 7.50;
            console.log(price);
        } else if (day === 'Saturday' || day === 'Sunday') {
            price = 8.00;
            console.log(price);
        }

    } else if (service === 'Sauna' && timeNumber >= 8 && timeNumber < 15) {
        if (day === 'Monday' || day === 'Tuesday' || day === 'Wednesday' || day === 'Thursday'
            || day === 'Friday') {
            price = 4.00;
            console.log(price);
        } else if (day === 'Saturday' || day === 'Sunday') {
            price = 7.00;
            console.log(price);
        }
    } else if (service === 'Sauna' && timeNumber >= 15 && timeNumber <= 22) {
        if (day === 'Monday' || day === 'Tuesday' || day === 'Wednesday' || day === 'Thursday'
            || day === 'Friday') {
            price = 6.50;
            console.log(price);
        } else if (day === 'Saturday' || day === 'Sunday') {
            price = 7.00;
            console.log(price);
        }


    } else if (service === 'Instructor' && timeNumber >= 8 && timeNumber < 15) {
        if (day === 'Monday' || day === 'Tuesday' || day === 'Wednesday' || day === 'Thursday'
            || day === 'Friday') {
            price = 10.00;
            console.log(price);
        } else if (day === 'Saturday' || day === 'Sunday') {
            price = 15.00;
            console.log(price);
        }
    } else if (service === 'Sauna' && timeNumber >= 15 && timeNumber <= 22) {
        if (day === 'Monday' || day === 'Tuesday' || day === 'Wednesday' || day === 'Thursday'
            || day === 'Friday') {
            price = 12.50;
            console.log(price);
        } else if (day === 'Saturday' || day === 'Sunday') {
            price = 15.00;
            console.log(price);
        }

    }
}
priceCalculate('Monday', 'Fitness', 15.30);