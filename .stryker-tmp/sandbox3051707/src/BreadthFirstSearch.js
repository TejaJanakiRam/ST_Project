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
import Queue from "Queue";

/**
 * Breadth-first search is an algorithm for traversing a graph.
 *
 * It discovers all nodes reachable from the starting position by exploring all of the neighbor nodes at the present
 * depth prior to moving on to the nodes at the next depth level.
 *
 * (description adapted from https://en.wikipedia.org/wiki/Breadth-first_search)
 * @see https://www.koderdojo.com/blog/breadth-first-search-and-shortest-path-in-csharp-and-net-core
 */
export function breadthFirstSearch(graph, startingNode) {
  if (stryMutAct_9fa48("43")) {
    {}
  } else {
    stryCov_9fa48("43");
    // visited keeps track of all nodes visited
    const visited = new Set();

    // queue contains the nodes to be explored in the future
    const queue = new Queue();
    queue.enqueue(startingNode);
    while (stryMutAct_9fa48("45") ? false : stryMutAct_9fa48("44") ? queue.isEmpty() : (stryCov_9fa48("44", "45"), !queue.isEmpty())) {
      if (stryMutAct_9fa48("46")) {
        {}
      } else {
        stryCov_9fa48("46");
        // start with the queue's first node
        const node = queue.dequeue();
        if (stryMutAct_9fa48("49") ? false : stryMutAct_9fa48("48") ? true : stryMutAct_9fa48("47") ? visited.has(node) : (stryCov_9fa48("47", "48", "49"), !visited.has(node))) {
          if (stryMutAct_9fa48("50")) {
            {}
          } else {
            stryCov_9fa48("50");
            // mark the node as visited
            visited.add(node);
            const neighbors = graph[node];

            // put all its neighbors into the queue
            for (let i = 0; stryMutAct_9fa48("53") ? i >= neighbors.length : stryMutAct_9fa48("52") ? i <= neighbors.length : stryMutAct_9fa48("51") ? false : (stryCov_9fa48("51", "52", "53"), i < neighbors.length); stryMutAct_9fa48("54") ? i-- : (stryCov_9fa48("54"), i++)) {
              if (stryMutAct_9fa48("55")) {
                {}
              } else {
                stryCov_9fa48("55");
                queue.enqueue(neighbors[i]);
              }
            }
          }
        }
      }
    }
    return visited;
  }
}