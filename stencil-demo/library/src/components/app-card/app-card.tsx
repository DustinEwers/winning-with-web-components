import { Component, Prop } from '@stencil/core';

@Component({
    tag: 'app-card',
    styleUrl: 'app-card.css'
})
export class BootstrapCard {
    @Prop() cardTitle: string;

    render(){
        return (
            <div class='card'>
                <h5>{this.cardTitle}</h5>  
                <div>
                    <slot />
                </div>
            </div>
        );
    }
}