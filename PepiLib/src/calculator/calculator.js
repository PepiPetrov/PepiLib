class Calculator {
    /**
     * 
     * @param {number} a 
     * @param {number} b 
     * Sums two numbers
     */
    sum(a, b) {
        return a + b
    }
    /**
     * 
     * @param {number} a 
     * @param {number} b
     * Subtracts two numbers 
     */
    subtract(a, b) {
        return a - b
    }
    /**
     * 
     * @param {number} a 
     * @param {number} b 
     * Multiplies two numbers
     */
    multiply(a, b) {
        return a * b
    }
    /**
     * 
     * @param {number} a 
     * @param {number} b
     * Divides two numbers 
     */
    divide(a, b) {
        return a / b
    }
    /**
     * 
     * @param {number} base 
     * @param {number} exponent
     * Pows a num
     */
    pow(base, b) {
        return base ** b
    }
    /**
     * 
     * @param {number} a
     * Returns the cosine of a 
     */
    cos(a) {
        return Math.cos(a)
    }
    /**
     * 
     * @param {number} a
     * Returns the sine of a 
     */
    sin(a) {
        return Math.sin(a)
    }
    /**
     * 
     * @param {number} a
     * Returns the tan of a 
     */
    tan(a) {
        return Math.tan(a)
    }
    /**
     * 
     * @param {number} num
     * Returns the factoriel of num 
     */
    factoriel(num) {
        let res = 1
        for (let i = 1; i <= num; i++) {
            res *= i
        }
        return res
    }
    /**
     * 
     * @param {number} num 
     * Returns the number's natural logarithm
     */
    log(num) {
        return Math.log(num)
    }
    /**
     * 
     * @param {number} num
     * Returns the logarithm with base 10 
     */
    log10(num) {
        return Math.log10(num)
    }
    /**
     * 
     * @param {number} x 
     * @param {number} n
     * Returns the root of x with exponent n 
     */
    nthroot(x, n) {
        let negate = n % 2 == 1 && x < 0;
        if (negate)
            x = -x;
        let possible = Math.pow(x, 1 / n);
        n = Math.pow(possible, n);
        if (Math.abs(x - n) < 1 && (x > 0 == n > 0))
            return negate ? -possible : possible;
    }
}
class NumericSystems {
    constructor(decimal, toSystem) {
        this.converted = this.convertBase(String(decimal), 10, toSystem)
        this.decimal = decimal
        this.sys = toSystem
    }
    convertBase(value, from_base, to_base) {
        value = String(value)
        var range = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ+/'.split('');
        var from_range = range.slice(0, from_base);
        var to_range = range.slice(0, to_base);

        var dec_value = value.split('').reverse().reduce(function (carry, digit, index) {
            if (from_range.indexOf(digit) === -1) throw new Error('Invalid digit `' + digit + '` for base ' + from_base + '.');
            return carry += from_range.indexOf(digit) * (Math.pow(from_base, index));
        }, 0);

        var new_value = '';
        while (dec_value > 0) {
            new_value = to_range[dec_value % to_base] + new_value;
            dec_value = (dec_value - (dec_value % to_base)) / to_base;
        }
        return new_value || '0';
    }
    guide() {
        console.log(`To use the Calculator class functions use this.decimal property`)
        console.log(`The NumericSystems property toSystem can be every number`)
    }
}
class PhysicsUnits {
    constructor() {
        this.alpha = 0.00729735
        this.bohrMagneton = 9.27401e-24
        this.lightSpeed = 299792458
        this.e = 2.71828
        this.electricConstant = 8.85419e-12
        this.electronCharge = 1.60218e-19
        this.electronMass = 9.10938e-31
        this.G = 6.67408e-11
        this.gravity = 9.80665
        this.h_bar = 1.05457e-34
        this.magneticConstant = 0.00000125664
        this.avogadroConstant = 6.02214e+23
        this.pi = Math.PI
        this.planckConstant = 6.62607e-34
        this.protonMass = 1.67262e-27
        this.R = 8.3145
    }
}
module.exports = {NumericSystems, PhysicsUnits,Calculator }