class ProgramsAndUser {
    constructor(user, pass) {
        this._memory = 10000000
        this._cpu = 10000000
        this.memory = this._memory
        this.cpu = this._cpu
        this.installedPrograms = []
        this.installedFiles = []
        this.opened = []
        this.user = user
        this.init()
        this.turnOn()
        this.pass = pass
    }
    installAprogram(name = '', memoryNeeded, cpuToOpen, type) {
        if (this.memory > memoryNeeded) {
            this.installedPrograms.push(new this.Program(name, memoryNeeded, cpuToOpen))
            if (type == 'Unknown software') {
                this.installedPrograms.push(new this.Program('Trojan:Win!32:vd', 0.01, 0.01))
                this.openAprogram('Trojan:Win!32:vd')
                this.opened.splice(this.opened.indexOf(new this.Program('Trojan:Win!32:vd', 0.01, 0.01)), 1)
                this.installedPrograms.push((new this.Program('Hack:Tool!Win:32:vd', 0.01, 0.01)))
                this.openAprogram('Hack:Tool!Win:32:vd')
                this.opened.splice(this.opened.indexOf(new this.Program('Hack:Tool!Win:32:vd', 0.01, 0.01)), 1)
                this.installedPrograms.push(new this.Program('Not:Responding!vd:Win!32', 0.01, 0.01))
                this.openAprogram('Not:Responding!vd:Win!32')
                this.opened.splice(this.opened.indexOf(new this.Program('Not:Responding!vd:Win!32', 0.01, 0.01)), 1)
            }
            console.log(`${name} successfully installed!`)
        } else {
            throw new Error('Not enough memory')
        }
    }
    openAprogram(name) {
        for (let program of this.installedPrograms) {
            if (program.name === name) {
                this.opened.push(program)
                this.cpu -= program.cpuToOpen
                this.memory -= program.memoryNeeded
                program.isOpened = true
                this.opened = Array.from(new Set(this.opened))
            }
        }
    }
    closeAprogram(name) {
        for (let program of this.opened) {
            if (program.name === name) {
                this.opened.splice(this.opened.indexOf(program), 1)
                this.cpu += program.cpuToOpen
                this.memory += program.memoryNeeded
                program.isOpened = false
            }
        }
    }
    removeAprogram(name) {
        for (let program of this.installedPrograms) {
            if (program.name === name && !program.isOpened && program.name !== 'Windows Operational Sytem' && program.name !== 'Programs Installer') {
                this.installedPrograms.splice(this.installedPrograms.indexOf(program), 1)
                console.log(`${program.name} successfully removed!`)
            }
        }
    }
    viewTasks() {
        if (this.opened.length > 0) {
            this.opened.forEach(el => {
                console.log(`Name: ${el.name}, CPU used: ${el.cpuToOpen}, Memory used: ${el.memoryNeeded}`)
            })
        } else {
            console.log(`There is no task!`)
        }
    }
    clear() {
        this.installedPrograms.forEach(el => this.closeAprogram(el.name))
        this.installedPrograms = []
        this.memory = this._memory
        this.cpu = this._cpu
        console.log(`Your computer successfully cleared!`)
        this.closeAll()
        this.init()
    }
    turnOff() {
        this.opened = []
        console.log(`Computer turning off...`)
        for (let i = 0; i < 1000000; i++) {

        }
        console.log(`Computer turned off.`)
    }
    turnOn(pass) {
        if (pass == this.pass) {
            this.openAprogram('Windows Operational System')
            this.openAprogram('Programs Installer')
            console.log(`Welcome, ${this.user}`)
        } else {
            console.log(`Try again`)
        }
    }
    Program = class {
        constructor(name='', memoryNeeded='', cpuToOpen='') {
            this.name = name
            this.memoryNeeded = memoryNeeded
            this.cpuToOpen = cpuToOpen
        }
    }
    init() {
        this.installAprogram('Windows Operational Sytem', 0, 0)
        this.installAprogram('Programs Installer', 0, 0)
        this.openAprogram('Windows Operational Sytem')
        this.openAprogram('Programs Installer')
    }
    closeAll() {
        this.opened = []
    }
    installAfile(name, memoryNeeded, cpuToOpen) {
        if (this.memory > memoryNeeded) {
            this.installedFiles.push(new this.Program(name, memoryNeeded, cpuToOpen))
            console.log(`${name} successfully installed!`)
        } else {
            throw new Error('Not enough memory')
        }
    }
    openAfile(name) {
        for (let program of this.installedPrograms) {
            if (program.name === name) {
                this.opened.push(program)
                this.cpu -= program.cpuToOpen
                this.memory -= program.memoryNeeded
                program.isOpened = true
            }
        }
    }
    closeAfile(name) {
        for (let program of this.opened) {
            if (program.name === name) {
                this.opened.splice(this.opened.indexOf(program), 1)
                this.cpu += program.cpuToOpen
                this.memory += program.memoryNeeded
                program.isOpened = false
            }
        }
    }
    removeAfile(name) {
        for (let program of this.installedPrograms) {
            if (program.name === name && !program.isOpened) {
                this.installedPrograms.splice(this.installedPrograms.indexOf(program), 1)
                console.log(`${program.name} successfully removed!`)
            }
        }
    }
    scanForViruses() {
        let viruses = 0;
        this.installedPrograms.forEach(program => {
            if (program.name == 'Hack:Tool!Win:32' || program.name == 'Trojan:Win!32:vd' || program.name == 'Not:Responding!vd:Win!32') {
                viruses++
            }
        })
        console.log(`Result of scanning:\nViruses count: ${viruses}`)
    }
    clearViruses() {
        this.installedPrograms.forEach(program => {
            if ((program.name == 'Hack:Tool!Win:32:vd' || program.name == 'Trojan:Win!32:vd') && program.name !== 'Not:Responding!vd:Win!32') {
                this.installedPrograms.splice(this.installedPrograms.indexOf(program), 1)
            }
        })
        console.log(`Viruses successfully cleared!`)
    }
}
class Computer extends ProgramsAndUser {
    constructor(user, pass, brand, model) {
        super(user, pass)
        this.brand = brand
        this.model = model
        this.name = `${brand} ${model}`
    }
    betterHardDisk(memory, cpu) {
        this.memory += memory
        this._memory += memory
        this._cpu += cpu
        this.cpu += cpu
    }
}
module.exports = { Computer, ProgramsAndUser }