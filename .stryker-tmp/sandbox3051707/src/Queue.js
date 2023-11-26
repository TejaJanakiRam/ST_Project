/* Queue
 * A Queue is a data structure that allows you to add an element to the end of
 * a list and remove the item at the front. A queue follows a FIFO (First In First Out)
 * system, where the first item to enter the queue is the first to be removed,
 * All these operation complexities are O(1).
 * This implementation following the linked list structure.
 */
// @ts-nocheck
function stryNS_9fa48() {
  var g = typeof globalThis === 'object' && globalThis && globalThis.Math === Math && globalThis || new Function("return this")();
  var ns = g.__stryker__ || (g.__stryker__ = {});
  if (ns.activeMutant === undefined && g.process && g.process.env && g.process.env.__STRYKER_ACTIVE_MUTANT__) {
    ns.activeMutant = g.process.env.__STRYKER_ACTIVE_MUTANT__;
  }
  function retrieveNS() {
    return ns;
  }
  stryNS_9fa48 = retrieveNS;
  return retrieveNS();
}
stryNS_9fa48();
function stryCov_9fa48() {
  var ns = stryNS_9fa48();
  var cov = ns.mutantCoverage || (ns.mutantCoverage = {
    static: {},
    perTest: {}
  });
  function cover() {
    var c = cov.static;
    if (ns.currentTestId) {
      c = cov.perTest[ns.currentTestId] = cov.perTest[ns.currentTestId] || {};
    }
    var a = arguments;
    for (var i = 0; i < a.length; i++) {
      c[a[i]] = (c[a[i]] || 0) + 1;
    }
  }
  stryCov_9fa48 = cover;
  cover.apply(null, arguments);
}
function stryMutAct_9fa48(id) {
  var ns = stryNS_9fa48();
  function isActive(id) {
    if (ns.activeMutant === id) {
      if (ns.hitCount !== void 0 && ++ns.hitCount > ns.hitLimit) {
        throw new Error('Stryker: Hit count limit reached (' + ns.hitCount + ')');
      }
      return true;
    }
    return false;
  }
  stryMutAct_9fa48 = isActive;
  return isActive(id);
}
class Queue {
  #size;
  constructor() {
    if (stryMutAct_9fa48("575")) {
      {}
    } else {
      stryCov_9fa48("575");
      this.head = null;
      this.tail = null;
      this.#size = 0;
      return Object.seal(this);
    }
  }
  get length() {
    if (stryMutAct_9fa48("576")) {
      {}
    } else {
      stryCov_9fa48("576");
      return this.#size;
    }
  }

  /**
   * @description - Add a value to the end of the queue
   * @param {*} data
   * @returns {number} - The current size of queue
   */
  enqueue(data) {
    if (stryMutAct_9fa48("577")) {
      {}
    } else {
      stryCov_9fa48("577");
      const node = stryMutAct_9fa48("578") ? {} : (stryCov_9fa48("578"), {
        data,
        next: null
      });
      if (stryMutAct_9fa48("581") ? !this.head || !this.tail : stryMutAct_9fa48("580") ? false : stryMutAct_9fa48("579") ? true : (stryCov_9fa48("579", "580", "581"), (stryMutAct_9fa48("582") ? this.head : (stryCov_9fa48("582"), !this.head)) && (stryMutAct_9fa48("583") ? this.tail : (stryCov_9fa48("583"), !this.tail)))) {
        if (stryMutAct_9fa48("584")) {
          {}
        } else {
          stryCov_9fa48("584");
          this.head = node;
          this.tail = node;
        }
      } else {
        if (stryMutAct_9fa48("585")) {
          {}
        } else {
          stryCov_9fa48("585");
          this.tail.next = node;
          this.tail = node;
        }
      }
      return stryMutAct_9fa48("586") ? --this.#size : (stryCov_9fa48("586"), ++this.#size);
    }
  }

  /**
   * @description - Removes the value at the front of the queue
   * @returns {*} - The first data of the queue
   */
  dequeue() {
    if (stryMutAct_9fa48("587")) {
      {}
    } else {
      stryCov_9fa48("587");
      if (stryMutAct_9fa48("589") ? false : stryMutAct_9fa48("588") ? true : (stryCov_9fa48("588", "589"), this.isEmpty())) {
        if (stryMutAct_9fa48("590")) {
          {}
        } else {
          stryCov_9fa48("590");
          throw new Error(stryMutAct_9fa48("591") ? "" : (stryCov_9fa48("591"), 'Queue is Empty'));
        }
      }
      const firstData = this.peekFirst();
      this.head = this.head.next;
      if (stryMutAct_9fa48("594") ? false : stryMutAct_9fa48("593") ? true : stryMutAct_9fa48("592") ? this.head : (stryCov_9fa48("592", "593", "594"), !this.head)) {
        if (stryMutAct_9fa48("595")) {
          {}
        } else {
          stryCov_9fa48("595");
          this.tail = null;
        }
      }
      stryMutAct_9fa48("596") ? this.#size++ : (stryCov_9fa48("596"), this.#size--);
      return firstData;
    }
  }

  /**
   * @description - Return the item at the front of the queue
   * @returns {*}
   */
  peekFirst() {
    if (stryMutAct_9fa48("597")) {
      {}
    } else {
      stryCov_9fa48("597");
      if (stryMutAct_9fa48("599") ? false : stryMutAct_9fa48("598") ? true : (stryCov_9fa48("598", "599"), this.isEmpty())) {
        if (stryMutAct_9fa48("600")) {
          {}
        } else {
          stryCov_9fa48("600");
          throw new Error(stryMutAct_9fa48("601") ? "" : (stryCov_9fa48("601"), 'Queue is Empty'));
        }
      }
      return this.head.data;
    }
  }

  /**
   * @description - Return the item at the tail of the queue
   * @returns {*}
   */
  peekLast() {
    if (stryMutAct_9fa48("602")) {
      {}
    } else {
      stryCov_9fa48("602");
      if (stryMutAct_9fa48("604") ? false : stryMutAct_9fa48("603") ? true : (stryCov_9fa48("603", "604"), this.isEmpty())) {
        if (stryMutAct_9fa48("605")) {
          {}
        } else {
          stryCov_9fa48("605");
          throw new Error(stryMutAct_9fa48("606") ? "" : (stryCov_9fa48("606"), 'Queue is Empty'));
        }
      }
      return this.tail.data;
    }
  }

  /**
   * @description - Return the array of Queue
   * @returns {Array<*>}
   */
  toArray() {
    if (stryMutAct_9fa48("607")) {
      {}
    } else {
      stryCov_9fa48("607");
      const array = stryMutAct_9fa48("608") ? ["Stryker was here"] : (stryCov_9fa48("608"), []);
      let node = this.head;
      while (stryMutAct_9fa48("609") ? false : (stryCov_9fa48("609"), node)) {
        if (stryMutAct_9fa48("610")) {
          {}
        } else {
          stryCov_9fa48("610");
          array.push(node.data);
          node = node.next;
        }
      }
      return array;
    }
  }

  /**
   * @description - Return is queue empty or not
   * @returns {boolean}
   */
  isEmpty() {
    if (stryMutAct_9fa48("611")) {
      {}
    } else {
      stryCov_9fa48("611");
      return stryMutAct_9fa48("614") ? this.length !== 0 : stryMutAct_9fa48("613") ? false : stryMutAct_9fa48("612") ? true : (stryCov_9fa48("612", "613", "614"), this.length === 0);
    }
  }
}
export default Queue;