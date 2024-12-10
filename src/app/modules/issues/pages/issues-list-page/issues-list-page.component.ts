import { Component, inject, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { IssuesService } from '../../services/issues.service';
import { LabelSelectorComponent } from '../../components/label-selector/label-selector.component';
import { IssueSelectorComponent } from '../../components/issue-selector/issue-selector.component';
import { State } from '../../interfaces/github-issues';

@Component({
  standalone: true,
  imports: [RouterLink, LabelSelectorComponent, IssueSelectorComponent],
  selector: 'app-issues-list-page',
  templateUrl: './issues-list-page.component.html'
})
export default class IssuesListPageComponent{
  issueService = inject(IssuesService)

  constructor() { }

  get labelsQuery() {
    return this.issueService.labelsQuery
  }

  get issuesQuery() {
    return this.issueService.issuesQuery
  }

  onChangeState(newState: string) {
    const state = {
      'all': State.All,
      'open': State.Open,
      'closed': State.Closed
    }[newState] ?? State.All

    this.issueService.showIssuesByState(state)
  }

}
