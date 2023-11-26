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
 * Breadth-first approach can be applied to determine the shortest path between two nodes in an equi-weighted graph.
 *
 * It searches the target node among all neighbors of the starting node, then the process is repeated on the level of
 * the neighbors of the neighbors and so on.
 *
 * @see https://en.wikipedia.org/wiki/Breadth-first_search
 * @see https://www.koderdojo.com/blog/breadth-first-search-and-shortest-path-in-csharp-and-net-core
 */
export function breadthFirstShortestPath(graph, startNode, targetNode) {
  if (stryMutAct_9fa48("56")) {
    {}
  } else {
    stryCov_9fa48("56");
    // check if startNode & targetNode are identical
    if (stryMutAct_9fa48("59") ? startNode !== targetNode : stryMutAct_9fa48("58") ? false : stryMutAct_9fa48("57") ? true : (stryCov_9fa48("57", "58", "59"), startNode === targetNode)) {
      if (stryMutAct_9fa48("60")) {
        {}
      } else {
        stryCov_9fa48("60");
        return stryMutAct_9fa48("61") ? [] : (stryCov_9fa48("61"), [startNode]);
      }
    }

    // visited keeps track of all nodes visited
    const visited = new Set();

    // queue contains the paths to be explored in the future
    const initialPath = stryMutAct_9fa48("62") ? [] : (stryCov_9fa48("62"), [startNode]);
    const queue = new Queue();
    queue.enqueue(initialPath);
    while (stryMutAct_9fa48("64") ? false : stryMutAct_9fa48("63") ? queue.isEmpty() : (stryCov_9fa48("63", "64"), !queue.isEmpty())) {
      if (stryMutAct_9fa48("65")) {
        {}
      } else {
        stryCov_9fa48("65");
        // start with the queue's first path
        const path = queue.dequeue();
        const node = path[stryMutAct_9fa48("66") ? path.length + 1 : (stryCov_9fa48("66"), path.length - 1)];

        // explore this node if it hasn't been visited yet
        if (stryMutAct_9fa48("69") ? false : stryMutAct_9fa48("68") ? true : stryMutAct_9fa48("67") ? visited.has(node) : (stryCov_9fa48("67", "68", "69"), !visited.has(node))) {
          if (stryMutAct_9fa48("70")) {
            {}
          } else {
            stryCov_9fa48("70");
            // mark the node as visited
            visited.add(node);
            const neighbors = graph[node];

            // create a new path in the queue for each neighbor
            for (let i = 0; stryMutAct_9fa48("73") ? i >= neighbors.length : stryMutAct_9fa48("72") ? i <= neighbors.length : stryMutAct_9fa48("71") ? false : (stryCov_9fa48("71", "72", "73"), i < neighbors.length); stryMutAct_9fa48("74") ? i-- : (stryCov_9fa48("74"), i++)) {
              if (stryMutAct_9fa48("75")) {
                {}
              } else {
                stryCov_9fa48("75");
                const newPath = path.concat(stryMutAct_9fa48("76") ? [] : (stryCov_9fa48("76"), [neighbors[i]]));

                // the first path to contain the target node is the shortest path
                if (stryMutAct_9fa48("79") ? neighbors[i] !== targetNode : stryMutAct_9fa48("78") ? false : stryMutAct_9fa48("77") ? true : (stryCov_9fa48("77", "78", "79"), neighbors[i] === targetNode)) {
                  if (stryMutAct_9fa48("80")) {
                    {}
                  } else {
                    stryCov_9fa48("80");
                    return newPath;
                  }
                }

                // queue the new path
                queue.enqueue(newPath);
              }
            }
          }
        }
      }
    }

    // the target node was not reachable
    return stryMutAct_9fa48("81") ? ["Stryker was here"] : (stryCov_9fa48("81"), []);
  }
}