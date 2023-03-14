import{_ as e,c as t,o as r,a}from"./app.08f2048c.js";const x=JSON.parse('{"title":"Vue3 数据响应原理","description":"","frontmatter":{},"headers":[{"level":2,"title":"Vue3.x 响应式数据原理是什么？","slug":"vue3-x-响应式数据原理是什么","link":"#vue3-x-响应式数据原理是什么","children":[]},{"level":2,"title":"Proxy 只会代理对象的第一层，那么 Vue3 又是怎样处理这个问题的呢？","slug":"proxy-只会代理对象的第一层-那么-vue3-又是怎样处理这个问题的呢","link":"#proxy-只会代理对象的第一层-那么-vue3-又是怎样处理这个问题的呢","children":[]},{"level":2,"title":"监测数组的时候可能触发多次 get/set，那么如何防止触发多次呢？","slug":"监测数组的时候可能触发多次-get-set-那么如何防止触发多次呢","link":"#监测数组的时候可能触发多次-get-set-那么如何防止触发多次呢","children":[]},{"level":2,"title":"源码实现","slug":"源码实现","link":"#源码实现","children":[]}],"relativePath":"vue/reactive-v3.md","lastUpdated":1678708626000}'),i={name:"vue/reactive-v3.md"},l=a('<h1 id="vue3-数据响应原理" tabindex="-1">Vue3 数据响应原理 <a class="header-anchor" href="#vue3-数据响应原理" aria-hidden="true">#</a></h1><ul><li>Vue3.x 响应式数据原理是什么？</li><li>Proxy 只会代理对象的第一层，那么 Vue3 又是怎样处理这个问题的呢？</li><li>监测数组的时候可能触发多次 get/set，那么如何防止触发多次呢？</li></ul><h2 id="vue3-x-响应式数据原理是什么" tabindex="-1"><strong><em>Vue3.x</em> 响应式数据原理是什么？</strong> <a class="header-anchor" href="#vue3-x-响应式数据原理是什么" aria-hidden="true">#</a></h2><p>在 <em>Vue 2</em> 中，响应式原理就是使用的 <em>Object.defineProperty</em> 来实现的。但是在 <em>Vue 3.0</em> 中采用了 <em>Proxy</em>，抛弃了 <em>Object.defineProperty</em> 方法。</p><p>究其原因，主要是以下几点：</p><ul><li><em>Object.defineProperty</em> 无法监控到数组下标的变化，导致通过数组下标添加元素，不能实时响应</li><li><em>Object.defineProperty</em> 只能劫持对象的属性，从而需要对每个对象，每个属性进行遍历，如果，属性值是对象，还需要深度遍历。<em>Proxy</em> 可以劫持整个对象，并返回一个新的对象。</li><li><em>Proxy</em> 不仅可以代理对象，还可以代理数组。还可以代理动态增加的属性。</li><li><em>Proxy</em> 有多达 <em>13</em> 种拦截方法</li><li><em>Proxy</em>作为新标准将受到浏览器厂商重点持续的性能优化</li></ul><h2 id="proxy-只会代理对象的第一层-那么-vue3-又是怎样处理这个问题的呢" tabindex="-1"><strong><em>Proxy</em> 只会代理对象的第一层，那么 <em>Vue3</em> 又是怎样处理这个问题的呢？</strong> <a class="header-anchor" href="#proxy-只会代理对象的第一层-那么-vue3-又是怎样处理这个问题的呢" aria-hidden="true">#</a></h2><p>判断当前 <em>Reflect.get</em> 的返回值是否为 <em>Object</em>，如果是则再通过 <em>reactive</em> 方法做代理， 这样就实现了深度观测。</p><h2 id="监测数组的时候可能触发多次-get-set-那么如何防止触发多次呢" tabindex="-1"><strong>监测数组的时候可能触发多次 <em>get/set</em>，那么如何防止触发多次呢？</strong> <a class="header-anchor" href="#监测数组的时候可能触发多次-get-set-那么如何防止触发多次呢" aria-hidden="true">#</a></h2><p>我们可以判断 <em>key</em> 是否为当前被代理对象 <em>target</em> 自身属性，也可以判断旧值与新值是否相等，只有满足以上两个条件之一时，才有可能执行 <em>trigger</em>。</p><h2 id="源码实现" tabindex="-1">源码实现 <a class="header-anchor" href="#源码实现" aria-hidden="true">#</a></h2><p>TODO</p>',12),m=[l];function n(o,s,d,c,u,h){return r(),t("div",null,m)}const _=e(i,[["render",n]]);export{x as __pageData,_ as default};
