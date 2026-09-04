let activeSketch = 'crossing';
let activeInstance;
const host = () => document.querySelector('#canvas-host');
const nameNode = () => document.querySelector('#sketch-name');

const sketches = {
  crossing: (p) => {
    p.setup = () => { p.createCanvas(600, 600); p.frameRate(30); p.strokeWeight(1.5); };
    p.draw = () => {
      p.background('#08090d');
      const travel = (p.frameCount * 5) % (p.width * 2);
      p.stroke('#d8ff57');
      p.line(travel, 0, 0, travel);
      p.stroke('#a998ff');
      p.line(p.width - travel, 0, p.width, travel);
      p.stroke('#65d9ff');
      p.line(p.width, p.height - travel, p.width - travel, p.height);
      p.noStroke(); p.fill(255, 255, 255, 150); p.circle(p.width / 2, p.height / 2, 5);
    };
  },
  orbit: (p) => {
    let angles = [];
    p.setup = () => { p.createCanvas(600, 600); p.noStroke(); };
    p.draw = () => {
      p.background('#08090d');
      if (p.frameCount % 90 === 0 && angles.length < 18) angles.push(angles.length * .35);
      angles.forEach((angle, i) => {
        const radius = 70 + i * 17;
        const x = p.width / 2 + Math.cos(angle + p.frameCount / 80) * radius;
        const y = p.height / 2 + Math.sin(angle + p.frameCount / 80) * radius;
        p.fill(216, 255, 87, 210 - i * 7); p.circle(x, y, 9 + (i % 3) * 4);
      });
      p.fill('#f0eee5'); p.circle(p.width / 2, p.height / 2, 10);
    };
  },
  door: (p) => {
    let isOpen = false; let doorX = 140;
    p.setup = () => { p.createCanvas(600, 600); p.rectMode(p.CENTER); };
    p.draw = () => {
      p.background('#08090d');
      p.noStroke(); p.fill('#a998ff'); p.rect(p.width / 2, 360, 290, 420, 12);
      doorX = p.lerp(doorX, isOpen ? 330 : 140, .08);
      p.fill('#d8ff57'); p.rect(doorX, 360, 210, 390, 8);
      p.fill('#101116'); p.circle(doorX + 72, 360, 22);
      p.fill(240, 238, 229, 170); p.textAlign(p.CENTER); p.textSize(15); p.text(isOpen ? 'CLICK TO CLOSE' : 'CLICK TO OPEN', p.width / 2, 555);
    };
    p.mouseClicked = () => { if (p.mouseX > 110 && p.mouseX < 490 && p.mouseY > 150 && p.mouseY < 560) isOpen = !isOpen; };
  },
};

function mount(name) {
  if (activeInstance) activeInstance.remove();
  host().replaceChildren();
  activeSketch = name;
  activeInstance = new p5(sketches[name], host());
  nameNode().textContent = name === 'crossing' ? 'CROSSING LINES' : name === 'orbit' ? 'ORBITING DOTS' : 'OPEN / CLOSE';
}

document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.sketch-button').forEach((button) => button.addEventListener('click', () => {
    document.querySelectorAll('.sketch-button').forEach((item) => item.classList.remove('active'));
    button.classList.add('active'); mount(button.dataset.sketch);
  }));
  mount(activeSketch);
});
