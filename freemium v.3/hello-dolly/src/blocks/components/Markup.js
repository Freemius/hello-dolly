const { applyFilters, doAction, createHooks } = wp.hooks;
const { Fragment } = wp.element;

export function Markup(props) {
  const { song, lyric, lineNumber, showLineNumber } = props;

  const extra_markup = applyFilters('extra-markup', '', props);

  return (
    <Fragment>
      <span style={{fontWeight:'bold'}}>{song}</span>: {lyric} {showLineNumber && (<span style={{fontStyle:'italic'}}>({lineNumber})</span>)}
    </Fragment>
  );
}
