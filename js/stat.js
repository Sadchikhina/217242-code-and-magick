'use strict';

var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var CLOUD_X = 200;
var CLOUD_Y = 20;
var CLOUD_GAP = 10;
var BAR_WIDTH = 40;
var BAR_GAP = 50;
var TEXT_HEIGHT = 40;
var TEXT_GAP = 20;
var NAME_HEIGHT = TEXT_HEIGHT + TEXT_GAP * 2

var renderCloud = function (ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
};

window.renderStatistics = function (ctx, names, times) {
  renderCloud(ctx, CLOUD_X + CLOUD_GAP, CLOUD_Y + CLOUD_GAP, 'rgba(0, 0, 0, 0.7');
  renderCloud(ctx, CLOUD_X, CLOUD_Y, '#fff');

  ctx.fillStyle = '#000';
  ctx.font = 'bold 16px PT Mono';
  ctx.fillText('Ура вы победили!', CLOUD_X + CLOUD_GAP, CLOUD_Y + TEXT_GAP);
  ctx.fillText('Список результатов:', CLOUD_X + CLOUD_GAP, CLOUD_Y + TEXT_HEIGHT);

  ctx.fillText('Вы', CLOUD_X + BAR_GAP, CLOUD_Y + 250);
  ctx.fillStyle = 'rgba(255, 0, 0, 1)';
  ctx.fillRect(CLOUD_X + BAR_GAP, CLOUD_Y + NAME_HEIGHT, BAR_WIDTH, 150);

  ctx.fillStyle = '#000';
  ctx.fillText('Вова', CLOUD_X + BAR_GAP * 2 + BAR_WIDTH, CLOUD_Y + 250);
  ctx.fillStyle = 'rgba(22, 38, 204, 1)';
  ctx.fillRect(CLOUD_X + BAR_GAP * 2 + BAR_WIDTH, CLOUD_Y + NAME_HEIGHT, BAR_WIDTH, 150);

  ctx.fillStyle = '#000';
  ctx.fillText('Маша', CLOUD_X + BAR_GAP * 3 + BAR_WIDTH * 2, CLOUD_Y + 250);
  ctx.fillStyle = 'rgba(22, 38, 204, 1)';
  ctx.fillRect(CLOUD_X + BAR_GAP * 3 + BAR_WIDTH * 2, CLOUD_Y + NAME_HEIGHT, BAR_WIDTH, 150);

  ctx.fillStyle = '#000';
  ctx.fillText('Cwikla', CLOUD_X + BAR_GAP * 4 + BAR_WIDTH * 3, CLOUD_Y + 250);
  ctx.fillStyle = 'rgba(22, 38, 204, 1)';
  ctx.fillRect(CLOUD_X + BAR_GAP * 4 + BAR_WIDTH * 3, CLOUD_Y + NAME_HEIGHT, BAR_WIDTH, 150);
};
