// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: 'Gridsomeでいこう！',
  metadata: {
    siteName: 'Gridsomeでいこう！',
    siteUrl: 'https://quirky-noyce-a7e03d.netlify.app/',
    siteDescription: 'かなり思い付きで立ち上げましたが、時代はJamstackへ…という流れも感じつつ。軽いノリで「Gridsome」やってみっか！というスタンスで始めています。',
    pageUrl: 'index.html',
    pageTitle: 'Gridsomeでいこう！',
    siteOgImage: 'og.png',
    siteOgType: 'article',
  },
  plugins: [
    {
      use: '@gridsome/vue-remark',
      options: {
        typeName: 'StepPost', // 必須。GraphQL上で扱う型定義
        baseDir: './content/step', // 記事となるmarkdownファイルを置くディレクトリ
        pathPrefix: '/step', // URLになるパス。必須ではない。
        template: './src/templates/StepPost.vue' // 記事ページのVueコンポーネントファイルの指定
      }
    }
  ],
}
