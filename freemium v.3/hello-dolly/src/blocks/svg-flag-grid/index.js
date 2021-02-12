// Block dependencies.
const { registerBlockType } = wp.blocks;
const { Fragment } = wp.element;
const { __ } = wp.i18n;

// Import blockIcon from "./assets/block-icon";
import Edit from "./edit";

// Register block
export default registerBlockType("svg-flags/svg-flag-grid", {
  title: __("SVG Flag Grid", "svg-flags"),
  description: __("Display an SVG Flag Grid", "svg-flags"),
  category: "svg-flags",
  icon: "flag", //can import custom svg icons too e.g. blockIcon,
  keywords: [
    __("SVG", "svg-flags"),
    __("Flags", "svg-flags"),
    __("Grid", "svg-flags")
  ],
  supports: {
    align: ["full", "wide"],
    customClassName: false,
  },
  edit: Edit,
  save() {
    // Rendering via PHP on the frontend.
    return null;
  },
});