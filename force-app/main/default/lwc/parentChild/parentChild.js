 import { LightningElement , track , wire} from 'lwc';
 import accResult from '@salesforce/apex/GetAccountCLass.getacc'
export default class ParentChild extends LightningElement {

    @track column ;
@wire(accResult)
wiredacc({data , error}){
    if(data){
        console.log('data--->',JSON.stringify(data));
        this.column = data;
    }
    else if(error){
        console.log(error);
    }
}
}