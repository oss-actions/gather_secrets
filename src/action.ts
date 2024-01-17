import {
	getInput,
	setOutput,
	appendGithubEnvironment,
} from "jamesons-actions-toolkit";

export async function action() {
	const regex = getInput("regex", { type: (value) => new RegExp(value, "g") });
	const secrets = getInput("secrets", {
		type: (value) => JSON.parse(value),
	}) as Record<string, unknown>;
	const outputSecrets = {} as Record<string, unknown>;
	for (const [key, value] of Object.entries(secrets)) {
		if (!regex.test(key)) continue;
		outputSecrets[key] = value;
	}
	const GITHUB_SECRETS_JSON = JSON.stringify(outputSecrets);
	setOutput("secrets", GITHUB_SECRETS_JSON);
	appendGithubEnvironment({ GITHUB_SECRETS_JSON });
}
