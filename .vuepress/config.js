module.exports = {  
  locales: {
    '/': {
      lang: 'zh-CN'
    }
  },
  // title: '山本无忧，因雪白头',
  // description: '愿时光能缓，愿故人不散！',
  title: "摸鱼人",
  description: 'life is a fucxking movie',
  dest: 'public',
  head: [
    ['link', { rel: 'icon', href: '/logo1.png' }],
    ['meta', { name: 'viewport', content: 'width=device-width,initial-scale=1,user-scalable=no' }]
  ],
  theme: 'reco',
  themeConfig: {
    author: '山本无忧，因雪白头',
    nav: [
      { text: '主页', link: '/', icon: 'reco-home' },
      { text: '时间轴', link: '/timeline/', icon: 'reco-date' },
      { text: '工具推荐', 
        icon: 'reco-message',
        items: [
          { text: 'vuepress-reco', link: '/docs/theme-reco/' },
          { text: '正则表达式手册', link: 'https://tool.oschina.net/uploads/apidocs/jquery/regexp.html', icon: 'reco-coding' }
        ]
      },
      { text: '关于', 
        icon: 'reco-message',
        items: [
          { text: 'GitHub', link: 'https://github.com/yangli52', icon: 'reco-github' },
          { text: '码云', link: 'https://gitee.com/yang-li52', icon: 'reco-mayun' }
        ]
      }
    ],
    subSidebar: 'auto',//在所有页面中启用自动生成子侧边栏，原 sidebar 仍然兼容
    sidebar: {
      '/docs/theme-reco/': [
        // '',
        // '20211228',
        // '1111',

      ]
    },  
    type: 'blog',
    // 博客设置
    blogConfig: {
      category: {
        location: 2, // 在导航栏菜单中所占的位置，默认2
        text: '分类' // 默认 “分类”
      },
      tag: {
        location: 3, // 在导航栏菜单中所占的位置，默认3
        text: '标签' // 默认 “标签”
      }
    },
    // 友情链接
    friendLink: [
      {
        title: 'csdn',
        // logo: '',
        desc: '希望能对你有所帮助',
        email: '985049753@qq.com',
        link: 'https://blog.csdn.net/qq_42683773?spm=1001.2014.3001.5343'
      },
      {
        title: 'GitHub',
        // logo: '',
        desc: '愿时光能缓，愿故人不散！',
        avatar: "https://vuepress-theme-reco.recoluan.com/icon_vuepress_reco.png",
        link: 'https://github.com/yangli52'
      },
    ],
    // 博客自定义LOGO
    logo: '/logo1.png',
    // 搜索设置
    search: true,
    searchMaxSuggestions: 10,
    // 自动形成侧边导航
    // sidebar: 'auto',
    // 最后更新时间
    lastUpdated: '最后更新时间',
    // 作者
    author: '快乐肥仔',
    // 作者头像
    authorAvatar: '/头像.png',
    // 备案号
    record: '985049753@qq.com',
    // 项目开始时间
    startYear: '2021',
    /**
     * 密钥 (if your blog is private)
     */

    // keyPage: {
    //   keys: ['your password'],
    //   color: '#42b983',
    //   lineColor: '#42b983'
    // },

    /**
     * valine 设置 (if you need valine comment )
     */

    valineConfig: {
      appId: 'uVX1RdW5NvC6zEnfjERU7mAb-gzGzoHsz',// your appId
      appKey: 'DzzpF7cokBfNP107e5OjMKtQ', // your appKey
    }
  },
  markdown: {
    lineNumbers: true
  },
  plugins: [
    [
      //右下角猫咪 先安装在配置，npm install @vuepress-reco/vuepress-plugin-kan-ban-niang --save
      "@vuepress-reco/vuepress-plugin-kan-ban-niang",
      {
        theme: ['miku'],
        clean: false,
        modelStyle:{
          right: '90px',
          bottom: '-20px',
          opacity: '0.9'
        },
        btnStyle:{
          right: '90px',
          bottom: '40px',
        },
        messageStyle:{
          right: '68px',
          bottom: '200px'
        },
        messages: {
          welcome: '欢迎来到摸鱼人博客',
          home: '心里的花，我想要带你回家。',
          theme: '希望我们可以一起去探险！',
          close: '再见哦'
        },
        width: 140,
        height: 252
      }
    ],
    [
      //图片放大插件 先安装在配置， npm install @vuepress\plugin-medium-zoom --save
      '@vuepress\plugin-medium-zoom', {
        selector: '.page img',
        delay: 1000,
        options: {
          margin: 24,
          background: 'rgba(25,18,25,0.9)',
          scrollOffset: 40
        }
      }
    ],
    // 流程图插件
    ['flowchart'],
    // 标签加强
    ["vuepress-plugin-boxx" ],
    [
      //鼠标点击特效 先安装在配置， npm install vuepress-plugin-cursor-effects --save
      "cursor-effects",
      {
        size: 3,                    // size of the particle, default: 2
        shape: ['circle'],  // shape of the particle, default: 'star'
        zIndex: 999999999           // z-index property of the canvas, default: 999999999
      }
    ],
    // 音乐插件
    ["@vuepress-reco/vuepress-plugin-bgm-player",
      {
        audios: [
        // 网络文件示例
          {
            name: '年轮',
            artist: '张碧晨',
            url: 'https://cdn.jsdelivr.net/gh/fudalijunyi/cdn/MP3/年轮.mp3',
            cover: 'https://cdn.jsdelivr.net/gh/fudalijunyi/picture-bed/img/20200715154924.png'
          }
        ] ,
        // 是否自动播放
        autoplay:true,
        // 自动缩小
        autoShrink:true ,
        // 悬浮窗模式，吸边
        shrinkMode: 'mini' ,
        // 悬浮窗位置
        floatStyle:{ bottom: '10px', 'z-index': '999999' },
      }
    ]
    // ["vuepress-plugin-nuggets-style-copy", {
    //   copyText: "复制代码",  //vuepress复制粘贴提示插件P 先安装在配置 npm install vuepress-plugin-nuggets-style-copy --save
    //   tip: {
    //     content: "复制成功!"
    //   }
    // }],
  ]
}  
