import { environment } from "../../../../environments/environment.development"
import { sleep } from "../../../helpers/sleep"
import { GitHubLabels } from "../interfaces/github-labels"

const BASE_URL = environment.baseUrl
const TOKEN = environment.gitHubToken

export const getLabels = async(): Promise<GitHubLabels[]> => {
    await sleep(1500)
    try {
        const resp = await fetch(`${BASE_URL}/labels`, {
            headers: {
              Authorization: `Bearer ${TOKEN}`,
            },
          });

        if(!resp.ok) throw "Cant load labels"

        const labels: GitHubLabels[] = await resp.json()

        return labels
    }
    catch(err) {
        throw "Cant load labels"
    }
}