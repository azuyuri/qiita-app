export default function ({ $axios }) {
  $axios.onRequest((config) => {
    if (process.env.QIITA_TOKEN) {
      // config.headers.common['Authorization'] = process.env.QIITA_TOKEN
      // ! 上記で動かなかったので以下修正
      config.headers.common['Authorization'] = `Bearer ${process.env.QIITA_TOKEN}`
    }
    return config
  })
}
