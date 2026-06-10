"use strict";

import building from "./class.building.js";

/**
 * Create a NobleBuilding class. It's basically the same as a regular building
 * with one exception: Only nobles allowed.
 */

export default class NobleBuilding extends building{
    constructor(name, capacity, residents) {
        super(name, capacity, residents);
    }
    addResident(citizen, resident) {
        if(citizen.rank == 1) {
            if (this.residents.length < this.capacity) {
                this.residents.push(citizen)
                citizen.home = this.name
                return true;
            } else return this.makeSpaceFor(citizen)
        }
    }
}