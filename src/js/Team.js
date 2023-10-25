export default class Team {
    constructor() {
        this.members = new Set();
    }
    
    add(character) {
        if (this.members.has(character)) {
            throw new Error('This member is already in the team.'); 
        }
        this.members.add(character);
        return this.members;
    }

    addAll(...characters) {
        characters.forEach(character => this.members.add(character));
        return this.members;
    }

    toArray() {
        return [...this.members];
    }
}
