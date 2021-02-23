class Prefixes {
    private _: Map<string, string>
    static available = Object.freeze({
        dev: "#",
        prod: "/",
    })
    constructor() {
        this._ = new Map()
        this._.set("dev", Prefixes.available.dev)
        this._.set("production", Prefixes.available.prod)
    }
    get() {
        return this._
    }
}

export default Prefixes
