!function(e){var n={};function o(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,o),r.l=!0,r.exports}o.m=e,o.c=n,o.d=function(e,n,t){o.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:t})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,n){if(1&n&&(e=o(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(o.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var r in e)o.d(t,r,function(n){return e[n]}.bind(null,r));return t},o.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(n,"a",n),n},o.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},o.p="",o(o.s=14)}({0:function(e,n){e.exports=window.wp.element},14:function(e,n,o){"use strict";o.r(n);var t=o(0),r=wp.hooks,l=(r.addAction,r.addFilter),a=wp.components,i=(a.Button,a.Modal,a.TextControl,a.CheckboxControl),s=(a.SelectControl,a.PanelBody,a.PanelRow),d=(a.ToggleControl,a.Toolbar,a.ToolbarButton,wp.compose.createHigherOrderComponent,wp.element),u=(d.Component,d.Fragment,d.cloneElement,wp.i18n.__,wp.blockEditor);u.InspectorControls,u.AlignmentToolbar,u.BlockControls,l("song-lyrics","hello-dolly/song-lyrics",(function(e){return e})),l("inspector-line-number","hello-dolly/song-lyrics",(function(e,n,o){return Object(t.createElement)(s,null,Object(t.createElement)(i,{label:"Show line number?",help:"Optionally display the lyric line number",checked:n,onChange:function(e){o({showLineNumber:e})}}))})),l("song-list","hello-dolly/song-lyrics",(function(e){var n=hello_dolly_editor_data?hello_dolly_editor_data.current_plan:null;return"summertime"!==n&&"wonderful_world"!==n&&"dream"!==n||e.push({label:"Summertime",value:"Summertime"}),"wonderful_world"!==n&&"dream"!==n||e.push({label:"Wonderful World",value:"Wonderful World"}),"dream"===n&&e.push({label:"Dream a Little Dream",value:"Dream a Little Dream"}),e})),l("song-lyrics","hello-dolly/song-lyrics",(function(e){var n=hello_dolly_editor_data?hello_dolly_editor_data.current_plan:null;return"summertime"!==n&&"wonderful_world"!==n&&"dream"!==n||(e.Summertime="Summertime and the livin' is easy\n      Fish are jumpin' and the cotton is high\n      Yo' daddy's rich and yo' mama's good lookin'\n      So hush little baby, don't you cry\n      One of these mornin's you gonna rise up singin'\n      You gonna spread your little wings and you'll take to the sky\n      But 'till that mornin' there ain't nothin' gonna harm you\n      With yo mama and daddy standin' bye\n      Now it's summertime and the livin' is easy\n      Them fish are jumpin' and the cotton's 'bout waist high\n      Yo' daddy's rich and, ya know yo' mama's good lookin'\n      Now hush little baby, don't you cry\n      Summertime\n      Ah, said it's summertime"),"wonderful_world"!==n&&"dream"!==n||(e["Wonderful World"]="I see trees of green, red roses, too,\n      I see them bloom, for me and you\n      And I think to myself\n      What a wonderful world.\n      I see skies of blue, and clouds of white,\n      The bright blessed day, the dark sacred night\n      And I think to myself\n      What a wonderful world.\n      The colors of the rainbow, so pretty in the sky,\n      Are also on the faces of people going by.\n      I see friends shaking hands, sayin', \"How do you do?\"\n      They're really sayin', \"I love you.\"\n      I hear babies cryin'. I watch them grow.\n      They'll learn much more than I'll ever know\n      And I think to myself\n      What a wonderful world\n      Yes, I think to myself\n      What a wonderful world"),"dream"===n&&(e["Dream a Little Dream"]="Stars shining bright above you\n      Night breezes seem to whisper \"I love you\"\n      Birds singing in the sycamore tree\n      Dream a little dream of me\n      Say \"Nighty-night\" and kiss me\n      Just hold me tight and tell me you'll miss me\n      While I'm alone and blue as can be\n      Dream a little dream of me\n      Stars fading but I linger on dear\n      Oh how you linger on\n      Still craving your kiss\n      How you crave my kiss\n      Now I'm longin' to linger till dawn dear\n      Just saying this\n      Give me a little kiss\n      Sweet dreams till sunbeams find you\n      Sweet dreams that leave all worries behind you\n      But in your dreams, whatever they be\n      Dream a little dream of me\n      Stars fading but I linger on dear\n      Still craving your kiss\n      Yeah, I'm longing to linger till dawn dear\n      Just saying this, yes\n      Sweet dreams\n      Dreamin'\n      Till sunbeams find you\n      Keep dreaming\n      Gotta keep dreamin'\n      Leave your worries far behind you\n      But in your dreams, whatever they be\n      You gotta make me a promise\n      Promise to me you'll dream\n      Dream a little dream of me"),e}))}});