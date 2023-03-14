import{_ as e,c as t,o as a,a as o}from"./app.1b98ebf1.js";const v=JSON.parse('{"title":"Vue 和 React 的核心区别","description":"","frontmatter":{},"headers":[{"level":2,"title":"Vue 与 Angular 以及 React 的区别是什么？","slug":"vue-与-angular-以及-react-的区别是什么","link":"#vue-与-angular-以及-react-的区别是什么","children":[]},{"level":2,"title":"Composition API 与 React Hook 很像，区别是什么","slug":"composition-api-与-react-hook-很像-区别是什么","link":"#composition-api-与-react-hook-很像-区别是什么","children":[]},{"level":2,"title":"Vue 和 React 区别","slug":"vue-和-react-区别","link":"#vue-和-react-区别","children":[]},{"level":2,"title":"Vue 的优点","slug":"vue-的优点","link":"#vue-的优点","children":[]}],"relativePath":"vue/vs.md","lastUpdated":1678708626000}'),l={name:"vue/vs.md"},i=o('<h1 id="vue-和-react-的核心区别" tabindex="-1">Vue 和 React 的核心区别 <a class="header-anchor" href="#vue-和-react-的核心区别" aria-hidden="true">#</a></h1><h2 id="vue-与-angular-以及-react-的区别是什么" tabindex="-1"><strong><em>Vue</em> 与 <em>Angular</em> 以及 <em>React</em> 的区别是什么？</strong> <a class="header-anchor" href="#vue-与-angular-以及-react-的区别是什么" aria-hidden="true">#</a></h2><blockquote><p>关于 <em>Vue</em> 和其他框架的不同，官方专门写了一篇文档，从性能、体积、灵活性等多个方面来进行了说明。 详细可以参阅：<a href="https://cn.vuejs.org/v2/guide/comparison.html" target="_blank" rel="noreferrer"><em>https://cn.vuejs.org/v2/guide/comparison.html</em></a></p></blockquote><h2 id="composition-api-与-react-hook-很像-区别是什么" tabindex="-1">Composition API 与 React Hook 很像，区别是什么 <a class="header-anchor" href="#composition-api-与-react-hook-很像-区别是什么" aria-hidden="true">#</a></h2><p>从 React Hook 的实现角度看，React Hook 是根据 useState 调用的顺序来确定下一次重渲染时的 state 是来源于哪个 useState，所以出现了以下限制</p><ul><li>不能在循环、条件、嵌套函数中调用 Hook</li><li>必须确保总是在你的 React 函数的顶层调用 Hook</li><li>useEffect、useMemo 等函数必须手动确定依赖关系</li></ul><p>而 Composition API 是基于 Vue 的响应式系统实现的，与 React Hook 的相比</p><ul><li>声明在 setup 函数内，一次组件实例化只调用一次 setup，而 React Hook 每次重渲染都需要调用 Hook，使得 React 的 GC 比 Vue 更有压力，性能也相对于 Vue 来说也较慢</li><li>Compositon API 的调用不需要顾虑调用顺序，也可以在循环、条件、嵌套函数中使用</li><li>响应式系统自动实现了依赖收集，进而组件的部分的性能优化由 Vue 内部自己完成，而 React Hook 需要手动传入依赖，而且必须必须保证依赖的顺序，让 useEffect、useMemo 等函数正确的捕获依赖变量，否则会由于依赖不正确使得组件性能下降。</li></ul><p>虽然 Compositon API 看起来比 React Hook 好用，但是其设计思想也是借鉴 React Hook 的。</p><h2 id="vue-和-react-区别" tabindex="-1">Vue 和 React 区别 <a class="header-anchor" href="#vue-和-react-区别" aria-hidden="true">#</a></h2><blockquote><p>定位相同：处理 UI 层的，vue 提倡渐进式处理，react 没有 vue 推崇模版写法，react 是 all in js jsx， vue 支持 jsx， react 不支持 vue 的 template react hooks， vue3 借鉴了，都有 hoos 风格的 api UI 更新策略：react 传入一个新数据，不能修改旧数据，vue 会根据两次数据渲染 dom 的 diff 更新 UI，数据变化，就会计划更新 UI，都会延迟更新 vue 文化：全部封装好；React 推崇第三方库结合 vue 有 keep-alive， react 没有，重新渲染，需要自己实现 vue css scoped；react 需要第三方：css modules/style-component</p></blockquote><p><strong>相似之处：</strong></p><ul><li>都将注意力集中保持在核心库，而将其他功能如路由和全局状态管理交给相关的库；</li><li>都有自己的构建工具，能让你得到一个根据最佳实践设置的项目模板；</li><li>都使用了 Virtual DOM（虚拟 DOM）提高重绘性能；</li><li>都有 props 的概念，允许组件间的数据传递；</li><li>都鼓励组件化应用，将应用分拆成一个个功能明确的模块，提高复用性。</li></ul><p><strong>不同之处 ：</strong></p><p><strong>1）数据流</strong> Vue 默认支持数据双向绑定，而 React 一直提倡单向数据流 <strong>2）虚拟 DOM</strong> Vue2.x 开始引入&quot;Virtual DOM&quot;，消除了和 React 在这方面的差异，但是在具体的细节还是有各自的特点。</p><ul><li>Vue 宣称可以更快地计算出 Virtual DOM 的差异，这是由于它在渲染过程中，会跟踪每一个组件的依赖关系，不需要重新渲染整个组件树。</li><li>对于 React 而言，每当应用的状态被改变时，全部子组件都会重新渲染。当然，这可以通过 PureComponent/shouldComponentUpdate 这个生命周期方法来进行控制，但 Vue 将此视为默认的优化。</li></ul><p><strong>3）组件化</strong> React 与 Vue 最大的不同是模板的编写。</p><ul><li>Vue 鼓励写近似常规 HTML 的模板。写起来很接近标准 HTML 元素，只是多了一些属性。</li><li>React 推荐你所有的模板通用 JavaScript 的语法扩展——JSX 书写。</li></ul><p>具体来讲：React 中 render 函数是支持闭包特性的，所以 import 的组件在 render 中可以直接调用。但是在 Vue 中，由于模板中使用的数据都必须挂在 this 上进行一次中转，所以 import 一个组件完了之后，还需要在 components 中再声明下。 <strong>4）监听数据变化的实现原理不同</strong></p><ul><li>Vue 通过 getter/setter 以及一些函数的劫持，能精确知道数据变化，不需要特别的优化就能达到很好的性能</li><li>React 默认是通过比较引用的方式进行的，如果不优化（PureComponent/shouldComponentUpdate）可能导致大量不必要的 vDOM 的重新渲染。这是因为 Vue 使用的是可变数据，而 React 更强调数据的不可变。</li></ul><p><strong>5）高阶组件</strong> react 可以通过高阶组件（HOC）来扩展，而 Vue 需要通过 mixins 来扩展。 高阶组件就是高阶函数，而 React 的组件本身就是纯粹的函数，所以高阶函数对 React 来说易如反掌。相反 Vue.js 使用 HTML 模板创建视图组件，这时模板无法有效的编译，因此 Vue 不能采用 HOC 来实现。 <strong>6）构建工具</strong> 两者都有自己的构建工具：</p><ul><li>React ==&gt; Create React APP</li><li>Vue ==&gt; vue-cli</li></ul><p><strong>7）跨平台</strong></p><ul><li>React ==&gt; React Native</li><li>Vue ==&gt; Weex</li></ul><h2 id="vue-的优点" tabindex="-1">Vue 的优点 <a class="header-anchor" href="#vue-的优点" aria-hidden="true">#</a></h2><ul><li>轻量级框架：只关注视图层，是一个构建数据的视图集合，大小只有几十 kb ；</li><li>简单易学：国人开发，中文文档，不存在语言障碍 ，易于理解和学习；</li><li>双向数据绑定：保留了 angular 的特点，在数据操作方面更为简单；</li><li>组件化：保留了 react 的优点，实现了 html 的封装和重用，在构建单页面应用方面有着独特的优势；</li><li>视图，数据，结构分离：使数据的更改更为简单，不需要进行逻辑代码的修改，只需要操作数据就能完成相关操作；</li><li>虚拟 DOM：dom 操作是非常耗费性能的，不再使用原生的 dom 操作节点，极大解放 dom 操作，但具体操作的还是 dom 不过是换了另一种方式；</li><li>运行速度更快：相比较于 react 而言，同样是操作虚拟 dom，就性能而言， vue 存在很大的优势。</li></ul>',26),r=[i];function u(c,s,n,p,d,h){return a(),t("div",null,r)}const g=e(l,[["render",u]]);export{v as __pageData,g as default};
