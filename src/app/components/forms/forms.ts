import { Component, OnInit } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-forms',
  imports: [
    NgOptimizedImage,
    ReactiveFormsModule 
  ],
  templateUrl: './forms.html',
  styleUrl: './forms.scss',
})
export class Forms implements OnInit {
  results = [];
  form!: FormGroup;

  constructor(private formBuilder: FormBuilder){}

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      hour: '',
      showClosed: false,
    })
  }

  onSubmit(): void {
    console.log('Formulário enviado!', this.form.value);
  }

  onClean(): void {
    this.form.reset();
  }
}
