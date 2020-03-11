import { ResourcesDict, ItemCount, ProductionCostMapping, Producer } from "./utils/interfaces/generalInterfaces";

export let resources: ResourcesDict = {
    yellowCoin: {
        producer: Producer.house,
        isMulti: false,
        cost: {},
        amount: 0,
    },
    redCoin: {
        producer: Producer.house,
        isMulti: false,
        cost: {},
        amount: 0,
    },
    blueCoin: {
        producer: Producer.house,
        isMulti: false,
        cost: {},
        amount: 0,
    },
    purpleCoin: {
        producer: Producer.house,
        isMulti: false,
        cost: {},
        amount: 0,
    },
    wood: {
        producer: Producer.forester,
        cost: {
            yellowCoin: 1,
        },
        isMulti: false,
        amount: 1,
    },
    apple: {
        producer: Producer.forester,
        cost: {},
        isMulti: false,
        value: {
            yellowCoin: 2,
        },
        amount: 1,
    },
    pear: {
        producer: Producer.forester,
        cost: {},
        value: {
            yellowCoin: 2,
        },
        amount: 1,
        isMulti: false,
    },
    paper: {
        producer: Producer.lumberMill,
        cost: {
            wood: 2,
            water: 1,
        },
        amount: 1,
        isMulti: false,
    },
    planks: {
        producer: Producer.lumberMill,
        cost: {
            wood: 2,
        },
        value: {
            redCoin: 1,
        },
        amount: 1,
        isMulti: false,
    },
    stone: {
        producer: Producer.mine,
        cost: {
            yellowCoin: 1,
        },
        amount: 2,
        isMulti: false,
    },
    ironOre: {
        producer: Producer.mine,
        cost: {
            redCoin: 1,
        },
        amount: 1,
        isMulti: false,
    },
    goldOre: {
        producer: Producer.mine,
        cost: {
            blueCoin: 1,
        },
        amount: 1,
        isMulti: false,
    },
    coal: {
        producer: Producer.mine,
        cost: {
            yellowCoin: 1,
        },
        amount: 1,
        isMulti: false,
    },
    manaShard: {
        producer: Producer.mine,
        cost: {
            redCoin: 1,
        },
        amount: 1,
        isMulti: false,
    },
    fireStone: {
        producer: Producer.mine,
        cost: {
            blueCoin: 1,
        },
        amount: 1,
        isMulti: false,
    },
    waterStone: {
        producer: Producer.mine,
        cost: {
            blueCoin: 1,
        },
        amount: 1,
        isMulti: false,
    },
    airStone: {
        producer: Producer.mine,
        cost: {
            blueCoin: 1,
        },
        amount: 1,
        isMulti: false,
    },
    earthStone: {
        producer: Producer.mine,
        cost: {
            blueCoin: 1,
        },
        amount: 1,
        isMulti: false,
    },
    stoneBrick: {
        producer: Producer.stoneMason,
        cost: {
            stone: 3,
        },
        value: {
            redCoin: 1,
        },
        amount: 1,
        isMulti: false,
    },
    polishedStone: {
        producer: Producer.stoneMason,
        cost: {
            stone: 10,
            blueCoin: 2,
        },
        amount: 1,
        isMulti: false,
    },
    ironPlate: {
        producer: Producer.forge,
        cost: {
            yellowCoin: 2,
            ironOre: 2,
            fuel: 2,
        },
        amount: 1,
        isMulti: false,
    },
    goldIngot: {
        producer: Producer.forge,
        cost: {
            goldOre: 4,
            fuel: 4,
        },
        amount: 1,
        isMulti: false,
    },
    nails: {
        producer: Producer.forge,
        cost: {
            ironOre: 1,
            fuel: 1,
            yellowCoin: 1,
        },
        value: {
            redCoin: 3,
        },
        amount: 1,
        isMulti: false,
    },
    reinforcedPlank: {
        producer: Producer.workshop,
        cost: {
            planks: 1,
            ironPlate: 1,
            nails: 2,
        },
        value: {
            redCoin: 22,
        },
        amount: 1,
        isMulti: false,
    },
    clothConveyorBelt: {
        producer: Producer.workshop,
        cost: {
            cloth: 1,
            woodWheel: 2,
            stoneBrick: 1,
        },
        amount: 1,
        isMulti: false,
    },
    cloth: {
        producer: Producer.workshop,
        cost: [{
            cotton: 2,
        }, {
            wool: 1
        }],
        value: {
            redCoin: 3,
        },
        isMulti: true,
        preferredRecipeIndex: 0,
        amount: [1, 1],
    },
    woodWheel: {
        producer: Producer.workshop,
        cost: {
            planks: 2,
        },
        amount: 1,
        isMulti: false,
    },
    book: {
        producer: Producer.workshop,
        cost: {
            leather: 1,
            paper: 4,
        },
        value: {
            redCoin: 4,
        },
        amount: 1,
        isMulti: false,
    },
    shirt: {
        producer: Producer.workshop,
        cost: {
            cloth: 2,
        },
        value: {
            redCoin: 8,
        },
        amount: 1,
        isMulti: false,
    },
    cloak: {
        producer: Producer.workshop,
        cost: {
            cloth: 2,
            leather: 2,
        },
        value: {
            redCoin: 20,
        },
        amount: 1,
        isMulti: false,
    },
    warmCoat: {
        producer: Producer.workshop,
        cost: {
            shirt: 1,
            leather: 1,
            wool: 2,
        },
        value: {
            redCoin: 24,
        },
        amount: 1,
        isMulti: false,
    },
    shoe: {
        producer: Producer.workshop,
        cost: {
            nails: 2,
            leather: 2,
        },
        value: {
            redCoin: 12,
        },
        amount: 1,
        isMulti: false,
    },
    woodAxe: {
        producer: Producer.workshop,
        cost: {
            ironPlate: 1,
            planks: 1,
        },
        value: {
            redCoin: 8,
        },
        amount: 1,
        isMulti: false,
    },
    pickAxe: {
        producer: Producer.workshop,
        cost: {
            ironPlate: 1,
            reinforcedPlank: 1,
        },
        value: {
            redCoin: 25,
        },
        amount: 1,
        isMulti: false,
    },
    bandage: {
        producer: Producer.workshop,
        cost: {
            cloth: 2,
        },
        value: {
            blueCoin: 1,
        },
        amount: 1,
        isMulti: false,
    },
    poultice: {
        producer: Producer.workshop,
        cost: {
            bandage: 1,
            herb: 2,
        },
        value: {
            blueCoin: 4,
        },
        amount: 1,
        isMulti: false,
    },
    medicalWrap: {
        producer: Producer.workshop,
        cost: {
            poultice: 1,
            ointment: 2,
            cloth: 1,
        },
        value: {
            blueCoin: 14,
        },
        amount: 1,
        isMulti: false,
    },
    manaBrick: {
        producer: Producer.magicForge,
        cost: {
            stone: 1,
            manaCrystal: 1,
            blueCoin: 2,
            fuel: 6,
        },
        value: {
            purpleCoin: 2,
        },
        amount: 1,
        isMulti: false,
    },
    magicConveyorBelt: {
        producer: Producer.magicForge,
        cost: {
            metalConveyorBelt: 1,
            airCrystal: 1,
            fuel: 10,
            blueCoin: 5,
        },
        amount: 1,
        isMulti: false,
    },
    magicRailTile: {
        producer: Producer.magicForge,
        cost: {
            railTile: 1,
            fireCrystal: 1,
            fuel: 10,
            blueCoin: 4,
        },
        amount: 1,
        isMulti: false,
    },
    manaPipe: {
        producer: Producer.magicForge,
        cost: {
            steamPipe: 1,
            manaCrystal: 1,
            fuel: 8,
            blueCoin: 2,
        },
        amount: 1,
        isMulti: false,
    },
    omniPipe: {
        producer: Producer.magicForge,
        cost: {
            manaPipe: 1,
            omniStone: 1,
            elixir: 1,
            fuel: 20,
        },
        amount: 1,
        isMulti: false,
    },
    manaCrystal: {
        producer: Producer.magicForge,
        cost: {
            manaShard: 2,
            fuel: 4,
            blueCoin: 2,
        },
        amount: 1,
        isMulti: false,
    },
    omniStone: {
        producer: Producer.manaReactor,
        cost: {
            fireCrystal: 1,
            airCrystal: 1,
            waterCrystal: 1,
            earthCrystal: 1,
            manaPower: 10,
            purpleCoin: 10,
        },
        amount: 1,
        isMulti: false,
    },
    metalConveyorBelt: {
        producer: Producer.machineShop,
        cost: {
            clothConveyorBelt: 1,
            ironPlate: 4,
            gear: 2,
        },
        amount: 1,
        isMulti: false,
    },
    railTile: {
        producer: Producer.machineShop,
        cost: {
            stoneBrick: 2,
            planks: 2,
            ironPlate: 2,
        },
        amount: 1,
        isMulti: false,
    },
    steamPipe: {
        producer: Producer.machineShop,
        cost: {
            ironPlate: 2,
        },
        amount: 1,
        isMulti: false,
    },
    gear: {
        producer: Producer.machineShop,
        cost: {
            ironPlate: 1,
        },
        amount: 1,
        isMulti: false,
    },
    grain: {
        producer: Producer.farm,
        cost: {
        },
        value: {
            yellowCoin: 1,
        },
        amount: 1,
        isMulti: false,
    },
    cotton: {
        producer: Producer.farm,
        cost: {
        },
        amount: 1,
        isMulti: false,
    },
    sugar: {
        producer: Producer.farm,
        cost: {
        },
        amount: 1,
        isMulti: false,
    },
    herb: {
        producer: Producer.farm,
        cost: {
            redCoin: 1,
        },
        amount: 1,
        isMulti: false,
    },
    berry: {
        producer: Producer.farm,
        cost: {
        },
        amount: 1,
        isMulti: false,
    },
    potato: {
        producer: Producer.farm,
        cost: {
        },
        value: {
            yellowCoin: 1,
        },
        amount: 1,
        isMulti: false,
    },
    carrot: {
        producer: Producer.farm,
        cost: {
        },
        value: {
            yellowCoin: 1,
        },
        amount: 1,
        isMulti: false,
    },
    tomato: {
        producer: Producer.farm,
        cost: {
        },
        value: {
            yellowCoin: 1,
        },
        amount: 1,
        isMulti: false,
    },
    fireCrystal: {
        producer: Producer.fireTemple,
        cost: {
            fireEther: 4,
            manaCrystal: 2,
            redCoin: 30,
        },
        amount: 1,
        isMulti: false,
    },
    waterCrystal: {
        producer: Producer.waterTemple,
        cost: {
            waterEther: 4,
            manaCrystal: 2,
            blueCoin: 20,
        },
        amount: 1,
        isMulti: false,
    },
    airCrystal: {
        producer: Producer.airTemple,
        cost: {
            airEther: 4,
            manaCrystal: 2,
            yellowCoin: 40,
        },
        amount: 1,
        isMulti: false,
    },
    earthCrystal: {
        producer: Producer.earthTemple,
        cost: {
            earthEther: 4,
            manaCrystal: 2,
            purpleCoin: 10,
        },
        amount: 1,
        isMulti: false,
    },
    manaPower: {
        producer: Producer.recharger,
        cost: {
            yellowCoin: 2,
        },
        amount: 2,
        isMulti: false,
    },
    firePower: {
        producer: Producer.recharger,
        cost: {
            yellowCoin: 2,
        },
        amount: 2,
        isMulti: false,
    },
    waterPower: {
        producer: Producer.recharger,
        cost: {
            yellowCoin: 2,
        },
        amount: 2,
        isMulti: false,
    },
    airPower: {
        producer: Producer.recharger,
        cost: {
            yellowCoin: 2,
        },
        amount: 2,
        isMulti: false,
    },
    earthPower: {
        producer: Producer.recharger,
        cost: {
            yellowCoin: 2,
        },
        amount: 2,
        isMulti: false,
    },
    fuel: {
        producer: null,
        cost: [{
            fertilizer: 1,
        }, {
            wood: 1
        }, {
            coal: 1
        }, {
            magma: 1
        }],
        isMulti: true,
        preferredRecipeIndex: 3,
        amount: [1, 2, 4, 8],
    },
    elixir: {
        producer: Producer.enchanter,
        cost: {
            healthPotion: 1,
            antidote: 1,
            waterPower: 4,
            redCoin: 8,
        },
        value: {
            blueCoin: 24,
        },
        amount: 1,
        isMulti: false,
    },
    healthPotion: {
        producer: Producer.enchanter,
        cost: {
            remedy: 2,
            redCoin: 6,
            fruitJuice: 1,
            manaPower: 2,
        },
        value: {
            blueCoin: 16,
        },
        amount: 1,
        isMulti: false,
    },
    ward: {
        producer: Producer.enchanter,
        cost: {
            reinforcedPlank: 1,
            polishedStone: 1,
            manaPower: 2,
        },
        value: {
            purpleCoin: 8,
        },
        amount: 1,
        isMulti: false,
    },
    magicCloak: {
        producer: Producer.enchanter,
        cost: {
            cloak: 1,
            wool: 1,
            manaPower: 4,
        },
        value: {
            purpleCoin: 7,
        },
        amount: 1,
        isMulti: false,
    },
    magicRobe: {
        producer: Producer.enchanter,
        cost: {
            shirt: 1,
            leather: 1,
            manaPower: 4,
        },
        value: {
            purpleCoin: 6,
        },
        amount: 1,
        isMulti: false,
    },
    fireRing: {
        producer: Producer.enchanter,
        cost: {
            goldIngot: 1,
            polishedStone: 2,
            firePower: 4,
        },
        value: {
            redCoin: 45,
        },
        amount: 1,
        isMulti: false,
    },
    waterRing: {
        producer: Producer.enchanter,
        cost: {
            goldIngot: 1,
            polishedStone: 2,
            waterPower: 4,
        },
        value: {
            blueCoin: 30,
        },
        amount: 1,
        isMulti: false,
    },
    crown: {
        producer: Producer.enchanter,
        cost: {
            goldIngot: 2,
            ironPlate: 2,
            airPower: 4,
        },
        value: {
            yellowCoin: 60,
        },
        amount: 1,
        isMulti: false,
    },
    necklace: {
        producer: Producer.enchanter,
        cost: {
            polishedStone: 2,
            ironPlate: 2,
            earthPower: 4,
        },
        value: {
            purpleCoin: 15,
        },
        amount: 1,
        isMulti: false,
    },
    enchantedBook: {
        producer: Producer.enchanter,
        cost: {
            book: 1,
            manaPower: 4,
        },
        value: {
            purpleCoin: 2,
        },
        amount: 1,
        isMulti: false,
    },
    strengthSpellbook: {
        producer: Producer.enchanter,
        cost: {
            enchantedBook: 1,
            firePower: 8,
        },
        value: {
            redCoin: 30,
        },
        amount: 1,
        isMulti: false,
    },
    staminaSpellbook: {
        producer: Producer.enchanter,
        cost: {
            enchantedBook: 1,
            airPower: 8,
        },
        value: {
            yellowCoin: 40,
        },
        amount: 1,
        isMulti: false,
    },
    cureSpellbook: {
        producer: Producer.enchanter,
        cost: {
            enchantedBook: 1,
            waterPower: 8,
        },
        value: {
            blueCoin: 20,
        },
        amount: 1,
        isMulti: false,
    },
    protectionSpellbook: {
        producer: Producer.enchanter,
        cost: {
            enchantedBook: 1,
            earthPower: 8,
        },
        value: {
            purpleCoin: 10,
        },
        amount: 1,
        isMulti: false,
    },
    fireEther: {
        producer: Producer.elementalRefinery,
        cost: {
            fireStone: 1,
            manaPower: 2,
        },
        value: {
            redCoin: 15,
        },
        amount: 2,
        isMulti: false,
    },
    waterEther: {
        producer: Producer.elementalRefinery,
        cost: {
            waterStone: 1,
            manaPower: 2,
        },
        value: {
            blueCoin: 10,
        },
        amount: 2,
        isMulti: false,
    },
    airEther: {
        producer: Producer.elementalRefinery,
        cost: {
            airStone: 1,
            manaPower: 2,
        },
        value: {
            yellowCoin: 20,
        },
        amount: 2,
        isMulti: false,
    },
    earthEther: {
        producer: Producer.elementalRefinery,
        cost: {
            earthStone: 1,
            manaPower: 2,
        },
        value: {
            purpleCoin: 4,
        },
        amount: 2,
        isMulti: false,
    },
    wool: { //also produces fertilizer
        producer: Producer.pasture,
        cost: {
            animalFeed: 2,
            water: 2
        },
        value: {
            redCoin: 2,
        },
        amount: 1,
        isMulti: false,
    },
    fertilizer: {
        producer: Producer.pasture,
        cost: {
            //byproduct, is not counted anywhere, even if it can be produced!
        },
        amount: 1,
        isMulti: false, //this is not correct. But since I ignore production costs...
    },
    egg: {
        producer: Producer.pasture,
        cost: {
            animalFeed: 1,
            water: 1,
        },
        value: {
            yellowCoin: 2,
        },
        amount: 1,
        isMulti: false,
    },
    rawChicken: {
        producer: Producer.pasture,
        cost: {
            animalFeed: 2,
            water: 1,
            yellowCoin: 1,
        },
        value: {
            yellowCoin: 3,
        },
        amount: 1,
        isMulti: false,
    },
    leather: {
        producer: Producer.pasture,
        cost: {
            animalFeed: 4,
            water: 4,
            yellowCoin: 2,
        },
        value: {
            redCoin: 3,
        },
        amount: 1,
        isMulti: false,
    },
    beef: {
        producer: Producer.pasture,
        cost: {
            animalFeed: 4,
            water: 4,
            yellowCoin: 2,
        },
        value: {
            yellowCoin: 4,
        },
        amount: 1,
        isMulti: false,
    },
    milk: {
        producer: Producer.pasture,
        cost: {
            animalFeed: 2,
            water: 2,
        },
        value: {
            yellowCoin: 5,
        },
        amount: 1,
        isMulti: false,
    },
    magma: {
        producer: Producer.fireShrine,
        cost: {
            firePower: 2,
        },
        amount: 1,
        isMulti: false,
    },
    antidote: {
        producer: Producer.kitchen,
        cost: {
            remedy: 2,
            redCoin: 4,
            fishOil: 1,
            sugar: 1,
        },
        value: {
            blueCoin: 12,
        },
        amount: 1,
        isMulti: false,
    },
    remedy: {
        producer: Producer.kitchen,
        cost: {
            herb: 2,
            redCoin: 2,
            water: 1,
            fuel: 1,
        },
        value: {
            blueCoin: 3,
        },
        amount: 1,
        isMulti: false,
    },
    fruitJuice: {
        producer: Producer.kitchen,
        cost: {
            berry: 2,   //apples and pears can also be used!
        },
        value: {
            blueCoin: 6,
        },
        amount: 1,
        isMulti: false,
    },
    fishOil: {
        producer: Producer.kitchen,
        cost: {
            fish: 2,
            redCoin: 2,
        },
        value: {
            blueCoin: 2,
        },
        amount: 1,
        isMulti: false,
    },
    bread: {
        producer: Producer.kitchen,
        cost: [{
            flour: 2,
            fuel: 1,
        },
        {
            flour: 1,
            potato: 1,
            fuel: 1,
        }],
        value: {
            yellowCoin: 12,
        },
        isMulti: true,
        preferredRecipeIndex: 0,
        amount: [1, 1],
    },
    cookedBeef: {
        producer: Producer.kitchen,
        cost: {
            beef: 1,
            fuel: 1,
        },
        value: {
            yellowCoin: 10,
        },
        amount: 1,
        isMulti: false,
    },
    cookedChicken: {
        producer: Producer.kitchen,
        cost: {
            rawChicken: 1,
            fuel: 1,
        },
        value: {
            yellowCoin: 8,
        },
        amount: 1,
        isMulti: false,
    },
    cookedFish: {
        producer: Producer.kitchen,
        cost: {
            fish: 1,
            fuel: 1,
        },
        value: {
            yellowCoin: 4,
        },
        amount: 1,
        isMulti: false,
    },
    ointment: {
        producer: Producer.kitchen,
        cost: {
            fishOil: 2,
            herb: 4,
            redCoin: 2,
        },
        value: {
            blueCoin: 10,
        },
        amount: 1,
        isMulti: false,
    },
    jam: {
        producer: Producer.kitchen,
        cost: {
            berry: 1,   //apples and pears can also be used!
            sugar: 1,
            fuel: 1,
        },
        isMulti: false,
        value: {
            yellowCoin: 12,
        },
        amount: 1,
    },
    butter: {
        producer: Producer.kitchen,
        cost: {
            milk: 2,
        },
        value: {
            yellowCoin: 12,
        },
        amount: 1,
        isMulti: false,
    },
    cheese: {
        producer: Producer.kitchen,
        cost: {
            milk: 3,
            cloth: 1,
        },
        value: {
            yellowCoin: 20,
        },
        amount: 1,
        isMulti: false,
    },
    veggieStew: {
        producer: Producer.kitchen,
        cost: {
            tomato: 1,
            potato: 1,
            carrot: 1,
            fuel: 2,
        },
        value: {
            yellowCoin: 24,
        },
        amount: 1,
        isMulti: false,
    },
    fishStew: {
        producer: Producer.kitchen,
        cost: {
            fish: 1,
            butter: 1,
            tomato: 2,
            fuel: 2,
        },
        value: {
            yellowCoin: 25,
        },
        amount: 1,
        isMulti: false,
    },
    meatStew: {
        producer: Producer.kitchen,
        cost: {
            cookedBeef: 1,
            potato: 1,
            carrot: 1,
            fuel: 2,
        },
        value: {
            yellowCoin: 35,
        },
        amount: 1,
        isMulti: false,
    },
    sandwich: {
        producer: Producer.kitchen,
        cost: {
            bread: 1,
            cheese: 1,
            cookedChicken: 1,
        },
        value: {
            yellowCoin: 30,
        },
        amount: 1,
        isMulti: false,
    },
    applePie: {
        producer: Producer.kitchen,
        cost: {
            flour: 4,
            sugar: 2,
            apple: 2,
            butter: 1,
            fuel: 2,
        },
        value: {
            yellowCoin: 30,
        },
        amount: 1,
        isMulti: false,
    },
    cake: {
        producer: Producer.kitchen,
        cost: {
            flour: 4,
            sugar: 2,
            egg: 2,
            butter: 1,
            fuel: 2,
        },
        value: {
            yellowCoin: 30,
        },
        amount: 1,
        isMulti: false,
    },
    berryCake: {
        producer: Producer.kitchen,
        cost: {
            cake: 1,
            jam: 2,
            sugar: 2,
            berry: 4,
        },
        value: {
            purpleCoin: 12,
        },
        amount: 1,
        isMulti: false,
    },
    proteinShake: {
        producer: Producer.kitchen,
        cost: {
            milk: 1,
            egg: 1,
            sugar: 1,
        },
        value: {
            blueCoin: 4,
        },
        amount: 1,
        isMulti: false,
    },
    animalFeed: {
        producer: Producer.grainMill,
        cost: {
            grain: 2,
        },
        amount: 1,
        isMulti: false,
    },
    flour: {
        producer: Producer.grainMill,
        cost: {
            grain: 3,
        },
        value: {
            yellowCoin: 4,
        },
        amount: 1,
        isMulti: false,
    },
    water: {
        producer: Producer.well,
        cost: { //use carts instead of water temple!
        },
        amount: 1,
        isMulti: false,
    },
    fish: {
        producer: Producer.fishery,
        cost: {
            redCoin: 1,
        },
        amount: 1,
        isMulti: false,
    },
}

