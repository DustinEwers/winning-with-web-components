import { Component, State, Event, EventEmitter } from '@stencil/core';

@Component({
    tag: 'app-counter-card',
    styleUrl: 'app-counter-card.css'
})
export class CounterCard {
    @State() currentCount: number = 0;
    @Event() countChanged: EventEmitter;

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
        return (
            <div class='card'>
                <h5 class='card-header'>Counter</h5>
                <div class='card-body'>
                    <p>Current Count: {this.currentCount}</p>
                    <button class='btn btn-primary' onClick={() => this.changeCount(1)}>Increment</button>
                    <button class='btn btn-warning' onClick={() => this.changeCount(-1)}>Decrement</button>
                </div>
            </div>
        );
    }
}