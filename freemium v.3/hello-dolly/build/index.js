!function(e){var t={};function n(o){if(t[o])return t[o].exports;var r=t[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(o,r,function(t){return e[t]}.bind(null,r));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=15)}([function(e,t){e.exports=window.wp.element},function(e,t){var n=wp.hooks,o=n.applyFilters,r=(n.doAction,n.createHooks,hello_dolly_editor_data&&hello_dolly_editor_data.current_plan,{"Hello Dolly":"Hello, Dolly\n  Well, hello, Dolly\n  It's so nice to have you back where you belong\n  You're lookin' swell, Dolly\n  I can tell, Dolly\n  You're still glowin', you're still crowin'\n  You're still goin' strong\n  We feel the room swayin'\n  While the band's playin'\n  One of your old favourite songs from way back when\n  So, take her wrap, fellas\n  Find her an empty lap, fellas\n  Dolly'll never go away again\n  Hello, Dolly\n  Well, hello, Dolly\n  It's so nice to have you back where you belong\n  You're lookin' swell, Dolly\n  I can tell, Dolly\n  You're still glowin', you're still crowin'\n  You're still goin' strong\n  We feel the room swayin'\n  While the band's playin'\n  One of your old favourite songs from way back when\n  Golly, gee, fellas\n  Find her a vacant knee, fellas\n  Dolly'll never go away\n  Dolly'll never go away\n  Dolly'll never go away again"});r=o("song-lyrics",r),t.lyrics=r},function(e,t){e.exports=function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}},function(e,t){function n(t){return e.exports=n=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},n(t)}e.exports=n},function(e,t){e.exports=window.wp.primitives},function(e,t){e.exports=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}},function(e,t){function n(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}e.exports=function(e,t,o){return t&&n(e.prototype,t),o&&n(e,o),e}},function(e,t,n){var o=n(11);e.exports=function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&o(e,t)}},function(e,t,n){var o=n(12),r=n(2);e.exports=function(e,t){return!t||"object"!==o(t)&&"function"!=typeof t?r(e):t}},function(e,t){e.exports=window.wp.blocks},function(e,t){e.exports=window.wp.components},function(e,t){function n(t,o){return e.exports=n=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},n(t,o)}e.exports=n},function(e,t){function n(t){return"function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?e.exports=n=function(e){return typeof e}:e.exports=n=function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},n(t)}e.exports=n},function(e,t){e.exports=window.wp.blockEditor},,function(e,t,n){"use strict";n.r(t);var o=n(5),r=n.n(o),l=n(6),i=n.n(l),c=n(2),a=n.n(c),u=n(7),s=n.n(u),p=n(8),y=n.n(p),f=n(3),b=n.n(f),d=n(0),m=n(9),h=(n(13),n(10)),w=wp.hooks,g=w.applyFilters,v=(w.doAction,w.createHooks,function(e){var t=e.song,n=e.updateLyric,o=g("song-list",[{label:"Hello Dolly",value:"Hello Dolly"}]);return Object(d.createElement)("div",null,Object(d.createElement)(h.RadioControl,{label:"Select Song",selected:t,options:o,onChange:function(e){n(e)}}))}),O=wp.hooks,j=(O.applyFilters,O.doAction,O.createHooks,wp.element.Fragment);function x(e){var t=e.song,n=e.lyric,o=e.lineNumber,r=e.showLineNumber;return Object(d.createElement)(j,null,Object(d.createElement)("span",{style:{fontWeight:"bold"}},t),": ",n," ",r&&Object(d.createElement)("span",{style:{fontStyle:"italic"}},"(",o,")"))}var k=n(1),E=n(4),D=Object(d.createElement)(E.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"-2 -2 24 24"},Object(d.createElement)(E.Path,{d:"M10.2 3.28c3.53 0 6.43 2.61 6.92 6h2.08l-3.5 4-3.5-4h2.32c-.45-1.97-2.21-3.45-4.32-3.45-1.45 0-2.73.71-3.54 1.78L4.95 5.66C6.23 4.2 8.11 3.28 10.2 3.28zm-.4 13.44c-3.52 0-6.43-2.61-6.92-6H.8l3.5-4c1.17 1.33 2.33 2.67 3.5 4H5.48c.45 1.97 2.21 3.45 4.32 3.45 1.45 0 2.73-.71 3.54-1.78l1.71 1.95c-1.28 1.46-3.15 2.38-5.25 2.38z"}));var _=wp.hooks,S=_.applyFilters,L=(_.doAction,wp.element.Component),H=wp.blockEditor,P=H.InspectorControls,C=(H.AlignmentToolbar,H.BlockControls),R=wp.components,N=R.PanelBody,T=R.PanelRow,A=(R.CheckboxControl,R.Button),F=R.Toolbar,M=R.ToolbarButton,__=wp.i18n.__,W={padding:"20px"};Object(m.registerBlockType)("hello-dolly/song-lyrics",{title:"Hello Dolly Freemium",icon:"format-audio",category:"text",example:{},supports:{align:!0},attributes:{song:{type:"string",default:"Hello Dolly"},lyric:{type:"string",default:"Hello, Dolly"},lineNumber:{type:"string",default:"1"},showLineNumber:{type:"boolean",default:!0},align:{type:"string",default:"wide"}},edit:function(e){s()(l,e);var t,n,o=(t=l,n=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,o=b()(t);if(n){var r=b()(this).constructor;e=Reflect.construct(o,arguments,r)}else e=o.apply(this,arguments);return y()(this,e)});function l(e){var t;return r()(this,l),(t=o.call(this,e)).props=e,t.updateLyric=t.updateLyric.bind(a()(t)),t}return i()(l,[{key:"componentDidMount",value:function(){var e=this.props,t=e.attributes,n=t.song,o=(t.lyric,e.setAttributes);k.lyrics.hasOwnProperty(n)||o({song:"Hello Dolly",lyric:k.lyrics["Hello Dolly"].split(/\n/)[0],lineNumber:1})}},{key:"updateLyric",value:function(e){var t=this.props.setAttributes,n=k.lyrics[e].split(/\n/),o=Math.floor(Math.random()*n.length);t({song:e,lyric:n[o],lineNumber:(o+1).toString()})}},{key:"render",value:function(){var e=this,t=this.props,n=t.attributes,o=n.song,r=(n.lyric,n.lineNumber,n.showLineNumber),l=t.setAttributes,i=(S("toolbar-refresh-lyric","",o,this.updateLyric),S("inspector-refresh-lyric","",o,this.updateLyric),S("inspector-line-number","",r,l));return Object(d.createElement)("div",{style:W},Object(d.createElement)(C,null,Object(d.createElement)(F,{label:"Options"},Object(d.createElement)(M,{onClick:function(){return e.updateLyric(o)},icon:D,label:"Refresh lyric"}))),Object(d.createElement)(x,this.props.attributes),Object(d.createElement)(P,null,Object(d.createElement)(N,{className:"faq-themes-panel",title:__("Song Lyrics","hello-dolly"),initialOpen:!0},Object(d.createElement)(T,null,Object(d.createElement)(v,{updateLyric:this.updateLyric,song:o})),Object(d.createElement)(T,null,Object(d.createElement)(A,{class:"dashicons-image-rotate",style:{marginTop:"-30px"},isLink:!0,onClick:function(){return e.updateLyric(o)}},"Refresh song lyric")),i)))}}]),l}(L),save:function(e){return Object(d.createElement)(x,e.attributes)}})}]);