---
title: Markdown介绍
cover: 'https://p.chyt.top//cover/202410021822856.png!cover'
date: '2023-11-01 10:56:56'
updated: '2023-11-02 21:17:27'
categories:
  - 前端开发
tags:
  - Markdown语法
abbrlink: 81dca98f
---
## Markdown 是什么？
Markdown 是一种轻量级的标记语言，可用于在纯文本文档中添加格式化元素。Markdown 由 John Gruber 于 2004 年创建，如今已成为世界上最受欢迎的标记语言之一。

1. 专注于文字内容；
2. 纯文本，易读易写，可以方便地纳入版本控制；
3. 语法简单，没有什么学习成本，能轻松在码字的同时做出美观大方的排版。

使用 Markdown 与使用 Word 类编辑器不同。在 Word 之类的应用程序中，单击按钮以设置单词和短语的格式，并且，更改立即可见。而 Markdown 与此不同，当你创建 Markdown 格式的文件时，可以在文本中添加 Markdown 语法，以指示哪些单词和短语看起来应该有所不同。

例如，要表示标题，只须在短语前面添加一个井号即可（例如， `# Heading One`）。或者要加粗一个短语，只须在短语前后各加两个星号即可（例如，`**this text is bold**`）。可能需要一段时间才能习惯在文本中看到 Markdown 语法，尤其是如果你已习惯了所见即所得的应用程序。以下屏幕截展示了 Markdown 文件在 [Notepad++ 文本编辑器] 中显示的效果。

![](https://markdown.com.cn/assets/img/notepad.3541bd12.png)

你可以使用文本编辑器为纯文本文件添加 Markdown 格式的元素。或者，你也可以安装针对 macOS、Windows、Linux、iOS 和 Android 操作系统的 Markdown 应用程序。或者还可以使用一些基于 Web 的应用程序用于 Markdown 编写。

依赖于你所使用的应用程序，你可能无法实时预览格式化的文档。但是没关系。根据[Gruber](https://daringfireball.net/projects/markdown/)的说法，Markdown 的语法被设计为可读性强且不显眼，因此即使 Markdown 文件中的文本未经过渲染也易于阅读。

{% note %}
Markdown 语法的首要设计目标是尽可能易读。基于这个目标，Markdown 格式的文档能够以纯文本形式原样发布，而不会看起来像被填满了标签或格式化指令。
{% endnote %}

## 为什么要使用 Markdown？
当你可以通过按下界面中的按钮来设置文本格式时，为什么还要使用 Markdown 来书写呢？使用 Markdown 而不是 word 类编辑器的原因有：

- Markdown 无处不在。StackOverflow、CSDN、掘金、简书、GitBook、有道云笔记、V2EX、光谷社区等。主流的代码托管平台，如 GitHub、GitLab、BitBucket、Coding、Gitee 等等，都支持 Markdown 语法，很多开源项目的 README、开发文档、帮助文档、Wiki 等都用 Markdown 写作。

- Markdown 是纯文本可移植的。几乎可以使用任何应用程序打开包含 Markdown 格式的文本文件。如果你不喜欢当前使用的 Markdown 应用程序了，则可以将 Markdown 文件导入另一个 Markdown 应用程序中。这与 Microsoft Word 等文字处理应用程序形成了鲜明的对比，Microsoft Word 将你的内容锁定在专有文件格式中。

- Markdown 是独立于平台的。你可以在运行任何操作系统的任何设备上创建 Markdown 格式的文本。

- Markdown 能适应未来的变化。即使你正在使用的应用程序将来会在某个时候不能使用了，你仍然可以使用文本编辑器读取 Markdown 格式的文本。当涉及需要无限期保存的书籍、大学论文和其他里程碑式的文件时，这是一个重要的考虑因素。