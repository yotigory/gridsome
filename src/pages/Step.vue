<template>
  <Layout>
  <article>
    <b-jumbotron bg-variant="white" text-variant="info" border-variant="info">
    <h1>このサイトができるまでの道のり</h1>
    <hr class="my-4">
      <ul>
    <li class="mb-3" v-for="steplist in $page.steplist.edges" :key="steplist.id">{{steplist.node.updatedAt}}<br><a :href="steplist.node.path">{{ steplist.node.title }}</a></li>
  </ul>
  </b-jumbotron>
  </article>
  </Layout>
</template>

<page-query>
  query {
    steplist: allStepPost(sortBy: "updatedAt", order: ASC)  {
      edges {
        node {
          id
          title
          path
          updatedAt (format: "YYYY年M月D日")
        }
      }
    },
  metadata {
    siteName
    pageUrl
  }
  }
</page-query>

<script>
export default {
  metadata: {
    pageDescription: 'このサイトができるまでの道のりの記事のリストページです。軽いノリで「Gridsome」やってみっか！というスタンスで始めています。',
    pageUrl: '/step/index.html',
    pageTitle: 'このサイトができるまでの道のり',
  },
  metaInfo() {
    return {
      meta: [
        {
          key: 'description',
          name: 'description',
          content: this.$page.metadata.pageDescription,
          },
        {
          key: 'og:url',
          property: 'og:url',
          content: this.$static.metadata.pageUrl+'this.$page.metadata.pageUrl',
        },
        {
          key: 'og:title',
          property: 'og:title',
          content: this.$page.metadata.pageTitle + ' | ' + this.$static.metadata.siteName,
        },
        {
          key: 'og:description',
          property: 'og:description',
          content: this.$page.metadata.pageDescription,
        },
      ]
    }
  }
}
</script>
