"use strict";
/**
 * Create a Building class. Each Building should have
 * - a name
 * - a capacity
 * - an array of its residents
 *
 * Each Building should provide methods to
 * - addResident(citizen)
 *      - If there is still space in the building, add the citizen as resident.
 *        also mark this building as the citizens home.
 *      - If there is no space, check if someone has to makeSpaceFor(citizen) (= is there
 *        a resident in this building with a lower rank?)
 * - removeResident(citizen)
 *      - Kick a resident out of the building. Also delete the citizens home (null).
 *      - Attention: When you kick a resident, make sure there is no lower ranked
 *        resident remaining in the building.
 * - listAllResidents() for the Citizen Directory.
 */

export default class building{
    constructor(name, capacity){
        this.name = name
        this.capacity = capacity
        this.residents = []
    }
    addResident(citizen){
        if(this.residents.length < this.capacity){
            this.residents.push(citizen)
            citizen.home = this.name
            return true;
        }
        else return this.makeSpaceFor(citizen)

    }
    removeResident(citizen){
        this.residents.splice(this.residents.indexOf(citizen), 1);
        citizen.home = null;
    }
    listAllResidents(){
        console.log("%c Residents of "+this.name+"("+this.residents.length+"/"+this.capacity +"):", "background-color: #FFD700; color: black")
        for(const citizen of this.residents){
            console.log(citizen.toString());
        }
    }
    makeSpaceFor(citizen){
        let lowestrank = this.findLowestResident(citizen)
        if(lowestrank.rank > citizen.rank){
            this.removeResident(lowestrank)
            this.addResident(citizen)
            return true
        }
        return false
    }
    findLowestResident(){
        if(this.residents.length) {
            let lowestresident = this.residents[0]
            for (let i = 0; i < this.residents.length; i++) {
                if (this.residents[i].rank > lowestresident.rank) {
                    lowestresident = this.residents[i]
                }
            }
            return lowestresident
        }
    }
}