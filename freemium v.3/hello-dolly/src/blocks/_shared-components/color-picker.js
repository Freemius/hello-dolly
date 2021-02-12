const { ColorPicker } = wp.components;
const { withState } = wp.compose;

export const SeriesColorPicker = withState( {
    color: '#f00',
} )( ( { color, setState, ...props } ) => {
    return (
        <ColorPicker
            color={ color }
            onChangeComplete={ ( value ) => setState( value.hex ) }
            disableAlpha
        />
    );
} );
