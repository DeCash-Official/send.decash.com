(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[72],{50:function(t,e,r){t.exports=r(3992)},3992:function(t){t.exports=class{constructor(t,e){this.channelName=t,this.onMessage=e,this._installListener(),this._requests=new Map,this._nextId=0,this._defaultTimeout=4e3}_installListener(){const t=this;this._listener=function(e){if(!e.data||"string"!==typeof e.data)return;let r;try{if(r=JSON.parse(e.data),!r.channel||r.channel!==t.channelName)return;if("object"!==typeof r.message)return}catch(n){return}if("undefined"!==typeof r.replyId){if("number"!==typeof r.replyId||r.replyId%1!==0)return;const e=t._requests.get(r.replyId);e&&(clearTimeout(e.timeout),t._requests.delete(r.replyId),e.resolve(r.message))}else{if("number"!==typeof r.id||r.id%1!==0||!t.onMessage)return;const n=t.channelName,o=r.id,s=e.origin,i=function(t){const r={channel:n,replyId:o,message:t};e.source.postMessage(JSON.stringify(r),s)};t.onMessage(r.message,e.origin,e.source,i,t)}},window.addEventListener("message",this._listener)}sendMessage(t,e,r,n){const o={channel:this.channelName,id:this.getNextId(),message:e};if(n&&n.waitForReply){const e=this;return new Promise((function(s,i){const a=setTimeout((function(){e._requests.get(o.id)&&(e._requests.delete(o.id),i(new Error("Timeout expired for the message response")))}),n&&n.timeout?n.timeout:e._defaultTimeout);e._requests.set(o.id,{timeout:a,resolve:s}),t.postMessage(JSON.stringify(o),r)}))}t.postMessage(JSON.stringify(o),r)}close(){window.removeEventListener("message",this._listener),this._listener=null,delete this._requests}getNextId(){return this._nextId+=1,this._nextId}}},1072:function(t,e,r){t.exports=r(7151)},7151:function(t,e,r){var n=r(8764).Buffer;const{openPopup:o}=r(4259),{sleep:s,prepareTxn:i}=r(2780),a=r(4587),u=r(6035);let c=null;t.exports=class{constructor(t){c||(c=new u),this.bridge=c,this.timeout=t&&t.timeout?t.timeout:16e5,this.url=t&&t.bridgeUrl?t.bridgeUrl:"https://wallet.myalgo.com/bridge",this.url.endsWith("/")&&(this.url=this.url.slice(0,-1)),this.currentConnectPopup=null,this.currentSigntxPopup=null,this.currentSignLogicSigPopup=null,this.options={waitForReply:!0,timeout:this.timeout},this.disableLedgerNano=!(!t||!t.disableLedgerNano)&&t.disableLedgerNano}async connect(t={shouldSelectOneAccount:!1,openManager:!1}){this.currentConnectPopup&&(this.currentConnectPopup.closed?this.currentConnectPopup=null:this.focusWindow(this.currentConnectPopup));try{this.currentConnectPopup=o(this.url+"/connect.html"),await this.waitForWindowToLoad(this.currentConnectPopup);const e=await this.bridge.sendMessage(this.currentConnectPopup,{method:"unlock",params:Object.assign(t,{disableLedgerNano:this.disableLedgerNano})},this.url,this.options);if(this.closeWindow(this.currentConnectPopup),this.currentConnectPopup=null,"error"===e.status)throw new Error(e.message);return e.data.accounts}catch(e){throw this.closeWindow(this.currentConnectPopup),this.currentConnectPopup=null,e}}async signTransaction(t,e){let r;this.currentSigntxPopup&&(this.currentSigntxPopup.closed?this.currentSigntxPopup=null:this.focusWindow(this.currentSigntxPopup)),r=Array.isArray(t)?Array.from(t).map((t=>i(t))):i(t);try{this.currentSigntxPopup=o(this.url+"/signtx.html"),await this.waitForWindowToLoad(this.currentSigntxPopup);const t=await this.bridge.sendMessage(this.currentSigntxPopup,{method:"transaction",params:{txn:r,settings:{disableLedgerNano:this.disableLedgerNano},options:e}},this.url,this.options);if(this.closeWindow(this.currentSigntxPopup),this.currentSigntxPopup=null,"error"===t.status)throw new Error(t.message);if(Array.isArray(t.data)){const e=[];for(const r of t.data)r.blob=new Uint8Array(n.from(r.blob,"hex")),e.push(r);return e}return t.data.blob=new Uint8Array(n.from(t.data.blob,"hex")),t.data}catch(s){throw this.closeWindow(this.currentSigntxPopup),this.currentSigntxPopup=null,s}}async signLogicSig(t,e){this.currentSignLogicSigPopup&&(this.currentSignLogicSigPopup.closed?this.currentSignLogicSigPopup=null:this.focusWindow(this.currentSignLogicSigPopup));try{this.currentSignLogicSigPopup=o(this.url+"/logicsigtx.html"),await this.waitForWindowToLoad(this.currentSignLogicSigPopup);let r=t;t.constructor===Uint8Array&&(r=n.from(t).toString("base64"));const s=await this.bridge.sendMessage(this.currentSignLogicSigPopup,{method:"logicsig",params:{logic:r,address:e}},this.url,this.options);if(this.closeWindow(this.currentSignLogicSigPopup),this.currentSignLogicSigPopup=null,"error"===s.status)throw new Error(s.message);return new Uint8Array(n.from(s.data.signedTeal,"base64"))}catch(r){throw this.closeWindow(this.currentSignLogicSigPopup),this.currentSignLogicSigPopup=null,r}}async waitForWindowToLoad(t,e=30){for(let n=0;n<e&&(await s(300),t);n++)try{if("success"==(await c.sendMessage(t,{method:"status"},this.url)).status)return}catch(r){}throw new Error(a.WINDOW_NOT_LOADED)}closeWindow(t){t&&!t.closed&&t.close&&t.close()}focusWindow(t){throw t&&t.focus?(t.focus(),new Error(a.WINDOW_IS_OPENED)):new Error(a.INVALID_WINDOW)}}},6035:function(t,e,r){const n=r(50);t.exports=class{constructor(t){const e=this;this.options={waitForReply:!0,timeout:250},this.listenerCallback=t,this.bridge=new n("wallet-bridge-communication-channel",(function(t,r,n,o){e.listenerCallback&&e.listenerCallback(t,n)}))}sendMessage(t,e,r,n){return this.bridge.sendMessage(t,e,r,n||this.options)}setNewListener(t){this.listenerCallback=t}close(){this.bridge.close()}}},4259:function(t,e,r){const{WINDOW_NOT_OPENED:n}=r(4587),o={width:400,height:600};t.exports={openPopup:function(t,e=o){let{name:r="",width:s,height:i,top:a=0,left:u=0}=e;s&&(window.outerWidth?u=Math.round((window.outerWidth-s)/2)+window.screenX:window.screen.width&&(u=Math.round((window.screen.width-s)/2))),i&&(window.outerHeight?a=Math.round((window.outerHeight-i)/2)+window.screenY:window.screen.height&&(a=Math.round((window.screen.height-i)/2))),s&&i&&(e={top:a,left:u,width:s,height:i,status:1,toolbar:0,menubar:0,resizable:1,scrollbars:1});const c=Object.keys(e).map((t=>{const r=e[t];if(null!==r&&void 0!==r&&"function"===typeof r.toString)return`${t}=${r.toString()}`})).filter(Boolean).join(",");let p;try{p=window.open(t,r,c)}catch(l){throw new Error(`${n} - ${l.stack||l.message}`)}if(!p||window.closed)throw new Error(`${n} - blocked`);return p}}},4587:function(t){t.exports={WINDOW_NOT_LOADED:"Window not loaded",WINDOW_IS_OPENED:"Windows is opened",WINDOW_NOT_OPENED:"Can not open popup window",INVALID_WINDOW:"Invalid window"}},2780:function(t,e,r){var n=r(8764).Buffer;t.exports={sleep:function(t=200){return new Promise((e=>setTimeout(e,t)))},prepareTxn:function(t){if(t.constructor===Uint8Array)return n.from(t).toString("base64");if("string"===typeof t)return t;const e=Object.assign({},t);if(e.note&&e.note.constructor===Uint8Array&&(e.note=n.from(e.note).toString("base64")),e.assetMetadataHash&&e.assetMetadataHash.constructor===Uint8Array&&(e.assetMetadataHash=n.from(e.assetMetadataHash).toString("base64")),e.group&&e.group.constructor===Uint8Array&&(e.group=n.from(e.group).toString("base64")),"appl"===e.type&&e.appApprovalProgram&&e.appApprovalProgram.constructor===Uint8Array&&(e.appApprovalProgram=n.from(e.appApprovalProgram).toString("base64")),"appl"===e.type&&e.appClearProgram&&e.appClearProgram.constructor===Uint8Array&&(e.appClearProgram=n.from(e.appClearProgram).toString("base64")),"appl"===e.type&&e.appArgs&&e.appArgs.length>0)for(let r=0;r<e.appArgs.length;r++)e.appArgs[r].constructor===Uint8Array&&(e.appArgs[r]=n.from(e.appArgs[r]).toString("base64"));return e}}}}]);