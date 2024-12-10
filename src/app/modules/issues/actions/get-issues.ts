import { environment } from '../../../../environments/environment.development';
import { sleep } from '../../../helpers/sleep';
import { GitHubIssue, State } from '../interfaces/github-issues';

const BASE_URL = environment.baseUrl;
const TOKEN = environment.gitHubToken;

export const getIssues = async (state: State = State.All): Promise<GitHubIssue[]> => {
  await sleep(1500);

  const params = new URLSearchParams()
  params.append('state', state)

  try {
    const resp = await fetch(`${BASE_URL}/issues?${params}`, {
      headers: {
        Authorization: `Bearer ${TOKEN}`,
      },
    });

    if (!resp.ok) throw 'Cant load issues';

    const issue: GitHubIssue[] = await resp.json();

    return issue;
  } catch (err) {
    throw 'Cant load labels';
  }
};
