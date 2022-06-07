const logic = (function logic() {
  let points = 0;

  function getPoints() {
    return points;
  }

  function addPoint() {
    points += 1;
  }

  function resetPoints() {
    points = 0;
  }

  function checkTrue(value1, value2) {
    if (value1 === value2) {
      addPoint();
      return true;
    }
    return false;
  }

  return { getPoints, checkTrue, resetPoints };
})();

export default logic;
