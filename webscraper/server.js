//MODELS
const axios = require('axios').default;
const fs = require('fs');
const express=require('express');
var app=express();
const fork = require('child_process').fork;

//FUNCTIONS
//function itemValidation(item_name){
    
//}

//SERVER INITIALISATION
var port = 8081;
var server = app.listen(port,function(){
    var child = fork('./data/data_checker.js');
    console.log("App hosted at localhost:"+port); 
});

//ROUTES
//get one item based on item name
app.get('/item/:item_name', function(req,res) {
    //get item name from request params
    var item_name = req.params.item_name;
    item_name = item_name.toLowerCase();
    item_name = item_name.replace(/ /g, '_');

    //initialise url for axios request
    var warframe_market_url = 'https://api.warframe.market/v1/items/' + item_name + '/orders';
    var options = {
        headers: {
            Platform: 'pc'
        }
    };

    // write JSON string to a file
    var filename = './output/' + item_name + '.json';
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
            for(var i = 0; i < unfiltered_orders.length; i++){
                //progress bar display
                //console.log("Progress: " + counter + "/" + totallength);
                //console.log("");
                
                //set current order to variable order
                var order = unfiltered_orders[i];

                //check if uder is online in game
                if(order.user.status != 'ingame'){ //change to offline/online/ingame to filter accordingly
                    counter ++;
                    continue;
                //check if order is a sell order
                } else if(order.order_type != 'sell'){
                    counter ++;
                    continue;
                //check if order is for the correct region
                } else if(order.region != 'en'){
                    counter ++;
                    continue;
                } else{
                    counter ++;
                    
                    //price calculation
                    total_price += order.platinum; //add price to total price
                    total_orders ++; //add order to total orders
                    if(order.platinum < cheapest_price || cheapest_price == 0){ //check if price is cheaper than cheapest price
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
                    append_data = append_data + '"order' + String(i+1) + '": ' + data + ',\n';
                };
            };
            //remove last comma from append_data
            append_data = append_data.substring(0, append_data.length - 2);

            //pricing calculation
            var average_price = (total_price / total_orders).toFixed(2); //calculate average price
            
            //format pricing information as JSON string
            var pricing = '{\n"pricing": {\n\t"average price": ' + average_price + ',\n\t"cheapest_price": ' + cheapest_price + ',\n\t"ingame_name": "' + ingame_name + '"\n},\n'; 
            
            //write JSON string to file
            fs.writeFile(filename, pricing + append_data + '\n}', (err) => {
                if (err) {
                    throw err;
                }
                console.log("JSON data is saved.");
            });

            //return success code to client
            res.status(200).send("Success");

        }).catch(function (error) { 
            console.log(error);
            res.status(500).send("Error");
        })
});

//get all items
app.get('/item/all', function(req,res) {
    axios.get('https://api.warframe.market/v1/items')
        .then(function (response) {
            res.send(response.data);
        }).catch(function (error) {
            console.log(error);
        })
});