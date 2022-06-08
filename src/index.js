import './main.scss';
import CreateCitiesObj from './Modules/Cities';
import Logic from './Modules/Logic';
import displayCommand from './Modules/DisplayCommand';

const API_URL = 'https://restcountries.com/v3.1/all';

let citiesArray;
fetchData(API_URL);

async function fetchData(url) {
  try {
    displayCommand.displayLoading();
    const request = await fetch(url);
    const data = await request.json();
    citiesArray = CreateCitiesObj(data);
    nextRound();
    addEvent();
  } catch {
    console.log('error');
  }
}

function nextRound() {
  citiesArray.defineRandomCitiesArray();
  citiesArray.defineCorrectCity();

  displayCommand.displayCities(
    citiesArray.getRandomCities(),
    citiesArray.getCorrectCity()
  );
}

function addEvent() {
  const listItems = document.querySelectorAll('li');
  listItems.forEach((item) => {
    item.addEventListener('click', (e) => {
      if (
        Logic.checkTrue(
          citiesArray.getCorrectCity().capital[0],
          e.target.textContent
        )
      ) {
        nextRound();
        addEvent();
      } else {
        displayCommand.displayGameOver(Logic.getPoints());
        Logic.resetPoints();
        addEventButton();
      }
    });
  });
}

function addEventButton() {
  const tryAgain = document.querySelector('button');
  tryAgain.addEventListener('click', () => {
    nextRound();
    addEvent();
  });
}
