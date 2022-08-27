const axios = require('axios');
const fs = require('fs');
const express = require('express');
var app = express();

export default (req, res) => {
  var { query: { item_name } } = req
  item_name = item_name.toLowerCase();
  item_name = item_name.replace(/ /g, '_');

  const warframe_market_url = 'https://api.warframe.market/v1/items/' + item_name + '/orders';
  var options = {
    headers: { Platform: 'pc' }
  };

  var append_data = '';

  //average and cheepest price
  var total_price = 0;
  var total_orders = 0;
  var cheapest_price = 0;

  //axios request
  axios.get(warframe_market_url, options)
    .then(function (response) {
      //store response in variable
      var unfiltered_orders = response.data.payload.orders;

      //progress bar
      var totallength = unfiltered_orders.length;
      var counter = 1;

      //filter orders
      for (var i = 0; i < unfiltered_orders.length; i++) {
        //progress bar display
        //console.log("Progress: " + counter + "/" + totallength);
        //console.log("");

        //set current order to variable order
        var order = unfiltered_orders[i];

        //check if uder is online in game
        if (order.user.status != 'ingame') { //change to offline/online/ingame to filter accordingly
          counter++;
          continue;
          //check if order is a sell order
        } else if (order.order_type != 'sell') {
          counter++;
          continue;
          //check if order is for the correct region
        } else if (order.region != 'en') {
          counter++;
          continue;
        } else {
          counter++;

          //price calculation
          total_price += order.platinum; //add price to total price
          total_orders++; //add order to total orders
          if (order.platinum < cheapest_price || cheapest_price == 0) { //check if price is cheaper than cheapest price
            cheapest_price = order.platinum;
          };
          var ingame_name = order.user.ingame_name; //get ingame name

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

          //add order to append_data
          var data = JSON.stringify(order, null, 4);
          append_data = append_data + '"order' + String(i + 1) + '": ' + data + ',\n';
        };
      };
      //remove last comma from append_data
      append_data = append_data.substring(0, append_data.length - 2);

      //pricing calculation
      var average_price = (total_price / total_orders).toFixed(2); //calculate average price

      //format pricing information as JSON string
      var pricing = '{\n"pricing": {\n\t"average price": ' + average_price + ',\n\t"cheapest_price": ' + cheapest_price + ',\n\t"ingame_name": "' + ingame_name + '"\n},\n';

      //return success code to client
      res.status(200).send(pricing + append_data + '\n}');

    }).catch(function (error) {
      console.log(error);
      res.status(500).send("Error");
    })
};
