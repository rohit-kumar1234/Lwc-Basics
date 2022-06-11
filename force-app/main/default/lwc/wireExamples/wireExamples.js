import { LightningElement,wire } from 'lwc';
import id from '@salesforce/user/Id'
import NAME_FIELD from '@salesforce/schema/User.Name'
import EMAIL_FIELD from '@salesforce/schema/user.email'
const fields=[NAME_FIELD,EMAIL_FIELD]
import {getRecord} from 'lightning/uiRecordApi'
export default class WireExamples extends LightningElement {

    userId=id
  /*  @wire(getRecord,{recordId : '0051y00000LVprsAAD',fields:['User.Name','User.Email']})
    userDetails(response){
        console.log(response)
    }*/
     /*  @wire(getRecord,{recordId : '0051y00000LVprsAAD',fields})
    userDetails(response){
        console.log(response)
    }*/
    fieldsDetails
   @wire(getRecord,{recordId:'0051y00000LVprsAAD',fields:['User.Name','user.Email']})
    userDetails1({data,error})
    {
        if(data){
            this.fieldsDetails =data.fields
        }
        if(error){
            console.error(error)
        }
    }
    @wire(getRecord,{recordId:'0051y00000LVprsAAD',fields:['User.Name','user.Email']})
      userDetailProperty 
      /*print(){
        console.log(userDetailProperty)

      }*/
    
    
}