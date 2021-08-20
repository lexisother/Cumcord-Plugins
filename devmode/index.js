import {webpackModules} from "@cumcord/modules";

export default {
    onLoad() {
        Object.defineProperty(webpackModules.findByProps("isDeveloper"), "isDeveloper", {
            configurable: true,
            writable: true,
            value: 1
        });
    },
    onUnload() {}
};
