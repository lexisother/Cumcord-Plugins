// <https://github.com/swishs-client-mod-plugins/sperm-bank/blob/main/src/modules/Modules.ts>

import { findByProps } from '@cumcord/modules/webpack';

const ContextMenuComponents = findByProps('MenuGroup', 'MenuItem');
const ContextMenu = ContextMenuComponents.default;

Object.assign(ContextMenu, {
  Item: ContextMenuComponents.MenuItem,
  Group: ContextMenuComponents.MenuGroup,
  Separator: ContextMenuComponents.MenuSeparator,
  ControlItem: ContextMenuComponents.MenuControlItem,
});

export { ContextMenu };
