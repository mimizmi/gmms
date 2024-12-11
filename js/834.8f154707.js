"use strict";(self["webpackChunkgdmu_mentor_selection"]=self["webpackChunkgdmu_mentor_selection"]||[]).push([[834],{1241:function(e,a){a.A=(e,a)=>{const l=e.__vccOpts||e;for(const[d,o]of a)l[d]=o;return l}},7834:function(e,a,l){l.r(a),l.d(a,{default:function(){return _}});l(4114);var d=l(6768),o=l(4232),t=l(144),r=l(8500),s=l(5720);function n(e,a,l){return(0,s.A)({url:"/api/Admin/update-pwd",method:"post",params:{new_pwd:l},data:{adm_name:e,adm_pwd:a}})}var u=l(1219),i=l(7477),c=l(1387);const m={class:"settings"},f={class:"password-generator"},p={class:"password-tip"};var b={__name:"admin-settings",setup(e){const a=(0,r.k)(),l=(0,c.rd)(),s=(0,t.KR)(!1),b=(0,t.KR)(null),k=(0,t.KR)(""),h=(0,t.Kh)({oldPassword:""}),_={oldPassword:[{required:!0,message:"请输入当前密码",trigger:"blur"}]},v=()=>{const e=12,a="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*";let l="";l+="ABCDEFGHIJKLMNOPQRSTUVWXYZ"[Math.floor(26*Math.random())],l+="abcdefghijklmnopqrstuvwxyz"[Math.floor(26*Math.random())],l+="0123456789"[Math.floor(10*Math.random())],l+="!@#$%^&*"[Math.floor(8*Math.random())];while(l.length<e)l+=a[Math.floor(Math.random()*a.length)];k.value=l.split("").sort((()=>Math.random()-.5)).join("")},w=async()=>{try{await navigator.clipboard.writeText(k.value),u.nk.success("密码已复制到剪贴板")}catch(e){u.nk.error("复制失败，请手动复制")}},g=async()=>{if(b.value)try{await b.value.validate(),s.value=!0,await n(a.userInfo.adm_name,h.oldPassword,k.value),u.nk.success("密码修改成功，请使用新密码重新登录"),a.logout(),l.push("/system-management/auth")}catch(e){u.nk.error("密码修改失败，请检查当前密码是否正确")}finally{s.value=!1}};return(0,d.sV)((()=>{v()})),(e,l)=>{const r=(0,d.g2)("el-descriptions-item"),n=(0,d.g2)("el-descriptions"),u=(0,d.g2)("el-card"),c=(0,d.g2)("el-input"),F=(0,d.g2)("el-form-item"),y=(0,d.g2)("el-icon"),M=(0,d.g2)("el-button"),R=(0,d.g2)("el-alert"),C=(0,d.g2)("el-form");return(0,d.uX)(),(0,d.CE)("div",m,[(0,d.bF)(u,{class:"info-card"},{header:(0,d.k6)((()=>l[2]||(l[2]=[(0,d.Lk)("div",{class:"card-header"},[(0,d.Lk)("h3",null,"管理员信息")],-1)]))),default:(0,d.k6)((()=>[(0,d.bF)(n,{column:2,border:""},{default:(0,d.k6)((()=>[(0,d.bF)(r,{label:"管理员账号"},{default:(0,d.k6)((()=>[(0,d.eW)((0,o.v_)((0,t.R1)(a).userInfo?.adm_name),1)])),_:1}),(0,d.bF)(r,{label:"管理员ID"},{default:(0,d.k6)((()=>[(0,d.eW)((0,o.v_)((0,t.R1)(a).userInfo?.adm_id),1)])),_:1})])),_:1})])),_:1}),(0,d.bF)(u,{class:"password-card"},{header:(0,d.k6)((()=>l[3]||(l[3]=[(0,d.Lk)("div",{class:"card-header"},[(0,d.Lk)("h3",null,"密码重置")],-1)]))),default:(0,d.k6)((()=>[(0,d.bF)(C,{ref_key:"passwordFormRef",ref:b,model:h,rules:_,"label-width":"120px"},{default:(0,d.k6)((()=>[(0,d.bF)(F,{label:"当前密码",prop:"oldPassword"},{default:(0,d.k6)((()=>[(0,d.bF)(c,{modelValue:h.oldPassword,"onUpdate:modelValue":l[0]||(l[0]=e=>h.oldPassword=e),type:"password","show-password":"",placeholder:"请输入当前密码"},null,8,["modelValue"])])),_:1}),(0,d.bF)(F,{label:"新密码"},{default:(0,d.k6)((()=>[(0,d.Lk)("div",f,[(0,d.bF)(c,{modelValue:k.value,"onUpdate:modelValue":l[1]||(l[1]=e=>k.value=e),placeholder:"自动生成的新密码",readonly:""},{append:(0,d.k6)((()=>[(0,d.bF)(M,{onClick:v},{default:(0,d.k6)((()=>[(0,d.bF)(y,null,{default:(0,d.k6)((()=>[(0,d.bF)((0,t.R1)(i.C42))])),_:1}),l[4]||(l[4]=(0,d.eW)(" 重新生成 "))])),_:1})])),_:1},8,["modelValue"]),(0,d.bF)(M,{type:"primary",onClick:w,disabled:!k.value},{default:(0,d.k6)((()=>[(0,d.bF)(y,null,{default:(0,d.k6)((()=>[(0,d.bF)((0,t.R1)(i.f5b))])),_:1}),l[5]||(l[5]=(0,d.eW)(" 复制密码 "))])),_:1},8,["disabled"])]),(0,d.Lk)("div",p,[(0,d.bF)(R,{type:"info",closable:!1,"show-icon":""},{default:(0,d.k6)((()=>l[6]||(l[6]=[(0,d.eW)(" 新密码将自动生成，包含大小写字母、数字和特殊字符，请妥善保管 ")]))),_:1})])])),_:1}),(0,d.bF)(F,null,{default:(0,d.k6)((()=>[(0,d.bF)(M,{type:"primary",onClick:g,loading:s.value,disabled:!h.oldPassword||!k.value},{default:(0,d.k6)((()=>l[7]||(l[7]=[(0,d.eW)(" 确认修改 ")]))),_:1},8,["loading","disabled"])])),_:1})])),_:1},8,["model"])])),_:1})])}}},k=l(1241);const h=(0,k.A)(b,[["__scopeId","data-v-29b2713d"]]);var _=h}}]);
//# sourceMappingURL=834.8f154707.js.map