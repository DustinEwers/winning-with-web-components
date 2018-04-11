export class FormField {
    render() {
        return (h("div", { class: 'form-container form-group' },
            h("label", { htmlfor: this.id }, this.label),
            h("input", { id: this.id, type: this.type, class: 'form-control' })));
    }
    static get is() { return "app-field"; }
    static get properties() { return { "id": { "type": String, "attr": "id" }, "label": { "type": String, "attr": "label" }, "type": { "type": String, "attr": "type" } }; }
    static get style() { return "/**style-placeholder:app-field:**/"; }
}
