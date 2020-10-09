<template>
  <Layout>
  <article>
    <b-jumbotron bg-variant="white" text-variant="info" border-variant="info">
    <h1>わたしについて</h1>
    <hr class="my-4">
    <g-image src="~/assets/img/yotigory.png" width="150" class="img-thumbnail mb-2" alt="よちごりーのアイコン"/>
    <p>Web制作会社でHTML,CSS,JSやってます。最近はVue.js楽しいですね～<br>とはいえまだまだわからないことが多いです (;^_^A</p>
    <p>テクノ図工部、カメラとお散歩部、チェアリング部。<br>趣味は睡眠。みんなでワイワイ飲んだりするのが好きです♪</p>
    <p>気分でフラリとおでかけします。</p>
    <p><a class="btn btn-outline-info mr-3" href="https://www.facebook.com/yoshiko.sarakai">Facebook</a>
    <a class="btn btn-outline-info" href="https://twitter.com/yotigory">Twitter</a></p>
  </b-jumbotron>
    </article>
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
          content: 'このサイト「Gridsomeでいこう！」を制作している私についてのページです。',
          },
        {
          key: 'og:url',
          property: 'og:url',
          content: this.$static.metadata.pageUrl+'/about/',
        },
        {
          key: 'og:title',
          property: 'og:title',
          content: 'わたしについて',
        },
        {
          key: 'og:description',
          property: 'og:description',
          content: 'このサイト「Gridsomeでいこう！」を制作している私についてのページです。',
        },
      ]
    }
  }
}
</script>
