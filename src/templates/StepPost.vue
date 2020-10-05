<template>
  <Layout>
    <article class="Step">
    <h1 class="h2 mb-5">{{ $page.stepPost.title }}</h1>
    <VueRemarkContent />
  </article>
  </Layout>
</template>

<page-query>
  query StepPost($id: ID!) {
    stepPost(id: $id) {
      title
      tag
      createdAt
      updatedAt
      content
    }
  }
</page-query>
