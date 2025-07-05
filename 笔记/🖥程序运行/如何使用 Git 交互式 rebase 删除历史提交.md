---
tags:
  - 本项目操作
---

# 如何使用 Git 交互式 rebase 删除历史提交

在修改项目时，我们可能会出现有问题的提交（如大文件，错误操作等），导致后续无法正常提交。因此，此时我们需要从 Git 历史中删除某个特定的提交。本文将介绍如何使用 `git rebase -i` 交互式 rebase 实现这一目标。

## 步骤一：查看提交历史

首先，使用如下命令查看最近的提交历史，找到你想要删除的那条提交的哈希值（commit id）：

```bash
git log --oneline
```

## 步骤二：启动交互式 rebase

假设你要删除的是倒数第 3 个提交，可以这样启动 rebase：

```bash
git rebase -i HEAD~3
```

## 步骤三：编辑提交列表

命令执行后，会打开一个编辑器，内容类似如下：

```text
pick a3f25ae giscus use url instead of pathname
pick e756538 提交信息修改
pick ce1e706 用 LFS 提交日文字体.rar 文件
```

**删除你想要移除的那一行**（或将 `pick` 改为 `drop`），例如：

```text
pick a3f25ae giscus use url instead of pathname
pick e756538 提交信息修改
# pick ce1e706 用 LFS 提交日文字体.rar 文件  ← 这一行已被删除
```

保存并关闭编辑器。

## 步骤四：解决冲突并继续

如果 rebase 过程中出现冲突，按照提示解决冲突后，执行：

```bash
git add <冲突文件>
git rebase --continue
```

重复直到 rebase 完成。

## 步骤五：强制推送到远程仓库

由于历史被重写，需要强制推送：

```bash
git push -f
```

## 注意事项

- **重写历史会影响所有协作者，操作前请备份！**
- **强制推送后，其他人需要重新克隆仓库。**

