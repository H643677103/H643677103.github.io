---
title: 麦当劳
date: 2023-11-06 15:52:35
comments: true
aside: false
top_img: false
---

{% link CHYT主题标签 Tag Plugins,CHYT,https://blog.chyt.top/posts/d50a.html %}

{% poem 水调歌头,苏轼 %}
丙辰中秋，欢饮达旦，大醉，作此篇，兼怀子由。
明月几时有？把酒问青天。
不知天上宫阙，今夕是何年？
我欲乘风归去，又恐琼楼玉宇，高处不胜寒。
起舞弄清影，何似在人间？

转朱阁，低绮户，照无眠。
不应有恨，何事长向别时圆？
人有悲欢离合，月有阴晴圆缺，此事古难全。
但愿人长久，千里共婵娟。
{% endpoem %}

{% progress 10 red 进度条样式预览 %}
{% progress 30 yellow 进度条样式预览 %}
{% progress 50 green 进度条样式预览 %}
{% progress 70 cyan 进度条样式预览 %}
{% progress 90 blue 进度条样式预览 %}
{% progress 100 gray 进度条样式预览 %}

## Gallery 相册图库

一个图库集合。

{% tabs gallery,3 %}

<!-- tab 标签语法 -->

1. gallerygroup 相册图库

    ```markdown
    <div class="gallery-group-main">
    {% galleryGroup name description link img-url %}
    {% galleryGroup name description link img-url %}
    {% galleryGroup name description link img-url %}
    </div>
    ```

2. gallery 相册

{% tabs Gallery相册 %}

<!-- tab 本地 -->

```markdown
{% gallery %}
markdown 图片格式
{% endgallery %}

{% gallery true,220,10 %}
markdown 图片格式
{% endgallery %}

{% gallery true,,10 %}
markdown 图片格式
{% endgallery %}
```

| 参数名    | 释义                                                                                 |
| --------- | ------------------------------------------------------------------------------------ |
| lazyload  | 【可选】点击按钮加载更多图片，填写 true/false。默认为 `false`。                      |
| rowHeight | 【可选】图片显示的高度，如果需要一行显示更多的图片，可设置更小的数字。默认为 `220`。 |
| limit     | 【可选】每次加载多少张照片。默认为 `10`。                                            |

<!-- endtab -->

<!-- tab 远程 -->

```markdown
{% gallery url,[link],[lazyload],[rowHeight],[limit] %}
{% endgallery %}
```

| 参数名    | 释义                                                                                 |
| --------- | ------------------------------------------------------------------------------------ |
| url       | 【必须】 识别词                                                                      |
| link      | 【必须】远程的 json 链接                                                             |
| lazyload  | 【可选】点击按钮加载更多图片，填写 true/false。默认为 `false`。                      |
| rowHeight | 【可选】图片显示的高度，如果需要一行显示更多的图片，可设置更小的数字。默认为 `220`。 |
| limit     | 【可选】每次加载多少张照片。默认为 `10`。                                            |

> 远程链接 Json 的例子

有三个参数，`url`是必须存在的，`alt` 和 `title` 可有，也可没有。

```json
[
  {
    "url": "https://cdn1.tianli0.top/gh/jerryc127/CDN/img/IMG_0556.jpg",
    "alt": "IMG_0556.jpg",
    "title": "这是title"
  },
  {
    "url": "https://cdn1.tianli0.top/gh/jerryc127/CDN/img/IMG_0472.jpg",
    "alt": "IMG_0472.jpg"
  },
  {
    "url": "https://cdn1.tianli0.top/gh/jerryc127/CDN/img/IMG_0453.jpg",
    "alt": ""
  },
  {
    "url": "https://cdn1.tianli0.top/gh/jerryc127/CDN/img/IMG_0931.jpg",
    "alt": ""
  }
]
```

> 示例

```markdown
{% gallery url,https://xxxx.com/sss.json %}
{% endgallery %}

{% gallery url,https://xxxx.com/sss.json,true,220,10 %}
{% endgallery %}

{% gallery url,https://xxxx.com/sss.json,true,,10 %}
{% endgallery %}
```

<!-- endtab -->

{% endtabs%}

<!-- endtab -->

<!-- tab 参数配置 -->

1. gallerygroup相册图库

| 参数名      | 释义                 |
|:------------|:---------------------|
| name        | 图库名字             |
| description | 图库描述             |
| link        | 链接到对应相册的地址  |
| img-url     | 图库封面             |

{% note info %}
思维拓展一下，相册图库的实质其实就是个快捷方式，可以自定义添加描述、封面、链接。那么我们未必要把它当做一个相册，完全可以作为一个链接卡片，链接到视频、QQ、友链都是不错的选择。
{% endnote %}

2. gallery 相册
  区别于旧版的 Gallery 相册,新的 Gallery 相册会自动根据图片长度进行排版，书写也更加方便，与 markdown 格式一样。可根据需要插入到相应的 md。无需再自己配置长宽。**建议在粘贴时故意使用长短、大小、横竖不一的图片**，会有更好的效果。（尺寸完全相同的图片只会平铺输出，效果很糟糕）

{% tabs Gallery相册参数 %}

<!-- tab 本地 -->

```markdown
{% gallery %}
markdown 图片格式
{% endgallery %}

{% gallery true,220,10 %}
markdown 图片格式
{% endgallery %}

{% gallery true,,10 %}
markdown 图片格式
{% endgallery %}
```

| 参数名    | 释义                                                                                 |
| --------- | ------------------------------------------------------------------------------------ |
| lazyload  | 【可选】点击按钮加载更多图片，填写 true/false。默认为 `false`。                      |
| rowHeight | 【可选】图片显示的高度，如果需要一行显示更多的图片，可设置更小的数字。默认为 `220`。 |
| limit     | 【可选】每次加载多少张照片。默认为 `10`。                                            |

<!-- endtab -->

<!-- tab 远程 -->

```markdown
{% gallery url,[link],[lazyload],[rowHeight],[limit] %}
{% endgallery %}
```

| 参数名    | 释义                                                                                 |
| --------- | ------------------------------------------------------------------------------------ |
| url       | 【必须】 识别词                                                                      |
| link      | 【必须】远程的 json 链接                                                             |
| lazyload  | 【可选】点击按钮加载更多图片，填写 true/false。默认为 `false`。                      |
| rowHeight | 【可选】图片显示的高度，如果需要一行显示更多的图片，可设置更小的数字。默认为 `220`。 |
| limit     | 【可选】每次加载多少张照片。默认为 `10`。                                            |

> 远程链接 Json 的例子

有三个参数，`url`是必须存在的，`alt` 和 `title` 可有，也可没有。

```json
[
  {
    "url": "https://cdn1.tianli0.top/gh/jerryc127/CDN/img/IMG_0556.jpg",
    "alt": "IMG_0556.jpg",
    "title": "这是title"
  },
  {
    "url": "https://cdn1.tianli0.top/gh/jerryc127/CDN/img/IMG_0472.jpg",
    "alt": "IMG_0472.jpg"
  },
  {
    "url": "https://cdn1.tianli0.top/gh/jerryc127/CDN/img/IMG_0453.jpg",
    "alt": ""
  },
  {
    "url": "https://cdn1.tianli0.top/gh/jerryc127/CDN/img/IMG_0931.jpg",
    "alt": ""
  }
]
```

> 示例

```markdown
{% gallery url,https://xxxx.com/sss.json %}
{% endgallery %}

{% gallery url,https://xxxx.com/sss.json,true,220,10 %}
{% endgallery %}

{% gallery url,https://xxxx.com/sss.json,true,,10 %}
{% endgallery %}
```

<!-- endtab -->

{% endtabs%}

<!-- endtab -->

<!-- tab 样式预览 -->

- gallerygroup 相册图库

<div class="gallery-group-main">
{% galleryGroup MC 在Rikkaの六花服务器里留下的足迹 '/wordScenery/' https://bu.dusays.com/2023/06/01/64788f24d05bd.webp %}
{% galleryGroup Gundam 哦咧哇gundam哒！ '/thousand/' https://bu.dusays.com/2023/06/01/64788f456fc3d.webp %}
{% galleryGroup I-am-Akilar 某种意义上也算自拍吧 '/wallpaper/' https://bu.dusays.com/2023/06/01/64788f83e5fa1.webp %}
</div>

- gallery 相册

{% gallery true,,2 %}
![](https://bu.dusays.com/2023/06/01/647896b15759c.jpg)
![](https://bu.dusays.com/2023/06/01/647896cabde59.jpg)
![](https://bu.dusays.com/2023/06/01/647896eb0f3ea.jpg)
![](https://bu.dusays.com/2023/06/01/647896ed810b3.jpg)
![](https://i.loli.net/2019/12/25/6nepIJ1xTgufatZ.jpg)
![](https://i.loli.net/2019/12/25/E7Jvr4eIPwUNmzq.jpg)
![](https://i.loli.net/2019/12/25/mh19anwBSWIkGlH.jpg)
![](https://i.loli.net/2019/12/25/2tu9JC8ewpBFagv.jpg)
{% endgallery %}

<!-- endtab -->

<!-- tab 示例源码 -->

{% note info %}
对于很多同学提问的`gallerygroup`和`gallery`相册页的链接问题。这里说下我个人的使用习惯。
一般使用相册图库的话，可以在导航栏加一个 gallery 的 page(**使用指令`hexo new page gallery`添加**)，里面放相册图库作为封面。然后在`[Blogroot]/source/gallery/`下面建立相应的文件夹，例如若按照这里的示例，若欲使用`/gallery/MC/`路径访问 MC 相册，则需要新建`[Blogroot]/source/gallery/MC/index.md`，并在里面填入`gallery`相册内容。

注意 ⚠️：本站相册集为单独优化，可参考[配置相册页面](https://blog.chyt.top/posts/220c.html)。
{% endnote %}

- gallerygroup 相册图库

   ```markdown
   <div class="gallery-group-main">
    {% galleryGroup MC 在Rikkaの六花服务器里留下的足迹 '/wordScenery/' https://bu.dusays.com/2023/06/01/64788f24d05bd.webp %}
    {% galleryGroup Gundam 哦咧哇gundam哒！ '/thousand/' https://bu.dusays.com/2023/06/01/64788f456fc3d.webp %}
    {% galleryGroup I-am-Akilar 某种意义上也算自拍吧 '/wallpaper/' https://bu.dusays.com/2023/06/01/64788f83e5fa1.webp %}
   </div>
   ```

  - gallery 相册

   ```markdown
   {% gallery true,,2 %}
   ![](https://bu.dusays.com/2023/06/01/647896b15759c.jpg)
   ![](https://bu.dusays.com/2023/06/01/647896cabde59.jpg)
   ![](https://bu.dusays.com/2023/06/01/647896eb0f3ea.jpg)
   ![](https://bu.dusays.com/2023/06/01/647890012b1ec.webp)
   ![](https://i.loli.net/2019/12/25/6nepIJ1xTgufatZ.jpg)
   ![](https://i.loli.net/2019/12/25/E7Jvr4eIPwUNmzq.jpg)
   ![](https://i.loli.net/2019/12/25/mh19anwBSWIkGlH.jpg)
   ![](https://i.loli.net/2019/12/25/2tu9JC8ewpBFagv.jpg)
   {% endgallery %}
   ```

<!-- endtab -->

{% endtabs%}

