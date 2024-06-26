// import { LightningElement } from 'lwc';
// import tempOne from './firstTemplate.html';
// import tempTwo from './secondTemplate.html';
// import tempDefault from './dynamicComponent.html';

// export default class DynamicComponent extends LightningElement {
//   selected = null;

//   render() {
//     return this.selected==='one' ? tempOne : this.selected==='two' ? tempTwo : tempDefault;
//   }

//   handleClick(event) {
//     this.selected = event.target.label;
//   }

//   switchTemplate(event)
//   {
//     this.selected=event.target.label === 'one' ? 'two' : event.target.label === 'two' ? 'one' : 'default';
//   }
// }


import { LightningElement } from 'lwc';
import tempOne from './firstTemplate.html';
import tempTwo from './secondTemplate.html';
import tempDefault from './dynamicComponent.html';

export default class DynamicComponent extends LightningElement {
  selected = null;

  render() {
    return this.selected === 'one' ? tempOne : this.selected === 'two' ? tempTwo : tempDefault;
  }

  handleClick(event) {
    this.selected = event.target.label;
  }

  switchTemplate(event) {
    const selectedLabel = event.target.label;
    if (selectedLabel === 'back') {
      this.selected = null; // Go back to the default template
    } else {
      this.selected = selectedLabel; // Re-render the same template or switch
    }
  }
}
