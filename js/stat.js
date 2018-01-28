'use strict';

var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var BAR_WIDTH = 40;

var renderCloud = function (ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
};

window.renderStatistics = function (ctx, names, times) {
  renderCloud(ctx, 110, 20, 'rgba(0, 0, 0, 0.7');
  renderCloud(ctx, 100, 10, '#fff');

  ctx.fillStyle = '#000';
  ctx.font = 'bold 16px PT Mono';
  ctx.fillText('Ура вы победили!', 180, 30);
  ctx.fillText('Список результатов:', 180, 50);

  ctx.fillText('Вы', 140, 260);
  ctx.fillStyle = 'rgba(255, 0, 0, 1)';
  ctx.fillRect(140, 80, BAR_WIDTH, 150);

  ctx.fillStyle = '#000';
  ctx.fillText('Вова', 230, 260);
  ctx.fillStyle = '#0033ff';
  ctx.fillRect(230, 80, BAR_WIDTH, 150);

  ctx.fillStyle = '#000';
  ctx.fillText('Маша', 320, 260);
  ctx.fillStyle = '#0033ff';
  ctx.fillRect(320, 80, BAR_WIDTH, 150);

  ctx.fillStyle = '#000';
  ctx.fillText('Cwikla', 410, 260);
  ctx.fillStyle = '#0033ff';
  ctx.fillRect(410, 80, BAR_WIDTH, 150);
};
