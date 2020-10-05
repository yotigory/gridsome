// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: 'Gridsomeでやってみよう！',
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
