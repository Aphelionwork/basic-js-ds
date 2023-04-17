const { NotImplementedError } = require('../extensions/index.js');
const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */
class Queue {
    constructor() {
      this.head = null;
      this.tail = null;
      this.length = null;
    }

    getUnderlyingList() {
      return this.head;
    }

    enqueue(value) {
      //создаем очередной элемент в формате списка
      const node = new ListNode(value);
      //если какой-то элемент есть в очереди
      if (this.head) {
        this.tail.next = node;
        this.tail = node;
      } else {
        this.head = node;
        this.tail = node;
        }
        //удлиняем очередь
        this.length++;
    }
    

    dequeue(value) {
    //присваиваем переменной первую позицию в очереди
    const current = this.head;
    //переназначем первую позицию следующему элементу очереди
    this.head = this.head.next;
    //укорачиваем очередь
    this.length--;
    //вернем удаленное значение
    return current.value;
    }

    //The Rolling Scopes School - Data Structures with JS 01:18:00
}

module.exports = {
  Queue
};
