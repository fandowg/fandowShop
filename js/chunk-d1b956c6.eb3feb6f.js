(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-d1b956c6"],{"0cf5":function(t,a,i){"use strict";i.r(a);var s=function(){var t=this,a=t.$createElement,i=t._self._c||a;return i("div",[t._m(0),i("div",{staticClass:"admin"},[t._m(1),i("div",{staticClass:"admin__list"},t._l(t.orderlist,(function(a){return i("div",{key:a.id,staticClass:"admin__row bag-row no-gutters"},[i("div",{staticClass:"admin__item text-left bag-md bag-6"},[t._v(" "+t._s(t._f("date")(a.create_at))+" ")]),i("div",{staticClass:"admin__item bag-md-3 bag-6 text-right-max-md"},[t._v(" "+t._s(a.user.email)+" ")]),i("div",{staticClass:"admin__item bag-md-5 bag-12"},[i("ul",{staticClass:"admin__order-product"},t._l(a.products,(function(a){return i("li",{key:a.id,staticClass:"admin__order-product__item"},[t._v(" "+t._s(a.product.title)+" 數量"+t._s(a.qty)+t._s(a.product.unit)+" ")])})),0)]),i("div",{staticClass:"admin__item bag-md bag-6"},[i("span",{staticClass:"desk-hide-md"},[t._v("總金額")]),i("span",{staticClass:"price"},[t._v(t._s(a.total))])]),i("div",{staticClass:"admin__item bag-md bag-6 text-right"},[!0===a.is_paid?i("span",{staticClass:"text-success"},[t._v("已付款")]):i("span",{staticClass:"text-danger"},[t._v("尚未付款")])])])})),0)]),i("PageApi",{attrs:{pagination:t.pagination},on:{"get-pages":t.getOrderList}})],1)},n=[function(){var t=this,a=t.$createElement,i=t._self._c||a;return i("div",{staticClass:"menu-block menu-block--inline"},[i("h1",{staticClass:"page__title"},[t._v("訂單列表")])])},function(){var t=this,a=t.$createElement,i=t._self._c||a;return i("div",{staticClass:"admin__head bag-row no-gutters"},[i("div",{staticClass:"admin__item text-left bag-md"},[t._v("購買時間")]),i("div",{staticClass:"admin__item bag-md-3"},[t._v("Email")]),i("div",{staticClass:"admin__item bag-md-5"},[t._v("購買項目")]),i("div",{staticClass:"admin__item bag-md"},[t._v("應付金額")]),i("div",{staticClass:"admin__item bag-md text-right"},[t._v("是否付款")])])}],e=(i("99af"),i("80a6")),c={data:function(){return{pagination:{},orderlist:{}}},watch:{pagination:function(){this.toTop()}},methods:{getOrderList:function(){var t=this,a=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;this.$store.commit("LOADING",!0);var i="".concat("https://vue-course-api.hexschool.io","/api/").concat("fandow","/admin/orders?page=").concat(a);this.$http.get(i).then((function(a){a.data.success&&(t.orderlist=a.data.orders,t.pagination=a.data.pagination),t.$store.commit("LOADING",!1)}))},toTop:function(){document.documentElement.scrollTop=0}},components:{PageApi:e["a"]},created:function(){this.getOrderList(1)}},r=c,o=i("2877"),l=Object(o["a"])(r,s,n,!1,null,null,null);a["default"]=l.exports},"43ea":function(t,a,i){t.exports=i.p+"img/next_page_disabled.7fd955a2.svg"},4409:function(t,a,i){t.exports=i.p+"img/prev_page_disabled.5301e053.svg"},"720c":function(t,a,i){t.exports=i.p+"img/prev_page.8fbf6e37.svg"},"80a6":function(t,a,i){"use strict";var s=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("nav",{attrs:{"aria-label":"Page navigation"}},[s("ul",{staticClass:"pagination"},[s("li",{staticClass:"pagination__item"},[s("a",{staticClass:"pagination__link",class:{disabled:!t.pagination.has_pre},on:{click:function(a){return a.preventDefault(),t.$emit("get-pages",t.pagination.current_page-1)}}},[t.pagination.has_pre?s("img",{attrs:{src:i("720c")}}):s("img",{attrs:{src:i("4409")}})])]),t._l(t.pagination.total_pages,(function(a){return s("li",{key:a,staticClass:"pagination__item"},[s("a",{staticClass:"pagination__link",class:{active:t.pagination.current_page===a,disabled:t.pagination.total_pages<=1},on:{click:function(i){return i.preventDefault(),t.$emit("get-pages",a)}}},[t._v(t._s(a))])])})),s("li",{staticClass:"pagination__item"},[s("a",{staticClass:"pagination__link",class:{disabled:!t.pagination.has_next},on:{click:function(a){return a.preventDefault(),t.$emit("get-pages",t.pagination.current_page+1)}}},[t.pagination.has_next?s("img",{attrs:{src:i("d715")}}):s("img",{attrs:{src:i("43ea")}})])])],2)])},n=[],e={props:["pagination","get-pages"],data:function(){return{}}},c=e,r=i("2877"),o=Object(r["a"])(c,s,n,!1,null,null,null);a["a"]=o.exports},d715:function(t,a,i){t.exports=i.p+"img/next_page.cffd41cd.svg"}}]);
//# sourceMappingURL=chunk-d1b956c6.eb3feb6f.js.map