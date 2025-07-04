---
tags:
  - 标签内容
---

# 下载官方安装包
1. [Sibelius中文网站下载安装助手](https://cpv1.mairuan.com/download/sibelius.exe)
2. [Sibelius Ultimate网站直接下载](https://cdn.avid.com/Sibelius/Sibelius/2025.4/L0UY6DG4/Sibelius_2025.4_Win.zip)

# 运行（充值试用）
Sibelius下载后默认开始30天试用，如果没有激活，那么会有试用到期的风险。因此，在完成Sibelius的下载后，我们需要通过技术手段延长试用期。索性，Sibelius的试用期计时是通过本地文件记录的。

## 如何操作
我们通过批处理文件来进行文件的自动删除。
1. [直接下载脚本](https://likemsblog.netlify.app/files/Sibelius_Ultimate_Reset.bat)
```bash
del /A:H "%ProgramFiles(x86)%\APi1"
del /A:H "%AppData%\Avid\Sibelius\_manuscript\HEa3"
del /A:H "%ProgramData%\Avid\Sibelius\_manuscript\ACr2"
del /A:H "%ProgramData%\Avid\Sibelius\_manuscript\Plugins_v2"
REG ADD HKCU\Software\Avid\Sibelius\SibeliusTierSelection /v TrialDialogSavedChoice /t REG_DWORD /d 3 /f
```
将以上代码写入“.bat”文件中，并设为开机时运行即可保证每次均为“30天试用”。
为保证自动重置试用，我们要将脚本设为开机自启动

### 通过“启动”文件夹设置自启动
- 将批处理文件放入Sibelius安装目录；
- 按Win+R打开运行窗口。
- 输入shell:startup，然后按 Enter。这将打开启动文件夹。
- 为你的批处理文件（.bat文件）创建快捷方式，并将快捷方式复制到这个文件夹中。
这样，每次Windows启动时，系统就会自动运行这个批处理文件。

# 相关字体下载
1. [Arno Pro.rar](https://likemsblog.netlify.app/files/Arno_Pro.rar)
2. [Century OSMT Pro](https://likemsblog.netlify.app/files/Century_OSMT_Pro.zip)
3. [CenturyNo1SB-Bold](https://likemsblog.netlify.app/files/CenturyNo1SB-Bold.zip)