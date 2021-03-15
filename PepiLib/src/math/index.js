const Complex=require('@rayyamhk/complex')
const math=require('ella-math')
const calculy=require('calculy')
const mathPkg=require('math-pkg-cmplx')
const imporvedMath=require('improved-math')
const numbers=require('@danilosampaio/numbers')
const createVec=imporvedMath.new_vector
const random=imporvedMath.random
const Line = require('equationjs')
module.exports={
Complex,
MathClassesAndFuncs:math,
calculator:calculy,
RiemannSum:mathPkg.RiemannSum,
MathFuncs:mathPkg.Functions,
createVec,
random,
Line,
numbers,
imporvedMath,
numbers
}