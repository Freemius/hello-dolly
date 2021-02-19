import { registerBlockType } from '@wordpress/blocks';
import { useBlockProps } from '@wordpress/block-editor';
import { SongRadioControl } from '../components/RadioControl';
import { Markup } from '../components/Markup';
import { lyrics } from './lyrics';
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
        default: false
      },
      align: {
        type: 'string',
        default: 'wide'
      },      
    },
    edit: class extends Component {

      componentDidMount() {

        const { attributes: { song, lyric }, setAttributes } = this.props;

        if(!lyrics.hasOwnProperty(song)) {
          setAttributes({
            song: 'Hello Dolly',
            lyric: lyrics['Hello Dolly'].split(/\n/)[0],
            lineNumber: 1
          });  
        };            
      }

      constructor(props) {
        super(props);
        this.props = props;
        this.updateLyric = this.updateLyric.bind(this);
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

        const toolbar_refresh_lyric = applyFilters('toolbar-refresh-lyric', '', song, this.updateLyric);
        const inspector_refresh_lyric = applyFilters('inspector-refresh-lyric', '', song, this.updateLyric);
        const inspector_line_number = applyFilters('inspector-line-number', '', showLineNumber, setAttributes);

        return (
          <div style={blockStyle}>
            {toolbar_refresh_lyric}

            <Markup {...this.props.attributes} />

            <InspectorControls>
              <PanelBody className="faq-themes-panel" title={__("Song Lyrics", "hello-dolly")} initialOpen={true}>
                <PanelRow>
                  <SongRadioControl updateLyric={this.updateLyric} song={song} />
                </PanelRow>
                {inspector_refresh_lyric}
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