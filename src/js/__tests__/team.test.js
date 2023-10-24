import Team from '../Team';

let team;

beforeEach(() => {
  team = new Team();
});

test('add a member to the team', () => {
  team.add('Ivan');
  expect(team.toArray()).toEqual(['Ivan']);
});

test('should not add the same member twice', () => {
  team.add('Peter');
  expect(() => team.add('Peter')).toThrow('This member is already in the team.');
});

test('should add multiple members to the team using addAll().', () => {
  team.addAll(['Peter', 'Alex', 'Bob']);
  expect(team.toArray()).toEqual(['Peter', 'Alex', 'Bob']);
});

test('should not add duplicates when using addAll().', () => {
  team.addAll(['Peter', 'Alex', 'John', 'Bob', 'Peter', 'Alex']);
  expect(team.toArray()).toEqual(['Peter', 'Alex', 'John', 'Bob']);
});

test('should return an array of members', () => {
  team.addAll(['Peter', 'Alex', 'John']);
  expect(team.toArray()).toEqual(['Peter', 'Alex', 'John']);
});
