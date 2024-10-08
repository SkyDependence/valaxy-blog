import { defineSiteConfig } from 'valaxy'


export default defineSiteConfig({
  mode: 'light',
  lang: 'zh-CN',
  languages: ['zh-CN', 'en'],
  timezone: 'Asia/Shanghai',

  frontmatter: {
    time_warning: 2592000000,
  },
  /**
   * 开启阅读统计
   */
  statistics: {
    enable: true,
    readTime: {
      /**
       * 阅读速度
       */
      speed: {
        cn: 300,
        en: 200,
      },
    },
  },
  url: 'https://skydevs.link/',
  title: 'skydev的小站',
  subtitle: 'Ciallo~(∠・ω< )',
  description: 'skydev的小世界',
  author: {
    name: 'skydev',
    avatar: 'https://raw.githubusercontent.com/SkyDependence/valaxy-blog/main/images/avatar.jpg',
    status: {
      /**
       * Emoji representation of your status like '👨‍💻'
       * @description 你的状态的 Emoji 表示，如 '👨‍💻'
       */
      emoji: '🌓',
      /**
       * show when hover emoji
       * @description 当鼠标悬浮在图标上时显示
       */
      message: 'Per aspera ad astra',
    }    
  },
  /**
   * show last updated time by git/mtime
   */
  lastUpdated: false,
  favicon: 'https://raw.githubusercontent.com/SkyDependence/valaxy-blog/main/images/icon.png',
  social: [
    {
      name: 'RSS',
      link: '/atom.xml',
      icon: 'i-ri-rss-line',
      color: 'orange',
    },
    /*{
      name: 'QQ 群 1050458482',
      link: 'https://qm.qq.com/cgi-bin/qm/qr?k=kZJzggTTCf4SpvEQ8lXWoi5ZjhAx0ILZ&jump_from=webapi',
      icon: 'i-ri-qq-line',
      color: '#12B7F5',
    },*/
    {
      name: 'GitHub',
      link: 'https://github.com/SkyDependence',
      icon: 'i-ri-github-line',
      color: '#6e5494',
    },
    /*{
      name: '微博',
      link: 'https://weibo.com/jizhideyunyoujun',
      icon: 'i-ri-weibo-line',
      color: '#E6162D',
    },*/
    /*{
      name: '豆瓣',
      link: 'https://www.douban.com/people/yunyoujun/',
      icon: 'i-ri-douban-line',
      color: '#007722',
    },*/
    /*{
      name: '网易云音乐',
      link: 'https://music.163.com/#/user/home?id=247102977',
      icon: 'i-ri-netease-cloud-music-line',
      color: '#C20C0C',
    },*/
    /*{
      name: '知乎',
      link: 'https://www.zhihu.com/people/yunyoujun/',
      icon: 'i-ri-zhihu-line',
      color: '#0084FF',
    },*/
    {
      name: '哔哩哔哩',
      link: 'https://space.bilibili.com/183441266',
      icon: 'i-ri-bilibili-line',
      color: '#FF8EB3',
    },
    /*/*{
      name: '微信公众号',
      link: 'https://cdn.yunyoujun.cn/img/about/white-qrcode-and-search.jpg',
      icon: 'i-ri-wechat-2-line',
      color: '#1AAD19',
    },*/
    /*{
      name: 'Twitter',
      link: 'https://twitter.com/YunYouJun',
      icon: 'i-ri-twitter-line',
      color: '#1da1f2',
    },*/
    /*{
      name: 'Telegram Channel',
      link: 'https://t.me/elpsycn',
      icon: 'i-ri-telegram-line',
      color: '#0088CC',
    },*/
    /*{
      name: 'E-Mail',
      link: 'mailto:me@yunyoujun.cn',
      icon: 'i-ri-mail-line',
      color: '#8E71C1',
    },*/
    /*/*{
      name: 'Travelling',
      link: 'https://www.travellings.cn/go.html',
      icon: 'i-ri-train-line',
      color: 'var(--va-c-text)',
    },*/
  ],

  search: {
    enable: false,
    type: 'fuse',
  },
  

  sponsor: {
    enable: true,
    title: '我很可爱，请给我钱！',
    methods: [
      {
        name: '支付宝',
        url: 'https://raw.githubusercontent.com/SkyDependence/valaxy-blog/main/images/alipay.jpg',
        color: '#00A3EE',
        icon: 'i-ri-alipay-line',
      },
      /*
      {
        name: 'QQ 支付',
        url: 'https://cdn.yunyoujun.cn/img/donate/qqpay-qrcode.png',
        color: '#12B7F5',
        icon: 'i-ri-qq-line',
      },
      */
      {
        name: '微信支付',
        url: 'https://raw.githubusercontent.com/SkyDependence/valaxy-blog/main/images/wechatpay.png',
        color: '#2DC100',
        icon: 'i-ri-wechat-pay-line',
      },
    ],
  },
})
