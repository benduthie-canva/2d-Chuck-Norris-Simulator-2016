var Vector2 = function() 
{
	this.x = 0;
	this.y = 0;
};

Vector2.prototype.set = function(x,y)
{
	this.x = x;
	this.y = y;
};

Vector2.prototype.normalise = function()
{
	var length = Math.sqrt(this.x*this.x + this.y*this.y);
	
	this.normalX = this.x / length;
	this.normalY = this.y / length;
};

Vector2.prototype.add = function (vector)
{
	this.x += vector.x;
	this.y += vector.y;
};

Vector2.prototype.subtract = function (vector)
{
	this.x -= vector.x;
	this.y -= vector.y;
};

Vectir2.prototype.multiplyScalar = function (scalar)
{
	this.x *= scalar;
	this.y *= scalar;
};