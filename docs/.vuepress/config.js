module.exports = {
  lang: 'zh-CN',
  title: '戒为良药',
  description: '飞翔老师，戒为良药在线阅读，下载',
  head: [['link', { rel: 'icon', href: 'https://i.loli.net/2021/09/08/lb9vWrfQA4XL5oT.png' }]],
  // head: [['link', { rel: 'icon', href: '/favicon.ico' }]],

  themeConfig: {
    logo: 'https://i.loli.net/2021/09/08/lb9vWrfQA4XL5oT.png',
    repo: 'nzmd/jwly',
    sidebar: [
      {
        title: '0-10季',   // 必要的
        // path: '/foo/',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
        collapsable: true, // 可选的, 默认值是 true,
        sidebarDepth: 3,    // 可选的, 默认值是 1
        children: generateArray(0,10),
      },
      {
        title: '11-20季',   
        collapsable: true,
        sidebarDepth: 3,   
        children: generateArray(11,20),
      },
      {
        title: '21-30季',   
        collapsable: true,
        sidebarDepth: 3,   
        children: generateArray(21,30),
      },
      {
        title: '31-40季',   
        collapsable: true,
        sidebarDepth: 3,   
        children: generateArray(31,40),
      },
      {
        title: '41-50季',   
        collapsable: true,
        sidebarDepth: 3,   
        children: generateArray(41,50),
      },
      {
        title: '51-60季',   
        collapsable: true,
        sidebarDepth: 3,   
        children: generateArray(51,60),
      },
      {
        title: '61-70季',   
        collapsable: true,
        sidebarDepth: 3,   
        children: generateArray(61,70),
      },
      {
        title: '71-80季',   
        collapsable: true,
        sidebarDepth: 3,   
        children: generateArray(71,80),
      },
      {
        title: '81-90季',   
        collapsable: true,
        sidebarDepth: 3,   
        children: generateArray(81,90),
      },
      {
        title: '91-100季',   
        collapsable: true,
        sidebarDepth: 3,   
        children: generateArray(91,100),
      },
      {
        title: '101-110季',   
        collapsable: true,
        sidebarDepth: 3,   
        children: generateArray(101,110),
      },
      {
        title: '111-120季',   
        collapsable: true,
        sidebarDepth: 3,   
        children: generateArray(111,120),
      },
      {
        title: '121-130季',   
        collapsable: true,
        sidebarDepth: 3,   
        children: generateArray(121,130),
      },
      {
        title: '131-140季',   
        collapsable: true,
        sidebarDepth: 3,   
        children: generateArray(131,140),
      }
    ]
    // sidebar: {
    //   // '/': ['0','1','2'],
    //   '/': generateArray(0,140),
    // }
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

function generateFlieName (start, end) {
  let a = generateArray(start,end);
  var b = a.map(function (n) {
    return n+".md";
  });
  var s = ''
  for (var i = 0; i < b.length; i++) {
    s = s + ' ' + b[i]
  }
  return s;
}

console.log(generateFlieName(0,140))