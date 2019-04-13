import { Component, Prop } from '@stencil/core';

@Component({
    tag: 'app-field',
    styleUrl: 'app-field.css'
})
export class FormField {
    @Prop() id: string;
    @Prop() label: string;
    @Prop() type: string;

    render() {
        return (
            <div class='app-field'>
                <label htmlFor={this.id}>{this.label}</label>
                <input  id={this.id} type={this.type} class='form-control' />
            </div>
        );
    }
}