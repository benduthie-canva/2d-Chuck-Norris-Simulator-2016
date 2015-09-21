var Bullet = function() 
{
	this.image = document.createElement("img");
	this.x = player.x;
	this.y = player.x;
	this.width = 40;
	this.height = 20;
	this.image.src = "bullet.png";
	this.rotation = player.rotation;
	this.velocityX = 69;
	this.velocityY = 69;
};

Bullet.prototype.update = function(deltaTime)
{
	this.x += this.velocityX * deltaTime;
	this.y += this.velocityY * deltaTime;	
}
Bullet.prototype.draw = function()
{
	context.save();
	context.translate(this.x, this.y);
	context.rotate(this.rotation);
	context.drawImage(this.image, -this.width/2, -this.height/2);
	context.restore();
}

Bullet.prototype.spawnBullet = function()
{
	this.rotation = player.rotation;
	this.velocityX = Math.cos(player.rotation) * 69;
	this.velocityY = Math.sin(player.rotation) * 69;
	this.x = player.x;
	this.y = player.y;
}