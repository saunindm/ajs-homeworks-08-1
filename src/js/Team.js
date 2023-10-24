export default class Team {
    constructor() {
        this.members = new Set();
    }
    
    add(member) {
        if (this.members.has(member)) {
            throw new Error('This member is already in the team.'); 
        } else {
            this.members.add(member);
            return this.members;
        }
    }

    addAll(...theMembers) {
        const set = new Set(...theMembers);
        for (const member of set) {
            this.members.add(member);
        }
        return this.members;
    }

    toArray() {
        const set = new Set(this.members);
        return Array.from(set);
    }
}
