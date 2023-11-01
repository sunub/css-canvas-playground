export class Particle {
  constructor(color, x){
      this.color = color;
      this.x = x;
      this.fixedY = 0;
      this.speedY = 2;
      this.positionY = 0;
      this.gravity = Math.random() * 0.3;
  }

  animate(ctx, stageHeight){
      this.speedY += this.gravity;

      this.positionY += this.speedY;

      ctx.beginPath();
      ctx.fillStyle = `${this.color}`;
      ctx.arc(this.x, this.positionY, 2.5, 0, 2 * Math.PI, false);
      ctx.fill();

      if(this.positionY > stageHeight){
          this.positionY = 0;
          this.speedY -= 10;
      }
  }
}   