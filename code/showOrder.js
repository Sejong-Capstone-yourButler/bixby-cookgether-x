module.exports.function = function showOrder (align, orderKeyword, request) {
  const console = require('console');
  const fail = require('fail');
  const http = require('http');

  var results = new Array
  var menuList = require('./MenuList.js') // 웹에서 읽어와야하면 수정필요.

  console.log(menuList)
  if (menuList.length > 0) {
    
    for(i in menuList) {
      let result = []
      result['orderID'] = menuList[i].orderID;
      for(j in menuList[i].orderList)
      {
        let order = []
        order[j].menuName = menuList[i].orderList.menuName;
        order[j].menuNum = menuList[i].orderList.menuNum;
        result['menuList'].push(order[j]);
      }
      result['stat'] = menuList[i].stat;
      results.push(result);
    }
  }
  return results;
}
