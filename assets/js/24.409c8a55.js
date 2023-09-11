(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{304:function(t,a,e){"use strict";e.r(a);var l=e(14),v=Object(l.a)({},(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"扩展插件"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#扩展插件"}},[t._v("#")]),t._v(" 扩展插件")]),t._v(" "),e("p",[t._v("扩展插件是"),e("code",[t._v("CraftSuperLoader")]),t._v("相对于原版"),e("code",[t._v("SpigotMC")]),t._v("编写的一项新功能,也是CSL的核心所在.目的是为了让对Java不太了解的插件开发者们可以用自己喜欢的语言来拓展MC服务端功能")]),t._v(" "),e("hr"),t._v(" "),e("h2",{attrs:{id:"简介"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#简介"}},[t._v("#")]),t._v(" 简介")]),t._v(" "),e("h3",{attrs:{id:"跨版本"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#跨版本"}},[t._v("#")]),t._v(" 跨版本")]),t._v(" "),e("p",[t._v("对于大部分的CSL插件,在没有大量接口改动的情况下我们都可以保证在一些版本中正常运行,而您只需要正常将它们装载进服务端即可，无需作过多的更改")]),t._v(" "),e("h3",{attrs:{id:"驱动"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#驱动"}},[t._v("#")]),t._v(" 驱动")]),t._v(" "),e("p",[t._v("与"),e("code",[t._v("BukkitAPI")]),t._v("一样,所有插件都是由事件进行驱动的.而因Minecraft的游戏实现原因.我们不提供也禁止您在任何事件处理器中使用如线程休眠等延迟代码执行的接口.如果您想做一些具有延迟或者异步的工作,我们建议您使用我们提供的协程API")]),t._v(" "),e("h3",{attrs:{id:"优先级"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#优先级"}},[t._v("#")]),t._v(" 优先级")]),t._v(" "),e("p",[t._v("在CSL中插件加载是具有优先级的,其中优先级最高是由"),e("code",[t._v("Java")]),t._v("编写的原生Bukkit插件,而优先级最低的是"),e("code",[t._v("Lua")]),t._v("编写的扩展脚本插件")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",{staticStyle:{"text-align":"left"}},[t._v("语言")]),t._v(" "),e("th",{staticStyle:{"text-align":"left"}},[t._v("加载优先级")]),t._v(" "),e("th",{staticStyle:{"text-align":"left"}},[t._v("注销优先级")]),t._v(" "),e("th",{staticStyle:{"text-align":"left"}},[t._v("事件优先级")]),t._v(" "),e("th",{staticStyle:{"text-align":"left"}},[t._v("备注")])])]),t._v(" "),e("tbody",[e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("Java")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("最高")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("最低")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("最高")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("-")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("JavaScript")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("高")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("低")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("高")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("-")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("Python")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("低")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("高")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("低")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("-")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("Lua")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("最低")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("最高")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("最低")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("-")])])])]),t._v(" "),e("ul",[e("li",[t._v("除事件优先级外其余按照执行先后顺序制定优先级")]),t._v(" "),e("li",[t._v("事件优先级则按照Bukkit事件处理为依照,优先级越高处理事件顺序越靠后")])]),t._v(" "),e("h2",{attrs:{id:"插件使用索引"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#插件使用索引"}},[t._v("#")]),t._v(" 插件使用索引")]),t._v(" "),e("ul",[e("li",[e("a",{attrs:{href:"/zh/plugin/jsuse"}},[t._v("JavaScript")])]),t._v(" "),e("li",[e("a",{attrs:{href:"/zh/plugin/pythonuse"}},[t._v("Python")])]),t._v(" "),e("li",[e("a",{attrs:{href:"/zh/plugin/luause"}},[t._v("Lua")])])]),t._v(" "),e("h2",{attrs:{id:"插件接口目录"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#插件接口目录"}},[t._v("#")]),t._v(" 插件接口目录")]),t._v(" "),e("ul",[e("li",[e("a",{attrs:{href:"/zh/plugin/jsapi"}},[t._v("JavaScript")])]),t._v(" "),e("li",[e("a",{attrs:{href:"/zh/plugin/pythonapi"}},[t._v("Python")])]),t._v(" "),e("li",[e("a",{attrs:{href:"/zh/plugin/luaapi"}},[t._v("Lua")])])])])}),[],!1,null,null,null);a.default=v.exports}}]);