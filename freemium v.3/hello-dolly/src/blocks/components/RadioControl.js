import { RadioControl } from '@wordpress/components';
 
export const SongRadioControl = (props) => {
  const { song, setAttributes, lyrics, updateLyric } = props;

  return (
  <div>
    <RadioControl
      label="Select Song:"
      selected={ song }
      options={ [
          { label: 'Hello Dolly', value: 'Hello Dolly' },
          { label: 'Summertime', value: 'Summertime' },
          { label: 'Wonderful World', value: 'Wonderful World' },
          { label: 'Dream a Little Dream', value: 'Dream a Little Dream' },
      ] }
      onChange={ ( option ) => {
        updateLyric(option, lyrics[option], setAttributes);
      } }
    />
  </div>
  )
};