let css;

export default {
  onLoad() {
    css = cumcord.patcher.injectCSS(
      `div[class*='groupStart-']:not([class*='message-']){display: none;}`,
    );
  },
  onUnload() {
    css();
  },
};
