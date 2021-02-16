import { registerBlockType } from '@wordpress/blocks';
import { useBlockProps } from '@wordpress/block-editor';
import { SongRadioControl } from '../components/RadioControl';
import { lyrics } from './lyrics';

const { Component } = wp.element;
const {
	InspectorControls
} = wp.blockEditor;
const {
	PanelBody,
	PanelRow,
} = wp.components;
const { __ } = wp.i18n;
const blockStyle = {padding:'20px'};

registerBlockType( 'hello-dolly/song-lyrics', {
    title: 'Song Lyrics',
    icon: 'format-audio',
    category: 'text',
    example: {},
    attributes: {
      song: {
          type: 'string',
          default: 'Hello Dolly'
      },
      lyric: {
        type: 'string',
        default: 'Hello, Dolly'
      },
      lineNumber: {
        type: 'string',
        default: '1'
      }
    },
    edit: class extends Component {

      constructor(props) {
        super(props);
        this.props = props;
        this.updateLyric = this.updateLyric.bind(this);
      }

      updateLyric(song, rawLines, setAttributes) {
        //console.log(rawLines);

        var lines = rawLines.split(/\n/);
        var randLineNum = Math.floor(Math.random() * lines.length);
        console.log('Updating: ', song, lines[randLineNum], (randLineNum + 1).toString());
        setAttributes({
          song: song,
          lyric: lines[randLineNum],
          lineNumber: (randLineNum + 1).toString()
        });
      }

      render() {

        const {
          attributes: { song, lyric, lineNumber },
          setAttributes,
        } = this.props;

        return (
          <div style={blockStyle}>
            <span style={{fontWeight:'bold'}}>{song}</span>: {lyric} <span style={{fontStyle:'italic'}}>({lineNumber})</span>
            <InspectorControls>
              <PanelBody className="faq-themes-panel" title={__("Hello Dolly Freemium", "hello-dolly")} initialOpen={true}>
                <PanelRow>
                  <SongRadioControl updateLyric={this.updateLyric} song={song} lyrics={lyrics} setAttributes={setAttributes} />
                </PanelRow>
              </PanelBody>
            </InspectorControls>
          </div>
        );
      }
    },
    save(props) {
      return <div style={blockStyle}>
          <span style={{fontWeight:'bold'}}>{props.attributes.song}</span>: {props.attributes.lyric} <span style={{fontStyle:'italic'}}>({props.attributes.lineNumber})</span>
      </div>;
    },
} );