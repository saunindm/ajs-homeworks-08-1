import Team from '../Team';
import Character from '../Character';

let team, ivan, peter, alex, bob, john;

beforeEach(() => {
    team = new Team();
    ivan = new Character('Ivan');
    peter = new Character('Peter');
    alex = new Character('Alex');
    bob = new Character('Bob');
    john = new Character('John');
});

test('add a member to the team', () => {
    team.add(ivan);
    expect(team.toArray()).toEqual([ivan]);
});

test('should not add the same member twice', () => {
    team.add(peter);
    expect(() => team.add(peter)).toThrow('This member is already in the team.');
});

test('should add multiple members to the team using addAll().', () => {
    team.addAll(peter, alex, bob);
    expect(team.toArray()).toEqual([peter, alex, bob]);
});

test('should not add duplicates when using addAll().', () => {
    team.addAll(peter, alex, john, bob, peter, alex);
    expect(team.toArray()).toEqual([peter, alex, john, bob]);
});

test('should return an array of members', () => {
    team.addAll(peter, alex, john);
    expect(team.toArray()).toEqual([peter, alex, john]);
});
