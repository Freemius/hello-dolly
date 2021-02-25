import { registerBlockType } from '@wordpress/blocks';
import { useBlockProps } from '@wordpress/block-editor';
import { SongRadioControl } from '../components/RadioControl';
import { Markup } from '../components/Markup';
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
        default: false
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

      componentDidMount() {
        
        const { attributes: { song, lyric }, setAttributes } = this.props;

        // if downgrading and the currently selected song is not available
        if(!lyrics.hasOwnProperty(song)) {
          setAttributes({
            song: 'Hello Dolly',
            lyric: lyrics['Hello Dolly'].split(/\n/)[0],
            lineNumber: 1,
            showLineNumber: false
          });  
        };
      }

      updateLyric(song) {

        const {
          setAttributes,
        } = this.props;

        var lines = lyrics[song].split(/\n/);
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
        const inspector_line_number = applyFilters('inspector-line-number', '', showLineNumber, setAttributes);

        return (
          <div style={blockStyle}>

            <BlockControls>
              <Toolbar label="Options">
                <ToolbarButton onClick={() => this.updateLyric(song)} icon={ update } label="Refresh lyric" />
              </Toolbar>
            </BlockControls>

            <Markup {...this.props.attributes} />

            <InspectorControls>
              <PanelBody className="faq-themes-panel" title={__("Song Lyrics", "hello-dolly")} initialOpen={true}>
                <PanelRow>
                  <SongRadioControl updateLyric={this.updateLyric} song={song} />
                </PanelRow>
                <PanelRow>
                  <Button class="dashicons-image-rotate" style={{marginTop:'-30px'}} isLink onClick={() => this.updateLyric(song)}>Refresh song lyric</Button>
                </PanelRow>
                {inspector_line_number}
              </PanelBody>
            </InspectorControls>
          </div>
        );
      }
    },
    save(props) {
      return <Markup {...props.attributes} />;
    },
} );