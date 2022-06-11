import { LightningElement, wire } from 'lwc';

import LMC from "@salesforce/messageChannel/LmcChannel__c"
import {APPLICATION_SCOPE,MessageContext,subscribe,unsubscribe} from 'lightning/messageService'
export default class ChildComponent extends LightningElement {
    @wire(MessageContext)
    context
    msgFromLwc

    handleClick(){
       window.open("https://www.youtube.com/", "_blank", "toolbar=yes,scrollbars=yes,menubar=yes,resizable=yes,top=500,left=500,width=400,height=400")
       //window.open("https://www.cricbuzz.com/","_self")
    }
    connectedCallback(){
        this.subscribeMessage()
    }
    subscribeMessage(){
        subscribe(this.context,LMC,(message)=>{this.handleMessage(message)},{scope:APPLICATION_SCOPE})

    }
    handleMessage(message){
        this.msgFromLwc=message.lmsData.value? message.lmsData.value:'No Message Published'
    }
}