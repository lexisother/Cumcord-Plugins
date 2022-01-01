import { id } from "@cumcord/pluginData"

export default {
  onLoad() {
    cumcord.plugins.removePlugin(id)
  },
  onUnload() {
  },
};
