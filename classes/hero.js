export class Hero {
    constructor(config){
        this.id = config.id;
        this.createdAt = config.createdAt || new Date();
        this.name = config.name;
        this.race = config.race || "";
    }
}