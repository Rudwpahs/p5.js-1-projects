<div align="center">

# 🎨 p5.js Motion Sketchbook

### Small motion experiments from my first creative-coding studies.

<p>
  <img alt="p5.js" src="https://img.shields.io/badge/p5.js-creative_coding-ED225D?logo=p5dotjs&logoColor=white">
  <img alt="JavaScript" src="https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=000">
  <img alt="Archive" src="https://img.shields.io/badge/status-learning_archive-8b949e">
</p>

[Sketches](#sketches) · [Loop](#the-loop) · [Run](#run)

</div>

---

p5.js를 처음 익힐 때 만든 움직임 실험들을 한곳에서 다시 볼 수 있게 정리한 작은 gallery입니다. **새 기능을 계속 붙이는 제품이 아니라 creative coding을 배우던 과정의 기록**입니다.

## Sketches

| Sketch | What I was testing |
|---|---|
| **Crossing Lines** | frame마다 좌표를 바꾸는 line motion |
| **Orbiting Dots** | `sin` 기반 주기 운동과 순차 생성 |
| **Open / Close** | click으로 상태를 바꾸는 interaction |

## The loop

```mermaid
flowchart LR
    A[setup()] --> B[Initial canvas / state]
    B --> C[draw() every frame]
    C --> D[Read time / frame / input]
    D --> E[Calculate coordinates]
    E --> F[Draw shapes]
    F --> G[Update state]
    G --> C
```

`Open / Close`는 클릭으로 상태값을 바꾸고 다음 `draw()`부터 그 상태에 맞는 모양을 그립니다. `Orbiting Dots`는 삼각함수를 좌표에 넣어 반복적인 궤도를 만듭니다.

## Run

`index.html`을 브라우저에서 열거나:

```bash
python -m http.server 8000
```

## Stack

`p5.js` · JavaScript · HTML

> **Learning archive** — 당시 p5.js를 익히던 구조와 시행착오를 그대로 알아볼 수 있게 보존합니다.
