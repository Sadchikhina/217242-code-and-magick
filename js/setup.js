'use strict';

document.querySelector('.setup').classList.remove('hidden');
document.querySelector('.setup-similar').classList.remove('hidden');

var similarListElement = document.querySelector('.setup-similar-list');
var similarWizardTemplate = document.querySelector('#similar-wizard-template').content;

var WIZARD_NAME = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var WIZARDS_SURNAME = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var COAT_COLOR = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var EYES_COLOR = ['black', 'red', 'blue', 'yellow', 'green'];

var renderWizard = function (elem) {
  var wizardElement = similarWizardTemplate.cloneNode(true);
  wizardElement.querySelector('.setup-similar-label').textContent = elem.name;
  wizardElement.querySelector('.wizard-coat').style.fill = elem.coatColor;
  wizardElement.querySelector('.wizard-eyes').style.fill = elem.eyesColor;
  return wizardElement;
};

var getRandomName = function () {
  return WIZARD_NAME[Math.floor(Math.random() * WIZARD_NAME.length)];
};

var getRandomSurname = function () {
  return WIZARDS_SURNAME[Math.floor(Math.random() * WIZARDS_SURNAME.length)];
};

var getRandomCoat = function () {
  return COAT_COLOR[Math.floor(Math.random() * COAT_COLOR.length)];
};

var getRandomEyes = function () {
  return EYES_COLOR[Math.floor(Math.random() * EYES_COLOR.length)];
};

var fragment = document.createDocumentFragment();
for (var i = 0; i < 4; i++) {
  var wizard = {
    name: getRandomName() + ' ' + getRandomSurname(),
    coatColor: getRandomCoat(),
    eyesColor: getRandomEyes()
  };
  fragment.appendChild(renderWizard(wizard));
}

similarListElement.appendChild(fragment);
