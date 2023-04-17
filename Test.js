const { NotImplementedError } = require('./extensions/index.js');

const { ListNode } = require('./extensions/list-node.js');


class Queue {
    constructor() {
      this.first = null;
      this.last = null;
    }

    

    //getUnderlyingList() {
    //  return this.first;
    //}

    enqueue(value) {
      let newNode = new ListNode(value);
      //если очереди не существует, добавляем значения листнода
      if (!this.first) {
        this.first = newNode
        ;
      } else {
      //конец очереди будетя являться началом очереди  
        let last = this.first;
      //пока существуют значения очереди  
        while(last.next) {
        //Хвосту очереди присваиваются следующие значения   
          last = last.next;
        }
        //теперь уже добавляем значения листнода
        last.next = new ListNode(value);
      }
    }

    dequeue() {
      throw new NotImplementedError('Not implemented');
      // remove line with error and write your code here
    }
}

module.exports = {
  Queue
};