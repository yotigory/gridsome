<template>
  <router-view />
</template>

<static-query>
query {
  metadata {
    siteName
    siteDescription
    pageUrl
    pageTitle
    siteOgImage
    siteOgType
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
          content: this.$static.metadata.siteDescription
          },
        {
          key: 'og:site_name',
          property: 'og:site_name',
          content: this.$static.metadata.siteName,
        },
        {
          key: 'og:url',
          property: 'og:url',
          content: this.$static.metadata.pageUrl,
        },
        {
          key: 'og:title',
          property: 'og:title',
          content: this.$static.metadata.pageTitle,
        },
        {
          key: 'og:description',
          property: 'og:description',
          content: this.$static.metadata.siteDescription,
        },
        {
          key: 'og:image',
          property: 'og:image',
          content: this.$static.metadata.siteOgImage,
        },
        {
          key: 'og:type',
          property: 'og:type',
          content: this.$static.metadata.siteOgType,
        },
        {
          name: 'twitter:card',
          content: 'summary',
        },
      ]
    }
  }
}
</script>
