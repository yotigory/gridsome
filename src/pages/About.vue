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

<script>
export default {
  metadata: {
    siteDescription: 'このサイト「Gridsomeでいこう！」を制作した私の紹介ページ',
    pageUrl: '/about/index.html',
    pageTitle: 'わたしについて',
  },
}
</script>
