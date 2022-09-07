const axios = require('axios');
const fs = require('fs');
const express = require('express');
var app = express();

var returnJson = {};

// make a json object with itemJson as the template
function makeItemJson(quantity, order_type, platinum, ingame_name, status, platform, region, mod_rank) {
  var itemJson = {
    "quantity": quantity,
    "order_type": order_type,
    "platinum": platinum,
    "user": {
      "ingame_name": ingame_name,
      "status": status
    },
    "platform": platform,
    "region": region,
    "mod_rank": mod_rank
  };
  return itemJson;
}

export default (req, res) => {
  var { query: { item_name } } = req
  item_name = item_name.toLowerCase();
  item_name = item_name.replace(/ /g, '_');

  const warframe_market_url = 'https://api.warframe.market/v1/items/' + item_name + '/orders';
  var options = { headers: { Platform: 'pc' } };

  //axios request
  axios.get(warframe_market_url, options)
    .then(function (response) {
      var unfiltered_orders = response.data.payload.orders;
      var counter = 1;
      var y = 0;

      //filter orders
      for (var i = 0; i < unfiltered_orders.length; i++) {
        //set current order to variable order
        var order = unfiltered_orders[i];
        // check status is "ingame", order_type is "sell", and region is "en"
        if (order.user.status == 'ingame' && order.order_type == 'sell' && order.region == 'en') {
          //remove unwanted information from order
          delete order.visible;
          delete order.user.reputation;
          delete order.user.region;
          delete order.user.avatar;
          delete order.user.last_seen;
          delete order.user.id;
          delete order.creation_date;
          delete order.last_update;
          delete order.id;

          // use the makeItemJson function to make a json object with the order data
          var itemJson = makeItemJson(order.quantity, order.order_type, order.platinum, order.user.ingame_name, order.user.status, order.platform, order.region, order.mod_rank);

          // append all itemJson objects to a json array called returnJson
          returnJson[y] = itemJson;
          y++;
        }
      };
      let size = 0, key;
      for (key in returnJson) {
        if (returnJson.hasOwnProperty(key)) size++;
      }
      // console.log(size)
      var tableDataList = [];
      var dataLength = size - 1;
      for (var i = 0; i < dataLength; i++) {
        tableDataList.push({ 'username': returnJson[i].user.ingame_name, 'platinum': returnJson[i].platinum, 'quantity': returnJson[i].quantity, 'mod_rank': returnJson[i].mod_rank })
      }
      // // alert(JSON.stringify(tableDataList))
      tableDataList = JSON.stringify(tableDataList)
      // res.status(200).send(dataLength);
      res.status(200).send(tableDataList);
    })
    .catch(function (error) {
      console.log(error);
      res.status(500).send(error);
    })
};
