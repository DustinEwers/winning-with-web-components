export class CounterCard {
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
    static get style() { return "/**style-placeholder:app-counter-card:**/"; }
}
