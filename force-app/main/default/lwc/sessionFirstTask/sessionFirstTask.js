import { LightningElement, track} from 'lwc';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';
// const columns= [
//     {label:'Description', fieldname : value },
//     {label:'Status', fieldname : incomplete}
// ];
export default class SessionFirstTask extends LightningElement {
   

@track dataList = [];
@track dtatype=[];
@track id=0;
inputValue;

 @track columns = [ 
   { label: 'Description', fieldName: 'Description' }, 
   { label: 'Status', fieldName: 'Status' }
   ];


handlechangeDatable(event){
    this.inputValue = event.target.value;
    console.log('Handle Value--->',this.inputValue);
}

handleEnterValue(event){
 if(event.keyCode === 13){
 console.log('id--'+this.id);
  this.dataList.push({ id: this.id, Description: this.inputValue, Status: "Incomplete" });
  
  console.log('this.dataList--->',JSON.stringify(this.dataList));

  this.dataList= [...this.dataList];
  // this.dataList = this.dtatype;

 console.log('this.dataList2--->',JSON.stringify(this.dataList));

   this.template.querySelector('.inputformat').value = "";
   this.id++;
 }
}

getSelectedName(event){

  // let rows = this.template.querySelector('lightning-datatable').getSelectedRows();

        var selectedRows = event.detail.selectedRows;

         console.log('selectedRows2',selectedRows.length);
   
        for (let i = 0; i < selectedRows.length; i++){
        console.log("You selected: " + selectedRows[i].id);
       
       this.dataList.splice(selectedRows[i].id, 1);
       this.dataList = [...this.dataList];

        // this.dataList = [... this.dataList];
        // this.template.querySelector('lightning-datatable').selectedRows[i] =  this.dataList.splice(selectedRows[i], 1);

       
    }
     
    const patch = new ShowToastEvent({
           title: 'Task Completed',
        // message: 'Opearion sucessful',
        variant: 'success',
        mode: 'dismissable'
        });
        this.dispatchEvent(patch);
    
 
//     let temp = this.data;
// if(event.target.checked === true){

//     console.log('Inside true block---Line 36');
    
//   temp.forEach((element, i) => {
//     if (i == key) {
//       temp[key].status = 'Approved';
//       temp.splice(key, 1);
      
//     }
//   });
//   this.data=temp;
// }
// else if(event.target.checked === false){

//      console.log('Inside false block---Line 45');

//      temp.forEach((element, i) => {
//     if (i == key) {
//       temp[key].status = 'Incomplete';
//     }
//   });
//   this.data=temp;
// }

}




///////************************************** Custom Table Code **********************************//////

hndlechngeVal;
@track data = [];

handlechange(event){
    this.hndlechngeVal = event.target.value;

    console.log('Handle Value--->',this.hndlechngeVal);
}

handleEnter(event){
 if(event.keyCode === 13){

  console.log('Inside keyup');

  this.data.push({label:this.hndlechngeVal , status: 'Incomplete'});

  console.log('this.column--->',JSON.stringify(this.data));

   this.template.querySelector('.inputformatone').value = "";
 }
}

handlecheckbox(event){
 var selectedRow = event.currentTarget;
  var key = selectedRow.dataset.id;

    console.log('key---',key);

    let temp = this.data;
if(event.target.checked === true){

    console.log('Inside true block---Line 36');
    
  temp.forEach((element, i) => {
    if (i == key) {
      temp[key].status = 'Approved';
      // temp.splice(key, 1);
      
    }
  });
  this.data=temp;
}
else if(event.target.checked === false){

     console.log('Inside false block---Line 45');

     temp.forEach((element, i) => {
    if (i == key) {
      temp[key].status = 'Incomplete';
    }
  });
  this.data=temp;
}
 const patch = new ShowToastEvent({
           title: 'Task Completed',
        // message: 'Opearion sucessful',
        variant: 'success',
        mode: 'dismissable'
        });
        this.dispatchEvent(patch);
}

}