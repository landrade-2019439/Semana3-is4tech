import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-stepper',
  templateUrl: './stepper.component.html',
  styleUrls: ['./stepper.component.scss'],
})
export class StepperComponent {
  currentStep = 1;
  dpiFieldVisible = false;
  form: FormGroup;
  stepsDisabled = [false, true, true];

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      birthdate: ['', [Validators.required, this.dateValidator]],
      name: ['', [Validators.required, Validators.pattern('[A-Za-z]+')]],
      dpi: [''],
    });
  }

  dateValidator(control: any) {
    const selectedDate = new Date(control.value);
    const currentDate = new Date();
    if (selectedDate > currentDate) {
      return { futureDate: true };
    }
    return null;
  }

  nextStep() {
    if (this.form.valid) {
      const currentStepDiv = document.getElementById(`step${this.currentStep}`);
      if (currentStepDiv) {
        currentStepDiv.style.display = 'none';
        this.currentStep++;

        if (this.currentStep <= 3) {
          this.stepsDisabled[this.currentStep - 1] = false; 
          const nextStepDiv = document.getElementById(`step${this.currentStep}`);
          if (nextStepDiv) {
            nextStepDiv.style.display = 'block';

            if (this.currentStep === 3) {
              this.form.get('dpi')?.valueChanges.subscribe((value) => {
                this.dpiFieldVisible = !!value;
              });
            }
          }
        }
      }
    }
  }
}
