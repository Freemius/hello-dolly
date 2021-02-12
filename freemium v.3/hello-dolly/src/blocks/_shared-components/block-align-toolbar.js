// Toolbar displyed only when block is selected

// Import libraries and functionality
//import classnames from 'classnames';
//import { barChartObjDataDefault, barChartObjSettingsDefault } from '../../../sample-data/bar-data';
//import { randomData } from '../../../utilities/utilities';

const { Fragment } = wp.element;
const {
    BlockControls,
    BlockAlignmentToolbar,
} = wp.editor;
const { __ } = wp.i18n;

class BlockAlignToolbar extends React.Component {

    render() {
        const { attributes: { barObjData, barObjSettings }, setAttributes } = this.props;

        function UpdateBlockAlignment(newAlignment) {
            // console.log('newAlignment', newAlignment);

            newAlignment = newAlignment === 'full' || newAlignment === 'wide'
                ? newAlignment = `align${newAlignment}`
                : newAlignment;

            let newObj = {
                ...barObjSettings,
                chartAlignment: newAlignment
            };
            setAttributes({ barObjSettings: newObj });
        }

        return (
            <BlockControls>
                <BlockAlignmentToolbar
                    value={barObjSettings.chartAlignment}
                    onChange={newAlignment => UpdateBlockAlignment(newAlignment)}
                    controls={['left', 'center', 'right']}
                />
            </BlockControls>
        )
    }
};

export default BlockAlignToolbar;