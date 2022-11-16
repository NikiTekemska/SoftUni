function pirates(data) {
    let command = data.shift();
    let collection = {};
    while (command !== "Sail") {
        let [city, population, gold] = command.split("||");
        if (collection.hasOwnProperty(city)) {
            collection[city].population += Number(population);
            collection[city].gold += Number(gold);
        } else {
            collection[city] = {};
            collection[city].population = Number(population);
            collection[city].gold = Number(gold);

        } command = data.shift();
    }
    let line = data.shift();
    while (line !== "End") {
        line = line.split("=>");
        let events = line.shift();
        switch (events) {
            case "Plunder":
                let givenTown = line.shift();
                let givenPeople = Number(line.shift());
                let givenGold = Number(line.shift());
                console.log(`${givenTown} plundered! ${givenGold} gold stolen, ${givenPeople} citizens killed.`);
                collection[givenTown].population -= givenPeople;
                collection[givenTown].gold -= givenGold;
                if (collection[givenTown].population <= 0 || collection[givenTown].gold <= 0) {
                    delete collection[givenTown];
                    console.log(`${givenTown} has been wiped off the map!`);
                }
                break;
            case "Prosper":
                let town = line.shift();
                let newGold = Number(line.shift());
                if (newGold >= 0) {
                    collection[town].gold += newGold;
                    console.log(`${newGold} gold added to the city treasury. ${town} now has ${collection[town].gold} gold.`)
                } else {
                    console.log("Gold added cannot be a negative number!");
                }
                break;
        }
        line = data.shift();
    } let arr = Object.keys(collection);
    
    if (arr.length === 0) {
        console.log("Ahoy, Captain! All targets have been plundered and destroyed!");
    } else {
        console.log(`Ahoy, Captain! There are ${arr.length} wealthy settlements to go to:`);
        for (let city in collection) {
            let entries = Object.entries(collection[city]);
            let [population, populationValue] = entries[0];
            let [gold, goldValue] = entries[1];
            console.log(`${city} -> Population: ${populationValue} citizens, Gold: ${goldValue} kg`);
        }
    }
}
 pirates(["Tortuga||345000||1250",
"Santo Domingo||240000||630",
"Havana||410000||1100",
"Sail",
"Plunder=>Tortuga=>75000=>380",
"Prosper=>Santo Domingo=>180",
"End"])
