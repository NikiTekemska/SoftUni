function adAstra(input) {
    let strc = input.shift();
    let pattern = /([|\|#])([a-zA-Z\s]+)(\1)(\d{2}\/\d{2}\/\d{2})(\1)(\d+)(\1)/gm;
    let matches = strc.match(pattern);
    let sum = 0;
    if (matches !== null){
    for (let element of matches) {
        if (element[0] === "#") {
            element = element.split("#");
        } else {
            element = element.split("|");
        }
        let kcal = Number(element[3]);
        sum += kcal;

    } sum = Math.floor(sum / 2000);

    console.log(`You have food to last you for: ${sum} days!`);
  
        for (let element of matches) {
            if (element[0] === "#") {
                element = element.split("#");
            } else {
                element = element.split("|");
            }
            console.log(`Item: ${element[1]}, Best before: ${element[2]}, Nutrition: ${element[3]}`)
        }
    } else {
        console.log(`You have food to last you for: 0 days!`)
    }
}
adAstra(["Hello|#Invalid food#19/03/20#450|$5*(@"]
    )