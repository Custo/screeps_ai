var CreepAction = require("CreepAction")

var roleMiner = {

    run: function(creep) {
        if(creep.carry.energy < creep.carryCapacity) {
            CreepAction.harvestAtNearestSourceByPath(creep)
        } else {
            var targets = creep.room.find(FIND_STRUCTURES, {
                filter: (structure) => {
                    return structure.structureType == STRUCTURE_CONTAINER &&
                           structure.energy > 0
                }
            });
            var target = creep.pos.findClosestByPath(targets)
            if (target) {
                if(creep.transfer(target, RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
                    creep.moveTo(target, {visualizePathStyle: {stroke: '#ffffff'}});
                }
            } else {
                CreepAction.carryEnergyToNearestNeederByPath(creep)
            }
        }
	}
};

module.exports = roleMiner;