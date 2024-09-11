---
title: 解决VScode的run-code中Java在终端显示的乱码问题
date: 2024-07-26 20:11:35
updated: false
tags: [powershell, Java, run code]
categories: 
    - tech
---

# 解决

打开powershell，检查是否有profile：

```powershell

Test-Path $PROFILE

```

如果没有，创建一个：

```powershell
New-Item -Type File -Path $PROFILE -Force
```

执行完这个命令后，能够得到profile的位置，如果没有，请使用文本编辑打开：

```powershell
notepad $PROFILE
或(VScode)
code $PROFILE
```

在打开的文件中添加以下内容：

```powershell
$OutputEncoding = [System.Text.Encoding]::UTF8
[Console]::OutputEncoding = [System.Text.Encoding]::UTF8
[Console]::InputEncoding = [System.Text.Encoding]::UTF8
```

使用命令`[Console]::OutputEndoing`检查是否设置为了utf-8

这样可以在每次打开powershell的时候都将编码设置为UTF-8

接下来，打开VScode设置（`Ctrl + ,`），搜索`Code-runner: Executor Map`，点击`在settings.json中编辑`

找到

```json
"code-runner.executorMap": {
    "java": ""
}
```
修改为：
```json
"code-runner.executormap": {
    "java": "cd $dir && javac -encoding utf8 $fileName && java $fileNameWithoutExt",
}
```

这样，在终端的Java输出就不会是乱码了


