<template>
  <Layout>
  <article class="Blog">
    <b-jumbotron bg-variant="white" text-variant="info" border-variant="info">
    <h1>Blog</h1>
    <p>WordPressと連携してBlogをHeadlessで更新します</p>
    <hr class="my-4">
   <ul class="Boxlink">
     <li v-for="diaryPostlist in $page.diaryPostlist.edges" :key="diaryPostlist.node.id">
        <a href="#":href="'/blog/'+diaryPostlist.node.id" class="card">
          <img :src="diaryPostlist.node.thumbnail" class="card-img-top" alt="">
          <div class="card-body">
            <h2 class="card-title h5">{{ diaryPostlist.node.title }}</h2>
          </div>
       </a>
    </li>
  </ul>
  <g-image src="~/assets/img/yotigory_02.png" class="Bgimg" width="60px" alt="よちごりーのアイコン"/>
  </b-jumbotron>
  </article>
  </Layout>
</template>

<page-query>
  query {
    diaryPostlist: allDiarylist(sortBy: "createdAt", order: ASC)  {
      edges {
        node {
          id
          title
          date (format: "YYYY年M月D日")
          thumbnail
        }
      }
    },
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
      title: 'Blog' + ' | ' + this.$static.metadata.siteName,
      meta: [
        {
          key: 'description',
          name: 'description',
          content: 'WordPressと連携してBlogをHeadlessで更新します'
          },
        {
          key: 'og:url',
          property: 'og:url',
          content: this.$static.metadata.pageUrl+'/blog/',
        },
        {
          key: 'og:title',
          property: 'og:title',
          content: 'Blog'+ ' | ' + this.$static.metadata.siteName,
        },
        {
          key: 'og:description',
          property: 'og:description',
          content: 'WordPressと連携してBlogをHeadlessで更新します',
        },
      ]
    }
  }
}
</script>

<style>
.Blog .jumbotron{
  position: relative;
  border-radius: 0;
}
.Blog .jumbotron.border-info{
  border-color: #DFDFD7!important;;
}
.Blog .jumbotron::after{
  position: absolute;
  content: "";
  top:7px;
  left:7px;
  right: -7px;
  bottom: -7px;
  background-color: #DFDFD7;
  z-index: -99;
}

</style>
