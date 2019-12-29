/* eslint-disable @typescript-eslint/no-unused-vars */

// Monokai
// https://www.colourlovers.com/palette/1718713/Monokai
// https://github.com/oneKelvinSmith/monokai-emacs/blob/master/monokai-theme.el

const henn1nk = `#a6e22e`;
const monokaiGray = "#64645E";
const monokaiLightGray = "#CCCCCC";
const monokaiCyan = "#A1EFE4";
const monokaiLightBlue = `#66d9ef`;
const monokaiOrange = `#fd971f`;
const monokaiRed = "#F92672";
const monokaiYellow = "#E6DB74";
const monokaiMagenta = "#FD5FF0";
const monokaiGreen = "#A6E22E";
const orchid = `#f92672`;
const sundriedClay = `#272822`;
const monokaiViolet = "#AE81FF";
const monokaiForeground = "#F8F8F2";
const monokaiBackground = "#272822";
const monokaiComments = "#75715E";
const monokaiEmphasis = "#F8F8F0";
const monokaiLineNumber = "#8F908A";
const monokaiHighlight = "#49483E";
const monokaiHighlightAlt = "#3E3D31";
const monokaiHighlightLine = "#3C3D37";
const monokaiBlueDark = "#40CAE4";
const monokaiLightBlue2 = "#92E7F7";
const monokaiBlueHighContrast = "#1DB4D0";

const theme = {
    background: {
        primary: monokaiBackground,
        secondary: monokaiEmphasis
    },
    color: {
        primary: monokaiForeground,
        secondary: sundriedClay
    },
    alternativeColor: {
        primary: monokaiLineNumber,
        secondary: monokaiHighlight
    },
    error: {
        primary: monokaiRed,
        secondary: monokaiRed
    },
    highlight: {
        primary: monokaiHighlight,
        secondary: monokaiHighlight
    },
    highlightAlt: {
        primary: monokaiHighlightAlt,
        secondary: monokaiHighlightAlt
    },
    scrollbar: {
        primary: monokaiHighlight,
        secondary: monokaiHighlight
    },
    scrollbarHover: {
        primary: monokaiLightGray,
        secondary: monokaiHighlightAlt
    },
    console: {
        primary: monokaiLightGray,
        secondary: monokaiGray
    },
    cursor: {
        primary: monokaiForeground,
        secondary: sundriedClay
    },
    opcode: {
        primary: monokaiMagenta,
        secondary: monokaiMagenta
    },
    operator: {
        primary: monokaiEmphasis,
        secondary: sundriedClay
    },
    attribute: {
        primary: monokaiBlueHighContrast,
        secondary: monokaiBlueDark
    },
    keyword: {
        primary: orchid,
        secondary: orchid
    },
    string: {
        primary: monokaiYellow,
        secondary: monokaiYellow
    },
    number: {
        primary: monokaiEmphasis,
        secondary: sundriedClay
    },
    bracket: {
        primary: monokaiHighlightAlt,
        secondary: monokaiHighlightAlt
    },
    aRateVar: {
        primary: monokaiViolet,
        secondary: monokaiViolet
    },
    iRateVar: {
        primary: monokaiCyan,
        secondary: monokaiCyan
    },
    kRateVar: {
        primary: monokaiLightBlue,
        secondary: monokaiLightBlue
    },
    fRateVar: {
        primary: monokaiMagenta,
        secondary: monokaiMagenta
    },
    pField: {
        primary: monokaiYellow,
        secondary: monokaiOrange
    },
    flash: {
        primary: monokaiHighlight,
        secondary: monokaiHighlightAlt
    },
    gutterBackground: {
        primary: monokaiHighlightLine,
        secondary: monokaiEmphasis
    },
    gutterMarker: {
        primary: monokaiForeground,
        secondary: sundriedClay
    },
    gutterMarkerSubtle: {
        primary: monokaiForeground,
        secondary: sundriedClay
    },
    lineNumber: {
        primary: monokaiLineNumber,
        secondary: monokaiEmphasis
    },
    comment: {
        primary: monokaiComments,
        secondary: monokaiComments
    },
    commentAttribute: {
        primary: henn1nk,
        secondary: henn1nk
    },
    commentDef: {
        primary: monokaiOrange,
        secondary: monokaiOrange
    },
    commentTag: {
        primary: monokaiMagenta,
        secondary: monokaiMagenta
    },
    commentType: {
        primary: monokaiCyan,
        secondary: monokaiCyan
    }
};

export default theme;