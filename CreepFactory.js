var CreepFactory = {

    createEmergencyHarvester: function() {
        Game.spawns.MainSpawn.createCreep([WORK, CARRY, MOVE], "EmergencyHarvester",
                                          { role: "harvester"})

    },

    createHarvester: function() {
        var idx = 1
        while(Game.spawns.MainSpawn.createCreep([WORK, CARRY, CARRY, MOVE, MOVE],
                                                "Harvester" + idx,
                                                { role: "harvester"}) == ERR_NAME_EXISTS) {
            idx += 1
        }
	},
	
	createMiner: function() {
        var idx = 1
        while(Game.spawns.MainSpawn.createCreep([WORK, WORK, CARRY, MOVE],
                                                "Miner" + idx,
                                                { role: "miner"}) == ERR_NAME_EXISTS) {
            idx += 1
        }
	},
	
	createCarrier: function() {
        var idx = 1
        while(Game.spawns.MainSpawn.createCreep([CARRY, CARRY, CARRY, MOVE, MOVE, MOVE],
                                                "Carrier" + idx,
                                                { role: "carrier"}) == ERR_NAME_EXISTS) {
            idx += 1
        }
	},
	
	createBuilder: function() {
        var idx = 1
        while(Game.spawns.MainSpawn.createCreep([WORK, CARRY, CARRY, MOVE, MOVE],
                                                "Builder" + idx,
                                                { role: "builder"}) == ERR_NAME_EXISTS) {
            idx += 1
        }
	},
	
	createUpgrader: function() {
        var idx = 1
        while(Game.spawns.MainSpawn.createCreep([WORK, CARRY, CARRY, MOVE, MOVE],
                                                "Upgrader" + idx,
                                                { role: "upgrader"}) == ERR_NAME_EXISTS) {
            idx += 1
        }
	}
};


module.exports = CreepFactory;