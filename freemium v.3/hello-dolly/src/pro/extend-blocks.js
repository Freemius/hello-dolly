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
const { createHigherOrderComponent } = wp.compose;
const { InspectorControls } = wp.editor;
const { Component, Fragment, cloneElement } = wp.element;
const { __ } = wp.i18n;

addFilter('song-lyrics', 'hello-dolly/song-lyrics', function (lyrics) {

  //console.log('Lyrics: ', lyrics);

	return lyrics;
});

addFilter('extra-markup', 'hello-dolly/song-lyrics', function (component, props) {

  const { song, lyric, lineNumber, showLineNumber } = props;

  return showLineNumber ? <span style={{fontStyle:'italic'}}>({lineNumber})</span>: '';
});