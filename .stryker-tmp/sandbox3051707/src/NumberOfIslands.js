/* Number of Islands
https://dev.to/rattanakchea/amazons-interview-question-count-island-21h6
Given a 2d grid map of '1's (land) and '0's (water), count the number of islands. An island is surrounded by water and is formed by connecting adjacent lands horizontally or vertically. You may assume all four edges of the grid are all surrounded by water.

a two dimensional grid map
each element is going to represent a piece of land
1 is land,
0 is water
output a number which is the number of islands

Example 1:
  Input:
  11110
  11010
  11000
  00000

  Output: 1

Example 2:
  Input:
  11000
  11000
  00100
  00011

  Output: 3

I: two dimensional array
O: a single integer; total number of islands

Pseudocode:
  OUTER FUNCTION
    set count to 0

    INNER FUNCTION - flood (col, row)
      if the tile is water
        return
      make tile water(flood tile)
      invoke flood on the neighbor coordinates

    iterate over the matrix (col, row)
      if the current element is a 1
        increment count
        invoke flood (coordinates for col and row)

    Return the count
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
const islands = matrixGrid => {
  if (stryMutAct_9fa48("530")) {
    {}
  } else {
    stryCov_9fa48("530");
    const matrix = matrixGrid;
    let counter = 0;
    const flood = (row, col) => {
      if (stryMutAct_9fa48("531")) {
        {}
      } else {
        stryCov_9fa48("531");
        if (stryMutAct_9fa48("534") ? row < 0 && col < 0 : stryMutAct_9fa48("533") ? false : stryMutAct_9fa48("532") ? true : (stryCov_9fa48("532", "533", "534"), (stryMutAct_9fa48("537") ? row >= 0 : stryMutAct_9fa48("536") ? row <= 0 : stryMutAct_9fa48("535") ? false : (stryCov_9fa48("535", "536", "537"), row < 0)) || (stryMutAct_9fa48("540") ? col >= 0 : stryMutAct_9fa48("539") ? col <= 0 : stryMutAct_9fa48("538") ? false : (stryCov_9fa48("538", "539", "540"), col < 0)))) return; // Off the map above or left
        if (stryMutAct_9fa48("543") ? row >= matrix.length && col >= matrix[row].length : stryMutAct_9fa48("542") ? false : stryMutAct_9fa48("541") ? true : (stryCov_9fa48("541", "542", "543"), (stryMutAct_9fa48("546") ? row < matrix.length : stryMutAct_9fa48("545") ? row > matrix.length : stryMutAct_9fa48("544") ? false : (stryCov_9fa48("544", "545", "546"), row >= matrix.length)) || (stryMutAct_9fa48("549") ? col < matrix[row].length : stryMutAct_9fa48("548") ? col > matrix[row].length : stryMutAct_9fa48("547") ? false : (stryCov_9fa48("547", "548", "549"), col >= matrix[row].length)))) return; // Off the map below or right

        const tile = matrix[row][col];
        if (stryMutAct_9fa48("552") ? tile === '1' : stryMutAct_9fa48("551") ? false : stryMutAct_9fa48("550") ? true : (stryCov_9fa48("550", "551", "552"), tile !== (stryMutAct_9fa48("553") ? "" : (stryCov_9fa48("553"), '1')))) return;
        matrix[row][col] = stryMutAct_9fa48("554") ? "" : (stryCov_9fa48("554"), '0');
        flood(stryMutAct_9fa48("555") ? row - 1 : (stryCov_9fa48("555"), row + 1), col); // Down
        flood(stryMutAct_9fa48("556") ? row + 1 : (stryCov_9fa48("556"), row - 1), col); // Up
        flood(row, stryMutAct_9fa48("557") ? col - 1 : (stryCov_9fa48("557"), col + 1)); // Right
        flood(row, stryMutAct_9fa48("558") ? col + 1 : (stryCov_9fa48("558"), col - 1)); // Left
      }
    };

    for (let row = 0; stryMutAct_9fa48("561") ? row >= matrix.length : stryMutAct_9fa48("560") ? row <= matrix.length : stryMutAct_9fa48("559") ? false : (stryCov_9fa48("559", "560", "561"), row < matrix.length); stryMutAct_9fa48("562") ? row -= 1 : (stryCov_9fa48("562"), row += 1)) {
      if (stryMutAct_9fa48("563")) {
        {}
      } else {
        stryCov_9fa48("563");
        for (let col = 0; stryMutAct_9fa48("566") ? col >= matrix[row].length : stryMutAct_9fa48("565") ? col <= matrix[row].length : stryMutAct_9fa48("564") ? false : (stryCov_9fa48("564", "565", "566"), col < matrix[row].length); stryMutAct_9fa48("567") ? col -= 1 : (stryCov_9fa48("567"), col += 1)) {
          if (stryMutAct_9fa48("568")) {
            {}
          } else {
            stryCov_9fa48("568");
            const current = matrix[row][col];
            if (stryMutAct_9fa48("571") ? current !== '1' : stryMutAct_9fa48("570") ? false : stryMutAct_9fa48("569") ? true : (stryCov_9fa48("569", "570", "571"), current === (stryMutAct_9fa48("572") ? "" : (stryCov_9fa48("572"), '1')))) {
              if (stryMutAct_9fa48("573")) {
                {}
              } else {
                stryCov_9fa48("573");
                flood(row, col);
                stryMutAct_9fa48("574") ? counter -= 1 : (stryCov_9fa48("574"), counter += 1);
              }
            }
          }
        }
      }
    }
    return counter;
  }
};
export { islands };