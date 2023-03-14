import{_ as e,c as i,o as l,a as t}from"./app.1b98ebf1.js";const f=JSON.parse('{"title":"工具","description":"","frontmatter":{},"headers":[{"level":3,"title":"严格模式","slug":"严格模式","link":"#严格模式","children":[]},{"level":3,"title":"Profiler","slug":"profiler","link":"#profiler","children":[]}],"relativePath":"react/utils.md","lastUpdated":1678796648000}'),a={name:"react/utils.md"},r=t('<h1 id="工具" tabindex="-1">工具 <a class="header-anchor" href="#工具" aria-hidden="true">#</a></h1><h3 id="严格模式" tabindex="-1">严格模式 <a class="header-anchor" href="#严格模式" aria-hidden="true">#</a></h3><p>StrictMode(<code>React.StrictMode</code>)，本质是一个组件，该组件不进行 UI 渲染（<code>React.Fragment &lt;&gt; &lt;/&gt;</code>），它的作用是，在渲染内部组件时，发现不合适的代码。</p><ul><li>识别不安全的生命周期</li><li>关于使用过时字符串 ref API 的警告</li><li>关于使用废弃的 findDOMNode 方法的警告</li><li>检测意外的副作用 <ul><li>React 要求，副作用代码仅出现在以下生命周期函数中</li><li>ComponentDidMount</li><li>ComponentDidUpdate</li><li>ComponentWillUnMount</li></ul></li></ul><p>副作用：一个函数中，做了一些会影响函数外部数据的事情，例如：</p><ol><li>异步处理</li><li>改变参数值</li><li>setState</li><li>本地存储</li><li>改变函数外部的变量</li></ol><p>相反的，如果一个函数没有副作用，则可以认为该函数是一个纯函数</p><p>在严格模式下，虽然不能监控到具体的副作用代码，但它会将不能具有副作用的函数调用两遍，以便发现问题。（这种情况，仅在开发模式下有效）</p><ul><li>检测过时的 context API</li></ul><h3 id="profiler" tabindex="-1">Profiler <a class="header-anchor" href="#profiler" aria-hidden="true">#</a></h3><p>性能分析工具</p><p>分析某一次或多次提交（更新），涉及到的组件的渲染时间</p><p>火焰图：得到某一次提交，每个组件总的渲染时间以及自身的渲染时间</p><p>排序图：得到某一次提交，每个组件自身渲染时间的排序</p><p>组件图：某一个组件，在多次提交中，自身渲染花费的时间</p>',15),o=[r];function n(d,c,p,s,_,h){return l(),i("div",null,o)}const m=e(a,[["render",n]]);export{f as __pageData,m as default};
