import {webpackModules} from "@cumcord/modules";

let unpatch;

function random(array) {
    return array[Math.floor(Math.random() * array.length)];
}

export default {
    onLoad() {
        unpatch = cumcord.patcher.after("sendMessage", webpackModules.findByProps("sendMessage"), (args) => {
            if (args[1].content.startsWith("!owo")) {
                const msg = args[1].content.replace("!owo", "");

                const faces = ["owo", "UwU", ">w<", "^w^"];
                const owoified = msg
                    .replace(/[rl]/g, "w")
                    .replace(/[RL]/g, "W")
                    .replace(/ove/g, "uv")
                    .replace(/n/g, "ny")
                    .replace(/N/g, "NY")
                    .replace(/\!/g, ` ${random(faces)} `);

                args[1].content = owoified;
            }
            return args;
        });
    },
    onUnload() {
        unpatch();
    }
};
