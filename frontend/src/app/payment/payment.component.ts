import {
  Component,
  Inject,
  ViewChild,
  ElementRef,
  NgZone,
  OnInit
} from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { PaymentService } from '../payment.service';
import { Router } from '@angular/router';
import { ScheduleCabService } from '../scheduleCab.service';
import { ScheduleCab } from '../book-online/scheduleCab.model';

declare var paypal;

@Component({
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentDialogComponent implements OnInit {
  @ViewChild('paypal', { static: true }) paypalElement: ElementRef;

  paidFor = false;
  private buttonRendered = false;
  scheduleCabForm: ScheduleCab;
  distance: number;
  fare: number;
  product;
  paymentFlag:boolean = false;
  constructor(
    private paymentService: PaymentService,
    private router: Router,
    private ngZone: NgZone,
    private scheduleCabService: ScheduleCabService,
    public dialogRef: MatDialogRef<PaymentDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  ngOnInit() {
    // console.log("inside ngOnInit");
    this.scheduleCabForm = this.paymentService.getScheduleCabForm();
    // console.log(this.scheduleCabForm);
    this.distance = this.paymentService.getDistance();
    console.log('Distance = ' + this.distance);
    this.fare = this.paymentService.getFare()*80.0;
    // console.log('Fare = ' + this.fare);
    this.product = {
      price: this.fare*80,
      description: 'Booking the cab'
    };
    console.log('Fare = ' + this.product.price);
  }

  enterCardDetails(){
      this.paymentFlag=true;
  }
  
  onProceedClick(): void {
    console.log("done")
    this.scheduleCabService.submitScheduleCabForm(this.scheduleCabForm);
    if (!this.buttonRendered) {
      paypal.Buttons({
          createOrder: (data, actions) => {
            return actions.order.create({
              purchase_units: [
                {
                  description: this.product.description,
                  amount: {
                    currency_code: 'USD',
                    value: this.product.price
                  }
                }
              ]
            });
          },
          onApprove: async (data, actions) => {
            const order = await actions.order.capture();
            this.paidFor = true;
                this.scheduleCabService.submitScheduleCabForm(
                  this.scheduleCabForm
               );

              this.router.navigate(['/payment-status/success']);
          },
          onError: err => {
            console.log(err);
            this.ngZone.run(() => {
              this.router.navigate(['/payment-status/failure']);
            });
          }
        })
    }
    this.buttonRendered = true;
    this.dialogRef.close();
  }

  onCancelClick() {
    this.dialogRef.close();
  }
}
