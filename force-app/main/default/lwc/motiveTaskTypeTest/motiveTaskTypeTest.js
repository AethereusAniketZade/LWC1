import { LightningElement, track } from 'lwc';
import jsonData from '@salesforce/resourceUrl/JSONData';
export default class MotiveTaskTypeTest extends LightningElement {
    @track inputData;

    @track errormeesage;
    @track eventfire = false;
    @track errorCount = 0;
    @track disabletrue = false;
  

    @track indexArr = [];
    @track index = 0;
    @track error = 0;
    @track sec = 0;
    @track showdata = [];
    @track copyInputTextValue = [];
    @track totalSecondTaken;
    @track timerset;
    @track totalError = 0;
    @track accuracy = 0.0;
    @track wpm = 0;


    connectedCallback() {

        let request = new XMLHttpRequest();
        request.open("GET", jsonData, false);
        request.send(null);

        this.inputData = JSON.parse(request.responseText);


        const random = Math.floor(Math.random() * this.inputData.length);

        this.showdata = this.inputData[random];

        // console.log('this.showdata--30', this.showdata);
    }

    handlecheck(event) {

        let inputTextValue = event.detail.value;

        if (this.eventfire == false) {

            this.timerset = setInterval(() => {
                this.sec++;
                if (this.sec == 60) {

                    this.disabletrue = true;

                    clearInterval(this.timerset);
                    // this.calculateAccuracy();
                    // this.calculateWPM();

                }
            }, 1000)
            this.eventfire = true;
        }



        if (inputTextValue.length > this.copyInputTextValue.length) {

          // debugger; 

            if (this.showdata[this.index] != inputTextValue[this.index]) {

                this.copyInputTextValue = inputTextValue;
                this.totalError++;
                this.error++;
                this.indexArr.push(this.index);

            }
            else {
                this.copyInputTextValue = inputTextValue;
            }
            this.index++;
        }

        else if (inputTextValue.length < this.copyInputTextValue.length) {
            let newarray = [...this.copyInputTextValue];
            newarray.splice(newarray.length - 1, 1)
            this.copyInputTextValue = newarray;
            this.index--;
            // debugger;
            // console.log('check indexArr value', this.indexArr);
            // console.log('check index value', this.index);

            if (this.indexArr.includes(this.index)) {
                const i = this.indexArr.indexOf(this.index);

                if (i > -1) { 
                    this.indexArr.splice(i, 1);
                    this.error--;
                    console.log('After splice', JSON.stringify(this.indexArr));
                }

            }


        }
        if (inputTextValue.length === this.showdata.length) {
            // console.log('Inside string Match with Original String');
            this.disabletrue = true;
        }
        //  this.calculateAccuracy();
        // this.calculateWPM();

    }

    adderror() {

        this.template.querySelector('.input').classList.add('background');
    }
    removeerror() {

        this.template.querySelector('.input').classList.remove('background');
    }

    handleStopTimer() {

        clearInterval(this.timerset);

        this.totalSecondTaken = this.sec;
        // this.calculateAccuracy();
        //  this.calculateWPM();

        this.disabletrue = true;

        this.sec = 0;


    }

    get calculateAccuracy() {
        //    console.log('this.index',this.index);
     
        //    correct key value : this.index - this.totalError;
        
        return Math.round(((this.index - this.totalError) * 100) / this.index);
    }

    get calculateWPM() {

        //this.wpm = Math.round((this.index*60)/(this.sec));
        return Math.round((this.index * 60) / (this.sec));

    }




}