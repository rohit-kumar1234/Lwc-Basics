import { LightningElement, wire } from 'lwc';
import {getRecordUi} from 'lightning/uiRecordApi'

export default class WireGetRecordUi extends LightningElement {
    accFields=[
        
        {fieldName:'Name'}/*,
        {fieldName:'AccountNumber'},
        {fieldName:'AnnualRevenue'},
        {fieldName:'Rating'},
        {fieldName:'Website'}*/
    ]

    @wire(getRecordUi,{recordIds:['0031y00000MJBgFAAX','0011y00000SNEy7AAH'],layoutTypes:['Full'], modes: ['View'] })
    receiveData({data}){
        if(data){
            console.log(data)
            this.accFields=this.accFields.map(item=>{
                return {...item,value:data.records['0011y00000SNEy7AAH'].fields[item.fieldName].value}
            })
            console.log(this.accFields)
        }
    }
    
} 
