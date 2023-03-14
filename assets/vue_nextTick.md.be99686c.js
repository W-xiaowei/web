import{_ as e,c as t,o as i,a}from"./app.1b98ebf1.js";const T=JSON.parse('{"title":"$nextTick 工作原理","description":"","frontmatter":{},"headers":[{"level":2,"title":"参考资料","slug":"参考资料","link":"#参考资料","children":[]}],"relativePath":"vue/nextTick.md","lastUpdated":1678796648000}'),n={name:"vue/nextTick.md"},s=a(`<h1 id="nexttick-工作原理" tabindex="-1">$nextTick 工作原理 <a class="header-anchor" href="#nexttick-工作原理" aria-hidden="true">#</a></h1><div class="danger custom-block"><p class="custom-block-title">DANGER</p><p>写作中</p></div><p>Vue 的 nextTick 其本质是对 JavaScript 执行原理 EventLoop 的一种应用。</p><p>作用：<em>vue</em> 更新 <em>DOM</em> 是异步更新的，数据变化，<em>DOM</em> 的更新不会马上完成，<em>nextTick</em> 的回调是在下次 <em>DOM</em> 更新循环结束之后执行的延迟回调。</p><p>nextTick 的核心是利用了如 Promise 、MutationObserver、setImmediate、setTimeout 的原生 JavaScript 方法来模拟对应的微/宏任务的实现，本质是为了利用 JavaScript 的这些异步回调任务队列来实现 Vue 框架中自己的异步回调队列。</p><p>nextTick 不仅是 Vue 内部的异步队列的调用方法，同时也允许开发者在实际项目中使用这个方法来满足实际应用中对 DOM 更新数据时机的后续逻辑处理</p><p>nextTick 是典型的将底层 JavaScript 执行原理应用到具体案例中的示例，引入异步更新队列机制的原因 ∶</p><ul><li>如果是同步更新，则多次对一个或多个属性赋值，会频繁触发 UI/DOM 的渲染，可以减少一些无用渲染</li><li>同时由于 VirtualDOM 的引入，每一次状态发生变化后，状态变化的信号会发送给组件，组件内部使用 VirtualDOM 进行计算得出需要更新的具体的 DOM 节点，然后对 DOM 进行更新操作，每次更新状态后的渲染过程需要更多的计算，而这种无用功也将浪费更多的性能，所以异步渲染变得更加至关重要</li></ul><p>Vue 采用了数据驱动视图的思想，但是在一些情况下，仍然需要操作 DOM。有时候，可能遇到这样的情况，DOM1 的数据发生了变化，而 DOM2 需要从 DOM1 中获取数据，那这时就会发现 DOM2 的视图并没有更新，这时就需要用到了 nextTick 了。</p><p>由于 Vue 的 DOM 操作是异步的，所以，在上面的情况中，就要将 DOM2 获取数据的操作写在$nextTick 中。</p><div class="language-vue line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki one-dark-pro vp-code-dark"><code><span class="line"><span style="color:#ABB2BF;">this.$nextTick(() =&gt; { // 获取数据的操作...})</span></span>
<span class="line"></span></code></pre><pre class="shiki min-dark vp-code-light"><code><span class="line"><span style="color:#B392F0;">this.$nextTick(() =&gt; { // 获取数据的操作...})</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>所以，在以下情况下，会用到 nextTick：</p><ul><li>在数据变化后执行的某个操作，而这个操作需要使用随数据变化而变化的 DOM 结构的时候，这个操作就需要方法在 nextTick()的回调函数中。</li><li>在 vue 生命周期中，如果在 created()钩子进行 DOM 操作，也一定要放在 nextTick()的回调函数中。</li></ul><p>因为在 created()钩子函数中，页面的 DOM 还未渲染，这时候也没办法操作 DOM，所以，此时如果想要操作 DOM，必须将操作的代码放在 nextTick()的回调函数中。 nextTick：可以做什么不可以做什么？ nextTick：里面调用 update 会是什么情况？ 如果我循环更新 dom 节点并且执行它，会有什么结果？ 循环调用的话 nextTick：里面有容错机制吗？</p><p>实现原理：<em>nextTick</em> 主要使用了宏任务和微任务。根据执行环境分别尝试采用</p><ul><li><em>Promise</em>：可以将函数延迟到当前函数调用栈最末端</li><li><em>MutationObserver</em> ：是 <em>H5</em> 新加的一个功能，其功能是监听 <em>DOM</em> 节点的变动，在所有 <em>DOM</em> 变动完成后，执行回调函数</li><li><em>setImmediate</em>：用于中断长时间运行的操作，并在浏览器完成其他操作（如事件和显示更新）后立即运行回调函数</li><li>如果以上都不行则采用 <em>setTimeout</em> 把函数延迟到 DOM 更新之后再使用</li></ul><p>原因是宏任务消耗大于微任务，优先使用微任务，最后使用消耗最大的宏任务。</p><h2 id="参考资料" tabindex="-1">参考资料 <a class="header-anchor" href="#参考资料" aria-hidden="true">#</a></h2><p><a href="https://juejin.cn/post/6844903557372575752" target="_blank" rel="noreferrer">https://juejin.cn/post/6844903557372575752</a></p>`,19),c=[s];function p(l,r,o,d,m,u){return i(),t("div",null,c)}const x=e(n,[["render",p]]);export{T as __pageData,x as default};
