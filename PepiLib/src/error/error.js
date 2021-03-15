let Err=class extends Error {
    constructor(name,message) {
        super(name)
        this.name = name
        this.message=message
    }
}
module.exports = Err