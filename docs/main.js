(()=>{"use strict";var e={159:(e,n,t)=>{t.d(n,{A:()=>w});var i=t(601),r=t.n(i),o=t(314),a=t.n(o),s=t(417),l=t.n(s),c=new URL(t(768),t.b),d=new URL(t(80),t.b),u=a()(r()),p=l()(c),h=l()(d);u.push([e.id,`*{box-sizing: border-box;}\nhtml,\nbody {\n    margin:0;\n    padding:0;\n}\n\nbody{\n    background: repeat url(${p});\n    display:grid;\n    grid-template-columns: auto 99vw auto;\n    grid-template-rows: 3vh auto auto 3vh;\n}\nheader,\n#content{\n    background: repeat url(${h});\n    padding: 0 2.5rem 0 2.5rem;\n    margin: .75rem;\n    border-radius: 1rem;\n    border-width: 1rem;\n}\nheader{\n    grid-column-start: 2;\n    grid-row-start: 2;\n}\n#content{\n    grid-column-start: 2;\n    grid-row-start: 3;\n    overflow-y: scroll;\n}\n\n.hidden{\n    display: none;\n}\n\n\nnav button {\n    font-size: 1.025rem;\n    background: repeat url(${h});\n    border-radius: .5rem;\n    margin-right: .25rem; \n    border-width: .125rem;\n    margin-bottom: .75rem;\n    text-transform: capitalize;\n    transition-property: all;\n    transition-duration: .2s;\n  } \n  nav button:hover {\n    letter-spacing: .05rem;\n    color:rgb(34, 88, 34);\n    border-color: rgb(34, 88, 34);\n  } \n\n  /* @media only screen and (max-width: 600px) {\n    .nav-container {\n     display: flex;\n     flex-direction: column;\n    };\n    nav button {\n        width: 100%;\n    }\n  } */\n\n ul{\n    padding-left: 0rem;\n    font-size: 1.05rem;\n    font-weight: 525;\n    list-style-position: inside;\n    list-style-type: none;\n    /* color:rgb(2, 2, 31) */\n  }\n\nli{\n    padding-left: 1rem;\n    font-size: 1.025rem;\n    font-weight: 400;\n    list-style-type: none;\n    line-height: 2rem;\n    list-style-type: none;\n}\n\n.category-overview{\n    font-size: 1.15rem;\n    color:rgb(88, 34, 34);\n}\n\n.description{\n    font-style: italic;\n}`,""]);const w=u},314:e=>{e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t="",i=void 0!==n[5];return n[4]&&(t+="@supports (".concat(n[4],") {")),n[2]&&(t+="@media ".concat(n[2]," {")),i&&(t+="@layer".concat(n[5].length>0?" ".concat(n[5]):""," {")),t+=e(n),i&&(t+="}"),n[2]&&(t+="}"),n[4]&&(t+="}"),t})).join("")},n.i=function(e,t,i,r,o){"string"==typeof e&&(e=[[null,e,void 0]]);var a={};if(i)for(var s=0;s<this.length;s++){var l=this[s][0];null!=l&&(a[l]=!0)}for(var c=0;c<e.length;c++){var d=[].concat(e[c]);i&&a[d[0]]||(void 0!==o&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=o),t&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=t):d[2]=t),r&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=r):d[4]="".concat(r)),n.push(d))}},n}},417:e=>{e.exports=function(e,n){return n||(n={}),e?(e=String(e.__esModule?e.default:e),/^['"].*['"]$/.test(e)&&(e=e.slice(1,-1)),n.hash&&(e+=n.hash),/["'() \t\n]|(%20)/.test(e)||n.needQuotes?'"'.concat(e.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):e):e}},601:e=>{e.exports=function(e){return e[1]}},72:e=>{var n=[];function t(e){for(var t=-1,i=0;i<n.length;i++)if(n[i].identifier===e){t=i;break}return t}function i(e,i){for(var o={},a=[],s=0;s<e.length;s++){var l=e[s],c=i.base?l[0]+i.base:l[0],d=o[c]||0,u="".concat(c," ").concat(d);o[c]=d+1;var p=t(u),h={css:l[1],media:l[2],sourceMap:l[3],supports:l[4],layer:l[5]};if(-1!==p)n[p].references++,n[p].updater(h);else{var w=r(h,i);i.byIndex=s,n.splice(s,0,{identifier:u,updater:w,references:1})}a.push(u)}return a}function r(e,n){var t=n.domAPI(n);return t.update(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap&&n.supports===e.supports&&n.layer===e.layer)return;t.update(e=n)}else t.remove()}}e.exports=function(e,r){var o=i(e=e||[],r=r||{});return function(e){e=e||[];for(var a=0;a<o.length;a++){var s=t(o[a]);n[s].references--}for(var l=i(e,r),c=0;c<o.length;c++){var d=t(o[c]);0===n[d].references&&(n[d].updater(),n.splice(d,1))}o=l}}},659:e=>{var n={};e.exports=function(e,t){var i=function(e){if(void 0===n[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}n[e]=t}return n[e]}(e);if(!i)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");i.appendChild(t)}},540:e=>{e.exports=function(e){var n=document.createElement("style");return e.setAttributes(n,e.attributes),e.insert(n,e.options),n}},56:(e,n,t)=>{e.exports=function(e){var n=t.nc;n&&e.setAttribute("nonce",n)}},825:e=>{e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var n=e.insertStyleElement(e);return{update:function(t){!function(e,n,t){var i="";t.supports&&(i+="@supports (".concat(t.supports,") {")),t.media&&(i+="@media ".concat(t.media," {"));var r=void 0!==t.layer;r&&(i+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),i+=t.css,r&&(i+="}"),t.media&&(i+="}"),t.supports&&(i+="}");var o=t.sourceMap;o&&"undefined"!=typeof btoa&&(i+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),n.styleTagTransform(i,e,n.options)}(n,e,t)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)}}}},113:e=>{e.exports=function(e,n){if(n.styleSheet)n.styleSheet.cssText=e;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(e))}}},768:(e,n,t)=>{e.exports=t.p+"2a3a8e52de5ececadd36.png"},80:(e,n,t)=>{e.exports=t.p+"85f5e97ed505a4ee5806.webp"}},n={};function t(i){var r=n[i];if(void 0!==r)return r.exports;var o=n[i]={id:i,exports:{}};return e[i](o,o.exports,t),o.exports}t.m=e,t.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return t.d(n,{a:n}),n},t.d=(e,n)=>{for(var i in n)t.o(n,i)&&!t.o(e,i)&&Object.defineProperty(e,i,{enumerable:!0,get:n[i]})},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),t.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),(()=>{var e;t.g.importScripts&&(e=t.g.location+"");var n=t.g.document;if(!e&&n&&(n.currentScript&&(e=n.currentScript.src),!e)){var i=n.getElementsByTagName("script");if(i.length)for(var r=i.length-1;r>-1&&(!e||!/^http(s?):/.test(e));)e=i[r--].src}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=e})(),t.b=document.baseURI||self.location.href,t.nc=void 0,(()=>{const e=document.querySelector("#content");function n(){e.textContent=""}class i{constructor(e,n="y"){this.arrayOfButtons=e,this.classList=n,this.add()}add(){let n=document.createElement("nav");for(let e=0;e<this.arrayOfButtons.length;e++){let t=document.createElement("button");t.textContent=this.arrayOfButtons[e].content,t.addEventListener("click",(()=>{this.arrayOfButtons[e].fx()})),n.appendChild(t)}e.appendChild(n)}}class r{constructor(e,n="x",t="h2"){this.content=e,this.hSize=t,this.classes=n,this.add()}add(){let n=document.createElement(this.hSize);n.textContent=this.content,n.classList.add(this.classes),e.appendChild(n)}}class o{constructor(e,n="z"){this.info=e,this.classname=n,this.add()}add(){let n=document.createElement("p");n.textContent=this.info,"z"!==this.classname&&n.classList.add(this.classname),e.appendChild(n)}}class a{constructor(e,n,t=""){this.heading=e,this.listArray=n,this.idname=t,this.add()}add(){let n=document.createElement("ul");n.textContent=this.heading,""!==this.idname&&n.setAttribute("id",this.idname);for(let e=0;e<this.listArray.length;e++){let t=document.createElement("li");t.textContent=this.listArray[e],n.appendChild(t)}e.appendChild(n)}}class s{constructor(e,n,t,i=""){this.heading=e,this.mainList=t,this.listArray=n,this.idname=i,this.add()}add(){let e=document.createElement("li"),n=document.createElement("ul");n.textContent=this.heading,""!==this.idname&&n.setAttribute("id",this.idname);for(let e=0;e<this.listArray.length;e++){let t=document.createElement("li");t.textContent=this.listArray[e],n.appendChild(t)}e.appendChild(n),document.getElementById(this.mainList).appendChild(e)}}const l=function(){new r("Overview","overview-heading"),new o("The purpose of our Grade Scale and Curriculum is to provide trickers with a roadmap especially in the beginning and intermediate stages of tricking."),new o("Trickers should use this guide to better understand Tricking's Main Quest.  This is by no means comprehensive.  The aim is for this guide to help organize lower divisions for battles, coach/facility accreditation, further curriculum advances, and just help trickers understand where they are and what things they could be working towards skill and combination-wise."),new o("For the Tricking instructors and Program Directors out there, feel free to utilize, modify and be OPEN about the purpose here.  Follow the intent of the law, rather than the letter of the law.  There are always exceptions, so it is on the coach and/or student to understand where an exception should be permissible or not :)"),new r("The Grades"),new o("B(1-3): Beginner Grades cover basic foundational elements to Tricking. From complete beginner to understanding FlippingProgressions and Beginner Tricks."),new o("A(1-4): Advanced Grades cover everything from entry level Flipping through SingleTwistingVariations."),new o("S(1-5): Special Grades cover a broad category but are essentially understood to be DoubleTwistingTricks+ and BattleReady through InternationalDemon.")},c=d;function d(){new r("B(1-3): Beginner Grades"),new o("Beginning Grades cover basic foundational elements to tricking. From complete beginner to understanding progressions to basic flips and tricks.","category-overview"),new i([{content:"Beginning 1",fx:u},{content:"Beginning 2",fx:p},{content:"Beginning 3",fx:h}])}function u(){n(),d(),new r("Beginner 1"),new o("Week 1 Tricks","category-overview"),new o("Welcome to Tricking!  Everything on this page can be picked up by anyone healthy enough to hop on one foot and do anything resembling a cartwheel!","description"),new a("Required Skills",["TornadoRound","TouchdownHook (Compasso)","Cartwheel","Scoot","ButterflyKick"]),new a("Required Connections",[],"b1-required"),new s("Repeating",["TouchdownHook Cartwheel","Cartwheel scoot","Tornado TouchdownHook"],"b1-required"),new s("Combination",["Tornado TouchdownHook Cartwheel Scoot ButterflyKick"],"b1-required")}function p(){n(),d(),new r("Beginner 2"),new o("Building off the basics"),new o("The transition from B1-B2 represents a beginner-level understanding that Tricks can be related to other Tricks and creativity to substitute one Trick for another.","description"),new a("Required Skills",["TornadoShuriken","PopTurbohook (mainstream Pop 360) OR Pop360Shuriken OR Pop360Round","PalmKick","MasterScoot(2 hand scoot ok)","Machine"],"b2-skills"),new s("Minimum 4 Basic RoundKick and HookKick Variants",["RoundKick","TouchDownRound (BlasterScoot)","HeadDownRound","RoundSweep","TouchDownHook","HeadDownHook","HookKick","HookSweep"],"b2-skills"),new a("Required Connections",[],"b2-required"),new s("Repeating",["TornadoRounds x 5 OR TornadoShurikens x 5","Machine x 5","Palmkick MasterScoot Machine x 3"],"b2-required"),new s("Combination",["Tornado(AnyShape) Tornado(AnyShape) (Any)HookKick Palmkick Masterscoot Machine SpinStep Cartwheel Pop360(AnyShape)"],"b2-required")}function h(){n(),d(),new r("Beginner 3"),new o("Preparation for Physical Tricking"),new o("The transition from B2-B3 represents the introduction of Tricking's PhysicalComponent.  From here on out it only gets more demanding!  If you are struggling here, it is recommended to try basic calisthenic strength training for a little while to improve relative upper and lower body strength.","description"),new a("Required Skills",["SwipeDrill","TornadoDleg","1HandCartwheel(FirstHand)","1HandCartwheel(SecondHand)"]),new a("Required Flipping Progressions",["DivingForwardsRollUpMat","DivingSidewaysRollUpMat","HallwayBackflipDrill","BtwistDrillUpMat"])}const w=g;function g(){new r("A(1-4): Advanced Grades"),new o("Advanced Grades cover everything from your first flips through single twisting variations.","category-overview"),new i([{content:"Advanced 1",fx:m},{content:"Advanced 2",fx:f},{content:"Advanced 3",fx:k},{content:"Advanced 4",fx:T}])}function m(){n(),g(),new r("Advanced 1"),new o("Flipping: Any surface with take-off and landing firmer than Trampoline; Floor: TornadoVariations","category-overview"),new o("The transition from Beginner to Advanced represents understanding the concept of ShapeVariation and overcoming one of the biggest physical/mental hurdles to tricking---going from NotFlipping to Flipping.  If you made it here, you're likely to go further.","description"),new a("Required Flipping Progression",[],"a1-required-skills"),new s("Minimum 1 of the following on tumbling track or faster",["Backflip","Frontflip","Sideflip"],"a1-required-skills"),new a("Required Skills on Floor",[],"a1-required-floor"),new s("Minimum 1 of the following",["Aerial","SlantGainer"],"a1-required-floor"),new a("Required Technical Sequences",[],"a1-required-TS"),new s("From Base Tornado",["Round Round Swipe (Mainstream tornado tornado 540)"],"a1-required-TS"),new s("AND 1 of the following shuriken connections",["Shuriken Shuriken Doubleleg","Shuriken Shuriken Hyperhook"],"a1-required-TS")}function f(){n(),g(),new r("Advanced 2"),new o("Flipping:On Floor; SingleTwisting; 2TrickConnections","category-overview"),new o("The transition from A1-A2 represents a competence in Flipping and knocking on the door of SingleTwistingTricks.","description"),new a("Required Skills",[],"a2-required"),new s("Minimum 2 flips on floor;eg.",["Backflip","Frontflip","BackHandspring","FrontHandSpring"],"a2-required"),new s("Minimum 3 pre or low-level SingleTwistingTricks",["Raiz","ButterflyTurboHook (Mainstream Illusion Twist)","ButterflyTwist","CartwheelTwist","Pop360Doubleleg (Mainstream Doubleleg)","Sideflip","Arabian","Backside360Round","Vanish360Round"],"a2-required","a2-pre-twist-options"),new s("Example Substitutions",["Reversao","CartwheelScissor","Masterswipe"],"a2-pre-twist-options"),new a("Required Connections",[],"a2-connections"),new s("Minimum 2 2TrickConnections of a setup and a flip; eg.",["Gumbi Backflip","Cartwheel Frontflip","FrontflipStepout Cartwheel","Aerial Masterscoot","MasterScoot Gainer"],"a2-connections")}function k(){n(),g(),new r("Advanced 3"),new o("Power: Singletwisting; 2TrickConnections: FlippingOrTwistingTricks","category-overview"),new o("The transition from A2-A3 represents the intermediate understanding of both Flipping and SingleTwistingTricks.  At this point the Tricker should be capable of confidently utilizing their skills for Battles or Shows.","description"),new a("Required Skills",[],"a3-required-skills"),new s("Minimum 3 mid-level SingleTwistingTricks",["Tornado360Round (Mainstream Cheat 900)","Scoot360Shuriken","CartwheelFullTwist","RoundOffBackFullTwist","ScootFullTwist","AerialTwist","Corkscrew"],"a3-required-skills"),new s("Example substitutions",["Sideswipe","Windex","Helicoptero","Flikflak"],"a3-required-skills"),new a("Required Connections",[],"a3RequiredConnections"),new s("Any 2TrickConnection of FlippingOrTwistingTricks; eg.",["Backflip Backflip","Raiz Gainer","Aerial Btwist","Aerial pop360Round"],"a3RequiredConnections","a3connections")}function T(){n(),g(),new r("Advanced 4"),new o("SingleTwistingVariations; 0-1 Power Check; Battle/Performance Tested","category-overview"),new o("The transition from A3-A4 represents an advanced understaning of SingleTwistingTricks, as well as an intermediate understaning of ShapeVariation, LandingStanceModification, and TrickConnections.","description"),new a("Required Skills",[],"a4-skills"),new s("Any 3 SingleTwistingVariants utilizing minimum 2 bases and minimum 2 variants; eg",[],"a4-skills","a4-variants"),new s("Example Single Twisting Bases",["ButterflyTwist","Corkscrew","Tornado360 (Cheat 900 rotation)","CartwheelFullTwist"],"a4-variants"),new s("Example Variants",["ShapeVariations like Round, Hook, Doubleleg","LandingStanceModifications like Hyper (if base trick does not default to hyper)"],"a4-variants"),new a("Required Connections",[],"a4-connections"),new s("Any 2TrickConnection of FlippingORTwistingTricks with rotation equal to or higher than 360",[],"a4-connections","a4-connection-example"),new s("Examples",["Raiz swingThrough GainerArabian","GainerSwtich swingThrough Cork","AerialUltra swingThrough Raiz","ButterflyTwist vanish 360Round"],"a4-connection-example"),new a("Required Battle Experience",[],"a4-battle"),new s("Minimum participation in 1 of the following",["Battle","Show","Performance","Or other equivalent Live Event"],"a4-battle")}const v=b;function b(){new r("S(1-5): Special Grades"),new o("Special Grades cover a broad category but are essentially understood to be DoubleTwistingTricks+ and BattleReady.","category-overview"),new i([{content:"Special 1",fx:y},{content:"Special 2",fx:S},{content:"Special 3",fx:x},{content:"Special 4",fx:C},{content:"Special 5",fx:B}])}function y(){n(),b(),new r("S1"),new o("Power:Dubs; Skill: 2xVariatedSingles; Connections: 1-1; Battle: Battle off Home Turf","category-overview"),new o("Congratulations friend!  The transition from Advanced to Special Grade represents the major breakthrough in Understanding and Power required to make techincal skills happen. Just in time, too!  You will surely need those to continue progress.","description"),new a("Required Power",["Any recognizable DoubleTwistingTrick"],"s1-power"),new s("Example Substitutions",["540DiveRoll","Snapu","DoublelegTwist"],"s1-power"),new a("Required Skill",[],"s1-skill"),new s("Minimum 3 of the following",["Any 2xVariatedSingleTwistingTrick","Any 3xVariatedTrick","PowerCombo with 2 PowerTricks (2 1xVariatedSingleTwistingTrick)","MarathonCombo with 8 Total Tricks (repeats ok, maximum 3 HandedTricks, maximum 1 HookKick)"],"s1-skill","s1-skill-minimum"),new s("All 4 Landing for one BaseTrick",["Complete, Hyper, Mega, Ultra (Mainstream Semi)","Example Bases: Aerial, Gainer, ButterflyTwist, etc"],"s1-skill-minimum"),new a("Required Connection",[],"s1-connection"),new s("Any FlippingOrTwistingTrick to Any FlippingOrTwistingTrick",["Total rotation must be greater than or equal to 540"],"s1-connection"),new s("eg.",["CartwheelFullTwist swingThrough Cork","CarthweelDoubleFullTwist pop Flashkick","GainerSwitch swingThrough Boxcutter","Envergado punch 360Hyperhook(Mainstream pop 1080)"],"s1-connection"),new a("Required Battle Experience",[],"s1-battle-experience"),new s("Minimum 2 of the following",["Successfully completed 3 passes in 1 Battle","Participated in a Bracketed Battle Tournament","Participated in Battle outside of home gym or community","Paid performance","Other live event with equal weight"],"s1-battle-experience")}function S(){n(),b(),new r("S2"),new o("Power:Variated Dubs; Skill:Landing Stances; Battle: Defeat S1","category-overview"),new o("The transition from S1-S2 represents an intermediate understanding of DoubleTwistingTricks, a wide arsenal, and most importantly a strong desire to improve.","description"),new a("Required Power",[],"s2-power"),new s("Minimum 3 of the following",["3 DoubleTwistingTricks","1xVariatedDoubleTwistingTrick","2TrickConnection with minimum DoubleTwistingTrick","PowerCombo with 2 Power tricks(2 DoubleTwistingTricks or DoubletwistingTrick + 2xVariatedSingleTwistingTrick)","4 Seasons Combo: 4TrickConnection utilizing a takeoff from each of the 4 landing stances"],"s2-power"),new a("Required Skill",[],"s2-skill"),new s("Minimum 2 of the following",["3xVariatedSingleTwistingTrick"],"s2-skill","s2-skill-example"),new s("Minimum 2 5TrickConnections",["No repeats across all 10 moves","Maximum 2 HandedTricks per 5TrickConnection"],"s2-skill-example"),new s("4SeasonsLite",["Combo utilizing the four landing stances(Complete, Hyper, Mega, Ultra)"],"s2-skill-example"),new s("3TrickConnnection with minimum 720 rotation",["Any 1-0-1 anagram","Any 0-0-2 anagram","AerialUltra swingThrough Raiz swingThrough Cork"],"s2-skill-example"),new a("Required Battle Experience",[],"s2-battle-experience"),new s("Minimum 1 of the following",["Win a battle-experience against S1 or higher","Successfully complete an S2 power or skill requirement in a Battle","Other live event of equal weight"],"s2-battle-experience")}function x(){n(),b(),new r("S3"),new o("Power: Trip/DubDub; Battle: Defeat S2","category-overview"),new o("Behold! You have completed the Main Quests of Tricking!  The transition from S2-S3 represents the ability to manifest reality.  Essentially this is a mere skill check for those serious about Battling or pushing the limits of Tricking.  You can really branch out in any direction from here and be successful.  You already know how!","description"),new a("Required Power/Skill",[],"s3-power"),new s("Minimum 1 of the following",["TripleTwistingTrick","DoubleFlippingTrick","DubDub: 2TrickConnection of 2 DoubleTwistingTricks","Quick10: 10TrickConnection of 10 consecutive TwistingOrFlippingTricks","Or Equivalent PowerTrick or PowerCombo"],"s3-power"),new a("Required Battle Experience",[],"s3-battle-experience"),new s("Minimum 1 of the following",["Win a Battle against an s2 or higher","Successfully complete an S3 Power or Skill requirement in a Battle"],"s3-battle-experience")}function C(){n(),b(),new r("S4"),new o("BattleRank: RegionalMenace","category-overview"),new o("The transition from S3-S4 is reliant on your ability to hone in on your strengths and mitigate your weaknesses. Prepare your mental game as much as your Physical/Technical.  You are a force to be reckoned with and the community can no longer ignore you.","description"),new a("Required Battle Experience",[],"s4-battle"),new s("Minimum 2 of the following",["Top 8 in Any Tournament with Preliminary Rounds","Top 3 in Bracketed Tournament(2 wins required)","Defeat S3 or higher","OR equivalent experience"],"s4-battle")}function B(){n(),b(),new r("S5"),new o("BattleRank: InternationalDemon","category-overview"),new o("King/Queen, I believe you've dropped this, 👑   The next step taken by you is a step taken for Tricking itself.  Make us proud!","description"),new a("Required Battle Experience",[],"s5-battle"),new s("Minimum 1 of the following",[],"s5-battle","s5-battle-experience"),new s("Top 3 in Major Bracketed Tournament; such as",["Loopkicks, Vertigo, BoF, TBQ, etc"],"s5-battle-experience"),new s("Represented Country in Team Battle",["OR equivalent Experience"],"s5-battle-experience")}var A=t(72),R=t.n(A),q=t(825),M=t.n(q),E=t(659),P=t.n(E),F=t(56),D=t.n(F),H=t(540),G=t.n(H),O=t(113),L=t.n(O),z=t(159),V={};V.styleTagTransform=L(),V.setAttributes=D(),V.insert=P().bind(null,"head"),V.domAPI=M(),V.insertStyleElement=G(),R()(z.A,V),z.A&&z.A.locals&&z.A.locals,function(){const e=document.querySelector("header"),t=document.createElement("div");t.classList.add("nav-container"),document.createElement("div").classList.add("nav-heading-container");const i=document.createElement("h1");i.classList.add("nav-heading"),i.textContent="Axis 45 Curriculum & Grade Scale ⬅️",i.addEventListener("click",(()=>{switch(i.textContent){case"Axis 45 Curriculum & Grade Scale ⬅️":i.textContent="Axis 45 Curriculum & Grade Scale ⬇️",i.style.fontSize="medium",r.classList.add("hidden");break;case"Axis 45 Curriculum & Grade Scale ⬇️":i.textContent="Axis 45 Curriculum & Grade Scale ⬅️",i.style.fontSize="2rem",r.classList.remove("hidden");break;default:console.log("error navHeading")}}));const r=document.createElement("nav");class o{constructor(e,n,t){this.content=e,this.id=n,this.fx=t,this.add()}add(){let e=document.createElement("button");e.textContent=this.content,e.id=this.id,e.addEventListener("click",(()=>{n(),this.fx()})),r.appendChild(e)}}t.appendChild(i),new o("Overview","overview-button",l),new o("Beginner Grades (1-3)","beginner-grades-button",c),new o("Advanced Grades (1-4)","advanced-grades-button",w),new o("Special Grades (1-5)","special-grades-button",v),t.appendChild(r),e.appendChild(t)}(),l()})()})();