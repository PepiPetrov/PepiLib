const libs=require('libraries')
const Calculator = libs.Calculator
const NumericsSystems = libs.NumericSystems
const PhysicUnits = libs.PhysicsUnits
const Library = libs.Library
const Computer = libs.Computer
const Err = libs.Err
const Forum = libs.Forum
const Complex=libs.Complex
const MathSet=libs.MathClassesAndFuncs
const {Fraction,parse,toTex,Equation,Expression}=libs.algebraSet
const physic = new PhysicUnits()
function libraryDemo(){
    const library = new Library()
}
function systems(){
    const hex1234 = new NumericsSystems(1234, 16)
}
function error(){
    const hackError = new Err('Hack error', 'Demo')
    throw hackError
}
function computer() {
    const acerAspire=new Computer('Peter','pepi','Acer','Aspire')
    acerAspire.installAprogram('CodeBlocks', 1, 1,'IDE')
    acerAspire.installAprogram('VS Code', 0.9, 0.9,'IDE')
    acerAspire.installAprogram('Discord', 10, 10,'Chat')
    acerAspire.installAprogram('Calibre', 11, 11,'Book manager')
    acerAspire.openAprogram('VS Code')
    acerAspire.openAprogram('CodeBlocks')
    acerAspire.openAprogram('Calibre')
    acerAspire.openAprogram('Discord')
    return acerAspire
}
function forumDemo(){
    const forum = new Forum()
    console.log(forum.register('Peter', '2010pepi', '2010pepi', 'pepi@demo.com'))
    console.log(forum.register('Nadya', '1010', '1010', 'nadya@demo.com'))
    console.log(forum.register('Petroff','2010','2010','petroff@gmail.com'))
    console.log(forum.login('Nadya','1010'))
    console.log(forum.login('Petroff','2010'))
    console.log(forum.login('Peter', '2010pepi'))
    console.log(forum.postQuestion('Peter', 'How should I get the Petroff\'s library of apps?'))
    console.log(forum.postAnswer('Nadya', 1, 'npm i libraries'))
    console.log(forum.postAnswer('Petroff',1,'Nadya is right'))
    console.log(forum.showQuestions())
}