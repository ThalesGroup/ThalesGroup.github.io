"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[7419],{2872:(e,t,r)=>{r.d(t,{Z:()=>o});var l=r(7294),a=r(9960);function o(){return l.createElement(l.Fragment,null,l.createElement("hr",null),l.createElement("p",{className:"text-md"},"For any questions or to request a tutorial check out our ",l.createElement(a.Z,{href:"https://supportportal.thalesgroup.com/community"},l.createElement("span",{className:"text-blue-600"},"community forum")),"."))}},7200:(e,t,r)=>{r.d(t,{Z:()=>d});var l=r(7294),a=r(5697),o=r.n(a),n=r(7373),i=r(9960);const s=e=>{let{href:t}=e;return l.createElement("div",null,l.createElement(i.Z,{href:t},l.createElement("button",{style:{backgroundColor:"#171515"},className:"p-2 my-4 rounded-md border-none cursor-pointer text-white"},"GitHub ",l.createElement(n.RrF,{className:"text-white"}))))},u=e=>{let{href:t}=e;return l.createElement("div",null,l.createElement(i.Z,{href:t},l.createElement("button",{className:"p-2 my-4 rounded-md border-none cursor-pointer"},"View Demo ",l.createElement(n.mGl,null))))},m=e=>{let{href:t,demourl:r}=e;return l.createElement("div",{className:"flex flex-row justify-between"},t?l.createElement(s,{href:t}):l.createElement(l.Fragment,null),r?l.createElement(u,{href:r}):l.createElement(l.Fragment,null))};m.propTypes={href:o().string.isRequired,demourl:o().string};const d=m},7148:(e,t,r)=>{r.d(t,{Z:()=>s});var l=r(7294),a=r(5697),o=r.n(a),n=r(7200);const i=e=>{let{embedId:t,github:r,demourl:a}=e;return l.createElement(l.Fragment,null,l.createElement("div",{className:"video-responsive"},l.createElement("iframe",{width:"853",height:"480",src:`https://www.youtube.com/embed/${t}`,frameBorder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0,title:"Embedded youtube"})),l.createElement(n.Z,{href:r,demourl:a}))};i.propTypes={embedId:o().string.isRequired};const s=i},3592:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>m,contentTitle:()=>s,default:()=>g,frontMatter:()=>i,metadata:()=>u,toc:()=>d});var l=r(7462),a=(r(7294),r(3905)),o=r(7148),n=r(2872);const i={sidebar_position:3},s="Google Cloud Platform",u={unversionedId:"deploy/gcp",id:"deploy/gcp",title:"Google Cloud Platform",description:"Deploy CipherTrust Manager CE on Google Cloud Platform in under 5 mins",source:"@site/docs/deploy/gcp.mdx",sourceDirName:"deploy",slug:"/deploy/gcp",permalink:"/ciphertrust/docs/deploy/gcp",draft:!1,editUrl:"https://github.com/thalesgroup/ThalesGroup.github.io/tree/main/ciphertrust/docs/deploy/gcp.mdx",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Amazon Web Services",permalink:"/ciphertrust/docs/deploy/aws"},next:{title:"Key Manager",permalink:"/ciphertrust/docs/category/key-manager"}},m={},d=[{value:"Using Terraform",id:"using-terraform",level:2},{value:"Pre-requisite Installations",id:"pre-requisite-installations",level:3},{value:"2. Login to GCloud CLI",id:"2-login-to-gcloud-cli",level:3},{value:"3. Initialize Terraform Modules",id:"3-initialize-terraform-modules",level:3},{value:"4. Plan and Apply Terraform Configurations",id:"4-plan-and-apply-terraform-configurations",level:3}],p={toc:d},c="wrapper";function g(e){let{components:t,...r}=e;return(0,a.kt)(c,(0,l.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"google-cloud-platform"},"Google Cloud Platform"),(0,a.kt)("p",null,"Deploy CipherTrust Manager CE on Google Cloud Platform in under 5 mins"),(0,a.kt)("p",null,"Get started with CipherTrust Manager Community Edition on Azure you must first deploy the server from the GCP cloud marketplace using ",(0,a.kt)("a",{parentName:"p",href:"##using-terraform"},"Terraform")),(0,a.kt)("h2",{id:"using-terraform"},"Using Terraform"),(0,a.kt)(o.Z,{embedId:"q6jNmuq1ZUY",github:"https://github.com/ThalesGroup/learn-ciphertrust/tree/main/deploy/terraform/gcp",mdxType:"YoutubeEmbed"}),(0,a.kt)("h3",{id:"pre-requisite-installations"},"Pre-requisite Installations"),(0,a.kt)("p",null,"You need to install the following packages to follow along with this tutorial."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://gitscm.org"},"Git")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://terraform.io/downloads"},"Terraform CLI")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://cloud.google.com/sdk/docs/install-sdk#installing_the_latest_version"},"GCloud CLI"))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title="Terminal"',title:'"Terminal"'},"git clone https://github.com/ThalesGroup/learn-ciphertrust.git\ncd learn-ciphertrust/deploy/terraform/aws/\n")),(0,a.kt)("h3",{id:"2-login-to-gcloud-cli"},"2. Login to GCloud CLI"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title="Terminal"',title:'"Terminal"'},"gcloud init\n")),(0,a.kt)("h3",{id:"3-initialize-terraform-modules"},"3. Initialize Terraform Modules"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title="Terminal"',title:'"Terminal"'},"terraform init\n")),(0,a.kt)("h3",{id:"4-plan-and-apply-terraform-configurations"},"4. Plan and Apply Terraform Configurations"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title="Terminal"',title:'"Terminal"'},"terraform apply\n")),(0,a.kt)(n.Z,{mdxType:"TutorialFooter"}))}g.isMDXComponent=!0}}]);