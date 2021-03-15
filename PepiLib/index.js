const libs = require('./src/calculator')
const calculator=new libs.Calculator()
const Library = require('./src/libraryClass')
const NumericSystems = libs.NumericSystems
const PhysicsUnits = libs.PhysicsUnits
const Computer = require('./src/computer').Computer
const ProgramsAndUser=require('./src/computer').ProgramsAndUser
const Err=require('./src/error')
const Forum=require('./src/forum')
const MathClassesAndFuncs=require('./src/math')
console.log(MathClassesAndFuncs.calculator.evaluate('x+1+x*x+x*2*y*y*y*y*y*y*y*y*y*Y*Y*Y*Y*Y*Y*Y*Y*Y*Y*Y*Y',{constants:{
x:1,
Y:2,
y:3
}}))
const Complex=MathClassesAndFuncs.Complex
const algebraSet=require('./src/algebra.js')
const libraries={}
libraries['algebraSet']=algebraSet
libraries['Library']=Library
libraries['NumericSystems']=NumericSystems
libraries['PhysicsUnits']=PhysicsUnits
libraries['Computer']=Computer
libraries['ProgramsAndUser']=ProgramsAndUser
libraries['Err']=Err
libraries['Forum']=Forum
libraries['MathClassesAndFuncs']=MathClassesAndFuncs
libraries['Complex']=Complex
libraries['Calculator']=calculator
module.exports=libraries