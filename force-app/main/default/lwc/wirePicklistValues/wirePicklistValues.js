import { LightningElement,wire } from 'lwc';
import { getObjectInfo, getPicklistValues, getPicklistValuesByRecordType } from 'lightning/uiObjectInfoApi';
import ACCOUNT_OBJ from '@salesforce/schema/Account'
import OPPORTUNITY_OBJ from '@salesforce/schema/opportunity'

import FORECAST_CATEGORY_FIELD from '@salesforce/schema/Opportunity.ForecastCategory'
import STAGE_NAME_FIELD from '@salesforce/schema/Opportunity.StageName'

import INDUSTRY_FIELD from '@salesforce/schema/Account.Industry'

export default class WirePicklistValues extends LightningElement {
    currentValue=''
    avaliableOptions=[]

    StageOptions=[]
    currentStageVal=''
    ForecastCategoryOptions=[]
    currentForecastVal=''


    @wire(getObjectInfo,{objectApiName:ACCOUNT_OBJ})
    accountMeta
    
    //$ make wire reactive..this wire only runs when accountMeta is avalible only
    @wire(getPicklistValues,{recordTypeId:'$accountMeta.data.defaultRecordTypeId',fieldApiName:INDUSTRY_FIELD})
    industryPicklist({data,error}){
        if(data){
            console.log(data)//sfdx force:source:push
            this.avaliableOptions=[...this.option(data)] //get the picklist options and assign to property
        }
        if(error){
            console.error(error)
        }

    }
    //for picklist options 
    //data -is an array,so for array if we use map function it returns an array 
    /*array.map(function(currentItem,index,actualArray){
        return 
    }) */
    option(data){
      return  data.values.map(item=>({label:item.label,value:item.value}))
    }
    handleChange(evt){
        this.currentValue=evt.target.value
    }

 
    /*--------------------------------------picklistvalues by record type----------------------------------------*/
    @wire(getObjectInfo,{objectApiName:OPPORTUNITY_OBJ})
    oppMeta

    @wire(getPicklistValuesByRecordType,{recordTypeId:'$oppMeta.data.defaultRecordTypeId',objectApiName:OPPORTUNITY_OBJ})
    picklistFields({data,error}){
        if(data){
            console.log(data)
            this.ForecastCategoryOptions=[...this.picklistOptions(data.picklistFieldValues.ForecastCategory)]
            this.StageOptions=[...this.picklistOptions(data.picklistFieldValues.StageName)]
        }
        if(error){
            console.error(error)
        }
    }
    picklistOptions(anyData){
       return anyData.values.map(item=>({label:item.label,value:item.value}))
    }
    handlePicklistChange(evt){
        if(evt.target.label =='Stage'){
            this.currentStageVal = evt.target.value
        }
        if(evt.target.label =='Forecast Category'){
            this.currentForecastVal = evt.target.value
        }

    }
}
