import { LightningElement ,track, wire} from 'lwc';
import accConList from '@salesforce/apex/CreateLeadAPI.accConList';

export default class LightningGridComp extends LightningElement {

     @track gridData;

    @track gridColumns=[
       {
        type :'text',
        fieldname : 'Name',
        label:'Name'
       },
       {
        type :'text',
        fieldname : 'FirstName',
        label:'First Name'
       },
       {
        type :'text',
        fieldname : 'LastName',
        label:'Last Name'
       }
    ];

    @wire(accConList)
    wireProperty({data , error}){
    if(data){
        // console.log(JSON.stringify(data));
        var tempArray = JSON.stringify(data);
        // console.log('tempArray---',tempArray);
        // var tempArr = JSON.parse(JSON.stringify(data));
        // console.log('tempArr---parse',tempArr);
    }
    else if (error) {
        console.log(JSON.stringify(error));
    }
}



}