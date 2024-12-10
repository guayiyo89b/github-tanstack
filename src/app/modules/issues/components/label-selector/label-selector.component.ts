import { Component, input, OnInit } from '@angular/core';
import { GitHubLabels } from '../../interfaces/github-labels';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-label-selector',
  imports: [CommonModule],
  standalone: true,
  templateUrl: './label-selector.component.html'
})
export class LabelSelectorComponent implements OnInit {
  labels = input.required<GitHubLabels[]>()

  constructor() { }

  ngOnInit() {
  }

}
