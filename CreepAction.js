var CreepAction = {
    
    harvestAtNearestSourceByPath: function(creep) {
        var sources = creep.room.find(FIND_SOURCES);
        var source = creep.pos.findClosestByPath(sources);
        if(creep.harvest(source) == ERR_NOT_IN_RANGE) {
            creep.moveTo(source, {visualizePathStyle: {stroke: '#ffaa00'}});
        }
    },
    
    collectEnergyAtNearestContainerByPath: function(creep) {
        var targets = creep.room.find(FIND_STRUCTURES, {
                filter: (structure) => {
                    return structure.structureType == STRUCTURE_CONTAINER &&
                           structure.energy > 0
                }
        });
        var target = creep.pos.findClosestByPath(targets);
        if(creep.harvest(target) == ERR_NOT_IN_RANGE) {
            creep.moveTo(target, {visualizePathStyle: {stroke: '#ffaa00'}});
        }
    },
    
    carryEnergyToNearestNeederByPath: function(creep) {
        var targets = creep.room.find(FIND_STRUCTURES, {
                filter: (structure) => {
                    return (structure.structureType == STRUCTURE_EXTENSION || 
                            structure.structureType == STRUCTURE_SPAWN) &&
                            structure.energy < structure.energyCapacity;
                }
        });
        var target = creep.pos.findClosestByPath(targets)
        if(target) {
            if(creep.transfer(target, RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
                creep.moveTo(target, {visualizePathStyle: {stroke: '#ffffff'}});
            }
        }
    },
    
    bringEnergyToNearestContainerByPath: function(creep) {
        var targets = creep.room.find(FIND_STRUCTURES, {
                filter: (structure) => {
                    return structure.structureType == STRUCTURE_CONTAINER &&
                           structure.energy < structure.energyCapacity
                }
        });
        var target = creep.pos.findClosestByPath(targets)
        if(target) {
            if(creep.transfer(target, RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
                creep.moveTo(target, {visualizePathStyle: {stroke: '#ffffff'}});
            }
        }
    }
}

module.exports = CreepAction;