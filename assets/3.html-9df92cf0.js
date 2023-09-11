const e=JSON.parse('{"key":"v-3aa8b71f","path":"/css/super/3.html","title":"Flex 布局详解","lang":"zh-CN","frontmatter":{"date":"2022-03-1","category":["css"],"tag":["css属性","flex"],"description":"Flex 布局详解 简介 弹性盒子是 CSS3 的一种新的布局模式。CSS3 弹性盒（ Flexible Box 或 flexbox），是一种当页面需要适应不同的屏幕大小以及设备类型时确保元素拥有恰当的行为的布局方式。引入弹性盒布局模型的目的是提供一种更加有效的方式来对一个容器中的子元素进行排列、对齐和分配空白空间。 弹性盒子由弹性容器(Flex container)和弹性子元素(Flex item)组成。弹性容器通过设置 display 属性的值为 flex 或 inline-flex将其定义为弹性容器。弹性容器内包含了一个或多个弹性子元素。","head":[["meta",{"property":"og:url","content":"https://mister-hope.github.io/css/super/3.html"}],["meta",{"property":"og:title","content":"Flex 布局详解"}],["meta",{"property":"og:description","content":"Flex 布局详解 简介 弹性盒子是 CSS3 的一种新的布局模式。CSS3 弹性盒（ Flexible Box 或 flexbox），是一种当页面需要适应不同的屏幕大小以及设备类型时确保元素拥有恰当的行为的布局方式。引入弹性盒布局模型的目的是提供一种更加有效的方式来对一个容器中的子元素进行排列、对齐和分配空白空间。 弹性盒子由弹性容器(Flex container)和弹性子元素(Flex item)组成。弹性容器通过设置 display 属性的值为 flex 或 inline-flex将其定义为弹性容器。弹性容器内包含了一个或多个弹性子元素。"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-09-11T12:55:54.000Z"}],["meta",{"property":"article:author","content":"xiaokai"}],["meta",{"property":"article:tag","content":"css属性"}],["meta",{"property":"article:tag","content":"flex"}],["meta",{"property":"article:published_time","content":"2022-03-01T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2023-09-11T12:55:54.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Flex 布局详解\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2022-03-01T00:00:00.000Z\\",\\"dateModified\\":\\"2023-09-11T12:55:54.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"xiaokai\\",\\"url\\":\\"https://mister-hope.com\\"}]}"]]},"headers":[{"level":2,"title":"简介","slug":"简介","link":"#简介","children":[]},{"level":2,"title":"Flex 基本概念","slug":"flex-基本概念","link":"#flex-基本概念","children":[]},{"level":2,"title":"Flex 容器","slug":"flex-容器","link":"#flex-容器","children":[{"level":3,"title":"flex-direction: 决定主轴的方向(即项目的排列方向)","slug":"flex-direction-决定主轴的方向-即项目的排列方向","link":"#flex-direction-决定主轴的方向-即项目的排列方向","children":[]},{"level":3,"title":"flex-wrap: 决定容器内项目是否可换行","slug":"flex-wrap-决定容器内项目是否可换行","link":"#flex-wrap-决定容器内项目是否可换行","children":[]},{"level":3,"title":"flex-flow: flex-direction 和 flex-wrap 的简写形式","slug":"flex-flow-flex-direction-和-flex-wrap-的简写形式","link":"#flex-flow-flex-direction-和-flex-wrap-的简写形式","children":[]},{"level":3,"title":"justify-content：定义了项目在主轴的对齐方式。","slug":"justify-content-定义了项目在主轴的对齐方式。","link":"#justify-content-定义了项目在主轴的对齐方式。","children":[]},{"level":3,"title":"align-items: 定义了项目在交叉轴上的对齐方式","slug":"align-items-定义了项目在交叉轴上的对齐方式","link":"#align-items-定义了项目在交叉轴上的对齐方式","children":[]},{"level":3,"title":"align-content: 定义了多根轴线的对齐方式，如果项目只有一根轴线，那么该属性将不起作用","slug":"align-content-定义了多根轴线的对齐方式-如果项目只有一根轴线-那么该属性将不起作用","link":"#align-content-定义了多根轴线的对齐方式-如果项目只有一根轴线-那么该属性将不起作用","children":[]}]},{"level":2,"title":"Flex 项目属性","slug":"flex-项目属性","link":"#flex-项目属性","children":[{"level":3,"title":"order","slug":"order","link":"#order","children":[]},{"level":3,"title":"flex-basis","slug":"flex-basis","link":"#flex-basis","children":[]},{"level":3,"title":"flex-grow","slug":"flex-grow","link":"#flex-grow","children":[]},{"level":3,"title":"flex-shrink","slug":"flex-shrink","link":"#flex-shrink","children":[]},{"level":3,"title":"flex","slug":"flex","link":"#flex","children":[]},{"level":3,"title":"align-self","slug":"align-self","link":"#align-self","children":[]}]}],"git":{"createdTime":1694436954000,"updatedTime":1694436954000,"contributors":[{"name":"xiaokai-liu","email":"1404197328@qq.com","commits":1}]},"readingTime":{"minutes":10.18,"words":3053},"filePathRelative":"css/super/3.md","localizedDate":"2022年3月1日","excerpt":"<h1> Flex 布局详解</h1>\\n<h2> 简介</h2>\\n<p>弹性盒子是 CSS3 的一种新的布局模式。CSS3 弹性盒（ Flexible Box 或 flexbox），是一种当页面需要适应不同的屏幕大小以及设备类型时确保元素拥有恰当的行为的布局方式。引入弹性盒布局模型的目的是提供一种更加有效的方式来对一个容器中的子元素进行排列、对齐和分配空白空间。</p>\\n<p>弹性盒子由弹性容器(Flex container)和弹性子元素(Flex item)组成。弹性容器通过设置 display 属性的值为 flex 或 inline-flex将其定义为弹性容器。弹性容器内包含了一个或多个弹性子元素。</p>","autoDesc":true}');export{e as data};