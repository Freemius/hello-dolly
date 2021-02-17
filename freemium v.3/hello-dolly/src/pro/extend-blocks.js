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

addFilter('song-lyrics', 'hello-dolly/song-lyrics', function (lyrics) {

  console.log('Lyrics: ', lyrics);
	return lyrics;
});