const displayCommand = (function displayCommand() {
  const quizContainer = document.querySelector('.quiz-container');

  function displayLoading() {
    console.log('loading');
    quizContainer.innerHTML = `
    <div class="loading-container">
    <img
      class="loading"
      src="https://retchhh.files.wordpress.com/2015/03/loading1.gif"
    />
  </div>
        `;
  }

  function displayGameOver(point) {
    quizContainer.innerHTML = `
        <h3 class="game over">you have reach <span class="point">${point} point<span></h3>
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
        <h3 class="question">Which is the capital of   <span>${correctCity.name.common}</span></h3>
        <ul>
          <li>${capital1}</li>
          <li>${capital2}</li>
          <li>${capital3}</li>
          <li>${capital4}</li>
        </ul>
        `;
  }

  return { displayCities, displayGameOver, displayLoading };
})();

export default displayCommand;
