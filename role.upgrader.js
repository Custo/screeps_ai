var CreepAction = require("CreepAction")

var roleUpgrader = {

    run: function(creep) {
        if(creep.memory.upgrading) {
            if(creep.carry.energy > 0) {
                if(creep.upgradeController(creep.room.controller) == ERR_NOT_IN_RANGE) {
                    creep.moveTo(creep.room.controller, {visualizePathStyle: {stroke: '#ffaa00'}});
                }
            } else {
                creep.memory.upgrading = false
            }
        } else {
            if(creep.carry.energy < creep.carryCapacity) {
                CreepAction.harvestAtNearestSourceByPath(creep)
            } else {
                creep.memory.upgrading = true
            }
        }
	}
};

module.exports = roleUpgrader;