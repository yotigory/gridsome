<template>
  <Layout>
    <article class="ReactPost">
    <h1 class="h2 mb-3 text-info">{{ $page.reactPost.title }}</h1>
    <div class="border-top border-bottom border-info pt-2 pr-2">
    <p class="h6 text-right">投稿日：{{ $page.reactPost.createdAt }}</p>
    <p class="h6 text-right">更新日：{{ $page.reactPost.updatedAt }}</p>
    </div>
    <VueRemarkContent />
  <div class="row mt-5">
    <div class="col">
      <p v-if="$page.reactPost.prevpage !== 0" class="d-flex align-items-center"><b-icon-arrow-left-circle-fill font-scale="2" class="mr-2"></b-icon-arrow-left-circle-fill font-scale="2"><a :href="'/react/'+ $page.reactPost.prevpage + '/'">前のページへ</a></p>
    </div>
    <div class="col">
      <p v-if="$page.reactPost.nextpage !== 0" class="d-flex align-items-center justify-content-end"><a :href="'/react/'+ $page.reactPost.nextpage + '/'">次のページへ</a><b-icon-arrow-right-circle-fill font-scale="2" class="ml-2"></b-icon-arrow-right-circle-fill font-scale="2"></p>
    </div>
  </div>
  <p class="d-flex align-items-center justify-content-center"><b-icon-arrow-up-circle-fill font-scale="2" class="mr-2"></b-icon-arrow-up-circle-fill font-scale="2"><a href="/react/">目次ページに戻る</a></p>
  </article>
  </Layout>
</template>

<page-query>
  query ReactPost($id: ID!) {
    reactPost(id: $id) {
      title
      path
      tag
      createdAt (format: "YYYY年M月D日")
      updatedAt (format: "YYYY年M月D日")
      nextpage
      prevpage
      content
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
      title: this.$page.reactPost.title + ' | ' + this.$static.metadata.siteName,
      meta: [
        {
          key: 'description',
          name: 'description',
          content: this.$page.reactPost.title+'の記事ページです。 | React・JavaScript | 軽いノリで「Gridsome」やってみっか！というスタンスで始めています。',
          },
        {
          key: 'og:url',
          property: 'og:url',
          content: this.$static.metadata.pageUrl+this.$page.reactPost.path,
        },
        {
          key: 'og:title',
          property: 'og:title',
          content: this.$page.reactPost.title + ' | React・JavaScript | ' + this.$static.metadata.siteName,
        },
        {
          key: 'og:description',
          property: 'og:description',
          content: this.$page.reactPost.title+'の記事ページです。 | React・JavaScript | 軽いノリで「Gridsome」やってみっか！というスタンスで始めています。',
        },
      ]
    }
  }
}
</script>

<style>
.ReactPost h2{
  margin: 2em 0 1em 0;
  font-size: 1.75rem;
}
.ReactPost h3{
  margin: 1.5em 0 1em 0;
  font-size: 1.5rem;
}
.ReactPost h4{
  margin: 1.5em 0 1em 0;
  font-size: 1.3rem;
}
.ReactPost strong{
  font-weight: normal;
  color: #dc3545 !important
}
.ReactPost pre{
  background-color: #000;
  border-radius: 4px;
  padding: 5px 10px;
  color: #FFF;
}
.ReactPost blockquote{
  padding: 10px 10px 5px 15px;
  border-left: solid 5px #887E89 ;
  background-color:#DFDFD7;
}
.bi-arrow-left-circle-fill,
.bi-arrow-right-circle-fill,
.bi-arrow-up-circle-fill {
  color:#BE8F05;
}
</style>
