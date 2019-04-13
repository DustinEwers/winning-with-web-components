import { h } from '../app-library.core.js';

class FormField {
    render() {
        return (h("div", { class: 'app-field' },
            h("label", { htmlFor: this.id }, this.label),
            h("input", { id: this.id, type: this.type, class: 'form-control' })));
    }
    static get is() { return "app-field"; }
    static get properties() { return {
        "id": {
            "type": String,
            "attr": "id"
        },
        "label": {
            "type": String,
            "attr": "label"
        },
        "type": {
            "type": String,
            "attr": "type"
        }
    }; }
    static get style() { return ".app-field{margin-bottom:.75rem}.app-field>label{display:block}"; }
}

export { FormField as AppField };
