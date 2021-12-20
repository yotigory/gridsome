<template>
  <Layout>
  <article class="About">
    <b-jumbotron bg-variant="white" text-variant="info" border-variant="info">
    <h1>わたしについて</h1>
    <hr class="my-4">
    <g-image src="~/assets/img/yotigory_01.png" width="200" class="mx-auto d-block  mt-5 mb-5" alt="よちごりーのアイコン"/>
    <p>Web制作会社でHTML,CSS,JS,PHP,WordPress…いろいろやってますw。最近はReact楽しいですね～<br>とはいえまだまだわからないことが多いです (;^_^A</p>
    <p>テクノ図工部、カメラとお散歩部、チェアリング部。<br>趣味は睡眠。みんなでワイワイ飲んだりするのが好きです♪</p>
    <p>気分でフラリとおでかけします。</p>
    <p><a class="btn btn-outline-info mr-3" href="https://www.facebook.com/yoshiko.sarakai">Facebook</a>
    <a class="btn btn-outline-info mr-3" href="https://twitter.com/yotigory">Twitter</a><a class="btn btn-outline-info" href="https://www.instagram.com/yotigory_/">Instagram</a></p>
    <p><a class="btn btn-outline-info btn-sm mr-3" href="https://www.tekunozukoubu.net/">テクノ図工部</a>
    <a class="btn btn-outline-info btn-sm mr-3" href="https://codingmania.net/">CodingMania</a>
    <a class="btn btn-outline-info btn-sm" href="https://sentimental.space/">ポエミーサイト</a></p>
  </b-jumbotron>
    </article>
  </Layout>
</template>

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
      title: 'わたしについて' + ' | ' + this.$static.metadata.siteName,
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
          content: 'わたしについて'+ ' | ' + this.$static.metadata.siteName,
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

<style>
.About .jumbotron{
  position: relative;
  border-radius: 0;
}
.About .jumbotron.border-info{
  border-color: #BE8F05!important;;
}
.About .jumbotron::after{
  position: absolute;
  content: "";
  top:7px;
  left:7px;
  right: -7px;
  bottom: -7px;
  background-color: #BE8F05;
  z-index: -99;
}
.About .btn-outline-info {
  color: #BE8F05;
  border-color: #BE8F05;
}
.About .btn-outline-info:not(:disabled):not(.disabled):active,
.About .btn-outline-info:not(:disabled):not(.disabled).active,
.About .show > .btn-outline-info.dropdown-toggle {
  background-color: #BE8F05;
  border-color: #BE8F05;
}
.About .btn-outline-info:hover {
  color: #fff;
  background-color: #BE8F05;
}
</style>
