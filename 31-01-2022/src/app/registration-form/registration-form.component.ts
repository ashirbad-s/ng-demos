import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { FormArray } from '@angular/forms';

@Component({
  selector: 'app-registration-form',
  templateUrl:'./registration-form.html',
})
export class RegistrationFormComponent implements OnInit {

  accept=false;
  reactiveForm = this.buildForm.group
  (
    {
      usrnm:[,[Validators.required,Validators.pattern('[a-zA-Z]+( [a-zA-Z]+)*')]],
      pswd:[,[Validators.pattern('^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[@$!%*?&])([a-zA-Z0-9@$!%*?&]{8})')]],
      tel:[,[Validators.pattern('[0-9]{10}')]],
      mail:[,[Validators.pattern('[a-zA-Z\d]+@[a-z]+\.[a-z]+')]],
      aliases: this.buildForm.array([this.buildForm.control('')])
    }
  );
  
  
  constructor( public buildForm : FormBuilder) { }

  ngOnInit()
  {
    console.log(this.buildForm);
  }

  get usrnm() {return this.reactiveForm.controls['usrnm']}
  get pswd() {return this.reactiveForm.controls['pswd']}
  get mail() {return this.reactiveForm.controls['mail']}
  get tel() {return this.reactiveForm.controls['tel']}
  get aliases() {return this.reactiveForm.controls['aliases'] as FormArray;}

  submitForm()
  {
    if(this.accept) console.log(this.reactiveForm.value)
  }

  addAlias() 
  { 
    this.aliases.push(this.buildForm.control(''));
  }

  acceptSubmit() { this.accept=true; }
}
