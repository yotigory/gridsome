<template>
  <Layout>
    <article class="Step">
    <h1 class="h2 mb-3 text-info">{{ $page.stepPost.title }}</h1>
    <div class="border-top border-bottom border-info pt-2 pr-2">
    <p class="h6 text-right">投稿日：{{ $page.stepPost.createdAt }}</p>
    <p class="h6 text-right">更新日：{{ $page.stepPost.updatedAt }}</p>
    </div>
    <VueRemarkContent />
  </article>
  </Layout>
</template>

<page-query>
  query StepPost($id: ID!) {
    stepPost(id: $id) {
      title
      tag
      createdAt (format: "YYYY年M月D日")
      updatedAt (format: "YYYY年M月D日")
      content
    }
  }
</page-query>
