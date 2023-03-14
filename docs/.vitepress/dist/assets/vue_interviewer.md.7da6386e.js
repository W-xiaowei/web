import{_ as e,c as r,o as t,a}from"./app.08f2048c.js";const m=JSON.parse('{"title":"今天我是面试官","description":"","frontmatter":{},"headers":[{"level":2,"title":"vue 中 key 的功能是什么？","slug":"vue-中-key-的功能是什么","link":"#vue-中-key-的功能是什么","children":[]},{"level":2,"title":"为什么用 vuex，不用 event bus？ 这两者有什么区别？","slug":"为什么用-vuex-不用-event-bus-这两者有什么区别","link":"#为什么用-vuex-不用-event-bus-这两者有什么区别","children":[]},{"level":2,"title":"vue router 的实现原理","slug":"vue-router-的实现原理","link":"#vue-router-的实现原理","children":[]},{"level":2,"title":"以头条为例，采用组件化方式设计一个信息流？","slug":"以头条为例-采用组件化方式设计一个信息流","link":"#以头条为例-采用组件化方式设计一个信息流","children":[]},{"level":2,"title":"请简述什么是双向数据绑定和单向数据流，以及它们的区别","slug":"请简述什么是双向数据绑定和单向数据流-以及它们的区别","link":"#请简述什么是双向数据绑定和单向数据流-以及它们的区别","children":[]},{"level":2,"title":"介绍下你所理解的 MVVM 框架，如 Angular、React、Vue 都解决了什么问题？","slug":"介绍下你所理解的-mvvm-框架-如-angular、react、vue-都解决了什么问题","link":"#介绍下你所理解的-mvvm-框架-如-angular、react、vue-都解决了什么问题","children":[]},{"level":2,"title":"Vue 框架中组件消息通信方式","slug":"vue-框架中组件消息通信方式","link":"#vue-框架中组件消息通信方式","children":[]},{"level":2,"title":"如何理解虚拟 DOM?","slug":"如何理解虚拟-dom","link":"#如何理解虚拟-dom","children":[]}],"relativePath":"vue/interviewer.md","lastUpdated":1678708626000}'),i={name:"vue/interviewer.md"},l=a('<h1 id="今天我是面试官" tabindex="-1">今天我是面试官 <a class="header-anchor" href="#今天我是面试官" aria-hidden="true">#</a></h1><h2 id="vue-中-key-的功能是什么" tabindex="-1">vue 中 key 的功能是什么？ <a class="header-anchor" href="#vue-中-key-的功能是什么" aria-hidden="true">#</a></h2><ul><li>用于虚拟节点树之间，diff 时更好地比较 如果不设置 key，或者用 index 作为 key 会有什么问题？</li></ul><h2 id="为什么用-vuex-不用-event-bus-这两者有什么区别" tabindex="-1">为什么用 vuex，不用 event bus？ 这两者有什么区别？ <a class="header-anchor" href="#为什么用-vuex-不用-event-bus-这两者有什么区别" aria-hidden="true">#</a></h2><h2 id="vue-router-的实现原理" tabindex="-1">vue router 的实现原理 <a class="header-anchor" href="#vue-router-的实现原理" aria-hidden="true">#</a></h2><ul><li>Location   href, path</li><li>知道多页面应用中，如何区分前端路由和后端路由？</li><li>路由哈希模式和 history 模式的区别 -</li><li>把 nextTick 中的回调放到事件循环的微任务队列中。</li></ul><ol><li>vue 发送请求在 created 生命周期钩子中，尽量避免 DOM 渲染挂载后再发送请求，更新数据，更改 DOM；</li><li>vue router 组件懒加载；</li><li>index.html 文件控制在 14kb 之内，这是基于 TCP 的慢开始规则，第一个响应包的大小就是 14kb，应该包含浏览器开始渲染页面所需的所有内容，或者至少包含页面模板（第一次渲染所需的 CSS 和 HTML）</li></ol><h2 id="以头条为例-采用组件化方式设计一个信息流" tabindex="-1">以头条为例，采用组件化方式设计一个信息流？ <a class="header-anchor" href="#以头条为例-采用组件化方式设计一个信息流" aria-hidden="true">#</a></h2><ul><li>组件功能抽象能力</li><li>组件设计思路</li><li>功能划分：多种文章显示格式，刷新提示，评论/媒体/时间等信息显示，refresh/loadmore 功能，dislike 功能，动态广告</li><li>卡片形式抽象：单图、多图、无图、视频、ugc、刷新条等</li></ul><p><strong>要求：有清晰思路，良好的信息流组件设计模式，可扩展性强并给出核心功能的实现方式</strong></p><h2 id="请简述什么是双向数据绑定和单向数据流-以及它们的区别" tabindex="-1">请简述什么是双向数据绑定和单向数据流，以及它们的区别 <a class="header-anchor" href="#请简述什么是双向数据绑定和单向数据流-以及它们的区别" aria-hidden="true">#</a></h2><p><strong>双向数据绑定</strong></p><p>双向数据绑定意味着 UI 动态地绑定到模型数据，这样当 UI 改变时，模型数据就随之变化，反之亦然。</p><p><strong>单向数据流</strong></p><p>单向数据流意味着 model 是唯一来源。UI 触发消息的变化，将用户行为标记为 model。只有 model 具有访问更改应用程序状态的权限。其效果是数据总是朝一个方向流动，这使得理解起来更容易。</p><p><strong>二者有什么优缺点</strong></p><p>单向数据流是确定性的，数据流动方向可以跟踪，流动单一，追查问题的时候可以跟快捷。缺点就是写起来不太方便。要使 UI 发生变更就必须创建各种 action 来维护对应的 state 双向绑定，优点是使用方便，值和 UI 双绑定，但是由于各种数据相互依赖相互绑定，导致数据问题的源头难以被跟踪到，子组件修改父组件，兄弟组件互相修改有有违设计原则</p><p>可以介绍一下模板引擎的原理，比如实现类似 <code>html</code> 这种模板将其中变量替换为对应值的方式。</p><h2 id="介绍下你所理解的-mvvm-框架-如-angular、react、vue-都解决了什么问题" tabindex="-1">介绍下你所理解的 MVVM 框架，如 Angular、React、Vue 都解决了什么问题？ <a class="header-anchor" href="#介绍下你所理解的-mvvm-框架-如-angular、react、vue-都解决了什么问题" aria-hidden="true">#</a></h2><p><strong>要求：能够从每个框架的生态系统，甚至结合之前的项目及不同的业务特点，给出框架的优劣</strong></p><h2 id="vue-框架中组件消息通信方式" tabindex="-1">Vue 框架中组件消息通信方式 <a class="header-anchor" href="#vue-框架中组件消息通信方式" aria-hidden="true">#</a></h2><p>父子之间层级过多时，当父子组件之间层级不多的时候，父组件可以一层层的向子组件传递数据或者子组件一层层向父组件发送消息，代码上没有太难维护的地方。可是，一旦父子组件之间层级变多后，传递一个数据或者发送一个消息就变得麻烦。这块如果了解开源的 Element 组件库，就会知道其实现方式：构造一个函数自动向上/向下查询父亲节点，以<code>[组件名, 消息名, 参数]</code>三元组进行消息传递，降低长链传播成本;</p><p>具体实现参考：<a href="https://github.com/ElemeFE/element/blob/dev/src/mixins/emitter.js" target="_blank" rel="noreferrer">https://github.com/ElemeFE/element/blob/dev/src/mixins/emitter.js</a></p><h2 id="如何理解虚拟-dom" tabindex="-1">如何理解虚拟 DOM? <a class="header-anchor" href="#如何理解虚拟-dom" aria-hidden="true">#</a></h2><p>对虚拟 dom 和 diff 算法中的一些细节理解</p><p><a href="https://github.com/livoras/blog/issues/13" target="_blank" rel="noreferrer">https://github.com/livoras/blog/issues/13</a></p><p><strong>要求：写出 diff 算法的核心部分</strong></p>',27),n=[l];function d(s,u,h,o,c,v){return t(),r("div",null,n)}const g=e(i,[["render",d]]);export{m as __pageData,g as default};
