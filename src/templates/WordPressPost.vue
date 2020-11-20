<template>
  <Layout>
    <article class="WpPost">
    <h1 class="h2 mb-3 text-info">{{ $page.wordPressPost.title }}</h1>
    <div class="border-top border-bottom border-info pt-2 pr-2">
    <p class="h6 text-right">投稿日：{{ $page.wordPressPost.date }}</p>
    </div>
   <div class="WpPost__article" v-html="$page.wordPressPost.content" />
  <p class="d-flex align-items-center justify-content-center"><b-icon-arrow-up-circle-fill font-scale="2" class="mr-2"></b-icon-arrow-up-circle-fill font-scale="2"><a href="/blog/">目次ページに戻る</a></p>
  </article>
  </Layout>
</template>

<page-query>
query WordPressPost ($id: ID!) {
  wordPressPost(id: $id) {
    title
    date (format: "YYYY年M月D日")
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
      meta: [
        {
          key: 'description',
          name: 'description',
          content: this.$page.wordPressPost.title+'の記事ページです。軽いノリで「Gridsome」やってみっか！というスタンスで始めています。',
          },
        {
          key: 'og:url',
          property: 'og:url',
          content: this.$static.metadata.pageUrl+this.$page.wordPressPost.path,
        },
        {
          key: 'og:title',
          property: 'og:title',
          content: this.$page.wordPressPost.title + ' | ' + this.$static.metadata.siteName,
        },
        {
          key: 'og:description',
          property: 'og:description',
          content: this.$page.wordPressPost.title+'の記事ページです。軽いノリで「Gridsome」やってみっか！というスタンスで始めています。',
        },
      ]
    }
  }
}
</script>
