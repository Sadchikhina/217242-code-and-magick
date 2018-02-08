'use strict';

var WIZARD_NAME = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var WIZARDS_SURNAME = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var COAT_COLOR = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var EYES_COLOR = ['black', 'red', 'blue', 'yellow', 'green'];


var getRandomCoat = function () {
  return COAT_COLOR[Math.floor(Math.random() * COAT_COLOR.length)];
};

var getRandomEyes = function () {
  return EYES_COLOR[Math.floor(Math.random() * EYES_COLOR.length)];
};


var showSimilarWizards = function () {

  var renderWizard = function (elem) {
    var wizardElement = similarWizardTemplate.cloneNode(true);
    wizardElement.querySelector('.setup-similar-label').textContent = elem.name;
    wizardElement.querySelector('.wizard-coat').style.fill = elem.coatColor;
    wizardElement.querySelector('.wizard-eyes').style.fill = elem.eyesColor;
    return wizardElement;
  };

  document.querySelector('.setup-similar').classList.remove('hidden');

  var similarListElement = document.querySelector('.setup-similar-list');
  var similarWizardTemplate = document.querySelector('#similar-wizard-template').content;

  var getRandomName = function () {
    return WIZARD_NAME[Math.floor(Math.random() * WIZARD_NAME.length)];
  };

  var getRandomSurname = function () {
    return WIZARDS_SURNAME[Math.floor(Math.random() * WIZARDS_SURNAME.length)];
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

};

showSimilarWizards();

var setupOpen = document.querySelector('.setup-open');
var setup = document.querySelector('.setup');
var setupClose = setup.querySelector('.setup-close');

var ESC_KEYCODE = 27;
var ENTER_KEYCODE = 13;

/**
 * Закрывает окно по нажатию на ESC
 * @param  {type} evt
 */
var onPopupEscPress = function (evt) {
  if (evt.keyCode === ESC_KEYCODE) {
    closePopup();
  }
};

/**
 * Открывает окно, закрывает по нажатию на ESC
 */
var openPopup = function () {
  setup.classList.remove('hidden');
  document.addEventListener('keydown', onPopupEscPress);
};

/**
 * Закрывает окно
 */
var closePopup = function () {
  setup.classList.add('hidden');
  document.removeEventListener('keydown', onPopupEscPress);
};


setupOpen.addEventListener('click', function () {
  openPopup();
});

setupOpen.addEventListener('keydown', function (evt) {
  if (evt.keyCode === ENTER_KEYCODE) {
    openPopup();
  }
});

setupClose.addEventListener('keydown', function (evt) {
  if (evt.keyCode === ENTER_KEYCODE) {
    closePopup();
  }
});

setupClose.addEventListener('click', function () {
  closePopup();
});

/**
var userName = document.querySelector('.setup-user-name');

setupClose.addEventListener('click', function () {
  if (userName.onfocus) {
    closePopup.stopPropagation();
  } else {
    closePopup();
  }
});
*/


/**
 * Меняет цвет плаща и глаз
 */
var setupWizard = document.querySelector('.setup-player');
var wizardCoat = setupWizard.querySelector('.wizard-coat');
var wizardEyes = setupWizard.querySelector('.wizard-eyes');


wizardCoat.addEventListener('click', function () {
  wizardCoat.style.fill = getRandomCoat();
});

wizardEyes.addEventListener('click', function () {
  wizardEyes.style.fill = getRandomEyes();
});


/**
 * Меняет цвет фаербола
 */
var FIREBALL_COLOR = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];

var getRandomFireball = function () {
  return FIREBALL_COLOR[Math.floor(Math.random() * FIREBALL_COLOR.length)];
};

var wizardFireball = document.querySelector('.setup-fireball-wrap');

wizardFireball.addEventListener('click', function () {
  wizardFireball.style.fill = getRandomFireball();
});


/**
 * Отправка формы
 */
document.querySelector('.setup-wizard-form').addEventListener('submit', closeWizardForm);

var closeWizardForm = function () {
  setup.classList.add('hidden');
};
