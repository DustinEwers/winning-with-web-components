export class BootstrapCard {
    render() {
        return (h("div", { class: 'card' },
            h("h5", { class: 'card-header' }, this.title),
            h("div", { class: 'card-body' },
                h("slot", null))));
    }
    static get is() { return "app-card"; }
    static get properties() { return { "title": { "type": String, "attr": "title" } }; }
    static get style() { return "/**style-placeholder:app-card:**/"; }
}
