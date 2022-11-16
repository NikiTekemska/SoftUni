function needForSpeed3(data) {
    let n = Number(data.shift());
    let collection = {};
    for (let i = 0; i < n; i++) {
        let [car, mileage, fuel] = data.shift().split("|");
        collection[car] = {};
        collection[car]["mileage"] = Number(mileage);
        collection[car]["fuel"] = Number(fuel);
    }
    let token = data.shift();
    while (token !== "Stop") {
        token = token.split(" : ");
        let action = token.shift();
        switch (action) {
            case "Drive":
                let car = token.shift();
                let distance = Number(token.shift());
                let newFuel = Number(token.shift());
                if (collection[car]["fuel"] >= newFuel) {
                    let tempMileage = collection[car]["mileage"];
                    collection[car]["mileage"] = tempMileage + distance;
                    let tempFuel = collection[car]["fuel"];
                    collection[car]["fuel"] = tempFuel - newFuel;
                    console.log(`${car} driven for ${distance} kilometers. ${newFuel} liters of fuel consumed.`)
                } else {
                    console.log("Not enough fuel to make that ride")

                }
                if (collection[car]["mileage"] >= 100000) {
                    delete collection[car];
                    console.log(`Time to sell the ${car}!`)
                }
                break;
            case "Refuel":
                let givenCar = token.shift();
                let givenFuel = Number(token.shift());
                let fuelLeft = collection[givenCar]["fuel"];
                let fuelNeeded = 75 - fuelLeft;
                if (givenFuel > fuelNeeded) {
                    collection[givenCar]["fuel"] = 75;
                    console.log(`${givenCar} refueled with ${fuelNeeded} liters`);
                } else {
                    collection[givenCar]["fuel"] = fuelLeft + givenFuel;
                    console.log(`${givenCar} refueled with ${givenFuel} liters`);
                }
                break;
            case "Revert":
                let carRevert = token.shift();
                let kilometers = Number(token.shift());
                let tempMileage = collection[carRevert]["mileage"];
                collection[carRevert]["mileage"] = tempMileage - kilometers;
                if (collection[carRevert]["mileage"] >= 10000) {
                    console.log(`${carRevert} mileage decreased by ${kilometers} kilometers`)
                } else {
                    collection[carRevert]["mileage"] = 10000;
                }
                break;
        }
        token = data.shift()
    } for (let car in collection) {
        let entries = Object.entries(collection[car]);
        let [mileage, mileageValue] = entries[0];
        let [fuel, fuelValue] = entries[1];
        console.log(`${car} -> Mileage: ${mileageValue} kms, Fuel in the tank: ${fuelValue} lt.`)
    }

}
needForSpeed3([
    '3',
    'Audi A6|38000|62',
    'Mercedes CLS|11000|35',
    'Volkswagen Passat CC|45678|5',
    'Drive : Audi A6 : 543 : 47',
    'Drive : Mercedes CLS : 94 : 11',
    'Drive : Volkswagen Passat CC : 69 : 8',
    'Refuel : Audi A6 : 50',
    'Revert : Mercedes CLS : 500',
    'Revert : Audi A6 : 30000',
    'Stop'
  ])