import { render } from './util';

// TODO: What is the value of foo?
// "foo3"
render('variables1', () => {
  let foo = 'foo1';
  foo = 'foo2';
  foo = 'foo3';
  return foo;
});

// TODO: Fix this code
// Done
render('variables2', () => {
  const bar = 'bar';
  // bar = 'bar';
  return bar;
});

// TODO: Fix this code
// Done
render('variables3', () => {
  const baz = 'baz';
  return baz;
});
