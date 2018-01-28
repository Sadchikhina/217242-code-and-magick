'use strict';

var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var CLOUD_X = 100;
var CLOUD_Y = 10;
var CLOUD_GAP = 10;
var BAR_WIDTH = 40;
var BAR_GAP = 50;
var TEXT_HEIGHT = 20;
var TEXT_GAP = 10;
var NAME_HEIGHT = TEXT_HEIGHT + TEXT_GAP * 2;
var barHeight = 150;
var capacity;

var renderCloud = function (ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
};

window.renderStatistics = function (ctx, names, times) {
  renderCloud(ctx, CLOUD_X + CLOUD_GAP, CLOUD_Y + CLOUD_GAP, 'rgba(0, 0, 0, 0.7');
  renderCloud(ctx, CLOUD_X, CLOUD_Y, '#fff');

  ctx.fillStyle = '#000';
  ctx.font = 'bold 16px PT Mono';
  ctx.fillText('Ура вы победили!', CLOUD_X + TEXT_GAP, CLOUD_Y + TEXT_GAP + TEXT_HEIGHT);
  ctx.fillText('Список результатов:', CLOUD_X + TEXT_GAP, CLOUD_Y + TEXT_GAP + TEXT_HEIGHT * 2);

  var getRandomCapacity = function (min, max) {
    capacity = Math.random() * (0.9 - 0.1) + 0.1;
    return capacity;
  };

  var playerIndex = 0;
  var playerName = 'Вы';

  ctx.fillText(playerName, CLOUD_X + BAR_GAP, CLOUD_Y + 250);
  ctx.fillStyle = 'rgba(255, 0, 0, 1)';
  ctx.fillRect(CLOUD_X + BAR_GAP, CLOUD_Y + NAME_HEIGHT * 2, BAR_WIDTH, barHeight);

  playerIndex = 1;
  playerName = 'Вова';

  ctx.fillStyle = '#000';
  ctx.fillText(playerName, CLOUD_X + BAR_GAP * 2 + BAR_WIDTH, CLOUD_Y + 250);
  ctx.fillStyle = 'rgba(22, 38, 204, capacity)';
  ctx.fillRect(CLOUD_X + BAR_GAP * 2 + BAR_WIDTH, CLOUD_Y + NAME_HEIGHT * 2, BAR_WIDTH, barHeight);

  playerIndex = 2;
  playerName = 'Маша';

  ctx.fillStyle = '#000';
  ctx.fillText(playerName, CLOUD_X + BAR_GAP * 3 + BAR_WIDTH * 2, CLOUD_Y + 250);
  ctx.fillStyle = 'rgba(22, 38, 204, capacity)';
  ctx.fillRect(CLOUD_X + BAR_GAP * 3 + BAR_WIDTH * 2, CLOUD_Y + NAME_HEIGHT * 2, BAR_WIDTH, barHeight);

  playerIndex = 3;
  playerName = 'Cwikla';

  ctx.fillStyle = '#000';
  ctx.fillText(playerName, CLOUD_X + BAR_GAP * 4 + BAR_WIDTH * 3, CLOUD_Y + 250);
  ctx.fillStyle = 'rgba(22, 38, 204, capacity)';
  ctx.fillRect(CLOUD_X + BAR_GAP * 4 + BAR_WIDTH * 3, CLOUD_Y + NAME_HEIGHT * 2, BAR_WIDTH, barHeight);

};
