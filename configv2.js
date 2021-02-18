class Config{
    constructor(...params) {
        params.forEach((e) => {
            const entries = Object.entries(e);
            entries.forEach(([k,v]) => {
                this[k]=v;
            })
            
        })

        console.log(this)
    }
}

new Config({url: {repo: "asdv"}}, {port: 4433});