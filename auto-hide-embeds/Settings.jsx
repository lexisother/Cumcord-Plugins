import { persist } from '@cumcord/pluginData';
import { findByDisplayName } from '@cumcord/modules/webpack';
import { useNest } from '@cumcord/utils';

const FormText = findByDisplayName('FormText');
const Switch = findByDisplayName('Switch');

export default () => {
  useNest(persist);
  return (
    <>
      <div className="aly_hide_row">
        <Switch checked={persist.ghost.send ?? true} onChange={(e) => (persist.store.send = e)} />
        <FormText>Hide embeds when sending message</FormText>
      </div>

      <div className="aly_hide_row">
        <Switch
          checked={persist.ghost.receive ?? true}
          onChange={(e) => (persist.store.receive = e)}
        />
        <FormText>Hide embeds when receiving message (NOT IMPLEMENTED!!!!!)</FormText>
      </div>
    </>
  );
};
