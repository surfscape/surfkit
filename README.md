<img src="surfkit.png" align="left" height="116px" width="116px">

# SurfKit (Alpha)

Open source UI framework for use in SurfScape's websites and services.

**Table of Contents**

- [Installation](#installation)
- [Project Structure](#structure)

## Installation

Install using npm: `npm i surfkit`

To compile the source for use in production enviroment run `npm run build-dist` and then import/link the CSS and JS files found inside the /dist folder.

## Structure

```
/css
    /components | every SurfKit component from headers to frames
        /frame | SurfKit way of containers
            content-frame.css | custom-breakpoint container for content (used with main element)
            site-frame.css | full-width container as a wrapper for content-frame
        /header | header components
            brand-header.css | main SurfScape desktop header with support for modals and toolbars
        /modal | intrusive version of dialogs with backdrop background
            header-modal.css | modal version made to be used on header componets
        /toolbar | small full-width container for external links (used on top of headers or container)
            brand-toolbar.css | used with brand-header to showcase other brand specific websites
        components.css | main components file that imports every componet
    /content | rules and styles for content
        /webfonts | our fonts used troughout our services
        reboot.css | resets browser default behaviour
        type.css | imports the webfonts
    /layout | rules and styles for content from flex to grid
        utils.css | various utils and fixes for styles and components
    /vars | variables used troughout components
        color.css | color variables from hsl to linear-gradients
        size.css | from padding to breakpoints
        transition.css | transition times and keyframes
        type.css | typography vars from sans to emoji system fonts
    css.css | main css files that imports all the necessary SurfKit CSS styles
/dist | production-ready SurfKit builds
    css.min.css | production-ready SurfKit CSS
    js.min.js |  production-ready SurfKit JS modules
/examples | .html pages made using SurfKit
/js
    js.js | main js files that imports all the necessary SurfKit JS modules
```
