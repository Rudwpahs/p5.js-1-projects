let angles = [];
let lastAngleAddedFrame = 0;

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);

  // 10초마다 각도 배열에 새로운 각도 추가
  if (frameCount - lastAngleAddedFrame >= 600) {
    angles.push(0);
    lastAngleAddedFrame = frameCount;
  }

  // 모든 각도 배열을 순회하며 사인파 그리기
  for (let i = 0; i < angles.length; i++) {
    let x = map(sin(angles[i] + frameCount / 100), -1, 1, i * (width / angles.length), (i + 1) * (width / angles.length));
    let y = height / 2 + sin(angles[i] + frameCount / 100) * 50;
    ellipse(x, y, 50, 50);
    angles[i] += 0.05 + 0.05 * i; // 진폭을 달리하여 곡선의 모양을 바꿀 수 있습니다.
  }
}
