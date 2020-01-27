/*
 
       _             _      _              
   ___(_)_ __   __ _| | ___| |_ ___  _ __  
  / __| | '_ \ / _` | |/ _ \ __/ _ \| '_ \ 
  \__ \ | | | | (_| | |  __/ || (_) | | | |
  |___/_|_| |_|\__, |_|\___|\__\___/|_| |_|
               |___/                       
 
*/

/**********************************************
 *   ENSURE A CLASS ONLY HAS ONE INSTANCE,    *
 * AND PROVIDE A GLOBAL POINT OF ACCESS TO IT *
 **********************************************/

var Logger = require('./Logger');
var Shopper = require('./Shopper');
var Store = require('./Store');

var logger = new Logger().getInstance();

logger.log('starting app...');

var alex = new Shopper('alex', 500)
var ski_shop = new Store('Steep and Deep Supplies', [
    {
        item: 'Downhill Skis',
        qty: 5,
        price: 750
    },
    {
        item: 'Knit Hat',
        qty: 20,
        price: 5
    }
])

logger.log('finished config...');

console.log(`${logger.count} logs total`);
logger.logs.map(log => console.log(`   ${log.message}`));
