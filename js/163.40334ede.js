"use strict";(self["webpackChunkgdmu_mentor_selection"]=self["webpackChunkgdmu_mentor_selection"]||[]).push([[163],{1241:function(e,a){a.A=(e,a)=>{const l=e.__vccOpts||e;for(const[t,i]of a)l[t]=i;return l}},4267:function(e,a,l){l.d(a,{O:function(){return i}});var t=l(5720);function i(){return(0,t.A)({url:"/api/Grade/get-all",method:"get"})}},8298:function(e,a,l){l.d(a,{Q:function(){return i}});var t=l(5720);function i(){return(0,t.A)({url:"/api/Major/get-all",method:"get"})}},6163:function(e,a,l){l.r(a),l.d(a,{default:function(){return p}});l(8992),l(2577);var t=l(6768),i=l(144),o=l(4232),d=l(1219),r=l(2933),u=l(7477),_=l(4267),n=l(8298),m=l(2004);const c={class:"config-manage"},g={class:"operation-bar"};var f={__name:"config-manage",setup(e){const a=(0,i.KR)([]),l=(0,i.KR)([]),f=(0,i.KR)([]),s=(0,i.KR)(!1),b=(0,i.KR)(!1),p=(0,i.KR)(null),h=(0,i.KR)(!1),k=(0,i.KR)(!1),v=(0,i.Kh)({conf_id:"",gde_id:"",mjr_id:"",max_group_member:5,max_stu_choice:3,max_tea_choice:3,end_time:"",conf_info:""}),x={gde_id:[{required:!0,message:"请选择年级",trigger:"change"}],mjr_id:[{required:!0,message:"请选择专业",trigger:"change"}],max_group_member:[{required:!0,message:"请设置最大组员数",trigger:"blur"}],max_stu_choice:[{required:!0,message:"请设置学生最大选择数",trigger:"blur"}],max_tea_choice:[{required:!0,message:"请设置教师最大选择数",trigger:"blur"}],end_time:[{required:!0,message:"请选择截止时间",trigger:"change"}],conf_info:[{required:!0,message:"请输入配置说明",trigger:"blur"}]},F=async()=>{s.value=!0;try{const[e,t,i]=await Promise.all([(0,_.O)(),(0,n.Q)(),(0,m.T$)()]);a.value=e,l.value=t,f.value=i}catch(e){d.nk.error("获取数据失败")}finally{s.value=!1}},w=()=>{F()},y=()=>{k.value=!1,Object.assign(v,{conf_id:"",gde_id:"",mjr_id:"",max_group_member:5,max_stu_choice:3,max_tea_choice:3,end_time:"",conf_info:""}),b.value=!0},V=e=>{k.value=!0;const t=a.value.find((a=>a.gde_value===e.gde))?.gde_id,i=l.value.find((a=>a.mjr_name===e.mjr))?.mjr_id;Object.assign(v,{conf_id:e.conf_id,gde_id:t,mjr_id:i,max_group_member:e.max_group_member,max_stu_choice:e.max_stu_choice,max_tea_choice:e.max_tea_choice,end_time:e.end_time,conf_info:e.conf_info}),b.value=!0},j=async()=>{if(p.value)try{if(await p.value.validate(),h.value=!0,k.value){const e={gde_id:v.gde_id,mjr_id:v.mjr_id,max_group_member:v.max_group_member,max_stu_choice:v.max_stu_choice,max_tea_choice:v.max_tea_choice,end_time:v.end_time,conf_info:v.conf_info};await(0,m._R)(v.conf_id,e),d.nk.success("修改成功")}else{const e={gde_id:v.gde_id,mjr_id:v.mjr_id,max_group_member:v.max_group_member,max_stu_choice:v.max_stu_choice,max_tea_choice:v.max_tea_choice,end_time:v.end_time,conf_info:v.conf_info};await(0,m.UK)(e),d.nk.success("添加成功")}b.value=!1,F()}catch(e){d.nk.error(k.value?"修改失败":"添加失败")}finally{h.value=!1}},C=async e=>{try{await r.s.confirm(`确定要删除 ${e.gde}级${e.mjr} 的配置吗？`,"警告",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}),await(0,m.io)(e.conf_id),d.nk.success("删除成功"),F()}catch(a){"cancel"!==a&&d.nk.error("删除失败")}},W=e=>{if(!e)return"";const a=new Date(e);return a.toLocaleString("zh-CN",{year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",hour12:!1})};return(0,t.sV)((()=>{F()})),(e,d)=>{const r=(0,t.g2)("el-icon"),_=(0,t.g2)("el-button"),n=(0,t.g2)("el-table-column"),m=(0,t.g2)("el-table"),F=(0,t.g2)("el-option"),K=(0,t.g2)("el-select"),R=(0,t.g2)("el-form-item"),U=(0,t.g2)("el-input-number"),q=(0,t.g2)("el-date-picker"),X=(0,t.g2)("el-input"),L=(0,t.g2)("el-form"),O=(0,t.g2)("el-dialog"),A=(0,t.gN)("loading");return(0,t.uX)(),(0,t.CE)("div",c,[d[15]||(d[15]=(0,t.Lk)("div",{class:"page-header"},[(0,t.Lk)("h2",null,"配置管理"),(0,t.Lk)("div",{class:"header-desc"},"管理各专业年级的选择配置")],-1)),(0,t.Lk)("div",g,[(0,t.bF)(_,{type:"primary",onClick:y},{default:(0,t.k6)((()=>[(0,t.bF)(r,null,{default:(0,t.k6)((()=>[(0,t.bF)((0,i.R1)(u.FWt))])),_:1}),d[9]||(d[9]=(0,t.eW)(" 添加配置 "))])),_:1}),(0,t.bF)(_,{type:"primary",onClick:w},{default:(0,t.k6)((()=>[(0,t.bF)(r,null,{default:(0,t.k6)((()=>[(0,t.bF)((0,i.R1)(u.C42))])),_:1}),d[10]||(d[10]=(0,t.eW)(" 刷新数据 "))])),_:1})]),(0,t.bo)(((0,t.uX)(),(0,t.Wv)(m,{data:f.value,stripe:"",style:{width:"100%"},"header-cell-style":{background:"#fafafa",color:"#606266",fontWeight:600},border:""},{default:(0,t.k6)((()=>[(0,t.bF)(n,{prop:"gde",label:"年级",width:"100"},{default:(0,t.k6)((({row:e})=>[(0,t.eW)((0,o.v_)(e.gde)+"级 ",1)])),_:1}),(0,t.bF)(n,{prop:"mjr",label:"专业","min-width":"180"}),(0,t.bF)(n,{prop:"max_group_member",label:"最大组员数",width:"120"}),(0,t.bF)(n,{prop:"max_stu_choice",label:"学生最大选择数",width:"140"}),(0,t.bF)(n,{prop:"max_tea_choice",label:"教师最大选择数",width:"140"}),(0,t.bF)(n,{prop:"end_time",label:"截止时间",width:"180"},{default:(0,t.k6)((({row:e})=>[(0,t.eW)((0,o.v_)(W(e.end_time)),1)])),_:1}),(0,t.bF)(n,{prop:"conf_info",label:"说明","min-width":"200","show-overflow-tooltip":""}),(0,t.bF)(n,{label:"操作",width:"200",fixed:"right"},{default:(0,t.k6)((({row:e})=>[(0,t.bF)(_,{type:"primary",link:"",onClick:a=>V(e)},{default:(0,t.k6)((()=>d[11]||(d[11]=[(0,t.eW)(" 编辑 ")]))),_:2},1032,["onClick"]),(0,t.bF)(_,{type:"danger",link:"",onClick:a=>C(e)},{default:(0,t.k6)((()=>d[12]||(d[12]=[(0,t.eW)(" 删除 ")]))),_:2},1032,["onClick"])])),_:1})])),_:1},8,["data"])),[[A,s.value]]),(0,t.bF)(O,{title:k.value?"编辑配置":"添加配置",modelValue:b.value,"onUpdate:modelValue":d[8]||(d[8]=e=>b.value=e),width:"50%"},{footer:(0,t.k6)((()=>[(0,t.bF)(_,{onClick:d[7]||(d[7]=e=>b.value=!1)},{default:(0,t.k6)((()=>d[13]||(d[13]=[(0,t.eW)("取消")]))),_:1}),(0,t.bF)(_,{type:"primary",onClick:j,loading:h.value},{default:(0,t.k6)((()=>d[14]||(d[14]=[(0,t.eW)(" 确定 ")]))),_:1},8,["loading"])])),default:(0,t.k6)((()=>[(0,t.bF)(L,{ref_key:"formRef",ref:p,model:v,rules:x,"label-width":"140px"},{default:(0,t.k6)((()=>[(0,t.bF)(R,{label:"年级",prop:"gde_id"},{default:(0,t.k6)((()=>[(0,t.bF)(K,{modelValue:v.gde_id,"onUpdate:modelValue":d[0]||(d[0]=e=>v.gde_id=e),style:{width:"100%"}},{default:(0,t.k6)((()=>[((0,t.uX)(!0),(0,t.CE)(t.FK,null,(0,t.pI)(a.value,(e=>((0,t.uX)(),(0,t.Wv)(F,{key:e.gde_id,label:`${e.gde_value}级`,value:e.gde_id},null,8,["label","value"])))),128))])),_:1},8,["modelValue"])])),_:1}),(0,t.bF)(R,{label:"专业",prop:"mjr_id"},{default:(0,t.k6)((()=>[(0,t.bF)(K,{modelValue:v.mjr_id,"onUpdate:modelValue":d[1]||(d[1]=e=>v.mjr_id=e),style:{width:"100%"}},{default:(0,t.k6)((()=>[((0,t.uX)(!0),(0,t.CE)(t.FK,null,(0,t.pI)(l.value,(e=>((0,t.uX)(),(0,t.Wv)(F,{key:e.mjr_id,label:e.mjr_name,value:e.mjr_id},null,8,["label","value"])))),128))])),_:1},8,["modelValue"])])),_:1}),(0,t.bF)(R,{label:"最大组员数",prop:"max_group_member"},{default:(0,t.k6)((()=>[(0,t.bF)(U,{modelValue:v.max_group_member,"onUpdate:modelValue":d[2]||(d[2]=e=>v.max_group_member=e),min:2,max:10,style:{width:"100%"}},null,8,["modelValue"])])),_:1}),(0,t.bF)(R,{label:"学生最大选择数",prop:"max_stu_choice"},{default:(0,t.k6)((()=>[(0,t.bF)(U,{modelValue:v.max_stu_choice,"onUpdate:modelValue":d[3]||(d[3]=e=>v.max_stu_choice=e),min:1,max:10,style:{width:"100%"}},null,8,["modelValue"])])),_:1}),(0,t.bF)(R,{label:"教师最大选择数",prop:"max_tea_choice"},{default:(0,t.k6)((()=>[(0,t.bF)(U,{modelValue:v.max_tea_choice,"onUpdate:modelValue":d[4]||(d[4]=e=>v.max_tea_choice=e),min:1,max:10,style:{width:"100%"}},null,8,["modelValue"])])),_:1}),(0,t.bF)(R,{label:"截止时间",prop:"end_time"},{default:(0,t.k6)((()=>[(0,t.bF)(q,{modelValue:v.end_time,"onUpdate:modelValue":d[5]||(d[5]=e=>v.end_time=e),type:"datetime",placeholder:"选择截止时间",style:{width:"100%"},"value-format":"YYYY-MM-DDTHH:mm:ss.SSSZ"},null,8,["modelValue"])])),_:1}),(0,t.bF)(R,{label:"说明",prop:"conf_info"},{default:(0,t.k6)((()=>[(0,t.bF)(X,{modelValue:v.conf_info,"onUpdate:modelValue":d[6]||(d[6]=e=>v.conf_info=e),type:"textarea",rows:4,placeholder:"请输入配置说明"},null,8,["modelValue"])])),_:1})])),_:1},8,["model"])])),_:1},8,["title","modelValue"])])}}},s=l(1241);const b=(0,s.A)(f,[["__scopeId","data-v-cad2a5ba"]]);var p=b}}]);
//# sourceMappingURL=163.40334ede.js.map