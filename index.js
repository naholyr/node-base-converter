function getAlphabet(b) {
	if (b == 2) {
		b = '01';
	} else if (b == 8) {
		b = '01234567';
	} else if (b == 16) {
		b = '0123456789ABCDEF';
	} else if (b == 62) {
		b = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
	} else if (typeof b == 'number') {
		throw 'Unknown numeric base, provide alphabet';
	}

	return b;
}

exports.decToGeneric = function(n, b) {
	if (typeof n != 'number') {
		throw 'Expected valid number';
	}
	b = getAlphabet(b);
	var result = '';
	var bLen = b.length;
	while (n != 0) {
		var q = n % bLen;
		result = b[q] + result;
		n = (n - q) / bLen;
	}

	return result;
}

exports.decToBin = function(n) {
	return this.decToGeneric(n, 2);
}

exports.decToHex = function(n) {
	return this.decToGeneric(n, 16);
}

exports.decToOct = function(n) {
	return this.decToGeneric(n, 8);
}

exports.decTo62 = function(n) {
	return this.decToGeneric(n, 62);
}

exports.genericToDec = function(n, b) {
	n = n.toString();
	b = getAlphabet(b);
	var cache_pos = {};
	var bLen = b.length;
	var result = 0;
	var pow = 1;
	for (var i = n.length-1; i >= 0; i--) {
		var c = n[i];
		if (typeof cache_pos[c] == 'undefined') {
			cache_pos[c] = b.indexOf(c);
		}
		result += pow * cache_pos[c];
		pow *= bLen;
	}
	return result;
}

exports.binToDec = function(n) {
	return this.genericToDec(n, 2);
}

exports.hexToDec = function(n) {
	return this.genericToDec(n, 16);
}

exports.octToDec = function(n) {
	return this.genericToDec(n, 8);
}

exports._62ToDec = function(n) {
	return this.genericToDec(n, 62);
}
