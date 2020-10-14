import { dom, getKey } from "@/utils/dom";

const cnv = dom("canvas") as HTMLCanvasElement;
const cxt = cnv.getContext("2d") as CanvasRenderingContext2D;

; (async function () {
  // 初始化一个圆形
  drawBall(cnv.width / 2, cnv.height / 2);
  //初始化变量
  var x = 100;
  var y = 75;
  //获取按键方向
  var key = getKey();

  //添加鼠标按下事件
  window.addEventListener("keydown", function (e) {
    //清除整个Canvas，以便重绘新的圆形
    cxt.clearRect(0, 0, cnv.width, cnv.height);

    //根据key.direction的值，判断小球移动方向
    switch (key.direction) {
      case "up":
        y -= 2;
        drawBall(x, y);
        break;
      case "down":
        y += 2;
        drawBall(x, y);
        break;
      case "left":
        x -= 2;
        drawBall(x, y);
        break;
      case "right":
        x += 2;
        drawBall(x, y);
        break;
      //default值
      default:
        drawBall(x, y);
    }
  }, false);

  //定义绘制小球的函数
  function drawBall(x: number, y: number) {
    cxt.beginPath();
    cxt.arc(x, y, 20, 0, 360 * Math.PI / 180, true);
    cxt.closePath();
    cxt.fillStyle = "#6699FF";
    cxt.fill();
  }
}());