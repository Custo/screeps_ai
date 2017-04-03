var CreepAction = require("CreepAction")

var roleHarvester = {

    run: function(creep) {
	    if(creep.carry.energy < creep.carryCapacity) {
            CreepAction.harvestAtNearestSourceByPath(creep)
        } else {
            CreepAction.carryEnergyToNearestNeederByPath(creep)
        }
	}
};

module.exports = roleHarvester;