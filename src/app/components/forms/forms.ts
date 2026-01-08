import { Component, OnInit } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Location } from "../../types/location.interface"
import { GetUnits } from '../../services/get-units';

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
  results: Location[] = [];
  filteredResults: Location[] = []
  form!: FormGroup;

  constructor(private formBuilder: FormBuilder, private unitService: GetUnits){}

  ngOnInit(): void {
    this.unitService.getAllUnits().subscribe(data => {
      this.results = data.locations;
      this.filteredResults = data.locations;
    });
    this.form = this.formBuilder.group({
      hour: '',
      showClosed: true,
    })
  }

  onSubmit(): void {
    if(!this.form.value.showClosed) {
      this.filteredResults = this.results.filter(location => location.opened === true);
    } else {
      this.filteredResults = this.results;
    }
    
  }

  onClean(): void {
    this.form.reset();
  }
}
