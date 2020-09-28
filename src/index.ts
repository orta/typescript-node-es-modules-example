import { printSomething } from './anotherFile';

export function fn(arr: number[]) {
  return [1, ...arr];
}

console.log('hello world');

printSomething('new string from function in another file');
