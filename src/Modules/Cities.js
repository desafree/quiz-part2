const CreateCitiesObj = function CreateCitiesObj(fetchedCities) {
  const citiesArray = fetchedCities;
  let randomCitiesArray = [];
  let correctCity = {};

  function defineRandomCitiesArray() {
    let indexCities = getRandomNumbers(4, 249);
    let newArray = [];
    indexCities.forEach((randomIndex) => {
      newArray.push(citiesArray[randomIndex]);
    });
    randomCitiesArray = newArray;
  }

  function getRandomCities() {
    return [...randomCitiesArray];
  }

  function defineCorrectCity() {
    let indexCity = getRandomNumbers(1, 3)[0];
    correctCity = randomCitiesArray[indexCity];
  }

  function getCorrectCity() {
    return correctCity;
  }

  return {
    defineRandomCitiesArray,
    getRandomCities,
    defineCorrectCity,
    getCorrectCity,
  };
};

function getRandomNumbers(n, range) {
  if (n === 0) return [];
  let number = Math.round(Math.random() * range);

  return [number].concat(getRandomNumbers(n - 1, range));
}

export default CreateCitiesObj;
