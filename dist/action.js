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
    (0, jamesons_actions_toolkit_1.setOutput)("secrets", JSON.stringify(outputSecrets));
}
exports.action = action;
