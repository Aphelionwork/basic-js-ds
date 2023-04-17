const { NotImplementedError } = require('../extensions/index.js');
const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Stack with a given interface via array.
 *
 * @example
 * const stack = new Stack();
 *
 * stack.push(1); // adds the element to the stack
 * stack.peek(); // returns the peek, but doesn't delete it, returns 1
 * stack.pop(); // returns the top element from stack and deletes it, returns 1
 * stack.pop(); // undefined
 *
 */
class Stack {
  constructor() {
    this.head = null;
    this.length = null;
  }
  push(value) {
  // помещаем значение на верхушку стека
  const node = new ListNode(value);
  
  if (this.head) {
  //если какой-то элемент есть вверху, то следующей старая верхушка
    node.next = this.head;
  // верхушка - это новый элемент
    this.head = node;
  } else {
  //если верхушки не было - создаем ее  
    this.head = node;
  }
  //увеличиваем высоту стека
    this.length++;
  }

  pop(value) {
    //присваиваем переменной верхнюю позицию стека
    const current = this.head;
    //переназначем верхушку следующему элементу стека
    this.head = this.head.next;
    //уменьшаем высоту стека
    this.length--;
    //возвращаем удаленное значение
    return current.value;
  }

  peek(value) {
    return this.head.value;
  }
}

//The Rolling Scopes School - Data Structures with JS 01:07:00

module.exports = {
  Stack
};
