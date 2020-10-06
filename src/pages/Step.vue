<template>
  <Layout>
  <article>
  <h1 class="h2 mb-5">このサイトができるまでの道のり</h1>

<ul>
  <li class="mb-3" v-for="steplist in $page.steplist.edges" :key="steplist.id"><a :href="steplist.node.path">{{ steplist.node.title }}</a></li>
</ul>

</article>
  </Layout>
</template>

<script>
export default {
  metaInfo: {
    title: 'このサイトができるまでの道のり'
  },
}
</script>

<page-query>
  query {
    steplist: allStepPost {
      edges {
        node {
          id
          title
          path
        }
      }
    }
  }
</page-query>
