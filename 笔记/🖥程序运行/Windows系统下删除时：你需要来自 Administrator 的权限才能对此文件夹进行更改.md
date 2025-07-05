---
tags:
  - 系统操作
comment: true
---

本文提供了一种解决Windows系统中因权限不足而无法删除文件或文件夹的方法。通过创建一个注册表脚本来获取管理员权限，进而成功删除顽固文件。

## 一、你需要来自 Administrator 的权限才能对此文件夹进行更改。

删除某个文件时：文件夹访问被拒绝，你需要来自 Administrator 的权限才能对此文件夹进行更改。  
此处是安装的oracle数据库，把oracle卸载删除时删除不掉。  
![在这里插入图片描述](https://i-blog.csdnimg.cn/blog_migrate/b9918891c8f868e99a3037bdd1312c04.png)  
==（权限这个玩意是真的恶心，看了很多文章，改这个改那个，改了半天删除不了，问了下本人所对应项目的开发，大佬让我网上搜索：windows获取所有权的脚本，通过注册表删除。亲测可行终于删了。记录一下，下次这种问题直接用此方法）==

## 二、解决方法：Windows获取所有权的脚本注册进行删除

### 1、桌面上-新建-文本文档-复制以下代码到文本文档，保存。

![在这里插入图片描述](https://i-blog.csdnimg.cn/blog_migrate/1f0a016d08b27f667280acedb6df5308.png)  
代码如下：
```bash
Windows Registry Editor Version 5.00

[HKEY_CLASSES_ROOT\*\shell\runas]
@="获取管理员所有权"
"NoWorkingDirectory"=""

[HKEY_CLASSES_ROOT\*\shell\runas\command]
@="cmd.exe /c takeown /f \"%1\" && icacls \"%1\" /grant administrators:F"
"IsolatedCommand"="cmd.exe /c takeown /f \"%1\" && icacls \"%1\" /grant administrators:F"

[HKEY_CLASSES_ROOT\exefile\shell\runas2]
@="获取管理员所有权"
"NoWorkingDirectory"=""

[HKEY_CLASSES_ROOT\exefile\shell\runas2\command]
@="cmd.exe /c takeown /f \"%1\" && icacls \"%1\" /grant administrators:F"
"IsolatedCommand"="cmd.exe /c takeown /f \"%1\" && icacls \"%1\" /grant administrators:F"

[HKEY_CLASSES_ROOT\Directory\shell\runas]
@="获取管理员所有权"
"NoWorkingDirectory"=""

[HKEY_CLASSES_ROOT\Directory\shell\runas\command]
@="cmd.exe /c takeown /f \"%1\" /r /d y && icacls \"%1\" /grant administrators:F /t"
"IsolatedCommand"="cmd.exe /c takeown /f \"%1\" /r /d y && icacls \"%1\" /grant administrators:F /t"
```

### 2、重命名为.reg后缀格式的注册表脚本文件

1. 右击-此电脑-打开-查看-勾选文件扩展名  
    ![在这里插入图片描述](https://i-blog.csdnimg.cn/blog_migrate/d919e7ae0a27e92b1c44b8ddb67201c7.png)
    
2. 将该后缀为.txt文本文件，重命名为：以注册表方式取得管理员所有权，并保存为.reg后缀格式为注册表脚本文件  
    ![在这里插入图片描述](https://i-blog.csdnimg.cn/blog_migrate/f9474f28bc9217c8a0de379ea76360ce.png)
    

### 3、然后双击运行该文件，将其导入注册表。

是，是，是  
![在这里插入图片描述](https://i-blog.csdnimg.cn/blog_migrate/831fae2f2b9b99f35dddf43ff8d7c95d.png)  
![在这里插入图片描述](https://i-blog.csdnimg.cn/blog_migrate/6be8a40dd5ce026a1d38ce9ea36788ef.png)  
![在这里插入图片描述](https://i-blog.csdnimg.cn/blog_migrate/e6cdfe0cdd6f41ff7533e91753b9deef.png)  
reg文件补充说明：  
reg文件是一种注册表脚本文件，双击REG文件即可将其中的数据导入到注册表中。利用REG文件可以直接对注册表进行任何修改操作，它对注册表的操作可以不受注册表编辑器被禁用的限制，因此功能更为强大、灵活。  
reg是什么文件?  
reg文件是注册表文件，REG文件可以用任何文本文件编辑工具(例如记事本)进行修改。  
reg文件如何打开?  
reg文件可以用以下步骤打开：开始…运行…输入regedit就可以打开注册表，REG文件的创建是非常简单的，可以通过任何一个文本文件编辑工具来实现。打开记事本，在记事本文件中输入相关内容然后保存为restore.reg，以后你就可以通过双击这个restore.reg来直接解除禁用注册表的限制。

### 4、再次找到该目录，鼠标右键-获取管理员所有权-直接删除。

![在这里插入图片描述](https://i-blog.csdnimg.cn/blog_migrate/d26c41a3c8bfb59bafe8a1f7b14c5a4f.png)  
![在这里插入图片描述](https://i-blog.csdnimg.cn/blog_migrate/fc16bdf943845b050e06cd8624599001.png)  
然后-删除-成功删除。ok！！！

### 5、如果点击文件-右键-获取管理员所有权-乱码显示，转换为ANSI码

把.reg注册表脚本文件，拖入notepad++编辑器，用notepad++打开，点击编码，转换成ANSI码。ctrl+s保存。  
然后再次运行该文件，选择要删除的文件，右键，获取管理员所有权，就不会乱码显示了。  
![在这里插入图片描述](https://i-blog.csdnimg.cn/blog_migrate/07884a45daa8001b8dcf06eb4bd9f55b.png)