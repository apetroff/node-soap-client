var SoapClient = require('../lib/node-soap-client.js').SoapClient;

new SoapClient({wsdl: 'http://api.metabus.ru/0.0.1/ws/SearchingModule?WSDL'}, function(err, metabus) {
    var searchingModule = new metabus.SearchingModule();

    searchingModule.search({geoFilter: {distance: 10}, text: 'кофе около кремля'}, function(err, result) {
        if (err)
            console.log(err.children[1].text())
        else
            console.log(result);
    });
});
