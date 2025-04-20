let currentPage = 1; // 當前頁面
let waveOffset = 0; // 波浪偏移量
let isWaveActive = true; // 控制波浪效果是否啟動

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  // 根據當前頁面設定背景顏色和文字
  switch (currentPage) {
    case 1:
      background('#9F0050');
      drawWavyText('你好～～～～～～～');
      break;
    case 2:
      background('#BF0060');
      drawWavyText('我是廖又蓁');
      break;
    case 3:
      background('#D9006C');
      drawWavyText('這是我的期中報告');
      break;
    case 4:
      background('#F00078');
      drawWavyText('祝大家考試都順利！！！！！');
      break;
  }

  // 繪製左下角和右下角的箭頭
  drawArrows();

  // 如果波浪效果啟動，更新波浪偏移量
  if (isWaveActive) {
    waveOffset += 0.1;
  }
}

function drawWavyText(content) {
  fill(255); // 白色文字
  textAlign(CENTER, CENTER);
  textSize(64); // 放大文字
  let baseY = height / 2; // 文字的基準 Y 座標
  let charSpacing = 60; // 字與字之間的間隔 (調大間距)

  // 將文字拆成單個字元，逐一繪製
  for (let i = 0; i < content.length; i++) {
    let charX = width / 2 - (content.length / 2) * charSpacing + i * charSpacing; // 每個字元的 X 座標
    let charY = baseY + (isWaveActive ? sin(waveOffset + i * 0.5) * 20 : 0); // 波浪效果的 Y 座標
    text(content[i], charX, charY);
  }
}

function drawArrows() {
  fill(255); // 白色箭頭
  noStroke();

  // 左下角箭頭 (上一頁)
  triangle(20, height - 20, 50, height - 40, 50, height - 10);

  // 右下角箭頭 (下一頁)
  triangle(width - 20, height - 20, width - 50, height - 40, width - 50, height - 10);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function mousePressed() {
  // 檢查是否點擊左下角箭頭 (上一頁)
  if (mouseX > 20 && mouseX < 50 && mouseY > height - 40 && mouseY < height - 10) {
    if (currentPage > 1) {
      currentPage--; // 切換到上一頁
    }
    return;
  }

  // 檢查是否點擊右下角箭頭 (下一頁)
  if (mouseX > width - 50 && mouseX < width - 20 && mouseY > height - 40 && mouseY < height - 10) {
    if (currentPage < 4) {
      currentPage++; // 切換到下一頁
    }
    return;
  }

  // 點擊畫布其他地方，切換波浪效果的啟動與停止
  isWaveActive = !isWaveActive;
}
