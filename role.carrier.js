var CreepAction = require("CreepAction")

var roleCarrier = {

    run: function(creep) {
	    if(creep.memory.carrying) {
	        if (creep.carry.energy > 0) {
	            CreepAction.carryEnergyToNearestNeederByPath(creep)
	        } else {
	            creep.memory.carrying = false
	        }
        } else {
            if(creep.carry.energy < creep.carryCapacity) {
                CreepAction.collectEnergyAtNearestContainerByPath(creep)
            } else {
                creep.memory.carrying = true
            }
        }
	}
};

module.exports = roleCarrier;