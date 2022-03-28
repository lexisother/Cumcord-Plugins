let css;

export default {
    onLoad() {
        css = cumcord.patcher.injectCSS(`.groupStart-3Mlgv1:not(.message-2CShn3){display: none;}`);
    },
    onUnload() {
        css();
    }
};
