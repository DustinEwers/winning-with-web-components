/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */


import './stencil.core';




export namespace Components {

  interface AppCard {
    'cardTitle': string;
  }
  interface AppCardAttributes extends StencilHTMLAttributes {
    'cardTitle'?: string;
  }

  interface AppCounterCard {}
  interface AppCounterCardAttributes extends StencilHTMLAttributes {
    'onCountChanged'?: (event: CustomEvent) => void;
  }

  interface AppField {
    'id': string;
    'label': string;
    'type': string;
  }
  interface AppFieldAttributes extends StencilHTMLAttributes {
    'id'?: string;
    'label'?: string;
    'type'?: string;
  }
}

declare global {
  interface StencilElementInterfaces {
    'AppCard': Components.AppCard;
    'AppCounterCard': Components.AppCounterCard;
    'AppField': Components.AppField;
  }

  interface StencilIntrinsicElements {
    'app-card': Components.AppCardAttributes;
    'app-counter-card': Components.AppCounterCardAttributes;
    'app-field': Components.AppFieldAttributes;
  }


  interface HTMLAppCardElement extends Components.AppCard, HTMLStencilElement {}
  var HTMLAppCardElement: {
    prototype: HTMLAppCardElement;
    new (): HTMLAppCardElement;
  };

  interface HTMLAppCounterCardElement extends Components.AppCounterCard, HTMLStencilElement {}
  var HTMLAppCounterCardElement: {
    prototype: HTMLAppCounterCardElement;
    new (): HTMLAppCounterCardElement;
  };

  interface HTMLAppFieldElement extends Components.AppField, HTMLStencilElement {}
  var HTMLAppFieldElement: {
    prototype: HTMLAppFieldElement;
    new (): HTMLAppFieldElement;
  };

  interface HTMLElementTagNameMap {
    'app-card': HTMLAppCardElement
    'app-counter-card': HTMLAppCounterCardElement
    'app-field': HTMLAppFieldElement
  }

  interface ElementTagNameMap {
    'app-card': HTMLAppCardElement;
    'app-counter-card': HTMLAppCounterCardElement;
    'app-field': HTMLAppFieldElement;
  }


}