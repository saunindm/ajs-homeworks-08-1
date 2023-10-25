import Character from '../Character';
  
test('Creating a character', () => {
    const character = new Character('Robin');
    const correct = {
        name: 'Robin'
    };
    expect(character).toEqual(correct);
});