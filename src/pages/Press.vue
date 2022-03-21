<template>
  <Layout>
  <article class="Press">
    <b-jumbotron bg-variant="white" text-variant="info" border-variant="info">
    <h1>WordPress について</h1>
    <p>調べたことやったことを忘れないようにメモっときます。</p>
    <hr class="my-4">
      <ul>
    <li class="mb-3" v-for="presslist in $page.presslist.edges" :key="presslist.id">{{presslist.node.createdAt}}<br><a :href="presslist.node.path">{{ presslist.node.title }}</a></li>
  </ul>
  <g-image src="~/assets/img/yotigory_02.png" class="Bgimg" width="60px" alt="よちごりーのアイコン"/>
  </b-jumbotron>
  </article>
  </Layout>
</template>

<page-query>
  query {
    presslist: allPressPost(sortBy: "createdAt", order: DESC)  {
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
      title: 'WordPressについて' + ' | ' + this.$static.metadata.siteName,
      meta: [
        {
          key: 'description',
          name: 'description',
          content: 'WordPressについて、調べたことやったことを忘れないようにメモっときます。',
          },
        {
          key: 'og:url',
          property: 'og:url',
          content: this.$static.metadata.pageUrl+'/react/',
        },
        {
          key: 'og:title',
          property: 'og:title',
          content: 'WordPressについて'+ ' | ' + this.$static.metadata.siteName,
        },
        {
          key: 'og:description',
          property: 'og:description',
          content: 'WordPressについて、調べたことやったことを忘れないようにメモっときます。',
        },
      ]
    }
  }
}
</script>

<style>
.Press .jumbotron{
  position: relative;
  border-radius: 0;
}
.Press .jumbotron.border-info{
  border-color: #887E89!important;
}
.Press .jumbotron::after{
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
