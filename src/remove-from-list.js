const { NotImplementedError } = require('../extensions/index.js');

// const { ListNode } = require('../extensions/list-node.js');

/**
 * Given a singly linked list of integers l and an integer k,
 * remove all elements from list l that have a value equal to k.
 *
 * @param {List} l
 * @param {Number} k
 * @return {List}
 *
 * @example
 * For l = [3, 1, 2, 3, 4, 5] and k = 3,
 * the output should be [1, 2, 4, 5]
 *
 * Singly - linked lists are already defined using interface
 * class ListNode {
 *   constructor(x) {
 *     this.value = x;
 *     this.next = null;
 *   }
 * }
 */

function removeKFromList(l, k) {
  let node = l;
  //объявим проверочную переменную
  let x = null;

  //делаем цикл пока элемент существует 
  while (node) {
  //если значение совпало, то следующая проверка  
    if (node.value === k) {
      //если переменной x еще не назначали значение (совпадение в первом звене), то
      if (!x) {
      //присваиваем текущему рабочему звену следующее значение, отбрасывая совпадение
        l = node.next;
      } else {
        //если переменная x уже назначени и в ней хранится положение, то она принимает значение следующего за отбрасываемым значение     
        x.next = node.next;
      }
    } else {
  //если значение НЕ совпало, то присваиваем переменной x значение текущего звена     
      x = node;
    }
  //присваиваем циклу новое значение  
    node = node.next;
  }

  return l;
}


module.exports = {
  removeKFromList
};
