import getAvailableSlotCount from '@salesforce/apex/ParkingSlotController.getAvailableSlotCount';
import { LightningElement, wire } from 'lwc';

export default class ParkingSlotAvailability extends LightningElement {
    availableSlotsCount;
    error;

    @wire(getAvailableSlotCount)
    wiredResult({ error, data }) {
        if (data) {
            this.availableSlotsCount = data;
            this.error = undefined;
        } else if (error) {
            this.error = error;
            this.availableSlotsCount = undefined;
        }
    }
}