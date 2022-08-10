import { findByProps } from "@cumcord/modules/webpack";
import { instead } from "@cumcord/patcher";
import { showConfirmationModal } from "@cumcord/ui/modals";

const userMod = findByProps("getUsers");
const nodes = Object.values(findByProps("isDeveloper")._dispatcher._dependencyGraph.nodes);
try { nodes.find(x => x.name === "ExperimentStore").actionHandler["OVERLAY_INITIALIZE"]({ user: { flags: 1 } }); } catch {};

let gcUserPatch = instead("getCurrentUser", userMod, () => { return { hasFlag: () => true }});
nodes.find(x => x.name === "DeveloperExperimentStore").actionHandler["OVERLAY_INITIALIZE"]();
gcUserPatch();

export const onUnload = () => {
    showConfirmationModal({
        header: "DevMode",
        content: "For developer features to be fully disabled, you need to reload Discord.",
        confirmText: "Reload",
        type: "Danger"
    }).then((ok) => ok && document.location.reload());
}
