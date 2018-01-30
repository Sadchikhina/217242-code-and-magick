'use strict';

var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var CLOUD_X = 100;
var CLOUD_Y = 10;
var CLOUD_GAP = 10;
var HEADER_HEIGHT = 90;
var BAR_WIDTH = 40;
var BAR_GAP = 50;
var TEXT_HEIGHT = 20;
var TEXT_GAP = 10;
var RATE_GAP = 5;
var NAME_HEIGHT = TEXT_HEIGHT + TEXT_GAP;
var BAR_HEIGHT = 150;
var MIN = 0.1;
var MAX = 0.9;

var renderCloud = function (ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
};

var getMaxElement = function (arr) {
  var maxElement = arr[0];
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] > maxElement) {
      maxElement = arr[i];
    }
  }
  return maxElement;
};

window.renderStatistics = function (ctx, players, times) {
  renderCloud(ctx, CLOUD_X + CLOUD_GAP, CLOUD_Y + CLOUD_GAP, 'rgba(0, 0, 0, 0.7');
  renderCloud(ctx, CLOUD_X, CLOUD_Y, '#fff');

  ctx.fillStyle = '#000';
  ctx.font = 'bold 16px PT Mono';
  ctx.fillText('Ура вы победили!', CLOUD_X + TEXT_GAP, CLOUD_Y + TEXT_GAP + TEXT_HEIGHT);
  ctx.fillText('Список результатов:', CLOUD_X + TEXT_GAP, CLOUD_Y + TEXT_GAP * 2 + TEXT_HEIGHT);

  var maxTime = getMaxElement(times);

  var getRandomCapacity = function () {
    var capacity = Math.random() * (MAX - MIN) + MIN;
    return 'rgba(22, 38, 204, ' + capacity + ')';
  };

  for (var i = 0; i < players.length; i++) {

    ctx.fillStyle = '#000';
    ctx.fillText(Math.floor(times[i]), CLOUD_X + BAR_GAP + (BAR_GAP + BAR_WIDTH) * i, CLOUD_Y + CLOUD_HEIGHT - (BAR_HEIGHT * times[i] / maxTime) - NAME_HEIGHT * 2 - RATE_GAP);

    ctx.fillText(players[i], CLOUD_X + BAR_GAP + (BAR_GAP + BAR_WIDTH) * i, CLOUD_Y + BAR_HEIGHT + HEADER_HEIGHT);
    if (players[i] === 'Вы') {
      ctx.fillStyle = 'rgba(255, 0, 0, 1)';
    } else {
      ctx.fillStyle = getRandomCapacity();
    }
    ctx.fillRect(CLOUD_X + BAR_GAP + (BAR_GAP + BAR_WIDTH) * i, CLOUD_Y + NAME_HEIGHT * 2 + BAR_HEIGHT, BAR_WIDTH, -(BAR_HEIGHT * times[i] / maxTime));
  }

};
