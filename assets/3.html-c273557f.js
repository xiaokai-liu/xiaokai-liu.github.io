const e=JSON.parse('{"key":"v-5d14eb75","path":"/react/%E9%AB%98%E7%BA%A7/3.html","title":"React核心源码解析2","lang":"zh-CN","frontmatter":{"date":"2022-07-06T00:00:00.000Z","category":["react"],"tag":["react源码"],"description":"React核心源码解析2 diff算法 在render阶段，对于update的组件，他会将当前组件与该组件在上次更新时对应的Fiber节点⽐较（也就是俗称的Diff算法），将⽐较的结果⽣成新Fiber节点。 官⽹对diff算法的介绍：https://zh-hans.reactjs.org/docs/reconciliation.html#the-diffing-algorithm","head":[["meta",{"property":"og:url","content":"https://mister-hope.github.io/react/%E9%AB%98%E7%BA%A7/3.html"}],["meta",{"property":"og:title","content":"React核心源码解析2"}],["meta",{"property":"og:description","content":"React核心源码解析2 diff算法 在render阶段，对于update的组件，他会将当前组件与该组件在上次更新时对应的Fiber节点⽐较（也就是俗称的Diff算法），将⽐较的结果⽣成新Fiber节点。 官⽹对diff算法的介绍：https://zh-hans.reactjs.org/docs/reconciliation.html#the-diffing-algorithm"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-12-08T10:01:54.000Z"}],["meta",{"property":"article:author","content":"xiaokai"}],["meta",{"property":"article:tag","content":"react源码"}],["meta",{"property":"article:published_time","content":"2022-07-06T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2023-12-08T10:01:54.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"React核心源码解析2\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2022-07-06T00:00:00.000Z\\",\\"dateModified\\":\\"2023-12-08T10:01:54.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"xiaokai\\",\\"url\\":\\"https://mister-hope.com\\"}]}"]]},"headers":[{"level":2,"title":"diff算法","slug":"diff算法","link":"#diff算法","children":[{"level":3,"title":"Diff的瓶颈及处理⽅法","slug":"diff的瓶颈及处理方法","link":"#diff的瓶颈及处理方法","children":[]},{"level":3,"title":"Diff是如何实现的","slug":"diff是如何实现的","link":"#diff是如何实现的","children":[]},{"level":3,"title":"单节点diff","slug":"单节点diff","link":"#单节点diff","children":[]},{"level":3,"title":"多节点diff","slug":"多节点diff","link":"#多节点diff","children":[]}]},{"level":2,"title":"状态更新","slug":"状态更新","link":"#状态更新","children":[{"level":3,"title":"概览","slug":"概览","link":"#概览","children":[]},{"level":3,"title":"创建update对象","slug":"创建update对象","link":"#创建update对象","children":[]},{"level":3,"title":"从fiber到root","slug":"从fiber到root","link":"#从fiber到root","children":[]},{"level":3,"title":"调度更新","slug":"调度更新","link":"#调度更新","children":[]},{"level":3,"title":"Update","slug":"update","link":"#update","children":[]}]},{"level":2,"title":"深入理解优先级","slug":"深入理解优先级","link":"#深入理解优先级","children":[{"level":3,"title":"什么是优先级","slug":"什么是优先级","link":"#什么是优先级","children":[]},{"level":3,"title":"如何调度优先级","slug":"如何调度优先级","link":"#如何调度优先级","children":[]},{"level":3,"title":"demo","slug":"demo-2","link":"#demo-2","children":[]},{"level":3,"title":"ReactDOM.render执行流程","slug":"reactdom-render执行流程","link":"#reactdom-render执行流程","children":[]},{"level":3,"title":"创建Update","slug":"创建update","link":"#创建update","children":[]},{"level":3,"title":"React其他⼊⼝函数","slug":"react其他入口函数","link":"#react其他入口函数","children":[]},{"level":3,"title":"this.setState","slug":"this-setstate","link":"#this-setstate","children":[]}]},{"level":2,"title":"极简hook实现","slug":"极简hook实现","link":"#极简hook实现","children":[{"level":3,"title":"更新是什么","slug":"更新是什么","link":"#更新是什么","children":[]},{"level":3,"title":"update的数据结构","slug":"update的数据结构","link":"#update的数据结构","children":[]},{"level":3,"title":"状态如何保存","slug":"状态如何保存","link":"#状态如何保存","children":[]},{"level":3,"title":"Hooks数据结构","slug":"hooks数据结构","link":"#hooks数据结构","children":[]},{"level":3,"title":"模拟react调度更新流程","slug":"模拟react调度更新流程","link":"#模拟react调度更新流程","children":[]},{"level":3,"title":"计算state","slug":"计算state","link":"#计算state","children":[]}]},{"level":2,"title":"Hooks数据结构","slug":"hooks数据结构-1","link":"#hooks数据结构-1","children":[{"level":3,"title":"dispatcher","slug":"dispatcher","link":"#dispatcher","children":[]},{"level":3,"title":"dispatch异常场景","slug":"dispatch异常场景","link":"#dispatch异常场景","children":[]},{"level":3,"title":"Hook数据结构","slug":"hook数据结构","link":"#hook数据结构","children":[]},{"level":3,"title":"useState与useReducer","slug":"usestate与usereducer","link":"#usestate与usereducer","children":[]},{"level":3,"title":"useEffect","slug":"useeffect","link":"#useeffect","children":[]},{"level":3,"title":"useRef","slug":"useref","link":"#useref","children":[]},{"level":3,"title":"useMemo与useCallback","slug":"usememo与usecallback","link":"#usememo与usecallback","children":[]}]},{"level":2,"title":"Concurrent Mode","slug":"concurrent-mode","link":"#concurrent-mode","children":[{"level":3,"title":"概览","slug":"概览-2","link":"#概览-2","children":[]},{"level":3,"title":"scheduler原理及实现","slug":"scheduler原理及实现","link":"#scheduler原理及实现","children":[]},{"level":3,"title":"lane模型","slug":"lane模型","link":"#lane模型","children":[]}]}],"git":{"createdTime":1702029714000,"updatedTime":1702029714000,"contributors":[{"name":"xiaokai-liu","email":"1404197328@qq.com","commits":1}]},"readingTime":{"minutes":40.02,"words":12005},"filePathRelative":"react/高级/3.md","localizedDate":"2022年7月6日","excerpt":"<h1> React核心源码解析2</h1>\\n<h2> diff算法</h2>\\n<p>在render阶段，对于update的组件，他会将当前组件与该组件在上次更新时对应的Fiber节点⽐较（也就是俗称的Diff算法），将⽐较的结果⽣成新Fiber节点。</p>\\n<p>官⽹对diff算法的介绍：<a href=\\"https://zh-hans.reactjs.org/docs/reconciliation.html#the-diffing-algorithm\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">https://zh-hans.reactjs.org/docs/reconciliation.html#the-diffing-algorithm</a></p>","autoDesc":true}');export{e as data};