import { LightningElement, wire, track } from 'lwc';
import getTemp from '@salesforce/apex/getTemperature.getTemperatureLatLon';
export default class MotiveTask02 extends LightningElement {

    long;
    lat;
    @track flag = false;
    temperature;
    city;
    weather;



    connectedCallback() {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(position => {

                // Get the Latitude and Longitude from Geolocation API
                var latitude = position.coords.latitude;
                var longitude = position.coords.longitude;
                this.long = longitude;
                this.lat = latitude;
                console.log('latitude--', latitude + 'longitude' + longitude);
                // Add Latitude and Longitude to the markers list.
                // this.lstMarkers = [{
                //     location : {
                //         Latitude: latitude,
                //         Longitude : longitude
                //     },
                //     title : 'You are here'
                // }];
                // this.zoomlevel = "4";


                getTemp({ lat: this.lat, lon: this.long })
                    .then(result => {
                        this.flag = true;
                        console.log('Result--->',JSON.stringify(result));
                        // this.temperature = result.temperature;
                        // this.city = result.City;
                        // this.weather = result.Weather;
                        this.temperature = result.temperature;
                        this.city = result.City;

                    })
            });
        }

    }

    //  @wire(getTemp,{lat:'$lat', lon:'$long'})
    //     wiredContacts({data, error}){
    //         if(data){
    //           console.log('data');
    //         }
    //         else if (error) {
    //          console.log('error');
    //         }
    //     }

    handleClick(event) {
        console.log('check lat and lon' + this.lat + 'lon' + this.long);
        getTemp({ lat: this.lat, lon: this.long })
            .then(result => {
                this.flag = true;
                console.log(result);
                this.temperature = result;

            })
    }



    //     renderedCallback(){
    //  console.log('in disconnectedcallback');
    //         console.log('lat and lon'+this.lat +'long'+this.long);
    //     getTemp({lat:this.lat , lon:this.long})
    //      .then(result=>{
    //          console.log(result);
    //      })
    //     }

}