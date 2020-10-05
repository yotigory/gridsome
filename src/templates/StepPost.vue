<template>
  <Layout>
    <article>
    <h1>{{ $page.stepPost.title }}</h1>
    <VueRemarkContent />
  </article>
  </Layout>
</template>

<page-query>
  query StepPost($id: ID!) {
    stepPost(id: $id) {
      title
      tag
      date
      content
    }
  }
</page-query>
