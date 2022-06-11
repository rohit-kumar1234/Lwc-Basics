import { LightningElement } from 'lwc';

export default class ConditionalRendering extends LightningElement 
{
    firstValue
    secondValue
    mul
    isClicked = false
    handleFirst(event)
    {
        this.firstValue = event.target.value
    }
    handleSecond(event)
    {
        this.secondValue = event.target.value

    }
    get result()
    {
        return this.firstValue * this.secondValue
    }
    hand()
    {
        this.isClicked = true
        
    }
}