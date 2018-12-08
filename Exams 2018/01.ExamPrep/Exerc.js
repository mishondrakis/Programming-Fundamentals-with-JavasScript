function solve(arr){

    let result = {};

    for(let line of arr){

        if (line.includes(' -> ')){
            let [name,item,score] = line.split(' -> ');

            if (!result.hasOwnProperty(name)){

                result[name] = {};
                result[name][item] = Number(score);
                result[name]['__total__'] = Number(score);
            }
            else{
                if (!result[name].hasOwnProperty(item)){
                    result[name][item] = Number(score);
                    result[name]['__total__'] += Number(score);
                }
                else {
                    if (result[name][item] < score) {
                        result[name]['__total__'] -= result[name][item];
                        result[name]['__total__'] += Number(score);

                        result[name][item] = Number(score);
                    }
                }
            }
        }

        else if(line.includes(' vs ')){

            let [gladiator1,gladiator2] = line.split(' vs ');

                if (result.hasOwnProperty(gladiator1) && result.hasOwnProperty(gladiator2)){

                    for (let pointsGl1 in result[gladiator1]) {

                        let g1Score = result[gladiator1][pointsGl1];
                        let g2Score = result[gladiator2][pointsGl1];

                        if (g1Score && g2Score && pointsGl1 !== '__total__'){
                            if (g1Score > g2Score){
                                delete result[gladiator2];
                                break;
                            }
                            if (g1Score < g2Score){
                                delete result[gladiator1];
                                break;
                            }
                        }

                    }
                }
            }

        else{
            break;
        }
    }


   let sortedGladiators = Object.keys(result).sort((gl1,gl2) => {
       let  difScore = result[gl2]['__total__'] - result[gl1]['__total__'];
       if (difScore === 0){
           return gl1.localeCompare(gl2);
       }
       return difScore;
   });

    for(let glad of sortedGladiators){
        console.log(`${glad}: ${result[glad]['__total__']} skill`);

        let sortedSkills = Object.keys(result[glad]).filter((i) => i !== '__total__').sort((a,b) =>{

            let pointsDeff = result[glad][b] - result[glad][a] ;

            if (pointsDeff === 0){
                return a.localeCompare(b)
            }
            return pointsDeff;
        });

        console.log(sortedSkills);
        for(let iskam of sortedSkills){
            console.log(`- ${iskam} <!> ${result[glad][iskam]} `);
        }
    }

}



solve(['Pesho -> Duck -> 400',
    'Julius -> Shield -> 150',
    'Gladius -> Heal -> 200',
    'Gladius -> Support -> 250',
    'Gladius -> Shield -> 250',
    'Pesho vs Gladius',
    'Gladius vs Julius',
    'Gladius vs Gosho',
    'Ave Cesar']);