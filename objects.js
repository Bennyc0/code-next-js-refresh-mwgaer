import { render } from './util';

// TODO: What is the value of foo.bar and foo.baz?
// 42 and undefined
render('objects1', () => {
  const foo = {
    bar: 42,
  };
  return `foo.bar: ${foo.bar}, foo.baz: ${foo.baz}`;
});

// TODO: Create an object of objects and return it.
render('objects2', () => {
  const objects2 = {
    item1: 1,
    item2: 2,
  };
  return `item1: ${objects2.item1}, item2: ${objects2.item2}`;
});

// TODO: Create an array of objects and return the element at index 0.
render('objects3', () => {
  const array = [1, 2, 3, 4, 5];
  return array[0];
});

// Backtics (left of "1"), allows for formatting (as in f"something something {something}" in python)
