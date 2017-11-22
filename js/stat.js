'use strict';

window.renderStatistics = function (ctx, names, times) {

  // тень
  ctx.fillStyle = 'rgba(0, 0, 0, 0.7)';
  ctx.fillRect(110, 20, 420, 270);

  // облако
  ctx.fillStyle = 'white';
  ctx.fillRect(100, 10, 420, 270);
  ctx.strokeStyle = '#66CC66';
  ctx.strokeRect(100, 10, 420, 270);
  ctx.strokeStyle = 'yellow';
  ctx.strokeRect(100, 10, 418, 268);

  // текст
  ctx.font = '16px PT Mono';
  ctx.fillStyle = '#000';
  ctx.textBaseline = 'hanging';
  ctx.fillText('Ура, вы победили!', 130, 30);

  ctx.font = '16px PT Mono';
  ctx.fillText('Список результатов:', 130, 55);

  // худшее время
  var max = -1;

  for (var i = 0; i < times.length; i++) {
    var time = times[i];
    if (time > max) {
      max = time;
    }
  }

  // пропрорция гистограммы
  var histogramHeight = 150;
  var step = histogramHeight / (max - 0);

  // переменные для гистограммы
  var barWidth = 40;
  var indent = 50;
  var initialX = 155;
  var initialY = 250;

  // рисование столбиков
  for (i = 0; i < times.length; i++) {
    if (names[i] === 'Вы') {
      ctx.fillStyle = 'rgba(255, 0, 0, 1)';
    } else {
      ctx.fillStyle = 'rgba(0, 0, 255,' + Math.random() + ')';
    }

    ctx.fillRect((barWidth + indent) * i + initialX, initialY, barWidth, -(times[i] * step));
  }

  // создание подписей
  for (i = 0; i < names.length; i++) {
    ctx.font = '11px PT Mono';
    ctx.fillStyle = 'rgba(0, 0, 0, 0.7)';
    ctx.fillText(names[i], (barWidth + indent) * i + initialX + 5, initialY + 8);
    ctx.fillText(Math.floor(times[i]), (barWidth + indent) * i + initialX + 5, initialY - 165);
  }
};
