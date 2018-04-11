import '../../stencil.core';
import { EventEmitter } from '../../stencil.core';
export declare class CounterCard {
    currentCount: number;
    countChanged: EventEmitter;
    componentWillLoad(): void;
    componentDidLoad(): void;
    componentWillUpdate(): void;
    componentDidUpdate(): void;
    componentDidUnload(): void;
    changeCount(increment: any): void;
    render(): JSX.Element;
}
