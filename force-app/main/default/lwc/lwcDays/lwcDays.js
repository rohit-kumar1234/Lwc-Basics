import { LightningElement , track } from 'lwc';

export default class LwcDays extends LightningElement {
    team  = "GT"
    brand = "bkt tyres"
    handlekeyup(evt)
    {
        this.team = evt.target.value
    }

    address = {
        city:"delhi",
        country :"india"
    }

    handlecity(event)
    {
        this.address = {...this.address,"city":event.target.value}
    }
    @track cars = {
        tata :"nexon",
        maruti : "ertiga",
        mahindra : "scorpio"
    }

    handletata(evt)
    {
        this.cars.tata = evt.target.value 
    }
      a =10
      b = 20
      arr = ["one","two","three"]
      get result0()
      {
          return this.arr[0]
      }
      handlea(evt)
      {
          this.a = evt.target.value
      }
      handleb(evt)
      {
          this.b = evt.target.value
      }
      
         get result()
          {

              return (this.a)-(this.b)
          }
      
}