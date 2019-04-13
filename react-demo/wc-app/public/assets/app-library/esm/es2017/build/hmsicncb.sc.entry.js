import { h } from '../app-library.core.js';

class BootstrapCard {
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
    static get style() { return ".card{padding:1rem;margin-bottom:1rem;-webkit-box-shadow:2px 2px 4px 0 #828282;-moz-box-shadow:2px 2px 4px 0 #828282;box-shadow:2px 2px 4px 0 #828282;max-width:50rem}"; }
}

class CounterCard {
    constructor() {
        this.currentCount = 0;
    }
    componentWillLoad() {
        console.log('The counter component is about to be rendered');
    }
    componentDidLoad() {
        console.log('The counter component has been rendered');
    }
    componentWillUpdate() {
        console.log('The counter component will update');
    }
    componentDidUpdate() {
        console.log('The counter component did update');
    }
    componentDidUnload() {
        console.log('The view has been removed from the DOM');
    }
    changeCount(increment) {
        const oldVal = this.currentCount;
        this.currentCount += increment;
        this.countChanged.emit({ oldValue: oldVal, newValue: this.currentCount });
    }
    render() {
        return (h("app-card", { cardTitle: "Counter" },
            h("p", null,
                "Current Count: ",
                this.currentCount),
            h("button", { class: 'btn btn-primary', onClick: () => this.changeCount(1) }, "Increment"),
            h("button", { class: 'btn btn-warning', onClick: () => this.changeCount(-1) }, "Decrement")));
    }
    static get is() { return "app-counter-card"; }
    static get properties() { return {
        "currentCount": {
            "state": true
        }
    }; }
    static get events() { return [{
            "name": "countChanged",
            "method": "countChanged",
            "bubbles": true,
            "cancelable": true,
            "composed": true
        }]; }
    static get style() { return "button.btn{margin-right:5px}"; }
}

export { BootstrapCard as AppCard, CounterCard as AppCounterCard };
