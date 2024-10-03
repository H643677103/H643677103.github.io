---
title: Markdown语法1
cover: 'https://p.chyt.top//cover/202410021822756.png!cover'
date: '2023-11-01 10:56:56'
updated: '2023-11-02 21:17:27'
categories:
  - 前端开发
tags:
  - Markdown语法
abbrlink: db88f376
---
# Markdown基本语法
Markdown是一种轻量级标记语言，排版语法简洁，让人们更多地关注内容本身而非排版。它使用易读易写的纯文本格式编写文档，可与HTML混编，可导出 HTML、PDF 以及本身的 .md 格式的文件。因简洁、高效、易读、易写，Markdown被大量使用，如Github、Wikipedia、简书等。

## Markdown标题语法
要创建标题，请在单词或短语前面添加井号(`#`) `#`的数量代表了标题的级别。例如，添加三个`#`表示创建一个三级标题 (`<h3>`) (例如：`### My Header`)。
- 一级标题 `# Heading level 1`
- 二级标题 `## Heading level 2`
- 三级标题 `### Heading level 3`
- 四级标题 `#### Heading level 4`
- 五级标题 `##### Heading level 5`
- 六级标题 `###### Heading level 6`

## Markdown段落语法
要创建段落，请使用空白行将一行或多行文本进行分隔。
``` markdown
This is a paragraph.

This is another paragraph.
```
{% note warning %}
不要用空格（spaces）或制表符（ tabs）缩进段落。
{% endnote %}

## Markdown换行语法
在一行的末尾添加两个或多个空格，然后按回车键,即可创建一个换行(`<br>`)。
``` markdown
This is the first line.  
And this is the second line.
```
{% note warning %}
CommonMark 和其它几种轻量级标记语言支持在行尾添加反斜杠 (`\`) 的方式实现换行，但是并非所有 Markdown 应用程序都支持此种方式，因此从兼容性的角度来看，不推荐使用。
{% endnote %}

## Markdown强调语法
通过将文本设置为粗体或斜体来强调其重要性。
### 粗体
要加粗文本，请在单词或短语的前后各添加两个星号（asterisks）或下划线（underscores）。如需加粗一个单词或短语的中间部分用以表示强调的话，请在要加粗部分的两侧各添加两个星号（asterisks）。
`I just love **bold text**.`
`I just love __bold text__.`
`Love**is**bold`
### 斜体
`Italicized text is the *cat's meow*.`
`Italicized text is the _cat's meow_.`
`A*cat*meow`
## 粗体和斜体
`This text is ***really important***.`
`This text is ___really important___.`
`This text is __*really important*__.`
`This text is **_really important_**.`
`This is really***very***important text.`

## Markdown引用语法
要创建块引用，请在段落前添加一个`>`符号
``` markdown
> Dorothy followed her through many of the beautiful rooms in her castle.
```
渲染效果如下所示：
> Dorothy followed her through many of the beautiful rooms in her castle.
### 多个段落的块引用
块引用可以包含多个段落。为段落之间的空白行添加一个`>`符号。
``` markdown
> Dorothy followed her through many of the beautiful rooms in her castle.
>
> The Witch bade her clean the pots and kettles and sweep the floor and keep the fire fed with wood.
```
渲染效果如下所示：
> Dorothy followed her through many of the beautiful rooms in her castle.
>
> The Witch bade her clean the pots and kettles and sweep the floor and keep the fire fed with wood.
### 嵌套块引用
块引用可以嵌套。为第一个块引用之后的第一个段落添加一个`>>`符号。
``` markdown
> Dorothy followed her through many of the beautiful rooms in her castle.
>
>> The Witch bade her clean the pots and kettles and sweep the floor and keep the fire fed with wood.
```
渲染效果如下所示：
> Dorothy followed her through many of the beautiful rooms in her castle.
>
>> The Witch bade her clean the pots and kettles and sweep the floor and keep the fire fed with wood.
### 带有其它元素的块引用
块引用可以包含其他Markdown格式的元素。并非所有元素都可以使用，你需要进行实验以查看哪些元素有效。
``` markdown
> #### The quarterly results look great!
>
> - Revenue was off the chart.
> - Profits were higher than ever.
>
>  *Everything* is going according to **plan**.
```
渲染效果如下所示：
> #### The quarterly results look great!
>
> - Revenue was off the chart.
> - Profits were higher than ever.
>
>  *Everything* is going according to **plan**.
## Markdown列表语法
可以将多个条目组织成有序或无序列表。
### 有序列表
要创建有序列表，请在每个列表项前添加数字并紧跟一个英文句点。数字不必按数学顺序排列，但是列表应当以数字 1 起始。
``` markdown
1. First item
2. Second item
3. Third item
```
渲染效果如下所示：
1. First item
2. Second item
3. Third item
### 无序列表
要创建无序列表，请在每个列表项前面添加破折号(`-`)、星号(`*`)或加号(`+`)。缩进一个或多个列表项可创建嵌套列表。
``` markdown
- First item
- Second item
- Third item
```
渲染效果如下所示：
- First item
- Second item
- Third item

## Markdown代码语法
要将单词或短语表示为代码，请将其包裹在反引号 (`` ` ``) 中。
``` markdown
At the command prompt, type `nano`.
```
渲染效果如下所示：
At the command prompt, type `nano`.
### 转义反引号
如果你要表示为代码的单词或短语中包含一个或多个反引号，则可以通过将单词或短语包裹在双反引号(``` `` ```)中。
``` markdown
``At the command prompt, type `nano`.``
```
渲染效果如下所示：
``At the command prompt, type `nano`.``
### 代码块
要创建代码块，请将代码包裹在三个反引号 (``` `` ```) 中。
``` markdown
<html>
    <head>
    </head>
</html>
```