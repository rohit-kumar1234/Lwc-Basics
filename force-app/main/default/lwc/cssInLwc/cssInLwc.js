import { LightningElement } from 'lwc';

export default class CssInLwc extends LightningElement {
    precentage=10
    handleup(evt){
        return this.precentage = evt.target.value
    }

   get displayasper(){
        return `width:${this.precentage}%;  background-color: cyan; 
        border:1px solid black;`
    }
}