<template>
  <Layout>
  <article class="Step">
    <b-jumbotron bg-variant="white" text-variant="info" border-variant="info">
    <h1>Gridsomeについて</h1>
    <p>このサイトができるまでの道のり</p>
    <hr class="my-4">
      <ul>
    <li class="mb-3" v-for="steplist in $page.steplist.edges" :key="steplist.id">{{steplist.node.createdAt}}<br><a :href="steplist.node.path">{{ steplist.node.title }}</a></li>
  </ul>
  <g-image src="~/assets/img/yotigory_02.png" class="Bgimg" width="60px" alt="よちごりーのアイコン"/>
  </b-jumbotron>
  </article>
  </Layout>
</template>

<page-query>
  query {
    steplist: allStepPost(sortBy: "createdAt", order: ASC)  {
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
      title: 'このサイトができるまでの道のり' + ' | ' + this.$static.metadata.siteName,
      meta: [
        {
          key: 'description',
          name: 'description',
          content: 'このサイトができるまでの道のりの記事のリストページです。軽いノリで「Gridsome」やってみっか！というスタンスで始めています。',
          },
        {
          key: 'og:url',
          property: 'og:url',
          content: this.$static.metadata.pageUrl+'/step/',
        },
        {
          key: 'og:title',
          property: 'og:title',
          content: 'このサイトができるまでの道のり'+ ' | ' + this.$static.metadata.siteName,
        },
        {
          key: 'og:description',
          property: 'og:description',
          content: 'このサイトができるまでの道のりの記事のリストページです。軽いノリで「Gridsome」やってみっか！というスタンスで始めています。',
        },
      ]
    }
  }
}
</script>

<style>
.Step .jumbotron{
  position: relative;
  border-radius: 0;
}
.Step .jumbotron.border-info{
  border-color: #887E89!important;
}
.Step .jumbotron::after{
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
