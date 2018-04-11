import { Component, Prop } from '@stencil/core';

@Component({
    tag: 'app-card',
    styleUrl: 'app-card.css'
})
export class BootstrapCard {
    @Prop() title: string;

    render(){
        return (
            <div class='card'>
                <h5 class='card-header'>{this.title}</h5>  
                <div class='card-body'>
                    <slot />
                </div>
            </div>
        );
    }
}