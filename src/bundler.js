class Bundler {
    constructor(input) {
        this.input = input;
        this.output = '';
    }

    bundle() {
        // Simple bundling logic
        this.output = `Bundled: ${this.input}`;
    }

    getOutput() {
        return this.output;
    }
}

module.exports = Bundler;