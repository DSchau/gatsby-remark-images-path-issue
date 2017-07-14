const path = require('path');

exports.createPages = ({ boundActionCreators, graphql }) => {
  const { createPage } = boundActionCreators;

  return new Promise((resolve, reject) => {
    const blogPostTemplate = path.resolve(`src/templates/blog-post.js`);

    resolve(
      graphql(`{
        allMarkdownRemark(limit: 1000) {
          edges {
            node {
              excerpt(pruneLength: 250)
              html
              id
              frontmatter {
                date
                path
                title
              }
            }
          }
        }
      }`

      )
        .then(result => {
          if (result.errors) {
            reject(result.errors);
          }

          const posts = result.data.allMarkdownRemark.edges
            .sort((a, b) => {
              const getDate = date => new Date(date);

              return getDate(a.node.frontmatter.date) - getDate(b.node.frontmatter.date);
            });

          posts
            .forEach(({ node }) => {
              createPage({
                path: node.frontmatter.path,
                component: blogPostTemplate,
                context: {} // additional data can be passed via context
              });
            });
        })
    )
  });
}
