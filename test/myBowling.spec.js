const assert = require('chai').assert;
const bowling = require('../application/myBowling');

let game;

describe('My Bowling Tests', () => {
    beforeEach(() => {
        game = new bowling.Game();
    });

    it('scores zero for a gutter game', () => {
        recordRolls([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
        assert.equal(game.score(), 0);
    });

    it('scores 20 for all ones', () => {
        recordRolls([1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]);
        assert.equal(game.score(), 20);
    });

    it('scores 16 for a spare then a 3, then all gutter', () => {
        recordRolls([9, 1, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
        assert.equal(game.score(), 16);
    });

    it('scores 24 for a strike then a 3, then a 4, then all gutter', () => {
       recordRolls([10, 3, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
       assert.equal(game.score(), 24);
    });

    it('scores a perfect game of 12 strikes in a row', () => {
       recordRolls([10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10])
    });
});

function recordRolls(pinsKockedDown) {
    pinsKockedDown.forEach((numberOfPins) => {
        game.roll(numberOfPins);
    });
}
