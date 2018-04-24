class Panel extends HTMLElement {
    constructor() {
        super();

        let template = document.getElementById('panel');
        let templateContent = template.content;
  
        const shadowRoot = this.attachShadow({mode: 'open'})
          .appendChild(templateContent.cloneNode(true));
    }
}

customElements.define('content-panel', Panel);