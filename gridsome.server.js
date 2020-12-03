// Server API makes it possible to hook into various parts of Gridsome
// on server-side and add custom data to the GraphQL data layer.
// Learn more: https://gridsome.org/docs/server-api/

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

const axios = require('axios')

module.exports = function (api) {
  api.loadSource(async actions => {
    const { data } = await axios.get('https://gridsome.work/wp-json/wp/v2/diary?_embed')

    const collection = actions.addCollection('Diarylist')

    for (const item of data) {
      collection.addNode({
        id: item.id,
        title: item.title.rendered,
        date: item.date,
        thumbnail: item._embedded['wp:featuredmedia'][0].source_url
      })
    }
  })
}
