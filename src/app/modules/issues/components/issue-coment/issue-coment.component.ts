import { CommonModule } from '@angular/common';
import { Component, input, OnInit } from '@angular/core';
import { GitHubIssue } from '../../interfaces/github-issues';
import {MarkdownModule} from 'ngx-markdown'

@Component({
  selector: 'app-issue-coment',
  standalone: true,
  imports: [CommonModule, MarkdownModule],
  templateUrl: './issue-coment.component.html',
})
export class IssueCommentComponent {
  issue = input.required<GitHubIssue>();
}