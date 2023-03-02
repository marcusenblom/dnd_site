export class Encounter {
    constructor(config){
        this.id = config.id;
        this.name = config.name;
        this.createdAt = config.createdAt || new Date();
        this.bgImage = config.bgImage || "1";

        this.monsters = config.monsters || [];
        this.heroes = [];
    }
}