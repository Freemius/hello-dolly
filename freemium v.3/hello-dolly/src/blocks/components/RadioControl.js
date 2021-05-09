import { RadioControl } from '@wordpress/components';
const { applyFilters, doAction, createHooks } = wp.hooks;

export const SongRadioControl = (props) => {
  const { song, updateLyric } = props;

  let song_options = applyFilters('song-list', [{ label: 'Hello Dolly', value: 'Hello Dolly' }]);

  return (
  <div>
    <RadioControl
      label="Select Song"
      selected={ song }
      options={ song_options }
      onChange={ ( option ) => {
        updateLyric(option);
      } }
    />
  </div>
  )
};