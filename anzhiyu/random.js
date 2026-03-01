var posts=["2026/02/25/中洲往事/","2026/02/25/时间以外的往事/","2026/03/01/三种性别/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };