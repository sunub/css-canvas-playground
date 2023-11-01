import { Particle } from './Particle';

const COLOR = ['oklch(75.11% 0.116 237.57)', "oklch(75.11% 0.116 237.57 / 80%)", "oklch(75.11% 0.116 237.57 / 60%)", "oklch(75.11% 0.116 237.57 / 40%)", "oklch(75.11% 0.116 237.57 / 20%)"]

class Canvas {
  constructor(dom) {
    this.canvas = dom;
    if(this.canvas.getContext) {
      this.ctx = this.canvas.getContext('2d');
      this.pixel = window.devicePixelRatio > 1 ? 2 : 1;

      window.addEventListener('resize', this.resize.bind(this));
      this.resize();

      this.updatePositionX(this.stageWidth);
      this.create();

      window.requestAnimationFrame(this.draw.bind(this));
    }
  }

  resize() {
    this.stageWidth = document.body.clientWidth;
    this.stageHeight = document.body.clientHeight;

    this.canvas.width = this.stageWidth * this.pixel;
    this.canvas.height = this.stageHeight * this.pixel;

    this.ctx.scale(this.pixel, this.pixel);
  }
  
  updatePositionX(stageWidth){
    this.positionX = [];
    for (let i = 0; i < 1000; i++) {
        const x = Math.random() * stageWidth;
        this.positionX[i] = x
    }
  }
  
  create() {
    this.particle = [];

    for(let i = 0; i < 1000; i += 1) {
      let currColor = Math.floor(Math.random() * 4);
      const item = new Particle(COLOR[currColor], this.positionX[i]);
      this.particle[i] = item;
    }
  }

  draw(){
    window.requestAnimationFrame(this.draw.bind(this));

    this.ctx.clearRect(0, 0, this.stageWidth, this.stageHeight);
    for (let i = 0; i < 1000; i++) {
        const rain = this.particle[i];
        rain.animate(this.ctx, this.stageHeight);
    }
  }
}

export default Canvas;