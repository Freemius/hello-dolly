const { ColorPalette, ColorPicker, Button, Dropdown } = wp.components;
const { withState } = wp.compose;

export const SeriesColorDropdown = withState({
    color: null,
})(({ color, setState, ...props }) => {

    const { attributes: { barObjData, barObjSettings }, setAttributes, colIndex, label } = props;

    color = barObjSettings.seriesColors[colIndex];

    function updateColorSeries(newCol) {
        newCol = newCol.hex;
        //console.log(newCol);

        //(value) => setState({ color: value.hex })

        let newColors = [...barObjSettings.seriesColors];
        newColors[colIndex] = newCol;
        //console.log(newColors);

        let newSettingsObj = {
          ...barObjSettings,
          seriesColors: newColors
        };

        setAttributes({ barObjSettings: newSettingsObj });
        setState({ color: newCol });
    }

    return (
        <Dropdown
            className="series-color"
            contentClassName="series-color-picker"
            position="bottom right"
            renderToggle={({ isOpen, onToggle }) => (
                <div title={`${color}`} style={{ backgroundColor: color, cursor: 'pointer' }} onClick={onToggle} aria-expanded={isOpen}></div>
            )}
            renderContent={() => (
                <ColorPicker
                    color={color}
                    onChangeComplete={updateColorSeries}
                    disableAlpha
                />
            )}
        />
        // <ColorPicker
        //     color={ color }
        //     onChangeComplete={ ( value ) => setState( value.hex ) }
        //     disableAlpha
        // />
    );
});
