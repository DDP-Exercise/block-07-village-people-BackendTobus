"use strict";

import building from "./class.building.js";
import NobleBuilding from "./class.nobleBuilding.js";
import citizen from "./class.citizen.js";
import nobleCitizen from "./class.nobleCitizen.js";

/**
 * Create a Village class. Each village should have
 * - a name
 * - an array of its buildings
 * - an array of its citizens
 *
 * You can see in main.js what methods a village should provide.
 * implement them.
 */

export default class Village{
    constructor(name){
        this.name = name;
        this.buildings = [];
        this.citiziens = [];
    }
    addBuilding(name, capactiy, isNoble = false){
        this.buildings.push(isNoble ? new NobleBuilding(name, capactiy) : new building(name, capactiy));

    }
    addCitizen(name, isNoble = false){
        let newcitizen = isNoble? new nobleCitizen(name) : new citizen(name);
        this.citiziens.push(newcitizen);
        this.shelterCitizen(newcitizen);
    }
    shelterCitizen(citizen){
        for (const building of this.buildings) {
            if(building.addResident(citizen))
            return;
        }
    }
    shelterTheWorthy(){
        for(const citizen of this.citiziens){
            if(citizen.home === null){
                this.shelterCitizen(citizen);
            }
        }
    }
    printCitizenDirectory(){
        for (let i = 0; i < this.buildings.length; i++) {
            this.buildings[i].listAllResidents();
        }
        this.listAllHomeless();

    }
    listAllHomeless(){
        console.log("%c Homeless People of "+this.name+":", "background-color: #a00; color: white")
        for(const citizen of this.citiziens){
            if(citizen.home === null){
                console.log(citizen.toString());
            }
        }
    }

}