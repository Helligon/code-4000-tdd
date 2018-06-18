const say = (number) => {
    function isDivisibleByThree() {
        return number % 3 === 0;
    }

    function isDivisibleByFive() {
        return number % 5 === 0;
    }

    {
        if (isDivisibleByThree() && isDivisibleByFive()) {
            return 'Fizz Buzz';
        }else if (isDivisibleByThree()) {
            return 'Fizz';
        }else if (isDivisibleByFive()) {
            return 'Buzz';
        }

        return String(number);
    };
}



module.exports.say = say;
