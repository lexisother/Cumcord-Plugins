import { findByProps } from "@cumcord/modules/webpack";
import { instead } from "@cumcord/patcher";
import { showConfirmationModal } from "@cumcord/ui/modals";

const userMod = findByProps("getUsers");
const CONNECTION_OPEN = findByProps("isDeveloper")._dispatcher._orderedActionHandlers["CONNECTION_OPEN"];
try { CONNECTION_OPEN.find(x => x.name === "ExperimentStore").actionHandler({ user: { ...userMod.getCurrentUser(), flags: 1 }, type: "CONNECTION_OPEN" }); } catch (e) {};

let gcUserPatch = instead("getCurrentUser", userMod, (args, originalFunc) => { return { ...originalFunc(), hasFlag: () => true }});
CONNECTION_OPEN.find(x => x.name === "DeveloperExperimentStore").actionHandler();
gcUserPatch();

export const onUnload = () => {
    showConfirmationModal({
        header: "DevMode",
        content: "For developer features to be fully disabled, you need to reload Discord.",
        confirmText: "Reload",
        type: "Danger"
    }).then(() => document.location.reload());
}
