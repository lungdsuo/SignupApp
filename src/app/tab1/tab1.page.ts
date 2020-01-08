import { Component } from '@angular/core';
import { FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  form: any;
  toast: Promise<void>;
  answer: number;

  constructor(private fb: FormBuilder, public toastController: ToastController) {
    this.form = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required]

    });

  }
  reset() {
    this.form.reset();

  }
  login() {
    this.answer = Number(this.form.value.email) + Number(this.form.value.password);




    /* if (this.form.value.email == "abc" && this.form.value.password == "abc") {
      this.toast = this.toastController.create({
        message: 'Successfull Login',
        duration: 2000
      }).then((toastData) => {
        console.log(toastData);
        toastData.present();
      });
    } else if (this.form.value.email == "" || this.form.value.password == "") {
      this.toast = this.toastController.create({
        message: 'Email or password is missing',
        duration: 2000
      }).then((toastData) => {
        console.log(toastData);
        toastData.present();
      });

    }
    else {
      this.toast = this.toastController.create({
        message: 'Invalid Login',
        duration: 2000
      }).then((toastData) => {
        console.log(toastData);
        toastData.present();
      });

    } */
  }
}


