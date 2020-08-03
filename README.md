- [说明](#说明)
- [安装](#安装)
- [功能](#功能)
- [设置](#设置)
- [致谢](#致谢)

## 说明

这是一个 Chrome / Firefox 扩展，用于微信读书做笔记。

扩展图标来源：[HbnLg](https://www.iconfont.cn/user/detail?spm=a313x.7781069.1998910419.dcc7d6115&userViewType=collections&uid=4451423)

项目地址：[Github](https://github.com/liuhao326/wereader)

## 安装

- [Chrome](https://chrome.google.com/webstore/detail/%E5%BE%AE%E4%BF%A1%E8%AF%BB%E4%B9%A6%E7%AC%94%E8%AE%B0%E5%8A%A9%E6%89%8B/cmlenojlebcodibpdhmklglnbaghpdcg?hl=zh-CN)

- [Firefox](https://addons.mozilla.org/zh-CN/firefox/addon/%E5%BE%AE%E4%BF%A1%E8%AF%BB%E4%B9%A6%E7%AC%94%E8%AE%B0%E5%8A%A9%E6%89%8B/)

不能访问 Chrome 网上应用店时按如下操作在 Chrome 上手动安装（建议在 Chrome 网上应用店安装，因为扩展手动安装后不能够自动更新）：

- 首先，在上面给出的 GitHub 地址上依次点击 `Clone`——`Download ZIP` 下载压缩包。下载好后解压。

- 接下来，进入 Chrome，按下图进入扩展程序页面：

  <div align = "left"><img src="https://img2020.cnblogs.com/blog/1934175/202007/1934175-20200722100925191-979517472.png" width='50%' /></div>

- 进入页面后，先打开 `开发者模式` 开关，再点击 `加载已解压的扩展程序` ，找到前面解压得到的文件夹 `wereader` ，双击进入该文件夹，进入后单击里面的（不是双击）`wereader` 文件夹，这时候文件夹被选中，点击 `选择文件夹` 即可。

## 功能

- 导出书评（纯文本 / HTML）

- 导出标注（本章/全书）

- 导出目录

- 导出热门标注

- 导出个人想法

- 开启图片/注释/代码块复制按钮

- 护眼色主题

- 书架分类展示

## 设置

在设置页面，你可以设置导出效果。

右击扩展点击 `选项` 进入扩展设置设置页面：

<div align = "left"><img src="https://img2020.cnblogs.com/blog/1934175/202007/1934175-20200722193445592-1098571776.png" width='40%' /></div>

在微信读书中，标注分三类，分别是波浪线、马克笔和直线：

<div align = "left"><img src="https://img2020.cnblogs.com/blog/1934175/202007/1934175-20200722192542713-2099612966.png" alt="img" width='40%' /></div>

其中直线就是设置页面中所谓 `一级标注`，马克笔是 `二级标注`，波浪线是 `三级标注`，你可以在输入框中设置标注前后缀。

比如，如果你希望书本中用马克笔（二级）标注的文字导出来后加粗，你只需要将二级标注前后缀设置为 `**`。

又比如，如果你希望书本中用直线（一级）标注的文字导出来后加下划线，你只需要将一级标注前后缀分别设置为 `<u>` 和 `</u>`。

你也可以在设置页中设置导出标题级别。

默认级别分别是 `## `、`### ` 和 `#### ` 你可以通过自己改变井号数量来改变标题导出效果。

类似地，你可以设置想法前后缀，当你将前后缀设置为 `**` 时，导出的想法将会加粗。

更多细节可在插件提供的设置页中查看。

## 致谢

- [wereader](https://github.com/arry-lee/wereader)
- [examples-of-web-crawlers](https://github.com/shengqiangzhang/examples-of-web-crawlers)
- [chrome-plugin-demo](https://github.com/sxei/chrome-plugin-demo)
- [clipboard.js](https://github.com/zenorocha/clipboard.js)
- [sweetalert2](https://github.com/sweetalert2/sweetalert2)
- [HbnLg](https://www.iconfont.cn/user/detail?spm=a313x.7781069.1998910419.dcc7d6115&userViewType=collections&uid=4451423)