<template>
  <Layout>
  <article>

  <b-jumbotron bg-variant="white" text-variant="info" border-variant="info">
    <h1>このサイトについて</h1>
    <p>
      かなり思い付きで立ち上げましたが、時代はJamstackへ…という流れも感じつつ。<br>軽いノリで「Gridsome」やってみっか！というスタンスで始めています。
    </p>
    <hr class="my-4">
    <p>
      NetliyとGithubを連携してまずは公開は出来たので、<br>次のゴールはWordPressと連携してBlogをHeadlessで更新する！です。
    </p>
    <b-button variant="info" href="https://github.com/yotigory/gridsome">Github</b-button>
  </b-jumbotron>


    <h2 class="h3 mt-5 mb-3">頼るべきはやはり公式サイト</h2>
    <p>英語とはいえ本当に見やすいしわかりやす～</p>
    <p><a class="btn btn-outline-info mr-3" href="https://gridsome.org/">A Jamstack framework for Vue.js</a></p>
    <p><a class="btn btn-outline-info mr-3" href="https://bootstrap-vue.org/">BootstrapVue</a></p>
    <p><a class="btn btn-outline-info mr-3" href="https://getbootstrap.com/">Bootstrap</a></p>
    <h3 class="h4 mt-5 mb-3">Special Thanks なサイト</h3>
    <p>日本語がやっぱり最高っていうのもあるけど、お世話になった参考サイト</p>
    <ul>
    <li class="mb-2"><a  href="https://megane-blog.com/2020/04/26/2842/">WordPress+Gridsome+Netlifyを組み合わせたJAMStackにて静的に出力することを試みした。 - megane9988のブログ</a></li>
    <li class="mb-2"><a href="https://blog.nakamu.life/posts/gridsome-starter">Gridsomeを利用して簡単なサイトを作成しよう </a></li>
    <li class="mb-2"><a href="https://blog.solunita.net/posts/develop-blog-by-gridsome-from-scrach-by-markdown/">Gridsomeでイチからブログを作る - Markdownファイルで記事を作る</a></li>
    </ul>
    </article>
  </Layout>
</template>




<script>
export default {
  metaInfo() {
    return {
      meta: [
        {
          key: 'og:type',
          property: 'og:type',
          content: 'website',
        },
      ]
    }
  }
}
</script>
