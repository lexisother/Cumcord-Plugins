import { persist } from '@cumcord/pluginData';
import { findByDisplayName, findByProps } from '@cumcord/modules/webpack';
import { useNest } from '@cumcord/utils';

const FormText = findByDisplayName('FormText');
const Switch = findByDisplayName('Switch');
const Header = findByProps('Sizes', 'Tags');
const Card = findByDisplayName('Card');
const cardClasses = findByProps('cardPrimary');

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
          disabled={true}
        />
        <FormText>Hide embeds when receiving message</FormText>

        <Card type="cardDanger" outline={false} editable={false}>
          <Header tag="h2" size={Header.Sizes.SIZE_20}>
            NOT IMPLEMENTED!!!
          </Header>
        </Card>
      </div>
    </>
  );
};
