"use strict";(self.webpackChunkbibliografia_cerrado=self.webpackChunkbibliografia_cerrado||[]).push([[545],{3545:(y,d,a)=>{a.r(d),a.d(d,{LandingModule:()=>v});var u=a(177),o=a(4487),e=a(4438),p=a(7693),c=a(5756),m=a(563);let h=(()=>{class t{constructor(n,i){this.el=n,this.renderer=i,this.documentScrollListener=null,this.loadListener=()=>{},this.entered=!1,this.visibilityHidden=!0}ngOnInit(){this.isImage()&&(this.loadListener=this.renderer.listen(this.el.nativeElement,"load",()=>{this.bind()}))}ngAfterViewInit(){this.isImage()||this.bind()}bind(){this.isInViewPort()&&this.enter(),this.entered||(this.documentScrollListener=this.renderer.listen("window","scroll",()=>{this.isInViewPort()&&this.documentScrollListener&&(this.enter(),this.documentScrollListener(),this.documentScrollListener=null)}))}shouldEnter(){return!this.entered&&this.isInViewPort()}isInViewPort(){let n=this.el.nativeElement.parentElement.parentElement.parentElement.getBoundingClientRect(),s=document.documentElement.clientHeight;return!(n.top>0)||n.top>=0&&s>=n.top}enter(){this.el.nativeElement.classList.add("hidden",this.animation),this.el.nativeElement.classList.remove("visibility-hidden","hidden"),this.entered=!0}isImage(){return"IMG"===this.el.nativeElement.tagName}ngOnDestroy(){this.documentScrollListener&&this.documentScrollListener(),this.loadListener&&this.loadListener()}static#e=this.\u0275fac=function(i){return new(i||t)(e.rXU(e.aKT),e.rXU(e.sFG))};static#t=this.\u0275dir=e.FsC({type:t,selectors:[["","animateEnter",""]],hostVars:2,hostBindings:function(i,s){2&i&&e.AVh("visibility-hidden",s.visibilityHidden)},inputs:{animation:[e.Mj6.None,"animateEnter","animation"]}})}return t})(),g=(()=>{class t{constructor(n,i){this.router=n,this.layoutService=i,this.darkMode=!1,this.subscription=this.layoutService.configUpdate$.subscribe(s=>{this.darkMode="dark"===s.colorScheme||"dim"===s.colorScheme})}ngOnDestroy(){this.subscription.unsubscribe()}static#e=this.\u0275fac=function(i){return new(i||t)(e.rXU(o.Ix),e.rXU(p.Y))};static#t=this.\u0275cmp=e.VBU({type:t,selectors:[["ng-component"]],decls:99,vars:1,consts:[["menu",""],[1,"relative","overflow-hidden","flex","flex-column","justify-content-center"],[1,"bg-circle","opacity-50",2,"top","-200px","left","-700px"],[1,"bg-circle","hidden","lg:flex",2,"top","50px","right","-800px","transform","rotate(60deg)"],[1,"landing-wrapper"],[1,"flex","align-items-center","justify-content-between","relative","lg:static","py-6","px-4","mx-0","md:px-7","lg:px-8","lg:py-6","lg:mx-8"],[1,"cursor-pointer",3,"click"],["width","80","id","Camada_1","data-name","Camada 1","xmlns","http://www.w3.org/2000/svg","viewBox","0 0 550 550"],["d","M130.29,456.22l57.66-11,61.87,2,32.59-1.35,40.85,6.36,37-5,47.2,6.43L372,464.91s-40.06,13.5-41.88,13.5H262.36l-34.26-6-63.18-6.25Z",1,"cls-1"],["points","299.1 349.85 326.3 295.7 309.87 314.52 316.22 288.77 295.84 336.17 277.7 370.14 269.04 374.57 266.1 371.75 266.1 371.75 236.15 343.06 190.84 302.82 204.12 324.23 180.24 312.09 221.12 343.67 253.98 374.57 266.02 387.61 266.32 386.9 266.54 402.1 257.77 447.21 251.5 461.99 281.05 461.99 277.28 412.63 277.44 396.56 299.1 349.85",1,"cls-2"],["points","248.11 208.13 157.03 208.13 111.49 287.01 157.03 365.89 248.11 365.89 293.66 287.01 248.11 208.13",1,"cls-3"],["points","366.09 190.38 293.61 190.38 257.37 253.15 293.61 315.92 366.09 315.92 402.33 253.15 366.09 190.38",1,"cls-4"],["points","309.31 116.87 236.82 116.87 200.58 179.64 236.82 242.41 309.31 242.41 345.55 179.64 309.31 116.87",1,"cls-5"],["points","204.78 168.28 142.59 168.28 111.49 222.15 142.59 276.02 204.78 276.02 235.88 222.15 204.78 168.28",1,"cls-6"],["pRipple","","pStyleClass","@next","enterFromClass","ng-hidden","enterActiveClass","px-fadein","leaveToClass","ng-hidden","leaveActiveClass","px-fadeout",1,"cursor-pointer","block","md:hidden","text-700","text-primary",3,"hideOnOutsideClick"],[1,"pi","pi-bars","text-4xl"],[1,"list-none","p-3","md:p-0","justify-content-end","ng-hidden","md:flex","absolute","md:static","w-full","md:w-6","md:px-0","z-3","shadow-2","md:shadow-none","surface-card","md:surface-ground",2,"top","80px","right","0%"],["pRipple","","pStyleClass","@parent","enterFromClass","ng-hidden","enterActiveClass","px-fadein","leaveToClass","ng-hidden","leaveActiveClass","px-fadeout",1,"cursor-pointer","block","md:hidden","text-700","text-primary","absolute","z-5",2,"top","1.5rem","right","1.5rem"],[1,"pi","pi-times","text-3xl"],[1,"md:mt-0"],["pRipple","","pStyleClass","@grandparent","enterFromClass","ng-hidden","enterActiveClass","px-fadein","leaveToClass","ng-hidden",1,"flex","m-0","md:ml-5","px-0","py-3","text-900","font-medium","line-height-3","cursor-pointer",3,"click"],[1,"py-4","px-4","mx-0","md:mx-6","lg:mx-8","lg:px-8","z-2"],["id","home",1,"grid","grid-nogutter","justify-content-between","align-items-center","mb-6","py-6","md:mb-8","md:py-8"],[1,"col-12","md:col-4","flex","flex-column","gap-4","flex-order-1","md:flex-order-0","align-items-center","md:align-items-start","text-center","md:text-left"],[1,"block","text-900","font-bold","text-4xl"],[1,"block","text-700","text-lg"],[1,"col-12","md:col-7","flex-order-0","md:flex-order-1","mb-6","md:mb-0","border-round"],["animateEnter","moveinright","src","assets/layout/images/banner.png","alt","",1,"w-10","border-round","shadow-2","animation-duration-1000","animation-ease-out"],["id","modules",1,"my-6","md:my-8"],[1,"text-900","block","font-bold","text-5xl","mb-4","text-center"],[1,"text-700","block","text-xl","mb-8","text-center","line-height-3"],[1,"flex","flex-column","lg:flex-row","align-items-center","justify-content-between","mt-8","gap-8"],[1,"flex","flex-column","align-items-center"],["animateEnter","scalein","src","assets/layout/images/database.webp","alt","chat",1,"w-10","border-round","surface-border","shadow-2","animation-duration-500","origin-top"],[1,"block","text-900","text-lg","font-semibold","mt-4","text-center"],["animateEnter","scalein","src","assets/layout/images/cluster.webp","alt","chat",1,"w-10","border-round","surface-border","shadow-2","animation-duration-500","origin-top"],["animateEnter","scalein","src","assets/layout/images/results.webp","alt","chat",1,"w-10","border-round","surface-border","shadow-2","animation-duration-500","origin-top"],["id","data-source",1,"my-12","py-12","md:my-6","md:py-6","w-full"],[1,"text-900","font-bold","text-5xl","mb-4","text-center"],[1,""],[1,"text-600","text-xl","text-justify","mb-2","line-height-3"],["href","https://openalex.org/","target","_blank"],[1,"text-600","text-xl","text-justify","mb-8","line-height-3"],[1,"flex","flex-column","justify-content-center","w-full","align-items-center"],["href","#",1,"cursor-pointer"],[1,"text-600","text-xl","text-justify","line-height-3"]],template:function(i,s){if(1&i){const r=e.RV6();e.j41(0,"div",1),e.nrm(1,"div",2)(2,"div",3),e.j41(3,"div",4)(4,"div",5)(5,"a",6),e.bIt("click",function(){return e.eBV(r),e.Njj(s.router.navigate(["/"]))}),e.qSk(),e.j41(6,"svg",7)(7,"defs")(8,"style"),e.EFF(9,".cls-1{fill:#b2b2b2;}.cls-2{fill:#5a4320;}.cls-3{fill:#f9b233;}.cls-4{fill:#7cb359;}.cls-5{fill:#257a33;}.cls-6{fill:#ffed00;}"),e.k0s()(),e.j41(10,"title"),e.EFF(11,"Cerrado DPAT_final"),e.k0s(),e.nrm(12,"path",8)(13,"polygon",9)(14,"polygon",10)(15,"polygon",11)(16,"polygon",12)(17,"polygon",13),e.k0s()(),e.joV(),e.j41(18,"a",14),e.nrm(19,"i",15),e.k0s(),e.j41(20,"ul",16,0)(22,"a",17),e.nrm(23,"i",18),e.k0s(),e.j41(24,"li",19)(25,"a",20),e.bIt("click",function(){return e.eBV(r),e.Njj(s.router.navigate(["/"],{fragment:"home"}))}),e.j41(26,"span"),e.EFF(27,"Home"),e.k0s()()(),e.j41(28,"li")(29,"a",20),e.bIt("click",function(){return e.eBV(r),e.Njj(s.router.navigate(["/cienciometria"]))}),e.j41(30,"span"),e.EFF(31,"Database"),e.k0s()()(),e.j41(32,"li")(33,"a",20),e.bIt("click",function(){return e.eBV(r),e.Njj(s.router.navigate(["/cienciometria/amplo"]))}),e.j41(34,"span"),e.EFF(35,"Busca Ampla"),e.k0s()()(),e.j41(36,"li")(37,"a",20),e.bIt("click",function(){return e.eBV(r),e.Njj(s.router.navigate(["/cienciometria/restrito"]))}),e.j41(38,"span"),e.EFF(39,"Busca Restrito"),e.k0s()()()()(),e.j41(40,"div",21)(41,"div",22)(42,"div",23)(43,"span",24),e.EFF(44,"Cerrado em Rede"),e.k0s(),e.j41(45,"span",25),e.EFF(46,"Esse projeto apresenta uma an\xe1lise e s\xedntese da produ\xe7\xe3o cient\xedfica sobre o Cerrado brasileiro, utilizando dados da plataforma OpenAlex para mapear os principais autores, institui\xe7\xf5es e pa\xedses envolvidos nas pesquisas, al\xe9m de explorar as colabora\xe7\xf5es entre pesquisadores e a evolu\xe7\xe3o dos temas de estudo. O objetivo \xe9 oferecer uma vis\xe3o clara das redes cient\xedficas que moldam o campo, destacando tend\xeancias emergentes e os fluxos de conhecimento, contribuindo para o avan\xe7o do entendimento sobre o Cerrado. "),e.k0s()(),e.j41(47,"div",26),e.nrm(48,"img",27),e.k0s()(),e.j41(49,"div",28)(50,"span",29),e.EFF(51,"Explore Further"),e.k0s(),e.j41(52,"span",30),e.EFF(53,"This website offers several ways to explore the analysis results."),e.k0s(),e.j41(54,"div",31)(55,"div",32),e.nrm(56,"img",33),e.j41(57,"span",34),e.EFF(58,"Database Access: View the complete dataset of analyzed publications."),e.k0s()(),e.j41(59,"div",32),e.nrm(60,"img",35),e.j41(61,"span",34),e.EFF(62,"Publication Clusters: Investigate the identified clusters of related publications."),e.k0s()(),e.j41(63,"div",32),e.nrm(64,"img",36),e.j41(65,"span",34),e.EFF(66,"Results & Analysis: See graphs, charts, and statistical analyses summarizing the findings."),e.k0s()()()(),e.j41(67,"div",37)(68,"div",38),e.EFF(69,"Data Source"),e.k0s(),e.j41(70,"div",39)(71,"div",40),e.EFF(72,"The literature used for this analysis was obtained from the "),e.j41(73,"a",41),e.EFF(74,"OpenAlex database"),e.k0s(),e.EFF(75,", a comprehensive open-access repository of scientific publications."),e.k0s(),e.j41(76,"div",42),e.EFF(77,"Priem, J., Piwowar, H., & Orr, R. (2022). OpenAlex: A fully-open index of scholarly works, authors, venues, institutions, and concepts. ArXiv. https://arxiv.org/abs/2205.01833"),e.k0s()()(),e.j41(78,"div",43)(79,"a",44),e.qSk(),e.j41(80,"svg",7)(81,"defs")(82,"style"),e.EFF(83,".cls-1{fill:#b2b2b2;}.cls-2{fill:#5a4320;}.cls-3{fill:#f9b233;}.cls-4{fill:#7cb359;}.cls-5{fill:#257a33;}.cls-6{fill:#ffed00;}"),e.k0s()(),e.j41(84,"title"),e.EFF(85,"Cerrado DPAT_final"),e.k0s(),e.nrm(86,"path",8)(87,"polygon",9)(88,"polygon",10)(89,"polygon",11)(90,"polygon",12)(91,"polygon",13),e.k0s()(),e.joV(),e.j41(92,"div",45),e.EFF(93,"UFG \u2013 Federal University of Goi\xe1s"),e.k0s(),e.j41(94,"div",45),e.EFF(95,"Lapig \u2013 Remote Sensing and GIS Lab"),e.k0s(),e.j41(96,"div",45)(97,"strong"),e.EFF(98,"Cerrado Research Program"),e.k0s()()()()()()}2&i&&(e.R7$(18),e.Y8G("hideOnOutsideClick",!0))},dependencies:[c.k,m.n,h],styles:[".bg-circle[_ngcontent-%COMP%]{width:1000px;height:1000px;border-radius:50%;background-image:linear-gradient(140deg,var(--primary-color),var(--surface-ground) 80%);position:absolute;opacity:.25;z-index:-1}.visibility-hidden[_ngcontent-%COMP%]{visibility:hidden}.moveinright[_ngcontent-%COMP%]{animation:_ngcontent-%COMP%_moveinright .15s linear}@keyframes _ngcontent-%COMP%_moveinright{0%{opacity:0;transform:translate(50px);transition:transform .12s cubic-bezier(0,0,.2,1),opacity .12s cubic-bezier(0,0,.2,1)}to{opacity:1;transform:translate(0)}}.logo-landing[_ngcontent-%COMP%]{width:80px;height:80px}"]})}return t})(),f=(()=>{class t{static#e=this.\u0275fac=function(i){return new(i||t)};static#t=this.\u0275mod=e.$C({type:t});static#i=this.\u0275inj=e.G2t({imports:[o.iI.forChild([{path:"",component:g}]),o.iI]})}return t})();var x=a(1141),b=a(6497);let v=(()=>{class t{static#e=this.\u0275fac=function(i){return new(i||t)};static#t=this.\u0275mod=e.$C({type:t});static#i=this.\u0275inj=e.G2t({imports:[u.MD,f,x.tm,o.iI,c.y,b.G,m.Z]})}return t})()}}]);