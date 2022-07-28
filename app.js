const teamOneResult = document.querySelector("#teamOne");
const teamTwoResult = document.querySelector("#teamTwo");
const teamOneBtn = document.querySelector("#team1Btn");
const teamTwoBtn = document.querySelector("#team2Btn");
const resetBtn = document.querySelector("#reset");
const winningScoreSelect = document.querySelector("#playTo");

let teamOneScore = 0;
let teamTwoScore = 0;
let winningScore = 3;
let isGameOver = false;

teamOneBtn.addEventListener("click", function () {
  //   updatingScore(teamOneScore, teamOneResult);
  if (!isGameOver) {
    teamOneScore++;
    if (teamOneScore === winningScore) {
      isGameOver = true;
      teamOneResult.classList.add("has-text-success");
      teamTwoResult.classList.add("has-text-danger");
      teamOneBtn.disabled = true;
      teamTwoBtn.disabled = true;
    }
    teamOneResult.textContent = teamOneScore;
  }
});
teamTwoBtn.addEventListener("click", function () {
  //   updatingScore(teamTwoScore, teamTwoResult);
  if (!isGameOver) {
    teamTwoScore++;
    if (teamTwoScore === winningScore) {
      isGameOver = true;
      teamTwoResult.classList.add("has-text-success");
      teamOneResult.classList.add("has-text-danger");
      teamOneBtn.disabled = true;
      teamTwoBtn.disabled = true;
    }
    teamTwoResult.textContent = teamTwoScore;
  }
});

winningScoreSelect.addEventListener("change", function () {
  winningScore = parseInt(this.value);
  reset();
});

resetBtn.addEventListener("click", reset);

// function updatingScore(teamScore, teamResult) {
//   if (teamScore !== 5) {
//     teamScore++;
//     console.log(teamScore);
//     teamResult.textContent = teamScore;
//   }
// }

function reset() {
  teamOneScore = 0;
  teamTwoScore = 0;
  teamOneResult.textContent = teamOneScore;
  teamTwoResult.textContent = teamTwoScore;
  isGameOver = false;
  teamOneResult.classList.remove("has-text-success", "has-text-danger");
  teamTwoResult.classList.remove("has-text-success", "has-text-danger");
  teamOneBtn.disabled = false;
  teamTwoBtn.disabled = false;
}
