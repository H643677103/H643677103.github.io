var posts=["posts/f96a143d.html","posts/62bbbb78.html","posts/75d1f4f5.html","posts/81dca98f.html","posts/db88f376.html","posts/d50a.html","posts/75882a6b.html","posts/70e6f39c.html","posts/ef3414ee.html"];function toRandomPost(){pjax.loadUrl("/"+posts[Math.floor(Math.random()*posts.length)])}