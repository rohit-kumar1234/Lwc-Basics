import { LightningElement, wire } from 'lwc';
import LMC from "@salesforce/messageChannel/LmcChannel__c"
import {MessageContext, publish} from 'lightning/messageService'
export default class ParentComponent extends LightningElement 
{
  
    textEntered
    @wire(MessageContext)
    context
 
    handleKeyup(event){
        this.textEntered=event.target.value
    }
    publishMessage(){
        const message={
            lmsData:{
                value:this.textEntered
            }
        }
        // publish(messageContext,messageChannel,message)
     publish(this.context,LMC,message)
    }
}
   

