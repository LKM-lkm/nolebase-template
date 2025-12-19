---
title: MathJax LaTeX 综合测试页面
description: 一个用于全面测试 VitePress 中 MathJax v4 渲染效果的页面，涵盖各种公式和边缘情况。目前仅适用于nolebase-template，不适用于原版。
---

# MathJax LaTeX 综合测试页面

欢迎来到 MathJax 渲染测试页面！

此页面的目的是全面检验您在 VitePress 项目中集成的 MathJax v4 是否工作正常。它包含了从基础的行内公式到复杂的多行矩阵，再到与 Markdown 语法可能冲突的边缘情况。

如果此页面上的所有公式都能正确、清晰地显示，那么恭喜你，你的配置非常完美！

## 1. 基础定界符测试

本节测试最核心的行内与块级公式定界符是否被正确识别。

### 行内公式 (Inline)

行内公式应该无缝地嵌入到文本中。例如，爱因斯坦的质能方程 $E = mc^2$ 是一个著名的例子。同样的效果也可以用官方推荐的 `\(` 定界符实现，像这样： \\( E = mc^2 \\)。

### 块级公式 (Display)

块级公式应该独立成行并且居中显示。

使用 `$$...$$` 定界符的高斯积分公式：
$$
\int_{-\infty}^{\infty} e^{-x^2} dx = \sqrt{\pi}
$$

使用 `\[...\]` 定界符的欧拉恒等式：
\\[
e^{i\pi} + 1 = 0
\\]

## 2. 常用数学元素

本节测试构成公式的各种基础元素。

### 上下标

- **单个字符**：$x^2$, $a_i$
- **多个字符** (需用 `{}` 包裹): $e^{i\theta}$, $A_{ij}$
- **组合使用**: $R_{ij}^{ab}$
- **经典公式**: 勾股定理 $a^2 + b^2 = c^2$

### 分数与根式

- **简单分数**: $\frac{1}{2}$
- **复杂分数**: $\frac{d}{dx} \left( \frac{x}{x+1} \right)$
- **平方根**: $\sqrt{42}$
-  **平方根+分数**: $\sqrt{\frac{a}{b}}$
- **N次根**: $\sqrt[3]{27}$
- **集大成者 (一元二次方程求根公式)**:
  $$
  x = \frac{-b \pm \sqrt{b^2 - 4ac}}{2a}
  $$

### 希腊字母与运算符

- **常用希腊字母**: $\alpha, \beta, \gamma, \delta, \epsilon, \zeta, \eta, \theta, \iota, \kappa, \lambda, \mu, \xi, \pi, \rho, \sigma, \tau, \phi, \psi, \omega$
- **大写希腊字母**: $\Gamma, \Delta, \Theta, \Lambda, \Xi, \Pi, \Sigma, \Phi, \Psi, \Omega$
- **求和 (Summation)**:
  $$
  \sum_{k=1}^{n} k^2 = \frac{n(n+1)(2n+1)}{6}
  $$
- **积分 (Integral)**:
  $$
  \int_a^b f(x) dx
  $$
- **极限 (Limit)**:
  $$
  \lim_{x \to 0} \frac{\sin x}{x} = 1
  $$

## 3. 高级排版结构

本节测试更复杂的公式排版能力。

### 矩阵与行列式

使用 `pmatrix` (圆括号):
$$
\begin{pmatrix}
1 & 2 & 3 \\\\
4 & 5 & 6 \\\\
7 & 8 & 9
\end{pmatrix}
$$

使用 `bmatrix` (方括号):
$$
\mathbf{X} = \begin{bmatrix}
x_{11} & x_{12} \\\\
x_{21} & x_{22}
\end{bmatrix}
$$

使用 `vmatrix` (行列式):
$$
\det(\mathbf{A}) = \begin{vmatrix}
a & b \\\\
c & d
\end{vmatrix} = ad - bc
$$

### 多行对齐公式

使用 `aligned` 环境，`&` 符号用于指定对齐点，`\\\\` 用于换行。
$$
\begin{aligned}
f(x) &= (x+1)^2 \\\\
     &= x^2 + 2x + 1
\end{aligned}
$$

### 分段函数

使用 `cases` 环境定义分段函数。
$$
f(n) = \begin{cases}
n/2,      & \text{if } n \text{ is even} \\\\
3n+1,     & \text{if } n \text{ is odd}
\end{cases}
$$

## 4. Markdown 兼容性压力测试

本节特意测试那些在 Markdown 和 LaTeX 中都有特殊含义的字符，检验它们是否能被正确处理。

- **下划线 `_`**: 在 LaTeX 中是下标，在 Markdown 中是*斜体*。
  - **可能出错**: `a_i_j`
  - **正确写法**: 使用花括号分组 `$a_{ij}$` (最佳实践)，或转义 `a\_i\_j`。

- **星号 `*`**: 在 LaTeX 中是乘法，在 Markdown 中是*斜体*或**粗体**。
  - **可能出错**: `a * b` (两侧有空格)
  - **正确写法**: 转义星号 `$a \* b$`。

- **反斜杠 `\`**: 在 LaTeX 中是命令起始，在 Markdown 中是转义字符。
  - **换行**: 在矩阵或多行公式中，换行符 `\\` 必须写成 `\\\\`。

## 5. 字体与样式测试

本节测试公式内部的文本和特殊字体的显示效果，这将直接反映 `mathjax-termes` 字体是否被正确应用。

- **普通文本 `\text`**:
  $$
  \text{能量} = \text{质量} \times (\text{光速})^2
  $$

- **粗体 (Bold)**: $\mathbf{v} + \mathbf{w}$
- **花体 (Calligraphic)**: $\mathcal{L}$
- **黑板粗体 (Blackboard Bold)**: $\mathbb{R}$ 代表实数集。

如果以上所有公式都显示正常、对齐无误、字体优美（特别是带有衬线的 Termes 风格），那么你的 MathJax 集成工作就圆满成功了！