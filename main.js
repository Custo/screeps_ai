var roleHarvester = require('role.harvester');
var roleMiner = require('role.miner');
var roleCarrier = require('role.carrier');
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
        } else if (creep.memory.role == "miner") {
            roleMiner.run(creep)
        } else if (creep.memory.role == "carrier") {
            roleCarrier.run(creep)
        } else if (creep.memory.role == "builder") {
            roleBuilder.run(creep)
        } else if (creep.memory.role == "upgrader") {
            roleUpgrader.run(creep)
        }
    }
    
    // Make sure there are always creeps
    var desiredHarvesterCount = 0
    var desiredMinerCount = 2
    var desiredCarrierCount = 0
    var desiredBuilderCount = 3
    var desiredUpgraderCount = 5
    
    var harvesters = _.filter(Game.creeps, (creep) => creep.memory.role == 'harvester');
    var miners = _.filter(Game.creeps, (creep) => creep.memory.role == 'miner');
    var carriers = _.filter(Game.creeps, (creep) => creep.memory.role == 'carrier');
    var builders = _.filter(Game.creeps, (creep) => creep.memory.role == 'builder');
    var upgraders = _.filter(Game.creeps, (creep) => creep.memory.role == 'upgrader');
    
    if(miners.length == 0) {
        console.log("WARNING: No Miners alive! Creating Miner!")
        CreepFactory.createMiner()
    } else if(harvesters.length < desiredHarvesterCount) {
        console.log("Have only " + harvesters.length + "/" + desiredHarvesterCount + " Harvesters. Trying to create new one")
        CreepFactory.createHarvester()
    } else if (miners.length < desiredMinerCount) {
        console.log("Have only " + miners.length + "/" + desiredMinerCount + " Miner. Trying to create new one")
        CreepFactory.createMiner()
    } else if (carriers.length < desiredCarrierCount) {
        console.log("Have only " + carriers.length + "/" + desiredCarrierCount + " Carrier. Trying to create new one")
        CreepFactory.createCarrier()
    } else if(builders.length < desiredBuilderCount) {
        console.log("Have only " + builders.length + "/" + desiredBuilderCount + " Builders. Trying to create new one")
        CreepFactory.createBuilder()
    } else if(upgraders.length < desiredUpgraderCount) {
        console.log("Have only " + upgraders.length + "/" + desiredUpgraderCount + " Upgraders. Trying to create new one")
        CreepFactory.createUpgrader()
    } else {
        console.log("Having all desired creeps! :)")
    }
}