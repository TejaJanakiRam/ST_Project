// @ts-nocheck
// starting at s
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
function solve(graph, s) {
  if (stryMutAct_9fa48("307")) {
    {}
  } else {
    stryCov_9fa48("307");
    const solutions = {};
    solutions[s] = stryMutAct_9fa48("308") ? ["Stryker was here"] : (stryCov_9fa48("308"), []);
    solutions[s].dist = 0;
    while (stryMutAct_9fa48("310") ? false : stryMutAct_9fa48("309") ? false : (stryCov_9fa48("309", "310"), true)) {
      if (stryMutAct_9fa48("311")) {
        {}
      } else {
        stryCov_9fa48("311");
        let p = null;
        let neighbor = null;
        let dist = Infinity;
        for (const n in solutions) {
          if (stryMutAct_9fa48("312")) {
            {}
          } else {
            stryCov_9fa48("312");
            if (stryMutAct_9fa48("315") ? false : stryMutAct_9fa48("314") ? true : stryMutAct_9fa48("313") ? solutions[n] : (stryCov_9fa48("313", "314", "315"), !solutions[n])) {
              if (stryMutAct_9fa48("316")) {
                {}
              } else {
                stryCov_9fa48("316");
                continue;
              }
            }
            const ndist = solutions[n].dist;
            const adj = graph[n];
            for (const a in adj) {
              if (stryMutAct_9fa48("317")) {
                {}
              } else {
                stryCov_9fa48("317");
                if (stryMutAct_9fa48("319") ? false : stryMutAct_9fa48("318") ? true : (stryCov_9fa48("318", "319"), solutions[a])) {
                  if (stryMutAct_9fa48("320")) {
                    {}
                  } else {
                    stryCov_9fa48("320");
                    continue;
                  }
                }
                const d = stryMutAct_9fa48("321") ? adj[a] - ndist : (stryCov_9fa48("321"), adj[a] + ndist);
                if (stryMutAct_9fa48("325") ? d >= dist : stryMutAct_9fa48("324") ? d <= dist : stryMutAct_9fa48("323") ? false : stryMutAct_9fa48("322") ? true : (stryCov_9fa48("322", "323", "324", "325"), d < dist)) {
                  if (stryMutAct_9fa48("326")) {
                    {}
                  } else {
                    stryCov_9fa48("326");
                    p = solutions[n];
                    neighbor = a;
                    dist = d;
                  }
                }
              }
            }
          }
        }

        // no more solutions
        if (stryMutAct_9fa48("329") ? dist !== Infinity : stryMutAct_9fa48("328") ? false : stryMutAct_9fa48("327") ? true : (stryCov_9fa48("327", "328", "329"), dist === Infinity)) {
          if (stryMutAct_9fa48("330")) {
            {}
          } else {
            stryCov_9fa48("330");
            break;
          }
        }

        // extend parent's solution path
        solutions[neighbor] = p.concat(neighbor);
        // extend parent's cost
        solutions[neighbor].dist = dist;
      }
    }
    return solutions;
  }
}
export { solve };