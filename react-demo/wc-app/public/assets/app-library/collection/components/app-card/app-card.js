export class BootstrapCard {
    render() {
        return (h("div", { class: 'card' },
            h("h5", null, this.cardTitle),
            h("div", null,
                h("slot", null))));
    }
    static get is() { return "app-card"; }
    static get properties() { return {
        "cardTitle": {
            "type": String,
            "attr": "card-title"
        }
    }; }
    static get style() { return "/**style-placeholder:app-card:**/"; }
}
