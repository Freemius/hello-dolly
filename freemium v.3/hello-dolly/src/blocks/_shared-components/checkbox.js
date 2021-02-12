const { CheckboxControl } = wp.components;
const { withState } = wp.compose;
const { Fragment } = wp.element;
import { formatStr } from '../../utilities/utilities';

export const SeriesCheckboxControl = withState({
  isChecked: null
})(({ isChecked, setState, ...props }) => {

  const { attributes: { barObjData, barObjSettings }, setAttributes, chkIndex, label } = props;

  isChecked = barObjSettings.rAccessorCheckboxes[chkIndex];

  function updateCheckboxArray(isChecked) {
    //console.log('lets do this', chkIndex, isChecked);

    //let newKeys = Object.keys(parsedData[0]);
    //newKeys.shift();

    let newCheckboxes = [...barObjSettings.rAccessorCheckboxes];
    newCheckboxes[chkIndex] = isChecked ? 1 : 0;
    //console.log(newCheckboxes);

    let newSettingsObj = {
      ...barObjSettings,
      rAccessorCheckboxes: newCheckboxes
    };

    setAttributes({ barObjSettings: newSettingsObj });
    setState({ isChecked: isChecked });
  }

  return (
    <li className="series-checkboxes">
      <div className="series-checkbox" style={{backgroundColor:barObjSettings.seriesColors[chkIndex]}}></div><CheckboxControl
        //heading={isChecked}
        label={formatStr(label)}
        //help="Is the user a author or not?"
        checked={isChecked}
        onChange={(isChecked) => updateCheckboxArray(isChecked)}
      />
    </li>
  )
});