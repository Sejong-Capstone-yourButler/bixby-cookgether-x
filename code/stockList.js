module.exports.function = function stockList (ingredientName,stockKeyword,request) {
  const http = require("http");
  const stockListOptions = {
    format:'json'
  }
  const loginOptions = {
    format:'json',
    passasjson:true
  };
  const loginParams={
    "email":"owner@gmail.com",
    "password":"12345"
  };
  const loginResult = http.postUrl("https://bixby-eats-backend.herokuapp.com/login",loginParams,loginOptions);
  const token = loginResult.token;
  const stockListResult = http.getUrl("https://bixby-eats-backend.herokuapp.com/restaurants/1/stocks",stockListOptions);
  
  let result = [];
  if(stockListResult.ok==TRUE){
    stockListResult.stocks.forEach(apistock=>
    {
      let stock = {};
      if(ingredientName == null)
      {
        stock.ingredientName = apistock.name;
        stock.stockNum = apistock.count;
      }
      else if(apistock.name == ingredientName)
      {
        stock.ingredientName = apistock.name;
        stock.stockNum = apistock.count;
      }
      result.push(stock);
    })
  }
  return result;
}