var posts=["posts/f96a143d.html","posts/81dca98f.html","posts/62bbbb78.html","posts/db88f376.html","posts/d50a.html","posts/401e296e.html","posts/75882a6b.html","posts/70e6f39c.html","posts/ef3414ee.html"];function toRandomPost(){pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);};var friend_link_list=[{"name":"CHYT","link":"https://blog.chyt.top/","avatar":"https://p.chyt.top/avatar.jpg!cover","descr":"生活万物，唯爱小婷","siteshot":"https://p.chyt.top/siteshot.png","color":"vip","tag":"生活"},{"name":"安知鱼","link":"https://blog.anheyu.com/","avatar":"https://p.chyt.top/cover/202410021733860.jpg!cover","descr":"生活明朗，万物可爱","siteshot":"https://npm.elemecdn.com/anzhiyu-theme-static@1.1.6/img/blog.anheyu.com.jpg","color":"vip","tag":"技术"},{"name":"张洪Heo","link":"https://blog.zhheo.com/","avatar":"https://p.chyt.top/cover/202410021734613.png!cover","descr":"分享设计与科技生活","siteshot":"https://bu.dusays.com/2023/03/03/6401bcbf1d33b.webp","color":"var(--chyt-green)","tag":"生活"},{"name":"Fomalhaut🥝","link":"https://www.fomal.cc/","avatar":"https://p.chyt.top/cover/202410021735049.webp!cover","descr":"Future is now 🍭🍭🍭","recommend":true},{"name":"杜老师说","link":"https://dusays.com","avatar":"https://p.chyt.top/cover/202410021735877.png!cover","descr":"师者，传道，授业，解惑！"},{"name":"Akilarの糖果屋","link":"https://akilar.top/","avatar":"https://p.chyt.top/cover/202410021736566.jpeg!cover","descr":"欢迎光临糖果屋","recommend":true},{"name":"风记星辰","link":"https://www.thyuu.com","avatar":"https://p.chyt.top/cover/202410021736837.webp!cover","descr":"热爱你来过的每度温暖"},{"name":"CC康纳百川","link":"https://blog.ccknbc.cc","avatar":"https://p.chyt.top/cover/202410021736558.png!cover","descr":"CC康纳百川的小窝"},{"name":"贰猹的小窝","link":"https://noionion.top/","avatar":"https://p.chyt.top/cover/202410021737527.jpeg!cover","descr":"用这生命中的每一秒，给自己一个不后悔的未来"},{"name":"小植同学","link":"https://blog.xiaoztx.top","avatar":"https://p.chyt.top/cover/202410021737996.jpeg!cover","siteshot":"https://img.xiaoztx.top/image/2023/10/29/9d2fa78857f43f0250a0776fd6d02b6c.jpeg","descr":"锦鲤相随，好运常伴"},{"name":"青桔气球","link":"https://blog.qjqq.cn/","avatar":"https://p.chyt.top/cover/202410021737423.webp!cover","descr":"分享网络安全与科技生活"},{"name":"琅環书生","link":"https://www.zhuangzhi.love","avatar":"https://p.chyt.top/cover/202410021738351.jpeg!cover","descr":"无远弗届，皆有可能"},{"name":"煮雪话河山`Blog","link":"https://blog.cent1pedee.top/","avatar":"https://p.chyt.top/cover/202410021747252.jpg!cover","descr":"如月之恒，如日之升。"},{"name":"Leet","link":"https://skyline523.github.io/","avatar":"https://p.chyt.top/cover/202410021746713.png!cover","descr":"我会找到办法的，我总有办法"}];
    var refreshNum = 1;
    function friendChainRandomTransmission() {
      const randomIndex = Math.floor(Math.random() * friend_link_list.length);
      const { name, link } = friend_link_list.splice(randomIndex, 1)[0];
      Snackbar.show({
        text:
          "点击前往按钮进入随机一个友链，不保证跳转网站的安全性和可用性。本次随机到的是本站友链：「" + name + "」",
        duration: 8000,
        pos: "top-center",
        actionText: "前往",
        onActionClick: function (element) {
          element.style.opacity = 0;
          window.open(link, "_blank");
        },
      });
    }
    function addFriendLinksInFooter() {
      var footerRandomFriendsBtn = document.getElementById("footer-random-friends-btn");
      if(!footerRandomFriendsBtn) return;
      footerRandomFriendsBtn.style.opacity = "0.2";
      footerRandomFriendsBtn.style.transitionDuration = "0.3s";
      footerRandomFriendsBtn.style.transform = "rotate(" + 360 * refreshNum++ + "deg)";
      const finalLinkList = [];
  
      let count = 0;

      while (friend_link_list.length && count < 3) {
        const randomIndex = Math.floor(Math.random() * friend_link_list.length);
        const { name, link, avatar } = friend_link_list.splice(randomIndex, 1)[0];
  
        finalLinkList.push({
          name,
          link,
          avatar,
        });
        count++;
      }
  
      let html = finalLinkList
        .map(({ name, link }) => {
          const returnInfo = "<a class='footer-item' href='" + link + "' target='_blank' rel='noopener nofollow'>" + name + "</a>"
          return returnInfo;
        })
        .join("");
  
      html += "<a class='footer-item' href='/link/'>更多</a>";

      document.getElementById("friend-links-in-footer").innerHTML = html;

      setTimeout(()=>{
        footerRandomFriendsBtn.style.opacity = "1";
      }, 300)
    };