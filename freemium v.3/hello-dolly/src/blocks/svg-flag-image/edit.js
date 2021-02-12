import Inspector from "./inspector";
//import { ServerSideRenderX } from '../../../../../mu-plugins/wpgo-plugin-framework/api/src/blocks/__components/server-side-render-x';
import { ServerSideRenderX } from '../_shared-components/server-side-render-x';

const { Component, Fragment } = wp.element;
const { ServerSideRender } = wp.components;
const { applyFilters, doAction, createHooks } = wp.hooks;
const classnames = require('classnames');

class Edit extends Component {

	constructor(props) {
		super(props);
	}

	render() {

		const {
			attributes: { flag, width, height, size, size_unit, square, caption, random, inline },
			attributes,
			setAttributes
		} = this.props;

		// let {
		// 	attributes: { flag },
		// } = this.props;

		//console.log('ATTS: ', attributes);
		//console.log(this.props);
		//console.log('FLAG: ' + flag);

		//doAction('add-components', attributes);
		//doAction('test3');

		//let class_attribute = [];
		//let title_attribute = [];
		//let style_attribute = {};

		// display random flag?
		// if (random === true || random === 'true') {
		// 	const obj = svg_flags_editor_data.countries;
		// 	var keys = Object.keys(obj);
		// 	const value = keys[keys.length * Math.random() << 0];
		// 	const label = obj[value];
		// 	const newFlagObj = {
		// 		value,
		// 		label
		// 	}
		// 	flag = JSON.stringify(newFlagObj);
		// }

		// flag = applyFilters('svg-flag-custom-flag', flag, attributes);
		// const flag_css_value = JSON.parse(flag).value.toLowerCase();

		// filter flag
		//console.log("rand", tev);
		//setAttributes(flag, applyFilters('svg-flag-custom-flag', flag, attributes, setAttributes));

		// build flag classes
		// let flagClasses = {
		// 	'svg-flag': true,
		// 	'flag-icon-background': true,
		// 	'flag-icon-squared': (square === true) ? true : false
		// };
		// flagClasses['flag-icon-' + flag_css_value] = true;

		// if (inline === true || inline === 'true') {
		// 	flagClasses['flag-icon-background'] = false;
		// 	flagClasses['flag-icon'] = true;
		// }

		// const class_attribute = classnames(applyFilters('svg-flag-classes', flagClasses, attributes));
		//console.log('TESTP:', class_attribute);

		// build flag styles
		// if (size !== '') {
		// 	style_attribute['width'] = `${size}${size_unit}`;
		// 	style_attribute['height'] = `${size}${size_unit}`;
		// }
		// if (width !== '') {
		//   style_attribute['width'] = width;
		// }
		// if (height !== '') {
		//   style_attribute['height'] = height;
		// }

		// add custom HTML attributes such as 'id'
		// const custom_attributes = applyFilters('svg-flag-custom-attributes', {}, attributes);

		// function SVGFlag(props) {
		// 	//console.log('EDIT.JS');

		// 	let Tag = inline === true || inline === 'true' ? 'span' : 'div';
		// 	Tag = applyFilters('svg-flag-tag', Tag, attributes);

		// 	return <Tag {...(Object.keys(custom_attributes).length !== 0 ? custom_attributes : {})} className={class_attribute} style={style_attribute}></Tag>;
		// }

		return (
			<Fragment>
				<Inspector attributes={attributes} forceFlagUpdate={this.forceUpdate} setAttributes={setAttributes} />
        {/* <ServerSideRender
					block="svg-flags/svg-flag-image"
          attributes={attributes}
				/> */}
        <ServerSideRenderX
					block="svg-flags/svg-flag-image"
          attributes={attributes}
				/>
			</Fragment>
		)
	}
}

export default Edit;
