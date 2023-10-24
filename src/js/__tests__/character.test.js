import Character from '../Character';
  
test('Creating a character', () => {
    const character = new Character('Ivan');
    const correct = {
        name: 'Ivan'
    };

    expect(character).toEqual(correct);
});