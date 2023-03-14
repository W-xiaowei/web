import{_ as s,c as a,o as n,a as l}from"./app.1b98ebf1.js";const F=JSON.parse('{"title":"探索 v-model 原理","description":"","frontmatter":{},"headers":[{"level":2,"title":"总结","slug":"总结","link":"#总结","children":[]}],"relativePath":"vue/v-model.md","lastUpdated":1678708626000}'),p={name:"vue/v-model.md"},e=l(`<h1 id="探索-v-model-原理" tabindex="-1">探索 v-model 原理 <a class="header-anchor" href="#探索-v-model-原理" aria-hidden="true">#</a></h1><p><code>v-model</code>即可以作用于表单元素，又可作用于自定义组件，无论是哪一种情况，它都是一个语法糖，最终会生成一个属性和一个事件</p><p><strong>当其作用于表单元素时</strong>，<code>vue</code>会<strong>根据作用的表单元素类型而生成合适的属性和事件</strong>。例如，作用于普通文本框的时候，它会生成<code>value</code>属性和<code>input</code>事件，而当其作用于单选框或多选框时，它会生成<code>checked</code>属性和<code>change</code>事件。</p><p><code>v-model</code>也可作用于自定义组件，<strong>当其作用于自定义组件时</strong>，默认情况下，它会生成一个<code>value</code>属性和<code>input</code>事件。</p><div class="language-html line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki one-dark-pro vp-code-dark"><code><span class="line"><span style="color:#ABB2BF;">&lt;</span><span style="color:#E06C75;">Comp</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">v-model</span><span style="color:#ABB2BF;">=</span><span style="color:#98C379;">&quot;data&quot;</span><span style="color:#ABB2BF;"> /&gt;</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">&lt;!-- 等效于 --&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;">&lt;</span><span style="color:#E06C75;">Comp</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">:value</span><span style="color:#ABB2BF;">=</span><span style="color:#98C379;">&quot;data&quot;</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">@input</span><span style="color:#ABB2BF;">=</span><span style="color:#98C379;">&quot;data=$event&quot;</span><span style="color:#ABB2BF;"> /&gt;</span></span>
<span class="line"></span></code></pre><pre class="shiki min-dark vp-code-light"><code><span class="line"><span style="color:#B392F0;">&lt;</span><span style="color:#FFAB70;">Comp</span><span style="color:#B392F0;"> v-model</span><span style="color:#F97583;">=</span><span style="color:#FFAB70;">&quot;data&quot;</span><span style="color:#B392F0;"> /&gt;</span></span>
<span class="line"><span style="color:#6B737C;">&lt;!-- 等效于 --&gt;</span></span>
<span class="line"><span style="color:#B392F0;">&lt;</span><span style="color:#FFAB70;">Comp</span><span style="color:#B392F0;"> :value</span><span style="color:#F97583;">=</span><span style="color:#FFAB70;">&quot;data&quot;</span><span style="color:#B392F0;"> @input</span><span style="color:#F97583;">=</span><span style="color:#FFAB70;">&quot;data=$event&quot;</span><span style="color:#B392F0;"> /&gt;</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>开发者可以通过组件的<code>model</code>配置来改变生成的属性和事件</p><div class="language-javascript line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki one-dark-pro vp-code-dark"><code><span class="line"><span style="color:#7F848E;font-style:italic;">// Comp</span></span>
<span class="line"><span style="color:#C678DD;">const</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">Comp</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#E06C75;">model</span><span style="color:#ABB2BF;">: {</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#E06C75;">prop</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">&quot;number&quot;</span><span style="color:#ABB2BF;">, </span><span style="color:#7F848E;font-style:italic;">// 默认为 value</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#E06C75;">event</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">&quot;change&quot;</span><span style="color:#ABB2BF;">, </span><span style="color:#7F848E;font-style:italic;">// 默认为 input</span></span>
<span class="line"><span style="color:#ABB2BF;">  },</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#7F848E;font-style:italic;">// ...</span></span>
<span class="line"><span style="color:#ABB2BF;">};</span></span>
<span class="line"></span></code></pre><pre class="shiki min-dark vp-code-light"><code><span class="line"><span style="color:#6B737C;">// Comp</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#B392F0;"> </span><span style="color:#79B8FF;">Comp</span><span style="color:#B392F0;"> </span><span style="color:#F97583;">=</span><span style="color:#B392F0;"> {</span></span>
<span class="line"><span style="color:#B392F0;">  model</span><span style="color:#F97583;">:</span><span style="color:#B392F0;"> {</span></span>
<span class="line"><span style="color:#B392F0;">    prop</span><span style="color:#F97583;">:</span><span style="color:#B392F0;"> </span><span style="color:#FFAB70;">&quot;number&quot;</span><span style="color:#BBBBBB;">,</span><span style="color:#B392F0;"> </span><span style="color:#6B737C;">// 默认为 value</span></span>
<span class="line"><span style="color:#B392F0;">    event</span><span style="color:#F97583;">:</span><span style="color:#B392F0;"> </span><span style="color:#FFAB70;">&quot;change&quot;</span><span style="color:#BBBBBB;">,</span><span style="color:#B392F0;"> </span><span style="color:#6B737C;">// 默认为 input</span></span>
<span class="line"><span style="color:#B392F0;">  }</span><span style="color:#BBBBBB;">,</span></span>
<span class="line"><span style="color:#B392F0;">  </span><span style="color:#6B737C;">// ...</span></span>
<span class="line"><span style="color:#B392F0;">};</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><div class="language-html line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki one-dark-pro vp-code-dark"><code><span class="line"><span style="color:#ABB2BF;">&lt;</span><span style="color:#E06C75;">Comp</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">v-model</span><span style="color:#ABB2BF;">=</span><span style="color:#98C379;">&quot;data&quot;</span><span style="color:#ABB2BF;"> /&gt;</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">&lt;!-- 等效于 --&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;">&lt;</span><span style="color:#E06C75;">Comp</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">:number</span><span style="color:#ABB2BF;">=</span><span style="color:#98C379;">&quot;data&quot;</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">@change</span><span style="color:#ABB2BF;">=</span><span style="color:#98C379;">&quot;data=$event&quot;</span><span style="color:#ABB2BF;"> /&gt;</span></span>
<span class="line"></span></code></pre><pre class="shiki min-dark vp-code-light"><code><span class="line"><span style="color:#B392F0;">&lt;</span><span style="color:#FFAB70;">Comp</span><span style="color:#B392F0;"> v-model</span><span style="color:#F97583;">=</span><span style="color:#FFAB70;">&quot;data&quot;</span><span style="color:#B392F0;"> /&gt;</span></span>
<span class="line"><span style="color:#6B737C;">&lt;!-- 等效于 --&gt;</span></span>
<span class="line"><span style="color:#B392F0;">&lt;</span><span style="color:#FFAB70;">Comp</span><span style="color:#B392F0;"> :number</span><span style="color:#F97583;">=</span><span style="color:#FFAB70;">&quot;data&quot;</span><span style="color:#B392F0;"> @change</span><span style="color:#F97583;">=</span><span style="color:#FFAB70;">&quot;data=$event&quot;</span><span style="color:#B392F0;"> /&gt;</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h2 id="总结" tabindex="-1">总结 <a class="header-anchor" href="#总结" aria-hidden="true">#</a></h2><p>首先要对数据进行劫持监听，所以我们需要设置一个监听器 <em>Observer</em>，用来监听所有属性。如果属性发上变化了，就需要告诉订阅者 <em>Watcher</em> 看是否需要更新。</p><p>因为订阅者是有很多个，所以我们需要有一个消息订阅器 <em>Dep</em> 来专门收集这些订阅者，然后在监听器 <em>Observer</em> 和订阅者 <em>Watcher</em> 之间进行统一管理的。</p><p>接着，我们还需要有一个指令解析器 <em>Compile</em>，对每个节点元素进行扫描和解析，将相关指令对应初始化成一个订阅者 <em>Watcher</em>，并替换模板数据或者绑定相应的函数，此时当订阅者 <em>Watcher</em> 接收到相应属性的变化，就会执行对应的更新函数，从而更新视图。</p><p>因此接下去我们执行以下 <em>3</em> 个步骤，实现数据的双向绑定：</p><ol><li><p>实现一个监听器 <em>Observer</em>，用来劫持并监听所有属性，如果有变动的，就通知订阅者。</p></li><li><p>实现一个订阅者 <em>Watcher</em>，可以收到属性的变化通知并执行相应的函数，从而更新视图。</p></li><li><p>实现一个解析器 <em>Compile</em>，可以扫描和解析每个节点的相关指令，并根据初始化模板数据以及初始化相应的订阅器。</p></li></ol><p><img src="https://img-blog.csdnimg.cn/img_convert/717034f25ee385b09e9dee53b2988cae.png#id=bgTeC&amp;originHeight=530&amp;originWidth=720&amp;originalType=binary&amp;ratio=1&amp;rotation=0&amp;showTitle=false&amp;status=done&amp;style=none&amp;title=" alt=""></p>`,15),o=[e];function t(c,r,B,i,y,d){return n(),a("div",null,o)}const u=s(p,[["render",t]]);export{F as __pageData,u as default};
