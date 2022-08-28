const fs = require('fs');

fs.watch('./data/all_items-unordered.json', (eventType, filename) => {
    console.log(`event type is: ${eventType}`);
    if (filename) {
        console.log(`filename provided: ${filename}`);
        fs.readFile('./data/all_items-unordered.json', 'utf8', (err, data) => {
            var jsondata = JSON.parse(data);
            console.log(jsondata.payload.items.length);

            var items = jsondata.payload.items;

            var writedata = '{\n"items": [\n';

            for(var i = 0; i < items.length; i++) {
                delete items[i].id;
                delete items[i].thumb;

                writedata += JSON.stringify(items[i], null, 4);
                if(i != items.length - 1) {
                    writedata += ",\n";
                }
            }
            writedata += "\n]\n}";

            fs.writeFile('./data/all_items.json', writedata, (err) => {
                if (err) throw err; 
                console.log('File Updated!');
            });
        });
    } else {
        console.log('filename not provided');
    }
});

