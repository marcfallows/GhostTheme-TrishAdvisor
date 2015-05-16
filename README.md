# TrishAdvisor - Ghost Theme

A ghost theme for [TrishAdvisor](http://trishadvisor.com/).

Built up from the default [Casper](https://github.com/TryGhost/Casper/) theme.

## Dependencies
1. Node.js

## Getting Started

###Clone
If using this directly in an existing Ghost blog, you may choose to add it as a submodule next to `casper` in the `/content/themes` folder.
```bash
git clone git://github.com/marcfallows/GhostTheme-TrishAdvisor.git
cd GhostTheme-TrishAdvisor
```

### Install
```bash
npm install
```

### Development
Watch the Sass and compile into css.
```bash
npm run watch
```

### Build
Compile the Sass into css.
```bash
npm run css:build
```

### Package
Coming soon. Not a lot of point in doing this until Ghost has a nice way to import themes.

## Made possible by:
* [Ghost](https://github.com/TryGhost/Ghost/), for being awesome.
* [Casper](https://github.com/TryGhost/Ghost/), to serve as a starting point.
* [Sass](https://github.com/sass/sass) for making css a little less painful.
* [Bourbon](https://github.com/thoughtbot/bourbon) for nice mixins and a [neat](https://github.com/thoughtbot/neat) grid framework. 
