/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

const axios = require("axios")
const crypto = require("crypto")

exports.sourceNodes = async ({ actions }) => {
    const { createNode } = actions

    // fetch raw data from the Students api
    const fetchNews = () =>
        axios.get(`https://coronadatasource.herokuapp.com/api/news`)

    // await for results
    const res = await fetchNews()

    // map into these results and create nodes
    res.data.data.map((newsItem, i) => {
        // Create your node object
        const newsNode = {
            // Required fields
            id: `${i - 1}`,
            parent: `__SOURCE__`,
            internal: {
                type: `News`, // name of the graphQL query --> allStudents {}
                // contentDigest will be added just after
                // but it is required
            },
            children: [],

            // Other fields that you want to query with graphQl

            link: newsItem.link,
            published: newsItem.published,
            title: newsItem.title,
            summary: newsItem.summary,

            // etc...
        }

        // Get content digest of node. (Required field)
        const contentDigest = crypto
            .createHash(`md5`)
            .update(JSON.stringify(newsNode))
            .digest(`hex`)
        // add it to studentNode
        newsNode.internal.contentDigest = contentDigest

        // Create node with the gatsby createNode() API
        createNode(newsNode)
    })









    const fetchWordCloud = () =>
        axios.get(`https://coronadatasource.herokuapp.com/api/wordcloudimage`)

    // await for results
    const wordRes = await fetchWordCloud()

    // map into these results and create nodes

    // Create your node object
    const imageNode = {
        // Required fields
        id: `${0}`,
        parent: `__SOURCE__`,
        internal: {
            type: `WordCloud`, // name of the graphQL query --> allStudents {}
            // contentDigest will be added just after
            // but it is required
        },
        children: [],

        // Other fields that you want to query with graphQl
        link: wordRes.data.data


        // etc...
    }

    // Get content digest of node. (Required field)
    let contentDigest = crypto
        .createHash(`md5`)
        .update(JSON.stringify(imageNode))
        .digest(`hex`)
    // add it to studentNode
    imageNode.internal.contentDigest = contentDigest

    // Create node with the gatsby createNode() API
    createNode(imageNode)









    const fetchNcdc = () =>
        axios.get(`https://coronadatasource.herokuapp.com/api/ncdc`)

    // await for results
    const ncdcRes = await fetchNcdc()

    // map into these results and create nodes



    // Create your node object
    const ncdcNode = {
        // Required fields
        id: `${1}`,
        parent: `__SOURCE__`,
        internal: {
            type: `Ncdc`, // name of the graphQL query --> allStudents {}
            // contentDigest will be added just after
            // but it is required
        },
        children: [],

        // Other fields that you want to query with graphQl
        ncdc: JSON.parse(ncdcRes.data.data)


        // etc...
    }

    // Get content digest of node. (Required field)
    contentDigest = crypto
        .createHash(`md5`)
        .update(JSON.stringify(ncdcNode))
        .digest(`hex`)
    // add it to studentNode
    ncdcNode.internal.contentDigest = contentDigest

    // Create node with the gatsby createNode() API
    createNode(ncdcNode)







    return
}


// You can delete this file if you're not using it

// const path = require("path")
// exports.createPages = ({ actions, graphql }) => {
//     const { createPage } = actions
//     const postTemplate = path.resolve("src/templates/blog-posts.js")
//     return graphql(`
//     {
//       allMarkdownRemark {
//         edges {
//           node {
//             html
//             id
//             frontmatter {
//               path
//               title
//               date
//               author
//             }
//           }
//         }
//       }
//     }
//   `).then(res => {
//         if (res.errors) {
//             return Promise.reject(res.errors)
//         }
//         res.data.allMarkdownRemark.edges.forEach(({ node }) => {
//             console.log(node.frontmatter.path)
//             createPage({
//                 path: node.frontmatter.path,
//                 component: postTemplate,
//             })
//         })
//     })
// }
// You can delete this file if you're not using it
