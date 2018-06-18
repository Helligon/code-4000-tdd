const assert = require('chai').assert;
const game = require('../application/myFizzBuzzGame');

// assert example: assert.strictEqual(game.say(1), '1');

describe('My Fizz Buzz Tests', () => {
    it('says normal numbers', () => {
        assert.strictEqual(game.say(1), '1');
        assert.strictEqual(game.say(2), '2');
        assert.strictEqual(game.say(4), '4');
    });

    it('says Fizz for numbers divisible by 3', () => {
        assert.strictEqual(game.say(3), 'Fizz');
        assert.strictEqual(game.say(9), 'Fizz');
        assert.strictEqual(game.say(123), 'Fizz');
    })

    it('says Buzz for numbers divisible by 5', () => {
        assert.strictEqual(game.say(5), 'Buzz');
        assert.strictEqual(game.say(10), 'Buzz');
        assert.strictEqual(game.say(125), 'Buzz');
    })

    it('says Fizz Buzz for numbers divisible by 3 and 5', () => {
        assert.strictEqual(game.say(15), 'Fizz Buzz');
        assert.strictEqual(game.say(30), 'Fizz Buzz');
        assert.strictEqual(game.say(255), 'Fizz Buzz');
    })
});
