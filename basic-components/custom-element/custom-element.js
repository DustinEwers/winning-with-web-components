class Field extends HTMLElement {
    constructor() {
        super();

        // Grabbing data from the component attributes
        var id = this.getAttribute('id');
        var fieldLabel = this.getAttribute('label');
        var inputType = this.getAttribute('type');

        // Building the different elements in the control
        var container = document.createElement('div');
        container.setAttribute('class', 'form-container');

        var label = document.createElement('label');
        label.textContent = fieldLabel;
        label.for = id;

        var input = document.createElement('input');
        input.id = id;
        input.type = inputType;

        var style = document.createElement('style');
        style.textContent = '.form-container { width: 400px; padding-bottom:20px; }';

        // Adding them to a shadow DOM
        var shadow = this.attachShadow({mode: 'open'})
        shadow.appendChild(style);
        shadow.appendChild(container);

        container.appendChild(label);
        container.appendChild(document.createElement('br'));
        container.appendChild(input);
    }
}

// Adding the element so it can be used. Note that custom elements have to have a hyphened name.
customElements.define('input-field', Field);