import { Component } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-forms',
  imports: [NgOptimizedImage],
  templateUrl: './forms.html',
  styleUrl: './forms.scss',
})
export class Forms {
  results = [];
}
