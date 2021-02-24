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
  Toolbar,
  ToolbarButton
} = wp.components;
const { createHigherOrderComponent } = wp.compose;
const { Component, Fragment, cloneElement } = wp.element;
const { __ } = wp.i18n;
const {
	InspectorControls,
  AlignmentToolbar,
  BlockControls
} = wp.blockEditor;

addFilter('song-lyrics', 'hello-dolly/song-lyrics', function (lyrics) {

  //console.log('Lyrics: ', lyrics);

	return lyrics;
});

addFilter('inspector-line-number', 'hello-dolly/song-lyrics', function (component, showLineNumber, setAttributes) {
  return (
    <PanelRow>
    <CheckboxControl
      label="Show line number?"
      help="Optionally display the lyric line number"
      checked={ showLineNumber }
      onChange={ ( option ) => { setAttributes({showLineNumber: option}); } }              
    />
  </PanelRow>);
});

addFilter('song-list', 'hello-dolly/song-lyrics', function (songs) {

  const plan = hello_dolly_editor_data ? hello_dolly_editor_data.current_plan : null;

  if(plan === 'summertime' || plan === 'wonderful_world' || plan === 'dream') {
    songs.push({ label: 'Summertime', value: 'Summertime' });
  }

  if(plan === 'wonderful_world' || plan === 'dream') {
    songs.push({ label: 'Wonderful World', value: 'Wonderful World' });
  }

  if(plan === 'dream') {
    songs.push({ label: 'Dream a Little Dream', value: 'Dream a Little Dream' });
  }

  return songs;
});

addFilter('song-lyrics', 'hello-dolly/song-lyrics', function (lyrics) {

  const plan = hello_dolly_editor_data ? hello_dolly_editor_data.current_plan : null;

  if(plan === 'summertime' || plan === 'wonderful_world' || plan === 'dream') {
    lyrics['Summertime'] = `Summertime and the livin' is easy
      Fish are jumpin' and the cotton is high
      Yo' daddy's rich and yo' mama's good lookin'
      So hush little baby, don't you cry
      One of these mornin's you gonna rise up singin'
      You gonna spread your little wings and you'll take to the sky
      But 'till that mornin' there ain't nothin' gonna harm you
      With yo mama and daddy standin' bye
      Now it's summertime and the livin' is easy
      Them fish are jumpin' and the cotton's 'bout waist high
      Yo' daddy's rich and, ya know yo' mama's good lookin'
      Now hush little baby, don't you cry
      Summertime
      Ah, said it's summertime`;
  }

  if(plan === 'wonderful_world' || plan === 'dream') {
    lyrics['Wonderful World'] = `I see trees of green, red roses, too,
      I see them bloom, for me and you
      And I think to myself
      What a wonderful world.
      I see skies of blue, and clouds of white,
      The bright blessed day, the dark sacred night
      And I think to myself
      What a wonderful world.
      The colors of the rainbow, so pretty in the sky,
      Are also on the faces of people going by.
      I see friends shaking hands, sayin', \"How do you do?\"
      They're really sayin', \"I love you.\"
      I hear babies cryin'. I watch them grow.
      They'll learn much more than I'll ever know
      And I think to myself
      What a wonderful world
      Yes, I think to myself
      What a wonderful world`;
  }
  
  if(plan === 'dream') {
    lyrics['Dream a Little Dream'] = `Stars shining bright above you
      Night breezes seem to whisper \"I love you\"
      Birds singing in the sycamore tree
      Dream a little dream of me
      Say \"Nighty-night\" and kiss me
      Just hold me tight and tell me you'll miss me
      While I'm alone and blue as can be
      Dream a little dream of me
      Stars fading but I linger on dear
      Oh how you linger on
      Still craving your kiss
      How you crave my kiss
      Now I'm longin' to linger till dawn dear
      Just saying this
      Give me a little kiss
      Sweet dreams till sunbeams find you
      Sweet dreams that leave all worries behind you
      But in your dreams, whatever they be
      Dream a little dream of me
      Stars fading but I linger on dear
      Still craving your kiss
      Yeah, I'm longing to linger till dawn dear
      Just saying this, yes
      Sweet dreams
      Dreamin'
      Till sunbeams find you
      Keep dreaming
      Gotta keep dreamin'
      Leave your worries far behind you
      But in your dreams, whatever they be
      You gotta make me a promise
      Promise to me you'll dream
      Dream a little dream of me`;
  }

  return lyrics;    
});