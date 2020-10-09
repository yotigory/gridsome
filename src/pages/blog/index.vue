<template>
  <Layout>
    <h1>Blog</h1>
    <p>ここにWordPressと連携してBlogをHeadlessで更新する！の予定</p>
  </Layout>
</template>

<static-query>
query {
  metadata {
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
          content: 'ここにWordPressと連携してBlogをHeadlessで更新する！の予定'
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
          content: 'ここにWordPressと連携してBlogをHeadlessで更新する！の予定',
        },
      ]
    }
  }
}
</script>
