let isOpen = false; // 문이 열림 상태인지 닫힘 상태인지를 나타내는 변수
let doorX = 100; // 문의 x좌표

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  
  // 문 그리기
  stroke(0);
  strokeWeight(2);
  fill(255);
  
  if (isOpen) {
    doorX = lerp(doorX, 300, 0.1); // 문이 열린 경우, doorX를 부드럽게 이동시킴
    if (doorX > 299) doorX = 300; // doorX가 300에 도달하면 300으로 고정
  } else {
    doorX = lerp(doorX, 100, 0.1); // 문이 닫힌 경우, doorX를 부드럽게 이동시킴
    if (doorX < 101) doorX = 100; // doorX가 100에 도달하면 100으로 고정
  }
  
  // 문에 손잡이 그리기
  fill(50);
  ellipse(doorX + 20, 250, 20, 20);
  rect(doorX + 10, 240, 20, 20);
  
  rect(doorX, 100, 200, 300);
}

function mouseClicked() {
  if (mouseX > 100 && mouseX < 300 && mouseY > 100 && mouseY < 400) {
    isOpen = !isOpen; // 열림/닫힘 상태 변환
  }
}
