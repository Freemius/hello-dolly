//import { part } from "../assets/expandable-icons";
//import { IconSelect } from "../__components/icon-select";
import Select from 'react-select';
import FlagSelect from "../_shared-components/flag-select";

//const merge = require('deepmerge');
const { __ } = wp.i18n;
const { Component, Fragment } = wp.element;
const { applyFilters, doAction, createHooks } = wp.hooks;
const {
  InspectorControls
} = wp.blockEditor;
const {
  Button,
  Modal,
  TextControl,
  CheckboxControl,
  SelectControl,
  PanelBody,
  PanelRow,
  ToggleControl,
} = wp.components;

class Inspector extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    const { attributes: { size, size_unit, square, random }, attributes, setAttributes } = this.props;
    const select_flag_panel_controls = applyFilters('select-flag-panel-controls', '', attributes, setAttributes);
    const misc_panel_controls = applyFilters('misc-panel-controls', '', attributes, setAttributes);
    const captions_panel_controls = applyFilters('captions-panel-controls', '', attributes, setAttributes);
    const captions_panel_title = applyFilters('captions-panel-title', __("Flag Caption", "svg-flags"), attributes, setAttributes);
    const border_style_panel_controls = applyFilters('border-style-panel-controls', '', attributes, setAttributes);
    const margin_padding_panel_controls = applyFilters('margin-padding-panel-controls', '', attributes, setAttributes);

    return (
      <Fragment>
        <InspectorControls>
          <PanelBody title={__("Select SVG Flag", "svg-flags")} initialOpen={true}>
            {!random && (
              <Fragment>
                <PanelRow>
                  <h2 className="flag-select-header">Select a flag:</h2>
                </PanelRow>
                <PanelRow>
                  <FlagSelect attributes={attributes} setAttributes={setAttributes} />
                </PanelRow>
              </Fragment>
            )}
            <PanelRow>
              <CheckboxControl
                help="Display a random flag on every page load"
                label="Display random flag?"
                checked={random}
                onChange={newVal => setAttributes({ random: newVal })}
              />
            </PanelRow>
          </PanelBody>
          <PanelBody title={__("Flag Dimensions", "svg-flags")} initialOpen={false}>
            <PanelRow>
              <ToggleControl
                label="Enable square flag"
                help="Display flag with 4:3, or 1:1, aspect ratio."
                checked={square}
                onChange={(newVal) => setAttributes({ square: newVal })}
                className="flag-dimensions-toggle"
              />
            </PanelRow>
            <PanelRow className="flag-size-row">
              <TextControl
                label={`Flag size (${size_unit})`}
                type="number"
                min="1"
                step="0.2"
                value={size}
                onChange={(newVal) => setAttributes({ size: newVal })}
              />
              <SelectControl
                label="Unit"
                value={size_unit}
                options={[
                  { label: 'px', value: 'px' },
                  { label: 'em', value: 'em' },
                  { label: 'rem', value: 'rem' },
                  { label: 'vw', value: 'vw' },
                  { label: 'vh', value: 'vh' },
                ]}
                onChange={newVal => setAttributes({ size_unit: newVal })}
              />
            </PanelRow>
          </PanelBody>
          <PanelBody className="captions-panel" title={captions_panel_title} initialOpen={false}>
            {!attributes.hasOwnProperty('heading') && (
                  <PanelRow>
                    <CheckboxControl
                    label="Display flag caption?"
                    checked={attributes['caption']}
                    onChange={newVal => setAttributes({ caption: newVal })}
                    />
                  </PanelRow>
            )}
            {captions_panel_controls}
          </PanelBody>
          {misc_panel_controls}
          {border_style_panel_controls}
          {margin_padding_panel_controls}
        </InspectorControls >
      </Fragment >
    );
  }
}

export default Inspector;