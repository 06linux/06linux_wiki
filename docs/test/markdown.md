# markdown使用

## 标题
要创建标题，请在标题文本前添加一至六个 # 符号。 您使用的 # 数量将决定标题的大小。

# 一级标题
## 二级标题
### 三级标题
#### 四级标题
##### 五级标题

## 超链接

通过将链接文本包含在方括号 [ ] 内，然后将 URL 包含在括号 ( ) 内，可创建内联链接。
+ [baidu](https://baidu.com)
+ [06linux](https://06linux.com)

## 图像
您可以通过添加 ! 并在[ ]中包装 alt 文本来显示图像。 然后将图像链接包装在括号 () 中。

![This is an image](https://myoctocat.com/assets/images/base-octocat.svg)

![This is an image](https://myoctocat.com/assets/images/base-octocat.svg)

![hero](/images/hero.png)
![logo](/images/logo.png)


## 列表
通过在一行或多行文本前面添加 - 或 * 可创建无序列表。

* 列表测试1
* 列表测试2
* 列表测试3


通过在一个列表项下面缩进一个或多个其他列表项，可创建嵌套列表

- 列表测试1
  - 列表测试11
  - 列表测试12
  - 列表测试13
- 列表测试2
  - 嵌套列表11
  - 嵌套列表12
    - 嵌套列表121  
    - 嵌套列表122  
  - 嵌套列表13
- 列表测试3

要对列表排序，请在每行前面添加一个编号。

1. James Madison
2. James Monroe
3. John Quincy Adams


任务列表
要将任务标记为已完成，请使用 [x]。

- [x] #739
- [x] https://github.com/octo-org/octo-repo/issues/740
- [ ] Add delight to the experience when all tasks are complete :tada:


## 文本样式

您可以在评论字段和 .md 文件中以粗体、斜体或删除线的文字表示强调

**我是粗体字**
__我是粗体字__

*我是斜体字*
_我是斜体字_

~~我是删除线~~

> 我是引用文本
> 你好！！
> 
> 我是引用文本
> 

这个是代码引用
``` ts
    const user= 'zhangsan'
    const age= 11
```

这个是代码引用
```
git status
git add
git commit
```


## 表情符号
:smile:
:grin:
:clown_face:
:kiss:
:wave:
:ghost:
:heart:
:green_heart:

[表情符号备忘清单](https://github.com/ikatyang/emoji-cheat-sheet/blob/master/README.md)

## 表格
您可以用竖线 | 和横线 - 创建表格。 横线用于创建每列的标题，而竖线用于分隔每列。 必须在表格前包含空白链接，以便其正确呈现。

| First Header  | Second Header |
| ------------- | ------------- |
| Content Cell  | Content Cell  |
| Content Cell  | Content Cell  |

单元格的宽度可以不同，无需在列内准确对齐。 标题行的第一列中必须至少有三个横线。

| Command | Description |
| --- | --- |
| git status | List all new or modified files |
| git diff | Show file differences that haven't been staged |

您可以在表格中使用格式，如链接、内联代码块和文本样式：

| Command | Description |
| --- | --- |
| `git status` | List all *new or modified* files |
| `git diff` | Show file differences that **haven't been** staged |


您可以在标头行中横线的左侧、右侧或两侧加入冒号 :，靠左、靠右或居中对齐列中的文本。
| Left-aligned | Center-aligned | Right-aligned |
| :---         |     :---:      |          ---: |
| git status   | git status     | git status    |
| git diff     | git diff       | git diff      |

要包含竖线 | 作为单元格中的内容，请在竖线前使用 \：
| Name     | Character |
| ---      | ---       |
| Backtick | `         |
| Pipe     | \|        |


## 显示目录
[[toc]]

