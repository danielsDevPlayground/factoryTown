import { coinMapping, productionCostMapping } from "../defaultData";
import { ItemDict, ResourcesDict, SingleResource, MultiResource, ItemCount, ProductionCost } from "./interfaces/generalInterfaces";

export class GeneralUtil {
    static getCostOfAllItems(resources: ResourcesDict): ItemDict {
        let allItems = {} as ItemDict;
        Object.keys(resources).forEach(r => {
            allItems[r] = {
                item: r,
                value: resources[r].value,
                cost: GeneralUtil.getProductionCost(resources, r)
            };
        });
        return allItems;
    }

    static isCoinKey(key: string) {
        return key.endsWith("Coin");
    }

    static getItemCostsFromItem(res: SingleResource | MultiResource): ItemCount {
        if (res.isMulti) {
            if (res.cost && res.cost[res.preferredRecipeIndex] && Object.keys(res.cost[res.preferredRecipeIndex]).length > 0) {
                return res.cost[res.preferredRecipeIndex];
            }

        } else if (res.isMulti === false) {
            if (res.cost && Object.keys(res.cost).length > 0) {
                return res.cost;
            }
        }
    }

    static addItemCostToQueue(queue: string[], itemCost: ItemCount) {
        if (itemCost)
            Object.keys(itemCost).forEach(key => {
                for (let i = 0; i < itemCost[key]; i++)
                    queue.push(key);
            })

        if (queue.length > 10000) {
            console.log("One of the items in the list most likely causes a circular dependency! ", queue);
            document['isRecoursionDependency'] = true
            return [];
        }
        return queue;
    }

    static getProductionCost(resources: ResourcesDict, item: string) {
        let productionCosts: ProductionCost = { producers: {}, stockpile: {}, materials: {} };
        let queue = [];
        let res = resources[item];
        if (!res)
            return productionCosts;

        if (res.producer)
            productionCosts.producers[res.producer] = (productionCosts.producers[res.producer] ? productionCosts.producers[res.producer] : 0) + 1;

        let itemCosts = GeneralUtil.getItemCostsFromItem(res);
        queue = GeneralUtil.addItemCostToQueue([], itemCosts);

        while (queue.length > 0) {
            let currentItemKey = queue.pop();
            if (GeneralUtil.isCoinKey(currentItemKey)) {
                productionCosts.materials[currentItemKey] = (productionCosts.materials[currentItemKey] ? productionCosts.materials[currentItemKey] : 0) + 1;
                continue;
            }

            if (productionCosts.stockpile[currentItemKey] > 0) {
                productionCosts.stockpile[currentItemKey] -= 1;
                productionCosts.materials[currentItemKey] = (productionCosts.materials[currentItemKey] ? productionCosts.materials[currentItemKey] : 0) + 1;
                continue;
            }

            let currentRes = resources[currentItemKey];
            if (currentRes) {
                if (currentRes.producer)
                    productionCosts.producers[currentRes.producer] = (productionCosts.producers[currentRes.producer] ? productionCosts.producers[currentRes.producer] : 0) + 1;

                if (currentRes.cost)
                    queue = GeneralUtil.addItemCostToQueue(queue, GeneralUtil.getItemCostsFromItem(currentRes));

                let amount: number = 0;
                if (currentRes.isMulti)
                    amount = currentRes.amount[currentRes.preferredRecipeIndex];
                else if (currentRes.isMulti === false)
                    amount = currentRes.amount;

                if (amount > 1) {
                    productionCosts.stockpile[currentItemKey] = (productionCosts.stockpile[currentItemKey] ? productionCosts.stockpile[currentItemKey] : 0) + amount - 1;
                }

                productionCosts.materials[currentItemKey] = (productionCosts.materials[currentItemKey] ? productionCosts.materials[currentItemKey] : 0) + 1;
            }
        }

        return productionCosts;
    }

    static getCoinSumFromProducerList(producers: ItemCount): ItemCount {
        let productionMapping = { ...productionCostMapping };
        let cost = [0, 0, 0, 0];
        let coins = ['yellowCoin', 'redCoin', 'blueCoin', 'purpleCoin'];
        Object.entries(producers).forEach(entry => {
            cost.forEach((c, i) => {
                cost[i] += entry[1] * (productionMapping[entry[0]][coins[i]] || 0);
            });
        });

        let result = {}
        for (let i = 0; i < cost.length; i++) {
            if (cost[i])
                result[coins[i]] = cost[i];
        }

        return result;
    }

    static getYellowCoinMapping(coins: ItemCount): ItemCount {
        let yellowCoins = 0;
        Object.keys(coins).forEach(coinKey => {
            yellowCoins += coins[coinKey] * coinMapping[coinKey];
        });
        return { yellowCoin: yellowCoins };
    }

    static getOverallCoinSum(producerCost: ItemCount, materialCost: ItemCount): ItemCount {
        let result = { ...producerCost };
        Object.keys(materialCost).forEach(materialKey => {
            if (GeneralUtil.isCoinKey(materialKey))
                result[materialKey] = (result[materialKey] ? result[materialKey] : 0) + materialCost[materialKey];
        })

        return result;
    }

    static getDataForTable(resources) {
        document['isRecoursionDependency'] = false; //for error handling
        let itemCosts = GeneralUtil.getCostOfAllItems(resources);
        return Object.keys(itemCosts).map((key) => {
            let res = resources[key];
            let itemValue = itemCosts[key].value;
            let cost = itemCosts[key].cost;
            let producerCoinCost = GeneralUtil.getCoinSumFromProducerList(cost.producers);
            let overallCoinCost = GeneralUtil.getOverallCoinSum({ ...producerCoinCost }, { ...cost.materials });
            let yellowCoinMapping = GeneralUtil.getYellowCoinMapping(overallCoinCost);

            return {
                title: key,
                producer: res.producer,
                itemValue: itemValue,
                resCost: res.isMulti ? { ...res.cost[res.preferredRecipeIndex] } : { ...res.cost },
                cost: { ...cost },
                producerCoinCost: producerCoinCost,
                overallCoinCost: overallCoinCost,
                yellowCoinMapping: yellowCoinMapping,
            }
        })
    }

}