var CreepAction = require("CreepAction")

var roleBuilder = {

    run: function(creep) {
       if(creep.memory.building) {
            if(creep.carry.energy > 0) {
                var targets = creep.room.find(FIND_CONSTRUCTION_SITES);
                var target = creep.pos.findClosestByPath(targets)
                    
                if(target) {
                    if(creep.build(target) == ERR_NOT_IN_RANGE) {
                        creep.moveTo(target, {visualizePathStyle: {stroke: '#ffaa00'}});
                    }
                } else {
                    CreepAction.carryEnergyToNearestNeederByPath(creep)
                }
            } else {
                creep.memory.building = false
            }
        } else {
            if(creep.carry.energy < creep.carryCapacity) {
                CreepAction.harvestAtNearestSourceByPath(creep)
            } else {
                creep.memory.building = true
            }
        }
	}
};

module.exports = roleBuilder;