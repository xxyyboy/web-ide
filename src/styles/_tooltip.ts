import { css as classCss } from "emotion";

// the absolute pos elem
const tooltipPopper = classCss`
   position: absolute!important;
   top: -10px!important;
   left: 0!important;
`;

const tooltipElem = classCss`
  font-size: 13px!important;
  padding: 6px 12px!important;
`;

// inject into classes prop
export const tooltipClasses = {
    popper: tooltipPopper,
    tooltip: tooltipElem
};
