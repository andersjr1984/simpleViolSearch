(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{187:function(e,t,a){e.exports=a(425)},192:function(e,t,a){},195:function(e,t,a){},221:function(e,t){},223:function(e,t){},254:function(e,t){},255:function(e,t){},303:function(e,t){},305:function(e,t){},328:function(e,t){},425:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(182),i=a.n(l),c=(a(192),a(22)),o=a.n(c),u=a(37),s=a(183),d=a(68),E=a(69),m=a(71),f=a(70),p=a(72),C=a(427),O=a(428),I=a(429),S=(a(195),a(426)),N=a(102),D=["JAN","FEB","MAR","APR","MAY","JUN","JUL","AUG","SEP","OCT","NOV","DEC"],v=function(e){var t=new Date;return r.a.createElement(O.a,{onSubmit:function(t){return e.retrieveInfo(t)},style:{width:"90%"}},r.a.createElement(O.a.Row,null,r.a.createElement(O.a.Label,null,"Enter Comma Separated List of Facilities:")),r.a.createElement(O.a.Row,null,r.a.createElement(O.a.Control,{name:"facList",type:"text",value:e.facList,onChange:function(t){return e.handleUserInput(t)},style:{width:"100%"}})),r.a.createElement(O.a.Row,null,r.a.createElement(O.a.Label,null,"How far back would you like to search?")),r.a.createElement(O.a.Row,null,r.a.createElement(O.a.Control,{name:"month",as:"select",value:e.month,onChange:function(t){return e.handleUserInput(t)},style:{width:"25%"}},D.map(function(e,t){return r.a.createElement("option",{key:t},e)})),r.a.createElement(O.a.Control,{name:"year",as:"select",value:e.year,onChange:function(t){return e.handleUserInput(t)},style:{width:"25%"}},r.a.createElement("option",null,t.getFullYear()),r.a.createElement("option",null,t.getFullYear()-1),r.a.createElement("option",null,t.getFullYear()-2),r.a.createElement("option",null,t.getFullYear()-3),r.a.createElement("option",null,t.getFullYear()-4))),r.a.createElement(S.a,{style:{justifyContent:"center"}},e.submitted?r.a.createElement(I.a,{type:"submit",size:"sm",disabled:!0},"Waiting"):r.a.createElement(I.a,{type:"submit",size:"sm"},"Submit")))},A=function(e,t){var a=e.replace(/\s/g,"").split(",");return Promise.all(a.map(function(e){return F(e,t,1)}))},F=function(){var e=Object(u.a)(o.a.mark(function e(t,a,n){var r,l,i,c;return o.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return r=4,e.prev=1,l="https://iaspub.epa.gov/enviro/efservice/WATER_SYSTEM/PWSID/=/".concat(t,"/VIOLATION/COMPL_PER_BEGIN_DATE/>/").concat(a,"/JSON"),e.next=5,N({uri:l});case 5:if(i=e.sent,0!==(c=JSON.parse(i)).length){e.next=11;break}return e.abrupt("return",[{PWSID:t,failed:!0}]);case 11:return e.abrupt("return",c);case 12:e.next=22;break;case 14:if(e.prev=14,e.t0=e.catch(1),!(n<r)){e.next=20;break}return e.abrupt("return",F(t,a,n+1));case 20:return console.log("Attempt on ".concat(t,"'s data ended in failure.")),e.abrupt("return",[{PWSID:t,failed:!0}]);case 22:case"end":return e.stop()}},e,null,[[1,14]])}));return function(t,a,n){return e.apply(this,arguments)}}(),T=a(8),h=a(102),y=function(e){function t(e){var a;return Object(d.a)(this,t),(a=Object(m.a)(this,Object(f.a)(t).call(this,e))).handleClick=Object(u.a)(o.a.mark(function e(){var t,n;return o.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(a.state.checking){e.next=6;break}return e.next=3,g(a.props.pwsId,a.props.enfId);case 3:t=e.sent,n=t[0],a.setState({epaData:n});case 6:case"end":return e.stop()}},e)})),a.state={checking:!1},a}return Object(p.a)(t,e),Object(E.a)(t,[{key:"render",value:function(){var e=this;if(this.state.epaData){var t=this.state.epaData;return r.a.createElement("tr",null,r.a.createElement("td",{style:{backgroundColor:"Blue"}}),r.a.createElement("td",{colSpan:"1"},"Originator: ","S"===t.ORIGINATOR_CODE?"State":"EPA Region"),r.a.createElement("td",{colSpan:"1"},"Date: ",t.ENFORCEMENT_DATE),r.a.createElement("td",{colSpan:"2"},"Action: ",b[t.ENFORCEMENT_ACTION_TYPE_CODE]),r.a.createElement("td",{colSpan:"6"},"Comment: ",t.ENFORCEMENT_COMMENT_TEXT),r.a.createElement("td",{style:{backgroundColor:"Blue"}}))}return r.a.createElement("tr",{onClick:function(t){return e.handleClick()}},r.a.createElement("td",{style:{backgroundColor:"Blue"}}),r.a.createElement("td",{colSpan:"10",className:"enf"},"Click to view Enforcement Details"),r.a.createElement("td",{style:{backgroundColor:"Blue"}}))}}]),t}(r.a.Component),b={"SF%":"Civil Case concluded","SF&":"Crim Case referred to AG",SF2:"Referred for Higher St Level Review ",SF3:"Case appealed ",SF4:"Case dropped ",SF5:"Hook-up/Extension Ban ",SF9:"Civil Case referred to AG",SFG:"Public Notif issued",SFH:"Boil Water Order",SFJ:"Formal NOV issued",SFK:"BCA signed ",SFL:"AO (w/o penalty) issued ",SFM:"Admin Penalty assessed",SFN:"Show-cause Hearing ",SFO:"AO (w/penalty) issued",SFP:"Civil Case under development ",SFQ:"Civil Case filed",SFR:"Consent Decree/Judgement ",SFS:"Default Judgement ",SFT:"Injunction",SFU:"Temp Restrain Order/Prelim Injunc ",SFV:"Crim Case filed",SFW:"Crim Case concluded",SIA:"Violation/ Reminder Notice",SIB:"Compliance Meeting conducted",SIC:"Tech Assistance Visit",SID:"Site Visit (enforcement)",SIE:"Public Notif requested",SIF:"Public Notif received",SII:"CCR Follow-up Notice","SO+":"No addtl Formal Action needed",SO0:"No Longer Subject to Rule",SO6:"Intentional no-action ",SO7:"Unresolved",SO8:"Other",SOX:"Compliance achieved ",SOY:"Variance/ Exemption issued",SOZ:"St Turbidity Waiver issued ","EF-":"CFP Consent Order/Decree w/penalty ","EF!":"PAO issued ","EF%":"Fed Civil Case concluded ","EF&":"Fed Crim Case referred to DOJ ","EF/":"Fed 1431 (Emergency) Order ","EF<":"Fed CFP issued","EF=":"Fed CFP Default Judgement ",EF2:"Referred for Higher Level Review",EF9:"Civil Case referred to DOJ",EFG:"Public Notif issued",EFH:"Boil Water Order",EFJ:"Formal NOV issued",EFK:"BCA signed ",EFL:"FAO issued ",EFN:"Show-cause Hearing ",EFQ:"Civil Case filed",EFR:"Consent Decree/ Judgement",EFS:"Default Judgement ",EFT:"Injunction",EFU:"Temp Restrain Order/Prelim Injunc ",EFV:"Crim Case filed",EFW:"Crim Case concluded",EIA:"Violation/ Reminder Notice",EIB:"Compliance Meeting conducted",EIC:"Tech Assistance Visit",EID:"Site Visit (enforcement)",EIE:"Public Notif requested",EIF:"Public Notif received",EII:"CCR Follow-up Notice","EO+":"No addtl Formal Action needed",EO0:"No Longer Subject to Rule",EO6:"Intentional no-action ",EO7:"Unresolved",EO8:"Other",EOX:"Compliance achieved ",EOY:"Variance/ Exemption issued",EOZ:"Turbidity Waiver issued",ESX:"Implicit SWTR RTC (Cannot be reported, EPA-generated)",ETX:"Implicit TCR RTC (Cannot be reported, EPA-generated)"},g=function(){var e=Object(u.a)(o.a.mark(function e(t,a,n){var r,l,i,c;return o.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return r=2,e.prev=1,l="https://iaspub.epa.gov/enviro/efservice/ENFORCEMENT_ACTION/ENFORCEMENT_ID/=/".concat(a,"/PWSID/=/").concat(t,"/JSON"),e.next=5,h({uri:l});case 5:return i=e.sent,c=JSON.parse(i),e.abrupt("return",c);case 10:if(e.prev=10,e.t0=e.catch(1),!(n<r)){e.next=16;break}return e.abrupt("return",setTimeout(g(t,a,n+1),2e3));case 16:return console.log("Attempt on ".concat(a,"'s data ended in failure.")),e.abrupt("return",[]);case 18:case"end":return e.stop()}},e,null,[[1,10]])}));return function(t,a,n){return e.apply(this,arguments)}}(),R=function(e){return r.a.createElement("tr",{className:"violationInfo"},r.a.createElement("td",null,e.facData.PWSID),r.a.createElement("td",null,e.facData.PWS_NAME),r.a.createElement("td",null,e.facData.ADDRESS_LINE1),r.a.createElement("td",null,e.facData.CITY_NAME),r.a.createElement("td",null,e.facData.STATE_CODE),r.a.createElement("td",null,e.facData.ZIP_CODE),r.a.createElement("td",null,"Yes"),r.a.createElement("td",null,"WQ. Water Quality Management"),r.a.createElement("td",null,e.facilityType()),r.a.createElement("td",null,"Violation No. ",e.violation.VIOLATION_ID,", ","Y"===e.violation.IS_MAJOR_VIOL_IND?"Major":"Minor",", ",e.violation.VIOLATION_CATEGORY_CODE),r.a.createElement("td",null,e.violation.PRIMACY_AGENCY_CODE),r.a.createElement("td",null,function(){var t=[21,22,23,24,25,26];return"0700"===e.violation.CONTAMINANT_CODE?"Ground Water Rule":"0200"===e.violation.CONTAMINANT_CODE||"0800"===e.violation.CONTAMINANT_CODE||"0700"!==e.violation.CONTAMINANT_CODE&&[33,37,41,42,43,44,45,47].includes(e.violation.VIOLATION_CODE)?"Surface Water Rule":[57,58,59,63,64,65,51,52,53,56,66].includes(e.violation.VIOLATION_CODE)?"Lead and Copper Rule":t.includes(e.violation.VIOLATION_CODE)?"Total Coliform Rule":t.includes(e.violation.VIOLATION_CODE)?"Total Coliform Rule":[11,12,13,46,27,30,35].includes(e.violation.VIOLATION_CODE)?"Disinfectant/ Disinfectant Byproduct Rule":"Unknown"}()))},_=function(e){return console.log(e.facilityInfo),Object(T.isNullOrUndefined)(e.facilityInfo)?null:e.facilityInfo.map(function(t,a){return void 0!==t?r.a.createElement(w,{key:a,facData:t[0],failedFacilities:e.failedFacilities}):null})},w=function(e){var t=function(){return"TNCWS"===e.facData.PWS_TYPE_CODE?"Transient Non-Community Water System":"NTNCWS"===e.facData.PWS_TYPE_CODE?"Non-Transient Non-Community Water System":"CWS"===e.facData.PWS_TYPE_CODE?"Community Water System":"Unknown"};if(!0===e.facData.failed)return r.a.createElement(P,{facData:e.facData});if(void 0===e.facData.VIOLATION||null===e.facData.VIOLATION)return r.a.createElement(k,{facData:e.facData,facilityType:t});if(e.facData.VIOLATION.length>0)return e.facData.VIOLATION.map(function(a,n){return r.a.createElement("tbody",{key:n},r.a.createElement(R,{facData:e.facData,violation:a,facilityType:t}),r.a.createElement(y,{enfId:a.LATEST_ENFORCEMENT_ID,pwsId:e.facData.PWSID}))});var a=e.facData.VIOLATION.VIOLATION_ROW;return r.a.createElement("tbody",{key:0},r.a.createElement(R,{facData:e.facData,violation:a,facilityType:t}),r.a.createElement(y,{enfId:a.LATEST_ENFORCEMENT_ID,pwsId:e.facData.PWSID}))},P=function(e){return r.a.createElement("tbody",null,r.a.createElement("tr",null,r.a.createElement("td",null,e.facData.PWSID),r.a.createElement("td",{colSpan:"11"},"Data retrieval failure.")),r.a.createElement("tr",null,r.a.createElement("td",{style:{backgroundColor:"Blue"}}),r.a.createElement("td",{colSpan:"10"},"Nothing to display"),r.a.createElement("td",{style:{backgroundColor:"Blue"}})))},k=function(e){return r.a.createElement("tbody",null,r.a.createElement("tr",null,r.a.createElement("td",null,e.facData.PWSID),r.a.createElement("td",null,e.facData.PWS_NAME),r.a.createElement("td",null,e.facData.ADDRESS_LINE1),r.a.createElement("td",null,e.facData.CITY_NAME),r.a.createElement("td",null,e.facData.STATE_CODE),r.a.createElement("td",null,e.facData.ZIP_CODE),r.a.createElement("td",null,"N"),r.a.createElement("td",null,"NA"),r.a.createElement("td",null,e.facilityType()),r.a.createElement("td",null,"NA"),r.a.createElement("td",null,"NA"),r.a.createElement("td",null,"NA")),r.a.createElement("tr",null,r.a.createElement("td",{style:{backgroundColor:"Blue"}}),r.a.createElement("td",{colSpan:"10"},"Nothing to display"),r.a.createElement("td",{style:{backgroundColor:"Blue"}})))},L=function(e){function t(e){var a;return Object(d.a)(this,t),(a=Object(m.a)(this,Object(f.a)(t).call(this,e))).handleUserInput=function(e){var t=e.target,n=t.name,r=t.value;a.setState(Object(s.a)({},n,r))},a.retrieveInfo=function(){var e=Object(u.a)(o.a.mark(function e(t){var n,r;return o.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return a.setState({submitted:!0}),t.preventDefault(),n="01-".concat(a.state.month,"-").concat(a.state.year),e.next=5,A(a.state.facList,n);case 5:r=e.sent,a.setState({facilityInfo:r,receivedInfo:!0,submitted:!1});case 7:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),a.state={submitted:!1,receivedInfo:!1,facList:"",month:"JAN",year:(new Date).getFullYear()},a}return Object(p.a)(t,e),Object(E.a)(t,[{key:"render",value:function(){return this.state.receivedInfo?r.a.createElement("div",{className:"App"},r.a.createElement("header",{className:"App-header"},r.a.createElement("h1",null,"Jason's EPA Database Aggregator."),r.a.createElement(V,null)),r.a.createElement("main",null,r.a.createElement(C.a,{bordered:!0,striped:!0,size:"sm"},r.a.createElement(W,null),r.a.createElement(_,{facilityInfo:this.state.facilityInfo,failedFacilities:this.failedFacilities})))):r.a.createElement("div",{className:"App"},r.a.createElement("header",{className:"App-header"},r.a.createElement("h1",null,"Jason's EPA Database Aggregator."),r.a.createElement("br",null),r.a.createElement(v,{retrieveInfo:this.retrieveInfo,submitted:this.state.submitted,handleUserInput:this.handleUserInput,facList:this.state.facList,beginDate:this.state.beginDate})))}}]),t}(r.a.Component),W=function(){return r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("td",null,"PWS ID"),r.a.createElement("td",null,"Facility Name"),r.a.createElement("td",null,"Street Address"),r.a.createElement("td",null,"City Address"),r.a.createElement("td",null,"State"),r.a.createElement("td",null,"Zip Code"),r.a.createElement("td",null,"Notice of Violation"),r.a.createElement("td",null,"Regulatory Sector"),r.a.createElement("td",null,"Regulatory Subsector"),r.a.createElement("td",null,"Type of Notice"),r.a.createElement("td",null,"Issuing Agency"),r.a.createElement("td",null,"Violation Type")))},V=function(){return r.a.createElement(O.a,{style:{textAlign:"center"}},r.a.createElement("h4",null,"View data below."),r.a.createElement("h4",null,"Reset to try again."),r.a.createElement(I.a,{type:"submit",size:"sm"},"Reset"))},M=L;Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(M,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[187,1,2]]]);
//# sourceMappingURL=main.4bd720ff.chunk.js.map