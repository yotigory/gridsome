<template>
  <Layout>
  <article class="Shopify">
    <b-jumbotron bg-variant="white" text-variant="info" border-variant="info">
    <h1>Shopifyについて</h1>
    <p>調べたことやったことを忘れないようにメモっときます。</p>
    <hr class="my-4">
      <ul>
    <li class="mb-3" v-for="shopifylist in $page.shopifylist.edges" :key="shopifylist.id">{{shopifylist.node.createdAt}}<br><a :href="shopifylist.node.path">{{ shopifylist.node.title }}</a></li>
  </ul>
  <g-image src="~/assets/img/yotigory_02.png" class="Bgimg" width="60px" alt="よちごりーのアイコン"/>
  </b-jumbotron>
  </article>
  </Layout>
</template>

<page-query>
  query {
    shopifylist: allShopifyPost(sortBy: "createdAt", order: ASC)  {
      edges {
        node {
          id
          title
          path
          createdAt (format: "YYYY年M月D日")
        }
      }
    },
  metadata {
    siteName
    pageUrl
  }
  }
</page-query>

<static-query>
query {
  metadata {
    siteName
    pageUrl
  }
}
</static-query>

<script>
export default {
  metaInfo() {
    return {
      title: 'Shopifyについて' + ' | ' + this.$static.metadata.siteName,
      meta: [
        {
          key: 'description',
          name: 'description',
          content: 'Shopifyについて、調べたことやったことを忘れないようにメモっときます。',
          },
        {
          key: 'og:url',
          property: 'og:url',
          content: this.$static.metadata.pageUrl+'/shopify/',
        },
        {
          key: 'og:title',
          property: 'og:title',
          content: 'Shopifyについて'+ ' | ' + this.$static.metadata.siteName,
        },
        {
          key: 'og:description',
          property: 'og:description',
          content: 'Shopifyについて、調べたことやったことを忘れないようにメモっときます。',
        },
      ]
    }
  }
}
</script>

<style>
.Shopify .jumbotron{
  position: relative;
  border-radius: 0;
}
.Shopify .jumbotron.border-info{
  border-color: #887E89!important;
}
.Shopify .jumbotron::after{
  position: absolute;
  content: "";
  top:7px;
  left:7px;
  right: -7px;
  bottom: -7px;
  background-color: #887E89;
  z-index: -99;
}

</style>
