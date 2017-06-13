var Car = function(obj, loc) {
	var obj = Object.create(Car.prototype);
	obj.loc = loc;
	return obj;
	};
Car.prototype.move = function() {
	this.loc++;
	};
console.log(Car.prototype.constructor);
console.log(amy.constructor);
log(amy instanceof Car);
