"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[6343],{2872:(e,t,r)=>{r.d(t,{Z:()=>n});var a=r(7294),l=r(9960);function n(){return a.createElement(a.Fragment,null,a.createElement("hr",null),a.createElement("p",{className:"text-md"},"For any questions or to request a tutorial check out our ",a.createElement(l.Z,{href:"https://supportportal.thalesgroup.com/community"},a.createElement("span",{className:"text-blue-600"},"community forum")),"."))}},7200:(e,t,r)=>{r.d(t,{Z:()=>p});var a=r(7294),l=r(5697),n=r.n(l),i=r(7373),o=r(9960);const u=e=>{let{href:t}=e;return a.createElement("div",null,a.createElement(o.Z,{href:t},a.createElement("button",{style:{backgroundColor:"#171515"},className:"p-2 my-4 rounded-md border-none cursor-pointer text-white"},"GitHub ",a.createElement(i.RrF,{className:"text-white"}))))},s=e=>{let{href:t}=e;return a.createElement("div",null,a.createElement(o.Z,{href:t},a.createElement("button",{className:"p-2 my-4 rounded-md border-none cursor-pointer"},"View Demo ",a.createElement(i.mGl,null))))},m=e=>{let{href:t,demourl:r}=e;return a.createElement("div",{className:"flex flex-row justify-between"},t?a.createElement(u,{href:t}):a.createElement(a.Fragment,null),r?a.createElement(s,{href:r}):a.createElement(a.Fragment,null))};m.propTypes={href:n().string.isRequired,demourl:n().string};const p=m},7148:(e,t,r)=>{r.d(t,{Z:()=>u});var a=r(7294),l=r(5697),n=r.n(l),i=r(7200);const o=e=>{let{embedId:t,github:r,demourl:l}=e;return a.createElement(a.Fragment,null,a.createElement("div",{className:"video-responsive"},a.createElement("iframe",{width:"853",height:"480",src:`https://www.youtube.com/embed/${t}`,frameBorder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0,title:"Embedded youtube"})),a.createElement(i.Z,{href:r,demourl:l}))};o.propTypes={embedId:n().string.isRequired};const u=o},6133:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>m,contentTitle:()=>u,default:()=>h,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var a=r(7462),l=(r(7294),r(3905)),n=r(7148),i=r(2872);const o={sidebar_position:1},u="Azure",s={unversionedId:"deploy/azure",id:"deploy/azure",title:"Azure",description:"Deploy CipherTrust Manager CE on Azure in under 5 mins",source:"@site/docs/deploy/azure.mdx",sourceDirName:"deploy",slug:"/deploy/azure",permalink:"/ciphertrust/docs/deploy/azure",draft:!1,editUrl:"https://github.com/thalesgroup/ThalesGroup.github.io/tree/main/ciphertrust/docs/deploy/azure.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Deploy CipherTrust Platform",permalink:"/ciphertrust/docs/category/deploy-ciphertrust-platform"},next:{title:"Amazon Web Services",permalink:"/ciphertrust/docs/deploy/aws"}},m={},p=[{value:"Using Terraform",id:"using-terraform",level:2},{value:"Pre-requisite Installations",id:"pre-requisite-installations",level:3},{value:"2. Login to Azure CLI",id:"2-login-to-azure-cli",level:3},{value:"3. Initialize Terraform Modules",id:"3-initialize-terraform-modules",level:3},{value:"4. Plan and Apply Terraform Configurations",id:"4-plan-and-apply-terraform-configurations",level:3}],d={toc:p},c="wrapper";function h(e){let{components:t,...r}=e;return(0,l.kt)(c,(0,a.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"azure"},"Azure"),(0,l.kt)("p",null,"Deploy CipherTrust Manager CE on Azure in under 5 mins"),(0,l.kt)("p",null,"To get started with CipherTrust Manager Community Edition on Azure you must first deploy the server from the Azure cloud marketplace either using ",(0,l.kt)("a",{parentName:"p",href:"##using-terraform"},"Terraform")," or directly through the ",(0,l.kt)("a",{parentName:"p",href:"##web-ui"},"Azure Web Console")),(0,l.kt)("h2",{id:"using-terraform"},"Using Terraform"),(0,l.kt)(n.Z,{embedId:"2lS4n_mSt2w",github:"https://github.com/ThalesGroup/learn-ciphertrust/tree/main/deploy/terraform/azure/",mdxType:"YoutubeEmbed"}),(0,l.kt)("h3",{id:"pre-requisite-installations"},"Pre-requisite Installations"),(0,l.kt)("p",null,"You need to install the following packages to follow along with this tutorial."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://gitscm.org"},"Git")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://terraform.io/downloads"},"Terraform CLI")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://docs.microsoft.com/en-us/cli/azure/install-azure-cli"},"Azure CLI"))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title="Terminal"',title:'"Terminal"'},"git clone https://github.com/ThalesGroup/learn-ciphertrust.git\ncd learn-ciphertrust/deploy/terraform/aws/\n")),(0,l.kt)("h3",{id:"2-login-to-azure-cli"},"2. Login to Azure CLI"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title="Terminal"',title:'"Terminal"'},"az login\n")),(0,l.kt)("h3",{id:"3-initialize-terraform-modules"},"3. Initialize Terraform Modules"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title="Terminal"',title:'"Terminal"'},"terraform init\n")),(0,l.kt)("h3",{id:"4-plan-and-apply-terraform-configurations"},"4. Plan and Apply Terraform Configurations"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title="Terminal"',title:'"Terminal"'},"terraform apply\n")),(0,l.kt)(i.Z,{mdxType:"TutorialFooter"}))}h.isMDXComponent=!0}}]);