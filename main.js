var elSurveyForm = document.querySelector('.survey__form');
var elSurveyInput = elSurveyForm.querySelector('.survey__input');
var elSurveySelect = elSurveyForm.querySelector('.select');
var elSurveyResultBox = elSurveyForm.querySelector('.survey__result');

// Exchange money

var SUM_TO_USD = 10840.02;

var SUM_TO_EUR = 12278.49;

var SUM_TO_RUB = 144.65;


elSurveyForm.addEventListener('submit', function (evt) {
	evt.preventDefault();

	var surveyInput = elSurveyInput.value.trim();

    var select = elSurveySelect.value.trim();

	if (select === 'usd') {
		elSurveyResultBox.textContent = (surveyInput / SUM_TO_USD).toFixed(5) + " $";
	} else if (select === "eur") {
		elSurveyResultBox.textContent = (surveyInput / SUM_TO_EUR).toFixed(5) + " €";
	} else {
		elSurveyResultBox.textContent = (surveyInput / SUM_TO_RUB).toFixed(5) + " ₽";
	}
});