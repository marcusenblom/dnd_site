export class Monster {
    constructor(config){
        this.id = config.id;
        this.createdAt = config.createdAt || new Date();
        this.name = config.name;
        this.monster_type = config.monster_type || "";
        this.max_hp = config.max_hp || 1;
        this.curr_hp = config.max_hp || 1;
        this.ac = config.ac || 16;
    }
}