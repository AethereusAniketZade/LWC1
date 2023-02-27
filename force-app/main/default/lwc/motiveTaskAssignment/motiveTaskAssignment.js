import { LightningElement,wire,track, api } from 'lwc';
import showObject from '@salesforce/apex/ShowObjectName.showObject'
export default class MotiveTaskAssignment extends LightningElement {

@track options;
@track temp='';
@track handleobjectapi=false;
@api ObjectName='';

 @wire(showObject,{objectNme:'$ObjectName'})
 wireproperty({error, data}){
   if(data){
       console.log('data-->',JSON.stringify(data));
   this.options = data.map(item=>{
    return{
      label: item,
      value: item
    }
  })
   }
   else if(error){
       console.log(error);
   }
 }
 handleChange(event){
    //  this.handleobjectapi = true;
     this.temp = event.detail.value;
     console.log('this.temp'+this.temp);
 }
}