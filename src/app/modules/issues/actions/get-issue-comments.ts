import { environment } from '../../../../environments/environment.development';
import { sleep } from '../../../helpers/sleep';
import { GitHubIssue } from '../interfaces/github-issues';

const BASE_URL = environment.baseUrl;
const TOKEN = environment.gitHubToken;

export const getIssueCommentsByNumber = async (number: string): Promise<GitHubIssue[]> => {
  await sleep(1000);
  try {
    const resp = await fetch(`${BASE_URL}/issues/${number}/comments`, {
      // headers: {
      //   Authorization: `Bearer ${TOKEN}`,
      // },
    });

    if (!resp.ok) throw 'Cant load issue';

    const issues: GitHubIssue[] = await resp.json();

    return issues;
  } catch (err) {
    throw 'Cant load labels';
  }
};
