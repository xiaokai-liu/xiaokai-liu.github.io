import{_ as t,r as p,o as e,c,e as o,w as l,f as i,a as n,b as s}from"./app-02fa1acf.js";const u="/assets/relative-9477dc5d.jpg",k={},r=i(`<h1 id="position属性简介" tabindex="-1"><a class="header-anchor" href="#position属性简介" aria-hidden="true">#</a> position属性简介</h1><p>先来看看什么是文档流：</p><p>w3c里面的解释是：正常流中的框属于格式化上下文，它可以是块的或内联的，但不能同时出现。块级框参与块格式化上下文。内联级别的框参与内联格式上下文。</p><p>有三种情况将使得元素脱离文档流而存在，分别是 float，absolute ，fixed</p><p>position属性在通常情况下有4个可选值，分别是：static、relative、absolute、fixed、sticky。</p><h2 id="static-默认值" tabindex="-1"><a class="header-anchor" href="#static-默认值" aria-hidden="true">#</a> static 默认值</h2><p>该关键字指定元素使用正常的布局行为，遵循正常的文档流对象。此时 top、right、bottom、left 属性无效</p><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span><span class="token punctuation">&gt;</span></span><span class="token style"><span class="token language-css">
	<span class="token selector">.box</span> <span class="token punctuation">{</span>
		<span class="token property">width</span><span class="token punctuation">:</span> 300px<span class="token punctuation">;</span>
		<span class="token property">height</span><span class="token punctuation">:</span> 300px<span class="token punctuation">;</span>
		<span class="token property">background-color</span><span class="token punctuation">:</span> #ccc<span class="token punctuation">;</span>
	<span class="token punctuation">}</span>

	<span class="token selector">.box_chl</span> <span class="token punctuation">{</span>
		<span class="token property">width</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span>
		<span class="token property">height</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span>
		<span class="token property">background-color</span><span class="token punctuation">:</span> red<span class="token punctuation">;</span>

		<span class="token property">position</span><span class="token punctuation">:</span> static<span class="token punctuation">;</span>
		<span class="token comment">/* 这个left没有起作用 */</span>
		<span class="token property">left</span><span class="token punctuation">:</span> 10px<span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">&gt;</span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>box<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
		<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>box_chl<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
		<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">&gt;</span></span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="relative-相对定位" tabindex="-1"><a class="header-anchor" href="#relative-相对定位" aria-hidden="true">#</a> relative 相对定位</h2><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span><span class="token punctuation">&gt;</span></span><span class="token style"><span class="token language-css">
	<span class="token selector">.box</span> <span class="token punctuation">{</span>
		<span class="token property">width</span><span class="token punctuation">:</span> 300px<span class="token punctuation">;</span>
		<span class="token property">height</span><span class="token punctuation">:</span> 300px<span class="token punctuation">;</span>
		<span class="token property">background-color</span><span class="token punctuation">:</span> #ccc<span class="token punctuation">;</span>
	<span class="token punctuation">}</span>

	<span class="token selector">.box_chl1</span> <span class="token punctuation">{</span>
		<span class="token property">width</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span>
		<span class="token property">height</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span>
		<span class="token property">background-color</span><span class="token punctuation">:</span> red<span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
	<span class="token selector">.box_chl2</span> <span class="token punctuation">{</span>
		<span class="token property">width</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span>
		<span class="token property">height</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span>
		<span class="token property">background-color</span><span class="token punctuation">:</span> blue<span class="token punctuation">;</span>
		
		<span class="token property">position</span><span class="token punctuation">:</span> relative<span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
	<span class="token selector">.box_chl3</span> <span class="token punctuation">{</span>
		<span class="token property">width</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span>
		<span class="token property">height</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span>
		<span class="token property">background-color</span><span class="token punctuation">:</span> green<span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">&gt;</span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>box<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
		<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>box_chl1<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
		<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>box_chl2<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
		<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>box_chl3<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="`+u+`" alt="relative" tabindex="0" loading="lazy"><figcaption>relative</figcaption></figure><h2 id="absolute-绝对定位" tabindex="-1"><a class="header-anchor" href="#absolute-绝对定位" aria-hidden="true">#</a> absolute 绝对定位</h2><p>绝对定位的元素的位置相对于最近的已定位父元素，如果元素没有已定位的父元素，那么它的位置相对于html</p><p>absolute 定位使元素的位置与文档流无关，因此不占据空间。绝对定位后会脱离文档流</p><p>absolute 定位的元素和其他元素重叠。</p><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span><span class="token punctuation">&gt;</span></span><span class="token style"><span class="token language-css">
	<span class="token selector">.box</span> <span class="token punctuation">{</span>
		<span class="token property">width</span><span class="token punctuation">:</span> 300px<span class="token punctuation">;</span>
		<span class="token property">height</span><span class="token punctuation">:</span> 300px<span class="token punctuation">;</span>
		<span class="token property">background-color</span><span class="token punctuation">:</span> #ccc<span class="token punctuation">;</span>
	<span class="token punctuation">}</span>

	<span class="token selector">.box_chl1</span> <span class="token punctuation">{</span>
		<span class="token property">width</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span>
		<span class="token property">height</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span>
		<span class="token property">background-color</span><span class="token punctuation">:</span> red<span class="token punctuation">;</span>
		<span class="token property">margin-left</span><span class="token punctuation">:</span> 50px<span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
	
	<span class="token selector">.box_chl1_demo</span><span class="token punctuation">{</span>
		<span class="token property">width</span><span class="token punctuation">:</span> 50px<span class="token punctuation">;</span>
		<span class="token property">height</span><span class="token punctuation">:</span> 50px<span class="token punctuation">;</span>
		<span class="token property">background</span><span class="token punctuation">:</span> #00FFFF<span class="token punctuation">;</span>
		<span class="token property">position</span><span class="token punctuation">:</span> absolute<span class="token punctuation">;</span>
		<span class="token property">left</span><span class="token punctuation">:</span> 30px<span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">&gt;</span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>box<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
		<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>box_chl1<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
			<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>box_chl1_demo<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
				
			<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
		<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="fixed-固定定位" tabindex="-1"><a class="header-anchor" href="#fixed-固定定位" aria-hidden="true">#</a> fixed 固定定位</h2><p>元素的位置相对于浏览器窗口是固定位置。即使窗口是滚动的它也不会移动。</p><p>Fixed定位使元素的位置与文档流无关，因此不占据空间。</p><p>Fixed定位的元素和其他元素重叠。</p><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span><span class="token punctuation">&gt;</span></span><span class="token style"><span class="token language-css">
	<span class="token selector">.box</span> <span class="token punctuation">{</span>
		<span class="token property">width</span><span class="token punctuation">:</span> 100%<span class="token punctuation">;</span>
		<span class="token property">height</span><span class="token punctuation">:</span> 4000px<span class="token punctuation">;</span>
		<span class="token property">background-color</span><span class="token punctuation">:</span> #ccc<span class="token punctuation">;</span>
		<span class="token property">background</span><span class="token punctuation">:</span> <span class="token function">linear-gradient</span><span class="token punctuation">(</span>to top<span class="token punctuation">,</span>#ffff00<span class="token punctuation">,</span>#5500ff<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>

	<span class="token selector">.box_chl1</span> <span class="token punctuation">{</span>
		<span class="token property">width</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span>
		<span class="token property">height</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span>
		<span class="token property">background-color</span><span class="token punctuation">:</span> red<span class="token punctuation">;</span>
		<span class="token property">position</span><span class="token punctuation">:</span> fixed<span class="token punctuation">;</span>
		<span class="token property">right</span><span class="token punctuation">:</span> 50px<span class="token punctuation">;</span>
		<span class="token property">top</span><span class="token punctuation">:</span> 50px<span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">&gt;</span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>box<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
		<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>box_chl1<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="sticky-粘性定位" tabindex="-1"><a class="header-anchor" href="#sticky-粘性定位" aria-hidden="true">#</a> sticky 粘性定位</h2><p>position：sticky又称为粘性定位，是css3新增的。粘性定位的元素依赖于用户的滚动，在相对定位（relative）与固定定位（fixed）之间进行切换，基于位偏移的值进行偏移。<br> 粘性定位可以被认为是相对定位和固定定位的混合<br> 元素在跨越特定位偏移之前为相对定位，之后为固定定位。</p><p>示例：</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">.div</span><span class="token punctuation">{</span> <span class="token property">position</span><span class="token punctuation">:</span> sticky<span class="token punctuation">;</span> <span class="token property">top</span><span class="token punctuation">:</span> 50px<span class="token punctuation">;</span> <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>设置了以上元素，在屏幕范围（viewport）视口滚动到元素top距离小于50px之前，div为相对定位。之后元素将固定在与顶部距离50px的位置，直到viewport视口回滚到50px以内。<br> 特点：</p><p>该元素并不脱离文档流，仍然保留元素原本在文档流中的位置。</p><p>元素固定的相对偏移是相对于离它最近的具有滚动框的祖先元素，如果祖先元素都不可以滚动，那么是相对于viewport来计算元素的偏移量</p><p>当元素在容器中被滚动超过指定的偏移值时，元素在容器内固定在指定位置。亦即如果你设置了top:<br> 50px，那么在sticky元素到达距离相对定位的元素顶部50px的位置时固定，不再向上移动。</p><h3 id="不生效的情况" tabindex="-1"><a class="header-anchor" href="#不生效的情况" aria-hidden="true">#</a> 不生效的情况</h3><ul><li><p>情况1: 未指定 top, right, top 和 bottom 中的任何一个值<br> 此时，设置 position: sticky 相当于设置 position: relative。<br> 要生效，要指定 top, right, top 或 bottom 中的任何一个值。</p></li><li><p>情况2: 垂直滚动时，粘性约束元素高度小于等于 sticky 元素高度<br> 不生效的原因：当粘性约束元素滚出视口时，sticky 元素也会滚出视口。粘性约束元素比 sticky 元素还小，sticky 元素没有显示固定定位状态的机会。<br> 同样的，水平滚动时，粘性约束元素宽度小于等于 sticky 元素宽度时，也不会生效。</p></li><li><p>情况3: 粘性约束元素和容器元素之间存在 overflow: hidden 的元素</p></li></ul>`,31),d=n("div",{class:"language-html line-numbers-mode","data-ext":"html"},[n("pre",{class:"language-html"},[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("div")]),s(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("container"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),s(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("div")]),s(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("top"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("div")]),n("span",{class:"token punctuation"},">")]),s(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("div")]),s(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("sticky"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),s(" shunyun"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("div")]),n("span",{class:"token punctuation"},">")]),s(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("div")]),n("span",{class:"token punctuation"},">")]),s(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("div")]),s(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("container"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),s(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("div")]),s(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("top"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("div")]),n("span",{class:"token punctuation"},">")]),s(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("div")]),s(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("sticky"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),s(" shunyun"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("div")]),n("span",{class:"token punctuation"},">")]),s(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("div")]),n("span",{class:"token punctuation"},">")]),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),v=n("div",{class:"language-css line-numbers-mode","data-ext":"css"},[n("pre",{class:"language-css"},[n("code",null,[n("span",{class:"token selector"},".container"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token property"},"height"),n("span",{class:"token punctuation"},":"),s(" 300vh"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token property"},"position"),n("span",{class:"token punctuation"},":"),s(" relative"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`

`),n("span",{class:"token selector"},".top"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token property"},"height"),n("span",{class:"token punctuation"},":"),s(" 500px"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`

`),n("span",{class:"token selector"},".outer"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token property"},"height"),n("span",{class:"token punctuation"},":"),s(" 120vh"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`

`),n("span",{class:"token selector"},".sticky"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token property"},"top"),n("span",{class:"token punctuation"},":"),s(" 0"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token property"},"position"),n("span",{class:"token punctuation"},":"),s(" sticky"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token property"},"height"),n("span",{class:"token punctuation"},":"),s(" 100vh"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token property"},"line-height"),n("span",{class:"token punctuation"},":"),s(" 100vh"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token property"},"font-size"),n("span",{class:"token punctuation"},":"),s(" 20px"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token property"},"font-weight"),n("span",{class:"token punctuation"},":"),s(" 600"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token property"},"color"),n("span",{class:"token punctuation"},":"),s(" #1345B7"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token property"},"text-align"),n("span",{class:"token punctuation"},":"),s(" center"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token property"},"background"),n("span",{class:"token punctuation"},":"),s(" #000000"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1);function b(m,g){const a=p("CodeDemo");return e(),c("div",null,[r,o(a,{id:"code-demo-97",type:"normal",title:"sticky",code:"eJy9T8tuwyAQ/BVEr3VKkqaVaNpDv4MLJdSg0MUyazcP5d+zCjbK6xwuSDOz89hzh3+BS75c+Z6ZoFP6VNxEQO3Btop/KWD0LmiMDRHLF8Lu0Qm9WW9JwZLrYNvBqCz/A7P4Mzcp0cBJCWL7bOSsrx1KNheidx8Za2Ly6CNI1tqg0feWiIMCBRNqcn25EKLZFEHs8NZ8OsvmWZLrjhpylEzcJGfRABefs5KBVlT3iF+aWCW/s5LNcrOC/g/yNzEGmhhiK9nTdP66+H4fQLQbrHTwNfUwFmjQQPxos67b2MGKTsTp5VX8cAQO4btt"},{default:l(()=>[d,v]),_:1})])}const y=t(k,[["render",b],["__file","4.html.vue"]]);export{y as default};