import{E as c,G as s}from"./app-2aacb4bb.js";const m=c({name:"BaseLevel",props:{mobile:Boolean,type:{type:String,default:"justify-between"}},render(){const t=[this.type,"items-center"],n=["flex"],a=["block","md:flex"],e=["flex","items-center","justify-center"];return s("div",{class:t.concat(this.mobile?n:a)},this.$slots.default().map((l,o)=>{const i=!this.mobile&&this.$slots.default().length>o+1?e.concat(["mb-6","md:mb-0"]):e;return s("div",{class:i},[l])}))}});export{m as _};
