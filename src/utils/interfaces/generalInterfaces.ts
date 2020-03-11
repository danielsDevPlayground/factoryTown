export interface ItemDict {
    [itemKey: string]: ItemDictValue;
}

export interface ItemDictValue {
    item: string;
    value: ItemCount;
    cost: ProductionCost;
}

export interface ProductionCost {
    stockpile: ItemCount;
    producers: ItemCount;
    materials: ItemCount;
}

export interface ResourcesDict {
    [itemKey: string]: SingleResource | MultiResource,
}

export interface SingleResource extends BasicResource {
    cost: ItemCount;
    isMulti: false;
    amount: number;
}

export interface MultiResource extends BasicResource {
    cost: ItemCount[];
    isMulti: true;
    preferredRecipeIndex: number;
    amount: number[];
}

export interface BasicResource {
    value?: ItemCount;
    producer: Producer;
    isMulti: true | false;
}

export interface ItemCount {
    [item: string]: number;
}

export enum Producer {
    forester = "forester",
    lumberMill = "lumberMill",
    mine = "mine",
    stoneMason = "stoneMason",
    forge = "forge",
    workshop = "workshop",
    magicForge = "magicForge",
    manaReactor = "manaReactor",
    machineShop = "machineShop",
    farm = "farm",
    fireTemple = "fireTemple",
    waterTemple = "waterTemple",
    airTemple = "airTemple",
    earthTemple = "earthTemple",
    recharger = "recharger",
    enchanter = "enchanter",
    elementalRefinery = "elementalRefinery",
    pasture = "pasture",
    fireShrine = "fireShrine",
    kitchen = "kitchen",
    well = "well",
    grainMill = "grainMill",
    fishery = "fishery",
    house = "house",
}

export interface ProductionCostMapping {
    [item: string]: ItemCount;
}
