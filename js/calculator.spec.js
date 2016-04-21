describe('calculator module tests', function() {
    'use strict';

    describe('add method', function() {
        it('should add two numbers', function() {
            // given
            var a = 4,
                b = 3,
                result;
            // when
            result = add(a, b);
            // then
            expect(result).toBe(7);
        });

        it('should throw an error when variables are not a numbers', function() {
            // given
            var a = 'not a number',
                b = 4;
            // when then
            expect(function() {
                add(a, b);
            }).toThrow(new Error('incorrect numbers'));
        });

        it('should add two numbers when one is negative', function() {
            // given
            var a = -1,
                b = 4,
                result;
            // when then
            result = add(a, b);
            // then
            expect(result).toBe(3);
        });

        it('should add two numbers when two of them is negative', function() {
            // given
            var a = -1,
                b = -4,
                result;
            // when then
            result = add(a, b);
            // then
            expect(result).toBe(-5);
        });
    });

    describe('subtract method', function() {
        it('should subtract two numbers', function() {
            // given
            var a = 4,
                b = 2,
                result;
            // when
            result = subtract(a, b);
            // then
            expect(result).toBe(2);
        });

        it('should throw an error when variables are not a numbers', function() {
            // given
            var a = 4,
                b = 'not a number';
            // when then
            expect(function() {
                subtract(a, b);
            }).toThrow(new Error('incorrect numbers'));
        });
        it('should subtract two numbers when two of them are negative', function() {
            // given
            var a = -1,
                b = -4,
                result;
            // when then
            result = subtract(a, b);
            // then
            expect(result).toBe(3);
        });
        it('should subtract two numbers when one of them is negative', function() {
            // given
            var a = 1,
                b = -4,
                result;
            // when then
            result = subtract(a, b);
            // then
            expect(result).toBe(5);
        });
    });

    describe('multiply method', function() {
        it('should multiply two numbers', function() {
            // given
            var a = 2,
                b = 5,
                result;
            // when
            result = multiply(a, b);
            // then
            expect(result).toBe(10);
        });

        it('should multiply two numbers when one is negative', function() {
            // given
            var a = -2,
                b = 5,
                result;
            // when
            result = multiply(a, b);
            // then
            expect(result).toBe(-10);
        });

        it('should multiply two numbers when two of them are negative', function() {
            // given
            var a = -2,
                b = -5,
                result;
            // when
            result = multiply(a, b);
            // then
            expect(result).toBe(10);
        });

        it('should throw an error when variables are not a numbers', function() {
            // given
            var a = 4,
                b = 'not a number';
            // when then
            expect(function() {
                multiply(a, b);
            }).toThrow(new Error('incorrect numbers'));
        });
    });

    describe('divide method', function() {
        it('should divide two numbers', function() {
            // given
            var a = 10,
                b = 2,
                result;
            // when
            result = divide(a, b);
            // then
            expect(result).toBe(5);
        });

        it('should divide two numbers when one number is negative', function() {
            // given
            var a = -10,
                b = 2,
                result;
            // when
            result = divide(a, b);
            // then
            expect(result).toBe(-5);
        });

        it('should divide two numbers when two numbers are negative', function() {
            // given
            var a = -10,
                b = -2,
                result;
            // when
            result = divide(a, b);
            // then
            expect(result).toBe(5);
        });

        it('should throw an error in case of division by zero', function() {
            // given
            var a = 10,
                b = 0;
            // when then
            expect(function() {
                divide(a, b);
            }).toThrow(new Error('division by zero'));
        });

        it('should throw an error when variables are not a numbers', function() {
            // given
            var a = 4,
                b = 'not a number';
            // when then
            expect(function() {
                divide(a, b);
            }).toThrow(new Error('incorrect numbers'));
        });
    });

    describe('factorial method', function() {
        it('should return 1 for 0!', function() {
            // given
            var a = 0,
                result;
            // when
            result = factorial(a);
            // then
            expect(result).toBe(1);
        });

        it('should return 1 for 1!', function() {
            // given
            var a = 1,
                result;
            // when
            result = factorial(a);
            // then
            expect(result).toBe(1);
        });

        it('should return 120 for 5!', function() {
            // given
            var a = 5,
                result;
            // when
            result = factorial(a);
            // then
            expect(result).toBe(120);
        });

        it('should throw an error when argument is not a number', function() {
            // given
            var n = 'not a number';
            // when then
            expect(function() {
                factorial(n);
            }).toThrow(new Error('incorrect number'));
        });

        it('should throw an error in case of negative argument', function() {
            // given
            var n = -1;
            // when then
            expect(function() {
                factorial(n);
            }).toThrow(new Error('negative argument'));
        });
    });
});
