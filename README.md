Installation
------------

    npm install base-converter

Example
-------

    var base = require('base-converter');

    var n = 3598786;
    var b = base.decTo62(n);
    var n2 = base._62ToDec(b);
    console.log(n, b, n2);
    
    // Expected output : 3598786 'f6cW' 3598786

Methods
-------

Predefined bases (2, 8, 16, 62):

* decToBin(n)
* decToHex(n)
* decToOct(n)
* decTo62(n)
* binToDec(n)
* hexToDec(n)
* octToDec(n)
* _62ToDec(n)

Using your own custom base:
    
* decToGeneric(n, alphabet)
* genericToDec(n, alphabet)

Example with custom base:

    var bc = require('base-converter')
    console.log(bc.decToGeneric(359461, 'AbcGHiuRSt'));
    
    // Expected output : 'GitHub'genericToDec('GitHub', base));
