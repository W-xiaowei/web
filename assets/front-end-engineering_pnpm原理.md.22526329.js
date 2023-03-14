import{_ as p,c as a,o as e,a as n}from"./app.1b98ebf1.js";const h=JSON.parse('{"title":"pnpm 原理","description":"","frontmatter":{},"headers":[{"level":3,"title":"1、文件的本质","slug":"_1、文件的本质","link":"#_1、文件的本质","children":[]},{"level":3,"title":"2、文件的拷贝","slug":"_2、文件的拷贝","link":"#_2、文件的拷贝","children":[]},{"level":3,"title":"3、硬链接 hard link","slug":"_3、硬链接-hard-link","link":"#_3、硬链接-hard-link","children":[]},{"level":3,"title":"4、符号链接 symbol link","slug":"_4、符号链接-symbol-link","link":"#_4、符号链接-symbol-link","children":[]},{"level":3,"title":"5、符号链接和硬链接的区别","slug":"_5、符号链接和硬链接的区别","link":"#_5、符号链接和硬链接的区别","children":[]},{"level":3,"title":"6、快捷方式","slug":"_6、快捷方式","link":"#_6、快捷方式","children":[]},{"level":3,"title":"7、node 环境对硬链接和符号链接的处理","slug":"_7、node-环境对硬链接和符号链接的处理","link":"#_7、node-环境对硬链接和符号链接的处理","children":[]},{"level":3,"title":"8、pnpm 原理","slug":"_8、pnpm-原理","link":"#_8、pnpm-原理","children":[]}],"relativePath":"front-end-engineering/pnpm原理.md","lastUpdated":1678796648000}'),s={name:"front-end-engineering/pnpm原理.md"},i=n(`<h1 id="pnpm-原理" tabindex="-1">pnpm 原理 <a class="header-anchor" href="#pnpm-原理" aria-hidden="true">#</a></h1><p><strong>想要理解 pnpm 是怎么做的，需要一些操作系统的知识</strong></p><h3 id="_1、文件的本质" tabindex="-1">1、文件的本质 <a class="header-anchor" href="#_1、文件的本质" aria-hidden="true">#</a></h3><p>在操作系统中，文件实际上是一个指针，只不过它指向的不是内存地址，而是一个外部存储地址（这里的外部存储可以是硬盘、U 盘、甚至是网络） <img src="https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/be5a278b70af4f118645555ec9e7ec58~tplv-k3u1fbpfcp-zoom-in-crop-mark:4536:0:0:0.awebp" alt=""></p><p>当我们删除文件时，删除的实际上是指针，因此，无论删除多么大的文件，速度都非常快。像我们的 U 盘、硬盘里的文件虽然说看起来已经删除了，但是其实数据恢复公司是可以恢复的，因为数据还是存在的，只要删除文件后再没有存储其它文件就可以恢复，所以真正删除一个文件就是<strong>可劲存可劲删</strong> <img src="https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/0ef22ff8e91640a197a210d520325871~tplv-k3u1fbpfcp-zoom-in-crop-mark:4536:0:0:0.awebp" alt=""></p><h3 id="_2、文件的拷贝" tabindex="-1">2、文件的拷贝 <a class="header-anchor" href="#_2、文件的拷贝" aria-hidden="true">#</a></h3><p>如果你复制一个文件，是将该文件指针指向的内容进行复制，然后产生一个新文件指向新的内容。 <img src="https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/93734e07c16d4efc97403d65a7801bb6~tplv-k3u1fbpfcp-zoom-in-crop-mark:4536:0:0:0.awebp" alt=""></p><h3 id="_3、硬链接-hard-link" tabindex="-1">3、硬链接 hard link <a class="header-anchor" href="#_3、硬链接-hard-link" aria-hidden="true">#</a></h3><p>硬链接的概念来自于 Unix 操作系统，它是指将一个文件 A 指针复制到另一个文件 B 指针中，文件 B 就是文件 A 的硬链接。 <img src="https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/8fd6096a17a64d58a73f9e2f2cfc7051~tplv-k3u1fbpfcp-zoom-in-crop-mark:4536:0:0:0.awebp" alt=""></p><p>通过硬链接，不会产生额外的磁盘占用，并且，两个文件都能找到相同的磁盘内容。</p><p>硬链接的数量没有限制，可以为同一个文件产生多个硬链接。</p><p>windows Vista 操作系统开始，支持了创建硬链接的操作，在 cmd 中使用下面的命令可以创建硬链接。</p><div class="language- line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki one-dark-pro vp-code-dark"><code><span class="line"><span style="color:#abb2bf;">mklink /h  链接名称  目标文件</span></span>
<span class="line"><span style="color:#abb2bf;"></span></span>
<span class="line"><span style="color:#abb2bf;"></span></span></code></pre><pre class="shiki min-dark vp-code-light"><code><span class="line"><span style="color:#b392f0;">mklink /h  链接名称  目标文件</span></span>
<span class="line"><span style="color:#b392f0;"></span></span>
<span class="line"><span style="color:#b392f0;"></span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p><strong>例：创建一个硬连接</strong></p><p>1、首先创建一个文件夹 temp，并且在 temp 文件夹创建一个 article.txt 文本文件 <img src="https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/6bbf3a050bc749d5a8aa7d18fdf06a0d~tplv-k3u1fbpfcp-zoom-in-crop-mark:4536:0:0:0.awebp" alt=""></p><p>2、接下来，我要在 temp 文件夹的根目录（pnpm 包管理器下面）创建一个硬链接</p><ul><li>按 window+R 调出窗口，以管理员身份运行，并且输入 cmd，回车 <img src="https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/db51f73a816e434ba57771bb1a133c11~tplv-k3u1fbpfcp-zoom-in-crop-mark:4536:0:0:0.awebp" alt=""></li><li>由于 pnpm 包管理器文件夹在 F 盘，所以先切换到 F 盘，并且进入 pnpm 包管理器地址 <img src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/533b0d330026428e986eb95faaffb40a~tplv-k3u1fbpfcp-zoom-in-crop-mark:4536:0:0:0.awebp" alt=""></li><li>输入： <code>mklink /h link.txt temp\\article.txt</code> 回车 <img src="https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/e791f630864d4f8e8ad382ba2c7a0b64~tplv-k3u1fbpfcp-zoom-in-crop-mark:4536:0:0:0.awebp" alt=""></li><li>此时就可以在编辑器看到新创建的硬链接 link.text,这样·<code>article.txt</code> 和<code>link.txt</code>是一样的了 <img src="https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/59c70abdecdd48d29e863713c21158b1~tplv-k3u1fbpfcp-zoom-in-crop-mark:4536:0:0:0.awebp" alt=""></li><li>这时当修改 link.txt 时，article.txt 也会跟着变，因为它们指向同一个磁盘空间 <img src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/e12541ba641a45d08071093822680a38~tplv-k3u1fbpfcp-zoom-in-crop-mark:4536:0:0:0.awebp" alt=""></li></ul><p>注意 ☛：</p><ol><li>由于文件夹（目录）不存在文件内容，所以文件夹（目录）不能创建硬链接</li><li>在 windows 操作系统中，通常不要跨越盘符创建硬链接</li></ol><h3 id="_4、符号链接-symbol-link" tabindex="-1">4、符号链接 symbol link <a class="header-anchor" href="#_4、符号链接-symbol-link" aria-hidden="true">#</a></h3><p>符号链接又称为软连接，如果为某个文件或文件夹 A 创建符号连接 B，则 B 指向 A。 <img src="https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/5e9d3c5e59454006abde22b822ec22a8~tplv-k3u1fbpfcp-zoom-in-crop-mark:4536:0:0:0.awebp" alt=""></p><p>windows Vista 操作系统开始，支持了创建符号链接的操作，在 cmd 中使用下面的命令可以创建符号链接：</p><div class="language- line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki one-dark-pro vp-code-dark"><code><span class="line"><span style="color:#abb2bf;">mklink  /d   链接名称   目标文件</span></span>
<span class="line"><span style="color:#abb2bf;"># /d表示创建的是目录的符号链接，不写则是文件的符号链接</span></span>
<span class="line"><span style="color:#abb2bf;"></span></span>
<span class="line"><span style="color:#abb2bf;"></span></span></code></pre><pre class="shiki min-dark vp-code-light"><code><span class="line"><span style="color:#b392f0;">mklink  /d   链接名称   目标文件</span></span>
<span class="line"><span style="color:#b392f0;"># /d表示创建的是目录的符号链接，不写则是文件的符号链接</span></span>
<span class="line"><span style="color:#b392f0;"></span></span>
<span class="line"><span style="color:#b392f0;"></span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>早期的 windows 系统不支持符号链接，但它提供了一个工具 junction 来达到类似的功能。</p><h3 id="_5、符号链接和硬链接的区别" tabindex="-1">5、符号链接和硬链接的区别 <a class="header-anchor" href="#_5、符号链接和硬链接的区别" aria-hidden="true">#</a></h3><ol><li>硬链接仅能链接文件，而符号链接可以链接目录</li><li>硬链接在链接完成后仅和文件内容关联，和之前链接的文件没有任何关系。而符号链接始终和之前链接的文件关联，和文件内容不直接相关。</li></ol><h3 id="_6、快捷方式" tabindex="-1">6、快捷方式 <a class="header-anchor" href="#_6、快捷方式" aria-hidden="true">#</a></h3><p>快捷方式类似于符号链接，是 windows 系统早期就支持的链接方式。它不仅仅是一个指向其他文件或目录的指针，其中还包含了各种信息：如权限、兼容性启动方式等其他各种属性，由于快捷方式是 windows 系统独有的，在跨平台的应用中一般不会使用。</p><h3 id="_7、node-环境对硬链接和符号链接的处理" tabindex="-1">7、node 环境对硬链接和符号链接的处理 <a class="header-anchor" href="#_7、node-环境对硬链接和符号链接的处理" aria-hidden="true">#</a></h3><p><strong>硬链接：</strong></p><p>硬链接是一个实实在在的文件，node 不对其做任何特殊处理，也无法区别对待，实际上，node 根本无从知晓该文件是不是一个硬链接</p><p><strong>符号链接：</strong></p><p>由于符号链接指向的是另一个文件或目录，当 node 执行符号链接下的 JS 文件时，会使用原始路径。比方说：我在 D 盘装了 LOL，在桌面创建了 LOL 快捷方式，相当于是符号链接，双击快捷方式运行游戏，在运行游戏的时候是按照 LOL 原始路径（D 盘路径）运行的。</p><h3 id="_8、pnpm-原理" tabindex="-1">8、pnpm 原理 <a class="header-anchor" href="#_8、pnpm-原理" aria-hidden="true">#</a></h3><p>pnpm 使用符号链接和硬链接来构建 node_modules 目录</p><p>下面用一个例子来说明它的构建方式</p><p>假设两个包 a 和 b，a 依赖 b： <img src="https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/cbb140671d484e45a7a805e08497656f~tplv-k3u1fbpfcp-zoom-in-crop-mark:4536:0:0:0.awebp" alt=""></p><p>假设我们的工程为 proj，直接依赖 a，则安装时，pnpm 会做下面的处理：</p><ol><li><p>通过 package.json 查询依赖关系，得到最终要安装的包：a 和 b</p></li><li><p>在工程 proj 根目录中查看 a 和 b 是否已经有缓存，如果没有，下载到缓存中，如果有，则进入下一步</p></li><li><p>在 proj 中创建 node_modules 目录，并对目录进行结构初始化 <img src="https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/ededab1d0a2241f98520fef85e5ef413~tplv-k3u1fbpfcp-zoom-in-crop-mark:4536:0:0:0.awebp" alt=""></p></li><li><p>从缓存的对应包中使用硬链接放置文件到相应包代码目录中 <img src="https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/64de4cad2b4e48a5acb0fdf96baadce7~tplv-k3u1fbpfcp-zoom-in-crop-mark:4536:0:0:0.awebp" alt=""></p></li><li><p>使用符号链接，将每个包的直接依赖放置到自己的目录中 <img src="https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/e0e0e3e727664c4d8c7459fccd6cddd2~tplv-k3u1fbpfcp-zoom-in-crop-mark:4536:0:0:0.awebp" alt=""></p><p>这样做的目的，是为了保证 a 的代码在执行过程中，可以读取到它们的直接依赖</p></li><li><p>新版本的 pnpm 为了解决一些书写不规范的包（读取间接依赖）的问题，又将所有的工程非直接依赖，使用符号链接加入到了 .pnpm/node_modules 中。如果 b 依赖 c，a 又要直接用 c，这种不规范的用法现在 pnpm 通过这种方式支持了。但对于那些使用绝对路径的奇葩写法，可能没有办法支持。</p></li><li><p>在工程的 node_modules 目录中使用符号链接，放置直接依赖 <img src="https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/5aa84dafe5b249efb565bacb8f7ec67a~tplv-k3u1fbpfcp-zoom-in-crop-mark:4536:0:0:0.awebp" alt=""></p></li></ol><blockquote><p>转载自 <a href="https://juejin.cn/post/6916101419703468045" target="_blank" rel="noreferrer">https://juejin.cn/post/6916101419703468045</a></p></blockquote>`,40),l=[i];function c(t,o,r,d,b,m){return e(),a("div",null,l)}const k=p(s,[["render",c]]);export{h as __pageData,k as default};
