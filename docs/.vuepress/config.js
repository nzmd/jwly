module.exports = {
  lang: 'zh-CN',
  title: '戒为良药',
  description: '飞翔老师，戒为良药在线阅读，下载',
  head: [['link', { rel: 'icon', href: 'https://i.loli.net/2021/09/08/lb9vWrfQA4XL5oT.png' }]],
  // head: [['link', { rel: 'icon', href: '/favicon.ico' }]],

  themeConfig: {
    logo: 'https://vuejs.org/images/logo.png',
    repo: 'nzmd/jwly',
    sidebar: {
      // '/': ['0','1','2'],
      '/': generateArray(0,76),
    }

    //   locales: {
    //     '/': {
    //       label: 'English',
    //       selectText: 'Languages',
    //       editLinkText: 'Edit this page on GitHub',
    //       lastUpdated: 'Last Updated',
    //       nav: [{
    //           text: 'PC Web',
    //           link: '/list/',
    //         }, {
    //           text: 'Android',
    //           link: '/android/'
    //         }, {
    //           text: 'IOS',
    //           link: '/ios/'
    //         }, {
    //           text: 'HTML5',
    //           link: '/h5/'
    //         }, {
    //           text: 'ShoppingCart plug-in',
    //           link: '/cart/'
    //         }, {
    //           text: 'WechatMiniProgram',
    //           link: '/wx/'
    //         }, {
    //           text: 'Express Pay',
    //           link: '/expup/'
    //         },

    //       ],
    //       sidebar: {
    //         '/list/': ['001','002'],
    //       }
    //     },
    // },
  }
}

/**
 * 生成一个从 start 到 end 的连续数组
 * @param start
 * @param end
 */
 function generateArray (start, end) {
  let a = Array.from(new Array(end + 1).keys()).slice(start);
  var b = a.map(function (n) {
    return(n).toString();
  });
  return b;
}

// console.log(generateArray(0,76))