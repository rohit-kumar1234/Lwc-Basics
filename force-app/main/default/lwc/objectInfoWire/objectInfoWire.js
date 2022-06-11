import { LightningElement, wire } from 'lwc';
//        adapter              adapter module
import {getObjectInfo,getObjectInfos} from 'lightning/uiObjectInfoApi'
//     alias/refecrnce                  account object
import ACCOUNT_OBJECT from '@salesforce/schema/Account'
import OPPORTUNITY_OBJECT from '@salesforce/schema/Opportunity'

export default class ObjectInfoWire extends LightningElement {
    /*@wire(adapterId,adapterConfig) //import adapter from adapterModule
      propertyorFunction */
      /*
       * when @wire is used then lds fetch and get the data from DB
       * to access the data from wire use a function / property
       *  wire returns the response with  2 properties data , error
       * 
       */
     dataReceived
    @wire(getObjectInfo,{objectApiName:ACCOUNT_OBJECT})
    metadatainfo({data , error}){
        if(data){
            console.log(data.childRelationships)
            console.log('bam--------------------------------')

            console.log(data)

            this.dataReceived =data
        }
        if(error){
            console.error(error)
        }
    }
/*
    objectApinames=[ACCOUNT_OBJECT,OPPORTUNITY_OBJECT]
    receivedData
    @wire(getObjectInfos,{objectApiNames:'$objectApinames'})
    metaDataReturned({data,error}){
        if(data){
            console.log(data)
            this.receivedData=data
        }
        if(error){
            console.error(error)
        }
    }*/
        @wire(getObjectInfo,{objectApiName:ACCOUNT_OBJECT})
        propertyx
      
}