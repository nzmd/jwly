module.exports = {
  lang: 'zh-CN',
  title: '戒为良药',
  description: '飞翔老师，戒为良药在线阅读，下载',
  head: [['link', { rel: 'icon', href: 'https://i.loli.net/2021/09/08/lb9vWrfQA4XL5oT.png' }]],
  // head: [['link', { rel: 'icon', href: '/favicon.ico' }]],

  themeConfig: {
    logo: 'https://i.loli.net/2021/09/08/lb9vWrfQA4XL5oT.png',
    repo: 'nzmd/jwly',
    sidebar: {
      // '/': ['0','1','2'],
      '/': generateArray(0,140),
    }
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