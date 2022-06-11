import { LightningElement } from 'lwc';
import USER_IMAGE from "@salesforce/resourceUrl/user_img"
import SVG_IMG from "@salesforce/resourceUrl/svgex"
//import third party javascript library 
import MOMENT from "@salesforce/resourceUrl/moment"
import ANIMATE from "@salesforce/resourceUrl/animate"
// for file reference use api name of assetfile
import ASSERT_FILE from '@salesforce/contentAssetUrl/contentAssetFileszip'
//loadscript
import {loadScript,loadStyle} from 'lightning/platformResourceLoader'

//fetch user details
import USER_ID from '@salesforce/user/Id'//fetch user id
import IS_GUEST from '@salesforce/user/isGuest'//check if user is guest user or not true/false

//toast notify
import {ShowToastEvent} from 'lightning/platformShowToastEvent'

export default class ScopedModule extends LightningElement {
    userImage=USER_IMAGE
    svgImage=SVG_IMG
    assetFile=ASSERT_FILE

    userId=USER_ID
    isGuest=IS_GUEST
    
    currentDate=''
    isLibLoaded=false
    renderedCallback(){
        if(this.isLibLoaded){
            return
        }
        else{
            Promise.all([
                //loadScript(reference to the component ,fileUrl)
                loadStyle(this,ANIMATE+'/animate/animate.min.css'),
                loadScript(this,MOMENT+'/moment/moment.min.js')
            ]).then(()=>{
                this.setDateOnScreen()
            }).catch(error=>{console.error(error)})
            this.isLibLoaded=true
         }
        
        }
        
    setDateOnScreen(){
        this.currentDate=moment().format('LLLL')
    }

    //toast notifications
     /* toastFunction(){
            const toastEvent = new ShowToastEvent({
            title:'Successful !!',
            message:'created successfully',
            variant:'success'
             })
             this.dispatchEvent(toastEvent) 
        } */

        ShowToast(title,message,variant){
            const evt=new ShowToastEvent({
                title,
                message,
                variant,
                messageData:[
                    'salesforce',{
                        url:'http://www.salesfroce.com',
                        label:'click here'
                    }
                ]
            })
            this.dispatchEvent(evt)
          }
    
    handleClick(){
        this.ShowToast('success !!','{0} created succesfully {1}','warning')
    }
    
}