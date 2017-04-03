var roleHarvester = require('role.harvester');
var roleBuilder = require('role.builder');
var roleUpgrader = require('role.upgrader');
var CreepFactory = require('CreepFactory');

module.exports.loop = function () {

    // Clear memory from dead creeps
    for(var name in Memory.creeps) {
        if(!Game.creeps[name]) {
            delete Memory.creeps[name];
        }
    }

    // Let the creeps work
    for(var name in Game.creeps) {
        var creep = Game.creeps[name];
        if(creep.memory.role == 'harvester') {
            roleHarvester.run(creep);
        } else if (creep.memory.role == "builder") {
            roleBuilder.run(creep)
        } else if (creep.memory.role == "upgrader") {
            roleUpgrader.run(creep)
        }
    }
    
    // Make sure there are always creeps
    var desiredHarvesterCound = 3
    var desiredBuilderCound = 2
    var desiredUpgraderCound = 10
    
    var harvesters = _.filter(Game.creeps, (creep) => creep.memory.role == 'harvester');
    var builders = _.filter(Game.creeps, (creep) => creep.memory.role == 'builder');
    var upgraders = _.filter(Game.creeps, (creep) => creep.memory.role == 'upgrader');
    
    if(harvesters.length == 0) {
        console.log("WARNING: No Harvesters alive! Creating emergency Harvester!")
        CreepFactory.createEmergencyHarvester()
    } else if(harvesters.length < desiredHarvesterCound) {
        console.log("Have only " + harvesters.length + "/" + desiredHarvesterCound + " Harvesters. Trying to create new one")
        CreepFactory.createHarvester()
    } else if(builders.length < desiredBuilderCound) {
        console.log("Have only " + builders.length + "/" + desiredBuilderCound + " Builders. Trying to create new one")
        CreepFactory.createBuilder()
    } else if(upgraders.length < desiredUpgraderCound) {
        console.log("Have only " + upgraders.length + "/" + desiredUpgraderCound + " Upgraders. Trying to create new one")
        CreepFactory.createUpgrader()
    } else {
        console.log("Having all desired creeps! :)")
    }
}