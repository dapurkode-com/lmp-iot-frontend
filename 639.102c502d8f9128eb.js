"use strict";(self.webpackChunklmp_itb_front=self.webpackChunklmp_itb_front||[]).push([[639],{2639:(Z,h,o)=>{o.r(h),o.d(h,{HealthlinkModule:()=>g});var u=o(9808),r=o(9544),e=o(1223);let d=(()=>{class a{constructor(t){this.router=t,this.urlMenu={status:{link:"/healthlink/status",status:"btn-outline-danger"},mood:{link:"/healthlink/mood",status:"btn-outline-danger"},step:{link:"/healthlink/step",status:"btn-outline-danger"},sleep:{link:"/healthlink/sleep",status:"btn-outline-danger"}}}ngOnInit(){this.urlMenuActivation(this.router.url),this.router.events.subscribe(t=>{t instanceof r.OD&&this.urlMenuActivation(t.url)})}urlMenuActivation(t){this.keys(this.urlMenu).forEach(l=>{this.urlMenu[l].status="btn-outline-danger",t==this.urlMenu[l].link&&(this.urlMenu[l].status="btn-danger")})}keys(t){return Object.keys(t)}}return a.\u0275fac=function(t){return new(t||a)(e.Y36(r.F0))},a.\u0275cmp=e.Xpm({type:a,selectors:[["app-healthlink"]],decls:29,vars:8,consts:[[1,"row"],[1,"col-12"],[1,"card","corona-gradient-card","mb-4"],[1,"card-body","d-flex"],[1,"mr-auto"],[1,"display-4"],[1,"text-warning","pl-4","position-relative"],[1,"mdi","mdi-calendar","position-absolute",2,"left","0"],[1,"mdi","mdi-gender-male","position-absolute",2,"left","0"],["src","../../assets/images/faces/face15.jpg",1,"rounded-circle",2,"height","98px"],[1,"page-header"],[1,"page-title"],[1,"tab__link"],[1,"btn","btn-fw",3,"routerLink","ngClass"],[1,"btn","btn-outline-danger","btn-fw",3,"routerLink","ngClass"]],template:function(t,l){1&t&&(e.TgZ(0,"div",0),e.TgZ(1,"div",1),e.TgZ(2,"div",2),e.TgZ(3,"div",3),e.TgZ(4,"span",4),e.TgZ(5,"h2",5),e._uU(6,"Hendry Klein"),e.qZA(),e.TgZ(7,"h5",6),e._UZ(8,"i",7),e._uU(9," 23 Year Old"),e.qZA(),e.TgZ(10,"h5",6),e._UZ(11,"i",8),e._uU(12," Male"),e.qZA(),e.qZA(),e._UZ(13,"img",9),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.TgZ(14,"div",10),e.TgZ(15,"h3",11),e._uU(16,"Healthlink"),e.qZA(),e.TgZ(17,"span",12),e.TgZ(18,"a",13),e._uU(19,"Status"),e.qZA(),e.TgZ(20,"a",14),e._uU(21,"Mood"),e.qZA(),e.TgZ(22,"a",14),e._uU(23,"Sleep"),e.qZA(),e.TgZ(24,"a",14),e._uU(25,"Step"),e.qZA(),e.qZA(),e.qZA(),e.TgZ(26,"div",0),e.TgZ(27,"div",1),e._UZ(28,"router-outlet"),e.qZA(),e.qZA()),2&t&&(e.xp6(18),e.Q6J("routerLink",l.urlMenu.status.link)("ngClass",l.urlMenu.status.status),e.xp6(2),e.Q6J("routerLink",l.urlMenu.mood.link)("ngClass",l.urlMenu.mood.status),e.xp6(2),e.Q6J("routerLink",l.urlMenu.sleep.link)("ngClass",l.urlMenu.sleep.status),e.xp6(2),e.Q6J("routerLink",l.urlMenu.step.link)("ngClass",l.urlMenu.step.status))},directives:[r.yS,u.mk,r.lC],styles:[""]}),a})();var i=o(5439),n=o(3238);const p=[{path:"",component:d,children:[{path:"status",component:(()=>{class a{constructor(){this.calorieObj={dateReadable:null,calorieReadable:null},this.heartRateObj={dateReadable:null,rate:null},this.weightObj={dateReadable:null,weight:null}}ngOnInit(){this.calorieObj=JSON.parse(""+localStorage.getItem(n.r.p2)),this.heartRateObj=JSON.parse(""+localStorage.getItem(n.r.HY)),this.weightObj=JSON.parse(""+localStorage.getItem(n.r.ku)),this.setCalorieObj(),this.setHeartRateObj(),this.setWeightObj(),this.timeInterval=setInterval(()=>{this.setCalorieObj(),this.setHeartRateObj(),this.setWeightObj()},6e4)}ngOnDestroy(){clearInterval(this.timeInterval),localStorage.setItem(n.r.p2,JSON.stringify(this.calorieObj)),localStorage.setItem(n.r.HY,JSON.stringify(this.heartRateObj)),localStorage.setItem(n.r.ku,JSON.stringify(this.weightObj))}setCalorieObj(){fetch(`${n.Y}calorie-expended/today`).then(t=>t.json()).then(t=>{t.calorieReadable=(new Intl.NumberFormat).format(t.calorie||0),t.dateReadable=i(t.datetime).format("DD MMMM YYYY, h:mmA"),this.calorieObj=t})}setHeartRateObj(){fetch(`${n.Y}heart-rate/today`).then(t=>t.json()).then(t=>{t.dateReadable=i(t.datetime).format("DD MMMM YYYY, h:mmA"),this.heartRateObj=t})}setWeightObj(){fetch(`${n.Y}weight/today`).then(t=>t.json()).then(t=>{t.dateReadable=i(t.start_datetime).format("DD MMMM YYYY, h:mmA"),this.weightObj=t})}}return a.\u0275fac=function(t){return new(t||a)},a.\u0275cmp=e.Xpm({type:a,selectors:[["app-health-status"]],decls:49,vars:6,consts:[[1,"row"],[1,"col-md-4","grid-margin"],[1,"card"],[1,"card-body"],[1,"card-title"],[1,"col-8","col-sm-12","col-xl-8","my-auto"],[1,"d-flex","d-sm-block","d-md-flex","align-items-center"],[1,"mb-0","mr-2"],[1,"mb-0","font-weight-medium"],[1,"text-muted","font-weight-normal"],[1,"col-4","col-sm-12","col-xl-4","text-center","text-xl-right"],[1,"icon-lg","mdi","mdi-food","text-success","ml-auto"],[1,"icon-lg","mdi","mdi-heart-pulse","text-danger","ml-auto"],[1,"col-md-4"],[1,"icon-lg","mdi","mdi-weight-kilogram","text-primary","ml-auto"]],template:function(t,l){1&t&&(e.TgZ(0,"div",0),e.TgZ(1,"div",1),e.TgZ(2,"div",2),e.TgZ(3,"div",3),e.TgZ(4,"h4",4),e._uU(5,"Calorie Expended"),e.qZA(),e.TgZ(6,"div",0),e.TgZ(7,"div",5),e.TgZ(8,"div",6),e.TgZ(9,"h2",7),e._uU(10),e.qZA(),e.TgZ(11,"p",8),e._uU(12,"calories"),e.qZA(),e.qZA(),e.TgZ(13,"h6",9),e._uU(14),e.qZA(),e.qZA(),e.TgZ(15,"div",10),e._UZ(16,"i",11),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.TgZ(17,"div",1),e.TgZ(18,"div",2),e.TgZ(19,"div",3),e.TgZ(20,"h4",4),e._uU(21,"Heart Rate"),e.qZA(),e.TgZ(22,"div",0),e.TgZ(23,"div",5),e.TgZ(24,"div",6),e.TgZ(25,"h2",7),e._uU(26),e.qZA(),e.TgZ(27,"p",8),e._uU(28,"bpm"),e.qZA(),e.qZA(),e.TgZ(29,"h6",9),e._uU(30),e.qZA(),e.qZA(),e.TgZ(31,"div",10),e._UZ(32,"i",12),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.TgZ(33,"div",13),e.TgZ(34,"div",2),e.TgZ(35,"div",3),e.TgZ(36,"h4",4),e._uU(37,"Weight"),e.qZA(),e.TgZ(38,"div",0),e.TgZ(39,"div",5),e.TgZ(40,"div",6),e.TgZ(41,"h2",7),e._uU(42),e.qZA(),e.TgZ(43,"p",8),e._uU(44,"kg"),e.qZA(),e.qZA(),e.TgZ(45,"h6",9),e._uU(46),e.qZA(),e.qZA(),e.TgZ(47,"div",10),e._UZ(48,"i",14),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.qZA()),2&t&&(e.xp6(10),e.Oqu((null==l.calorieObj?null:l.calorieObj.calorieReadable)||0),e.xp6(4),e.Oqu((null==l.calorieObj?null:l.calorieObj.dateReadable)||"-"),e.xp6(12),e.Oqu((null==l.heartRateObj?null:l.heartRateObj.rate)||0),e.xp6(4),e.Oqu((null==l.heartRateObj?null:l.heartRateObj.dateReadable)||"-"),e.xp6(12),e.Oqu((null==l.weightObj?null:l.weightObj.weight)||0),e.xp6(4),e.Oqu((null==l.weightObj?null:l.weightObj.dateReadable)||"-"))},styles:[""]}),a})()},{path:"mood",component:(()=>{class a{constructor(){this.heartRateObj={dateReadable:null,rate:null,happy:null,neutral:null,sad:null,mood_text:null}}ngOnInit(){this.heartRateObj=JSON.parse(""+localStorage.getItem(n.r.HY)),this.setHeartRateObj(),this.timeInterval=setInterval(()=>{this.setHeartRateObj()},6e4)}ngOnDestroy(){clearInterval(this.timeInterval),localStorage.setItem(n.r.HY,JSON.stringify(this.heartRateObj))}setHeartRateObj(){fetch(`${n.Y}heart-rate/today`).then(t=>t.json()).then(t=>{t.dateReadable=i(t.datetime).format("DD MMMM YYYY, h:mmA"),this.heartRateObj=t})}}return a.\u0275fac=function(t){return new(t||a)},a.\u0275cmp=e.Xpm({type:a,selectors:[["app-health-mood"]],decls:34,vars:4,consts:[[1,"card","mb-5","bg-gradient-primary"],[1,"card-body"],[1,"card-title","text-md-center"],[1,"mb-0","mt-2","text-warning","text-md-center"],[1,"emoji__grid"],[1,"card"],[1,"d-flex","justify-content-between"],[1,"align-self-center","mb-0"],[1,"icon","icon-box-warning"],[1,"fas","fa-smile-beam","icon-item"],[1,"fas","fa-meh","icon-item"],[1,"fas","fa-sad-tear","icon-item"]],template:function(t,l){1&t&&(e.TgZ(0,"div",0),e.TgZ(1,"div",1),e.TgZ(2,"h4",2),e._uU(3,"Your mood is"),e.qZA(),e.TgZ(4,"h3",3),e._uU(5),e.qZA(),e.qZA(),e.qZA(),e.TgZ(6,"div",4),e.TgZ(7,"div",5),e.TgZ(8,"div",1),e.TgZ(9,"div",6),e.TgZ(10,"h3",7),e._uU(11),e.qZA(),e.TgZ(12,"div",8),e._UZ(13,"span",9),e.qZA(),e.qZA(),e.TgZ(14,"small"),e._uU(15,"Happy"),e.qZA(),e.qZA(),e.qZA(),e.TgZ(16,"div",5),e.TgZ(17,"div",1),e.TgZ(18,"div",6),e.TgZ(19,"h3",7),e._uU(20),e.qZA(),e.TgZ(21,"div",8),e._UZ(22,"span",10),e.qZA(),e.qZA(),e.TgZ(23,"small"),e._uU(24,"Neutral"),e.qZA(),e.qZA(),e.qZA(),e.TgZ(25,"div",5),e.TgZ(26,"div",1),e.TgZ(27,"div",6),e.TgZ(28,"h3",7),e._uU(29),e.qZA(),e.TgZ(30,"div",8),e._UZ(31,"span",11),e.qZA(),e.qZA(),e.TgZ(32,"small"),e._uU(33,"Sad"),e.qZA(),e.qZA(),e.qZA(),e.qZA()),2&t&&(e.xp6(5),e.hij(" ",(null==l.heartRateObj?null:l.heartRateObj.mood_text)||"Undiscovered, you should check your health.. ",""),e.xp6(6),e.hij("",null==l.heartRateObj?null:l.heartRateObj.happy," %"),e.xp6(9),e.hij("",null==l.heartRateObj?null:l.heartRateObj.neutral," %"),e.xp6(9),e.hij("",null==l.heartRateObj?null:l.heartRateObj.sad," %"))},styles:[""]}),a})()},{path:"step",component:(()=>{class a{constructor(){this.stepObj={dateReadable:null,stepReadable:null},this.stepStatus={status:"Idle",icon:"fa-child"}}ngOnInit(){this.stepObj=JSON.parse(""+localStorage.getItem(n.r.Lq)),this.stepStatus=JSON.parse(""+localStorage.getItem(n.r.g5)),this.setStepObj(),this.setStepStatus(),this.timeInterval=setInterval(()=>{this.setStepObj(),this.setStepStatus()},6e4)}ngOnDestroy(){clearInterval(this.timeInterval),localStorage.setItem(n.r.Lq,JSON.stringify(this.stepObj)),localStorage.setItem(n.r.g5,JSON.stringify(this.stepStatus))}setStepObj(){fetch(`${n.Y}step/today`).then(t=>t.json()).then(t=>{t.dateReadable=i(t.datetime).format("DD MMMM YYYY, h:mmA"),t.stepReadable=(new Intl.NumberFormat).format(t.step||0),this.stepObj=t})}setStepStatus(){fetch(`${n.Y}step?sort=DESC&number_item=2`).then(t=>t.json()).then(t=>{let l=t.steps[0].step-t.steps[1].step;this.stepStatus=l<=0?{status:"Idle",icon:"fa-child"}:l>0&&l<=500?{status:"Walking",icon:"fa-walking"}:l>500&&l<=1e3?{status:"Running",icon:"fa-running"}:{status:"Biking",icon:"fa-biking"}})}}return a.\u0275fac=function(t){return new(t||a)},a.\u0275cmp=e.Xpm({type:a,selectors:[["app-health-step"]],decls:15,vars:4,consts:[[1,"row"],[1,"col-12"],[1,"card"],[1,"card-body"],[1,"text-center","text-primary","mb-0",2,"font-size","7rem"],[1,"fas",3,"ngClass"],[1,"text-center","text-muted","mb-4"],[1,"d-flex","justify-content-center","align-items-center"],[1,"mb-0","mr-2"],[1,"mb-0","font-weight-medium"],[1,"text-center","text-muted","mb-0"]],template:function(t,l){1&t&&(e.TgZ(0,"div",0),e.TgZ(1,"div",1),e.TgZ(2,"div",2),e.TgZ(3,"div",3),e.TgZ(4,"h1",4),e._UZ(5,"i",5),e.qZA(),e.TgZ(6,"p",6),e._uU(7),e.qZA(),e.TgZ(8,"div",7),e.TgZ(9,"h2",8),e._uU(10),e.qZA(),e.TgZ(11,"p",9),e._uU(12,"step"),e.qZA(),e.qZA(),e.TgZ(13,"p",10),e._uU(14),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.qZA()),2&t&&(e.xp6(5),e.Q6J("ngClass",null==l.stepStatus?null:l.stepStatus.icon),e.xp6(2),e.hij("- ",null==l.stepStatus?null:l.stepStatus.status," -"),e.xp6(3),e.Oqu((null==l.stepObj?null:l.stepObj.stepReadable)||0),e.xp6(4),e.Oqu((null==l.stepObj?null:l.stepObj.dateReadable)||"-"))},directives:[u.mk],styles:[""]}),a})()},{path:"sleep",component:(()=>{class a{constructor(){this.sleepObj={dateStartReadable:null,dateEndReadable:null,monthYear:null,duration:0}}ngOnInit(){this.sleepObj=JSON.parse(""+localStorage.getItem(n.r.AV)),this.setSleepObj(),this.timeInterval=setInterval(()=>{this.setSleepObj()},6e4)}ngOnDestroy(){clearInterval(this.timeInterval),localStorage.setItem(n.r.AV,JSON.stringify(this.sleepObj))}setSleepObj(){fetch(`${n.Y}sleep/today`).then(t=>t.json()).then(t=>{"failed"!=t.status&&(t.dateStartReadable=i(t.start_datetime).format("DD, h:mmA"),t.dateEndReadable=i(t.end_datetime).format("DD, h:mmA"),t.monthYear=i(t.end_datetime).format("MMMM YYYY"),t.duration=i(t.end_datetime).diff(i(t.start_datetime),"hours"),this.sleepObj=t)})}}return a.\u0275fac=function(t){return new(t||a)},a.\u0275cmp=e.Xpm({type:a,selectors:[["app-health-sleep"]],decls:15,vars:4,consts:[[1,"row"],[1,"col-12"],[1,"card"],[1,"card-body"],[1,"text-center","text-info","mb-0",2,"font-size","7rem"],[1,"fas","fa-bed"],[1,"text-center","text-muted","mb-4"],[1,"d-flex","justify-content-center","align-items-center"],[1,"mb-0","mr-2"],[1,"mb-0","font-weight-medium"],[1,"text-center","text-muted","mb-0"]],template:function(t,l){1&t&&(e.TgZ(0,"div",0),e.TgZ(1,"div",1),e.TgZ(2,"div",2),e.TgZ(3,"div",3),e.TgZ(4,"h1",4),e._UZ(5,"i",5),e.qZA(),e.TgZ(6,"p",6),e._uU(7,"- Sleep -"),e.qZA(),e.TgZ(8,"div",7),e.TgZ(9,"h2",8),e._uU(10),e.qZA(),e.TgZ(11,"p",9),e._uU(12,"hours"),e.qZA(),e.qZA(),e.TgZ(13,"p",10),e._uU(14),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.qZA()),2&t&&(e.xp6(10),e.Oqu((null==l.sleepObj?null:l.sleepObj.duration)||0),e.xp6(4),e.lnq("",null==l.sleepObj?null:l.sleepObj.dateStartReadable," - ",null==l.sleepObj?null:l.sleepObj.dateEndReadable," (",null==l.sleepObj?null:l.sleepObj.monthYear,")"))},styles:[""]}),a})()},{path:"",redirectTo:"status",pathMatch:"full"}]}];let m=(()=>{class a{}return a.\u0275fac=function(t){return new(t||a)},a.\u0275mod=e.oAB({type:a}),a.\u0275inj=e.cJS({imports:[[r.Bz.forChild(p)],r.Bz]}),a})(),g=(()=>{class a{}return a.\u0275fac=function(t){return new(t||a)},a.\u0275mod=e.oAB({type:a}),a.\u0275inj=e.cJS({imports:[[u.ez,m]]}),a})()}}]);