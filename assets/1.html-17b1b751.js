import{_ as l,r as p,o,c,a as n,b as a,e as t,f as e}from"./app-e4432bef.js";const r="/assets/css2-f5c886c3.png",u="/assets/bfc-eef95ed9.png",d="/assets/inline-add18a9d.png",k="/assets/ifc-64c2ab0f.png",h="/assets/z-index-76741236.png",m="/assets/px.drawio-92c3bc60.png",v="/assets/media-a5cb2a14.png",b={},g=n("h1",{id:"css基础概览",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#css基础概览","aria-hidden":"true"},"#"),a(" css基础概览")],-1),f=n("p",null,"本篇文章主要介绍css的基础核心知识点。",-1),x=["src"],y=e(`<h2 id="css语法" tabindex="-1"><a class="header-anchor" href="#css语法" aria-hidden="true">#</a> css语法</h2><p>css的核心功能是将css属性设定为特定的值</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code>  <span class="token selector">span</span> <span class="token punctuation">{</span>
    <span class="token property">color</span><span class="token punctuation">:</span> red<span class="token punctuation">;</span>
    <span class="token property">text-align</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>css的语法规则集主要包括选择器<strong>span</strong>和声明块<strong>key:value</strong></p><h2 id="规则" tabindex="-1"><a class="header-anchor" href="#规则" aria-hidden="true">#</a> @规则</h2><p>除了常规的样式表，有时候需要引入其他信息，比如 <mark>字符集</mark> ，<mark>其他样式表</mark> ，<mark>字体</mark> ，<mark>媒体查询</mark> ，<mark>动画</mark> 等。</p><ul><li>@namespace 告诉 CSS 引擎必须考虑XML命名空间。</li><li>@media, 如果满足媒体查询的条件则条件规则组里的规则生效。</li><li>@page, 描述打印文档时布局的变化.</li><li>@font-face, 描述将下载的外部的字体。</li><li>@keyframes, 描述 CSS 动画的关键帧。</li><li>@document, 如果文档样式表满足给定条件则条件规则组里的规则生效。 (推延至 CSS Level 4 规范)</li><li><mark>@import</mark> ,用于导入一个外部样式文件</li><li>@support，用于查询特定的 CSS 是否生效，可以结合 not、and 和 or 操作符进行后续的操作。</li></ul><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token comment">/* 如果支持自定义属性，则把 body 颜色设置为变量 varName 指定的颜色 */</span>
  <span class="token atrule"><span class="token rule">@support</span><span class="token punctuation">(</span><span class="token property">--foo</span><span class="token punctuation">:</span>green<span class="token punctuation">)</span></span> <span class="token punctuation">{</span>
    <span class="token selector">body</span> <span class="token punctuation">{</span>
      <span class="token property">color</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--varName<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>link 和 @import 都能导入一个样式文件，它们有什么区别嘛？</p><ul><li>link 是 HTML 标签，除了能导入 CSS 外，还能导入别的资源，比如图片、脚本和字体等；而 @import 是 CSS 的语法，只能用来导入 CSS；</li><li>link 导入的样式会在页面加载时同时加载，@import 导入的样式需等页面加载完成后再加载；</li><li>link 没有兼容性问题，@import 不兼容 ie5 以下；</li><li>link 可以通过 JS 操作 DOM 动态引入样式表改变样式，而@import不可以。</li></ul><h2 id="层叠性" tabindex="-1"><a class="header-anchor" href="#层叠性" aria-hidden="true">#</a> 层叠性</h2><p>css简称层叠样式表，简单来说，某个标签的样式有许多的css声明来源都能用到时，按照一定的规则进行层叠，优先级高的起作用。</p><ul><li>用户代理样式表中的声明(例如，浏览器的默认样式，在没有设置其他样式时使用)。</li><li>用户样式表中的常规声明(由用户设置的自定义样式。由于 Chrome 在很早的时候就放弃了用户样式表的功能，所以这里将不再考虑它的排序。)。</li><li>作者样式表中的常规声明(这些是我们 Web 开发人员设置的样式)。</li><li>作者样式表中的 !important 声明。</li><li>用户样式表中的 !important 声明。</li></ul><h2 id="选择器" tabindex="-1"><a class="header-anchor" href="#选择器" aria-hidden="true">#</a> 选择器</h2><p>css选择器是核心</p><h3 id="基础选择器" tabindex="-1"><a class="header-anchor" href="#基础选择器" aria-hidden="true">#</a> 基础选择器</h3><ul><li>标签选择器: h1</li><li>类选择器: .checked</li><li>id选择器: #picker</li><li>通配选择器: *</li></ul><h3 id="属性选择器" tabindex="-1"><a class="header-anchor" href="#属性选择器" aria-hidden="true">#</a> 属性选择器</h3><ul><li>[attr]：指定属性的元素；</li><li>[attr=val]：属性等于指定值的元素；</li><li>[attr*=val]：属性包含指定值的元素；</li><li>[attr^=val] ：属性以指定值开头的元素；</li><li>[attr$=val]：属性以指定值结尾的元素；</li><li>[attr~=val]：属性包含指定值(完整单词)的元素(不推荐使用)；</li><li>[attr|=val]：属性以指定值(完整单词)开头的元素(不推荐使用)；</li></ul><h3 id="组合选择器" tabindex="-1"><a class="header-anchor" href="#组合选择器" aria-hidden="true">#</a> 组合选择器</h3><ul><li>相邻兄弟选择器：A + B</li><li>普通兄弟选择器：A ~ B</li><li>子选择器：A &gt; B</li><li>后代选择器：A B</li></ul><h3 id="伪类" tabindex="-1"><a class="header-anchor" href="#伪类" aria-hidden="true">#</a> 伪类</h3><h4 id="条件伪类" tabindex="-1"><a class="header-anchor" href="#条件伪类" aria-hidden="true">#</a> 条件伪类</h4><ul><li>:lang()：基于元素语言来匹配页面元素；</li><li>:dir()：匹配特定文字书写方向的元素；</li><li>:has()：匹配包含指定元素的元素；</li><li>:is()：匹配指定选择器列表里的元素；</li><li>:not()：用来匹配不符合一组选择器的元素；</li></ul><h4 id="行为伪类" tabindex="-1"><a class="header-anchor" href="#行为伪类" aria-hidden="true">#</a> 行为伪类</h4><ul><li>:active：鼠标激活的元素；</li><li>:hover： 鼠标悬浮的元素；</li><li>:selection：鼠标选中的元素；</li></ul><h4 id="状态伪类" tabindex="-1"><a class="header-anchor" href="#状态伪类" aria-hidden="true">#</a> 状态伪类</h4><ul><li>:target：当前锚点的元素；</li><li>:link：未访问的链接元素；</li><li>:visited：已访问的链接元素；</li><li>:focus：输入聚焦的表单元素；</li><li>:required：输入必填的表单元素；</li><li>:valid：输入合法的表单元素；</li><li>:invalid：输入非法的表单元素；</li><li>:in-range：输入范围以内的表单元素；</li><li>:out-of-range：输入范围以外的表单元素；</li><li>:checked：选项选中的表单元素；</li><li>:optional：选项可选的表单元素；</li><li>:enabled：事件启用的表单元素；</li><li>:disabled：事件禁用的表单元素；</li><li>:read-only：只读的表单元素；</li><li>:read-write：可读可写的表单元素；</li><li>:blank：输入为空的表单元素；</li><li>:current()：浏览中的元素；</li><li>:past()：已浏览的元素；</li><li>:future()：未浏览的元素；</li></ul><h4 id="结构伪类" tabindex="-1"><a class="header-anchor" href="#结构伪类" aria-hidden="true">#</a> 结构伪类</h4><ul><li>:root：文档的根元素；</li><li>:empty：无子元素的元素；</li><li>:first-letter：元素的首字母；</li><li>:first-line：元素的首行；</li><li>:nth-child(n)：元素中指定顺序索引的元素；</li><li>:nth-last-child(n)：元素中指定逆序索引的元素；；</li><li>:first-child ：元素中为首的元素；</li><li>:last-child ：元素中为尾的元素；</li><li>:only-child：父元素仅有该元素的元素；</li><li>:nth-of-type(n) ：标签中指定顺序索引的标签；</li><li>:nth-last-of-type(n)：标签中指定逆序索引的标签；</li><li>:first-of-type ：标签中为首的标签；</li><li>:last-of-type：标签中为尾标签；</li><li>:only-of-type：父元素仅有该标签的标签；</li></ul><h4 id="伪元素" tabindex="-1"><a class="header-anchor" href="#伪元素" aria-hidden="true">#</a> 伪元素</h4><ul><li>::before：在元素前插入内容；</li><li>::after：在元素后插入内容；</li></ul><h2 id="优先级" tabindex="-1"><a class="header-anchor" href="#优先级" aria-hidden="true">#</a> 优先级</h2><figure><img src="`+r+`" alt="优先级顺序" tabindex="0" loading="lazy"><figcaption>优先级顺序</figcaption></figure><p>优先级就是分配给指定的 CSS 声明的一个权重，它由匹配的选择器中的每一种选择器类型的数值决定。为了记忆，可以把权重分成如下几个等级，数值越大的权重越高：</p><ul><li>10000：!important；</li><li>01000：内联样式；</li><li>00100：ID 选择器；</li><li>00010：类选择器、伪类选择器、属性选择器；</li><li>00001：元素选择器、伪元素选择器；</li><li>00000：通配选择器、后代选择器、兄弟选择器；</li></ul><h2 id="继承性" tabindex="-1"><a class="header-anchor" href="#继承性" aria-hidden="true">#</a> 继承性</h2><p>在 CSS 中有一个很重要的特性就是子元素会继承父元素对应属性计算后的值。比如页面根元素 html 的文本颜色默认是黑色的，页面中的所有其他元素都将继承这个颜色，当申明了如下样式后，box 文本将变成橙色。</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">body</span> <span class="token punctuation">{</span>
  <span class="token property">color</span><span class="token punctuation">:</span> orange<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.box</span> <span class="token punctuation">{</span>
  <span class="token property">color</span><span class="token punctuation">:</span> inherit<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>设想一下，如果 CSS 中不存在继承性，那么我们就需要为不同文本的标签都设置一下 color，这样一来的后果就是 CSS 的文件大小就会无限增大。</p><p>CSS 属性很多，但并不是所有的属性默认都是能继承父元素对应属性的，那哪些属性存在默认继承的行为呢？一定是那些不会影响到页面布局的属性，可以分为如下几类：</p><ul><li>字体相关：font-family、font-style、font-size、font-weight 等；</li><li>文本相关：text-align、text-indent、text-decoration、text-shadow、letter-spacing、word-spacing、white-space、line-height、color 等；</li><li>列表相关：list-style、list-style-image、list-style-type、list-style-position 等；</li><li>其他属性：visibility、cursor 等；</li></ul><p>对于其他默认不继承的属性也可以通过以下几个属性值来控制继承行为：</p><ul><li>inherit：继承父元素对应属性的计算值；</li><li>initial：应用该属性的默认值，比如 color 的默认值是 #000；</li><li>unset：如果属性是默认可以继承的，则取 inherit 的效果，否则同 initial；</li><li>revert：效果等同于 unset，兼容性差。</li></ul><h2 id="文档流" tabindex="-1"><a class="header-anchor" href="#文档流" aria-hidden="true">#</a> 文档流</h2><p>css的流式布局会把内容从左到右，从上到下的顺序进行排列展示</p><ul><li>块级元素默认会占满整行，所以多个块级盒子之间是从上到下排列的；</li><li>内联元素默认会在一行里一列一列的排布，当一行放不下的时候，会自动切换到下一行继续按照列排布；</li></ul><h3 id="如何脱离文档流" tabindex="-1"><a class="header-anchor" href="#如何脱离文档流" aria-hidden="true">#</a> 如何脱离文档流？</h3><p>脱流文档流指节点脱流正常文档流后，在正常文档流中的其他节点将忽略该节点并填补其原先空间。文档一旦脱流，计算其父节点高度时不会将其高度纳入，脱流节点不占据空间。有两种方式可以让元素脱离文档流：浮动和定位。</p><ul><li>使用浮动（float）会将元素脱离文档流，移动到容器左/右侧边界或者是另一个浮动元素旁边，该浮动元素之前占用的空间将被别的元素填补，另外浮动之后所占用的区域不会和别的元素之间发生重叠；</li><li>使用绝对定位（position: absolute;）或者固定定位（position: fixed;）也会使得元素脱离文档流，且空出来的位置将自动被后续节点填补。</li></ul><h2 id="盒模型" tabindex="-1"><a class="header-anchor" href="#盒模型" aria-hidden="true">#</a> 盒模型</h2><p>在 CSS 中任何元素都可以看成是一个盒子，而一个盒子是由 4 部分组成的：内容（content）、内边距（padding）、边框（border）和外边距（margin）。</p><p>盒模型有 2 种：标准盒模型和 IE 盒模型，分别是由 W3C 和 IExplore 制定的标准。</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">.box</span> <span class="token punctuation">{</span>
  <span class="token property">width</span><span class="token punctuation">:</span> 200px<span class="token punctuation">;</span>
  <span class="token property">height</span><span class="token punctuation">:</span> 200px<span class="token punctuation">;</span>
  <span class="token property">padding</span><span class="token punctuation">:</span> 10px<span class="token punctuation">;</span>
  <span class="token property">border</span><span class="token punctuation">:</span> 1px solid #eee<span class="token punctuation">;</span>
  <span class="token property">margin</span><span class="token punctuation">:</span> 10px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>标准盒模型认为：盒子的实际尺寸 = 内容（设置的宽/高） + 内边距 + 边框<br> 所以 .box 元素内容的宽度就为 200px，而实际的宽度则是 width + padding-left + padding-right + border-left-width + border-right-width = 200 + 10 + 10 + 1 + 1 = 222。<br> IE 盒模型认为：盒子的实际尺寸 = 设置的宽/高 = 内容 + 内边距 + 边框<br> .box 元素所占用的实际宽度为 200px，而内容的真实宽度则是 width - padding-left - padding-right - border-left-width - border-right-width = 200 - 10 - 10 - 1 - 1 = 178。</p><h2 id="格式化上下文" tabindex="-1"><a class="header-anchor" href="#格式化上下文" aria-hidden="true">#</a> 格式化上下文</h2><p>格式化上下文（Formatting Context）是 CSS2.1 规范中的一个概念，大概说的是页面中的一块渲染区域，规定了渲染区域内部的子元素是如何排版以及相互作用的。</p><p>不同类型的盒子有不同格式化上下文，大概有这 4 类：</p><p>BFC (Block Formatting Context) 块级格式化上下文；<br> IFC (Inline Formatting Context) 行内格式化上下文；<br> FFC (Flex Formatting Context) 弹性格式化上下文；<br> GFC (Grid Formatting Context) 格栅格式化上下文；</p><p>其中 BFC 和 IFC 在 CSS 中扮演着非常重要的角色，因为它们直接影响了网页布局，所以需要深入理解其原理。</p><h3 id="bfc" tabindex="-1"><a class="header-anchor" href="#bfc" aria-hidden="true">#</a> BFC</h3><p>块格式化上下文，它是一个独立的渲染区域，只有块级盒子参与，它规定了内部的块级盒子如何布局，并且与这个区域外部毫不相干。</p><figure><img src="`+u+'" alt="bfc" tabindex="0" loading="lazy"><figcaption>bfc</figcaption></figure><h3 id="bfc渲染规则" tabindex="-1"><a class="header-anchor" href="#bfc渲染规则" aria-hidden="true">#</a> BFC渲染规则</h3><ul><li>内部的盒子会在垂直方向，一个接一个地放置；</li><li>盒子垂直方向的距离由 margin 决定，属于同一个 BFC 的两个相邻盒子的 margin 会发生重叠；</li><li>每个元素的 margin 的左边，与包含块 border 的左边相接触(对于从左往右的格式化，否则相反)，即使存在浮动也是如此；</li><li>BFC 的区域不会与 float 盒子重叠；</li><li>BFC 就是页面上的一个隔离的独立容器，容器里面的子元素不会影响到外面的元素。反之也如此。</li><li>计算 BFC 的高度时，浮动元素也参与计算。</li></ul><h3 id="如何创建bfc" tabindex="-1"><a class="header-anchor" href="#如何创建bfc" aria-hidden="true">#</a> 如何创建BFC</h3><ul><li>根元素：html</li><li>非溢出的可见元素：overflow 不为 visible</li><li>设置浮动：float 属性不为 none</li><li>设置定位：position 为 absolute 或 fixed</li><li>定义成块级的非块级元素：display: inline-block/table-cell/table-caption/flex/inline-flex/grid/inline-grid</li></ul><h3 id="bfc应用场景" tabindex="-1"><a class="header-anchor" href="#bfc应用场景" aria-hidden="true">#</a> BFC应用场景</h3><p>1、 自适应两栏布局</p><p>应用原理：BFC 的区域不会和浮动区域重叠，所以就可以把侧边栏固定宽度且左浮动，而对右侧内容触发 BFC，使得它的宽度自适应该行剩余宽度。</p><p>2、清除内部浮动</p><p>浮动造成的问题就是父元素高度坍塌，所以清除浮动需要解决的问题就是让父元素的高度恢复正常。而用 BFC 清除浮动的原理就是：计算 BFC 的高度时，浮动元素也参与计算。只要触发父元素的 BFC 即可。</p><p>3、 防止垂直 margin 合并</p><p>BFC 渲染原理之一：同一个 BFC 下的垂直 margin 会发生合并。所以如果让 2 个元素不在同一个 BFC 中即可阻止垂直 margin 合并。那如何让 2 个相邻的兄弟元素不在同一个 BFC 中呢？可以给其中一个元素外面包裹一层，然后触发其包裹层的 BFC，这样一来 2 个元素就不会在同一个 BFC 中了。</p><h3 id="ifc" tabindex="-1"><a class="header-anchor" href="#ifc" aria-hidden="true">#</a> IFC</h3><p>IFC 的形成条件非常简单，块级元素中仅包含内联级别元素，需要注意的是当IFC中有块级元素插入时，会产生两个匿名块将父元素分割开来，产生两个 IFC。</p><figure><img src="'+d+`" alt="ifc" tabindex="0" loading="lazy"><figcaption>ifc</figcaption></figure><h3 id="ifc渲染规则" tabindex="-1"><a class="header-anchor" href="#ifc渲染规则" aria-hidden="true">#</a> IFC渲染规则</h3><ul><li>子元素在水平方向上一个接一个排列，在垂直方向上将以容器顶部开始向下排列；</li><li>节点无法声明宽高，其中 margin 和 padding 在水平方向有效在垂直方向无效；</li><li>节点在垂直方向上以不同形式对齐；</li><li>能把在一行上的框都完全包含进去的一个矩形区域，被称为该行的线盒（line box）。线盒的宽度是由包含块（containing box）和与其中的浮动来决定；</li><li>IFC 中的 line box 一般左右边贴紧其包含块，但 float 元素会优先排列。</li><li>IFC 中的 line box 高度由 line-height 计算规则来确定，同个 IFC 下的多个 line box 高度可能会不同；</li><li>当内联级盒子的总宽度少于包含它们的 line box 时，其水平渲染规则由 text-align 属性值来决定；</li><li>当一个内联盒子超过父元素的宽度时，它会被分割成多盒子，这些盒子分布在多个 line box 中。如果子元素未设置强制换行的情况下，inline box 将不可被分割，将会溢出父元素</li></ul><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">&gt;</span></span>It can get <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>strong</span><span class="token punctuation">&gt;</span></span>very complicated<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>storng</span><span class="token punctuation">&gt;</span></span> once you start looking into it.<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><figure><img src="`+k+'" alt="ifc" tabindex="0" loading="lazy"><figcaption>ifc</figcaption></figure><p>对应上面这样一串 HTML 分析如下：</p><p>p 标签是一个 block container，对内将产生一个 IFC；<br> 由于一行没办法显示完全，所以产生了 2 个线盒（line box）；线盒的宽度就继承了 p 的宽度；高度是由里面的内联盒子的 line-height 决定；<br> It can get：匿名的内联盒子；<br> very complicated：strong 标签产生的内联盒子；<br> once you start：匿名的内联盒子；<br> looking into it.：匿名的内联盒子</p><h3 id="ifc-应用场景" tabindex="-1"><a class="header-anchor" href="#ifc-应用场景" aria-hidden="true">#</a> IFC 应用场景</h3><ul><li>水平居中：当一个块要在环境中水平居中时，设置其为 inline-block 则会在外层产生 IFC，通过 text-align 则可以使其水平居中。</li><li>垂直居中：创建一个 IFC，用其中一个元素撑开父元素的高度，然后设置其 vertical-align: middle，其他行内元素则可以在此父元素下垂直居中。</li></ul><h2 id="层叠上下文" tabindex="-1"><a class="header-anchor" href="#层叠上下文" aria-hidden="true">#</a> 层叠上下文</h2><p>特定的 HTML 元素或者 CSS 属性产生层叠上下文，MDN 中给出了这么一个列表，符合以下任一条件的元素都会产生层叠上下文：</p><ul><li>html 文档根元素</li><li>声明 position: absolute/relative 且 z-index 值不为 auto 的元素；</li><li>声明 position: fixed/sticky 的元素；</li><li>flex 容器的子元素，且 z-index 值不为 auto；</li><li>grid 容器的子元素，且 z-index 值不为 auto；</li><li>opacity 属性值小于 1 的元素；</li><li>mix-blend-mode 属性值不为 normal 的元素；</li><li>以下任意属性值不为 none 的元素： <ul><li>transform</li><li>filter</li><li>perspective</li><li>clip-path</li><li>mask / mask-image / mask-border</li></ul></li><li>isolation 属性值为 isolate 的元素；</li><li>-webkit-overflow-scrolling 属性值为 touch 的元素；</li><li>will-change 值设定了任一属性而该属性在 non-initial 值时会创建层叠上下文的元素；</li><li>contain 属性值为 layout、paint 或包含它们其中之一的合成值（比如 contain: strict、contain: content）的元素。</li></ul><h3 id="层叠等级" tabindex="-1"><a class="header-anchor" href="#层叠等级" aria-hidden="true">#</a> 层叠等级</h3><p>层叠等级指节点在三维空间 Z 轴上的上下顺序。它分两种情况：</p><ul><li>在同一个层叠上下文中，它描述定义的是该层叠上下文中的层叠上下文元素在 Z 轴上的上下顺序；</li><li>在其他普通元素中，它描述定义的是这些普通元素在 Z 轴上的上下顺序；</li></ul><p>普通节点的层叠等级优先由其所在的层叠上下文决定，层叠等级的比较只有在当前层叠上下文中才有意义，脱离当前层叠上下文的比较就变得无意义了。</p><h3 id="层叠顺序" tabindex="-1"><a class="header-anchor" href="#层叠顺序" aria-hidden="true">#</a> 层叠顺序</h3><p>在同一个层叠上下文中如果有多个元素，那么他们之间的层叠顺序是怎么样的呢？</p><figure><img src="'+h+'" alt="层叠顺序" tabindex="0" loading="lazy"><figcaption>层叠顺序</figcaption></figure><p>以下这个列表越往下层叠优先级越高，视觉上的效果就是越容易被用户看到（不会被其他元素覆盖）：</p><ul><li>层叠上下文的 border 和 background</li><li>z-index &lt; 0 的子节点</li><li>标准流内块级非定位的子节点</li><li>浮动非定位的子节点</li><li>标准流内行内非定位的子节点</li><li>z-index: auto/0 的子节点</li><li>z-index &gt; 0的子节点</li></ul>',97),C={href:"https://juejin.cn/post/6844903667175260174",target:"_blank",rel:"noopener noreferrer"},w=e('<h2 id="值和单位" tabindex="-1"><a class="header-anchor" href="#值和单位" aria-hidden="true">#</a> 值和单位</h2><p>CSS 的声明是由属性和值组成的，而值的类型有许多种：</p><ul><li>数值：长度值 ，用于指定例如元素 width、border-width、font-size 等属性的值；</li><li>百分比：可以用于指定尺寸或长度，例如取决于父容器的 width、height 或默认的 font-size；</li><li>颜色：用于指定 background-color、color 等；</li><li>坐标位置：以屏幕的左上角为坐标原点定位元素的位置，比如常见的 background-position、top、right、bottom 和 left 等属性；</li><li>函数：用于指定资源路径或背景图片的渐变，比如 url()、linear-gradient() 等；</li></ul><h3 id="px" tabindex="-1"><a class="header-anchor" href="#px" aria-hidden="true">#</a> px</h3><p>屏幕分辨率是指在屏幕的横纵方向上的像素点数量，比如分辨率 1920×1080 意味着水平方向含有 1920 个像素数，垂直方向含有 1080 个像素数</p><figure><img src="'+m+`" alt="px" tabindex="0" loading="lazy"><figcaption>px</figcaption></figure><p>而 px 表示的是 CSS 中的像素，在 CSS 中它是绝对的长度单位，也是最基础的单位，其他长度单位会自动被浏览器换算成 px。但是对于设备而言，它其实又是相对的长度单位，比如宽高都为 2px，在正常的屏幕下，其实就是 4 个像素点，而在设备像素比(devicePixelRatio) 为 2 的 Retina 屏幕下，它就有 16 个像素点。所以屏幕尺寸一致的情况下，屏幕分辨率越高，显示效果就越细腻。</p><h3 id="设备像素-device-pixels" tabindex="-1"><a class="header-anchor" href="#设备像素-device-pixels" aria-hidden="true">#</a> 设备像素（Device pixels）</h3><p>设备屏幕的物理像素，表示的是屏幕的横纵有多少像素点；和屏幕分辨率是差不多的意思。</p><h3 id="设备像素比-dpr" tabindex="-1"><a class="header-anchor" href="#设备像素比-dpr" aria-hidden="true">#</a> 设备像素比（DPR）</h3><p>设备像素比表示 1 个 CSS 像素等于几个物理像素。</p><p>计算公式：DPR = 物理像素数 / 逻辑像素数；</p><p>在浏览器中可以通过 window.devicePixelRatio 来获取当前屏幕的 DPR。</p><h3 id="em" tabindex="-1"><a class="header-anchor" href="#em" aria-hidden="true">#</a> em</h3><p>em 是 CSS 中的相对长度单位中的一个</p><ul><li>在 font-size 中使用是相对于父元素的 font-size 大小，比如父元素 font-size: 16px，当给子元素指定 font-size: 2em 的时候，经过计算后它的字体大小会是 32px；</li><li>在其他属性中使用是相对于自身的字体大小，如 width/height/padding/margin 等；</li></ul><p>em 在计算的时候是会层层计算的，比如：</p><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code>  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code>  <span class="token selector">div</span><span class="token punctuation">{</span><span class="token property">font-size</span><span class="token punctuation">:</span>2em<span class="token punctuation">}</span>
  <span class="token selector">p</span><span class="token punctuation">{</span><span class="token property">font-size</span><span class="token punctuation">:</span>2em<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>我们们都知道每个浏览器都会给 HTML 根元素 html 设置一个默认的 font-size，而这个值通常是 <mark>16px</mark>,所以 p 标签最终计算出来后的字体大小会是 16 * 2 * 2 = 64px</p><h3 id="rem" tabindex="-1"><a class="header-anchor" href="#rem" aria-hidden="true">#</a> rem</h3><p>rem(root em) 和 em 一样，也是一个相对长度单位，不过 rem 相对的是 HTML 的根元素 html。<br> rem 由于是基于 html 的 font-size 来计算，所以通常用于自适应网站或者 H5 中。<br> 比如在做 H5 的时候，前端通常会让 UI 给 750px 宽的设计图，而在开发的时候可以基于 iPhone X 的尺寸 375px * 812px 来写页面，这样一来的话，就可以用下面的 JS 依据当前页面的视口宽度自动计算出根元素 html 的基准 font-size 是多少。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">doc<span class="token punctuation">,</span> win</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">var</span> docEl <span class="token operator">=</span> doc<span class="token punctuation">.</span>documentElement<span class="token punctuation">,</span>
        resizeEvt <span class="token operator">=</span> <span class="token string">&#39;orientationchange&#39;</span> <span class="token keyword">in</span> window <span class="token operator">?</span> <span class="token string">&#39;orientationchange&#39;</span> <span class="token operator">:</span> <span class="token string">&#39;resize&#39;</span><span class="token punctuation">,</span>
        psdWidth <span class="token operator">=</span> <span class="token number">750</span><span class="token punctuation">,</span>  <span class="token comment">// 设计图宽度</span>
        <span class="token function-variable function">recalc</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">var</span> clientWidth <span class="token operator">=</span> docEl<span class="token punctuation">.</span>clientWidth<span class="token punctuation">;</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span> <span class="token operator">!</span>clientWidth <span class="token punctuation">)</span> <span class="token keyword">return</span><span class="token punctuation">;</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span> clientWidth <span class="token operator">&gt;=</span> <span class="token number">640</span> <span class="token punctuation">)</span> <span class="token punctuation">{</span>
                docEl<span class="token punctuation">.</span>style<span class="token punctuation">.</span>fontSize <span class="token operator">=</span> <span class="token number">200</span> <span class="token operator">*</span> <span class="token punctuation">(</span> <span class="token number">640</span> <span class="token operator">/</span> psdWidth <span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token string">&#39;px&#39;</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
                docEl<span class="token punctuation">.</span>style<span class="token punctuation">.</span>fontSize <span class="token operator">=</span> <span class="token number">200</span> <span class="token operator">*</span> <span class="token punctuation">(</span> clientWidth <span class="token operator">/</span> psdWidth <span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token string">&#39;px&#39;</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">;</span>

    <span class="token keyword">if</span> <span class="token punctuation">(</span> <span class="token operator">!</span>doc<span class="token punctuation">.</span>addEventListener <span class="token punctuation">)</span> <span class="token keyword">return</span><span class="token punctuation">;</span>
    <span class="token comment">// 绑定事件的时候最好配合防抖函数</span>
    win<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span> resizeEvt<span class="token punctuation">,</span> <span class="token function">debounce</span><span class="token punctuation">(</span>recalc<span class="token punctuation">,</span> <span class="token number">1000</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token boolean">false</span> <span class="token punctuation">)</span><span class="token punctuation">;</span>
    doc<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span> <span class="token string">&#39;DOMContentLoaded&#39;</span><span class="token punctuation">,</span> recalc<span class="token punctuation">,</span> <span class="token boolean">false</span> <span class="token punctuation">)</span><span class="token punctuation">;</span>
    
    <span class="token keyword">function</span> <span class="token function">debounce</span><span class="token punctuation">(</span><span class="token parameter">func<span class="token punctuation">,</span> wait</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">var</span> timeout<span class="token punctuation">;</span>
        <span class="token keyword">return</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">var</span> context <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">;</span>
            <span class="token keyword">var</span> args <span class="token operator">=</span> arguments<span class="token punctuation">;</span>
            <span class="token function">clearTimeout</span><span class="token punctuation">(</span>timeout<span class="token punctuation">)</span>
            timeout <span class="token operator">=</span> <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
                <span class="token function">func</span><span class="token punctuation">.</span><span class="token function">apply</span><span class="token punctuation">(</span>context<span class="token punctuation">,</span> args<span class="token punctuation">)</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span> wait<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">(</span>document<span class="token punctuation">,</span> window<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>比如当视口是 375px 的时候，经过计算 html 的 font-size 会是 100px，这样有什么好处呢？好处就是方便写样式，比如从设计图量出来的 header 高度是 50px 的，那我们写样式的时候就可以直接写：</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">header</span> <span class="token punctuation">{</span>
    <span class="token property">height</span><span class="token punctuation">:</span> 0.5rem<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="vm-vh" tabindex="-1"><a class="header-anchor" href="#vm-vh" aria-hidden="true">#</a> vm/vh</h3><p>vw 和 vh 分别是相对于屏幕视口宽度和高度而言的长度单位：</p><p>1vw = 视口宽度均分成 100 份中 1 份的长度；<br> 1vh = 视口高度均分成 100 份中 1 份的长度；</p><p>在 JS 中 100vw = window.innerWidth，100vh = window.innerHeight。</p><p>vw/vh 的出现使得多了一种写自适应布局的方案，开发者不再局限于 rem 了。</p><p>相对视口的单位，除了 vw/vh 外，还有 vmin 和 vmax：</p><p>vmin：取 vw 和 vh 中值较小的；<br> vmax：取 vw 和 vh 中值较大的；</p><h2 id="颜色体系" tabindex="-1"><a class="header-anchor" href="#颜色体系" aria-hidden="true">#</a> 颜色体系</h2><p>根据 CSS 颜色草案 中提到的颜色值类型，大概可以把它们分为这几类：</p><ul><li>颜色关键字(white,black,orange...)</li><li>transparent 关键字</li><li>currentColor 关键字</li><li>RGB 颜色</li><li>HSL 颜色</li></ul><h3 id="currentcolor-关键字" tabindex="-1"><a class="header-anchor" href="#currentcolor-关键字" aria-hidden="true">#</a> currentColor 关键字</h3><p>currentColor 会取当前元素继承父级元素的文本颜色值或声明的文本颜色值，即 computed 后的 color 值。</p><p>比如，对于如下 CSS，该元素的边框颜色会是 red：</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">.btn</span> <span class="token punctuation">{</span>
    <span class="token property">color</span><span class="token punctuation">:</span> red<span class="token punctuation">;</span>
    <span class="token property">border</span><span class="token punctuation">:</span> 1px solid currentColor<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="十六进制" tabindex="-1"><a class="header-anchor" href="#十六进制" aria-hidden="true">#</a> 十六进制</h3><p>十六进制 中的每种颜色的值范围是 00~ff，值越大表示颜色越深。所以一个颜色正常是 6 个十六进制字符加上 # 组成，比如红色就是 #ff0000。<br> 如果 十六进制 颜色需要加上不透明度，那就需要加上 alpha 通道的值，它的范围也是 00~ff，比如一个带不透明度为 67% 的红色可以这样写 #ff0000aa。<br> 使用十六进制符号表示颜色的时候，都是用 2 个十六进制表示一个颜色，如果这 2 个字符相同，还可以缩减成只写 1 个，比如，红色 #f00；带 67% 不透明度的红色 #f00a。</p><h3 id="rgb" tabindex="-1"><a class="header-anchor" href="#rgb" aria-hidden="true">#</a> rgb</h3><p>当 RGB 用函数表示的时候，每个值的范围是 0~255 或者 0%~100%，所以红色是 rgb(255, 0, 0)， 或者 rgb(100%, 0, 0)。<br> 如果需要使用函数来表示带不透明度的颜色值，值的范围是 0~1 及其之间的小数或者 0%~100%，比如带 67% 不透明度的红色是 rgba(255, 0, 0, 0.67) 或者 rgba(100%, 0%, 0%, 67%)</p><div class="hint-container tip"><p class="hint-container-title">提示</p><p>需要注意的是 RGB 这 3 个颜色值需要保持一致的写法，要嘛用数字要嘛用百分比，而不透明度的值的可以不用和 RGB 保持一致写法。比如 rgb(100%, 0, 0) 这个写法是无效的；而 rgb(100%, 0%, 0%, 0.67) 是有效的。</p></div><h3 id="hsl-a-颜色" tabindex="-1"><a class="header-anchor" href="#hsl-a-颜色" aria-hidden="true">#</a> HSL[A] 颜色</h3><p>HSL[A] 颜色是由色相(hue)-饱和度(saturation)-亮度(lightness)-不透明度组成的颜色体系。</p><ul><li>色相（H）是色彩的基本属性，值范围是 0360 或者 0deg360deg， 0 (或 360) 为红色, 120 为绿色, 240 为蓝色；</li><li>饱和度（S）是指色彩的纯度，越高色彩越纯，低则逐渐变灰，取 0~100% 的数值；0% 为灰色， 100% 全色；</li><li>亮度（L），取 0~100%，0% 为暗，100% 为白；</li><li>不透明度（A），取 0100%，或者01及之间的小数；</li></ul><p>给一个按钮设置不透明度为 67% 的红色的 color 的写法，以下全部写法效果一致：</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code>  <span class="token selector">button</span> <span class="token punctuation">{</span>
    <span class="token property">color</span><span class="token punctuation">:</span> #ff0000aa<span class="token punctuation">;</span>
    <span class="token property">color</span><span class="token punctuation">:</span> #f00a<span class="token punctuation">;</span>
    <span class="token property">color</span><span class="token punctuation">:</span> <span class="token function">rgba</span><span class="token punctuation">(</span>255<span class="token punctuation">,</span> 0<span class="token punctuation">,</span> 0<span class="token punctuation">,</span> 0.67<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token property">color</span><span class="token punctuation">:</span> <span class="token function">rgb</span><span class="token punctuation">(</span>100% 0% 0% / 67%<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token property">color</span><span class="token punctuation">:</span> <span class="token function">hsla</span><span class="token punctuation">(</span>0<span class="token punctuation">,</span> 100%<span class="token punctuation">,</span> 50%<span class="token punctuation">,</span> 67%<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token property">color</span><span class="token punctuation">:</span> <span class="token function">hsl</span><span class="token punctuation">(</span>0deg 100% 50% / 67%<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="媒体查询" tabindex="-1"><a class="header-anchor" href="#媒体查询" aria-hidden="true">#</a> 媒体查询</h2><p>媒体查询是指针对不同的设备、特定的设备特征或者参数进行定制化的修改网站的样式。</p><p>你可以通过给 <link> 加上 media 属性来指定该样式文件只能对什么设备生效，不指定的话默认是 all，即对所有设备都生效：</p><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>link</span> <span class="token attr-name">rel</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>stylesheet<span class="token punctuation">&quot;</span></span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>styles.css<span class="token punctuation">&quot;</span></span> <span class="token attr-name">media</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>screen<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>link</span> <span class="token attr-name">rel</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>stylesheet<span class="token punctuation">&quot;</span></span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>styles.css<span class="token punctuation">&quot;</span></span> <span class="token attr-name">media</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>print<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>都支持哪些设备类型？</p><ul><li>all：适用于所有设备；</li><li>print：适用于在打印预览模式下在屏幕上查看的分页材料和文档；</li><li>screen：主要用于屏幕；</li><li>speech：主要用于语音合成器。</li></ul><figure><img src="`+v+`" alt="media" tabindex="0" loading="lazy"><figcaption>media</figcaption></figure><p>除了通过 <link> 让指定设备生效外，还可以通过 @media 让 CSS 规则在特定的条件下才能生效。响应式页面就是使用了 @media 才让一个页面能够同时适配 PC、Pad 和手机端。</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token atrule"><span class="token rule">@media</span> <span class="token punctuation">(</span><span class="token property">min-width</span><span class="token punctuation">:</span> 1024px<span class="token punctuation">)</span></span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>媒体查询支持逻辑操作符：</p><p>and：查询条件都满足的时候才生效；<br> not：查询条件取反；<br> only：整个查询匹配的时候才生效，常用语兼容旧浏览器，使用时候必须指定媒体类型；<br> 逗号或者 or：查询条件满足一项即可匹配；</p>`,60),S={href:"https://developer.mozilla.org/zh-CN/docs/Web/CSS/CSS_media_queries/Using_media_queries#%E5%AA%92%E4%BD%93%E7%89%B9%E6%80%A7",target:"_blank",rel:"noopener noreferrer"};function _(i,F){const s=p("ExternalLinkIcon");return o(),c("div",null,[g,f,n("iframe",{src:i.$withBase("/markmap/css.html"),width:"100%",height:"500",frameborder:"0",scrolling:"No",leftmargin:"0",topmargin:"0"},null,8,x),y,n("p",null,[a("参考:"),n("a",C,[a("彻底搞懂css层叠上下文，层叠等级，层叠顺序，z-index"),t(s)])]),w,n("p",null,[a("媒体查询还支持众多的"),n("a",S,[a("媒体特性"),t(s)]),a("，使得它可以写出很复杂的查询条件：")])])}const z=l(b,[["render",_],["__file","1.html.vue"]]);export{z as default};