function heroesCodeAndLogic(data){
    let n = Number(data.shift());
    collection = {};
    for ( let i = 0; i < n; i++){
        let [heroName,hitPoints,manaPoints] = data.shift().split(" ");
        collection[heroName] = {};
        collection[heroName].hitPoints = Number(hitPoints);
        collection[heroName].manaPoints = Number(manaPoints);
    }
    let command = data.shift();
    while(command !== "End"){
        command = command.split(" - ");
        let action = command.shift();
        switch(action){
            case "CastSpell":
                let givenHeroName = command.shift();
                let mpNeeded = Number(command.shift());
                let spellName = command.shift();
                if(collection[givenHeroName].manaPoints >= mpNeeded){
                    collection[givenHeroName].manaPoints = collection[givenHeroName].manaPoints - mpNeeded;
                    console.log(`${givenHeroName} has successfully cast ${spellName} and now has ${collection[givenHeroName].manaPoints} MP!`)
                } else{
                    console.log(`${givenHeroName} does not have enough MP to cast ${spellName}!`)
                }
                break;
            case "TakeDamage":
                let newHeroName = command.shift();
                let damage = Number(command.shift());
                let attacker = command.shift();
                collection[newHeroName].hitPoints = collection[newHeroName].hitPoints - damage;
                if(collection[newHeroName].hitPoints > 0){
                    console.log(`${newHeroName} was hit for ${damage} HP by ${attacker} and now has ${collection[newHeroName].hitPoints} HP left!`)
                } else {
                    delete collection[newHeroName];
                    console.log(`${newHeroName} has been killed by ${attacker}!`)
                }
                break;
            case "Recharge":
                let newHero = command.shift();
                let amount = Number(command.shift());
                let tempMP = collection[newHero].manaPoints;
                collection[newHero].manaPoints = collection[newHero].manaPoints + amount;
                if(collection[newHero].manaPoints > 200){
                    collection[newHero].manaPoints = 200;
                    let recharged = 200 - tempMP;
                    console.log(`${newHero} recharged for ${recharged} MP!`);
                } else{
                console.log(`${newHero} recharged for ${amount} MP!`)
                }
                break;
            case "Heal":
                let anotherHero = command.shift();
                let newAmount = Number(command.shift());
                let tempHP = collection[anotherHero].hitPoints;
                collection[anotherHero].hitPoints = collection[anotherHero].hitPoints + newAmount;
                if(collection[anotherHero].hitPoints > 100){
                    let healedAmount = 100 - tempHP;
                    collection[anotherHero].hitPoints = 100;
                    console.log(`${anotherHero} healed for ${healedAmount} HP!`)
                } else {
                console.log(`${anotherHero} healed for ${newAmount} HP!`)
                }

                break;
        }
        command = data.shift();
    }
    for(let hero in collection){
        let entries = Object.entries(collection[hero]);
        let [hitPoints,hitPointsValue] = entries.shift();
        let [manaPoints,manaPointsValue] = entries.shift();
    console.log(`${hero}`);
    console.log(`  HP: ${hitPointsValue}`);
    console.log(`  MP: ${manaPointsValue}`);
    }
}
heroesCodeAndLogic //(["2","Solmyr 85 120","Kyrre 99 50","Heal - Solmyr - 10","Recharge - Solmyr - 50","TakeDamage - Kyrre - 66 - Orc","CastSpell - Kyrre - 15 - ViewEarth","End"])
(["4",
    "Adela 90 150",
    "SirMullich 70 40",
    "Ivor 1 111",
    "Tyris 94 61",
    "Heal - SirMullich - 50",
    "Recharge - Adela - 100",
    "CastSpell - Tyris - 1000 - Fireball",
    "TakeDamage - Tyris - 99 - Fireball",
    "TakeDamage - Ivor - 3 - Mosquito",
    "End"])