/**
 * @jest-environment jsdom
 */
import Tasks from './manageTask';

const TestFile = new Tasks();
// Add
describe('Add functionality', () => {
  it('should be defined', () => {
    expect(TestFile.addTask('me')).toBeDefined();
  });

  it(' should return an array length of 2', () => {
    expect(TestFile.addTask('hello').length).toBe(2);
  });
});
// delete
describe('delete functionality', () => {
  it('should return a length of zero ', () => {
    expect(TestFile.removeTask()).not.toBeUndefined();
    TestFile.addTask('world');
    TestFile.removeTask(0);
    expect(TestFile.array.length).toBe(2);
  });
});