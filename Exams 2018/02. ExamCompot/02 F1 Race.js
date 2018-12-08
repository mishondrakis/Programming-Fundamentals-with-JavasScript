function solve(input) {

    let drivers = input.shift().split(' ');


    for (let line of input) {
        let [command, nameDriver] = line.split(' ');

        switch (command) {
            case "Join":
                if (!drivers.includes(nameDriver)) {
                    drivers.push(nameDriver);
                }
                break;
            case "Crash":
                let index = drivers.indexOf(nameDriver);
                if (index > -1) {
                    drivers.splice(index, 1);
                }
                break;
            case "Pit":

                let index1 = drivers.indexOf(nameDriver);
                if (index1 > -1 && index1 !== drivers.length - 1) {
                    drivers.splice(index1, 1);
                    drivers.splice(index1 + 1, 0, nameDriver)
                }
                break;

            case "Overtake":
                let index2 = drivers.indexOf(nameDriver);
                if (index2 > -1 && index2 !== 0){
                    drivers.splice(index2,1);
                    drivers.splice(index2 -1 ,0,nameDriver);
                }
                break;

        }

    }
    console.log(drivers.join(' ~ '));
}

solve(["Vetel Hamilton Slavi",
        "Pit Hamilton",
        "Overtake Vetel",
        "Crash Slavi",
    ]
);

solve(["Vetel Hamilton Raikonnen Botas Slavi",
    "Pit Hamilton",
    "Overtake LeClerc",
    "Join Ricardo",
    "Crash Botas",
    "Overtake Ricardo",
    "Overtake Ricardo",
    "Overtake Ricardo",
    "Crash Slavi"]
);