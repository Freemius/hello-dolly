import { registerBlockType } from '@wordpress/blocks';
import { useBlockProps } from '@wordpress/block-editor';
import { SongRadioControl } from '../components/RadioControl';
import { lyrics } from './lyrics';
import { update } from '@wordpress/icons';
const { applyFilters, doAction } = wp.hooks;

const { Component } = wp.element;
const {
	InspectorControls,
  AlignmentToolbar,
  BlockControls
} = wp.blockEditor;
const {
	PanelBody,
	PanelRow,
  CheckboxControl,
  Button,
  Toolbar,
  ToolbarButton
} = wp.components;
//const { rotateLeft, rotateRight } = wp.icons;

const { __ } = wp.i18n;
const blockStyle = {padding:'20px'};

registerBlockType( 'hello-dolly/song-lyrics', {
    title: 'Hello Dolly Freemium',
    icon: 'format-audio',
    category: 'text',
    example: {},
    supports: {
      align: true
    },
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
      },
      showLineNumber: {
        type: 'boolean',
        default: true
      },
      align: {
        type: 'string',
        default: 'wide'
      },      
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
        setAttributes({
          song: song,
          lyric: lines[randLineNum],
          lineNumber: (randLineNum + 1).toString()
        });
      }

      render() {

        const {
          attributes: { song, lyric, lineNumber, showLineNumber },
          setAttributes,
        } = this.props;

        const lbl = (showLineNumber === true) ? 'TRUE' : 'FALSE';

        return (
          <div style={blockStyle}>
            {
              <BlockControls>
                <Toolbar label="Options">
                  <ToolbarButton onClick={() => this.updateLyric(song, lyrics[song], setAttributes)} icon={ update } label="Refresh lyric" />
                </Toolbar>
              </BlockControls>
            }

            <span style={{fontWeight:'bold'}}>{song}</span>: {lyric} {showLineNumber && (<span style={{fontStyle:'italic'}}>({lineNumber})</span>)}

            <InspectorControls>
              <PanelBody className="faq-themes-panel" title={__("Song Lyrics", "hello-dolly")} initialOpen={true}>
                <PanelRow>
                  <SongRadioControl updateLyric={this.updateLyric} song={song} lyrics={lyrics} setAttributes={setAttributes} />
                </PanelRow>
                <PanelRow>
                  <Button class="dashicons-image-rotate" style={{marginTop:'-30px'}} isLink onClick={() => this.updateLyric(song, lyrics[song], setAttributes)}>Refresh song lyric</Button>
                </PanelRow>
                <PanelRow>
                  <CheckboxControl
                    label="Show line number?"
                    help="Optionally display the lyric line number"
                    checked={ showLineNumber }
                    onChange={ ( option ) => { setAttributes({showLineNumber: option}); } }              
                  />
                </PanelRow>
              </PanelBody>
            </InspectorControls>
          </div>
        );
      }
    },
    save(props) {
      const { attributes: { song, lyric, lineNumber, showLineNumber } } = props;

      return <div style={blockStyle}>
        <span style={{fontWeight:'bold'}}>{song}</span>: {lyric} {showLineNumber && (<span style={{fontStyle:'italic'}}>({lineNumber})</span>)}
      </div>;
    },
} );