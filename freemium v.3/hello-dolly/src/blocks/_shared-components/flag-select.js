//import { part } from "../assets/expandable-icons";
//import { IconSelect } from "../__components/icon-select";
import Select, { components } from 'react-select';
const { Option, SingleValue } = components;

//const merge = require('deepmerge');
const { __ } = wp.i18n;
const { Component, Fragment } = wp.element;
const {
	InspectorControls
} = wp.blockEditor;
const {
	SelectControl,
	PanelBody,
	PanelRow,
	ToggleControl
} = wp.components;

class FlagSelect extends Component {

	constructor(props) {
		super(props);

		const obj = svg_flags_editor_data.countries;

		this.newOptions = [];
		Object.keys(obj).map((item, index) => {
			//console.log('Item: ', item, obj[item]);
			this.newOptions.push({ value: item, label: obj[item] });
		});
	}

	handleChange = (newFlag) => {
		const { attributes: { flag }, setAttributes } = this.props;

		//console.log('handleChange', JSON.stringify(newFlag), newFlag, this.props);
		setAttributes({ flag: JSON.stringify(newFlag) });
	};

	render() {
		const { attributes: { flag }, setAttributes } = this.props;

		const CustomValueContainer = ({ children, ...props }) => {
			return (
				components.ValueContainer && (
					<components.ValueContainer {...props}>
						{!!children && (
							<div className={`svg-flag flag-icon-background flag-icon-${JSON.parse(flag).value.toLowerCase()}`} style={{ width: '2em', height: '2em', position: 'absolute', left: '8px' }}></div>
						)}
						{children}
					</components.ValueContainer>
				)
			);
		};

		const CustomSelectOption = props => {

			//console.log('FLAG: ', props);
			
			return (
				<Option {...props}>
					<i style={{marginRight: '8px' }} className={`flag-icon flag-icon-${props.data.value.toLowerCase()}`} />
					{props.data.label}
				</Option>
			);
		}

		const customStyles = {
			valueContainer: base => ({
				...base,
				paddingLeft: 24
			}),
			container: base => ({
				...base,
				width: '100%',
				'& div[class$="-Input"]': {
					'& input:focus': {
						boxShadow: 'none'
					}
				}
			}),
			singleValue: base => ({
				...base,
				marginLeft: '16px'
			}),
			input: base => ({
				...base,
				marginLeft: '16px'
			}),
			option: base => {
				//console.log('BASE:', base);
				return {
				...base,
				padding: '4px 12px'
			}}
		};

		return (
			<Select
				className="react-select-input"
				value={JSON.parse(flag)}
				components={{ Option: CustomSelectOption, ValueContainer: CustomValueContainer }}
				onChange={this.handleChange}
				styles={customStyles}
				options={this.newOptions}
			/>
		);
	}
}

export default FlagSelect;