import{_ as p,c as o,b as s,d as a,t as l,a as n,o as t}from"./app.0bf84864.js";const v=JSON.parse('{"title":"那些年，被问烂了的 Vuejs 面试题","description":"","frontmatter":{},"headers":[{"level":2,"title":"说一下 v-if 与 v-show 的区别","slug":"说一下-v-if-与-v-show-的区别","link":"#说一下-v-if-与-v-show-的区别","children":[]},{"level":2,"title":"如何让 CSS 值在当前的组件中起作用","slug":"如何让-css-值在当前的组件中起作用","link":"#如何让-css-值在当前的组件中起作用","children":[]},{"level":2,"title":"MVVM的优缺点?","slug":"mvvm的优缺点","link":"#mvvm的优缺点","children":[]},{"level":2,"title":"MVVM、MVC、MVP 的区别","slug":"mvvm、mvc、mvp-的区别","link":"#mvvm、mvc、mvp-的区别","children":[]},{"level":2,"title":"谈一谈对 MVVM 的理解？","slug":"谈一谈对-mvvm-的理解","link":"#谈一谈对-mvvm-的理解","children":[]},{"level":2,"title":"Vue 中如何进行组件的使用？Vue 如何实现全局组件的注册？","slug":"vue-中如何进行组件的使用-vue-如何实现全局组件的注册","link":"#vue-中如何进行组件的使用-vue-如何实现全局组件的注册","children":[]},{"level":2,"title":"Vue 组件的 data 为什么必须是函数","slug":"vue-组件的-data-为什么必须是函数","link":"#vue-组件的-data-为什么必须是函数","children":[]},{"level":2,"title":"vue 如何快速定位那个组件出现性能问题的","slug":"vue-如何快速定位那个组件出现性能问题的","link":"#vue-如何快速定位那个组件出现性能问题的","children":[]},{"level":2,"title":"scoped 是如何实现样式穿透的？","slug":"scoped-是如何实现样式穿透的","link":"#scoped-是如何实现样式穿透的","children":[]},{"level":2,"title":"说一下 ref 的作用是什么？","slug":"说一下-ref-的作用是什么","link":"#说一下-ref-的作用是什么","children":[]},{"level":2,"title":"说一下你知道的 vue 修饰符都有哪些？","slug":"说一下你知道的-vue-修饰符都有哪些","link":"#说一下你知道的-vue-修饰符都有哪些","children":[]},{"level":2,"title":"Vue.extend 和 Vue.component 的区别是什么？","slug":"vue-extend-和-vue-component-的区别是什么","link":"#vue-extend-和-vue-component-的区别是什么","children":[]},{"level":2,"title":"移动端如何实现一个比较友好的 header 组件","slug":"移动端如何实现一个比较友好的-header-组件","link":"#移动端如何实现一个比较友好的-header-组件","children":[]},{"level":2,"title":"既然 Vue 通过数据劫持可以精准探测数据变化，为什么还需要虚拟 DOM 进行 diff 监测差异 ？","slug":"既然-vue-通过数据劫持可以精准探测数据变化-为什么还需要虚拟-dom-进行-diff-监测差异","link":"#既然-vue-通过数据劫持可以精准探测数据变化-为什么还需要虚拟-dom-进行-diff-监测差异","children":[]},{"level":2,"title":"Vue 为什么没有类似于 React 中 shouldComponentUpdate 的生命周期？","slug":"vue-为什么没有类似于-react-中-shouldcomponentupdate-的生命周期","link":"#vue-为什么没有类似于-react-中-shouldcomponentupdate-的生命周期","children":[]},{"level":2,"title":"说一下你对 vue 事件绑定原理的理解？","slug":"说一下你对-vue-事件绑定原理的理解","link":"#说一下你对-vue-事件绑定原理的理解","children":[]},{"level":2,"title":"delete 和 Vue.delete 删除数组的区别是什么？","slug":"delete-和-vue-delete-删除数组的区别是什么","link":"#delete-和-vue-delete-删除数组的区别是什么","children":[]},{"level":2,"title":"v-on 可以实现监听多个方法么？","slug":"v-on-可以实现监听多个方法么","link":"#v-on-可以实现监听多个方法么","children":[]},{"level":2,"title":"vue 的数据为什么频繁变化但只会更新一次？","slug":"vue-的数据为什么频繁变化但只会更新一次","link":"#vue-的数据为什么频繁变化但只会更新一次","children":[]},{"level":2,"title":"插槽与作用域插槽的区别是什么？","slug":"插槽与作用域插槽的区别是什么","link":"#插槽与作用域插槽的区别是什么","children":[]},{"level":2,"title":"vue 中相同逻辑如何进行抽离？","slug":"vue-中相同逻辑如何进行抽离","link":"#vue-中相同逻辑如何进行抽离","children":[]},{"level":2,"title":"说一说自定义指令有哪些生命周期？","slug":"说一说自定义指令有哪些生命周期","link":"#说一说自定义指令有哪些生命周期","children":[]},{"level":2,"title":"vue 为什么采用异步渲染","slug":"vue-为什么采用异步渲染","link":"#vue-为什么采用异步渲染","children":[]},{"level":2,"title":"组件中写 name 选项有哪些好处","slug":"组件中写-name-选项有哪些好处","link":"#组件中写-name-选项有哪些好处","children":[]},{"level":2,"title":"过滤器的作用，如何实现一个过滤器","slug":"过滤器的作用-如何实现一个过滤器","link":"#过滤器的作用-如何实现一个过滤器","children":[]},{"level":2,"title":"如何保存页面的当前的状态","slug":"如何保存页面的当前的状态","link":"#如何保存页面的当前的状态","children":[]},{"level":2,"title":"常见的事件修饰符及其作用","slug":"常见的事件修饰符及其作用","link":"#常见的事件修饰符及其作用","children":[]},{"level":2,"title":"v-if、v-show、v-html 的原理","slug":"v-if、v-show、v-html-的原理","link":"#v-if、v-show、v-html-的原理","children":[]},{"level":2,"title":"data 为什么是一个函数而不是对象","slug":"data-为什么是一个函数而不是对象","link":"#data-为什么是一个函数而不是对象","children":[]},{"level":2,"title":"Vue 中封装的数组方法有哪些，其如何实现页面更新","slug":"vue-中封装的数组方法有哪些-其如何实现页面更新","link":"#vue-中封装的数组方法有哪些-其如何实现页面更新","children":[]},{"level":2,"title":"Vue 单页应用与多页应用的区别","slug":"vue-单页应用与多页应用的区别","link":"#vue-单页应用与多页应用的区别","children":[]},{"level":2,"title":"Vue data 中某一个属性的值发生改变后，视图会立即同步执行重新渲染吗？","slug":"vue-data-中某一个属性的值发生改变后-视图会立即同步执行重新渲染吗","link":"#vue-data-中某一个属性的值发生改变后-视图会立即同步执行重新渲染吗","children":[]},{"level":2,"title":"简述 mixin、extends 的覆盖逻辑","slug":"简述-mixin、extends-的覆盖逻辑","link":"#简述-mixin、extends-的覆盖逻辑","children":[]},{"level":2,"title":"assets 和 static 的区别","slug":"assets-和-static-的区别","link":"#assets-和-static-的区别","children":[]},{"level":2,"title":"delete 和 Vue.delete 删除数组的区别","slug":"delete-和-vue-delete-删除数组的区别","link":"#delete-和-vue-delete-删除数组的区别","children":[]},{"level":2,"title":"什么是 mixin ？","slug":"什么是-mixin","link":"#什么是-mixin","children":[]},{"level":2,"title":"template 和 jsx 的有什么分别？","slug":"template-和-jsx-的有什么分别","link":"#template-和-jsx-的有什么分别","children":[]},{"level":2,"title":"vue 初始化页面闪动问题","slug":"vue-初始化页面闪动问题","link":"#vue-初始化页面闪动问题","children":[]},{"level":2,"title":"extend 有什么作用","slug":"extend-有什么作用","link":"#extend-有什么作用","children":[]},{"level":2,"title":"mixin 和 mixins 区别","slug":"mixin-和-mixins-区别","link":"#mixin-和-mixins-区别","children":[]},{"level":2,"title":"内置组件 Transition","slug":"内置组件-transition","link":"#内置组件-transition","children":[]},{"level":2,"title":"过渡组","slug":"过渡组","link":"#过渡组","children":[]}],"relativePath":"vue/vue-interview.md","lastUpdated":1681989947000}'),r={name:"vue/vue-interview.md"},c=n("",80),i=s("strong",null,"插值表达式 *",-1),B=n("",63),y=n("",25);function F(e,m,d,u,b,h){return t(),o("div",null,[c,s("p",null,[a("过滤器是一个函数，它会把表达式中的值始终当作函数的第一个参数。过滤器用在"),i,s("em",null,[s("strong",null,l()+" 和 v-bind*",1)]),a("** 表达式** 中，然后放在操作符“ | ”后面进行指示。")]),B,s("p",null,"使用 vue 开发时，在 vue 初始化之前，由于 div 是不归 vue 管的，所以我们写的代码在还没有解析的情况下会容易出现花屏现象，看到类似于"+l(e.message)+"的字样，虽然一般情况下这个时间很短暂，但是还是有必要让解决这个问题的。 首先：在 css 里加上以下代码：",1),y])}const g=p(r,[["render",F]]);export{v as __pageData,g as default};
