webpackJsonp([9],{'./node_modules/babel-loader/lib/index.js?{"plugins":["/Users/dschau/Code/Personal/gatsby-images-issue-example/node_modules/gatsby/dist/utils/babel-plugin-extract-graphql.js","/Users/dschau/Code/Personal/gatsby-images-issue-example/node_modules/babel-plugin-add-module-exports/lib/index.js","/Users/dschau/Code/Personal/gatsby-images-issue-example/node_modules/babel-plugin-add-module-exports/lib/index.js","/Users/dschau/Code/Personal/gatsby-images-issue-example/node_modules/babel-plugin-transform-object-assign/lib/index.js"],"presets":["/Users/dschau/Code/Personal/gatsby-images-issue-example/node_modules/babel-preset-env/lib/index.js","/Users/dschau/Code/Personal/gatsby-images-issue-example/node_modules/babel-preset-stage-0/lib/index.js","/Users/dschau/Code/Personal/gatsby-images-issue-example/node_modules/babel-preset-react/lib/index.js"],"cacheDirectory":true}!./src/pages/index.js':function(e,s,a){"use strict";function t(e){return e&&e.__esModule?e:{default:e}}function l(e){var s=e.data,a=s.allMarkdownRemark.edges;return n.default.createElement("div",{className:"blog-posts"},a.sort(function(e,s){var a=function(e){return new Date(e.node.frontmatter.date)};return a(e)-a(s)}).reverse().filter(function(e){return e.node.frontmatter.title.length>0}).map(function(e){var s=e.node;return n.default.createElement("div",{className:"blog-post-preview",key:s.id},n.default.createElement("h1",null,n.default.createElement(o.default,{to:s.frontmatter.path},s.frontmatter.title)),n.default.createElement("h2",null,s.frontmatter.date),n.default.createElement("p",null,s.excerpt))}))}Object.defineProperty(s,"__esModule",{value:!0}),s.pageQuery=void 0,s.default=l;var r=a("./node_modules/react/react.js"),n=t(r),d=a("./node_modules/gatsby-link/index.js"),o=t(d),u=a("./node_modules/react-helmet/lib/Helmet.js");t(u),s.pageQuery="** extracted graphql fragment **"}});
//# sourceMappingURL=page-component---src-pages-index-js-63afa9b8a21c0c487a08.js.map