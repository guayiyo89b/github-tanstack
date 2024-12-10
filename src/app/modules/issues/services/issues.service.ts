import { Injectable, signal } from '@angular/core';
import { injectQuery } from '@tanstack/angular-query-experimental';
import { getIssues, getLabels } from '../actions';
import { State } from '../interfaces/github-issues';

@Injectable({
  providedIn: 'root'
})
export class IssuesService {

  selectedState = signal<State>(State.All)

  labelsQuery = injectQuery(() => ({
    queryKey: ['labels'],
    queryFn: () => getLabels()
  }))

  issuesQuery = injectQuery(() => ({
    queryKey: ['issues', this.selectedState()],
    queryFn: () => getIssues(),
  }));

  showIssuesByState(state: State) {
    this.selectedState.set(state)
  }

}
