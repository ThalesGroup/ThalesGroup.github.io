"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[3045],{5680:(e,t,A)=>{A.d(t,{xA:()=>u,yg:()=>h});var r=A(6540);function n(e,t,A){return t in e?Object.defineProperty(e,t,{value:A,enumerable:!0,configurable:!0,writable:!0}):e[t]=A,e}function a(e,t){var A=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),A.push.apply(A,r)}return A}function o(e){for(var t=1;t<arguments.length;t++){var A=null!=arguments[t]?arguments[t]:{};t%2?a(Object(A),!0).forEach((function(t){n(e,t,A[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(A)):a(Object(A)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(A,t))}))}return e}function i(e,t){if(null==e)return{};var A,r,n=function(e,t){if(null==e)return{};var A,r,n={},a=Object.keys(e);for(r=0;r<a.length;r++)A=a[r],t.indexOf(A)>=0||(n[A]=e[A]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)A=a[r],t.indexOf(A)>=0||Object.prototype.propertyIsEnumerable.call(e,A)&&(n[A]=e[A])}return n}var s=r.createContext({}),l=function(e){var t=r.useContext(s),A=t;return e&&(A="function"==typeof e?e(t):o(o({},t),e)),A},u=function(e){var t=l(e.components);return r.createElement(s.Provider,{value:t},e.children)},c="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var A=e.components,n=e.mdxType,a=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),c=l(A),d=n,h=c["".concat(s,".").concat(d)]||c[d]||p[d]||a;return A?r.createElement(h,o(o({ref:t},u),{},{components:A})):r.createElement(h,o({ref:t},u))}));function h(e,t){var A=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=A.length,o=new Array(a);o[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[c]="string"==typeof e?e:n,o[1]=i;for(var l=2;l<a;l++)o[l]=A[l];return r.createElement.apply(null,o)}return r.createElement.apply(null,A)}d.displayName="MDXCreateElement"},6488:(e,t,A)=>{A.r(t),A.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>p,frontMatter:()=>a,metadata:()=>i,toc:()=>l});var r=A(8168),n=(A(6540),A(5680));const a={slug:"CipherTrust and Active Directory",title:"CipherTrust and Active Directory",authors:"hal",tags:["data-encryption","devops","data-security"]},o="CipherTrust and Active Directory",i={permalink:"/ciphertrust/blog/CipherTrust and Active Directory",editUrl:"https://github.com/thalesgroup/ThalesGroup.github.io/tree/main/ciphertrust/blog/2023-06-30-ciphertrust-and-active-directory.md",source:"@site/blog/2023-06-30-ciphertrust-and-active-directory.md",title:"CipherTrust and Active Directory",description:'Note - this article was originally posted on Hal\'s blog on March 21, 2023 under the title "Thales CipherTrust & Active Directory."',date:"2023-06-30T00:00:00.000Z",formattedDate:"June 30, 2023",tags:[{label:"data-encryption",permalink:"/ciphertrust/blog/tags/data-encryption"},{label:"devops",permalink:"/ciphertrust/blog/tags/devops"},{label:"data-security",permalink:"/ciphertrust/blog/tags/data-security"}],readingTime:1.915,hasTruncateMarker:!1,authors:[{name:"Hal Yaman (B.Sc)",title:"Sales Engineering Manager @ Thales",imageURL:"https://i0.wp.com/cloudoasis.com.au/wp-content/uploads/2019/09/IMG_0054-30x40.jpg?resize=225%2C300&ssl=1",key:"hal"}],frontMatter:{slug:"CipherTrust and Active Directory",title:"CipherTrust and Active Directory",authors:"hal",tags:["data-encryption","devops","data-security"]},prevItem:{title:"HYOK Cloud Key Management Solution for Azure",permalink:"/ciphertrust/blog/HYOK-in-Azure"},nextItem:{title:"Data Security without DevOps Disruption",permalink:"/ciphertrust/blog/Data-Security-in-DevOps"}},s={authorsImageUrls:[void 0]},l=[{value:"The Why",id:"the-why",level:2},{value:"The How",id:"the-how",level:2},{value:"Conclusion",id:"conclusion",level:2}],u={toc:l},c="wrapper";function p(e){let{components:t,...a}=e;return(0,n.yg)(c,(0,r.A)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,n.yg)("p",null,'Note - this article was originally posted on Hal\'s blog on March 21, 2023 under the title "Thales CipherTrust & Active Directory."'),(0,n.yg)("p",null,(0,n.yg)("img",{alt:"Into Image",src:A(5536).A,width:"240",height:"207"})," Why should you integrate Thales CipherTrust with your Microsoft Active Directory? What are the benefits of integration, and how is it done? Does Thales CipherTrust Manager (CTM) replace your Active Directory Group policy?"),(0,n.yg)("p",null,"In the previous blog post, we went through the deployment of the CipherTrust Manager in our VMware environment. In today\u2019s post, we will focus our discussion on how to integrate the newly provisioned OVA with the company Active Directory, a necessary step for activities we will discuss in our future posts."),(0,n.yg)("h2",{id:"the-why"},"The Why"),(0,n.yg)("p",null,"To streamline the management of your company\u2019s security requirements, and to easily manage your access and control of the company files and directories, it is a good idea to integrate CTM with Active Directory as a source of user management. By doing this, you can assign your policies more easily by basing them on the company AD Users and Groups."),(0,n.yg)("h2",{id:"the-how"},"The How"),(0,n.yg)("p",null,"Now let\u2019s focus on the fun technical part, the integration. The first step before we start the configuration is to get some information from AD; so, let\u2019s run the following PowerShell command to retrieve the necessary information for our configuration: ",(0,n.yg)("img",{alt:"Get ADuser",src:A(1634).A,width:"708",height:"94"})),(0,n.yg)("p",null,"The output will be as shown below:"),(0,n.yg)("p",null,(0,n.yg)("img",{alt:"AD Info",src:A(8350).A,width:"467",height:"145"})),(0,n.yg)("p",null,"After you have retrieved the above information, we are ready to head back to our CTM and browse to: Access Management -> LDAP. From the top right corner, select \u201c+ Add LDAP\u201c:"),(0,n.yg)("p",null,(0,n.yg)("img",{alt:"CTM_LDAP",src:A(4722).A,width:"236",height:"231"})),(0,n.yg)("p",null,"On the pop-up config windows, provide the following information:"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},"Connection Name: any"),(0,n.yg)("li",{parentName:"ul"},"Server URL: your AD IP/DNS name"),(0,n.yg)("li",{parentName:"ul"},"Bind DN: CN=Administrator,CN=Users,DC=oasis,DC=org"),(0,n.yg)("li",{parentName:"ul"},"Server Bind Password: account password"),(0,n.yg)("li",{parentName:"ul"},"Rood DN: DC=oasis,DC=org"),(0,n.yg)("li",{parentName:"ul"},"User login name attribute: sAMAccountName\n",(0,n.yg)("img",{alt:"AD_Bind-1",src:A(7607).A,width:"768",height:"485"}))),(0,n.yg)("p",null,"After you have tested the configurations to be correct and are ready to accept it, click on the \u201cAdd LDAP\u201d button at the bottom right corner."),(0,n.yg)("h2",{id:"conclusion"},"Conclusion"),(0,n.yg)("p",null,"Today\u2019s blog is very important; this post is setting the foundation for our next exciting topic, Thales Transparent Encryption feature. As you may have noticed, to integrate the CTM with AD is a very simple, but important operation. Next week, we going to use the configuration setup today to access and encrypt the company\u2019s critical data."))}p.isMDXComponent=!0},7607:(e,t,A)=>{A.d(t,{A:()=>r});const r=A.p+"assets/images/AD_Bind-1-68ec27ae82614062d96ae51ed7eb5225.webp"},8350:(e,t,A)=>{A.d(t,{A:()=>r});const r="data:image/webp;base64,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"},4722:(e,t,A)=>{A.d(t,{A:()=>r});const r="data:image/webp;base64,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"},5536:(e,t,A)=>{A.d(t,{A:()=>r});const r=A.p+"assets/images/Multi-cloud-key-management-onboarding-897f0a61f81b58cc47ad829cdad9dbc3.png"},1634:(e,t,A)=>{A.d(t,{A:()=>r});const r="data:image/png;base64,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"}}]);