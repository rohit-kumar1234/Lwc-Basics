import { LightningElement,wire,api } from 'lwc';
import { getRecord,getFieldDisplayValue,getFieldValue, generateRecordInputForCreate } from 'lightning/uiRecordApi';
import { getListUi } from 'lightning/uiListApi';
import  CONTACT_OBJ from '@salesforce/schema/Contact'
import NAME_FIELD from '@salesforce/schema/Account.Name'
import OWNER_FIELD from '@salesforce/schema/Account.Owner.Name'
import ANNUAL_REVENUE_FIELD from '@salesforce/schema/Account.AnnualRevenue'

export default class WireGetRecord extends LightningElement {
    accountName
    accountOwner
    AnnualRevenueDisplay
    AnnualRevenueValue

    @api recordId  //to fetch record id when placed in record page

    //wire using fields property
  /*  @wire(getRecord,{recordId:'$recordId',fields:[NAME_FIELD,OWNER_FIELD,ANNUAL_REVENUE_FIELD]})
    recordData({data}){
        if(data){
            console.log(data)
            //data.fields.Name.DisplayValue ? check if this value is avaliable if yes the assign  val1 else val2 val1 :val2
            this.accountName=data.fields.Name.DisplayValue ? data.fields.Name.DisplayValue : data.fields.Name.value
            this.accountOwner=data.fields.Owner.DisplayValue ? data.fields.Owner.DisplayValue : data.fields.Owner.value.fields.Name.value
            this.AnnualRevenue=data.fields.AnnualRevenue.DisplayValue ? data.fields.AnnualRevenue.DisplayValue : data.fields.AnnualRevenue.value
        }
     }*/
    
      //wire using layout property
     /* @wire(getRecord,{recordId:'$recordId',layoutTypes:['Full'],modes:['View']})
       accountData({data}){
          if(data){
              console.log(data)
              this.accountName=getFieldDisplayValue(data, NAME_FIELD ) ? getFieldDisplayValue(data, NAME_FIELD ):getFieldValue(data,NAME_FIELD)
              this.AnnualRevenueDisplay=getFieldDisplayValue(data, ANNUAL_REVENUE_FIELD )
              this.AnnualRevenueValue=getFieldValue(data, ANNUAL_REVENUE_FIELD )


          }
        }*/

/*========================================== getListUi =======================================*/
        contactsArray=[]
        pageToken=null
        previousPageToken=null
        nextPageToken=null

        @wire(getListUi,{objectApiName:CONTACT_OBJ,listViewApiName:'AllContacts',pageSize:5,pageToken:'$pageToken'})
        listViewRecordData({data}){
            if(data){
                console.log(data)
                console.log(data.records.records)
                this.contactsArray=data.records.records
                this.previousPageToken=data.records.previousPageToken
                this.nextPageToken=data.records.nextPageToken
            }
        }
        previousClick(){
            this.pageToken=this.previousPageToken
        }
        nextClick(){
            this.pageToken=this.nextPageToken
        }
     
}