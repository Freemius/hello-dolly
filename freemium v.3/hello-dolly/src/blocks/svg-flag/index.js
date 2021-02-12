// Block dependencies.
const { registerBlockType } = wp.blocks;
const { Fragment } = wp.element;
const { __ } = wp.i18n;

// Import blockIcon from "./assets/block-icon".
import Edit from "./edit";

// Register block.
export default registerBlockType("svg-flags/svg-flag", {
  title: __("SVG Flag", "svg-flags"),
  description: __("Output an individual SVG Flag", "svg-flags"),
  category: "svg-flags",
  icon: "flag", // Can import custom svg icons too e.g. blockIcon.
  keywords: [
    __("SVG", "svg-flags"),
    __("Flags", "svg-flags"),
    __("Country", "svg-flags")
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