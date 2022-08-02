import { findByProps } from "@cumcord/modules/webpack";
import { instead } from "@cumcord/patcher";
import { showConfirmationModal } from "@cumcord/ui/modals";

const userMod = findByProps("getUsers");
const nodes = Object.values(findByProps("isDeveloper")._dispatcher._dependencyGraph.nodes);
nodes.find(x => x.name === "ExperimentStore").actionHandler["CONNECTION_OPEN"]({ user: { flags: 1 }, type: "CONNECTION_OPEN", experiments: [] });

let gcUserPatch = instead("getCurrentUser", userMod, () => { return { hasFlag: () => true }});
nodes.find(x => x.name === "DeveloperExperimentStore").actionHandler["CONNECTION_OPEN"]();
gcUserPatch();

export const onUnload = () => {
    showConfirmationModal({
        header: "DevMode",
        content: "For developer features to be fully disabled, you need to reload Discord.",
        confirmText: "Reload",
        type: "Danger"
    }).then(() => document.location.reload());
}
