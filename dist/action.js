"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.action = void 0;
const jamesons_actions_toolkit_1 = require("jamesons-actions-toolkit");
async function action() {
    const regex = (0, jamesons_actions_toolkit_1.getInput)("regex", { type: (value) => new RegExp(value, "g") });
    const secrets = (0, jamesons_actions_toolkit_1.getInput)("secrets", {
        type: (value) => JSON.parse(value),
    });
    const outputSecrets = {};
    for (const [key, value] of Object.entries(secrets)) {
        if (!regex.test(key))
            continue;
        outputSecrets[key] = value;
    }
    const GITHUB_SECRETS_JSON = JSON.stringify(outputSecrets);
    (0, jamesons_actions_toolkit_1.setOutput)("secrets", GITHUB_SECRETS_JSON);
    (0, jamesons_actions_toolkit_1.appendGithubEnvironment)({ GITHUB_SECRETS_JSON });
}
exports.action = action;
