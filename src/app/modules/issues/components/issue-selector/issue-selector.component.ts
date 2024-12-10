import { CommonModule } from '@angular/common';
import { Component, inject, input } from '@angular/core';
import { GitHubIssue, State } from '../../interfaces/github-issues';
import { RouterLink } from '@angular/router';
import { IssueService } from '../../services/issue.service';

@Component({
  selector: 'app-issue-selector',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './issue-selector.component.html'
})
export class IssueSelectorComponent  {
  issue = input.required<GitHubIssue>()
  issueService = inject(IssueService)

  get isOpen() {
    return this.issue().state === State.Open
  }

  preFetchData() {
    //this.issueService.preFecthIssue(this.issue().number.toString())
    this.issueService.setIssueData(this.issue())
  }


}
