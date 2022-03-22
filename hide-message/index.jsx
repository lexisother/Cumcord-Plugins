import { after, findAndPatch } from '@cumcord/patcher';
import { findByDisplayName } from '@cumcord/modules/webpack';
import { findInReactTree } from '@cumcord/utils';
import { ContextMenu } from './modules';

const patchMessageContextMenu = () => {
  return findAndPatch(
    () => findByDisplayName('MessageContextMenu', false),
    (MessageContextMenu) => {
      return after('default', MessageContextMenu, (args, ret) => {
        const MenuItems = findInReactTree(ret, (c) => Array.isArray(c?.children));
        if (!MenuItems) console.warn('Something went wrong trying to patch MessageContextMenu');

        if (findInReactTree(ret, (c) => c?.props?.id == 'hidemsg')) return;

        MenuItems.children.splice(
          4,
          0,
          <ContextMenu.Group>
            <ContextMenu.Item
              id="hidemsg"
              label="Hide Message"
              action={() => {
                document.getElementById(`chat-messages-${args[0].message.id}`).remove();
              }}
            />
          </ContextMenu.Group>,
        );
      });
    },
  );
};

export default () => {
  let patches = [patchMessageContextMenu()];

  return {
    onUnload: () => _.forEachRight(patches, (p) => p()),
  };
};