export let coinMapping: ItemCount = {
    yellowCoin: 1,
    redCoin: 4,
    blueCoin: 4 * 4,
    purpleCoin: 4 * 4 * 4,
}

export let productionCostMapping: ProductionCostMapping = {
    forester: { yellowCoin: 1 },
    lumberMill: { yellowCoin: 1 },
    mine: { yellowCoin: 1 },
    stoneMason: { yellowCoin: 1 },
    forge: { redCoin: 1 },
    workshop: { redCoin: 1 },
    magicForge: { redCoin: 1 },   //blue?
    manaReactor: { purpleCoin: 1 },
    machineShop: { redCoin: 1 },
    farm: { yellowCoin: 1 },
    fireTemple: { yellowCoin: 1 },
    waterTemple: { yellowCoin: 1 },
    airTemple: { yellowCoin: 1 },
    earthTemple: { yellowCoin: 1 },
    recharger: { yellowCoin: 1 },
    enchanter: { redCoin: 1 },  //blue?
    elementalRefinery: { yellowCoin: 1 }, //red?
    pasture: { yellowCoin: 1 },
    fireShrine: { yellowCoin: 1 },
    kitchen: { redCoin: 1 },
    grainMill: { yellowCoin: 1 },
    well: { yellowCoin: 1 },
    fishery: { yellowCoin: 1 },
    house: {}
};
