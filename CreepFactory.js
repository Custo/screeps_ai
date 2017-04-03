var CreepFactory = {

    createEmergencyHarvester: function() {
        Game.spawns.MainSpawn.createCreep([WORK, CARRY, MOVE], "EmergencyHarvester",
                                          { role: "harvester"})

    },

    createHarvester: function() {
        var nameMain = "Harvester"
        var idx = 1
        while(Game.spawns.MainSpawn.createCreep([WORK, WORK, WORK, WORK, CARRY, CARRY, CARRY, CARRY, MOVE, MOVE, MOVE],
                                                nameMain + idx,
                                                { role: "harvester"}) == ERR_NAME_EXISTS) {
            idx += 1
        }
	},
	
	createBuilder: function() {
	    var nameMain = "Builder"
        var idx = 1
        while(Game.spawns.MainSpawn.createCreep([WORK, WORK, WORK, WORK, CARRY, CARRY, CARRY, MOVE, MOVE, MOVE],
                                                nameMain + idx,
                                                { role: "builder"}) == ERR_NAME_EXISTS) {
            idx += 1
        }
	},
	
	createUpgrader: function() {
	    var nameMain = "Upgrader"
        var idx = 1
        while(Game.spawns.MainSpawn.createCreep([WORK, WORK, WORK, CARRY, CARRY, CARRY, CARRY, CARRY, MOVE, MOVE, MOVE, MOVE],
                                                nameMain + idx,
                                                { role: "upgrader"}) == ERR_NAME_EXISTS) {
            idx += 1
        }
	}
};


module.exports = CreepFactory;