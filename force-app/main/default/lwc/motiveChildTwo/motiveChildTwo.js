import { LightningElement, api, wire,track } from 'lwc';
import showRecord from '@salesforce/apex/ShowObjectName.showRecord'
import { refreshApex } from '@salesforce/apex';

export default class MotiveChildTwo extends LightningElement {
    @api objec;
    @track backenddata = [];
    @track columns = [{
        label: 'Name',
        fieldName: 'Name',
        type: 'text',
        sortable: true
    }
    // },
    // {
    //     label: 'Phone',
    //     fieldName: 'Phone',
    //     type: 'phone',
    //     sortable: true
    // }
];

  @wire(showRecord,{obj:'$objec'})
  wireProperty(result) {
  this.wiredAccountResults = result;
 
    if (result.data){
        console.log('In wire => second child');
        console.log('Data in Child 2--',JSON.stringify(result.data));
        this.backenddata = result.data;
    }
    else if(result.error){
        console.log(result.error);
    }
  }



   @api handleValueChange(){
    console.log('Inside refresh update button');
    refreshApex(this.wiredAccountResults);
  }
     
}
