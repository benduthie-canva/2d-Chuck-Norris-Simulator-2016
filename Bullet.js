var Bullet = function() 
{
	this.image = document.createElement("img");
	this.x = player.position.x;
	this.y = player.position.y;
	this.width = 40;
	this.height = 20;
	this.image.src = "bullet.png";
	this.rotation = player.rotation;

	this.velocity = new Vector2();
	this.velocity.set(Math.cos(player.rotation) * 69, Math.sin(player.rotation) * 69);
};

Bullet.prototype.update = function(deltaTime)
{
	this.x += this.velocity.x * deltaTime;
	this.y += this.velocity.y * deltaTime;	
}
Bullet.prototype.draw = function()
{
	context.save();
	context.translate(this.x, this.y);
	context.rotate(this.rotation);
	context.drawImage(this.image, -this.width/2, -this.height/2);
	context.restore();
}
