function Point(x,y) {
	this.x = x;
	this.y = y;
	this.toString = function () {
		return `(${this.x}, ${this.y})`
	}
}

function Shape() {	
}

Shape.prototype.addToPlane = function(x,y) {
		this.position = new Point(x,y)
}

Shape.prototype.move = function(newX,newY) {
	this.position = new Point(newX,newY)
}

function Side(length) {
	this.length = length;
}

function Polygon(sidesArray) {
	Shape.call()
	this.sides = sidesArray
}
Polygon.prototype = Object.create(Shape.prototype)
Polygon.prototype.perimeter = function () {
		return this.sides.map(side => side.length).reduce(function(acc,el) {return acc + el})
	}
Polygon.prototype.numberOfSides = function () {
		return this.sides.length
	}

function Circle(radius) {
	Shape.call()
	this.radius = radius
	this.area = function () {
		return Math.PI * (this.radius * this.radius)
	}
	this.diameter = function () {
		return this.radius + this.radius
	}
	this.circumference = function () {
		return 2 * Math.PI * this.radius
	}
}

Circle.prototype = Object.create(Shape.prototype)

function Quadrilateral(side1, side2, side3, side4) {
	this.sides = [side1, side2, side3, side4]
	this.perimeter = function () {return this.sides.reduce(function(acc,el) {return acc + el})}
}

Quadrilateral.prototype = Object.create(Polygon.prototype)
Quadrilateral.prototype.perimeter = function () {return this.sides.reduce(function(acc,el) {return acc + el})}

function Rectangle(width, height) {
	this.width = width
	this.height = height
	this.sides = [width, height, width, height]
}

Rectangle.prototype = Object.create(Quadrilateral.prototype)
Rectangle.prototype.area = function () {return this.width * this.height}

function Square(side) {
	this.width = side
	this.height = side
	this.sides = [side, side, side, side]
	this.listProperties = function () {
		this.properties
	}
}
function Triangle(side1, side2, side3) {
	this.sides = [side1, side2, side3]
}

Triangle.prototype = Object.create(Polygon.prototype)
Triangle.prototype.perimeter = function () {return this.sides.reduce(function(acc,el) {return acc + el})}


Square.prototype = Object.create(Rectangle.prototype)