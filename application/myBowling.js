function Game() {
    const rolls = [];

    this.roll = (pinsnockedDown) => {
        rolls.push(pinsnockedDown);
    }

    this.theyScoredASpare = (rollIndex) => {
        return rolls[rollIndex] + rolls[rollIndex + 1] === 10;
    }

    this.theyScoredAStrike = (rolls, rollIndex) => {
        return rolls[rollIndex] === 10;
    }

    function scoredASpare(score, rollIndex) {
        return score + 10 + rolls[rollIndex + 2];
    }

    function scoredAStrike(score, rollIndex) {
        return score + 10 + rolls[rollIndex + 1] + rolls[rollIndex + 2];
    }

    this.score = () => {
        let score = 0;
        let frameCount = 0;
        let rollIndex = 0;
        while (frameCount < 10) {
            if (this.theyScoredASpare(rollIndex)) {
                score = scoredASpare(score, rollIndex);
                rollIndex += 2;
            } else if (this.theyScoredAStrike(rolls, rollIndex)) {
                score = scoredAStrike(score, rollIndex);
                rollIndex += 1;
            } else {
                score += (rolls[rollIndex] + rolls[rollIndex + 1]);
                rollIndex += 2;
            }

            frameCount ++;
        }

        return score;
    }


}

module.exports.Game = Game;
