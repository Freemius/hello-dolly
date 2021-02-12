//import { exists } from "fs-extra";
const { addAction, addFilter } = wp.hooks;
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
const { Component, Fragment } = wp.element;
const { __ } = wp.i18n;

addFilter('svg-flag-classes', 'svg-flags/svg-flag', function (classes, atts) {

	if (atts['flag_class'] !== '') {
		classes[atts['flag_class']] = true;
	}

	return classes;
});

addFilter('svg-flag-custom-attributes', 'svg-flags/svg-flag', function (obj, atts) {
	const flag_lookup = JSON.parse(atts['flag']).value;

	if (atts['id'] !== '') {
		obj.id = atts['id'];
	}

	if (atts['tooltip'] === true) {
		if (atts['custom_tooltip'] === '') {
			obj.title = svg_flags_editor_data.countries[flag_lookup.toUpperCase()];
		} else {
			obj.title = atts['custom_tooltip'];
		}

	}

	return obj;
});

addFilter('misc-panel-controls', 'svg-flags/svg-flag', function (component, atts, setAttributes) {

	return (
		<PanelBody title={__("Flag Attributes", "svg-flags")} initialOpen={false}>
			<PanelRow>
				<TextControl
					label="Unique flag ID"
					value={atts['id']}
					onChange={newVal => setAttributes({ id: newVal })}
				/>
			</PanelRow>
			<PanelRow>
				<TextControl
					label="Custom CSS class"
					value={atts['flag_class']}
					onChange={newVal => setAttributes({ flag_class: newVal })}
				/>
			</PanelRow>
		</PanelBody>
	);
});

addFilter('captions-panel-controls', 'svg-flags/svg-flag', function (component, atts, setAttributes) {

	// Display tooltip/custom tooltip for all SVG flag blocks
  // Display caption/custom caption for all SVG flag blocks except heading block.
  return (
    <Fragment>
			{!atts.hasOwnProperty('heading') && atts['caption'] && atts.hasOwnProperty('custom_caption') && (
				<PanelRow className="caption-text-row">
					<TextControl
						label="Custom caption text"
						value={atts['custom_caption']}
						placeholder="Leave blank to use country name"
						onChange={newVal => setAttributes({custom_caption:newVal})}
					/>
				</PanelRow>
			)}
			<PanelRow>
				<CheckboxControl
					label="Display tooltip?"
					checked={atts['tooltip']}
					onChange={newVal => setAttributes({ tooltip: newVal })}
				/>
			</PanelRow>
			{atts['tooltip'] && (
				<PanelRow className="tooltip-text-row">
					<TextControl
						label="Custom tooltip text"
						value={atts['custom_tooltip']}
						onChange={newVal => setAttributes({ custom_tooltip: newVal })}
					/>
				</PanelRow>
			)}
    </Fragment>
	);
});

addFilter('captions-panel-title', 'svg-flags/svg-flag', function (component, atts, setAttributes) {
  return __("Flag Caption & Tooltip", "svg-flags");
});

// Add border and border radius controls to svg flag image/heading block.
addFilter('border-style-panel-controls', 'svg-flags/svg-flag', function (component, atts, setAttributes) {
	return (
		<PanelBody title={__("Flag Border", "svg-flags")} initialOpen={false}>
			<PanelRow>
				<TextControl
					label="Border"
					help={__("Enter a valid CSS border value", "svg-flags")}
					value={atts['border']}
					onChange={newVal => setAttributes({ border: newVal })}
				/>
			</PanelRow>
			<PanelRow>
				<TextControl
					label="Border Radius"
					help={__("Enter a valid CSS border-radius value", "svg-flags")}
					value={atts['border_radius']}
					onChange={newVal => setAttributes({ border_radius: newVal })}
				/>
			</PanelRow>
		</PanelBody>
	);
});

// Add margin and padding controls to svg flag image/heading blocks.
addFilter('margin-padding-panel-controls', 'svg-flags/svg-flag', function (component, atts, setAttributes) {
	return (
		<PanelBody title={__("Flag Margin & Padding", "svg-flags")} initialOpen={false}>
			<PanelRow>
				<TextControl
					label={__("Margin", "svg-flags")}
					help={__("Enter a valid CSS margin value", "svg-flags")}
					value={atts['margin']}
					onChange={newVal => setAttributes({ margin: newVal })}
				/>
			</PanelRow>
			<PanelRow>
				<TextControl
					label={__("Padding", "svg-flags")}
					help={__("Enter a valid CSS padding value", "svg-flags")}
					value={atts['padding']}
					onChange={newVal => setAttributes({ padding: newVal })}
				/>
			</PanelRow>
		</PanelBody>
	);
});