module.exports = () => {

    isUndefinedOrNull = function (val) {
        return val === undefined || val === null;
    };

    Process = class {
        constructor(processType, roomName, object) {
            this.pN = processType;
            this.prio = getPrio(processType);
            this.rmN = roomName;
            if (object) this.obj = object.id;
        }
    };

    getPrio = function(process) {
        switch (process) {
            case 'checkForToken': return -1;
            case 'doStats': return 20;
            case 'checkRooms': return 11;
            case 'checkCreeps': return 10;
            case 'doTowers': return 15;
            case 'doHarvest': return 4;
            case 'fillSpawn': return 4;
            case 'praiseRC': return 3;
            case 'takeCare': return 3;
            case 'room': return 10;
            case 'doTerminal': return -1;
            default: return 0;
        }
    };

    spawnNewProcess = function(processType, roomName, object) {
        var tag = processType + ':' + Game.time % 100 + Math.round(Math.random() * 100);

        global.Mem.p[tag] = new Process(processType, roomName, object);
    };

    makeid = function ()
    {
        var text = "";
        var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

        for( var i=0; i < 5; i++ )
            text += possible.charAt(Math.floor(Math.random() * possible.length));

        return text;
    };

    storageEnergy = 50000;

    terminalGoals = {
        [RESOURCE_HYDROGEN]: 6000,
        [RESOURCE_OXYGEN]: 6000,
        [RESOURCE_UTRIUM]: 6000,
        [RESOURCE_KEANIUM]: 6000,
        [RESOURCE_LEMERGIUM]: 6000,
        [RESOURCE_ZYNTHIUM]: 6000,
        [RESOURCE_CATALYST]: 6000,

        [RESOURCE_HYDROXIDE]: 6000,
        [RESOURCE_GHODIUM]: 6000,
        [RESOURCE_ZYNTHIUM_KEANITE]: 6000,
        [RESOURCE_UTRIUM_LEMERGITE]: 6000,


        [RESOURCE_UTRIUM_HYDRIDE]: 6000,
        [RESOURCE_UTRIUM_OXIDE]: 6000,
        [RESOURCE_KEANIUM_HYDRIDE]: 6000,
        [RESOURCE_KEANIUM_OXIDE]: 6000,
        [RESOURCE_LEMERGIUM_HYDRIDE]: 6000,
        [RESOURCE_LEMERGIUM_OXIDE]: 6000,
        [RESOURCE_ZYNTHIUM_HYDRIDE]: 6000,
        [RESOURCE_ZYNTHIUM_OXIDE]: 6000,
        [RESOURCE_GHODIUM_HYDRIDE]: 6000,
        [RESOURCE_GHODIUM_OXIDE]: 6000,

        [RESOURCE_UTRIUM_ACID]: 3000,
        [RESOURCE_UTRIUM_ALKALIDE]: 3000,
        [RESOURCE_KEANIUM_ACID]: 3000,
        [RESOURCE_KEANIUM_ALKALIDE]: 3000,
        [RESOURCE_LEMERGIUM_ACID]: 3000,
        [RESOURCE_LEMERGIUM_ALKALIDE]: 3000,
        [RESOURCE_ZYNTHIUM_ACID]: 3000,
        [RESOURCE_ZYNTHIUM_ALKALIDE]: 3000,
        [RESOURCE_GHODIUM_ACID]: 3000,
        [RESOURCE_GHODIUM_ALKALIDE]: 3000,

        [RESOURCE_CATALYZED_UTRIUM_ACID]: 6000,
        [RESOURCE_CATALYZED_UTRIUM_ALKALIDE]: 6000,
        [RESOURCE_CATALYZED_KEANIUM_ACID]: 6000,
        [RESOURCE_CATALYZED_KEANIUM_ALKALIDE]: 6000,
        [RESOURCE_CATALYZED_LEMERGIUM_ACID]: 6000,
        [RESOURCE_CATALYZED_LEMERGIUM_ALKALIDE]: 6000,
        [RESOURCE_CATALYZED_ZYNTHIUM_ACID]: 6000,
        [RESOURCE_CATALYZED_ZYNTHIUM_ALKALIDE]: 6000,
        [RESOURCE_CATALYZED_GHODIUM_ACID]: 6000,
        [RESOURCE_CATALYZED_GHODIUM_ALKALIDE]: 6000
    };
};