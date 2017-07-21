Creep.prototype.moveWithPath =
    function (dest, opts = {range: 1, maxRooms: 1, obstacles: getObstacles(this.room)}) {
        try {
            if (dest.pos) dest = dest.pos;

            if (dest && dest.roomName == this.pos.roomName) {
                if (!global[this.room.name]) global[this.room.name] = {};
                if (!global[this.room.name].paths) global[this.room.name].paths = {};

                var thisPosName = (this.pos.x * 100 + this.pos.y).toString(36);
                var destPosName = (dest.x * 100 + dest.y).toString(36);

                if (global[this.room.name].paths[thisPosName + ',' + destPosName]) {
                    this.move(global[this.room.name].paths[thisPosName + ',' + destPosName][0]);
                    this.memory.goto++;

                    if (!global[this.room.name].paths[thisPosName + ',' + destPosName][this.memory.goto + 1]) {
                        delete this.memory.goto;
                    }
                }
                else {
                    var newPath = this.pos.findPathTo(dest, opts);

                    global[this.room.name].paths[thisPosName + ',' + destPosName] = _.map(newPath, (p) => p.direction);

                    this.move(global[this.room.name].paths[thisPosName + ',' + destPosName][0]);
                    this.memory.goto = 1;
                }
            }
            else if (dest) {
                this.travelTo(dest, opts);
            }
        }
        catch (err) {
            err && err.stack ? console.pathError(err.stack) : console.pathError(err);
        }
    };