import { LightningElement ,track,wire} from 'lwc';
import getCaseList from '@salesforce/apex/CreateGridCase.getCaseList';

export default class CaseGrid extends LightningElement {

     @track gridData;
    @track gridColumns = [
        {
            type:Text,
            fieldName:'CaseNumber',
            label:'Case Number'
        },
        {
            type:Text,
            fieldName:'Status',
            label:'Status'
        },
        {
            type:Text,
            fieldName:'Priority',
            label:'Priority'
        },
    ]

    @wire(getCaseList)
    wireProperty({data , error}){
        if(data){
            // console.log(JSON.stringify(data));
            // var tempArray = JSON.stringify(data);
            // console.log('tempArray---',tempArray);
            // var tempArr = JSON.parse(JSON.stringify(data));
            // console.log('tempArr---parse',tempArr);

                    console.log('Case Result-->',JSON.stringify(data));
        
                    var childArry=JSON.parse(JSON.stringify(data));
        
                    for(var i=0;i<childArry.length;i++){
                        var newchildArry = childArry[i]['Cases'];
                        console.log('childArry--->',newchildArry);
                        
                        if(newchildArry){
                            childArry[i]._children = newchildArry;
                            console.log('newchildArry--->',JSON.stringify(childArry[i]._children) );
        
                            delete childArry[i].Cases;
        
                        }
                    }
                    this.gridData=childArry;
                    console.log('final data--->',JSON.stringify(this.gridData) );
                 
            }
            else if(error){
                console.log('error---',error);
            }
    

}
gridSelectedRow(){
    console.log('inside select row');
}
}