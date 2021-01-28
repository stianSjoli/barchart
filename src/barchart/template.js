
let template = {
    render() {
        return `${this.css()} ${this.html()}`;
    },
    html() {
        return '<svg></svg>';

    },

    css() {
        return '<style> .y-axis{font-size:0.7em}' +
                        '.x-axis{font-size:0.7em}' +
                        'text{fill: var(--text-fill, black)}' +
                        '.label{fill:var(--label-text-color, black)}' +
            '</style>';
    }
};

export default template;

