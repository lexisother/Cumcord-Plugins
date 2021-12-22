/// <reference path="../global.d.ts" />

import { webpack } from "@cumcord/modules";
import { after } from "@cumcord/patcher";
import ModuleEmbed from "./components/ModuleEmbed";
import styles from "./css/styles.css";

const defaultParse = webpack.findByProps("defaultRules", "astParserFor");
// const regex = /^https:\/\/flicker\.alyxia\.dev\/module\/[\S]+$/i;
const regex = /^https:\/\/cumcordplugins\.github\.io\/Condom\/(.+?)\/(.+?)+$/i;

function isModuleUrl(input) {
  return regex.test(input);
}

let unpatch;
let removeCss;
export default {
  onLoad() {
    unpatch = after("react", defaultParse.defaultRules.link, (args) => {
      if (isModuleUrl(args[0].target)) {
        if (!args[0].target.endsWith("/")) args[0].target += "/";
        return <ModuleEmbed url={args[0].target} />;
      }
    });
    removeCss = styles();
  },
  onUnload() {
    unpatch();
    removeCss();
  },
};
