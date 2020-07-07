const wrapper = promise =>
  promise.then(result => {
    if (result.errors) {
      throw result.errors
    }
    return result
  })

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const productTemplate = require.resolve('./src/templates/product.jsx')

  const result = await wrapper(
    graphql(`
      {
        allPrismicProduct {
          edges {
            node {
              uid
            }
          }
        }
      }
    `),
  )

  const productsList = result.data.allPrismicProduct.edges
  productsList.forEach(edge => {
    createPage({
      path: `${edge.node.uid}`,
      component: productTemplate,
      context: {
        uid: edge.node.uid,
      },
    })
  })
}
