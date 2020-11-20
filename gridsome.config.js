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
    siteOgImage: 'https://quirky-noyce-a7e03d.netlify.app/og.png',
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
    },
    {
      use: '@gridsome/plugin-google-analytics',
      options: {
        id: 'UA-180466873-1'
      }
    },
    {
      use: '@gridsome/source-wordpress',
      options: {
        baseUrl: 'http://gogogridsome.backdrop.jp/', // url
        apiBase: 'wp-json',
        typeName: 'WordPress',
        perPage: 10,
        concurrent: 1,
        customEndpoints: [
          {
              typeName: "DiaryPost", //カスタム投稿タイプ用
              route: "/wp/v2/diary", //カスタム投稿タイプ用のURL
              normalize: true,
          },
      ]
      }
    }
  ],
  templates: {
    WordPressPost: "/wp/:id/", //出力するURLの指定
    DiaryPost: "/blog/:id/" //出力するURLの指定
  },
}
