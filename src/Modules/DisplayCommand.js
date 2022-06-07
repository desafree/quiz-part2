const displayCommand = (function displayCommand() {
  const quizContainer = document.querySelector('.quiz-container');

  function displayGameOver(point) {
    quizContainer.innerHTML = `
        <h3>you have reach ${point} point</h3>
        <button>Try Again</button>
        `;
  }

  function displayCities(
    [
      {
        capital: [capital1],
      },
      {
        capital: [capital2],
      },
      {
        capital: [capital3],
      },
      {
        capital: [capital4],
      },
    ],
    correctCity
  ) {
    // console.log(correctCity.capital[0]);
    quizContainer.innerHTML = `
        <h3 class="question">Which is the capital of ${correctCity.name.common}?</h3>
        <ul>
          <li>${capital1}</li>
          <li>${capital2}</li>
          <li>${capital3}</li>
          <li>${capital4}</li>
        </ul>
        `;
  }

  return { displayCities, displayGameOver };
})();

export default displayCommand;
