let css;

export default {
    onLoad() {
        css = cumcord.patcher.injectCSS(`.groupStart-23k01U:not(.message-2qnXI6){display: none;}`);
    },
    onUnload() {
        css();
    }
};
