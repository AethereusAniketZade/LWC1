import { LightningElement, api, wire } from 'lwc';
import { getObjectInfo } from 'lightning/uiObjectInfoApi';
import NAME_FIELD from '@salesforce/schema/Account.Name';
import Phone_FIELD from '@salesforce/schema/Account.Phone';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';
import { createRecord } from 'lightning/uiRecordApi';


export default class MotiveChildOne extends LightningElement {
@api objec;
 @api recordTypeId ;

temp = this.objec;
 myFields = [NAME_FIELD, Phone_FIELD];

 @wire(getObjectInfo, { objectApiName: '$objec' })
handleObjectInfo({error, data}) {
    if (data) {
      console.log('In wire => First child');
        console.log('this.objec--'+this.objec);
      console.log('data objectApi --'+JSON.stringify(data));
        this.recordTypeId = data.defaultRecordTypeId;
        console.log('this.recordTypeId---'+this.recordTypeId);
    }
    else if(error){
       console.log(error);
   }
   }

   handleAccountCreated(event){
  
     console.log('temp ---'+temp);
    const evt = new ShowToastEvent({
      title: 'Record Created',
      message : "Record ID: "+event.detail.id,
      variant: 'success',
  });
  this.dispatchEvent(evt);

   console.log('Inside save button');
  // this.template.querySelector(c-motive-Child-two).handleapex();
 
  const editForm = this.template.querySelector('lightning-record-form');
editForm.recordId = null;

this.template.querySelector("c-motive-child-two").handleValueChange();

// this.template.querySelector("motiveChildTwo").handleapex();

}
   


} 