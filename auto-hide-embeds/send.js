import { persist } from '@cumcord/pluginData';
import { findByProps } from '@cumcord/modules/webpack';
import { after } from '@cumcord/patcher';

const sendMessage = findByProps('sendMessage');

const urlRegex = /^((?:https?):\/\/[^\s<]+[^<.,:;"'\]\s])/;

export default () =>
  after('sendMessage', sendMessage, (args) => {
    if (persist.ghost.send === false) return;
    let { content } = args[1];
    if (urlRegex.test(content)) {
      content = `<${content}>`;
      args[1].content = content;
    }
    return args;
  });
