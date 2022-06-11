import { LightningElement } from 'lwc';

export default class QuizzApp extends LightningElement {
    questionsArray=[
        {
            id:"Question1",
            question:"which one of the following is not a template loop ?",
            options:{
                        a:"for:each",
                        b:"iterator",
                        c:"map loop"
                    },
            correctAnswer:"c"
        },
        {
            id:"Question2",
            question:"which of the file is invalid in LWC compenent folder ?",
            options:{
                        a:".svg",
                        b:".apex",
                        c:".js"
                    },
            correctAnswer:"b"
        },
        {
            id:"Question3",
            question:"which of the following is not a directive ?",
            options:{
                        a:"if:true",
                        b:"if:false",
                        c:"@track"
                    },
            correctAnswer:"c"
        }

    ]
    selected={}

    handleChange(event){
        const {name,value}=event.target//here we are using same property name to store there respective vlaues so we can use this shorthand to store values
        //const name=event.target.name
        //const value=event.target.value
        this.selected={...this.selected, [name]:value}
    }

     get alloptionsNotSelected()
    {
        return !(Object.keys(this.selected).length  === this.questionsArray.length)
    }

    handleSubmit()
    {

    }

    handleReset()
    {

    }
}