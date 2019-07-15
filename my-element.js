import { PolymerElement } from '@polymer/polymer/polymer-element.js';

class MyElement extends PolymerElement {
  static get is() { return 'my-element'}
  static get template() { return `Hello World!` }
}

customElements.define(MyElement.is, MyElement)