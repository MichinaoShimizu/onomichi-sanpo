/*! © 2026 Michinao Shimizu. All rights reserved. See LICENSE.txt */
(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),t.credentials=e.crossOrigin===`use-credentials`?`include`:e.crossOrigin===`anonymous`?`omit`:`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var e=1e3,t=1001,n=1002,r=1003,i=1004,a=1005,o=1006,s=1007,c=1008,l=1009,u=1010,d=1011,f=1012,p=1013,m=1014,h=1015,g=1016,_=1017,v=1018,y=1020,b=35902,x=1021,S=1022,C=1023,w=1024,T=1025,E=1026,D=1027,O=1028,k=1029,A=1030,j=1031,M=1033,ee=33776,N=33777,P=33778,te=33779,ne=35840,re=35841,ie=35842,ae=35843,oe=36196,se=37492,ce=37496,le=37808,ue=37809,de=37810,fe=37811,pe=37812,me=37813,he=37814,F=37815,ge=37816,I=37817,L=37818,_e=37819,ve=37820,ye=37821,be=36492,xe=36494,Se=36495,Ce=36283,we=36284,Te=36285,Ee=36286,De=2300,Oe=2301,ke=2302,Ae=2400,je=2401,Me=2402,Ne=3200,Pe=3201,Fe=`srgb`,Ie=`srgb-linear`,Le=`display-p3`,Re=`display-p3-linear`,ze=`linear`,Be=`srgb`,Ve=`rec709`,He=7680,Ue=35044,We=2e3,Ge=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;let n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;let n=this._listeners[e];if(n!==void 0){let e=n.indexOf(t);e!==-1&&n.splice(e,1)}}dispatchEvent(e){if(this._listeners===void 0)return;let t=this._listeners[e.type];if(t!==void 0){e.target=this;let n=t.slice(0);for(let t=0,r=n.length;t<r;t++)n[t].call(this,e);e.target=null}}},Ke=`00.01.02.03.04.05.06.07.08.09.0a.0b.0c.0d.0e.0f.10.11.12.13.14.15.16.17.18.19.1a.1b.1c.1d.1e.1f.20.21.22.23.24.25.26.27.28.29.2a.2b.2c.2d.2e.2f.30.31.32.33.34.35.36.37.38.39.3a.3b.3c.3d.3e.3f.40.41.42.43.44.45.46.47.48.49.4a.4b.4c.4d.4e.4f.50.51.52.53.54.55.56.57.58.59.5a.5b.5c.5d.5e.5f.60.61.62.63.64.65.66.67.68.69.6a.6b.6c.6d.6e.6f.70.71.72.73.74.75.76.77.78.79.7a.7b.7c.7d.7e.7f.80.81.82.83.84.85.86.87.88.89.8a.8b.8c.8d.8e.8f.90.91.92.93.94.95.96.97.98.99.9a.9b.9c.9d.9e.9f.a0.a1.a2.a3.a4.a5.a6.a7.a8.a9.aa.ab.ac.ad.ae.af.b0.b1.b2.b3.b4.b5.b6.b7.b8.b9.ba.bb.bc.bd.be.bf.c0.c1.c2.c3.c4.c5.c6.c7.c8.c9.ca.cb.cc.cd.ce.cf.d0.d1.d2.d3.d4.d5.d6.d7.d8.d9.da.db.dc.dd.de.df.e0.e1.e2.e3.e4.e5.e6.e7.e8.e9.ea.eb.ec.ed.ee.ef.f0.f1.f2.f3.f4.f5.f6.f7.f8.f9.fa.fb.fc.fd.fe.ff`.split(`.`),qe=1234567,Je=Math.PI/180,Ye=180/Math.PI;function Xe(){let e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(Ke[e&255]+Ke[e>>8&255]+Ke[e>>16&255]+Ke[e>>24&255]+`-`+Ke[t&255]+Ke[t>>8&255]+`-`+Ke[t>>16&15|64]+Ke[t>>24&255]+`-`+Ke[n&63|128]+Ke[n>>8&255]+`-`+Ke[n>>16&255]+Ke[n>>24&255]+Ke[r&255]+Ke[r>>8&255]+Ke[r>>16&255]+Ke[r>>24&255]).toLowerCase()}function Ze(e,t,n){return Math.max(t,Math.min(n,e))}function Qe(e,t){return(e%t+t)%t}function $e(e,t,n,r,i){return r+(e-t)*(i-r)/(n-t)}function et(e,t,n){return e===t?0:(n-e)/(t-e)}function tt(e,t,n){return(1-n)*e+n*t}function nt(e,t,n,r){return tt(e,t,1-Math.exp(-n*r))}function rt(e,t=1){return t-Math.abs(Qe(e,t*2)-t)}function it(e,t,n){return e<=t?0:e>=n?1:(e=(e-t)/(n-t),e*e*(3-2*e))}function at(e,t,n){return e<=t?0:e>=n?1:(e=(e-t)/(n-t),e*e*e*(e*(e*6-15)+10))}function ot(e,t){return e+Math.floor(Math.random()*(t-e+1))}function st(e,t){return e+Math.random()*(t-e)}function ct(e){return e*(.5-Math.random())}function lt(e){e!==void 0&&(qe=e);let t=qe+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function ut(e){return e*Je}function dt(e){return e*Ye}function ft(e){return!(e&e-1)&&e!==0}function pt(e){return 2**Math.ceil(Math.log(e)/Math.LN2)}function mt(e){return 2**Math.floor(Math.log(e)/Math.LN2)}function ht(e,t,n,r,i){let a=Math.cos,o=Math.sin,s=a(n/2),c=o(n/2),l=a((t+r)/2),u=o((t+r)/2),d=a((t-r)/2),f=o((t-r)/2),p=a((r-t)/2),m=o((r-t)/2);switch(i){case`XYX`:e.set(s*u,c*d,c*f,s*l);break;case`YZY`:e.set(c*f,s*u,c*d,s*l);break;case`ZXZ`:e.set(c*d,c*f,s*u,s*l);break;case`XZX`:e.set(s*u,c*m,c*p,s*l);break;case`YXY`:e.set(c*p,s*u,c*m,s*l);break;case`ZYZ`:e.set(c*m,c*p,s*u,s*l);break;default:console.warn(`THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: `+i)}}function gt(e,t){switch(t.constructor){case Float32Array:return e;case Uint32Array:return e/4294967295;case Uint16Array:return e/65535;case Uint8Array:return e/255;case Int32Array:return Math.max(e/2147483647,-1);case Int16Array:return Math.max(e/32767,-1);case Int8Array:return Math.max(e/127,-1);default:throw Error(`Invalid component type.`)}}function _t(e,t){switch(t.constructor){case Float32Array:return e;case Uint32Array:return Math.round(e*4294967295);case Uint16Array:return Math.round(e*65535);case Uint8Array:return Math.round(e*255);case Int32Array:return Math.round(e*2147483647);case Int16Array:return Math.round(e*32767);case Int8Array:return Math.round(e*127);default:throw Error(`Invalid component type.`)}}var vt={DEG2RAD:Je,RAD2DEG:Ye,generateUUID:Xe,clamp:Ze,euclideanModulo:Qe,mapLinear:$e,inverseLerp:et,lerp:tt,damp:nt,pingpong:rt,smoothstep:it,smootherstep:at,randInt:ot,randFloat:st,randFloatSpread:ct,seededRandom:lt,degToRad:ut,radToDeg:dt,isPowerOfTwo:ft,ceilPowerOfTwo:pt,floorPowerOfTwo:mt,setQuaternionFromProperEuler:ht,normalize:_t,denormalize:gt},R=class e{constructor(t=0,n=0){e.prototype.isVector2=!0,this.x=t,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw Error(`index is out of range: `+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw Error(`index is out of range: `+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6],this.y=r[1]*t+r[4]*n+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(Ze(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),r=Math.sin(t),i=this.x-e.x,a=this.y-e.y;return this.x=i*n-a*r+e.x,this.y=i*r+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},z=class e{constructor(t,n,r,i,a,o,s,c,l){e.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,n,r,i,a,o,s,c,l)}set(e,t,n,r,i,a,o,s,c){let l=this.elements;return l[0]=e,l[1]=r,l[2]=o,l[3]=t,l[4]=i,l[5]=s,l[6]=n,l[7]=a,l[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,r=t.elements,i=this.elements,a=n[0],o=n[3],s=n[6],c=n[1],l=n[4],u=n[7],d=n[2],f=n[5],p=n[8],m=r[0],h=r[3],g=r[6],_=r[1],v=r[4],y=r[7],b=r[2],x=r[5],S=r[8];return i[0]=a*m+o*_+s*b,i[3]=a*h+o*v+s*x,i[6]=a*g+o*y+s*S,i[1]=c*m+l*_+u*b,i[4]=c*h+l*v+u*x,i[7]=c*g+l*y+u*S,i[2]=d*m+f*_+p*b,i[5]=d*h+f*v+p*x,i[8]=d*g+f*y+p*S,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],r=e[2],i=e[3],a=e[4],o=e[5],s=e[6],c=e[7],l=e[8];return t*a*l-t*o*c-n*i*l+n*o*s+r*i*c-r*a*s}invert(){let e=this.elements,t=e[0],n=e[1],r=e[2],i=e[3],a=e[4],o=e[5],s=e[6],c=e[7],l=e[8],u=l*a-o*c,d=o*s-l*i,f=c*i-a*s,p=t*u+n*d+r*f;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);let m=1/p;return e[0]=u*m,e[1]=(r*c-l*n)*m,e[2]=(o*n-r*a)*m,e[3]=d*m,e[4]=(l*t-r*s)*m,e[5]=(r*i-o*t)*m,e[6]=f*m,e[7]=(n*s-c*t)*m,e[8]=(a*t-n*i)*m,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,r,i,a,o){let s=Math.cos(i),c=Math.sin(i);return this.set(n*s,n*c,-n*(s*a+c*o)+a+e,-r*c,r*s,-r*(-c*a+s*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(yt.makeScale(e,t)),this}rotate(e){return this.premultiply(yt.makeRotation(-e)),this}translate(e,t){return this.premultiply(yt.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let e=0;e<9;e++)if(t[e]!==n[e])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}},yt=new z;function bt(e){for(let t=e.length-1;t>=0;--t)if(e[t]>=65535)return!0;return!1}function xt(e){return document.createElementNS(`http://www.w3.org/1999/xhtml`,e)}function St(){let e=xt(`canvas`);return e.style.display=`block`,e}var Ct={};function wt(e){e in Ct||(Ct[e]=!0,console.warn(e))}function Tt(e,t,n){return new Promise(function(r,i){function a(){switch(e.clientWaitSync(t,e.SYNC_FLUSH_COMMANDS_BIT,0)){case e.WAIT_FAILED:i();break;case e.TIMEOUT_EXPIRED:setTimeout(a,n);break;default:r()}}setTimeout(a,n)})}function Et(e){let t=e.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function Dt(e){let t=e.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}var Ot=new z().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),kt=new z().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),At={[Ie]:{transfer:ze,primaries:Ve,luminanceCoefficients:[.2126,.7152,.0722],toReference:e=>e,fromReference:e=>e},[Fe]:{transfer:Be,primaries:Ve,luminanceCoefficients:[.2126,.7152,.0722],toReference:e=>e.convertSRGBToLinear(),fromReference:e=>e.convertLinearToSRGB()},[Re]:{transfer:ze,primaries:`p3`,luminanceCoefficients:[.2289,.6917,.0793],toReference:e=>e.applyMatrix3(kt),fromReference:e=>e.applyMatrix3(Ot)},[Le]:{transfer:Be,primaries:`p3`,luminanceCoefficients:[.2289,.6917,.0793],toReference:e=>e.convertSRGBToLinear().applyMatrix3(kt),fromReference:e=>e.applyMatrix3(Ot).convertLinearToSRGB()}},jt=new Set([Ie,Re]),B={enabled:!0,_workingColorSpace:Ie,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(e){if(!jt.has(e))throw Error(`Unsupported working color space, "${e}".`);this._workingColorSpace=e},convert:function(e,t,n){if(this.enabled===!1||t===n||!t||!n)return e;let r=At[t].toReference,i=At[n].fromReference;return i(r(e))},fromWorkingColorSpace:function(e,t){return this.convert(e,this._workingColorSpace,t)},toWorkingColorSpace:function(e,t){return this.convert(e,t,this._workingColorSpace)},getPrimaries:function(e){return At[e].primaries},getTransfer:function(e){return e===``?ze:At[e].transfer},getLuminanceCoefficients:function(e,t=this._workingColorSpace){return e.fromArray(At[t].luminanceCoefficients)}};function Mt(e){return e<.04045?e*.0773993808:(e*.9478672986+.0521327014)**2.4}function Nt(e){return e<.0031308?e*12.92:1.055*e**.41666-.055}var Pt,Ft=class{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>`u`)return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Pt===void 0&&(Pt=xt(`canvas`)),Pt.width=e.width,Pt.height=e.height;let n=Pt.getContext(`2d`);e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=Pt}return t.width>2048||t.height>2048?(console.warn(`THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons`,e),t.toDataURL(`image/jpeg`,.6)):t.toDataURL(`image/png`)}static sRGBToLinear(e){if(typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<`u`&&e instanceof HTMLCanvasElement||typeof ImageBitmap<`u`&&e instanceof ImageBitmap){let t=xt(`canvas`);t.width=e.width,t.height=e.height;let n=t.getContext(`2d`);n.drawImage(e,0,0,e.width,e.height);let r=n.getImageData(0,0,e.width,e.height),i=r.data;for(let e=0;e<i.length;e++)i[e]=Mt(i[e]/255)*255;return n.putImageData(r,0,0),t}if(e.data){let t=e.data.slice(0);for(let e=0;e<t.length;e++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[e]=Math.floor(Mt(t[e]/255)*255):t[e]=Mt(t[e]);return{data:t,width:e.width,height:e.height}}return console.warn(`THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied.`),e}},It=0,Lt=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:It++}),this.uuid=Xe(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e==`string`;if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:``},r=this.data;if(r!==null){let e;if(Array.isArray(r)){e=[];for(let t=0,n=r.length;t<n;t++)r[t].isDataTexture?e.push(Rt(r[t].image)):e.push(Rt(r[t]))}else e=Rt(r);n.url=e}return t||(e.images[this.uuid]=n),n}};function Rt(e){return typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<`u`&&e instanceof HTMLCanvasElement||typeof ImageBitmap<`u`&&e instanceof ImageBitmap?Ft.getDataURL(e):e.data?{data:Array.from(e.data),width:e.width,height:e.height,type:e.data.constructor.name}:(console.warn(`THREE.Texture: Unable to serialize Texture.`),{})}var zt=0,Bt=class r extends Ge{constructor(e=r.DEFAULT_IMAGE,n=r.DEFAULT_MAPPING,i=t,a=t,s=o,u=c,d=C,f=l,p=r.DEFAULT_ANISOTROPY,m=``){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:zt++}),this.uuid=Xe(),this.name=``,this.source=new Lt(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=a,this.magFilter=s,this.minFilter=u,this.anisotropy=p,this.format=d,this.internalFormat=null,this.type=f,this.offset=new R(0,0),this.repeat=new R(1,1),this.center=new R(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new z,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=m,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){let t=e===void 0||typeof e==`string`;if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.6,type:`Texture`,generator:`Texture.toJSON`},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:`dispose`})}transformUv(r){if(this.mapping!==300)return r;if(r.applyMatrix3(this.matrix),r.x<0||r.x>1)switch(this.wrapS){case e:r.x-=Math.floor(r.x);break;case t:r.x=r.x<0?0:1;break;case n:Math.abs(Math.floor(r.x)%2)===1?r.x=Math.ceil(r.x)-r.x:r.x-=Math.floor(r.x)}if(r.y<0||r.y>1)switch(this.wrapT){case e:r.y-=Math.floor(r.y);break;case t:r.y=r.y<0?0:1;break;case n:Math.abs(Math.floor(r.y)%2)===1?r.y=Math.ceil(r.y)-r.y:r.y-=Math.floor(r.y)}return this.flipY&&(r.y=1-r.y),r}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};Bt.DEFAULT_IMAGE=null,Bt.DEFAULT_MAPPING=300,Bt.DEFAULT_ANISOTROPY=1;var Vt=class e{constructor(t=0,n=0,r=0,i=1){e.prototype.isVector4=!0,this.x=t,this.y=n,this.z=r,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,r){return this.x=e,this.y=t,this.z=n,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw Error(`index is out of range: `+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw Error(`index is out of range: `+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w===void 0?1:e.w,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,r=this.z,i=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*r+a[12]*i,this.y=a[1]*t+a[5]*n+a[9]*r+a[13]*i,this.z=a[2]*t+a[6]*n+a[10]*r+a[14]*i,this.w=a[3]*t+a[7]*n+a[11]*r+a[15]*i,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,r,i,a=.01,o=.1,s=e.elements,c=s[0],l=s[4],u=s[8],d=s[1],f=s[5],p=s[9],m=s[2],h=s[6],g=s[10];if(Math.abs(l-d)<a&&Math.abs(u-m)<a&&Math.abs(p-h)<a){if(Math.abs(l+d)<o&&Math.abs(u+m)<o&&Math.abs(p+h)<o&&Math.abs(c+f+g-3)<o)return this.set(1,0,0,0),this;t=Math.PI;let e=(c+1)/2,s=(f+1)/2,_=(g+1)/2,v=(l+d)/4,y=(u+m)/4,b=(p+h)/4;return e>s&&e>_?e<a?(n=0,r=.707106781,i=.707106781):(n=Math.sqrt(e),r=v/n,i=y/n):s>_?s<a?(n=.707106781,r=0,i=.707106781):(r=Math.sqrt(s),n=v/r,i=b/r):_<a?(n=.707106781,r=.707106781,i=0):(i=Math.sqrt(_),n=y/i,r=b/i),this.set(n,r,i,t),this}let _=Math.sqrt((h-p)*(h-p)+(u-m)*(u-m)+(d-l)*(d-l));return Math.abs(_)<.001&&(_=1),this.x=(h-p)/_,this.y=(u-m)/_,this.z=(d-l)/_,this.w=Math.acos((c+f+g-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Ht=class extends Ge{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new Vt(0,0,e,t),this.scissorTest=!1,this.viewport=new Vt(0,0,e,t);let r={width:e,height:t,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:o,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);let i=new Bt(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);i.flipY=!1,i.generateMipmaps=n.generateMipmaps,i.internalFormat=n.internalFormat,this.textures=[];let a=n.count;for(let e=0;e<a;e++)this.textures[e]=i.clone(),this.textures[e].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let r=0,i=this.textures.length;r<i;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=n;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++)this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0;let t=Object.assign({},e.texture.image);return this.texture.source=new Lt(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:`dispose`})}},Ut=class extends Ht{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},Wt=class extends Bt{constructor(e=null,n=1,i=1,a=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:a},this.magFilter=r,this.minFilter=r,this.wrapR=t,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}},Gt=class extends Bt{constructor(e=null,n=1,i=1,a=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:a},this.magFilter=r,this.minFilter=r,this.wrapR=t,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},Kt=class{constructor(e=0,t=0,n=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=r}static slerpFlat(e,t,n,r,i,a,o){let s=n[r+0],c=n[r+1],l=n[r+2],u=n[r+3],d=i[a+0],f=i[a+1],p=i[a+2],m=i[a+3];if(o===0)e[t+0]=s,e[t+1]=c,e[t+2]=l,e[t+3]=u;else if(o===1)e[t+0]=d,e[t+1]=f,e[t+2]=p,e[t+3]=m;else{if(u!==m||s!==d||c!==f||l!==p){let e=1-o,t=s*d+c*f+l*p+u*m,n=t>=0?1:-1,r=1-t*t;if(r>2**-52){let i=Math.sqrt(r),a=Math.atan2(i,t*n);e=Math.sin(e*a)/i,o=Math.sin(o*a)/i}let i=o*n;if(s=s*e+d*i,c=c*e+f*i,l=l*e+p*i,u=u*e+m*i,e===1-o){let e=1/Math.sqrt(s*s+c*c+l*l+u*u);s*=e,c*=e,l*=e,u*=e}}e[t]=s,e[t+1]=c,e[t+2]=l,e[t+3]=u}}static multiplyQuaternionsFlat(e,t,n,r,i,a){let o=n[r],s=n[r+1],c=n[r+2],l=n[r+3],u=i[a],d=i[a+1],f=i[a+2],p=i[a+3];return e[t]=o*p+l*u+s*f-c*d,e[t+1]=s*p+l*d+c*u-o*f,e[t+2]=c*p+l*f+o*d-s*u,e[t+3]=l*p-o*u-s*d-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,r){return this._x=e,this._y=t,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,r=e._y,i=e._z,a=e._order,o=Math.cos,s=Math.sin,c=o(n/2),l=o(r/2),u=o(i/2),d=s(n/2),f=s(r/2),p=s(i/2);switch(a){case`XYZ`:this._x=d*l*u+c*f*p,this._y=c*f*u-d*l*p,this._z=c*l*p+d*f*u,this._w=c*l*u-d*f*p;break;case`YXZ`:this._x=d*l*u+c*f*p,this._y=c*f*u-d*l*p,this._z=c*l*p-d*f*u,this._w=c*l*u+d*f*p;break;case`ZXY`:this._x=d*l*u-c*f*p,this._y=c*f*u+d*l*p,this._z=c*l*p+d*f*u,this._w=c*l*u-d*f*p;break;case`ZYX`:this._x=d*l*u-c*f*p,this._y=c*f*u+d*l*p,this._z=c*l*p-d*f*u,this._w=c*l*u+d*f*p;break;case`YZX`:this._x=d*l*u+c*f*p,this._y=c*f*u+d*l*p,this._z=c*l*p-d*f*u,this._w=c*l*u-d*f*p;break;case`XZY`:this._x=d*l*u-c*f*p,this._y=c*f*u-d*l*p,this._z=c*l*p+d*f*u,this._w=c*l*u+d*f*p;break;default:console.warn(`THREE.Quaternion: .setFromEuler() encountered an unknown order: `+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,r=Math.sin(n);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],r=t[4],i=t[8],a=t[1],o=t[5],s=t[9],c=t[2],l=t[6],u=t[10],d=n+o+u;if(d>0){let e=.5/Math.sqrt(d+1);this._w=.25/e,this._x=(l-s)*e,this._y=(i-c)*e,this._z=(a-r)*e}else if(n>o&&n>u){let e=2*Math.sqrt(1+n-o-u);this._w=(l-s)/e,this._x=.25*e,this._y=(r+a)/e,this._z=(i+c)/e}else if(o>u){let e=2*Math.sqrt(1+o-n-u);this._w=(i-c)/e,this._x=(r+a)/e,this._y=.25*e,this._z=(s+l)/e}else{let e=2*Math.sqrt(1+u-n-o);this._w=(a-r)/e,this._x=(i+c)/e,this._y=(s+l)/e,this._z=.25*e}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<2**-52?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Ze(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let r=Math.min(1,t/n);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x*=e,this._y*=e,this._z*=e,this._w*=e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,r=e._y,i=e._z,a=e._w,o=t._x,s=t._y,c=t._z,l=t._w;return this._x=n*l+a*o+r*c-i*s,this._y=r*l+a*s+i*o-n*c,this._z=i*l+a*c+n*s-r*o,this._w=a*l-n*o-r*s-i*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);let n=this._x,r=this._y,i=this._z,a=this._w,o=a*e._w+n*e._x+r*e._y+i*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=n,this._y=r,this._z=i,this;let s=1-o*o;if(s<=2**-52){let e=1-t;return this._w=e*a+t*this._w,this._x=e*n+t*this._x,this._y=e*r+t*this._y,this._z=e*i+t*this._z,this.normalize(),this}let c=Math.sqrt(s),l=Math.atan2(c,o),u=Math.sin((1-t)*l)/c,d=Math.sin(t*l)/c;return this._w=a*u+this._w*d,this._x=n*u+this._x*d,this._y=r*u+this._y*d,this._z=i*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),r=Math.sqrt(1-n),i=Math.sqrt(n);return this.set(r*Math.sin(e),r*Math.cos(e),i*Math.sin(t),i*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},V=class e{constructor(t=0,n=0,r=0){e.prototype.isVector3=!0,this.x=t,this.y=n,this.z=r}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw Error(`index is out of range: `+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw Error(`index is out of range: `+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Jt.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Jt.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,r=this.z,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6]*r,this.y=i[1]*t+i[4]*n+i[7]*r,this.z=i[2]*t+i[5]*n+i[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,r=this.z,i=e.elements,a=1/(i[3]*t+i[7]*n+i[11]*r+i[15]);return this.x=(i[0]*t+i[4]*n+i[8]*r+i[12])*a,this.y=(i[1]*t+i[5]*n+i[9]*r+i[13])*a,this.z=(i[2]*t+i[6]*n+i[10]*r+i[14])*a,this}applyQuaternion(e){let t=this.x,n=this.y,r=this.z,i=e.x,a=e.y,o=e.z,s=e.w,c=2*(a*r-o*n),l=2*(o*t-i*r),u=2*(i*n-a*t);return this.x=t+s*c+a*u-o*l,this.y=n+s*l+o*c-i*u,this.z=r+s*u+i*l-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,r=this.z,i=e.elements;return this.x=i[0]*t+i[4]*n+i[8]*r,this.y=i[1]*t+i[5]*n+i[9]*r,this.z=i[2]*t+i[6]*n+i[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,r=e.y,i=e.z,a=t.x,o=t.y,s=t.z;return this.x=r*s-i*o,this.y=i*a-n*s,this.z=n*o-r*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return qt.copy(this).projectOnVector(e),this.sub(qt)}reflect(e){return this.sub(qt.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(Ze(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,r=this.z-e.z;return t*t+n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let r=Math.sin(t)*e;return this.x=r*Math.sin(n),this.y=Math.cos(t)*e,this.z=r*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},qt=new V,Jt=new Kt,Yt=class{constructor(e=new V(1/0,1/0,1/0),t=new V(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Zt.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Zt.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=Zt.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute(`position`);if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let t=0,n=r.count;t<n;t++)e.isMesh===!0?e.getVertexPosition(t,Zt):Zt.fromBufferAttribute(r,t),Zt.applyMatrix4(e.matrixWorld),this.expandByPoint(Zt);else e.boundingBox===void 0?(n.boundingBox===null&&n.computeBoundingBox(),Qt.copy(n.boundingBox)):(e.boundingBox===null&&e.computeBoundingBox(),Qt.copy(e.boundingBox)),Qt.applyMatrix4(e.matrixWorld),this.union(Qt)}let r=e.children;for(let e=0,n=r.length;e<n;e++)this.expandByObject(r[e],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Zt),Zt.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(on),sn.subVectors(this.max,on),$t.subVectors(e.a,on),en.subVectors(e.b,on),tn.subVectors(e.c,on),nn.subVectors(en,$t),rn.subVectors(tn,en),an.subVectors($t,tn);let t=[0,-nn.z,nn.y,0,-rn.z,rn.y,0,-an.z,an.y,nn.z,0,-nn.x,rn.z,0,-rn.x,an.z,0,-an.x,-nn.y,nn.x,0,-rn.y,rn.x,0,-an.y,an.x,0];return!un(t,$t,en,tn,sn)||(t=[1,0,0,0,1,0,0,0,1],!un(t,$t,en,tn,sn))?!1:(cn.crossVectors(nn,rn),t=[cn.x,cn.y,cn.z],un(t,$t,en,tn,sn))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Zt).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Zt).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()||(Xt[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Xt[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Xt[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Xt[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Xt[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Xt[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Xt[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Xt[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Xt)),this}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}},Xt=[new V,new V,new V,new V,new V,new V,new V,new V],Zt=new V,Qt=new Yt,$t=new V,en=new V,tn=new V,nn=new V,rn=new V,an=new V,on=new V,sn=new V,cn=new V,ln=new V;function un(e,t,n,r,i){for(let a=0,o=e.length-3;a<=o;a+=3){ln.fromArray(e,a);let o=i.x*Math.abs(ln.x)+i.y*Math.abs(ln.y)+i.z*Math.abs(ln.z),s=t.dot(ln),c=n.dot(ln),l=r.dot(ln);if(Math.max(-Math.max(s,c,l),Math.min(s,c,l))>o)return!1}return!0}var dn=new Yt,fn=new V,pn=new V,mn=class{constructor(e=new V,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t===void 0?dn.setFromPoints(e).getCenter(n):n.copy(t);let r=0;for(let t=0,i=e.length;t<i;t++)r=Math.max(r,n.distanceToSquared(e[t]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius*=e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;fn.subVectors(e,this.center);let t=fn.lengthSq();if(t>this.radius*this.radius){let e=Math.sqrt(t),n=(e-this.radius)*.5;this.center.addScaledVector(fn,n/e),this.radius+=n}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(pn.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(fn.copy(e.center).add(pn)),this.expandByPoint(fn.copy(e.center).sub(pn))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}},hn=new V,gn=new V,_n=new V,vn=new V,yn=new V,bn=new V,xn=new V,Sn=class{constructor(e=new V,t=new V(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,hn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=hn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(hn.copy(this.origin).addScaledVector(this.direction,t),hn.distanceToSquared(e))}distanceSqToSegment(e,t,n,r){gn.copy(e).add(t).multiplyScalar(.5),_n.copy(t).sub(e).normalize(),vn.copy(this.origin).sub(gn);let i=e.distanceTo(t)*.5,a=-this.direction.dot(_n),o=vn.dot(this.direction),s=-vn.dot(_n),c=vn.lengthSq(),l=Math.abs(1-a*a),u,d,f,p;if(l>0){if(u=a*s-o,d=a*o-s,p=i*l,u>=0){if(d>=-p){if(d<=p){let e=1/l;u*=e,d*=e,f=u*(u+a*d+2*o)+d*(a*u+d+2*s)+c}else d=i,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*s)+c}else d=-i,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*s)+c}else d<=-p?(u=Math.max(0,-(-a*i+o)),d=u>0?-i:Math.min(Math.max(-i,-s),i),f=-u*u+d*(d+2*s)+c):d<=p?(u=0,d=Math.min(Math.max(-i,-s),i),f=d*(d+2*s)+c):(u=Math.max(0,-(a*i+o)),d=u>0?i:Math.min(Math.max(-i,-s),i),f=-u*u+d*(d+2*s)+c)}else d=a>0?-i:i,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*s)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),r&&r.copy(gn).addScaledVector(_n,d),f}intersectSphere(e,t){hn.subVectors(e.center,this.origin);let n=hn.dot(this.direction),r=hn.dot(hn)-n*n,i=e.radius*e.radius;if(r>i)return null;let a=Math.sqrt(i-r),o=n-a,s=n+a;return s<0?null:o<0?this.at(s,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,r,i,a,o,s,c=1/this.direction.x,l=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(n=(e.min.x-d.x)*c,r=(e.max.x-d.x)*c):(n=(e.max.x-d.x)*c,r=(e.min.x-d.x)*c),l>=0?(i=(e.min.y-d.y)*l,a=(e.max.y-d.y)*l):(i=(e.max.y-d.y)*l,a=(e.min.y-d.y)*l),n>a||i>r||((i>n||isNaN(n))&&(n=i),(a<r||isNaN(r))&&(r=a),u>=0?(o=(e.min.z-d.z)*u,s=(e.max.z-d.z)*u):(o=(e.max.z-d.z)*u,s=(e.min.z-d.z)*u),n>s||o>r)||((o>n||n!==n)&&(n=o),(s<r||r!==r)&&(r=s),r<0)?null:this.at(n>=0?n:r,t)}intersectsBox(e){return this.intersectBox(e,hn)!==null}intersectTriangle(e,t,n,r,i){yn.subVectors(t,e),bn.subVectors(n,e),xn.crossVectors(yn,bn);let a=this.direction.dot(xn),o;if(a>0){if(r)return null;o=1}else if(a<0)o=-1,a=-a;else return null;vn.subVectors(this.origin,e);let s=o*this.direction.dot(bn.crossVectors(vn,bn));if(s<0)return null;let c=o*this.direction.dot(yn.cross(vn));if(c<0||s+c>a)return null;let l=-o*vn.dot(xn);return l<0?null:this.at(l/a,i)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},H=class e{constructor(t,n,r,i,a,o,s,c,l,u,d,f,p,m,h,g){e.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,n,r,i,a,o,s,c,l,u,d,f,p,m,h,g)}set(e,t,n,r,i,a,o,s,c,l,u,d,f,p,m,h){let g=this.elements;return g[0]=e,g[4]=t,g[8]=n,g[12]=r,g[1]=i,g[5]=a,g[9]=o,g[13]=s,g[2]=c,g[6]=l,g[10]=u,g[14]=d,g[3]=f,g[7]=p,g[11]=m,g[15]=h,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new e().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){let t=this.elements,n=e.elements,r=1/Cn.setFromMatrixColumn(e,0).length(),i=1/Cn.setFromMatrixColumn(e,1).length(),a=1/Cn.setFromMatrixColumn(e,2).length();return t[0]=n[0]*r,t[1]=n[1]*r,t[2]=n[2]*r,t[3]=0,t[4]=n[4]*i,t[5]=n[5]*i,t[6]=n[6]*i,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,r=e.y,i=e.z,a=Math.cos(n),o=Math.sin(n),s=Math.cos(r),c=Math.sin(r),l=Math.cos(i),u=Math.sin(i);if(e.order===`XYZ`){let e=a*l,n=a*u,r=o*l,i=o*u;t[0]=s*l,t[4]=-s*u,t[8]=c,t[1]=n+r*c,t[5]=e-i*c,t[9]=-o*s,t[2]=i-e*c,t[6]=r+n*c,t[10]=a*s}else if(e.order===`YXZ`){let e=s*l,n=s*u,r=c*l,i=c*u;t[0]=e+i*o,t[4]=r*o-n,t[8]=a*c,t[1]=a*u,t[5]=a*l,t[9]=-o,t[2]=n*o-r,t[6]=i+e*o,t[10]=a*s}else if(e.order===`ZXY`){let e=s*l,n=s*u,r=c*l,i=c*u;t[0]=e-i*o,t[4]=-a*u,t[8]=r+n*o,t[1]=n+r*o,t[5]=a*l,t[9]=i-e*o,t[2]=-a*c,t[6]=o,t[10]=a*s}else if(e.order===`ZYX`){let e=a*l,n=a*u,r=o*l,i=o*u;t[0]=s*l,t[4]=r*c-n,t[8]=e*c+i,t[1]=s*u,t[5]=i*c+e,t[9]=n*c-r,t[2]=-c,t[6]=o*s,t[10]=a*s}else if(e.order===`YZX`){let e=a*s,n=a*c,r=o*s,i=o*c;t[0]=s*l,t[4]=i-e*u,t[8]=r*u+n,t[1]=u,t[5]=a*l,t[9]=-o*l,t[2]=-c*l,t[6]=n*u+r,t[10]=e-i*u}else if(e.order===`XZY`){let e=a*s,n=a*c,r=o*s,i=o*c;t[0]=s*l,t[4]=-u,t[8]=c*l,t[1]=e*u+i,t[5]=a*l,t[9]=n*u-r,t[2]=r*u-n,t[6]=o*l,t[10]=i*u+e}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Tn,e,En)}lookAt(e,t,n){let r=this.elements;return kn.subVectors(e,t),kn.lengthSq()===0&&(kn.z=1),kn.normalize(),Dn.crossVectors(n,kn),Dn.lengthSq()===0&&(Math.abs(n.z)===1?kn.x+=1e-4:kn.z+=1e-4,kn.normalize(),Dn.crossVectors(n,kn)),Dn.normalize(),On.crossVectors(kn,Dn),r[0]=Dn.x,r[4]=On.x,r[8]=kn.x,r[1]=Dn.y,r[5]=On.y,r[9]=kn.y,r[2]=Dn.z,r[6]=On.z,r[10]=kn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,r=t.elements,i=this.elements,a=n[0],o=n[4],s=n[8],c=n[12],l=n[1],u=n[5],d=n[9],f=n[13],p=n[2],m=n[6],h=n[10],g=n[14],_=n[3],v=n[7],y=n[11],b=n[15],x=r[0],S=r[4],C=r[8],w=r[12],T=r[1],E=r[5],D=r[9],O=r[13],k=r[2],A=r[6],j=r[10],M=r[14],ee=r[3],N=r[7],P=r[11],te=r[15];return i[0]=a*x+o*T+s*k+c*ee,i[4]=a*S+o*E+s*A+c*N,i[8]=a*C+o*D+s*j+c*P,i[12]=a*w+o*O+s*M+c*te,i[1]=l*x+u*T+d*k+f*ee,i[5]=l*S+u*E+d*A+f*N,i[9]=l*C+u*D+d*j+f*P,i[13]=l*w+u*O+d*M+f*te,i[2]=p*x+m*T+h*k+g*ee,i[6]=p*S+m*E+h*A+g*N,i[10]=p*C+m*D+h*j+g*P,i[14]=p*w+m*O+h*M+g*te,i[3]=_*x+v*T+y*k+b*ee,i[7]=_*S+v*E+y*A+b*N,i[11]=_*C+v*D+y*j+b*P,i[15]=_*w+v*O+y*M+b*te,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],r=e[8],i=e[12],a=e[1],o=e[5],s=e[9],c=e[13],l=e[2],u=e[6],d=e[10],f=e[14],p=e[3],m=e[7],h=e[11],g=e[15];return p*(+i*s*u-r*c*u-i*o*d+n*c*d+r*o*f-n*s*f)+m*(+t*s*f-t*c*d+i*a*d-r*a*f+r*c*l-i*s*l)+h*(+t*c*u-t*o*f-i*a*u+n*a*f+i*o*l-n*c*l)+g*(-r*o*l-t*s*u+t*o*d+r*a*u-n*a*d+n*s*l)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],r=e[2],i=e[3],a=e[4],o=e[5],s=e[6],c=e[7],l=e[8],u=e[9],d=e[10],f=e[11],p=e[12],m=e[13],h=e[14],g=e[15],_=u*h*c-m*d*c+m*s*f-o*h*f-u*s*g+o*d*g,v=p*d*c-l*h*c-p*s*f+a*h*f+l*s*g-a*d*g,y=l*m*c-p*u*c+p*o*f-a*m*f-l*o*g+a*u*g,b=p*u*s-l*m*s-p*o*d+a*m*d+l*o*h-a*u*h,x=t*_+n*v+r*y+i*b;if(x===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let S=1/x;return e[0]=_*S,e[1]=(m*d*i-u*h*i-m*r*f+n*h*f+u*r*g-n*d*g)*S,e[2]=(o*h*i-m*s*i+m*r*c-n*h*c-o*r*g+n*s*g)*S,e[3]=(u*s*i-o*d*i-u*r*c+n*d*c+o*r*f-n*s*f)*S,e[4]=v*S,e[5]=(l*h*i-p*d*i+p*r*f-t*h*f-l*r*g+t*d*g)*S,e[6]=(p*s*i-a*h*i-p*r*c+t*h*c+a*r*g-t*s*g)*S,e[7]=(a*d*i-l*s*i+l*r*c-t*d*c-a*r*f+t*s*f)*S,e[8]=y*S,e[9]=(p*u*i-l*m*i-p*n*f+t*m*f+l*n*g-t*u*g)*S,e[10]=(a*m*i-p*o*i+p*n*c-t*m*c-a*n*g+t*o*g)*S,e[11]=(l*o*i-a*u*i-l*n*c+t*u*c+a*n*f-t*o*f)*S,e[12]=b*S,e[13]=(l*m*r-p*u*r+p*n*d-t*m*d-l*n*h+t*u*h)*S,e[14]=(p*o*r-a*m*r-p*n*s+t*m*s+a*n*h-t*o*h)*S,e[15]=(a*u*r-l*o*r+l*n*s-t*u*s-a*n*d+t*o*d)*S,this}scale(e){let t=this.elements,n=e.x,r=e.y,i=e.z;return t[0]*=n,t[4]*=r,t[8]*=i,t[1]*=n,t[5]*=r,t[9]*=i,t[2]*=n,t[6]*=r,t[10]*=i,t[3]*=n,t[7]*=r,t[11]*=i,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,r))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),r=Math.sin(t),i=1-n,a=e.x,o=e.y,s=e.z,c=i*a,l=i*o;return this.set(c*a+n,c*o-r*s,c*s+r*o,0,c*o+r*s,l*o+n,l*s-r*a,0,c*s-r*o,l*s+r*a,i*s*s+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,r,i,a){return this.set(1,n,i,0,e,1,a,0,t,r,1,0,0,0,0,1),this}compose(e,t,n){let r=this.elements,i=t._x,a=t._y,o=t._z,s=t._w,c=i+i,l=a+a,u=o+o,d=i*c,f=i*l,p=i*u,m=a*l,h=a*u,g=o*u,_=s*c,v=s*l,y=s*u,b=n.x,x=n.y,S=n.z;return r[0]=(1-(m+g))*b,r[1]=(f+y)*b,r[2]=(p-v)*b,r[3]=0,r[4]=(f-y)*x,r[5]=(1-(d+g))*x,r[6]=(h+_)*x,r[7]=0,r[8]=(p+v)*S,r[9]=(h-_)*S,r[10]=(1-(d+m))*S,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,n){let r=this.elements,i=Cn.set(r[0],r[1],r[2]).length(),a=Cn.set(r[4],r[5],r[6]).length(),o=Cn.set(r[8],r[9],r[10]).length();this.determinant()<0&&(i=-i),e.x=r[12],e.y=r[13],e.z=r[14],wn.copy(this);let s=1/i,c=1/a,l=1/o;return wn.elements[0]*=s,wn.elements[1]*=s,wn.elements[2]*=s,wn.elements[4]*=c,wn.elements[5]*=c,wn.elements[6]*=c,wn.elements[8]*=l,wn.elements[9]*=l,wn.elements[10]*=l,t.setFromRotationMatrix(wn),n.x=i,n.y=a,n.z=o,this}makePerspective(e,t,n,r,i,a,o=We){let s=this.elements,c=2*i/(t-e),l=2*i/(n-r),u=(t+e)/(t-e),d=(n+r)/(n-r),f,p;if(o===2e3)f=-(a+i)/(a-i),p=-2*a*i/(a-i);else if(o===2001)f=-a/(a-i),p=-a*i/(a-i);else throw Error(`THREE.Matrix4.makePerspective(): Invalid coordinate system: `+o);return s[0]=c,s[4]=0,s[8]=u,s[12]=0,s[1]=0,s[5]=l,s[9]=d,s[13]=0,s[2]=0,s[6]=0,s[10]=f,s[14]=p,s[3]=0,s[7]=0,s[11]=-1,s[15]=0,this}makeOrthographic(e,t,n,r,i,a,o=We){let s=this.elements,c=1/(t-e),l=1/(n-r),u=1/(a-i),d=(t+e)*c,f=(n+r)*l,p,m;if(o===2e3)p=(a+i)*u,m=-2*u;else if(o===2001)p=i*u,m=-1*u;else throw Error(`THREE.Matrix4.makeOrthographic(): Invalid coordinate system: `+o);return s[0]=2*c,s[4]=0,s[8]=0,s[12]=-d,s[1]=0,s[5]=2*l,s[9]=0,s[13]=-f,s[2]=0,s[6]=0,s[10]=m,s[14]=-p,s[3]=0,s[7]=0,s[11]=0,s[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let e=0;e<16;e++)if(t[e]!==n[e])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}},Cn=new V,wn=new H,Tn=new V(0,0,0),En=new V(1,1,1),Dn=new V,On=new V,kn=new V,An=new H,jn=new Kt,Mn=class e{constructor(t=0,n=0,r=0,i=e.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=n,this._z=r,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,r=this._order){return this._x=e,this._y=t,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let r=e.elements,i=r[0],a=r[4],o=r[8],s=r[1],c=r[5],l=r[9],u=r[2],d=r[6],f=r[10];switch(t){case`XYZ`:this._y=Math.asin(Ze(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-l,f),this._z=Math.atan2(-a,i)):(this._x=Math.atan2(d,c),this._z=0);break;case`YXZ`:this._x=Math.asin(-Ze(l,-1,1)),Math.abs(l)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(s,c)):(this._y=Math.atan2(-u,i),this._z=0);break;case`ZXY`:this._x=Math.asin(Ze(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(s,i));break;case`ZYX`:this._y=Math.asin(-Ze(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(s,i)):(this._x=0,this._z=Math.atan2(-a,c));break;case`YZX`:this._z=Math.asin(Ze(s,-1,1)),Math.abs(s)<.9999999?(this._x=Math.atan2(-l,c),this._y=Math.atan2(-u,i)):(this._x=0,this._y=Math.atan2(o,f));break;case`XZY`:this._z=Math.asin(-Ze(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,i)):(this._x=Math.atan2(-l,f),this._y=0);break;default:console.warn(`THREE.Euler: .setFromRotationMatrix() encountered an unknown order: `+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return An.makeRotationFromQuaternion(e),this.setFromRotationMatrix(An,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return jn.setFromEuler(this),this.setFromQuaternion(jn,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Mn.DEFAULT_ORDER=`XYZ`;var Nn=class{constructor(){this.mask=1}set(e){this.mask=1<<e>>>0}enable(e){this.mask|=1<<e}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e}disable(e){this.mask&=~(1<<e)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return!!(this.mask&1<<e)}},Pn=0,Fn=new V,In=new Kt,Ln=new H,Rn=new V,zn=new V,Bn=new V,Vn=new Kt,Hn=new V(1,0,0),Un=new V(0,1,0),Wn=new V(0,0,1),Gn={type:`added`},Kn={type:`removed`},qn={type:`childadded`,child:null},Jn={type:`childremoved`,child:null},Yn=class e extends Ge{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Pn++}),this.uuid=Xe(),this.name=``,this.type=`Object3D`,this.parent=null,this.children=[],this.up=e.DEFAULT_UP.clone();let t=new V,n=new Mn,r=new Kt,i=new V(1,1,1);function a(){r.setFromEuler(n,!1)}function o(){n.setFromQuaternion(r,void 0,!1)}n._onChange(a),r._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new H},normalMatrix:{value:new z}}),this.matrix=new H,this.matrixWorld=new H,this.matrixAutoUpdate=e.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=e.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Nn,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return In.setFromAxisAngle(e,t),this.quaternion.multiply(In),this}rotateOnWorldAxis(e,t){return In.setFromAxisAngle(e,t),this.quaternion.premultiply(In),this}rotateX(e){return this.rotateOnAxis(Hn,e)}rotateY(e){return this.rotateOnAxis(Un,e)}rotateZ(e){return this.rotateOnAxis(Wn,e)}translateOnAxis(e,t){return Fn.copy(e).applyQuaternion(this.quaternion),this.position.add(Fn.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Hn,e)}translateY(e){return this.translateOnAxis(Un,e)}translateZ(e){return this.translateOnAxis(Wn,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Ln.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Rn.copy(e):Rn.set(e,t,n);let r=this.parent;this.updateWorldMatrix(!0,!1),zn.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ln.lookAt(zn,Rn,this.up):Ln.lookAt(Rn,zn,this.up),this.quaternion.setFromRotationMatrix(Ln),r&&(Ln.extractRotation(r.matrixWorld),In.setFromRotationMatrix(Ln),this.quaternion.premultiply(In.invert()))}add(e){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return e===this?(console.error(`THREE.Object3D.add: object can't be added as a child of itself.`,e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Gn),qn.child=e,this.dispatchEvent(qn),qn.child=null):console.error(`THREE.Object3D.add: object not an instance of THREE.Object3D.`,e),this)}remove(e){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.remove(arguments[e]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Kn),Jn.child=e,this.dispatchEvent(Jn),Jn.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Ln.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Ln.multiply(e.parent.matrixWorld)),e.applyMatrix4(Ln),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Gn),qn.child=e,this.dispatchEvent(qn),qn.child=null,this}getObjectById(e){return this.getObjectByProperty(`id`,e)}getObjectByName(e){return this.getObjectByProperty(`name`,e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,r=this.children.length;n<r;n++){let r=this.children[n].getObjectByProperty(e,t);if(r!==void 0)return r}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let r=this.children;for(let i=0,a=r.length;i<a;i++)r[i].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(zn,e,Bn),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(zn,Vn,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){let n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){let e=this.children;for(let t=0,n=e.length;t<n;t++)e[t].updateWorldMatrix(!1,!0)}}toJSON(e){let t=e===void 0||typeof e==`string`,n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:`Object`,generator:`Object3D.toJSON`});let r={};r.uuid=this.uuid,r.type=this.type,this.name!==``&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type=`InstancedMesh`,r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type=`BatchedMesh`,r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(e=>({boxInitialized:e.boxInitialized,boxMin:e.box.min.toArray(),boxMax:e.box.max.toArray(),sphereInitialized:e.sphereInitialized,sphereRadius:e.sphere.radius,sphereCenter:e.sphere.center.toArray()})),r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function i(t,n){return t[n.uuid]===void 0&&(t[n.uuid]=n.toJSON(e)),n.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=i(e.geometries,this.geometry);let t=this.geometry.parameters;if(t!==void 0&&t.shapes!==void 0){let n=t.shapes;if(Array.isArray(n))for(let t=0,r=n.length;t<r;t++){let r=n[t];i(e.shapes,r)}else i(e.shapes,n)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(i(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0){if(Array.isArray(this.material)){let t=[];for(let n=0,r=this.material.length;n<r;n++)t.push(i(e.materials,this.material[n]));r.material=t}else r.material=i(e.materials,this.material)}if(this.children.length>0){r.children=[];for(let t=0;t<this.children.length;t++)r.children.push(this.children[t].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let t=0;t<this.animations.length;t++){let n=this.animations[t];r.animations.push(i(e.animations,n))}}if(t){let t=a(e.geometries),r=a(e.materials),i=a(e.textures),o=a(e.images),s=a(e.shapes),c=a(e.skeletons),l=a(e.animations),u=a(e.nodes);t.length>0&&(n.geometries=t),r.length>0&&(n.materials=r),i.length>0&&(n.textures=i),o.length>0&&(n.images=o),s.length>0&&(n.shapes=s),c.length>0&&(n.skeletons=c),l.length>0&&(n.animations=l),u.length>0&&(n.nodes=u)}return n.object=r,n;function a(e){let t=[];for(let n in e){let r=e[n];delete r.metadata,t.push(r)}return t}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let t=0;t<e.children.length;t++){let n=e.children[t];this.add(n.clone())}return this}};Yn.DEFAULT_UP=new V(0,1,0),Yn.DEFAULT_MATRIX_AUTO_UPDATE=!0,Yn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Xn=new V,Zn=new V,Qn=new V,$n=new V,er=new V,tr=new V,nr=new V,rr=new V,ir=new V,ar=new V,or=new Vt,sr=new Vt,cr=new Vt,lr=class e{constructor(e=new V,t=new V,n=new V){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,r){r.subVectors(n,t),Xn.subVectors(e,t),r.cross(Xn);let i=r.lengthSq();return i>0?r.multiplyScalar(1/Math.sqrt(i)):r.set(0,0,0)}static getBarycoord(e,t,n,r,i){Xn.subVectors(r,t),Zn.subVectors(n,t),Qn.subVectors(e,t);let a=Xn.dot(Xn),o=Xn.dot(Zn),s=Xn.dot(Qn),c=Zn.dot(Zn),l=Zn.dot(Qn),u=a*c-o*o;if(u===0)return i.set(0,0,0),null;let d=1/u,f=(c*s-o*l)*d,p=(a*l-o*s)*d;return i.set(1-f-p,p,f)}static containsPoint(e,t,n,r){return this.getBarycoord(e,t,n,r,$n)!==null&&$n.x>=0&&$n.y>=0&&$n.x+$n.y<=1}static getInterpolation(e,t,n,r,i,a,o,s){return this.getBarycoord(e,t,n,r,$n)===null?(s.x=0,s.y=0,`z`in s&&(s.z=0),`w`in s&&(s.w=0),null):(s.setScalar(0),s.addScaledVector(i,$n.x),s.addScaledVector(a,$n.y),s.addScaledVector(o,$n.z),s)}static getInterpolatedAttribute(e,t,n,r,i,a){return or.setScalar(0),sr.setScalar(0),cr.setScalar(0),or.fromBufferAttribute(e,t),sr.fromBufferAttribute(e,n),cr.fromBufferAttribute(e,r),a.setScalar(0),a.addScaledVector(or,i.x),a.addScaledVector(sr,i.y),a.addScaledVector(cr,i.z),a}static isFrontFacing(e,t,n,r){return Xn.subVectors(n,t),Zn.subVectors(e,t),Xn.cross(Zn).dot(r)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,r){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,n,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Xn.subVectors(this.c,this.b),Zn.subVectors(this.a,this.b),Xn.cross(Zn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return e.getNormal(this.a,this.b,this.c,t)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,n){return e.getBarycoord(t,this.a,this.b,this.c,n)}getInterpolation(t,n,r,i,a){return e.getInterpolation(t,this.a,this.b,this.c,n,r,i,a)}containsPoint(t){return e.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return e.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,r=this.b,i=this.c,a,o;er.subVectors(r,n),tr.subVectors(i,n),rr.subVectors(e,n);let s=er.dot(rr),c=tr.dot(rr);if(s<=0&&c<=0)return t.copy(n);ir.subVectors(e,r);let l=er.dot(ir),u=tr.dot(ir);if(l>=0&&u<=l)return t.copy(r);let d=s*u-l*c;if(d<=0&&s>=0&&l<=0)return a=s/(s-l),t.copy(n).addScaledVector(er,a);ar.subVectors(e,i);let f=er.dot(ar),p=tr.dot(ar);if(p>=0&&f<=p)return t.copy(i);let m=f*c-s*p;if(m<=0&&c>=0&&p<=0)return o=c/(c-p),t.copy(n).addScaledVector(tr,o);let h=l*p-f*u;if(h<=0&&u-l>=0&&f-p>=0)return nr.subVectors(i,r),o=(u-l)/(u-l+(f-p)),t.copy(r).addScaledVector(nr,o);let g=1/(h+m+d);return a=m*g,o=d*g,t.copy(n).addScaledVector(er,a).addScaledVector(tr,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},ur={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},dr={h:0,s:0,l:0},fr={h:0,s:0,l:0};function pr(e,t,n){return n<0&&(n+=1),n>1&&--n,n<1/6?e+(t-e)*6*n:n<1/2?t:n<2/3?e+(t-e)*6*(2/3-n):e}var U=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let t=e;t&&t.isColor?this.copy(t):typeof t==`number`?this.setHex(t):typeof t==`string`&&this.setStyle(t)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Fe){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,B.toWorkingColorSpace(this,t),this}setRGB(e,t,n,r=B.workingColorSpace){return this.r=e,this.g=t,this.b=n,B.toWorkingColorSpace(this,r),this}setHSL(e,t,n,r=B.workingColorSpace){if(e=Qe(e,1),t=Ze(t,0,1),n=Ze(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,i=2*n-r;this.r=pr(i,r,e+1/3),this.g=pr(i,r,e),this.b=pr(i,r,e-1/3)}return B.toWorkingColorSpace(this,r),this}setStyle(e,t=Fe){function n(t){t!==void 0&&parseFloat(t)<1&&console.warn(`THREE.Color: Alpha component of `+e+` will be ignored.`)}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let i,a=r[1],o=r[2];switch(a){case`rgb`:case`rgba`:if(i=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(i[4]),this.setRGB(Math.min(255,parseInt(i[1],10))/255,Math.min(255,parseInt(i[2],10))/255,Math.min(255,parseInt(i[3],10))/255,t);if(i=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(i[4]),this.setRGB(Math.min(100,parseInt(i[1],10))/100,Math.min(100,parseInt(i[2],10))/100,Math.min(100,parseInt(i[3],10))/100,t);break;case`hsl`:case`hsla`:if(i=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(i[4]),this.setHSL(parseFloat(i[1])/360,parseFloat(i[2])/100,parseFloat(i[3])/100,t);break;default:console.warn(`THREE.Color: Unknown color model `+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){let n=r[1],i=n.length;if(i===3)return this.setRGB(parseInt(n.charAt(0),16)/15,parseInt(n.charAt(1),16)/15,parseInt(n.charAt(2),16)/15,t);if(i===6)return this.setHex(parseInt(n,16),t);console.warn(`THREE.Color: Invalid hex color `+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Fe){let n=ur[e.toLowerCase()];return n===void 0?console.warn(`THREE.Color: Unknown color `+e):this.setHex(n,t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Mt(e.r),this.g=Mt(e.g),this.b=Mt(e.b),this}copyLinearToSRGB(e){return this.r=Nt(e.r),this.g=Nt(e.g),this.b=Nt(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Fe){return B.fromWorkingColorSpace(mr.copy(this),e),Math.round(Ze(mr.r*255,0,255))*65536+Math.round(Ze(mr.g*255,0,255))*256+Math.round(Ze(mr.b*255,0,255))}getHexString(e=Fe){return(`000000`+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=B.workingColorSpace){B.fromWorkingColorSpace(mr.copy(this),t);let n=mr.r,r=mr.g,i=mr.b,a=Math.max(n,r,i),o=Math.min(n,r,i),s,c,l=(o+a)/2;if(o===a)s=0,c=0;else{let e=a-o;switch(c=l<=.5?e/(a+o):e/(2-a-o),a){case n:s=(r-i)/e+(r<i?6:0);break;case r:s=(i-n)/e+2;break;case i:s=(n-r)/e+4}s/=6}return e.h=s,e.s=c,e.l=l,e}getRGB(e,t=B.workingColorSpace){return B.fromWorkingColorSpace(mr.copy(this),t),e.r=mr.r,e.g=mr.g,e.b=mr.b,e}getStyle(e=Fe){B.fromWorkingColorSpace(mr.copy(this),e);let t=mr.r,n=mr.g,r=mr.b;return e===`srgb`?`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(r*255)})`:`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`}offsetHSL(e,t,n){return this.getHSL(dr),this.setHSL(dr.h+e,dr.s+t,dr.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(dr),e.getHSL(fr);let n=tt(dr.h,fr.h,t),r=tt(dr.s,fr.s,t),i=tt(dr.l,fr.l,t);return this.setHSL(n,r,i),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,r=this.b,i=e.elements;return this.r=i[0]*t+i[3]*n+i[6]*r,this.g=i[1]*t+i[4]*n+i[7]*r,this.b=i[2]*t+i[5]*n+i[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},mr=new U;U.NAMES=ur;var hr=0,gr=class extends Ge{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:hr++}),this.uuid=Xe(),this.name=``,this.type=`Material`,this.blending=1,this.side=0,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=204,this.blendDst=205,this.blendEquation=100,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new U(0,0,0),this.blendAlpha=0,this.depthFunc=3,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=519,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=He,this.stencilZFail=He,this.stencilZPass=He,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}let r=this[t];r===void 0?console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`):r&&r.isColor?r.set(n):r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e==`string`;t&&(e={textures:{},images:{}});let n={metadata:{version:4.6,type:`Material`,generator:`Material.toJSON`}};n.uuid=this.uuid,n.type=this.type,this.name!==``&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==1&&(n.blending=this.blending),this.side!==0&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==204&&(n.blendSrc=this.blendSrc),this.blendDst!==205&&(n.blendDst=this.blendDst),this.blendEquation!==100&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==3&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==519&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==7680&&(n.stencilFail=this.stencilFail),this.stencilZFail!==7680&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==7680&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==`round`&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==`round`&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(e){let t=[];for(let n in e){let r=e[n];delete r.metadata,t.push(r)}return t}if(t){let t=r(e.textures),i=r(e.images);t.length>0&&(n.textures=t),i.length>0&&(n.images=i)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let e=t.length;n=Array(e);for(let r=0;r!==e;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:`dispose`})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn(`Material: onBuild() has been removed.`)}},_r=class extends gr{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type=`MeshBasicMaterial`,this.color=new U(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Mn,this.combine=0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap=`round`,this.wireframeLinejoin=`round`,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},vr=new V,yr=new R,br=class{constructor(e,t,n=!1){if(Array.isArray(e))throw TypeError(`THREE.BufferAttribute: array should be a Typed Array.`);this.isBufferAttribute=!0,this.name=``,this.array=e,this.itemSize=t,this.count=e===void 0?0:e.length/t,this.normalized=n,this.usage=Ue,this.updateRanges=[],this.gpuType=h,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let r=0,i=this.itemSize;r<i;r++)this.array[e+r]=t.array[n+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)yr.fromBufferAttribute(this,t),yr.applyMatrix3(e),this.setXY(t,yr.x,yr.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)vr.fromBufferAttribute(this,t),vr.applyMatrix3(e),this.setXYZ(t,vr.x,vr.y,vr.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)vr.fromBufferAttribute(this,t),vr.applyMatrix4(e),this.setXYZ(t,vr.x,vr.y,vr.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)vr.fromBufferAttribute(this,t),vr.applyNormalMatrix(e),this.setXYZ(t,vr.x,vr.y,vr.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)vr.fromBufferAttribute(this,t),vr.transformDirection(e),this.setXYZ(t,vr.x,vr.y,vr.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=gt(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=_t(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=gt(t,this.array)),t}setX(e,t){return this.normalized&&(t=_t(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=gt(t,this.array)),t}setY(e,t){return this.normalized&&(t=_t(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=gt(t,this.array)),t}setZ(e,t){return this.normalized&&(t=_t(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=gt(t,this.array)),t}setW(e,t){return this.normalized&&(t=_t(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=_t(t,this.array),n=_t(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,r){return e*=this.itemSize,this.normalized&&(t=_t(t,this.array),n=_t(n,this.array),r=_t(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this}setXYZW(e,t,n,r,i){return e*=this.itemSize,this.normalized&&(t=_t(t,this.array),n=_t(n,this.array),r=_t(r,this.array),i=_t(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this.array[e+3]=i,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==``&&(e.name=this.name),this.usage!==35044&&(e.usage=this.usage),e}},xr=class extends br{constructor(e,t,n){super(new Uint16Array(e),t,n)}},Sr=class extends br{constructor(e,t,n){super(new Uint32Array(e),t,n)}},W=class extends br{constructor(e,t,n){super(new Float32Array(e),t,n)}},Cr=0,wr=new H,Tr=new Yn,Er=new V,Dr=new Yt,Or=new Yt,kr=new V,Ar=class e extends Ge{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Cr++}),this.uuid=Xe(),this.name=``,this.type=`BufferGeometry`,this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return this.index=Array.isArray(e)?new(bt(e)?Sr:xr)(e,1):e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let t=new z().getNormalMatrix(e);n.applyNormalMatrix(t),n.needsUpdate=!0}let r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return wr.makeRotationFromQuaternion(e),this.applyMatrix4(wr),this}rotateX(e){return wr.makeRotationX(e),this.applyMatrix4(wr),this}rotateY(e){return wr.makeRotationY(e),this.applyMatrix4(wr),this}rotateZ(e){return wr.makeRotationZ(e),this.applyMatrix4(wr),this}translate(e,t,n){return wr.makeTranslation(e,t,n),this.applyMatrix4(wr),this}scale(e,t,n){return wr.makeScale(e,t,n),this.applyMatrix4(wr),this}lookAt(e){return Tr.lookAt(e),Tr.updateMatrix(),this.applyMatrix4(Tr.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Er).negate(),this.translate(Er.x,Er.y,Er.z),this}setFromPoints(e){let t=[];for(let n=0,r=e.length;n<r;n++){let r=e[n];t.push(r.x,r.y,r.z||0)}return this.setAttribute(`position`,new W(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Yt);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute)console.error(`THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.`,this),this.boundingBox.set(new V(-1/0,-1/0,-1/0),new V(1/0,1/0,1/0));else{if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let e=0,n=t.length;e<n;e++){let n=t[e];Dr.setFromBufferAttribute(n),this.morphTargetsRelative?(kr.addVectors(this.boundingBox.min,Dr.min),this.boundingBox.expandByPoint(kr),kr.addVectors(this.boundingBox.max,Dr.max),this.boundingBox.expandByPoint(kr)):(this.boundingBox.expandByPoint(Dr.min),this.boundingBox.expandByPoint(Dr.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error(`THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.`,this)}}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new mn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute)console.error(`THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.`,this),this.boundingSphere.set(new V,1/0);else if(e){let n=this.boundingSphere.center;if(Dr.setFromBufferAttribute(e),t)for(let e=0,n=t.length;e<n;e++){let n=t[e];Or.setFromBufferAttribute(n),this.morphTargetsRelative?(kr.addVectors(Dr.min,Or.min),Dr.expandByPoint(kr),kr.addVectors(Dr.max,Or.max),Dr.expandByPoint(kr)):(Dr.expandByPoint(Or.min),Dr.expandByPoint(Or.max))}Dr.getCenter(n);let r=0;for(let t=0,i=e.count;t<i;t++)kr.fromBufferAttribute(e,t),r=Math.max(r,n.distanceToSquared(kr));if(t)for(let i=0,a=t.length;i<a;i++){let a=t[i],o=this.morphTargetsRelative;for(let t=0,i=a.count;t<i;t++)kr.fromBufferAttribute(a,t),o&&(Er.fromBufferAttribute(e,t),kr.add(Er)),r=Math.max(r,n.distanceToSquared(kr))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error(`THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.`,this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error(`THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)`);return}let n=t.position,r=t.normal,i=t.uv;this.hasAttribute(`tangent`)===!1&&this.setAttribute(`tangent`,new br(new Float32Array(4*n.count),4));let a=this.getAttribute(`tangent`),o=[],s=[];for(let e=0;e<n.count;e++)o[e]=new V,s[e]=new V;let c=new V,l=new V,u=new V,d=new R,f=new R,p=new R,m=new V,h=new V;function g(e,t,r){c.fromBufferAttribute(n,e),l.fromBufferAttribute(n,t),u.fromBufferAttribute(n,r),d.fromBufferAttribute(i,e),f.fromBufferAttribute(i,t),p.fromBufferAttribute(i,r),l.sub(c),u.sub(c),f.sub(d),p.sub(d);let a=1/(f.x*p.y-p.x*f.y);isFinite(a)&&(m.copy(l).multiplyScalar(p.y).addScaledVector(u,-f.y).multiplyScalar(a),h.copy(u).multiplyScalar(f.x).addScaledVector(l,-p.x).multiplyScalar(a),o[e].add(m),o[t].add(m),o[r].add(m),s[e].add(h),s[t].add(h),s[r].add(h))}let _=this.groups;_.length===0&&(_=[{start:0,count:e.count}]);for(let t=0,n=_.length;t<n;++t){let n=_[t],r=n.start,i=n.count;for(let t=r,n=r+i;t<n;t+=3)g(e.getX(t+0),e.getX(t+1),e.getX(t+2))}let v=new V,y=new V,b=new V,x=new V;function S(e){b.fromBufferAttribute(r,e),x.copy(b);let t=o[e];v.copy(t),v.sub(b.multiplyScalar(b.dot(t))).normalize(),y.crossVectors(x,t);let n=y.dot(s[e])<0?-1:1;a.setXYZW(e,v.x,v.y,v.z,n)}for(let t=0,n=_.length;t<n;++t){let n=_[t],r=n.start,i=n.count;for(let t=r,n=r+i;t<n;t+=3)S(e.getX(t+0)),S(e.getX(t+1)),S(e.getX(t+2))}}computeVertexNormals(){let e=this.index,t=this.getAttribute(`position`);if(t!==void 0){let n=this.getAttribute(`normal`);if(n===void 0)n=new br(new Float32Array(t.count*3),3),this.setAttribute(`normal`,n);else for(let e=0,t=n.count;e<t;e++)n.setXYZ(e,0,0,0);let r=new V,i=new V,a=new V,o=new V,s=new V,c=new V,l=new V,u=new V;if(e)for(let d=0,f=e.count;d<f;d+=3){let f=e.getX(d+0),p=e.getX(d+1),m=e.getX(d+2);r.fromBufferAttribute(t,f),i.fromBufferAttribute(t,p),a.fromBufferAttribute(t,m),l.subVectors(a,i),u.subVectors(r,i),l.cross(u),o.fromBufferAttribute(n,f),s.fromBufferAttribute(n,p),c.fromBufferAttribute(n,m),o.add(l),s.add(l),c.add(l),n.setXYZ(f,o.x,o.y,o.z),n.setXYZ(p,s.x,s.y,s.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let e=0,o=t.count;e<o;e+=3)r.fromBufferAttribute(t,e+0),i.fromBufferAttribute(t,e+1),a.fromBufferAttribute(t,e+2),l.subVectors(a,i),u.subVectors(r,i),l.cross(u),n.setXYZ(e+0,l.x,l.y,l.z),n.setXYZ(e+1,l.x,l.y,l.z),n.setXYZ(e+2,l.x,l.y,l.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)kr.fromBufferAttribute(e,t),kr.normalize(),e.setXYZ(t,kr.x,kr.y,kr.z)}toNonIndexed(){function t(e,t){let n=e.array,r=e.itemSize,i=e.normalized,a=new n.constructor(t.length*r),o=0,s=0;for(let i=0,c=t.length;i<c;i++){o=e.isInterleavedBufferAttribute?t[i]*e.data.stride+e.offset:t[i]*r;for(let e=0;e<r;e++)a[s++]=n[o++]}return new br(a,r,i)}if(this.index===null)return console.warn(`THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed.`),this;let n=new e,r=this.index.array,i=this.attributes;for(let e in i){let a=i[e],o=t(a,r);n.setAttribute(e,o)}let a=this.morphAttributes;for(let e in a){let i=[],o=a[e];for(let e=0,n=o.length;e<n;e++){let n=o[e],a=t(n,r);i.push(a)}n.morphAttributes[e]=i}n.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let e=0,t=o.length;e<t;e++){let t=o[e];n.addGroup(t.start,t.count,t.materialIndex)}return n}toJSON(){let e={metadata:{version:4.6,type:`BufferGeometry`,generator:`BufferGeometry.toJSON`}};if(e.uuid=this.uuid,e.type=this.type,this.name!==``&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let t=this.parameters;for(let n in t)t[n]!==void 0&&(e[n]=t[n]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let t in n){let r=n[t];e.data.attributes[t]=r.toJSON(e.data)}let r={},i=!1;for(let t in this.morphAttributes){let n=this.morphAttributes[t],a=[];for(let t=0,r=n.length;t<r;t++){let r=n[t];a.push(r.toJSON(e.data))}a.length>0&&(r[t]=a,i=!0)}i&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone(t));let r=e.attributes;for(let e in r){let n=r[e];this.setAttribute(e,n.clone(t))}let i=e.morphAttributes;for(let e in i){let n=[],r=i[e];for(let e=0,i=r.length;e<i;e++)n.push(r[e].clone(t));this.morphAttributes[e]=n}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let e=0,t=a.length;e<t;e++){let t=a[e];this.addGroup(t.start,t.count,t.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let s=e.boundingSphere;return s!==null&&(this.boundingSphere=s.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:`dispose`})}},jr=new H,Mr=new Sn,Nr=new mn,Pr=new V,Fr=new V,Ir=new V,Lr=new V,Rr=new V,zr=new V,Br=new V,Vr=new V,G=class extends Yn{constructor(e=new Ar,t=new _r){super(),this.isMesh=!0,this.type=`Mesh`,this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){let n=e[t[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let e=0,t=n.length;e<t;e++){let t=n[e].name||String(e);this.morphTargetInfluences.push(0),this.morphTargetDictionary[t]=e}}}}getVertexPosition(e,t){let n=this.geometry,r=n.attributes.position,i=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(r,e);let o=this.morphTargetInfluences;if(i&&o){zr.set(0,0,0);for(let n=0,r=i.length;n<r;n++){let r=o[n],s=i[n];r!==0&&(Rr.fromBufferAttribute(s,e),a?zr.addScaledVector(Rr,r):zr.addScaledVector(Rr.sub(t),r))}t.add(zr)}return t}raycast(e,t){let n=this.geometry,r=this.material,i=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Nr.copy(n.boundingSphere),Nr.applyMatrix4(i),Mr.copy(e.ray).recast(e.near),!(Nr.containsPoint(Mr.origin)===!1&&(Mr.intersectSphere(Nr,Pr)===null||Mr.origin.distanceToSquared(Pr)>(e.far-e.near)**2))&&(jr.copy(i).invert(),Mr.copy(e.ray).applyMatrix4(jr),(n.boundingBox===null||Mr.intersectsBox(n.boundingBox)!==!1)&&this._computeIntersections(e,t,Mr)))}_computeIntersections(e,t,n){let r,i=this.geometry,a=this.material,o=i.index,s=i.attributes.position,c=i.attributes.uv,l=i.attributes.uv1,u=i.attributes.normal,d=i.groups,f=i.drawRange;if(o!==null){if(Array.isArray(a))for(let i=0,s=d.length;i<s;i++){let s=d[i],p=a[s.materialIndex],m=Math.max(s.start,f.start),h=Math.min(o.count,Math.min(s.start+s.count,f.start+f.count));for(let i=m,a=h;i<a;i+=3){let a=o.getX(i),d=o.getX(i+1),f=o.getX(i+2);r=Ur(this,p,e,n,c,l,u,a,d,f),r&&(r.faceIndex=Math.floor(i/3),r.face.materialIndex=s.materialIndex,t.push(r))}}else{let i=Math.max(0,f.start),s=Math.min(o.count,f.start+f.count);for(let d=i,f=s;d<f;d+=3){let i=o.getX(d),s=o.getX(d+1),f=o.getX(d+2);r=Ur(this,a,e,n,c,l,u,i,s,f),r&&(r.faceIndex=Math.floor(d/3),t.push(r))}}}else if(s!==void 0){if(Array.isArray(a))for(let i=0,o=d.length;i<o;i++){let o=d[i],p=a[o.materialIndex],m=Math.max(o.start,f.start),h=Math.min(s.count,Math.min(o.start+o.count,f.start+f.count));for(let i=m,a=h;i<a;i+=3){let a=i,s=i+1,d=i+2;r=Ur(this,p,e,n,c,l,u,a,s,d),r&&(r.faceIndex=Math.floor(i/3),r.face.materialIndex=o.materialIndex,t.push(r))}}else{let i=Math.max(0,f.start),o=Math.min(s.count,f.start+f.count);for(let s=i,d=o;s<d;s+=3){let i=s,o=s+1,d=s+2;r=Ur(this,a,e,n,c,l,u,i,o,d),r&&(r.faceIndex=Math.floor(s/3),t.push(r))}}}}};function Hr(e,t,n,r,i,a,o,s){let c;if(c=t.side===1?r.intersectTriangle(o,a,i,!0,s):r.intersectTriangle(i,a,o,t.side===0,s),c===null)return null;Vr.copy(s),Vr.applyMatrix4(e.matrixWorld);let l=n.ray.origin.distanceTo(Vr);return l<n.near||l>n.far?null:{distance:l,point:Vr.clone(),object:e}}function Ur(e,t,n,r,i,a,o,s,c,l){e.getVertexPosition(s,Fr),e.getVertexPosition(c,Ir),e.getVertexPosition(l,Lr);let u=Hr(e,t,n,r,Fr,Ir,Lr,Br);if(u){let e=new V;lr.getBarycoord(Br,Fr,Ir,Lr,e),i&&(u.uv=lr.getInterpolatedAttribute(i,s,c,l,e,new R)),a&&(u.uv1=lr.getInterpolatedAttribute(a,s,c,l,e,new R)),o&&(u.normal=lr.getInterpolatedAttribute(o,s,c,l,e,new V),u.normal.dot(r.direction)>0&&u.normal.multiplyScalar(-1));let t={a:s,b:c,c:l,normal:new V,materialIndex:0};lr.getNormal(Fr,Ir,Lr,t.normal),u.face=t,u.barycoord=e}return u}var K=class e extends Ar{constructor(e=1,t=1,n=1,r=1,i=1,a=1){super(),this.type=`BoxGeometry`,this.parameters={width:e,height:t,depth:n,widthSegments:r,heightSegments:i,depthSegments:a};let o=this;r=Math.floor(r),i=Math.floor(i),a=Math.floor(a);let s=[],c=[],l=[],u=[],d=0,f=0;p(`z`,`y`,`x`,-1,-1,n,t,e,a,i,0),p(`z`,`y`,`x`,1,-1,n,t,-e,a,i,1),p(`x`,`z`,`y`,1,1,e,n,t,r,a,2),p(`x`,`z`,`y`,1,-1,e,n,-t,r,a,3),p(`x`,`y`,`z`,1,-1,e,t,n,r,i,4),p(`x`,`y`,`z`,-1,-1,e,t,-n,r,i,5),this.setIndex(s),this.setAttribute(`position`,new W(c,3)),this.setAttribute(`normal`,new W(l,3)),this.setAttribute(`uv`,new W(u,2));function p(e,t,n,r,i,a,p,m,h,g,_){let v=a/h,y=p/g,b=a/2,x=p/2,S=m/2,C=h+1,w=g+1,T=0,E=0,D=new V;for(let a=0;a<w;a++){let o=a*y-x;for(let s=0;s<C;s++)D[e]=(s*v-b)*r,D[t]=o*i,D[n]=S,c.push(D.x,D.y,D.z),D[e]=0,D[t]=0,D[n]=m>0?1:-1,l.push(D.x,D.y,D.z),u.push(s/h),u.push(1-a/g),T+=1}for(let e=0;e<g;e++)for(let t=0;t<h;t++){let n=d+t+C*e,r=d+t+C*(e+1),i=d+(t+1)+C*(e+1),a=d+(t+1)+C*e;s.push(n,r,a),s.push(r,i,a),E+=6}o.addGroup(f,E,_),f+=E,d+=T}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};function Wr(e){let t={};for(let n in e){t[n]={};for(let r in e[n]){let i=e[n][r];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn(`UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms().`),t[n][r]=null):t[n][r]=i.clone():Array.isArray(i)?t[n][r]=i.slice():t[n][r]=i}}return t}function Gr(e){let t={};for(let n=0;n<e.length;n++){let r=Wr(e[n]);for(let e in r)t[e]=r[e]}return t}function Kr(e){let t=[];for(let n=0;n<e.length;n++)t.push(e[n].clone());return t}function qr(e){let t=e.getRenderTarget();return t===null?e.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:B.workingColorSpace}var Jr={clone:Wr,merge:Gr},Yr=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Xr=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Zr=class extends gr{constructor(e){super(),this.isShaderMaterial=!0,this.type=`ShaderMaterial`,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Yr,this.fragmentShader=Xr,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Wr(e.uniforms),this.uniformsGroups=Kr(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let n in this.uniforms){let r=this.uniforms[n].value;r&&r.isTexture?t.uniforms[n]={type:`t`,value:r.toJSON(e).uuid}:r&&r.isColor?t.uniforms[n]={type:`c`,value:r.getHex()}:r&&r.isVector2?t.uniforms[n]={type:`v2`,value:r.toArray()}:r&&r.isVector3?t.uniforms[n]={type:`v3`,value:r.toArray()}:r&&r.isVector4?t.uniforms[n]={type:`v4`,value:r.toArray()}:r&&r.isMatrix3?t.uniforms[n]={type:`m3`,value:r.toArray()}:r&&r.isMatrix4?t.uniforms[n]={type:`m4`,value:r.toArray()}:t.uniforms[n]={value:r}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let e in this.extensions)this.extensions[e]===!0&&(n[e]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}},Qr=class extends Yn{constructor(){super(),this.isCamera=!0,this.type=`Camera`,this.matrixWorldInverse=new H,this.projectionMatrix=new H,this.projectionMatrixInverse=new H,this.coordinateSystem=We}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},$r=new V,ei=new R,ti=new R,ni=class extends Qr{constructor(e=50,t=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type=`PerspectiveCamera`,this.fov=e,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=Ye*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(Je*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Ye*2*Math.atan(Math.tan(Je*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){$r.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set($r.x,$r.y).multiplyScalar(-e/$r.z),$r.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set($r.x,$r.y).multiplyScalar(-e/$r.z)}getViewSize(e,t){return this.getViewBounds(e,ei,ti),t.subVectors(ti,ei)}setViewOffset(e,t,n,r,i,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=i,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(Je*.5*this.fov)/this.zoom,n=2*t,r=this.aspect*n,i=-.5*r,a=this.view;if(this.view!==null&&this.view.enabled){let e=a.fullWidth,o=a.fullHeight;i+=a.offsetX*r/e,t-=a.offsetY*n/o,r*=a.width/e,n*=a.height/o}let o=this.filmOffset;o!==0&&(i+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(i,i+r,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},ri=-90,ii=1,ai=class extends Yn{constructor(e,t,n){super(),this.type=`CubeCamera`,this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let r=new ni(ri,ii,e,t);r.layers=this.layers,this.add(r);let i=new ni(ri,ii,e,t);i.layers=this.layers,this.add(i);let a=new ni(ri,ii,e,t);a.layers=this.layers,this.add(a);let o=new ni(ri,ii,e,t);o.layers=this.layers,this.add(o);let s=new ni(ri,ii,e,t);s.layers=this.layers,this.add(s);let c=new ni(ri,ii,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,r,i,a,o,s]=t;for(let e of t)this.remove(e);if(e===2e3)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),i.up.set(0,0,-1),i.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),s.up.set(0,1,0),s.lookAt(0,0,-1);else if(e===2001)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),i.up.set(0,0,1),i.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),s.up.set(0,-1,0),s.lookAt(0,0,-1);else throw Error(`THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: `+e);for(let e of t)this.add(e),e.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[i,a,o,s,c,l]=this.children,u=e.getRenderTarget(),d=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),p=e.xr.enabled;e.xr.enabled=!1;let m=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,r),e.render(t,i),e.setRenderTarget(n,1,r),e.render(t,a),e.setRenderTarget(n,2,r),e.render(t,o),e.setRenderTarget(n,3,r),e.render(t,s),e.setRenderTarget(n,4,r),e.render(t,c),n.texture.generateMipmaps=m,e.setRenderTarget(n,5,r),e.render(t,l),e.setRenderTarget(u,d,f),e.xr.enabled=p,n.texture.needsPMREMUpdate=!0}},oi=class extends Bt{constructor(e,t,n,r,i,a,o,s,c,l){e=e===void 0?[]:e,t=t===void 0?301:t,super(e,t,n,r,i,a,o,s,c,l),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},si=class extends Ut{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},r=[n,n,n,n,n,n];this.texture=new oi(r,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0&&t.generateMipmaps,this.texture.minFilter=t.minFilter===void 0?o:t.minFilter}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new K(5,5,5),i=new Zr({name:`CubemapFromEquirect`,uniforms:Wr(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:1,blending:0});i.uniforms.tEquirect.value=t;let a=new G(r,i),s=t.minFilter;return t.minFilter===1008&&(t.minFilter=o),new ai(1,10,this).update(e,a),t.minFilter=s,a.geometry.dispose(),a.material.dispose(),this}clear(e,t,n,r){let i=e.getRenderTarget();for(let i=0;i<6;i++)e.setRenderTarget(this,i),e.clear(t,n,r);e.setRenderTarget(i)}},ci=new V,li=new V,ui=new z,di=class{constructor(e=new V(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,r){return this.normal.set(e,t,n),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let r=ci.subVectors(n,t).cross(li.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){let n=e.delta(ci),r=this.normal.dot(n);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let i=-(e.start.dot(this.normal)+this.constant)/r;return i<0||i>1?null:t.copy(e.start).addScaledVector(n,i)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||ui.getNormalMatrix(e),r=this.coplanarPoint(ci).applyMatrix4(e),i=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(i),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},fi=new mn,pi=new V,mi=class{constructor(e=new di,t=new di,n=new di,r=new di,i=new di,a=new di){this.planes=[e,t,n,r,i,a]}set(e,t,n,r,i,a){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(r),o[4].copy(i),o[5].copy(a),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=We){let n=this.planes,r=e.elements,i=r[0],a=r[1],o=r[2],s=r[3],c=r[4],l=r[5],u=r[6],d=r[7],f=r[8],p=r[9],m=r[10],h=r[11],g=r[12],_=r[13],v=r[14],y=r[15];if(n[0].setComponents(s-i,d-c,h-f,y-g).normalize(),n[1].setComponents(s+i,d+c,h+f,y+g).normalize(),n[2].setComponents(s+a,d+l,h+p,y+_).normalize(),n[3].setComponents(s-a,d-l,h-p,y-_).normalize(),n[4].setComponents(s-o,d-u,h-m,y-v).normalize(),t===2e3)n[5].setComponents(s+o,d+u,h+m,y+v).normalize();else if(t===2001)n[5].setComponents(o,u,m,v).normalize();else throw Error(`THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: `+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),fi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),fi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(fi)}intersectsSprite(e){return fi.center.set(0,0,0),fi.radius=.7071067811865476,fi.applyMatrix4(e.matrixWorld),this.intersectsSphere(fi)}intersectsSphere(e){let t=this.planes,n=e.center,r=-e.radius;for(let e=0;e<6;e++)if(t[e].distanceToPoint(n)<r)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let r=t[n];if(pi.x=r.normal.x>0?e.max.x:e.min.x,pi.y=r.normal.y>0?e.max.y:e.min.y,pi.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(pi)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function hi(){let e=null,t=!1,n=null,r=null;function i(t,a){n(t,a),r=e.requestAnimationFrame(i)}return{start:function(){t!==!0&&n!==null&&(r=e.requestAnimationFrame(i),t=!0)},stop:function(){e.cancelAnimationFrame(r),t=!1},setAnimationLoop:function(e){n=e},setContext:function(t){e=t}}}function gi(e){let t=new WeakMap;function n(t,n){let r=t.array,i=t.usage,a=r.byteLength,o=e.createBuffer();e.bindBuffer(n,o),e.bufferData(n,r,i),t.onUploadCallback();let s;if(r instanceof Float32Array)s=e.FLOAT;else if(r instanceof Uint16Array)s=t.isFloat16BufferAttribute?e.HALF_FLOAT:e.UNSIGNED_SHORT;else if(r instanceof Int16Array)s=e.SHORT;else if(r instanceof Uint32Array)s=e.UNSIGNED_INT;else if(r instanceof Int32Array)s=e.INT;else if(r instanceof Int8Array)s=e.BYTE;else if(r instanceof Uint8Array)s=e.UNSIGNED_BYTE;else if(r instanceof Uint8ClampedArray)s=e.UNSIGNED_BYTE;else throw Error(`THREE.WebGLAttributes: Unsupported buffer data format: `+r);return{buffer:o,type:s,bytesPerElement:r.BYTES_PER_ELEMENT,version:t.version,size:a}}function r(t,n,r){let i=n.array,a=n.updateRanges;if(e.bindBuffer(r,t),a.length===0)e.bufferSubData(r,0,i);else{a.sort((e,t)=>e.start-t.start);let t=0;for(let e=1;e<a.length;e++){let n=a[t],r=a[e];r.start<=n.start+n.count+1?n.count=Math.max(n.count,r.start+r.count-n.start):(++t,a[t]=r)}a.length=t+1;for(let t=0,n=a.length;t<n;t++){let n=a[t];e.bufferSubData(r,n.start*i.BYTES_PER_ELEMENT,i,n.start,n.count)}n.clearUpdateRanges()}n.onUploadCallback()}function i(e){return e.isInterleavedBufferAttribute&&(e=e.data),t.get(e)}function a(n){n.isInterleavedBufferAttribute&&(n=n.data);let r=t.get(n);r&&(e.deleteBuffer(r.buffer),t.delete(n))}function o(e,i){if(e.isInterleavedBufferAttribute&&(e=e.data),e.isGLBufferAttribute){let n=t.get(e);(!n||n.version<e.version)&&t.set(e,{buffer:e.buffer,type:e.type,bytesPerElement:e.elementSize,version:e.version});return}let a=t.get(e);if(a===void 0)t.set(e,n(e,i));else if(a.version<e.version){if(a.size!==e.array.byteLength)throw Error(`THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.`);r(a.buffer,e,i),a.version=e.version}}return{get:i,remove:a,update:o}}var _i=class e extends Ar{constructor(e=1,t=1,n=1,r=1){super(),this.type=`PlaneGeometry`,this.parameters={width:e,height:t,widthSegments:n,heightSegments:r};let i=e/2,a=t/2,o=Math.floor(n),s=Math.floor(r),c=o+1,l=s+1,u=e/o,d=t/s,f=[],p=[],m=[],h=[];for(let e=0;e<l;e++){let t=e*d-a;for(let n=0;n<c;n++){let r=n*u-i;p.push(r,-t,0),m.push(0,0,1),h.push(n/o),h.push(1-e/s)}}for(let e=0;e<s;e++)for(let t=0;t<o;t++){let n=t+c*e,r=t+c*(e+1),i=t+1+c*(e+1),a=t+1+c*e;f.push(n,r,a),f.push(r,i,a)}this.setIndex(f),this.setAttribute(`position`,new W(p,3)),this.setAttribute(`normal`,new W(m,3)),this.setAttribute(`uv`,new W(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.width,t.height,t.widthSegments,t.heightSegments)}},q={alphahash_fragment:`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,alphahash_pars_fragment:`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,alphamap_fragment:`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,alphamap_pars_fragment:`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,alphatest_fragment:`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,alphatest_pars_fragment:`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,aomap_fragment:`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,aomap_pars_fragment:`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,batching_pars_vertex:`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,batching_vertex:`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,begin_vertex:`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,beginnormal_vertex:`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,bsdfs:`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,iridescence_fragment:`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,bumpmap_pars_fragment:`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,clipping_planes_fragment:`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,clipping_planes_pars_fragment:`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,clipping_planes_pars_vertex:`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,clipping_planes_vertex:`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,color_fragment:`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,color_pars_fragment:`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,color_pars_vertex:`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,color_vertex:`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,common:`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,cube_uv_reflection_fragment:`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,defaultnormal_vertex:`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,displacementmap_pars_vertex:`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,displacementmap_vertex:`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,emissivemap_fragment:`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,emissivemap_pars_fragment:`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,colorspace_fragment:`gl_FragColor = linearToOutputTexel( gl_FragColor );`,colorspace_pars_fragment:`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,envmap_fragment:`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,envmap_common_pars_fragment:`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,envmap_pars_fragment:`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,envmap_pars_vertex:`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,envmap_physical_pars_fragment:`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,envmap_vertex:`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,fog_vertex:`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,fog_pars_vertex:`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,fog_fragment:`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,fog_pars_fragment:`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,gradientmap_pars_fragment:`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,lightmap_pars_fragment:`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,lights_lambert_fragment:`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,lights_lambert_pars_fragment:`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,lights_pars_begin:`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,lights_toon_fragment:`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,lights_toon_pars_fragment:`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,lights_phong_fragment:`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,lights_phong_pars_fragment:`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,lights_physical_fragment:`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,lights_physical_pars_fragment:`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,lights_fragment_begin:`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,lights_fragment_maps:`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,lights_fragment_end:`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,logdepthbuf_fragment:`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,logdepthbuf_pars_fragment:`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,logdepthbuf_pars_vertex:`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,logdepthbuf_vertex:`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,map_fragment:`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,map_pars_fragment:`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,map_particle_fragment:`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,map_particle_pars_fragment:`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,metalnessmap_fragment:`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,metalnessmap_pars_fragment:`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,morphinstance_vertex:`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,morphcolor_vertex:`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,morphnormal_vertex:`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,morphtarget_pars_vertex:`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,morphtarget_vertex:`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,normal_fragment_begin:`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,normal_fragment_maps:`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,normal_pars_fragment:`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,normal_pars_vertex:`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,normal_vertex:`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,normalmap_pars_fragment:`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,clearcoat_normal_fragment_begin:`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,clearcoat_normal_fragment_maps:`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,clearcoat_pars_fragment:`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,iridescence_pars_fragment:`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,opaque_fragment:`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,packing:`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,premultiplied_alpha_fragment:`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,project_vertex:`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,dithering_fragment:`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,dithering_pars_fragment:`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,roughnessmap_fragment:`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,roughnessmap_pars_fragment:`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,shadowmap_pars_fragment:`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,shadowmap_pars_vertex:`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,shadowmap_vertex:`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,shadowmask_pars_fragment:`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,skinbase_vertex:`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,skinning_pars_vertex:`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,skinning_vertex:`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,skinnormal_vertex:`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,specularmap_fragment:`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,specularmap_pars_fragment:`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,tonemapping_fragment:`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,tonemapping_pars_fragment:`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,transmission_fragment:`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,transmission_pars_fragment:`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,uv_pars_fragment:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,uv_pars_vertex:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,uv_vertex:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,worldpos_vertex:`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,background_vert:`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,background_frag:`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,backgroundCube_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,backgroundCube_frag:`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,cube_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,cube_frag:`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,depth_vert:`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,depth_frag:`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,distanceRGBA_vert:`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,distanceRGBA_frag:`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,equirect_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,equirect_frag:`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,linedashed_vert:`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,linedashed_frag:`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,meshbasic_vert:`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,meshbasic_frag:`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshlambert_vert:`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,meshlambert_frag:`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshmatcap_vert:`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,meshmatcap_frag:`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshnormal_vert:`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,meshnormal_frag:`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,meshphong_vert:`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,meshphong_frag:`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshphysical_vert:`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,meshphysical_frag:`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshtoon_vert:`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,meshtoon_frag:`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,points_vert:`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,points_frag:`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,shadow_vert:`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,shadow_frag:`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,sprite_vert:`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,sprite_frag:`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`},J={common:{diffuse:{value:new U(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new z},alphaMap:{value:null},alphaMapTransform:{value:new z},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new z}},envmap:{envMap:{value:null},envMapRotation:{value:new z},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new z}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new z}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new z},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new z},normalScale:{value:new R(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new z},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new z}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new z}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new z}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new U(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new U(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new z},alphaTest:{value:0},uvTransform:{value:new z}},sprite:{diffuse:{value:new U(16777215)},opacity:{value:1},center:{value:new R(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new z},alphaMap:{value:null},alphaMapTransform:{value:new z},alphaTest:{value:0}}},vi={basic:{uniforms:Gr([J.common,J.specularmap,J.envmap,J.aomap,J.lightmap,J.fog]),vertexShader:q.meshbasic_vert,fragmentShader:q.meshbasic_frag},lambert:{uniforms:Gr([J.common,J.specularmap,J.envmap,J.aomap,J.lightmap,J.emissivemap,J.bumpmap,J.normalmap,J.displacementmap,J.fog,J.lights,{emissive:{value:new U(0)}}]),vertexShader:q.meshlambert_vert,fragmentShader:q.meshlambert_frag},phong:{uniforms:Gr([J.common,J.specularmap,J.envmap,J.aomap,J.lightmap,J.emissivemap,J.bumpmap,J.normalmap,J.displacementmap,J.fog,J.lights,{emissive:{value:new U(0)},specular:{value:new U(1118481)},shininess:{value:30}}]),vertexShader:q.meshphong_vert,fragmentShader:q.meshphong_frag},standard:{uniforms:Gr([J.common,J.envmap,J.aomap,J.lightmap,J.emissivemap,J.bumpmap,J.normalmap,J.displacementmap,J.roughnessmap,J.metalnessmap,J.fog,J.lights,{emissive:{value:new U(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:q.meshphysical_vert,fragmentShader:q.meshphysical_frag},toon:{uniforms:Gr([J.common,J.aomap,J.lightmap,J.emissivemap,J.bumpmap,J.normalmap,J.displacementmap,J.gradientmap,J.fog,J.lights,{emissive:{value:new U(0)}}]),vertexShader:q.meshtoon_vert,fragmentShader:q.meshtoon_frag},matcap:{uniforms:Gr([J.common,J.bumpmap,J.normalmap,J.displacementmap,J.fog,{matcap:{value:null}}]),vertexShader:q.meshmatcap_vert,fragmentShader:q.meshmatcap_frag},points:{uniforms:Gr([J.points,J.fog]),vertexShader:q.points_vert,fragmentShader:q.points_frag},dashed:{uniforms:Gr([J.common,J.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:q.linedashed_vert,fragmentShader:q.linedashed_frag},depth:{uniforms:Gr([J.common,J.displacementmap]),vertexShader:q.depth_vert,fragmentShader:q.depth_frag},normal:{uniforms:Gr([J.common,J.bumpmap,J.normalmap,J.displacementmap,{opacity:{value:1}}]),vertexShader:q.meshnormal_vert,fragmentShader:q.meshnormal_frag},sprite:{uniforms:Gr([J.sprite,J.fog]),vertexShader:q.sprite_vert,fragmentShader:q.sprite_frag},background:{uniforms:{uvTransform:{value:new z},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:q.background_vert,fragmentShader:q.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new z}},vertexShader:q.backgroundCube_vert,fragmentShader:q.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:q.cube_vert,fragmentShader:q.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:q.equirect_vert,fragmentShader:q.equirect_frag},distanceRGBA:{uniforms:Gr([J.common,J.displacementmap,{referencePosition:{value:new V},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:q.distanceRGBA_vert,fragmentShader:q.distanceRGBA_frag},shadow:{uniforms:Gr([J.lights,J.fog,{color:{value:new U(0)},opacity:{value:1}}]),vertexShader:q.shadow_vert,fragmentShader:q.shadow_frag}};vi.physical={uniforms:Gr([vi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new z},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new z},clearcoatNormalScale:{value:new R(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new z},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new z},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new z},sheen:{value:0},sheenColor:{value:new U(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new z},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new z},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new z},transmissionSamplerSize:{value:new R},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new z},attenuationDistance:{value:0},attenuationColor:{value:new U(0)},specularColor:{value:new U(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new z},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new z},anisotropyVector:{value:new R},anisotropyMap:{value:null},anisotropyMapTransform:{value:new z}}]),vertexShader:q.meshphysical_vert,fragmentShader:q.meshphysical_frag};var yi={r:0,b:0,g:0},bi=new Mn,xi=new H;function Si(e,t,n,r,i,a,o){let s=new U(0),c=a===!0?0:1,l,u,d=null,f=0,p=null;function m(e){let r=e.isScene===!0?e.background:null;return r&&r.isTexture&&(r=(e.backgroundBlurriness>0?n:t).get(r)),r}function h(t){let n=!1,i=m(t);i===null?_(s,c):i&&i.isColor&&(_(i,1),n=!0);let a=e.xr.getEnvironmentBlendMode();a===`additive`?r.buffers.color.setClear(0,0,0,1,o):a===`alpha-blend`&&r.buffers.color.setClear(0,0,0,0,o),(e.autoClear||n)&&(r.buffers.depth.setTest(!0),r.buffers.depth.setMask(!0),r.buffers.color.setMask(!0),e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil))}function g(t,n){let r=m(n);r&&(r.isCubeTexture||r.mapping===306)?(u===void 0&&(u=new G(new K(1,1,1),new Zr({name:`BackgroundCubeMaterial`,uniforms:Wr(vi.backgroundCube.uniforms),vertexShader:vi.backgroundCube.vertexShader,fragmentShader:vi.backgroundCube.fragmentShader,side:1,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute(`normal`),u.geometry.deleteAttribute(`uv`),u.onBeforeRender=function(e,t,n){this.matrixWorld.copyPosition(n.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(u)),bi.copy(n.backgroundRotation),bi.x*=-1,bi.y*=-1,bi.z*=-1,r.isCubeTexture&&r.isRenderTargetTexture===!1&&(bi.y*=-1,bi.z*=-1),u.material.uniforms.envMap.value=r,u.material.uniforms.flipEnvMap.value=r.isCubeTexture&&r.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=n.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=n.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(xi.makeRotationFromEuler(bi)),u.material.toneMapped=B.getTransfer(r.colorSpace)!==Be,(d!==r||f!==r.version||p!==e.toneMapping)&&(u.material.needsUpdate=!0,d=r,f=r.version,p=e.toneMapping),u.layers.enableAll(),t.unshift(u,u.geometry,u.material,0,0,null)):r&&r.isTexture&&(l===void 0&&(l=new G(new _i(2,2),new Zr({name:`BackgroundMaterial`,uniforms:Wr(vi.background.uniforms),vertexShader:vi.background.vertexShader,fragmentShader:vi.background.fragmentShader,side:0,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute(`normal`),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=r,l.material.uniforms.backgroundIntensity.value=n.backgroundIntensity,l.material.toneMapped=B.getTransfer(r.colorSpace)!==Be,r.matrixAutoUpdate===!0&&r.updateMatrix(),l.material.uniforms.uvTransform.value.copy(r.matrix),(d!==r||f!==r.version||p!==e.toneMapping)&&(l.material.needsUpdate=!0,d=r,f=r.version,p=e.toneMapping),l.layers.enableAll(),t.unshift(l,l.geometry,l.material,0,0,null))}function _(t,n){t.getRGB(yi,qr(e)),r.buffers.color.setClear(yi.r,yi.g,yi.b,n,o)}return{getClearColor:function(){return s},setClearColor:function(e,t=1){s.set(e),c=t,_(s,c)},getClearAlpha:function(){return c},setClearAlpha:function(e){c=e,_(s,c)},render:h,addToRenderList:g}}function Ci(e,t){let n=e.getParameter(e.MAX_VERTEX_ATTRIBS),r={},i=f(null),a=i,o=!1;function s(n,r,i,s,c){let u=!1,f=d(s,i,r);a!==f&&(a=f,l(a.object)),u=p(n,s,i,c),u&&m(n,s,i,c),c!==null&&t.update(c,e.ELEMENT_ARRAY_BUFFER),(u||o)&&(o=!1,b(n,r,i,s),c!==null&&e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,t.get(c).buffer))}function c(){return e.createVertexArray()}function l(t){return e.bindVertexArray(t)}function u(t){return e.deleteVertexArray(t)}function d(e,t,n){let i=n.wireframe===!0,a=r[e.id];a===void 0&&(a={},r[e.id]=a);let o=a[t.id];o===void 0&&(o={},a[t.id]=o);let s=o[i];return s===void 0&&(s=f(c()),o[i]=s),s}function f(e){let t=[],r=[],i=[];for(let e=0;e<n;e++)t[e]=0,r[e]=0,i[e]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:t,enabledAttributes:r,attributeDivisors:i,object:e,attributes:{},index:null}}function p(e,t,n,r){let i=a.attributes,o=t.attributes,s=0,c=n.getAttributes();for(let t in c)if(c[t].location>=0){let n=i[t],r=o[t];if(r===void 0&&(t===`instanceMatrix`&&e.instanceMatrix&&(r=e.instanceMatrix),t===`instanceColor`&&e.instanceColor&&(r=e.instanceColor)),n===void 0||n.attribute!==r||r&&n.data!==r.data)return!0;s++}return a.attributesNum!==s||a.index!==r}function m(e,t,n,r){let i={},o=t.attributes,s=0,c=n.getAttributes();for(let t in c)if(c[t].location>=0){let n=o[t];n===void 0&&(t===`instanceMatrix`&&e.instanceMatrix&&(n=e.instanceMatrix),t===`instanceColor`&&e.instanceColor&&(n=e.instanceColor));let r={};r.attribute=n,n&&n.data&&(r.data=n.data),i[t]=r,s++}a.attributes=i,a.attributesNum=s,a.index=r}function h(){let e=a.newAttributes;for(let t=0,n=e.length;t<n;t++)e[t]=0}function g(e){_(e,0)}function _(t,n){let r=a.newAttributes,i=a.enabledAttributes,o=a.attributeDivisors;r[t]=1,i[t]===0&&(e.enableVertexAttribArray(t),i[t]=1),o[t]!==n&&(e.vertexAttribDivisor(t,n),o[t]=n)}function v(){let t=a.newAttributes,n=a.enabledAttributes;for(let r=0,i=n.length;r<i;r++)n[r]!==t[r]&&(e.disableVertexAttribArray(r),n[r]=0)}function y(t,n,r,i,a,o,s){s===!0?e.vertexAttribIPointer(t,n,r,a,o):e.vertexAttribPointer(t,n,r,i,a,o)}function b(n,r,i,a){h();let o=a.attributes,s=i.getAttributes(),c=r.defaultAttributeValues;for(let r in s){let i=s[r];if(i.location>=0){let s=o[r];if(s===void 0&&(r===`instanceMatrix`&&n.instanceMatrix&&(s=n.instanceMatrix),r===`instanceColor`&&n.instanceColor&&(s=n.instanceColor)),s!==void 0){let r=s.normalized,o=s.itemSize,c=t.get(s);if(c===void 0)continue;let l=c.buffer,u=c.type,d=c.bytesPerElement,f=u===e.INT||u===e.UNSIGNED_INT||s.gpuType===1013;if(s.isInterleavedBufferAttribute){let t=s.data,c=t.stride,p=s.offset;if(t.isInstancedInterleavedBuffer){for(let e=0;e<i.locationSize;e++)_(i.location+e,t.meshPerAttribute);n.isInstancedMesh!==!0&&a._maxInstanceCount===void 0&&(a._maxInstanceCount=t.meshPerAttribute*t.count)}else for(let e=0;e<i.locationSize;e++)g(i.location+e);e.bindBuffer(e.ARRAY_BUFFER,l);for(let e=0;e<i.locationSize;e++)y(i.location+e,o/i.locationSize,u,r,c*d,(p+o/i.locationSize*e)*d,f)}else{if(s.isInstancedBufferAttribute){for(let e=0;e<i.locationSize;e++)_(i.location+e,s.meshPerAttribute);n.isInstancedMesh!==!0&&a._maxInstanceCount===void 0&&(a._maxInstanceCount=s.meshPerAttribute*s.count)}else for(let e=0;e<i.locationSize;e++)g(i.location+e);e.bindBuffer(e.ARRAY_BUFFER,l);for(let e=0;e<i.locationSize;e++)y(i.location+e,o/i.locationSize,u,r,o*d,o/i.locationSize*e*d,f)}}else if(c!==void 0){let t=c[r];if(t!==void 0)switch(t.length){case 2:e.vertexAttrib2fv(i.location,t);break;case 3:e.vertexAttrib3fv(i.location,t);break;case 4:e.vertexAttrib4fv(i.location,t);break;default:e.vertexAttrib1fv(i.location,t)}}}}v()}function x(){w();for(let e in r){let t=r[e];for(let e in t){let n=t[e];for(let e in n)u(n[e].object),delete n[e];delete t[e]}delete r[e]}}function S(e){if(r[e.id]===void 0)return;let t=r[e.id];for(let e in t){let n=t[e];for(let e in n)u(n[e].object),delete n[e];delete t[e]}delete r[e.id]}function C(e){for(let t in r){let n=r[t];if(n[e.id]===void 0)continue;let i=n[e.id];for(let e in i)u(i[e].object),delete i[e];delete n[e.id]}}function w(){T(),o=!0,a!==i&&(a=i,l(a.object))}function T(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:s,reset:w,resetDefaultState:T,dispose:x,releaseStatesOfGeometry:S,releaseStatesOfProgram:C,initAttributes:h,enableAttribute:g,disableUnusedAttributes:v}}function wi(e,t,n){let r;function i(e){r=e}function a(t,i){e.drawArrays(r,t,i),n.update(i,r,1)}function o(t,i,a){a!==0&&(e.drawArraysInstanced(r,t,i,a),n.update(i,r,a))}function s(e,i,a){if(a===0)return;t.get(`WEBGL_multi_draw`).multiDrawArraysWEBGL(r,e,0,i,0,a);let o=0;for(let e=0;e<a;e++)o+=i[e];n.update(o,r,1)}function c(e,i,a,s){if(a===0)return;let c=t.get(`WEBGL_multi_draw`);if(c===null)for(let t=0;t<e.length;t++)o(e[t],i[t],s[t]);else{c.multiDrawArraysInstancedWEBGL(r,e,0,i,0,s,0,a);let t=0;for(let e=0;e<a;e++)t+=i[e];for(let e=0;e<s.length;e++)n.update(t,r,s[e])}}this.setMode=i,this.render=a,this.renderInstances=o,this.renderMultiDraw=s,this.renderMultiDrawInstances=c}function Ti(e,t,n,r){let i;function a(){if(i!==void 0)return i;if(t.has(`EXT_texture_filter_anisotropic`)===!0){let n=t.get(`EXT_texture_filter_anisotropic`);i=e.getParameter(n.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function o(t){return t===1023||r.convert(t)===e.getParameter(e.IMPLEMENTATION_COLOR_READ_FORMAT)}function s(n){let i=n===1016&&(t.has(`EXT_color_buffer_half_float`)||t.has(`EXT_color_buffer_float`));return!(n!==1009&&r.convert(n)!==e.getParameter(e.IMPLEMENTATION_COLOR_READ_TYPE)&&n!==1015&&!i)}function c(t){if(t===`highp`){if(e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.HIGH_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.HIGH_FLOAT).precision>0)return`highp`;t=`mediump`}return t===`mediump`&&e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.MEDIUM_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.MEDIUM_FLOAT).precision>0?`mediump`:`lowp`}let l=n.precision===void 0?`highp`:n.precision,u=c(l);u!==l&&(console.warn(`THREE.WebGLRenderer:`,l,`not supported, using`,u,`instead.`),l=u);let d=n.logarithmicDepthBuffer===!0,f=n.reverseDepthBuffer===!0&&t.has(`EXT_clip_control`);if(f===!0){let e=t.get(`EXT_clip_control`);e.clipControlEXT(e.LOWER_LEFT_EXT,e.ZERO_TO_ONE_EXT)}let p=e.getParameter(e.MAX_TEXTURE_IMAGE_UNITS),m=e.getParameter(e.MAX_VERTEX_TEXTURE_IMAGE_UNITS),h=e.getParameter(e.MAX_TEXTURE_SIZE),g=e.getParameter(e.MAX_CUBE_MAP_TEXTURE_SIZE),_=e.getParameter(e.MAX_VERTEX_ATTRIBS),v=e.getParameter(e.MAX_VERTEX_UNIFORM_VECTORS),y=e.getParameter(e.MAX_VARYING_VECTORS),b=e.getParameter(e.MAX_FRAGMENT_UNIFORM_VECTORS),x=m>0,S=e.getParameter(e.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:a,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:s,precision:l,logarithmicDepthBuffer:d,reverseDepthBuffer:f,maxTextures:p,maxVertexTextures:m,maxTextureSize:h,maxCubemapSize:g,maxAttributes:_,maxVertexUniforms:v,maxVaryings:y,maxFragmentUniforms:b,vertexTextures:x,maxSamples:S}}function Ei(e){let t=this,n=null,r=0,i=!1,a=!1,o=new di,s=new z,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(e,t){let n=e.length!==0||t||r!==0||i;return i=t,r=e.length,n},this.beginShadows=function(){a=!0,u(null)},this.endShadows=function(){a=!1},this.setGlobalState=function(e,t){n=u(e,t,0)},this.setState=function(t,o,s){let d=t.clippingPlanes,f=t.clipIntersection,p=t.clipShadows,m=e.get(t);if(!i||d===null||d.length===0||a&&!p)a?u(null):l();else{let e=a?0:r,t=e*4,i=m.clippingState||null;c.value=i,i=u(d,o,t,s);for(let e=0;e!==t;++e)i[e]=n[e];m.clippingState=i,this.numIntersection=f?this.numPlanes:0,this.numPlanes+=e}};function l(){c.value!==n&&(c.value=n,c.needsUpdate=r>0),t.numPlanes=r,t.numIntersection=0}function u(e,n,r,i){let a=e===null?0:e.length,l=null;if(a!==0){if(l=c.value,i!==!0||l===null){let t=r+a*4,i=n.matrixWorldInverse;s.getNormalMatrix(i),(l===null||l.length<t)&&(l=new Float32Array(t));for(let t=0,n=r;t!==a;++t,n+=4)o.copy(e[t]).applyMatrix4(i,s),o.normal.toArray(l,n),l[n+3]=o.constant}c.value=l,c.needsUpdate=!0}return t.numPlanes=a,t.numIntersection=0,l}}function Di(e){let t=new WeakMap;function n(e,t){return t===303?e.mapping=301:t===304&&(e.mapping=302),e}function r(r){if(r&&r.isTexture){let a=r.mapping;if(a===303||a===304){if(t.has(r)){let e=t.get(r).texture;return n(e,r.mapping)}{let a=r.image;if(a&&a.height>0){let o=new si(a.height);return o.fromEquirectangularTexture(e,r),t.set(r,o),r.addEventListener(`dispose`,i),n(o.texture,r.mapping)}return null}}}return r}function i(e){let n=e.target;n.removeEventListener(`dispose`,i);let r=t.get(n);r!==void 0&&(t.delete(n),r.dispose())}function a(){t=new WeakMap}return{get:r,dispose:a}}var Oi=class extends Qr{constructor(e=-1,t=1,n=1,r=-1,i=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type=`OrthographicCamera`,this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=r,this.near=i,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,r,i,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=i,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2,i=n-e,a=n+e,o=r+t,s=r-t;if(this.view!==null&&this.view.enabled){let e=(this.right-this.left)/this.view.fullWidth/this.zoom,t=(this.top-this.bottom)/this.view.fullHeight/this.zoom;i+=e*this.view.offsetX,a=i+e*this.view.width,o-=t*this.view.offsetY,s=o-t*this.view.height}this.projectionMatrix.makeOrthographic(i,a,o,s,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},ki=4,Ai=[.125,.215,.35,.446,.526,.582],ji=20,Mi=new Oi,Ni=new U,Pi=null,Fi=0,Ii=0,Li=!1,Ri=(1+Math.sqrt(5))/2,zi=1/Ri,Bi=[new V(-Ri,zi,0),new V(Ri,zi,0),new V(-zi,0,Ri),new V(zi,0,Ri),new V(0,Ri,-zi),new V(0,Ri,zi),new V(-1,1,-1),new V(1,1,-1),new V(-1,1,1),new V(1,1,1)],Vi=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,r=100){Pi=this._renderer.getRenderTarget(),Fi=this._renderer.getActiveCubeFace(),Ii=this._renderer.getActiveMipmapLevel(),Li=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);let i=this._allocateTargets();return i.depthBuffer=!0,this._sceneToCubeUV(e,n,r,i),t>0&&this._blur(i,0,0,t),this._applyPMREM(i),this._cleanup(i),i}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=qi(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Ki(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=2**this._lodMax}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Pi,Fi,Ii),this._renderer.xr.enabled=Li,e.scissorTest=!1,Wi(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===301||e.mapping===302?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Pi=this._renderer.getRenderTarget(),Fi=this._renderer.getActiveCubeFace(),Ii=this._renderer.getActiveMipmapLevel(),Li=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:o,minFilter:o,generateMipmaps:!1,type:g,format:C,colorSpace:Ie,depthBuffer:!1},r=Ui(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Ui(e,t,n);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Hi(r)),this._blurMaterial=Gi(r,e,t)}return r}_compileMaterial(e){let t=new G(this._lodPlanes[0],e);this._renderer.compile(t,Mi)}_sceneToCubeUV(e,t,n,r){let i=new ni(90,1,t,n),a=[1,-1,1,1,1,1],o=[1,1,1,-1,-1,-1],s=this._renderer,c=s.autoClear,l=s.toneMapping;s.getClearColor(Ni),s.toneMapping=0,s.autoClear=!1;let u=new _r({name:`PMREM.Background`,side:1,depthWrite:!1,depthTest:!1}),d=new G(new K,u),f=!1,p=e.background;p?p.isColor&&(u.color.copy(p),e.background=null,f=!0):(u.color.copy(Ni),f=!0);for(let t=0;t<6;t++){let n=t%3;n===0?(i.up.set(0,a[t],0),i.lookAt(o[t],0,0)):n===1?(i.up.set(0,0,a[t]),i.lookAt(0,o[t],0)):(i.up.set(0,a[t],0),i.lookAt(0,0,o[t]));let c=this._cubeSize;Wi(r,n*c,t>2?c:0,c,c),s.setRenderTarget(r),f&&s.render(d,i),s.render(e,i)}d.geometry.dispose(),d.material.dispose(),s.toneMapping=l,s.autoClear=c,e.background=p}_textureToCubeUV(e,t){let n=this._renderer,r=e.mapping===301||e.mapping===302;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=qi()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Ki());let i=r?this._cubemapMaterial:this._equirectMaterial,a=new G(this._lodPlanes[0],i),o=i.uniforms;o.envMap.value=e;let s=this._cubeSize;Wi(t,0,0,3*s,2*s),n.setRenderTarget(t),n.render(a,Mi)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;let r=this._lodPlanes.length;for(let t=1;t<r;t++){let n=Math.sqrt(this._sigmas[t]*this._sigmas[t]-this._sigmas[t-1]*this._sigmas[t-1]),i=Bi[(r-t-1)%Bi.length];this._blur(e,t-1,t,n,i)}t.autoClear=n}_blur(e,t,n,r,i){let a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,r,`latitudinal`,i),this._halfBlur(a,e,n,n,r,`longitudinal`,i)}_halfBlur(e,t,n,r,i,a,o){let s=this._renderer,c=this._blurMaterial;a!==`latitudinal`&&a!==`longitudinal`&&console.error(`blur direction must be either latitudinal or longitudinal!`);let l=new G(this._lodPlanes[r],c),u=c.uniforms,d=this._sizeLods[n]-1,f=isFinite(i)?Math.PI/(2*d):2*Math.PI/39,p=i/f,m=isFinite(i)?1+Math.floor(3*p):ji;m>ji&&console.warn(`sigmaRadians, ${i}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${ji}`);let h=[],g=0;for(let e=0;e<ji;++e){let t=e/p,n=Math.exp(-t*t/2);h.push(n),e===0?g+=n:e<m&&(g+=2*n)}for(let e=0;e<h.length;e++)h[e]=h[e]/g;u.envMap.value=e.texture,u.samples.value=m,u.weights.value=h,u.latitudinal.value=a===`latitudinal`,o&&(u.poleAxis.value=o);let{_lodMax:_}=this;u.dTheta.value=f,u.mipInt.value=_-n;let v=this._sizeLods[r];Wi(t,3*v*(r>_-ki?r-_+ki:0),4*(this._cubeSize-v),3*v,2*v),s.setRenderTarget(t),s.render(l,Mi)}};function Hi(e){let t=[],n=[],r=[],i=e,a=e-ki+1+Ai.length;for(let o=0;o<a;o++){let a=2**i;n.push(a);let s=1/a;o>e-ki?s=Ai[o-e+ki-1]:o===0&&(s=0),r.push(s);let c=1/(a-2),l=-c,u=1+c,d=[l,l,u,l,u,u,l,l,u,u,l,u],f=new Float32Array(108),p=new Float32Array(72),m=new Float32Array(36);for(let e=0;e<6;e++){let t=e%3*2/3-1,n=e>2?0:-1,r=[t,n,0,t+2/3,n,0,t+2/3,n+1,0,t,n,0,t+2/3,n+1,0,t,n+1,0];f.set(r,18*e),p.set(d,12*e);let i=[e,e,e,e,e,e];m.set(i,6*e)}let h=new Ar;h.setAttribute(`position`,new br(f,3)),h.setAttribute(`uv`,new br(p,2)),h.setAttribute(`faceIndex`,new br(m,1)),t.push(h),i>ki&&i--}return{lodPlanes:t,sizeLods:n,sigmas:r}}function Ui(e,t,n){let r=new Ut(e,t,n);return r.texture.mapping=306,r.texture.name=`PMREM.cubeUv`,r.scissorTest=!0,r}function Wi(e,t,n,r,i){e.viewport.set(t,n,r,i),e.scissor.set(t,n,r,i)}function Gi(e,t,n){let r=new Float32Array(ji),i=new V(0,1,0);return new Zr({name:`SphericalGaussianBlur`,defines:{n:ji,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${e}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:r},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:Ji(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function Ki(){return new Zr({name:`EquirectangularToCubeUV`,uniforms:{envMap:{value:null}},vertexShader:Ji(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function qi(){return new Zr({name:`CubemapToCubeUV`,uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Ji(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function Ji(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function Yi(e){let t=new WeakMap,n=null;function r(r){if(r&&r.isTexture){let o=r.mapping,s=o===303||o===304,c=o===301||o===302;if(s||c){let o=t.get(r),l=o===void 0?0:o.texture.pmremVersion;if(r.isRenderTargetTexture&&r.pmremVersion!==l)return n===null&&(n=new Vi(e)),o=s?n.fromEquirectangular(r,o):n.fromCubemap(r,o),o.texture.pmremVersion=r.pmremVersion,t.set(r,o),o.texture;if(o!==void 0)return o.texture;{let l=r.image;return s&&l&&l.height>0||c&&l&&i(l)?(n===null&&(n=new Vi(e)),o=s?n.fromEquirectangular(r):n.fromCubemap(r),o.texture.pmremVersion=r.pmremVersion,t.set(r,o),r.addEventListener(`dispose`,a),o.texture):null}}}return r}function i(e){let t=0;for(let n=0;n<6;n++)e[n]!==void 0&&t++;return t===6}function a(e){let n=e.target;n.removeEventListener(`dispose`,a);let r=t.get(n);r!==void 0&&(t.delete(n),r.dispose())}function o(){t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:r,dispose:o}}function Xi(e){let t={};function n(n){if(t[n]!==void 0)return t[n];let r;switch(n){case`WEBGL_depth_texture`:r=e.getExtension(`WEBGL_depth_texture`)||e.getExtension(`MOZ_WEBGL_depth_texture`)||e.getExtension(`WEBKIT_WEBGL_depth_texture`);break;case`EXT_texture_filter_anisotropic`:r=e.getExtension(`EXT_texture_filter_anisotropic`)||e.getExtension(`MOZ_EXT_texture_filter_anisotropic`)||e.getExtension(`WEBKIT_EXT_texture_filter_anisotropic`);break;case`WEBGL_compressed_texture_s3tc`:r=e.getExtension(`WEBGL_compressed_texture_s3tc`)||e.getExtension(`MOZ_WEBGL_compressed_texture_s3tc`)||e.getExtension(`WEBKIT_WEBGL_compressed_texture_s3tc`);break;case`WEBGL_compressed_texture_pvrtc`:r=e.getExtension(`WEBGL_compressed_texture_pvrtc`)||e.getExtension(`WEBKIT_WEBGL_compressed_texture_pvrtc`);break;default:r=e.getExtension(n)}return t[n]=r,r}return{has:function(e){return n(e)!==null},init:function(){n(`EXT_color_buffer_float`),n(`WEBGL_clip_cull_distance`),n(`OES_texture_float_linear`),n(`EXT_color_buffer_half_float`),n(`WEBGL_multisampled_render_to_texture`),n(`WEBGL_render_shared_exponent`)},get:function(e){let t=n(e);return t===null&&wt(`THREE.WebGLRenderer: `+e+` extension not supported.`),t}}}function Zi(e,t,n,r){let i={},a=new WeakMap;function o(e){let s=e.target;s.index!==null&&t.remove(s.index);for(let e in s.attributes)t.remove(s.attributes[e]);for(let e in s.morphAttributes){let n=s.morphAttributes[e];for(let e=0,r=n.length;e<r;e++)t.remove(n[e])}s.removeEventListener(`dispose`,o),delete i[s.id];let c=a.get(s);c&&(t.remove(c),a.delete(s)),r.releaseStatesOfGeometry(s),s.isInstancedBufferGeometry===!0&&delete s._maxInstanceCount,n.memory.geometries--}function s(e,t){return i[t.id]===!0||(t.addEventListener(`dispose`,o),i[t.id]=!0,n.memory.geometries++),t}function c(n){let r=n.attributes;for(let n in r)t.update(r[n],e.ARRAY_BUFFER);let i=n.morphAttributes;for(let n in i){let r=i[n];for(let n=0,i=r.length;n<i;n++)t.update(r[n],e.ARRAY_BUFFER)}}function l(e){let n=[],r=e.index,i=e.attributes.position,o=0;if(r!==null){let e=r.array;o=r.version;for(let t=0,r=e.length;t<r;t+=3){let r=e[t+0],i=e[t+1],a=e[t+2];n.push(r,i,i,a,a,r)}}else if(i!==void 0){let e=i.array;o=i.version;for(let t=0,r=e.length/3-1;t<r;t+=3){let e=t+0,r=t+1,i=t+2;n.push(e,r,r,i,i,e)}}else return;let s=new(bt(n)?Sr:xr)(n,1);s.version=o;let c=a.get(e);c&&t.remove(c),a.set(e,s)}function u(e){let t=a.get(e);if(t){let n=e.index;n!==null&&t.version<n.version&&l(e)}else l(e);return a.get(e)}return{get:s,update:c,getWireframeAttribute:u}}function Qi(e,t,n){let r;function i(e){r=e}let a,o;function s(e){a=e.type,o=e.bytesPerElement}function c(t,i){e.drawElements(r,i,a,t*o),n.update(i,r,1)}function l(t,i,s){s!==0&&(e.drawElementsInstanced(r,i,a,t*o,s),n.update(i,r,s))}function u(e,i,o){if(o===0)return;t.get(`WEBGL_multi_draw`).multiDrawElementsWEBGL(r,i,0,a,e,0,o);let s=0;for(let e=0;e<o;e++)s+=i[e];n.update(s,r,1)}function d(e,i,s,c){if(s===0)return;let u=t.get(`WEBGL_multi_draw`);if(u===null)for(let t=0;t<e.length;t++)l(e[t]/o,i[t],c[t]);else{u.multiDrawElementsInstancedWEBGL(r,i,0,a,e,0,c,0,s);let t=0;for(let e=0;e<s;e++)t+=i[e];for(let e=0;e<c.length;e++)n.update(t,r,c[e])}}this.setMode=i,this.setIndex=s,this.render=c,this.renderInstances=l,this.renderMultiDraw=u,this.renderMultiDrawInstances=d}function $i(e){let t={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function r(t,r,i){switch(n.calls++,r){case e.TRIANGLES:n.triangles+=t/3*i;break;case e.LINES:n.lines+=t/2*i;break;case e.LINE_STRIP:n.lines+=i*(t-1);break;case e.LINE_LOOP:n.lines+=i*t;break;case e.POINTS:n.points+=i*t;break;default:console.error(`THREE.WebGLInfo: Unknown draw mode:`,r)}}function i(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:t,render:n,programs:null,autoReset:!0,reset:i,update:r}}function ea(e,t,n){let r=new WeakMap,i=new Vt;function a(a,o,s){let c=a.morphTargetInfluences,l=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=l===void 0?0:l.length,d=r.get(o);if(d===void 0||d.count!==u){d!==void 0&&d.texture.dispose();let e=o.morphAttributes.position!==void 0,n=o.morphAttributes.normal!==void 0,a=o.morphAttributes.color!==void 0,s=o.morphAttributes.position||[],c=o.morphAttributes.normal||[],l=o.morphAttributes.color||[],f=0;e===!0&&(f=1),n===!0&&(f=2),a===!0&&(f=3);let p=o.attributes.position.count*f,m=1;p>t.maxTextureSize&&(m=Math.ceil(p/t.maxTextureSize),p=t.maxTextureSize);let g=new Float32Array(p*m*4*u),_=new Wt(g,p,m,u);_.type=h,_.needsUpdate=!0;let v=f*4;for(let t=0;t<u;t++){let r=s[t],o=c[t],u=l[t],d=p*m*4*t;for(let t=0;t<r.count;t++){let s=t*v;e===!0&&(i.fromBufferAttribute(r,t),g[d+s+0]=i.x,g[d+s+1]=i.y,g[d+s+2]=i.z,g[d+s+3]=0),n===!0&&(i.fromBufferAttribute(o,t),g[d+s+4]=i.x,g[d+s+5]=i.y,g[d+s+6]=i.z,g[d+s+7]=0),a===!0&&(i.fromBufferAttribute(u,t),g[d+s+8]=i.x,g[d+s+9]=i.y,g[d+s+10]=i.z,g[d+s+11]=u.itemSize===4?i.w:1)}}d={count:u,texture:_,size:new R(p,m)},r.set(o,d);function y(){_.dispose(),r.delete(o),o.removeEventListener(`dispose`,y)}o.addEventListener(`dispose`,y)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)s.getUniforms().setValue(e,`morphTexture`,a.morphTexture,n);else{let t=0;for(let e=0;e<c.length;e++)t+=c[e];let n=o.morphTargetsRelative?1:1-t;s.getUniforms().setValue(e,`morphTargetBaseInfluence`,n),s.getUniforms().setValue(e,`morphTargetInfluences`,c)}s.getUniforms().setValue(e,`morphTargetsTexture`,d.texture,n),s.getUniforms().setValue(e,`morphTargetsTextureSize`,d.size)}return{update:a}}function ta(e,t,n,r){let i=new WeakMap;function a(a){let o=r.render.frame,c=a.geometry,l=t.get(a,c);if(i.get(l)!==o&&(t.update(l),i.set(l,o)),a.isInstancedMesh&&(a.hasEventListener(`dispose`,s)===!1&&a.addEventListener(`dispose`,s),i.get(a)!==o&&(n.update(a.instanceMatrix,e.ARRAY_BUFFER),a.instanceColor!==null&&n.update(a.instanceColor,e.ARRAY_BUFFER),i.set(a,o))),a.isSkinnedMesh){let e=a.skeleton;i.get(e)!==o&&(e.update(),i.set(e,o))}return l}function o(){i=new WeakMap}function s(e){let t=e.target;t.removeEventListener(`dispose`,s),n.remove(t.instanceMatrix),t.instanceColor!==null&&n.remove(t.instanceColor)}return{update:a,dispose:o}}var na=class extends Bt{constructor(e,t,n,i,a,o,s,c,l,u=E){if(u!==1026&&u!==1027)throw Error(`DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat`);n===void 0&&u===1026&&(n=m),n===void 0&&u===1027&&(n=y),super(null,i,a,o,s,c,u,n,l),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=s===void 0?r:s,this.minFilter=c===void 0?r:c,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},ra=new Bt,ia=new na(1,1),aa=new Wt,oa=new Gt,sa=new oi,ca=[],la=[],ua=new Float32Array(16),da=new Float32Array(9),fa=new Float32Array(4);function pa(e,t,n){let r=e[0];if(r<=0||r>0)return e;let i=t*n,a=ca[i];if(a===void 0&&(a=new Float32Array(i),ca[i]=a),t!==0){r.toArray(a,0);for(let r=1,i=0;r!==t;++r)i+=n,e[r].toArray(a,i)}return a}function ma(e,t){if(e.length!==t.length)return!1;for(let n=0,r=e.length;n<r;n++)if(e[n]!==t[n])return!1;return!0}function ha(e,t){for(let n=0,r=t.length;n<r;n++)e[n]=t[n]}function ga(e,t){let n=la[t];n===void 0&&(n=new Int32Array(t),la[t]=n);for(let r=0;r!==t;++r)n[r]=e.allocateTextureUnit();return n}function _a(e,t){let n=this.cache;n[0]!==t&&(e.uniform1f(this.addr,t),n[0]=t)}function va(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2f(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(ma(n,t))return;e.uniform2fv(this.addr,t),ha(n,t)}}function ya(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3f(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else if(t.r!==void 0)(n[0]!==t.r||n[1]!==t.g||n[2]!==t.b)&&(e.uniform3f(this.addr,t.r,t.g,t.b),n[0]=t.r,n[1]=t.g,n[2]=t.b);else{if(ma(n,t))return;e.uniform3fv(this.addr,t),ha(n,t)}}function ba(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4f(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(ma(n,t))return;e.uniform4fv(this.addr,t),ha(n,t)}}function xa(e,t){let n=this.cache,r=t.elements;if(r===void 0){if(ma(n,t))return;e.uniformMatrix2fv(this.addr,!1,t),ha(n,t)}else{if(ma(n,r))return;fa.set(r),e.uniformMatrix2fv(this.addr,!1,fa),ha(n,r)}}function Sa(e,t){let n=this.cache,r=t.elements;if(r===void 0){if(ma(n,t))return;e.uniformMatrix3fv(this.addr,!1,t),ha(n,t)}else{if(ma(n,r))return;da.set(r),e.uniformMatrix3fv(this.addr,!1,da),ha(n,r)}}function Ca(e,t){let n=this.cache,r=t.elements;if(r===void 0){if(ma(n,t))return;e.uniformMatrix4fv(this.addr,!1,t),ha(n,t)}else{if(ma(n,r))return;ua.set(r),e.uniformMatrix4fv(this.addr,!1,ua),ha(n,r)}}function wa(e,t){let n=this.cache;n[0]!==t&&(e.uniform1i(this.addr,t),n[0]=t)}function Ta(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2i(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(ma(n,t))return;e.uniform2iv(this.addr,t),ha(n,t)}}function Ea(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3i(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(ma(n,t))return;e.uniform3iv(this.addr,t),ha(n,t)}}function Da(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4i(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(ma(n,t))return;e.uniform4iv(this.addr,t),ha(n,t)}}function Oa(e,t){let n=this.cache;n[0]!==t&&(e.uniform1ui(this.addr,t),n[0]=t)}function ka(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2ui(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(ma(n,t))return;e.uniform2uiv(this.addr,t),ha(n,t)}}function Aa(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3ui(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(ma(n,t))return;e.uniform3uiv(this.addr,t),ha(n,t)}}function ja(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4ui(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(ma(n,t))return;e.uniform4uiv(this.addr,t),ha(n,t)}}function Ma(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i);let a;this.type===e.SAMPLER_2D_SHADOW?(ia.compareFunction=515,a=ia):a=ra,n.setTexture2D(t||a,i)}function Na(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i),n.setTexture3D(t||oa,i)}function Pa(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i),n.setTextureCube(t||sa,i)}function Fa(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i),n.setTexture2DArray(t||aa,i)}function Ia(e){switch(e){case 5126:return _a;case 35664:return va;case 35665:return ya;case 35666:return ba;case 35674:return xa;case 35675:return Sa;case 35676:return Ca;case 5124:case 35670:return wa;case 35667:case 35671:return Ta;case 35668:case 35672:return Ea;case 35669:case 35673:return Da;case 5125:return Oa;case 36294:return ka;case 36295:return Aa;case 36296:return ja;case 35678:case 36198:case 36298:case 36306:case 35682:return Ma;case 35679:case 36299:case 36307:return Na;case 35680:case 36300:case 36308:case 36293:return Pa;case 36289:case 36303:case 36311:case 36292:return Fa}}function La(e,t){e.uniform1fv(this.addr,t)}function Ra(e,t){let n=pa(t,this.size,2);e.uniform2fv(this.addr,n)}function za(e,t){let n=pa(t,this.size,3);e.uniform3fv(this.addr,n)}function Ba(e,t){let n=pa(t,this.size,4);e.uniform4fv(this.addr,n)}function Va(e,t){let n=pa(t,this.size,4);e.uniformMatrix2fv(this.addr,!1,n)}function Ha(e,t){let n=pa(t,this.size,9);e.uniformMatrix3fv(this.addr,!1,n)}function Ua(e,t){let n=pa(t,this.size,16);e.uniformMatrix4fv(this.addr,!1,n)}function Wa(e,t){e.uniform1iv(this.addr,t)}function Ga(e,t){e.uniform2iv(this.addr,t)}function Ka(e,t){e.uniform3iv(this.addr,t)}function qa(e,t){e.uniform4iv(this.addr,t)}function Ja(e,t){e.uniform1uiv(this.addr,t)}function Ya(e,t){e.uniform2uiv(this.addr,t)}function Xa(e,t){e.uniform3uiv(this.addr,t)}function Za(e,t){e.uniform4uiv(this.addr,t)}function Qa(e,t,n){let r=this.cache,i=t.length,a=ga(n,i);ma(r,a)||(e.uniform1iv(this.addr,a),ha(r,a));for(let e=0;e!==i;++e)n.setTexture2D(t[e]||ra,a[e])}function $a(e,t,n){let r=this.cache,i=t.length,a=ga(n,i);ma(r,a)||(e.uniform1iv(this.addr,a),ha(r,a));for(let e=0;e!==i;++e)n.setTexture3D(t[e]||oa,a[e])}function eo(e,t,n){let r=this.cache,i=t.length,a=ga(n,i);ma(r,a)||(e.uniform1iv(this.addr,a),ha(r,a));for(let e=0;e!==i;++e)n.setTextureCube(t[e]||sa,a[e])}function to(e,t,n){let r=this.cache,i=t.length,a=ga(n,i);ma(r,a)||(e.uniform1iv(this.addr,a),ha(r,a));for(let e=0;e!==i;++e)n.setTexture2DArray(t[e]||aa,a[e])}function no(e){switch(e){case 5126:return La;case 35664:return Ra;case 35665:return za;case 35666:return Ba;case 35674:return Va;case 35675:return Ha;case 35676:return Ua;case 5124:case 35670:return Wa;case 35667:case 35671:return Ga;case 35668:case 35672:return Ka;case 35669:case 35673:return qa;case 5125:return Ja;case 36294:return Ya;case 36295:return Xa;case 36296:return Za;case 35678:case 36198:case 36298:case 36306:case 35682:return Qa;case 35679:case 36299:case 36307:return $a;case 35680:case 36300:case 36308:case 36293:return eo;case 36289:case 36303:case 36311:case 36292:return to}}var ro=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=Ia(t.type)}},io=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=no(t.type)}},ao=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let r=this.seq;for(let i=0,a=r.length;i!==a;++i){let a=r[i];a.setValue(e,t[a.id],n)}}},oo=/(\w+)(\])?(\[|\.)?/g;function so(e,t){e.seq.push(t),e.map[t.id]=t}function co(e,t,n){let r=e.name,i=r.length;for(oo.lastIndex=0;;){let a=oo.exec(r),o=oo.lastIndex,s=a[1],c=a[2]===`]`,l=a[3];if(c&&(s|=0),l===void 0||l===`[`&&o+2===i){so(n,l===void 0?new ro(s,e,t):new io(s,e,t));break}{let e=n.map[s];e===void 0&&(e=new ao(s),so(n,e)),n=e}}}var lo=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<n;++r){let n=e.getActiveUniform(t,r);co(n,e.getUniformLocation(t,n.name),this)}}setValue(e,t,n,r){let i=this.map[t];i!==void 0&&i.setValue(e,n,r)}setOptional(e,t,n){let r=t[n];r!==void 0&&this.setValue(e,n,r)}static upload(e,t,n,r){for(let i=0,a=t.length;i!==a;++i){let a=t[i],o=n[a.id];o.needsUpdate!==!1&&a.setValue(e,o.value,r)}}static seqWithValue(e,t){let n=[];for(let r=0,i=e.length;r!==i;++r){let i=e[r];i.id in t&&n.push(i)}return n}};function uo(e,t,n){let r=e.createShader(t);return e.shaderSource(r,n),e.compileShader(r),r}var fo=37297,po=0;function mo(e,t){let n=e.split(`
`),r=[],i=Math.max(t-6,0),a=Math.min(t+6,n.length);for(let e=i;e<a;e++){let i=e+1;r.push(`${i===t?`>`:` `} ${i}: ${n[e]}`)}return r.join(`
`)}function ho(e){let t=B.getPrimaries(B.workingColorSpace),n=B.getPrimaries(e),r;switch(t===n?r=``:t===`p3`&&n===`rec709`?r=`LinearDisplayP3ToLinearSRGB`:t===`rec709`&&n===`p3`&&(r=`LinearSRGBToLinearDisplayP3`),e){case Ie:case Re:return[r,`LinearTransferOETF`];case Fe:case Le:return[r,`sRGBTransferOETF`];default:return console.warn(`THREE.WebGLProgram: Unsupported color space:`,e),[r,`LinearTransferOETF`]}}function go(e,t,n){let r=e.getShaderParameter(t,e.COMPILE_STATUS),i=e.getShaderInfoLog(t).trim();if(r&&i===``)return``;let a=/ERROR: 0:(\d+)/.exec(i);if(a){let r=parseInt(a[1]);return n.toUpperCase()+`

`+i+`

`+mo(e.getShaderSource(t),r)}return i}function _o(e,t){let n=ho(t);return`vec4 ${e}( vec4 value ) { return ${n[0]}( ${n[1]}( value ) ); }`}function vo(e,t){let n;switch(t){case 1:n=`Linear`;break;case 2:n=`Reinhard`;break;case 3:n=`Cineon`;break;case 4:n=`ACESFilmic`;break;case 6:n=`AgX`;break;case 7:n=`Neutral`;break;case 5:n=`Custom`;break;default:console.warn(`THREE.WebGLProgram: Unsupported toneMapping:`,t),n=`Linear`}return`vec3 `+e+`( vec3 color ) { return `+n+`ToneMapping( color ); }`}var yo=new V;function bo(){return B.getLuminanceCoefficients(yo),[`float luminance( const in vec3 rgb ) {`,`	const vec3 weights = vec3( ${yo.x.toFixed(4)}, ${yo.y.toFixed(4)}, ${yo.z.toFixed(4)} );`,`	return dot( weights, rgb );`,`}`].join(`
`)}function xo(e){return[e.extensionClipCullDistance?`#extension GL_ANGLE_clip_cull_distance : require`:``,e.extensionMultiDraw?`#extension GL_ANGLE_multi_draw : require`:``].filter(wo).join(`
`)}function So(e){let t=[];for(let n in e){let r=e[n];r!==!1&&t.push(`#define `+n+` `+r)}return t.join(`
`)}function Co(e,t){let n={},r=e.getProgramParameter(t,e.ACTIVE_ATTRIBUTES);for(let i=0;i<r;i++){let r=e.getActiveAttrib(t,i),a=r.name,o=1;r.type===e.FLOAT_MAT2&&(o=2),r.type===e.FLOAT_MAT3&&(o=3),r.type===e.FLOAT_MAT4&&(o=4),n[a]={type:r.type,location:e.getAttribLocation(t,a),locationSize:o}}return n}function wo(e){return e!==``}function To(e,t){let n=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return e.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Eo(e,t){return e.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var Do=/^[ \t]*#include +<([\w\d./]+)>/gm;function Oo(e){return e.replace(Do,Ao)}var ko=new Map;function Ao(e,t){let n=q[t];if(n===void 0){let e=ko.get(t);if(e!==void 0)n=q[e],console.warn(`THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.`,t,e);else throw Error(`Can not resolve #include <`+t+`>`)}return Oo(n)}var jo=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Mo(e){return e.replace(jo,No)}function No(e,t,n,r){let i=``;for(let e=parseInt(t);e<parseInt(n);e++)i+=r.replace(/\[\s*i\s*\]/g,`[ `+e+` ]`).replace(/UNROLLED_LOOP_INDEX/g,e);return i}function Po(e){let t=`precision ${e.precision} float;
	precision ${e.precision} int;
	precision ${e.precision} sampler2D;
	precision ${e.precision} samplerCube;
	precision ${e.precision} sampler3D;
	precision ${e.precision} sampler2DArray;
	precision ${e.precision} sampler2DShadow;
	precision ${e.precision} samplerCubeShadow;
	precision ${e.precision} sampler2DArrayShadow;
	precision ${e.precision} isampler2D;
	precision ${e.precision} isampler3D;
	precision ${e.precision} isamplerCube;
	precision ${e.precision} isampler2DArray;
	precision ${e.precision} usampler2D;
	precision ${e.precision} usampler3D;
	precision ${e.precision} usamplerCube;
	precision ${e.precision} usampler2DArray;
	`;return e.precision===`highp`?t+=`
#define HIGH_PRECISION`:e.precision===`mediump`?t+=`
#define MEDIUM_PRECISION`:e.precision===`lowp`&&(t+=`
#define LOW_PRECISION`),t}function Fo(e){let t=`SHADOWMAP_TYPE_BASIC`;return e.shadowMapType===1?t=`SHADOWMAP_TYPE_PCF`:e.shadowMapType===2?t=`SHADOWMAP_TYPE_PCF_SOFT`:e.shadowMapType===3&&(t=`SHADOWMAP_TYPE_VSM`),t}function Io(e){let t=`ENVMAP_TYPE_CUBE`;if(e.envMap)switch(e.envMapMode){case 301:case 302:t=`ENVMAP_TYPE_CUBE`;break;case 306:t=`ENVMAP_TYPE_CUBE_UV`}return t}function Lo(e){let t=`ENVMAP_MODE_REFLECTION`;if(e.envMap)switch(e.envMapMode){case 302:t=`ENVMAP_MODE_REFRACTION`}return t}function Ro(e){let t=`ENVMAP_BLENDING_NONE`;if(e.envMap)switch(e.combine){case 0:t=`ENVMAP_BLENDING_MULTIPLY`;break;case 1:t=`ENVMAP_BLENDING_MIX`;break;case 2:t=`ENVMAP_BLENDING_ADD`}return t}function zo(e){let t=e.envMapCubeUVHeight;if(t===null)return null;let n=Math.log2(t)-2,r=1/t;return{texelWidth:1/(3*Math.max(2**n,112)),texelHeight:r,maxMip:n}}function Bo(e,t,n,r){let i=e.getContext(),a=n.defines,o=n.vertexShader,s=n.fragmentShader,c=Fo(n),l=Io(n),u=Lo(n),d=Ro(n),f=zo(n),p=xo(n),m=So(a),h=i.createProgram(),g,_,v=n.glslVersion?`#version `+n.glslVersion+`
`:``;n.isRawShaderMaterial?(g=[`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,m].filter(wo).join(`
`),g.length>0&&(g+=`
`),_=[`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,m].filter(wo).join(`
`),_.length>0&&(_+=`
`)):(g=[Po(n),`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,m,n.extensionClipCullDistance?`#define USE_CLIP_DISTANCE`:``,n.batching?`#define USE_BATCHING`:``,n.batchingColor?`#define USE_BATCHING_COLOR`:``,n.instancing?`#define USE_INSTANCING`:``,n.instancingColor?`#define USE_INSTANCING_COLOR`:``,n.instancingMorph?`#define USE_INSTANCING_MORPH`:``,n.useFog&&n.fog?`#define USE_FOG`:``,n.useFog&&n.fogExp2?`#define FOG_EXP2`:``,n.map?`#define USE_MAP`:``,n.envMap?`#define USE_ENVMAP`:``,n.envMap?`#define `+u:``,n.lightMap?`#define USE_LIGHTMAP`:``,n.aoMap?`#define USE_AOMAP`:``,n.bumpMap?`#define USE_BUMPMAP`:``,n.normalMap?`#define USE_NORMALMAP`:``,n.normalMapObjectSpace?`#define USE_NORMALMAP_OBJECTSPACE`:``,n.normalMapTangentSpace?`#define USE_NORMALMAP_TANGENTSPACE`:``,n.displacementMap?`#define USE_DISPLACEMENTMAP`:``,n.emissiveMap?`#define USE_EMISSIVEMAP`:``,n.anisotropy?`#define USE_ANISOTROPY`:``,n.anisotropyMap?`#define USE_ANISOTROPYMAP`:``,n.clearcoatMap?`#define USE_CLEARCOATMAP`:``,n.clearcoatRoughnessMap?`#define USE_CLEARCOAT_ROUGHNESSMAP`:``,n.clearcoatNormalMap?`#define USE_CLEARCOAT_NORMALMAP`:``,n.iridescenceMap?`#define USE_IRIDESCENCEMAP`:``,n.iridescenceThicknessMap?`#define USE_IRIDESCENCE_THICKNESSMAP`:``,n.specularMap?`#define USE_SPECULARMAP`:``,n.specularColorMap?`#define USE_SPECULAR_COLORMAP`:``,n.specularIntensityMap?`#define USE_SPECULAR_INTENSITYMAP`:``,n.roughnessMap?`#define USE_ROUGHNESSMAP`:``,n.metalnessMap?`#define USE_METALNESSMAP`:``,n.alphaMap?`#define USE_ALPHAMAP`:``,n.alphaHash?`#define USE_ALPHAHASH`:``,n.transmission?`#define USE_TRANSMISSION`:``,n.transmissionMap?`#define USE_TRANSMISSIONMAP`:``,n.thicknessMap?`#define USE_THICKNESSMAP`:``,n.sheenColorMap?`#define USE_SHEEN_COLORMAP`:``,n.sheenRoughnessMap?`#define USE_SHEEN_ROUGHNESSMAP`:``,n.mapUv?`#define MAP_UV `+n.mapUv:``,n.alphaMapUv?`#define ALPHAMAP_UV `+n.alphaMapUv:``,n.lightMapUv?`#define LIGHTMAP_UV `+n.lightMapUv:``,n.aoMapUv?`#define AOMAP_UV `+n.aoMapUv:``,n.emissiveMapUv?`#define EMISSIVEMAP_UV `+n.emissiveMapUv:``,n.bumpMapUv?`#define BUMPMAP_UV `+n.bumpMapUv:``,n.normalMapUv?`#define NORMALMAP_UV `+n.normalMapUv:``,n.displacementMapUv?`#define DISPLACEMENTMAP_UV `+n.displacementMapUv:``,n.metalnessMapUv?`#define METALNESSMAP_UV `+n.metalnessMapUv:``,n.roughnessMapUv?`#define ROUGHNESSMAP_UV `+n.roughnessMapUv:``,n.anisotropyMapUv?`#define ANISOTROPYMAP_UV `+n.anisotropyMapUv:``,n.clearcoatMapUv?`#define CLEARCOATMAP_UV `+n.clearcoatMapUv:``,n.clearcoatNormalMapUv?`#define CLEARCOAT_NORMALMAP_UV `+n.clearcoatNormalMapUv:``,n.clearcoatRoughnessMapUv?`#define CLEARCOAT_ROUGHNESSMAP_UV `+n.clearcoatRoughnessMapUv:``,n.iridescenceMapUv?`#define IRIDESCENCEMAP_UV `+n.iridescenceMapUv:``,n.iridescenceThicknessMapUv?`#define IRIDESCENCE_THICKNESSMAP_UV `+n.iridescenceThicknessMapUv:``,n.sheenColorMapUv?`#define SHEEN_COLORMAP_UV `+n.sheenColorMapUv:``,n.sheenRoughnessMapUv?`#define SHEEN_ROUGHNESSMAP_UV `+n.sheenRoughnessMapUv:``,n.specularMapUv?`#define SPECULARMAP_UV `+n.specularMapUv:``,n.specularColorMapUv?`#define SPECULAR_COLORMAP_UV `+n.specularColorMapUv:``,n.specularIntensityMapUv?`#define SPECULAR_INTENSITYMAP_UV `+n.specularIntensityMapUv:``,n.transmissionMapUv?`#define TRANSMISSIONMAP_UV `+n.transmissionMapUv:``,n.thicknessMapUv?`#define THICKNESSMAP_UV `+n.thicknessMapUv:``,n.vertexTangents&&n.flatShading===!1?`#define USE_TANGENT`:``,n.vertexColors?`#define USE_COLOR`:``,n.vertexAlphas?`#define USE_COLOR_ALPHA`:``,n.vertexUv1s?`#define USE_UV1`:``,n.vertexUv2s?`#define USE_UV2`:``,n.vertexUv3s?`#define USE_UV3`:``,n.pointsUvs?`#define USE_POINTS_UV`:``,n.flatShading?`#define FLAT_SHADED`:``,n.skinning?`#define USE_SKINNING`:``,n.morphTargets?`#define USE_MORPHTARGETS`:``,n.morphNormals&&n.flatShading===!1?`#define USE_MORPHNORMALS`:``,n.morphColors?`#define USE_MORPHCOLORS`:``,n.morphTargetsCount>0?`#define MORPHTARGETS_TEXTURE_STRIDE `+n.morphTextureStride:``,n.morphTargetsCount>0?`#define MORPHTARGETS_COUNT `+n.morphTargetsCount:``,n.doubleSided?`#define DOUBLE_SIDED`:``,n.flipSided?`#define FLIP_SIDED`:``,n.shadowMapEnabled?`#define USE_SHADOWMAP`:``,n.shadowMapEnabled?`#define `+c:``,n.sizeAttenuation?`#define USE_SIZEATTENUATION`:``,n.numLightProbes>0?`#define USE_LIGHT_PROBES`:``,n.logarithmicDepthBuffer?`#define USE_LOGDEPTHBUF`:``,n.reverseDepthBuffer?`#define USE_REVERSEDEPTHBUF`:``,`uniform mat4 modelMatrix;`,`uniform mat4 modelViewMatrix;`,`uniform mat4 projectionMatrix;`,`uniform mat4 viewMatrix;`,`uniform mat3 normalMatrix;`,`uniform vec3 cameraPosition;`,`uniform bool isOrthographic;`,`#ifdef USE_INSTANCING`,`	attribute mat4 instanceMatrix;`,`#endif`,`#ifdef USE_INSTANCING_COLOR`,`	attribute vec3 instanceColor;`,`#endif`,`#ifdef USE_INSTANCING_MORPH`,`	uniform sampler2D morphTexture;`,`#endif`,`attribute vec3 position;`,`attribute vec3 normal;`,`attribute vec2 uv;`,`#ifdef USE_UV1`,`	attribute vec2 uv1;`,`#endif`,`#ifdef USE_UV2`,`	attribute vec2 uv2;`,`#endif`,`#ifdef USE_UV3`,`	attribute vec2 uv3;`,`#endif`,`#ifdef USE_TANGENT`,`	attribute vec4 tangent;`,`#endif`,`#if defined( USE_COLOR_ALPHA )`,`	attribute vec4 color;`,`#elif defined( USE_COLOR )`,`	attribute vec3 color;`,`#endif`,`#ifdef USE_SKINNING`,`	attribute vec4 skinIndex;`,`	attribute vec4 skinWeight;`,`#endif`,`
`].filter(wo).join(`
`),_=[Po(n),`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,m,n.useFog&&n.fog?`#define USE_FOG`:``,n.useFog&&n.fogExp2?`#define FOG_EXP2`:``,n.alphaToCoverage?`#define ALPHA_TO_COVERAGE`:``,n.map?`#define USE_MAP`:``,n.matcap?`#define USE_MATCAP`:``,n.envMap?`#define USE_ENVMAP`:``,n.envMap?`#define `+l:``,n.envMap?`#define `+u:``,n.envMap?`#define `+d:``,f?`#define CUBEUV_TEXEL_WIDTH `+f.texelWidth:``,f?`#define CUBEUV_TEXEL_HEIGHT `+f.texelHeight:``,f?`#define CUBEUV_MAX_MIP `+f.maxMip+`.0`:``,n.lightMap?`#define USE_LIGHTMAP`:``,n.aoMap?`#define USE_AOMAP`:``,n.bumpMap?`#define USE_BUMPMAP`:``,n.normalMap?`#define USE_NORMALMAP`:``,n.normalMapObjectSpace?`#define USE_NORMALMAP_OBJECTSPACE`:``,n.normalMapTangentSpace?`#define USE_NORMALMAP_TANGENTSPACE`:``,n.emissiveMap?`#define USE_EMISSIVEMAP`:``,n.anisotropy?`#define USE_ANISOTROPY`:``,n.anisotropyMap?`#define USE_ANISOTROPYMAP`:``,n.clearcoat?`#define USE_CLEARCOAT`:``,n.clearcoatMap?`#define USE_CLEARCOATMAP`:``,n.clearcoatRoughnessMap?`#define USE_CLEARCOAT_ROUGHNESSMAP`:``,n.clearcoatNormalMap?`#define USE_CLEARCOAT_NORMALMAP`:``,n.dispersion?`#define USE_DISPERSION`:``,n.iridescence?`#define USE_IRIDESCENCE`:``,n.iridescenceMap?`#define USE_IRIDESCENCEMAP`:``,n.iridescenceThicknessMap?`#define USE_IRIDESCENCE_THICKNESSMAP`:``,n.specularMap?`#define USE_SPECULARMAP`:``,n.specularColorMap?`#define USE_SPECULAR_COLORMAP`:``,n.specularIntensityMap?`#define USE_SPECULAR_INTENSITYMAP`:``,n.roughnessMap?`#define USE_ROUGHNESSMAP`:``,n.metalnessMap?`#define USE_METALNESSMAP`:``,n.alphaMap?`#define USE_ALPHAMAP`:``,n.alphaTest?`#define USE_ALPHATEST`:``,n.alphaHash?`#define USE_ALPHAHASH`:``,n.sheen?`#define USE_SHEEN`:``,n.sheenColorMap?`#define USE_SHEEN_COLORMAP`:``,n.sheenRoughnessMap?`#define USE_SHEEN_ROUGHNESSMAP`:``,n.transmission?`#define USE_TRANSMISSION`:``,n.transmissionMap?`#define USE_TRANSMISSIONMAP`:``,n.thicknessMap?`#define USE_THICKNESSMAP`:``,n.vertexTangents&&n.flatShading===!1?`#define USE_TANGENT`:``,n.vertexColors||n.instancingColor||n.batchingColor?`#define USE_COLOR`:``,n.vertexAlphas?`#define USE_COLOR_ALPHA`:``,n.vertexUv1s?`#define USE_UV1`:``,n.vertexUv2s?`#define USE_UV2`:``,n.vertexUv3s?`#define USE_UV3`:``,n.pointsUvs?`#define USE_POINTS_UV`:``,n.gradientMap?`#define USE_GRADIENTMAP`:``,n.flatShading?`#define FLAT_SHADED`:``,n.doubleSided?`#define DOUBLE_SIDED`:``,n.flipSided?`#define FLIP_SIDED`:``,n.shadowMapEnabled?`#define USE_SHADOWMAP`:``,n.shadowMapEnabled?`#define `+c:``,n.premultipliedAlpha?`#define PREMULTIPLIED_ALPHA`:``,n.numLightProbes>0?`#define USE_LIGHT_PROBES`:``,n.decodeVideoTexture?`#define DECODE_VIDEO_TEXTURE`:``,n.logarithmicDepthBuffer?`#define USE_LOGDEPTHBUF`:``,n.reverseDepthBuffer?`#define USE_REVERSEDEPTHBUF`:``,`uniform mat4 viewMatrix;`,`uniform vec3 cameraPosition;`,`uniform bool isOrthographic;`,n.toneMapping===0?``:`#define TONE_MAPPING`,n.toneMapping===0?``:q.tonemapping_pars_fragment,n.toneMapping===0?``:vo(`toneMapping`,n.toneMapping),n.dithering?`#define DITHERING`:``,n.opaque?`#define OPAQUE`:``,q.colorspace_pars_fragment,_o(`linearToOutputTexel`,n.outputColorSpace),bo(),n.useDepthPacking?`#define DEPTH_PACKING `+n.depthPacking:``,`
`].filter(wo).join(`
`)),o=Oo(o),o=To(o,n),o=Eo(o,n),s=Oo(s),s=To(s,n),s=Eo(s,n),o=Mo(o),s=Mo(s),n.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,g=[p,`#define attribute in`,`#define varying out`,`#define texture2D texture`].join(`
`)+`
`+g,_=[`#define varying in`,n.glslVersion===`300 es`?``:`layout(location = 0) out highp vec4 pc_fragColor;`,n.glslVersion===`300 es`?``:`#define gl_FragColor pc_fragColor`,`#define gl_FragDepthEXT gl_FragDepth`,`#define texture2D texture`,`#define textureCube texture`,`#define texture2DProj textureProj`,`#define texture2DLodEXT textureLod`,`#define texture2DProjLodEXT textureProjLod`,`#define textureCubeLodEXT textureLod`,`#define texture2DGradEXT textureGrad`,`#define texture2DProjGradEXT textureProjGrad`,`#define textureCubeGradEXT textureGrad`].join(`
`)+`
`+_);let y=v+g+o,b=v+_+s,x=uo(i,i.VERTEX_SHADER,y),S=uo(i,i.FRAGMENT_SHADER,b);i.attachShader(h,x),i.attachShader(h,S),n.index0AttributeName===void 0?n.morphTargets===!0&&i.bindAttribLocation(h,0,`position`):i.bindAttribLocation(h,0,n.index0AttributeName),i.linkProgram(h);function C(t){if(e.debug.checkShaderErrors){let n=i.getProgramInfoLog(h).trim(),r=i.getShaderInfoLog(x).trim(),a=i.getShaderInfoLog(S).trim(),o=!0,s=!0;if(i.getProgramParameter(h,i.LINK_STATUS)===!1){if(o=!1,typeof e.debug.onShaderError==`function`)e.debug.onShaderError(i,h,x,S);else{let e=go(i,x,`vertex`),r=go(i,S,`fragment`);console.error(`THREE.WebGLProgram: Shader Error `+i.getError()+` - VALIDATE_STATUS `+i.getProgramParameter(h,i.VALIDATE_STATUS)+`

Material Name: `+t.name+`
Material Type: `+t.type+`

Program Info Log: `+n+`
`+e+`
`+r)}}else n===``?(r===``||a===``)&&(s=!1):console.warn(`THREE.WebGLProgram: Program Info Log:`,n);s&&(t.diagnostics={runnable:o,programLog:n,vertexShader:{log:r,prefix:g},fragmentShader:{log:a,prefix:_}})}i.deleteShader(x),i.deleteShader(S),w=new lo(i,h),T=Co(i,h)}let w;this.getUniforms=function(){return w===void 0&&C(this),w};let T;this.getAttributes=function(){return T===void 0&&C(this),T};let E=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return E===!1&&(E=i.getProgramParameter(h,fo)),E},this.destroy=function(){r.releaseStatesOfProgram(this),i.deleteProgram(h),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=po++,this.cacheKey=t,this.usedTimes=1,this.program=h,this.vertexShader=x,this.fragmentShader=S,this}var Vo=0,Ho=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,n=e.fragmentShader,r=this._getShaderStage(t),i=this._getShaderStage(n),a=this._getShaderCacheForMaterial(e);return a.has(r)===!1&&(a.add(r),r.usedTimes++),a.has(i)===!1&&(a.add(i),i.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let e of t)e.usedTimes--,e.usedTimes===0&&this.shaderCache.delete(e.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new Uo(e),t.set(e,n)),n}},Uo=class{constructor(e){this.id=Vo++,this.code=e,this.usedTimes=0}};function Wo(e,t,n,r,i,a,o){let s=new Nn,c=new Ho,l=new Set,u=[],d=i.logarithmicDepthBuffer,f=i.reverseDepthBuffer,p=i.vertexTextures,m=i.precision,h={MeshDepthMaterial:`depth`,MeshDistanceMaterial:`distanceRGBA`,MeshNormalMaterial:`normal`,MeshBasicMaterial:`basic`,MeshLambertMaterial:`lambert`,MeshPhongMaterial:`phong`,MeshToonMaterial:`toon`,MeshStandardMaterial:`physical`,MeshPhysicalMaterial:`physical`,MeshMatcapMaterial:`matcap`,LineBasicMaterial:`basic`,LineDashedMaterial:`dashed`,PointsMaterial:`points`,ShadowMaterial:`shadow`,SpriteMaterial:`sprite`};function g(e){return l.add(e),e===0?`uv`:`uv${e}`}function _(a,s,u,_,v){let y=_.fog,b=v.geometry,x=a.isMeshStandardMaterial?_.environment:null,S=(a.isMeshStandardMaterial?n:t).get(a.envMap||x),C=S&&S.mapping===306?S.image.height:null,w=h[a.type];a.precision!==null&&(m=i.getMaxPrecision(a.precision),m!==a.precision&&console.warn(`THREE.WebGLProgram.getParameters:`,a.precision,`not supported, using`,m,`instead.`));let T=b.morphAttributes.position||b.morphAttributes.normal||b.morphAttributes.color,E=T===void 0?0:T.length,D=0;b.morphAttributes.position!==void 0&&(D=1),b.morphAttributes.normal!==void 0&&(D=2),b.morphAttributes.color!==void 0&&(D=3);let O,k,A,j;if(w){let e=vi[w];O=e.vertexShader,k=e.fragmentShader}else O=a.vertexShader,k=a.fragmentShader,c.update(a),A=c.getVertexShaderID(a),j=c.getFragmentShaderID(a);let M=e.getRenderTarget(),ee=v.isInstancedMesh===!0,N=v.isBatchedMesh===!0,P=!!a.map,te=!!a.matcap,ne=!!S,re=!!a.aoMap,ie=!!a.lightMap,ae=!!a.bumpMap,oe=!!a.normalMap,se=!!a.displacementMap,ce=!!a.emissiveMap,le=!!a.metalnessMap,ue=!!a.roughnessMap,de=a.anisotropy>0,fe=a.clearcoat>0,pe=a.dispersion>0,me=a.iridescence>0,he=a.sheen>0,F=a.transmission>0,ge=de&&!!a.anisotropyMap,I=fe&&!!a.clearcoatMap,L=fe&&!!a.clearcoatNormalMap,_e=fe&&!!a.clearcoatRoughnessMap,ve=me&&!!a.iridescenceMap,ye=me&&!!a.iridescenceThicknessMap,be=he&&!!a.sheenColorMap,xe=he&&!!a.sheenRoughnessMap,Se=!!a.specularMap,Ce=!!a.specularColorMap,we=!!a.specularIntensityMap,Te=F&&!!a.transmissionMap,Ee=F&&!!a.thicknessMap,De=!!a.gradientMap,Oe=!!a.alphaMap,ke=a.alphaTest>0,Ae=!!a.alphaHash,je=!!a.extensions,Me=0;a.toneMapped&&(M===null||M.isXRRenderTarget===!0)&&(Me=e.toneMapping);let Ne={shaderID:w,shaderType:a.type,shaderName:a.name,vertexShader:O,fragmentShader:k,defines:a.defines,customVertexShaderID:A,customFragmentShaderID:j,isRawShaderMaterial:a.isRawShaderMaterial===!0,glslVersion:a.glslVersion,precision:m,batching:N,batchingColor:N&&v._colorsTexture!==null,instancing:ee,instancingColor:ee&&v.instanceColor!==null,instancingMorph:ee&&v.morphTexture!==null,supportsVertexTextures:p,outputColorSpace:M===null?e.outputColorSpace:M.isXRRenderTarget===!0?M.texture.colorSpace:Ie,alphaToCoverage:!!a.alphaToCoverage,map:P,matcap:te,envMap:ne,envMapMode:ne&&S.mapping,envMapCubeUVHeight:C,aoMap:re,lightMap:ie,bumpMap:ae,normalMap:oe,displacementMap:p&&se,emissiveMap:ce,normalMapObjectSpace:oe&&a.normalMapType===1,normalMapTangentSpace:oe&&a.normalMapType===0,metalnessMap:le,roughnessMap:ue,anisotropy:de,anisotropyMap:ge,clearcoat:fe,clearcoatMap:I,clearcoatNormalMap:L,clearcoatRoughnessMap:_e,dispersion:pe,iridescence:me,iridescenceMap:ve,iridescenceThicknessMap:ye,sheen:he,sheenColorMap:be,sheenRoughnessMap:xe,specularMap:Se,specularColorMap:Ce,specularIntensityMap:we,transmission:F,transmissionMap:Te,thicknessMap:Ee,gradientMap:De,opaque:a.transparent===!1&&a.blending===1&&a.alphaToCoverage===!1,alphaMap:Oe,alphaTest:ke,alphaHash:Ae,combine:a.combine,mapUv:P&&g(a.map.channel),aoMapUv:re&&g(a.aoMap.channel),lightMapUv:ie&&g(a.lightMap.channel),bumpMapUv:ae&&g(a.bumpMap.channel),normalMapUv:oe&&g(a.normalMap.channel),displacementMapUv:se&&g(a.displacementMap.channel),emissiveMapUv:ce&&g(a.emissiveMap.channel),metalnessMapUv:le&&g(a.metalnessMap.channel),roughnessMapUv:ue&&g(a.roughnessMap.channel),anisotropyMapUv:ge&&g(a.anisotropyMap.channel),clearcoatMapUv:I&&g(a.clearcoatMap.channel),clearcoatNormalMapUv:L&&g(a.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:_e&&g(a.clearcoatRoughnessMap.channel),iridescenceMapUv:ve&&g(a.iridescenceMap.channel),iridescenceThicknessMapUv:ye&&g(a.iridescenceThicknessMap.channel),sheenColorMapUv:be&&g(a.sheenColorMap.channel),sheenRoughnessMapUv:xe&&g(a.sheenRoughnessMap.channel),specularMapUv:Se&&g(a.specularMap.channel),specularColorMapUv:Ce&&g(a.specularColorMap.channel),specularIntensityMapUv:we&&g(a.specularIntensityMap.channel),transmissionMapUv:Te&&g(a.transmissionMap.channel),thicknessMapUv:Ee&&g(a.thicknessMap.channel),alphaMapUv:Oe&&g(a.alphaMap.channel),vertexTangents:!!b.attributes.tangent&&(oe||de),vertexColors:a.vertexColors,vertexAlphas:a.vertexColors===!0&&!!b.attributes.color&&b.attributes.color.itemSize===4,pointsUvs:v.isPoints===!0&&!!b.attributes.uv&&(P||Oe),fog:!!y,useFog:a.fog===!0,fogExp2:!!y&&y.isFogExp2,flatShading:a.flatShading===!0,sizeAttenuation:a.sizeAttenuation===!0,logarithmicDepthBuffer:d,reverseDepthBuffer:f,skinning:v.isSkinnedMesh===!0,morphTargets:b.morphAttributes.position!==void 0,morphNormals:b.morphAttributes.normal!==void 0,morphColors:b.morphAttributes.color!==void 0,morphTargetsCount:E,morphTextureStride:D,numDirLights:s.directional.length,numPointLights:s.point.length,numSpotLights:s.spot.length,numSpotLightMaps:s.spotLightMap.length,numRectAreaLights:s.rectArea.length,numHemiLights:s.hemi.length,numDirLightShadows:s.directionalShadowMap.length,numPointLightShadows:s.pointShadowMap.length,numSpotLightShadows:s.spotShadowMap.length,numSpotLightShadowsWithMaps:s.numSpotLightShadowsWithMaps,numLightProbes:s.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:a.dithering,shadowMapEnabled:e.shadowMap.enabled&&u.length>0,shadowMapType:e.shadowMap.type,toneMapping:Me,decodeVideoTexture:P&&a.map.isVideoTexture===!0&&B.getTransfer(a.map.colorSpace)===`srgb`,premultipliedAlpha:a.premultipliedAlpha,doubleSided:a.side===2,flipSided:a.side===1,useDepthPacking:a.depthPacking>=0,depthPacking:a.depthPacking||0,index0AttributeName:a.index0AttributeName,extensionClipCullDistance:je&&a.extensions.clipCullDistance===!0&&r.has(`WEBGL_clip_cull_distance`),extensionMultiDraw:(je&&a.extensions.multiDraw===!0||N)&&r.has(`WEBGL_multi_draw`),rendererExtensionParallelShaderCompile:r.has(`KHR_parallel_shader_compile`),customProgramCacheKey:a.customProgramCacheKey()};return Ne.vertexUv1s=l.has(1),Ne.vertexUv2s=l.has(2),Ne.vertexUv3s=l.has(3),l.clear(),Ne}function v(t){let n=[];if(t.shaderID?n.push(t.shaderID):(n.push(t.customVertexShaderID),n.push(t.customFragmentShaderID)),t.defines!==void 0)for(let e in t.defines)n.push(e),n.push(t.defines[e]);return t.isRawShaderMaterial===!1&&(y(n,t),b(n,t),n.push(e.outputColorSpace)),n.push(t.customProgramCacheKey),n.join()}function y(e,t){e.push(t.precision),e.push(t.outputColorSpace),e.push(t.envMapMode),e.push(t.envMapCubeUVHeight),e.push(t.mapUv),e.push(t.alphaMapUv),e.push(t.lightMapUv),e.push(t.aoMapUv),e.push(t.bumpMapUv),e.push(t.normalMapUv),e.push(t.displacementMapUv),e.push(t.emissiveMapUv),e.push(t.metalnessMapUv),e.push(t.roughnessMapUv),e.push(t.anisotropyMapUv),e.push(t.clearcoatMapUv),e.push(t.clearcoatNormalMapUv),e.push(t.clearcoatRoughnessMapUv),e.push(t.iridescenceMapUv),e.push(t.iridescenceThicknessMapUv),e.push(t.sheenColorMapUv),e.push(t.sheenRoughnessMapUv),e.push(t.specularMapUv),e.push(t.specularColorMapUv),e.push(t.specularIntensityMapUv),e.push(t.transmissionMapUv),e.push(t.thicknessMapUv),e.push(t.combine),e.push(t.fogExp2),e.push(t.sizeAttenuation),e.push(t.morphTargetsCount),e.push(t.morphAttributeCount),e.push(t.numDirLights),e.push(t.numPointLights),e.push(t.numSpotLights),e.push(t.numSpotLightMaps),e.push(t.numHemiLights),e.push(t.numRectAreaLights),e.push(t.numDirLightShadows),e.push(t.numPointLightShadows),e.push(t.numSpotLightShadows),e.push(t.numSpotLightShadowsWithMaps),e.push(t.numLightProbes),e.push(t.shadowMapType),e.push(t.toneMapping),e.push(t.numClippingPlanes),e.push(t.numClipIntersection),e.push(t.depthPacking)}function b(e,t){s.disableAll(),t.supportsVertexTextures&&s.enable(0),t.instancing&&s.enable(1),t.instancingColor&&s.enable(2),t.instancingMorph&&s.enable(3),t.matcap&&s.enable(4),t.envMap&&s.enable(5),t.normalMapObjectSpace&&s.enable(6),t.normalMapTangentSpace&&s.enable(7),t.clearcoat&&s.enable(8),t.iridescence&&s.enable(9),t.alphaTest&&s.enable(10),t.vertexColors&&s.enable(11),t.vertexAlphas&&s.enable(12),t.vertexUv1s&&s.enable(13),t.vertexUv2s&&s.enable(14),t.vertexUv3s&&s.enable(15),t.vertexTangents&&s.enable(16),t.anisotropy&&s.enable(17),t.alphaHash&&s.enable(18),t.batching&&s.enable(19),t.dispersion&&s.enable(20),t.batchingColor&&s.enable(21),e.push(s.mask),s.disableAll(),t.fog&&s.enable(0),t.useFog&&s.enable(1),t.flatShading&&s.enable(2),t.logarithmicDepthBuffer&&s.enable(3),t.reverseDepthBuffer&&s.enable(4),t.skinning&&s.enable(5),t.morphTargets&&s.enable(6),t.morphNormals&&s.enable(7),t.morphColors&&s.enable(8),t.premultipliedAlpha&&s.enable(9),t.shadowMapEnabled&&s.enable(10),t.doubleSided&&s.enable(11),t.flipSided&&s.enable(12),t.useDepthPacking&&s.enable(13),t.dithering&&s.enable(14),t.transmission&&s.enable(15),t.sheen&&s.enable(16),t.opaque&&s.enable(17),t.pointsUvs&&s.enable(18),t.decodeVideoTexture&&s.enable(19),t.alphaToCoverage&&s.enable(20),e.push(s.mask)}function x(e){let t=h[e.type],n;if(t){let e=vi[t];n=Jr.clone(e.uniforms)}else n=e.uniforms;return n}function S(t,n){let r;for(let e=0,t=u.length;e<t;e++){let t=u[e];if(t.cacheKey===n){r=t,++r.usedTimes;break}}return r===void 0&&(r=new Bo(e,n,t,a),u.push(r)),r}function C(e){if(--e.usedTimes===0){let t=u.indexOf(e);u[t]=u[u.length-1],u.pop(),e.destroy()}}function w(e){c.remove(e)}function T(){c.dispose()}return{getParameters:_,getProgramCacheKey:v,getUniforms:x,acquireProgram:S,releaseProgram:C,releaseShaderCache:w,programs:u,dispose:T}}function Go(){let e=new WeakMap;function t(t){return e.has(t)}function n(t){let n=e.get(t);return n===void 0&&(n={},e.set(t,n)),n}function r(t){e.delete(t)}function i(t,n,r){e.get(t)[n]=r}function a(){e=new WeakMap}return{has:t,get:n,remove:r,update:i,dispose:a}}function Ko(e,t){return e.groupOrder===t.groupOrder?e.renderOrder===t.renderOrder?e.material.id===t.material.id?e.z===t.z?e.id-t.id:e.z-t.z:e.material.id-t.material.id:e.renderOrder-t.renderOrder:e.groupOrder-t.groupOrder}function qo(e,t){return e.groupOrder===t.groupOrder?e.renderOrder===t.renderOrder?e.z===t.z?e.id-t.id:t.z-e.z:e.renderOrder-t.renderOrder:e.groupOrder-t.groupOrder}function Jo(){let e=[],t=0,n=[],r=[],i=[];function a(){t=0,n.length=0,r.length=0,i.length=0}function o(n,r,i,a,o,s){let c=e[t];return c===void 0?(c={id:n.id,object:n,geometry:r,material:i,groupOrder:a,renderOrder:n.renderOrder,z:o,group:s},e[t]=c):(c.id=n.id,c.object=n,c.geometry=r,c.material=i,c.groupOrder=a,c.renderOrder=n.renderOrder,c.z=o,c.group=s),t++,c}function s(e,t,a,s,c,l){let u=o(e,t,a,s,c,l);a.transmission>0?r.push(u):a.transparent===!0?i.push(u):n.push(u)}function c(e,t,a,s,c,l){let u=o(e,t,a,s,c,l);a.transmission>0?r.unshift(u):a.transparent===!0?i.unshift(u):n.unshift(u)}function l(e,t){n.length>1&&n.sort(e||Ko),r.length>1&&r.sort(t||qo),i.length>1&&i.sort(t||qo)}function u(){for(let n=t,r=e.length;n<r;n++){let t=e[n];if(t.id===null)break;t.id=null,t.object=null,t.geometry=null,t.material=null,t.group=null}}return{opaque:n,transmissive:r,transparent:i,init:a,push:s,unshift:c,finish:u,sort:l}}function Yo(){let e=new WeakMap;function t(t,n){let r=e.get(t),i;return r===void 0?(i=new Jo,e.set(t,[i])):n>=r.length?(i=new Jo,r.push(i)):i=r[n],i}function n(){e=new WeakMap}return{get:t,dispose:n}}function Xo(){let e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let n;switch(t.type){case`DirectionalLight`:n={direction:new V,color:new U};break;case`SpotLight`:n={position:new V,direction:new V,color:new U,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case`PointLight`:n={position:new V,color:new U,distance:0,decay:0};break;case`HemisphereLight`:n={direction:new V,skyColor:new U,groundColor:new U};break;case`RectAreaLight`:n={color:new U,position:new V,halfWidth:new V,halfHeight:new V}}return e[t.id]=n,n}}}function Zo(){let e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let n;switch(t.type){case`DirectionalLight`:n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new R};break;case`SpotLight`:n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new R};break;case`PointLight`:n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new R,shadowCameraNear:1,shadowCameraFar:1e3}}return e[t.id]=n,n}}}var Qo=0;function $o(e,t){return(t.castShadow?2:0)-(e.castShadow?2:0)+ +!!t.map-!!e.map}function es(e){let t=new Xo,n=Zo(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let e=0;e<9;e++)r.probe.push(new V);let i=new V,a=new H,o=new H;function s(i){let a=0,o=0,s=0;for(let e=0;e<9;e++)r.probe[e].set(0,0,0);let c=0,l=0,u=0,d=0,f=0,p=0,m=0,h=0,g=0,_=0,v=0;i.sort($o);for(let e=0,y=i.length;e<y;e++){let y=i[e],b=y.color,x=y.intensity,S=y.distance,C=y.shadow&&y.shadow.map?y.shadow.map.texture:null;if(y.isAmbientLight)a+=b.r*x,o+=b.g*x,s+=b.b*x;else if(y.isLightProbe){for(let e=0;e<9;e++)r.probe[e].addScaledVector(y.sh.coefficients[e],x);v++}else if(y.isDirectionalLight){let e=t.get(y);if(e.color.copy(y.color).multiplyScalar(y.intensity),y.castShadow){let e=y.shadow,t=n.get(y);t.shadowIntensity=e.intensity,t.shadowBias=e.bias,t.shadowNormalBias=e.normalBias,t.shadowRadius=e.radius,t.shadowMapSize=e.mapSize,r.directionalShadow[c]=t,r.directionalShadowMap[c]=C,r.directionalShadowMatrix[c]=y.shadow.matrix,p++}r.directional[c]=e,c++}else if(y.isSpotLight){let e=t.get(y);e.position.setFromMatrixPosition(y.matrixWorld),e.color.copy(b).multiplyScalar(x),e.distance=S,e.coneCos=Math.cos(y.angle),e.penumbraCos=Math.cos(y.angle*(1-y.penumbra)),e.decay=y.decay,r.spot[u]=e;let i=y.shadow;if(y.map&&(r.spotLightMap[g]=y.map,g++,i.updateMatrices(y),y.castShadow&&_++),r.spotLightMatrix[u]=i.matrix,y.castShadow){let e=n.get(y);e.shadowIntensity=i.intensity,e.shadowBias=i.bias,e.shadowNormalBias=i.normalBias,e.shadowRadius=i.radius,e.shadowMapSize=i.mapSize,r.spotShadow[u]=e,r.spotShadowMap[u]=C,h++}u++}else if(y.isRectAreaLight){let e=t.get(y);e.color.copy(b).multiplyScalar(x),e.halfWidth.set(y.width*.5,0,0),e.halfHeight.set(0,y.height*.5,0),r.rectArea[d]=e,d++}else if(y.isPointLight){let e=t.get(y);if(e.color.copy(y.color).multiplyScalar(y.intensity),e.distance=y.distance,e.decay=y.decay,y.castShadow){let e=y.shadow,t=n.get(y);t.shadowIntensity=e.intensity,t.shadowBias=e.bias,t.shadowNormalBias=e.normalBias,t.shadowRadius=e.radius,t.shadowMapSize=e.mapSize,t.shadowCameraNear=e.camera.near,t.shadowCameraFar=e.camera.far,r.pointShadow[l]=t,r.pointShadowMap[l]=C,r.pointShadowMatrix[l]=y.shadow.matrix,m++}r.point[l]=e,l++}else if(y.isHemisphereLight){let e=t.get(y);e.skyColor.copy(y.color).multiplyScalar(x),e.groundColor.copy(y.groundColor).multiplyScalar(x),r.hemi[f]=e,f++}}d>0&&(e.has(`OES_texture_float_linear`)===!0?(r.rectAreaLTC1=J.LTC_FLOAT_1,r.rectAreaLTC2=J.LTC_FLOAT_2):(r.rectAreaLTC1=J.LTC_HALF_1,r.rectAreaLTC2=J.LTC_HALF_2)),r.ambient[0]=a,r.ambient[1]=o,r.ambient[2]=s;let y=r.hash;(y.directionalLength!==c||y.pointLength!==l||y.spotLength!==u||y.rectAreaLength!==d||y.hemiLength!==f||y.numDirectionalShadows!==p||y.numPointShadows!==m||y.numSpotShadows!==h||y.numSpotMaps!==g||y.numLightProbes!==v)&&(r.directional.length=c,r.spot.length=u,r.rectArea.length=d,r.point.length=l,r.hemi.length=f,r.directionalShadow.length=p,r.directionalShadowMap.length=p,r.pointShadow.length=m,r.pointShadowMap.length=m,r.spotShadow.length=h,r.spotShadowMap.length=h,r.directionalShadowMatrix.length=p,r.pointShadowMatrix.length=m,r.spotLightMatrix.length=h+g-_,r.spotLightMap.length=g,r.numSpotLightShadowsWithMaps=_,r.numLightProbes=v,y.directionalLength=c,y.pointLength=l,y.spotLength=u,y.rectAreaLength=d,y.hemiLength=f,y.numDirectionalShadows=p,y.numPointShadows=m,y.numSpotShadows=h,y.numSpotMaps=g,y.numLightProbes=v,r.version=Qo++)}function c(e,t){let n=0,s=0,c=0,l=0,u=0,d=t.matrixWorldInverse;for(let t=0,f=e.length;t<f;t++){let f=e[t];if(f.isDirectionalLight){let e=r.directional[n];e.direction.setFromMatrixPosition(f.matrixWorld),i.setFromMatrixPosition(f.target.matrixWorld),e.direction.sub(i),e.direction.transformDirection(d),n++}else if(f.isSpotLight){let e=r.spot[c];e.position.setFromMatrixPosition(f.matrixWorld),e.position.applyMatrix4(d),e.direction.setFromMatrixPosition(f.matrixWorld),i.setFromMatrixPosition(f.target.matrixWorld),e.direction.sub(i),e.direction.transformDirection(d),c++}else if(f.isRectAreaLight){let e=r.rectArea[l];e.position.setFromMatrixPosition(f.matrixWorld),e.position.applyMatrix4(d),o.identity(),a.copy(f.matrixWorld),a.premultiply(d),o.extractRotation(a),e.halfWidth.set(f.width*.5,0,0),e.halfHeight.set(0,f.height*.5,0),e.halfWidth.applyMatrix4(o),e.halfHeight.applyMatrix4(o),l++}else if(f.isPointLight){let e=r.point[s];e.position.setFromMatrixPosition(f.matrixWorld),e.position.applyMatrix4(d),s++}else if(f.isHemisphereLight){let e=r.hemi[u];e.direction.setFromMatrixPosition(f.matrixWorld),e.direction.transformDirection(d),u++}}}return{setup:s,setupView:c,state:r}}function ts(e){let t=new es(e),n=[],r=[];function i(e){l.camera=e,n.length=0,r.length=0}function a(e){n.push(e)}function o(e){r.push(e)}function s(){t.setup(n)}function c(e){t.setupView(n,e)}let l={lightsArray:n,shadowsArray:r,camera:null,lights:t,transmissionRenderTarget:{}};return{init:i,state:l,setupLights:s,setupLightsView:c,pushLight:a,pushShadow:o}}function ns(e){let t=new WeakMap;function n(n,r=0){let i=t.get(n),a;return i===void 0?(a=new ts(e),t.set(n,[a])):r>=i.length?(a=new ts(e),i.push(a)):a=i[r],a}function r(){t=new WeakMap}return{get:n,dispose:r}}var rs=class extends gr{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type=`MeshDepthMaterial`,this.depthPacking=Ne,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},is=class extends gr{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type=`MeshDistanceMaterial`,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}},as=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,os=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function ss(e,t,n){let i=new mi,a=new R,o=new R,s=new Vt,c=new rs({depthPacking:Pe}),l=new is,u={},d=n.maxTextureSize,f={0:1,1:0,2:2},p=new Zr({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new R},radius:{value:4}},vertexShader:as,fragmentShader:os}),m=p.clone();m.defines.HORIZONTAL_PASS=1;let h=new Ar;h.setAttribute(`position`,new br(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let g=new G(h,p),_=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=1;let v=this.type;this.render=function(t,n,c){if(_.enabled===!1||_.autoUpdate===!1&&_.needsUpdate===!1||t.length===0)return;let l=e.getRenderTarget(),u=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),p=e.state;p.setBlending(0),p.buffers.color.setClear(1,1,1,1),p.buffers.depth.setTest(!0),p.setScissorTest(!1);let m=v!==3&&this.type===3,h=v===3&&this.type!==3;for(let l=0,u=t.length;l<u;l++){let u=t[l],f=u.shadow;if(f===void 0){console.warn(`THREE.WebGLShadowMap:`,u,`has no shadow.`);continue}if(f.autoUpdate===!1&&f.needsUpdate===!1)continue;a.copy(f.mapSize);let g=f.getFrameExtents();if(a.multiply(g),o.copy(f.mapSize),(a.x>d||a.y>d)&&(a.x>d&&(o.x=Math.floor(d/g.x),a.x=o.x*g.x,f.mapSize.x=o.x),a.y>d&&(o.y=Math.floor(d/g.y),a.y=o.y*g.y,f.mapSize.y=o.y)),f.map===null||m===!0||h===!0){let e=this.type===3?{}:{minFilter:r,magFilter:r};f.map!==null&&f.map.dispose(),f.map=new Ut(a.x,a.y,e),f.map.texture.name=u.name+`.shadowMap`,f.camera.updateProjectionMatrix()}e.setRenderTarget(f.map),e.clear();let _=f.getViewportCount();for(let e=0;e<_;e++){let t=f.getViewport(e);s.set(o.x*t.x,o.y*t.y,o.x*t.z,o.y*t.w),p.viewport(s),f.updateMatrices(u,e),i=f.getFrustum(),x(n,c,f.camera,u,this.type)}f.isPointLightShadow!==!0&&this.type===3&&y(f,c),f.needsUpdate=!1}v=this.type,_.needsUpdate=!1,e.setRenderTarget(l,u,f)};function y(n,r){let i=t.update(g);p.defines.VSM_SAMPLES!==n.blurSamples&&(p.defines.VSM_SAMPLES=n.blurSamples,m.defines.VSM_SAMPLES=n.blurSamples,p.needsUpdate=!0,m.needsUpdate=!0),n.mapPass===null&&(n.mapPass=new Ut(a.x,a.y)),p.uniforms.shadow_pass.value=n.map.texture,p.uniforms.resolution.value=n.mapSize,p.uniforms.radius.value=n.radius,e.setRenderTarget(n.mapPass),e.clear(),e.renderBufferDirect(r,null,i,p,g,null),m.uniforms.shadow_pass.value=n.mapPass.texture,m.uniforms.resolution.value=n.mapSize,m.uniforms.radius.value=n.radius,e.setRenderTarget(n.map),e.clear(),e.renderBufferDirect(r,null,i,m,g,null)}function b(t,n,r,i){let a=null,o=r.isPointLight===!0?t.customDistanceMaterial:t.customDepthMaterial;if(o!==void 0)a=o;else if(a=r.isPointLight===!0?l:c,e.localClippingEnabled&&n.clipShadows===!0&&Array.isArray(n.clippingPlanes)&&n.clippingPlanes.length!==0||n.displacementMap&&n.displacementScale!==0||n.alphaMap&&n.alphaTest>0||n.map&&n.alphaTest>0){let e=a.uuid,t=n.uuid,r=u[e];r===void 0&&(r={},u[e]=r);let i=r[t];i===void 0&&(i=a.clone(),r[t]=i,n.addEventListener(`dispose`,S)),a=i}if(a.visible=n.visible,a.wireframe=n.wireframe,i===3?a.side=n.shadowSide===null?n.side:n.shadowSide:a.side=n.shadowSide===null?f[n.side]:n.shadowSide,a.alphaMap=n.alphaMap,a.alphaTest=n.alphaTest,a.map=n.map,a.clipShadows=n.clipShadows,a.clippingPlanes=n.clippingPlanes,a.clipIntersection=n.clipIntersection,a.displacementMap=n.displacementMap,a.displacementScale=n.displacementScale,a.displacementBias=n.displacementBias,a.wireframeLinewidth=n.wireframeLinewidth,a.linewidth=n.linewidth,r.isPointLight===!0&&a.isMeshDistanceMaterial===!0){let t=e.properties.get(a);t.light=r}return a}function x(n,r,a,o,s){if(n.visible===!1)return;if(n.layers.test(r.layers)&&(n.isMesh||n.isLine||n.isPoints)&&(n.castShadow||n.receiveShadow&&s===3)&&(!n.frustumCulled||i.intersectsObject(n))){n.modelViewMatrix.multiplyMatrices(a.matrixWorldInverse,n.matrixWorld);let i=t.update(n),c=n.material;if(Array.isArray(c)){let t=i.groups;for(let l=0,u=t.length;l<u;l++){let u=t[l],d=c[u.materialIndex];if(d&&d.visible){let t=b(n,d,o,s);n.onBeforeShadow(e,n,r,a,i,t,u),e.renderBufferDirect(a,null,i,t,n,u),n.onAfterShadow(e,n,r,a,i,t,u)}}}else if(c.visible){let t=b(n,c,o,s);n.onBeforeShadow(e,n,r,a,i,t,null),e.renderBufferDirect(a,null,i,t,n,null),n.onAfterShadow(e,n,r,a,i,t,null)}}let c=n.children;for(let e=0,t=c.length;e<t;e++)x(c[e],r,a,o,s)}function S(e){e.target.removeEventListener(`dispose`,S);for(let t in u){let n=u[t],r=e.target.uuid;r in n&&(n[r].dispose(),delete n[r])}}}var cs={0:1,2:6,4:7,3:5,1:0,6:2,7:4,5:3};function ls(e){function t(){let t=!1,n=new Vt,r=null,i=new Vt(0,0,0,0);return{setMask:function(n){r!==n&&!t&&(e.colorMask(n,n,n,n),r=n)},setLocked:function(e){t=e},setClear:function(t,r,a,o,s){s===!0&&(t*=o,r*=o,a*=o),n.set(t,r,a,o),i.equals(n)===!1&&(e.clearColor(t,r,a,o),i.copy(n))},reset:function(){t=!1,r=null,i.set(-1,0,0,0)}}}function n(){let t=!1,n=!1,r=null,i=null,a=null;return{setReversed:function(e){n=e},setTest:function(t){t?se(e.DEPTH_TEST):ce(e.DEPTH_TEST)},setMask:function(n){r!==n&&!t&&(e.depthMask(n),r=n)},setFunc:function(t){if(n&&(t=cs[t]),i!==t){switch(t){case 0:e.depthFunc(e.NEVER);break;case 1:e.depthFunc(e.ALWAYS);break;case 2:e.depthFunc(e.LESS);break;case 3:e.depthFunc(e.LEQUAL);break;case 4:e.depthFunc(e.EQUAL);break;case 5:e.depthFunc(e.GEQUAL);break;case 6:e.depthFunc(e.GREATER);break;case 7:e.depthFunc(e.NOTEQUAL);break;default:e.depthFunc(e.LEQUAL)}i=t}},setLocked:function(e){t=e},setClear:function(t){a!==t&&(e.clearDepth(t),a=t)},reset:function(){t=!1,r=null,i=null,a=null}}}function r(){let t=!1,n=null,r=null,i=null,a=null,o=null,s=null,c=null,l=null;return{setTest:function(n){t||(n?se(e.STENCIL_TEST):ce(e.STENCIL_TEST))},setMask:function(r){n!==r&&!t&&(e.stencilMask(r),n=r)},setFunc:function(t,n,o){(r!==t||i!==n||a!==o)&&(e.stencilFunc(t,n,o),r=t,i=n,a=o)},setOp:function(t,n,r){(o!==t||s!==n||c!==r)&&(e.stencilOp(t,n,r),o=t,s=n,c=r)},setLocked:function(e){t=e},setClear:function(t){l!==t&&(e.clearStencil(t),l=t)},reset:function(){t=!1,n=null,r=null,i=null,a=null,o=null,s=null,c=null,l=null}}}let i=new t,a=new n,o=new r,s=new WeakMap,c=new WeakMap,l={},u={},d=new WeakMap,f=[],p=null,m=!1,h=null,g=null,_=null,v=null,y=null,b=null,x=null,S=new U(0,0,0),C=0,w=!1,T=null,E=null,D=null,O=null,k=null,A=e.getParameter(e.MAX_COMBINED_TEXTURE_IMAGE_UNITS),j=!1,M=0,ee=e.getParameter(e.VERSION);ee.indexOf(`WebGL`)===-1?ee.indexOf(`OpenGL ES`)!==-1&&(M=parseFloat(/^OpenGL ES (\d)/.exec(ee)[1]),j=M>=2):(M=parseFloat(/^WebGL (\d)/.exec(ee)[1]),j=M>=1);let N=null,P={},te=e.getParameter(e.SCISSOR_BOX),ne=e.getParameter(e.VIEWPORT),re=new Vt().fromArray(te),ie=new Vt().fromArray(ne);function ae(t,n,r,i){let a=new Uint8Array(4),o=e.createTexture();e.bindTexture(t,o),e.texParameteri(t,e.TEXTURE_MIN_FILTER,e.NEAREST),e.texParameteri(t,e.TEXTURE_MAG_FILTER,e.NEAREST);for(let o=0;o<r;o++)t===e.TEXTURE_3D||t===e.TEXTURE_2D_ARRAY?e.texImage3D(n,0,e.RGBA,1,1,i,0,e.RGBA,e.UNSIGNED_BYTE,a):e.texImage2D(n+o,0,e.RGBA,1,1,0,e.RGBA,e.UNSIGNED_BYTE,a);return o}let oe={};oe[e.TEXTURE_2D]=ae(e.TEXTURE_2D,e.TEXTURE_2D,1),oe[e.TEXTURE_CUBE_MAP]=ae(e.TEXTURE_CUBE_MAP,e.TEXTURE_CUBE_MAP_POSITIVE_X,6),oe[e.TEXTURE_2D_ARRAY]=ae(e.TEXTURE_2D_ARRAY,e.TEXTURE_2D_ARRAY,1,1),oe[e.TEXTURE_3D]=ae(e.TEXTURE_3D,e.TEXTURE_3D,1,1),i.setClear(0,0,0,1),a.setClear(1),o.setClear(0),se(e.DEPTH_TEST),a.setFunc(3),F(!1),ge(1),se(e.CULL_FACE),me(0);function se(t){l[t]!==!0&&(e.enable(t),l[t]=!0)}function ce(t){l[t]!==!1&&(e.disable(t),l[t]=!1)}function le(t,n){return u[t]!==n&&(e.bindFramebuffer(t,n),u[t]=n,t===e.DRAW_FRAMEBUFFER&&(u[e.FRAMEBUFFER]=n),t===e.FRAMEBUFFER&&(u[e.DRAW_FRAMEBUFFER]=n),!0)}function ue(t,n){let r=f,i=!1;if(t){r=d.get(n),r===void 0&&(r=[],d.set(n,r));let a=t.textures;if(r.length!==a.length||r[0]!==e.COLOR_ATTACHMENT0){for(let t=0,n=a.length;t<n;t++)r[t]=e.COLOR_ATTACHMENT0+t;r.length=a.length,i=!0}}else r[0]!==e.BACK&&(r[0]=e.BACK,i=!0);i&&e.drawBuffers(r)}function de(t){return p!==t&&(e.useProgram(t),p=t,!0)}let fe={100:e.FUNC_ADD,101:e.FUNC_SUBTRACT,102:e.FUNC_REVERSE_SUBTRACT};fe[103]=e.MIN,fe[104]=e.MAX;let pe={200:e.ZERO,201:e.ONE,202:e.SRC_COLOR,204:e.SRC_ALPHA,210:e.SRC_ALPHA_SATURATE,208:e.DST_COLOR,206:e.DST_ALPHA,203:e.ONE_MINUS_SRC_COLOR,205:e.ONE_MINUS_SRC_ALPHA,209:e.ONE_MINUS_DST_COLOR,207:e.ONE_MINUS_DST_ALPHA,211:e.CONSTANT_COLOR,212:e.ONE_MINUS_CONSTANT_COLOR,213:e.CONSTANT_ALPHA,214:e.ONE_MINUS_CONSTANT_ALPHA};function me(t,n,r,i,a,o,s,c,l,u){if(t===0)m===!0&&(ce(e.BLEND),m=!1);else if(m===!1&&(se(e.BLEND),m=!0),t!==5){if(t!==h||u!==w){if((g!==100||y!==100)&&(e.blendEquation(e.FUNC_ADD),g=100,y=100),u)switch(t){case 1:e.blendFuncSeparate(e.ONE,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case 2:e.blendFunc(e.ONE,e.ONE);break;case 3:e.blendFuncSeparate(e.ZERO,e.ONE_MINUS_SRC_COLOR,e.ZERO,e.ONE);break;case 4:e.blendFuncSeparate(e.ZERO,e.SRC_COLOR,e.ZERO,e.SRC_ALPHA);break;default:console.error(`THREE.WebGLState: Invalid blending: `,t)}else switch(t){case 1:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case 2:e.blendFunc(e.SRC_ALPHA,e.ONE);break;case 3:e.blendFuncSeparate(e.ZERO,e.ONE_MINUS_SRC_COLOR,e.ZERO,e.ONE);break;case 4:e.blendFunc(e.ZERO,e.SRC_COLOR);break;default:console.error(`THREE.WebGLState: Invalid blending: `,t)}_=null,v=null,b=null,x=null,S.set(0,0,0),C=0,h=t,w=u}}else a||=n,o||=r,s||=i,(n!==g||a!==y)&&(e.blendEquationSeparate(fe[n],fe[a]),g=n,y=a),(r!==_||i!==v||o!==b||s!==x)&&(e.blendFuncSeparate(pe[r],pe[i],pe[o],pe[s]),_=r,v=i,b=o,x=s),(c.equals(S)===!1||l!==C)&&(e.blendColor(c.r,c.g,c.b,l),S.copy(c),C=l),h=t,w=!1}function he(t,n){t.side===2?ce(e.CULL_FACE):se(e.CULL_FACE);let r=t.side===1;n&&(r=!r),F(r),t.blending===1&&t.transparent===!1?me(0):me(t.blending,t.blendEquation,t.blendSrc,t.blendDst,t.blendEquationAlpha,t.blendSrcAlpha,t.blendDstAlpha,t.blendColor,t.blendAlpha,t.premultipliedAlpha),a.setFunc(t.depthFunc),a.setTest(t.depthTest),a.setMask(t.depthWrite),i.setMask(t.colorWrite);let s=t.stencilWrite;o.setTest(s),s&&(o.setMask(t.stencilWriteMask),o.setFunc(t.stencilFunc,t.stencilRef,t.stencilFuncMask),o.setOp(t.stencilFail,t.stencilZFail,t.stencilZPass)),L(t.polygonOffset,t.polygonOffsetFactor,t.polygonOffsetUnits),t.alphaToCoverage===!0?se(e.SAMPLE_ALPHA_TO_COVERAGE):ce(e.SAMPLE_ALPHA_TO_COVERAGE)}function F(t){T!==t&&(t?e.frontFace(e.CW):e.frontFace(e.CCW),T=t)}function ge(t){t===0?ce(e.CULL_FACE):(se(e.CULL_FACE),t!==E&&(t===1?e.cullFace(e.BACK):t===2?e.cullFace(e.FRONT):e.cullFace(e.FRONT_AND_BACK))),E=t}function I(t){t!==D&&(j&&e.lineWidth(t),D=t)}function L(t,n,r){t?(se(e.POLYGON_OFFSET_FILL),(O!==n||k!==r)&&(e.polygonOffset(n,r),O=n,k=r)):ce(e.POLYGON_OFFSET_FILL)}function _e(t){t?se(e.SCISSOR_TEST):ce(e.SCISSOR_TEST)}function ve(t){t===void 0&&(t=e.TEXTURE0+A-1),N!==t&&(e.activeTexture(t),N=t)}function ye(t,n,r){r===void 0&&(r=N===null?e.TEXTURE0+A-1:N);let i=P[r];i===void 0&&(i={type:void 0,texture:void 0},P[r]=i),(i.type!==t||i.texture!==n)&&(N!==r&&(e.activeTexture(r),N=r),e.bindTexture(t,n||oe[t]),i.type=t,i.texture=n)}function be(){let t=P[N];t!==void 0&&t.type!==void 0&&(e.bindTexture(t.type,null),t.type=void 0,t.texture=void 0)}function xe(){try{e.compressedTexImage2D.apply(e,arguments)}catch(e){console.error(`THREE.WebGLState:`,e)}}function Se(){try{e.compressedTexImage3D.apply(e,arguments)}catch(e){console.error(`THREE.WebGLState:`,e)}}function Ce(){try{e.texSubImage2D.apply(e,arguments)}catch(e){console.error(`THREE.WebGLState:`,e)}}function we(){try{e.texSubImage3D.apply(e,arguments)}catch(e){console.error(`THREE.WebGLState:`,e)}}function Te(){try{e.compressedTexSubImage2D.apply(e,arguments)}catch(e){console.error(`THREE.WebGLState:`,e)}}function Ee(){try{e.compressedTexSubImage3D.apply(e,arguments)}catch(e){console.error(`THREE.WebGLState:`,e)}}function De(){try{e.texStorage2D.apply(e,arguments)}catch(e){console.error(`THREE.WebGLState:`,e)}}function Oe(){try{e.texStorage3D.apply(e,arguments)}catch(e){console.error(`THREE.WebGLState:`,e)}}function ke(){try{e.texImage2D.apply(e,arguments)}catch(e){console.error(`THREE.WebGLState:`,e)}}function Ae(){try{e.texImage3D.apply(e,arguments)}catch(e){console.error(`THREE.WebGLState:`,e)}}function je(t){re.equals(t)===!1&&(e.scissor(t.x,t.y,t.z,t.w),re.copy(t))}function Me(t){ie.equals(t)===!1&&(e.viewport(t.x,t.y,t.z,t.w),ie.copy(t))}function Ne(t,n){let r=c.get(n);r===void 0&&(r=new WeakMap,c.set(n,r));let i=r.get(t);i===void 0&&(i=e.getUniformBlockIndex(n,t.name),r.set(t,i))}function Pe(t,n){let r=c.get(n).get(t);s.get(n)!==r&&(e.uniformBlockBinding(n,r,t.__bindingPointIndex),s.set(n,r))}function Fe(){e.disable(e.BLEND),e.disable(e.CULL_FACE),e.disable(e.DEPTH_TEST),e.disable(e.POLYGON_OFFSET_FILL),e.disable(e.SCISSOR_TEST),e.disable(e.STENCIL_TEST),e.disable(e.SAMPLE_ALPHA_TO_COVERAGE),e.blendEquation(e.FUNC_ADD),e.blendFunc(e.ONE,e.ZERO),e.blendFuncSeparate(e.ONE,e.ZERO,e.ONE,e.ZERO),e.blendColor(0,0,0,0),e.colorMask(!0,!0,!0,!0),e.clearColor(0,0,0,0),e.depthMask(!0),e.depthFunc(e.LESS),e.clearDepth(1),e.stencilMask(4294967295),e.stencilFunc(e.ALWAYS,0,4294967295),e.stencilOp(e.KEEP,e.KEEP,e.KEEP),e.clearStencil(0),e.cullFace(e.BACK),e.frontFace(e.CCW),e.polygonOffset(0,0),e.activeTexture(e.TEXTURE0),e.bindFramebuffer(e.FRAMEBUFFER,null),e.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),e.bindFramebuffer(e.READ_FRAMEBUFFER,null),e.useProgram(null),e.lineWidth(1),e.scissor(0,0,e.canvas.width,e.canvas.height),e.viewport(0,0,e.canvas.width,e.canvas.height),l={},N=null,P={},u={},d=new WeakMap,f=[],p=null,m=!1,h=null,g=null,_=null,v=null,y=null,b=null,x=null,S=new U(0,0,0),C=0,w=!1,T=null,E=null,D=null,O=null,k=null,re.set(0,0,e.canvas.width,e.canvas.height),ie.set(0,0,e.canvas.width,e.canvas.height),i.reset(),a.reset(),o.reset()}return{buffers:{color:i,depth:a,stencil:o},enable:se,disable:ce,bindFramebuffer:le,drawBuffers:ue,useProgram:de,setBlending:me,setMaterial:he,setFlipSided:F,setCullFace:ge,setLineWidth:I,setPolygonOffset:L,setScissorTest:_e,activeTexture:ve,bindTexture:ye,unbindTexture:be,compressedTexImage2D:xe,compressedTexImage3D:Se,texImage2D:ke,texImage3D:Ae,updateUBOMapping:Ne,uniformBlockBinding:Pe,texStorage2D:De,texStorage3D:Oe,texSubImage2D:Ce,texSubImage3D:we,compressedTexSubImage2D:Te,compressedTexSubImage3D:Ee,scissor:je,viewport:Me,reset:Fe}}function us(e,t,n,r){let i=ds(r);switch(n){case x:return e*t;case w:return e*t;case T:return e*t*2;case O:return e*t/i.components*i.byteLength;case k:return e*t/i.components*i.byteLength;case A:return e*t*2/i.components*i.byteLength;case j:return e*t*2/i.components*i.byteLength;case S:return e*t*3/i.components*i.byteLength;case C:return e*t*4/i.components*i.byteLength;case M:return e*t*4/i.components*i.byteLength;case ee:case N:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*8;case P:case te:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case re:case ae:return Math.max(e,16)*Math.max(t,8)/4;case ne:case ie:return Math.max(e,8)*Math.max(t,8)/2;case oe:case se:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*8;case ce:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case le:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case ue:return Math.floor((e+4)/5)*Math.floor((t+3)/4)*16;case de:return Math.floor((e+4)/5)*Math.floor((t+4)/5)*16;case fe:return Math.floor((e+5)/6)*Math.floor((t+4)/5)*16;case pe:return Math.floor((e+5)/6)*Math.floor((t+5)/6)*16;case me:return Math.floor((e+7)/8)*Math.floor((t+4)/5)*16;case he:return Math.floor((e+7)/8)*Math.floor((t+5)/6)*16;case F:return Math.floor((e+7)/8)*Math.floor((t+7)/8)*16;case ge:return Math.floor((e+9)/10)*Math.floor((t+4)/5)*16;case I:return Math.floor((e+9)/10)*Math.floor((t+5)/6)*16;case L:return Math.floor((e+9)/10)*Math.floor((t+7)/8)*16;case _e:return Math.floor((e+9)/10)*Math.floor((t+9)/10)*16;case ve:return Math.floor((e+11)/12)*Math.floor((t+9)/10)*16;case ye:return Math.floor((e+11)/12)*Math.floor((t+11)/12)*16;case be:case xe:case Se:return Math.ceil(e/4)*Math.ceil(t/4)*16;case Ce:case we:return Math.ceil(e/4)*Math.ceil(t/4)*8;case Te:case Ee:return Math.ceil(e/4)*Math.ceil(t/4)*16}throw Error(`Unable to determine texture byte length for ${n} format.`)}function ds(e){switch(e){case l:case u:return{byteLength:1,components:1};case f:case d:case g:return{byteLength:2,components:1};case _:case v:return{byteLength:2,components:4};case m:case p:case h:return{byteLength:4,components:1};case b:return{byteLength:4,components:3}}throw Error(`Unknown texture type ${e}.`)}function fs(l,u,d,f,p,m,h){let g=u.has(`WEBGL_multisampled_render_to_texture`)?u.get(`WEBGL_multisampled_render_to_texture`):null,_=typeof navigator>`u`?!1:/OculusBrowser/g.test(navigator.userAgent),v=new R,y=new WeakMap,b,x=new WeakMap,S=!1;try{S=typeof OffscreenCanvas<`u`&&new OffscreenCanvas(1,1).getContext(`2d`)!==null}catch{}function C(e,t){return S?new OffscreenCanvas(e,t):xt(`canvas`)}function w(e,t,n){let r=1,i=De(e);if((i.width>n||i.height>n)&&(r=n/Math.max(i.width,i.height)),r<1){if(typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<`u`&&e instanceof HTMLCanvasElement||typeof ImageBitmap<`u`&&e instanceof ImageBitmap||typeof VideoFrame<`u`&&e instanceof VideoFrame){let n=Math.floor(r*i.width),a=Math.floor(r*i.height);b===void 0&&(b=C(n,a));let o=t?C(n,a):b;return o.width=n,o.height=a,o.getContext(`2d`).drawImage(e,0,0,n,a),console.warn(`THREE.WebGLRenderer: Texture has been resized from (`+i.width+`x`+i.height+`) to (`+n+`x`+a+`).`),o}return`data`in e&&console.warn(`THREE.WebGLRenderer: Image in DataTexture is too big (`+i.width+`x`+i.height+`).`),e}return e}function T(e){return e.generateMipmaps&&e.minFilter!==1003&&e.minFilter!==1006}function E(e){l.generateMipmap(e)}function O(e,t,n,r,i=!1){if(e!==null){if(l[e]!==void 0)return l[e];console.warn(`THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '`+e+`'`)}let a=t;if(t===l.RED&&(n===l.FLOAT&&(a=l.R32F),n===l.HALF_FLOAT&&(a=l.R16F),n===l.UNSIGNED_BYTE&&(a=l.R8)),t===l.RED_INTEGER&&(n===l.UNSIGNED_BYTE&&(a=l.R8UI),n===l.UNSIGNED_SHORT&&(a=l.R16UI),n===l.UNSIGNED_INT&&(a=l.R32UI),n===l.BYTE&&(a=l.R8I),n===l.SHORT&&(a=l.R16I),n===l.INT&&(a=l.R32I)),t===l.RG&&(n===l.FLOAT&&(a=l.RG32F),n===l.HALF_FLOAT&&(a=l.RG16F),n===l.UNSIGNED_BYTE&&(a=l.RG8)),t===l.RG_INTEGER&&(n===l.UNSIGNED_BYTE&&(a=l.RG8UI),n===l.UNSIGNED_SHORT&&(a=l.RG16UI),n===l.UNSIGNED_INT&&(a=l.RG32UI),n===l.BYTE&&(a=l.RG8I),n===l.SHORT&&(a=l.RG16I),n===l.INT&&(a=l.RG32I)),t===l.RGB_INTEGER&&(n===l.UNSIGNED_BYTE&&(a=l.RGB8UI),n===l.UNSIGNED_SHORT&&(a=l.RGB16UI),n===l.UNSIGNED_INT&&(a=l.RGB32UI),n===l.BYTE&&(a=l.RGB8I),n===l.SHORT&&(a=l.RGB16I),n===l.INT&&(a=l.RGB32I)),t===l.RGBA_INTEGER&&(n===l.UNSIGNED_BYTE&&(a=l.RGBA8UI),n===l.UNSIGNED_SHORT&&(a=l.RGBA16UI),n===l.UNSIGNED_INT&&(a=l.RGBA32UI),n===l.BYTE&&(a=l.RGBA8I),n===l.SHORT&&(a=l.RGBA16I),n===l.INT&&(a=l.RGBA32I)),t===l.RGB&&n===l.UNSIGNED_INT_5_9_9_9_REV&&(a=l.RGB9_E5),t===l.RGBA){let e=i?ze:B.getTransfer(r);n===l.FLOAT&&(a=l.RGBA32F),n===l.HALF_FLOAT&&(a=l.RGBA16F),n===l.UNSIGNED_BYTE&&(a=e===`srgb`?l.SRGB8_ALPHA8:l.RGBA8),n===l.UNSIGNED_SHORT_4_4_4_4&&(a=l.RGBA4),n===l.UNSIGNED_SHORT_5_5_5_1&&(a=l.RGB5_A1)}return(a===l.R16F||a===l.R32F||a===l.RG16F||a===l.RG32F||a===l.RGBA16F||a===l.RGBA32F)&&u.get(`EXT_color_buffer_float`),a}function k(e,t){let n;return e?t===null||t===1014||t===1020?n=l.DEPTH24_STENCIL8:t===1015?n=l.DEPTH32F_STENCIL8:t===1012&&(n=l.DEPTH24_STENCIL8,console.warn(`DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.`)):t===null||t===1014||t===1020?n=l.DEPTH_COMPONENT24:t===1015?n=l.DEPTH_COMPONENT32F:t===1012&&(n=l.DEPTH_COMPONENT16),n}function A(e,t){return T(e)===!0||e.isFramebufferTexture&&e.minFilter!==1003&&e.minFilter!==1006?Math.log2(Math.max(t.width,t.height))+1:e.mipmaps!==void 0&&e.mipmaps.length>0?e.mipmaps.length:e.isCompressedTexture&&Array.isArray(e.image)?t.mipmaps.length:1}function j(e){let t=e.target;t.removeEventListener(`dispose`,j),ee(t),t.isVideoTexture&&y.delete(t)}function M(e){let t=e.target;t.removeEventListener(`dispose`,M),P(t)}function ee(e){let t=f.get(e);if(t.__webglInit===void 0)return;let n=e.source,r=x.get(n);if(r){let i=r[t.__cacheKey];i.usedTimes--,i.usedTimes===0&&N(e),Object.keys(r).length===0&&x.delete(n)}f.remove(e)}function N(e){let t=f.get(e);l.deleteTexture(t.__webglTexture);let n=e.source,r=x.get(n);delete r[t.__cacheKey],h.memory.textures--}function P(e){let t=f.get(e);if(e.depthTexture&&e.depthTexture.dispose(),e.isWebGLCubeRenderTarget)for(let e=0;e<6;e++){if(Array.isArray(t.__webglFramebuffer[e]))for(let n=0;n<t.__webglFramebuffer[e].length;n++)l.deleteFramebuffer(t.__webglFramebuffer[e][n]);else l.deleteFramebuffer(t.__webglFramebuffer[e]);t.__webglDepthbuffer&&l.deleteRenderbuffer(t.__webglDepthbuffer[e])}else{if(Array.isArray(t.__webglFramebuffer))for(let e=0;e<t.__webglFramebuffer.length;e++)l.deleteFramebuffer(t.__webglFramebuffer[e]);else l.deleteFramebuffer(t.__webglFramebuffer);if(t.__webglDepthbuffer&&l.deleteRenderbuffer(t.__webglDepthbuffer),t.__webglMultisampledFramebuffer&&l.deleteFramebuffer(t.__webglMultisampledFramebuffer),t.__webglColorRenderbuffer)for(let e=0;e<t.__webglColorRenderbuffer.length;e++)t.__webglColorRenderbuffer[e]&&l.deleteRenderbuffer(t.__webglColorRenderbuffer[e]);t.__webglDepthRenderbuffer&&l.deleteRenderbuffer(t.__webglDepthRenderbuffer)}let n=e.textures;for(let e=0,t=n.length;e<t;e++){let t=f.get(n[e]);t.__webglTexture&&(l.deleteTexture(t.__webglTexture),h.memory.textures--),f.remove(n[e])}f.remove(e)}let te=0;function ne(){te=0}function re(){let e=te;return e>=p.maxTextures&&console.warn(`THREE.WebGLTextures: Trying to use `+e+` texture units while this GPU supports only `+p.maxTextures),te+=1,e}function ie(e){let t=[];return t.push(e.wrapS),t.push(e.wrapT),t.push(e.wrapR||0),t.push(e.magFilter),t.push(e.minFilter),t.push(e.anisotropy),t.push(e.internalFormat),t.push(e.format),t.push(e.type),t.push(e.generateMipmaps),t.push(e.premultiplyAlpha),t.push(e.flipY),t.push(e.unpackAlignment),t.push(e.colorSpace),t.join()}function ae(e,t){let n=f.get(e);if(e.isVideoTexture&&Te(e),e.isRenderTargetTexture===!1&&e.version>0&&n.__version!==e.version){let r=e.image;if(r===null)console.warn(`THREE.WebGLRenderer: Texture marked for update but no image data found.`);else if(r.complete===!1)console.warn(`THREE.WebGLRenderer: Texture marked for update but image is incomplete`);else{me(n,e,t);return}}d.bindTexture(l.TEXTURE_2D,n.__webglTexture,l.TEXTURE0+t)}function oe(e,t){let n=f.get(e);e.version>0&&n.__version!==e.version?me(n,e,t):d.bindTexture(l.TEXTURE_2D_ARRAY,n.__webglTexture,l.TEXTURE0+t)}function se(e,t){let n=f.get(e);e.version>0&&n.__version!==e.version?me(n,e,t):d.bindTexture(l.TEXTURE_3D,n.__webglTexture,l.TEXTURE0+t)}function ce(e,t){let n=f.get(e);e.version>0&&n.__version!==e.version?he(n,e,t):d.bindTexture(l.TEXTURE_CUBE_MAP,n.__webglTexture,l.TEXTURE0+t)}let le={[e]:l.REPEAT,[t]:l.CLAMP_TO_EDGE,[n]:l.MIRRORED_REPEAT},ue={[r]:l.NEAREST,[i]:l.NEAREST_MIPMAP_NEAREST,[a]:l.NEAREST_MIPMAP_LINEAR,[o]:l.LINEAR,[s]:l.LINEAR_MIPMAP_NEAREST,[c]:l.LINEAR_MIPMAP_LINEAR},de={512:l.NEVER,519:l.ALWAYS,513:l.LESS,515:l.LEQUAL,514:l.EQUAL,518:l.GEQUAL,516:l.GREATER,517:l.NOTEQUAL};function fe(e,t){if(t.type===1015&&u.has(`OES_texture_float_linear`)===!1&&(t.magFilter===1006||t.magFilter===1007||t.magFilter===1005||t.magFilter===1008||t.minFilter===1006||t.minFilter===1007||t.minFilter===1005||t.minFilter===1008)&&console.warn(`THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device.`),l.texParameteri(e,l.TEXTURE_WRAP_S,le[t.wrapS]),l.texParameteri(e,l.TEXTURE_WRAP_T,le[t.wrapT]),(e===l.TEXTURE_3D||e===l.TEXTURE_2D_ARRAY)&&l.texParameteri(e,l.TEXTURE_WRAP_R,le[t.wrapR]),l.texParameteri(e,l.TEXTURE_MAG_FILTER,ue[t.magFilter]),l.texParameteri(e,l.TEXTURE_MIN_FILTER,ue[t.minFilter]),t.compareFunction&&(l.texParameteri(e,l.TEXTURE_COMPARE_MODE,l.COMPARE_REF_TO_TEXTURE),l.texParameteri(e,l.TEXTURE_COMPARE_FUNC,de[t.compareFunction])),u.has(`EXT_texture_filter_anisotropic`)===!0){if(t.magFilter===1003||t.minFilter!==1005&&t.minFilter!==1008||t.type===1015&&u.has(`OES_texture_float_linear`)===!1)return;if(t.anisotropy>1||f.get(t).__currentAnisotropy){let n=u.get(`EXT_texture_filter_anisotropic`);l.texParameterf(e,n.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(t.anisotropy,p.getMaxAnisotropy())),f.get(t).__currentAnisotropy=t.anisotropy}}}function pe(e,t){let n=!1;e.__webglInit===void 0&&(e.__webglInit=!0,t.addEventListener(`dispose`,j));let r=t.source,i=x.get(r);i===void 0&&(i={},x.set(r,i));let a=ie(t);if(a!==e.__cacheKey){i[a]===void 0&&(i[a]={texture:l.createTexture(),usedTimes:0},h.memory.textures++,n=!0),i[a].usedTimes++;let r=i[e.__cacheKey];r!==void 0&&(i[e.__cacheKey].usedTimes--,r.usedTimes===0&&N(t)),e.__cacheKey=a,e.__webglTexture=i[a].texture}return n}function me(e,t,n){let r=l.TEXTURE_2D;(t.isDataArrayTexture||t.isCompressedArrayTexture)&&(r=l.TEXTURE_2D_ARRAY),t.isData3DTexture&&(r=l.TEXTURE_3D);let i=pe(e,t),a=t.source;d.bindTexture(r,e.__webglTexture,l.TEXTURE0+n);let o=f.get(a);if(a.version!==o.__version||i===!0){d.activeTexture(l.TEXTURE0+n);let e=B.getPrimaries(B.workingColorSpace),s=t.colorSpace===``?null:B.getPrimaries(t.colorSpace),c=t.colorSpace===``||e===s?l.NONE:l.BROWSER_DEFAULT_WEBGL;l.pixelStorei(l.UNPACK_FLIP_Y_WEBGL,t.flipY),l.pixelStorei(l.UNPACK_PREMULTIPLY_ALPHA_WEBGL,t.premultiplyAlpha),l.pixelStorei(l.UNPACK_ALIGNMENT,t.unpackAlignment),l.pixelStorei(l.UNPACK_COLORSPACE_CONVERSION_WEBGL,c);let u=w(t.image,!1,p.maxTextureSize);u=Ee(t,u);let f=m.convert(t.format,t.colorSpace),h=m.convert(t.type),g=O(t.internalFormat,f,h,t.colorSpace,t.isVideoTexture);fe(r,t);let _,v=t.mipmaps,y=t.isVideoTexture!==!0,b=o.__version===void 0||i===!0,x=a.dataReady,S=A(t,u);if(t.isDepthTexture)g=k(t.format===D,t.type),b&&(y?d.texStorage2D(l.TEXTURE_2D,1,g,u.width,u.height):d.texImage2D(l.TEXTURE_2D,0,g,u.width,u.height,0,f,h,null));else if(t.isDataTexture){if(v.length>0){y&&b&&d.texStorage2D(l.TEXTURE_2D,S,g,v[0].width,v[0].height);for(let e=0,t=v.length;e<t;e++)_=v[e],y?x&&d.texSubImage2D(l.TEXTURE_2D,e,0,0,_.width,_.height,f,h,_.data):d.texImage2D(l.TEXTURE_2D,e,g,_.width,_.height,0,f,h,_.data);t.generateMipmaps=!1}else y?(b&&d.texStorage2D(l.TEXTURE_2D,S,g,u.width,u.height),x&&d.texSubImage2D(l.TEXTURE_2D,0,0,0,u.width,u.height,f,h,u.data)):d.texImage2D(l.TEXTURE_2D,0,g,u.width,u.height,0,f,h,u.data)}else if(t.isCompressedTexture){if(t.isCompressedArrayTexture){y&&b&&d.texStorage3D(l.TEXTURE_2D_ARRAY,S,g,v[0].width,v[0].height,u.depth);for(let e=0,n=v.length;e<n;e++)if(_=v[e],t.format!==1023){if(f!==null){if(y){if(x){if(t.layerUpdates.size>0){let n=us(_.width,_.height,t.format,t.type);for(let r of t.layerUpdates){let t=_.data.subarray(r*n/_.data.BYTES_PER_ELEMENT,(r+1)*n/_.data.BYTES_PER_ELEMENT);d.compressedTexSubImage3D(l.TEXTURE_2D_ARRAY,e,0,0,r,_.width,_.height,1,f,t,0,0)}t.clearLayerUpdates()}else d.compressedTexSubImage3D(l.TEXTURE_2D_ARRAY,e,0,0,0,_.width,_.height,u.depth,f,_.data,0,0)}}else d.compressedTexImage3D(l.TEXTURE_2D_ARRAY,e,g,_.width,_.height,u.depth,0,_.data,0,0)}else console.warn(`THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()`)}else y?x&&d.texSubImage3D(l.TEXTURE_2D_ARRAY,e,0,0,0,_.width,_.height,u.depth,f,h,_.data):d.texImage3D(l.TEXTURE_2D_ARRAY,e,g,_.width,_.height,u.depth,0,f,h,_.data)}else{y&&b&&d.texStorage2D(l.TEXTURE_2D,S,g,v[0].width,v[0].height);for(let e=0,n=v.length;e<n;e++)_=v[e],t.format===1023?y?x&&d.texSubImage2D(l.TEXTURE_2D,e,0,0,_.width,_.height,f,h,_.data):d.texImage2D(l.TEXTURE_2D,e,g,_.width,_.height,0,f,h,_.data):f===null?console.warn(`THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()`):y?x&&d.compressedTexSubImage2D(l.TEXTURE_2D,e,0,0,_.width,_.height,f,_.data):d.compressedTexImage2D(l.TEXTURE_2D,e,g,_.width,_.height,0,_.data)}}else if(t.isDataArrayTexture){if(y){if(b&&d.texStorage3D(l.TEXTURE_2D_ARRAY,S,g,u.width,u.height,u.depth),x){if(t.layerUpdates.size>0){let e=us(u.width,u.height,t.format,t.type);for(let n of t.layerUpdates){let t=u.data.subarray(n*e/u.data.BYTES_PER_ELEMENT,(n+1)*e/u.data.BYTES_PER_ELEMENT);d.texSubImage3D(l.TEXTURE_2D_ARRAY,0,0,0,n,u.width,u.height,1,f,h,t)}t.clearLayerUpdates()}else d.texSubImage3D(l.TEXTURE_2D_ARRAY,0,0,0,0,u.width,u.height,u.depth,f,h,u.data)}}else d.texImage3D(l.TEXTURE_2D_ARRAY,0,g,u.width,u.height,u.depth,0,f,h,u.data)}else if(t.isData3DTexture)y?(b&&d.texStorage3D(l.TEXTURE_3D,S,g,u.width,u.height,u.depth),x&&d.texSubImage3D(l.TEXTURE_3D,0,0,0,0,u.width,u.height,u.depth,f,h,u.data)):d.texImage3D(l.TEXTURE_3D,0,g,u.width,u.height,u.depth,0,f,h,u.data);else if(t.isFramebufferTexture){if(b){if(y)d.texStorage2D(l.TEXTURE_2D,S,g,u.width,u.height);else{let e=u.width,t=u.height;for(let n=0;n<S;n++)d.texImage2D(l.TEXTURE_2D,n,g,e,t,0,f,h,null),e>>=1,t>>=1}}}else if(v.length>0){if(y&&b){let e=De(v[0]);d.texStorage2D(l.TEXTURE_2D,S,g,e.width,e.height)}for(let e=0,t=v.length;e<t;e++)_=v[e],y?x&&d.texSubImage2D(l.TEXTURE_2D,e,0,0,f,h,_):d.texImage2D(l.TEXTURE_2D,e,g,f,h,_);t.generateMipmaps=!1}else if(y){if(b){let e=De(u);d.texStorage2D(l.TEXTURE_2D,S,g,e.width,e.height)}x&&d.texSubImage2D(l.TEXTURE_2D,0,0,0,f,h,u)}else d.texImage2D(l.TEXTURE_2D,0,g,f,h,u);T(t)&&E(r),o.__version=a.version,t.onUpdate&&t.onUpdate(t)}e.__version=t.version}function he(e,t,n){if(t.image.length!==6)return;let r=pe(e,t),i=t.source;d.bindTexture(l.TEXTURE_CUBE_MAP,e.__webglTexture,l.TEXTURE0+n);let a=f.get(i);if(i.version!==a.__version||r===!0){d.activeTexture(l.TEXTURE0+n);let e=B.getPrimaries(B.workingColorSpace),o=t.colorSpace===``?null:B.getPrimaries(t.colorSpace),s=t.colorSpace===``||e===o?l.NONE:l.BROWSER_DEFAULT_WEBGL;l.pixelStorei(l.UNPACK_FLIP_Y_WEBGL,t.flipY),l.pixelStorei(l.UNPACK_PREMULTIPLY_ALPHA_WEBGL,t.premultiplyAlpha),l.pixelStorei(l.UNPACK_ALIGNMENT,t.unpackAlignment),l.pixelStorei(l.UNPACK_COLORSPACE_CONVERSION_WEBGL,s);let c=t.isCompressedTexture||t.image[0].isCompressedTexture,u=t.image[0]&&t.image[0].isDataTexture,f=[];for(let e=0;e<6;e++)!c&&!u?f[e]=w(t.image[e],!0,p.maxCubemapSize):f[e]=u?t.image[e].image:t.image[e],f[e]=Ee(t,f[e]);let h=f[0],g=m.convert(t.format,t.colorSpace),_=m.convert(t.type),v=O(t.internalFormat,g,_,t.colorSpace),y=t.isVideoTexture!==!0,b=a.__version===void 0||r===!0,x=i.dataReady,S=A(t,h);fe(l.TEXTURE_CUBE_MAP,t);let C;if(c){y&&b&&d.texStorage2D(l.TEXTURE_CUBE_MAP,S,v,h.width,h.height);for(let e=0;e<6;e++){C=f[e].mipmaps;for(let n=0;n<C.length;n++){let r=C[n];t.format===1023?y?x&&d.texSubImage2D(l.TEXTURE_CUBE_MAP_POSITIVE_X+e,n,0,0,r.width,r.height,g,_,r.data):d.texImage2D(l.TEXTURE_CUBE_MAP_POSITIVE_X+e,n,v,r.width,r.height,0,g,_,r.data):g===null?console.warn(`THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()`):y?x&&d.compressedTexSubImage2D(l.TEXTURE_CUBE_MAP_POSITIVE_X+e,n,0,0,r.width,r.height,g,r.data):d.compressedTexImage2D(l.TEXTURE_CUBE_MAP_POSITIVE_X+e,n,v,r.width,r.height,0,r.data)}}}else{if(C=t.mipmaps,y&&b){C.length>0&&S++;let e=De(f[0]);d.texStorage2D(l.TEXTURE_CUBE_MAP,S,v,e.width,e.height)}for(let e=0;e<6;e++)if(u){y?x&&d.texSubImage2D(l.TEXTURE_CUBE_MAP_POSITIVE_X+e,0,0,0,f[e].width,f[e].height,g,_,f[e].data):d.texImage2D(l.TEXTURE_CUBE_MAP_POSITIVE_X+e,0,v,f[e].width,f[e].height,0,g,_,f[e].data);for(let t=0;t<C.length;t++){let n=C[t].image[e].image;y?x&&d.texSubImage2D(l.TEXTURE_CUBE_MAP_POSITIVE_X+e,t+1,0,0,n.width,n.height,g,_,n.data):d.texImage2D(l.TEXTURE_CUBE_MAP_POSITIVE_X+e,t+1,v,n.width,n.height,0,g,_,n.data)}}else{y?x&&d.texSubImage2D(l.TEXTURE_CUBE_MAP_POSITIVE_X+e,0,0,0,g,_,f[e]):d.texImage2D(l.TEXTURE_CUBE_MAP_POSITIVE_X+e,0,v,g,_,f[e]);for(let t=0;t<C.length;t++){let n=C[t];y?x&&d.texSubImage2D(l.TEXTURE_CUBE_MAP_POSITIVE_X+e,t+1,0,0,g,_,n.image[e]):d.texImage2D(l.TEXTURE_CUBE_MAP_POSITIVE_X+e,t+1,v,g,_,n.image[e])}}}T(t)&&E(l.TEXTURE_CUBE_MAP),a.__version=i.version,t.onUpdate&&t.onUpdate(t)}e.__version=t.version}function F(e,t,n,r,i,a){let o=m.convert(n.format,n.colorSpace),s=m.convert(n.type),c=O(n.internalFormat,o,s,n.colorSpace);if(!f.get(t).__hasExternalTextures){let e=Math.max(1,t.width>>a),n=Math.max(1,t.height>>a);i===l.TEXTURE_3D||i===l.TEXTURE_2D_ARRAY?d.texImage3D(i,a,c,e,n,t.depth,0,o,s,null):d.texImage2D(i,a,c,e,n,0,o,s,null)}d.bindFramebuffer(l.FRAMEBUFFER,e),we(t)?g.framebufferTexture2DMultisampleEXT(l.FRAMEBUFFER,r,i,f.get(n).__webglTexture,0,Ce(t)):(i===l.TEXTURE_2D||i>=l.TEXTURE_CUBE_MAP_POSITIVE_X&&i<=l.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&l.framebufferTexture2D(l.FRAMEBUFFER,r,i,f.get(n).__webglTexture,a),d.bindFramebuffer(l.FRAMEBUFFER,null)}function ge(e,t,n){if(l.bindRenderbuffer(l.RENDERBUFFER,e),t.depthBuffer){let r=t.depthTexture,i=r&&r.isDepthTexture?r.type:null,a=k(t.stencilBuffer,i),o=t.stencilBuffer?l.DEPTH_STENCIL_ATTACHMENT:l.DEPTH_ATTACHMENT,s=Ce(t);we(t)?g.renderbufferStorageMultisampleEXT(l.RENDERBUFFER,s,a,t.width,t.height):n?l.renderbufferStorageMultisample(l.RENDERBUFFER,s,a,t.width,t.height):l.renderbufferStorage(l.RENDERBUFFER,a,t.width,t.height),l.framebufferRenderbuffer(l.FRAMEBUFFER,o,l.RENDERBUFFER,e)}else{let e=t.textures;for(let r=0;r<e.length;r++){let i=e[r],a=m.convert(i.format,i.colorSpace),o=m.convert(i.type),s=O(i.internalFormat,a,o,i.colorSpace),c=Ce(t);n&&we(t)===!1?l.renderbufferStorageMultisample(l.RENDERBUFFER,c,s,t.width,t.height):we(t)?g.renderbufferStorageMultisampleEXT(l.RENDERBUFFER,c,s,t.width,t.height):l.renderbufferStorage(l.RENDERBUFFER,s,t.width,t.height)}}l.bindRenderbuffer(l.RENDERBUFFER,null)}function I(e,t){if(t&&t.isWebGLCubeRenderTarget)throw Error(`Depth Texture with cube render targets is not supported`);if(d.bindFramebuffer(l.FRAMEBUFFER,e),!(t.depthTexture&&t.depthTexture.isDepthTexture))throw Error(`renderTarget.depthTexture must be an instance of THREE.DepthTexture`);(!f.get(t.depthTexture).__webglTexture||t.depthTexture.image.width!==t.width||t.depthTexture.image.height!==t.height)&&(t.depthTexture.image.width=t.width,t.depthTexture.image.height=t.height,t.depthTexture.needsUpdate=!0),ae(t.depthTexture,0);let n=f.get(t.depthTexture).__webglTexture,r=Ce(t);if(t.depthTexture.format===1026)we(t)?g.framebufferTexture2DMultisampleEXT(l.FRAMEBUFFER,l.DEPTH_ATTACHMENT,l.TEXTURE_2D,n,0,r):l.framebufferTexture2D(l.FRAMEBUFFER,l.DEPTH_ATTACHMENT,l.TEXTURE_2D,n,0);else if(t.depthTexture.format===1027)we(t)?g.framebufferTexture2DMultisampleEXT(l.FRAMEBUFFER,l.DEPTH_STENCIL_ATTACHMENT,l.TEXTURE_2D,n,0,r):l.framebufferTexture2D(l.FRAMEBUFFER,l.DEPTH_STENCIL_ATTACHMENT,l.TEXTURE_2D,n,0);else throw Error(`Unknown depthTexture format`)}function L(e){let t=f.get(e),n=e.isWebGLCubeRenderTarget===!0;if(t.__boundDepthTexture!==e.depthTexture){let n=e.depthTexture;if(t.__depthDisposeCallback&&t.__depthDisposeCallback(),n){let e=()=>{delete t.__boundDepthTexture,delete t.__depthDisposeCallback,n.removeEventListener(`dispose`,e)};n.addEventListener(`dispose`,e),t.__depthDisposeCallback=e}t.__boundDepthTexture=n}if(e.depthTexture&&!t.__autoAllocateDepthBuffer){if(n)throw Error(`target.depthTexture not supported in Cube render targets`);I(t.__webglFramebuffer,e)}else if(n){t.__webglDepthbuffer=[];for(let n=0;n<6;n++)if(d.bindFramebuffer(l.FRAMEBUFFER,t.__webglFramebuffer[n]),t.__webglDepthbuffer[n]===void 0)t.__webglDepthbuffer[n]=l.createRenderbuffer(),ge(t.__webglDepthbuffer[n],e,!1);else{let r=e.stencilBuffer?l.DEPTH_STENCIL_ATTACHMENT:l.DEPTH_ATTACHMENT,i=t.__webglDepthbuffer[n];l.bindRenderbuffer(l.RENDERBUFFER,i),l.framebufferRenderbuffer(l.FRAMEBUFFER,r,l.RENDERBUFFER,i)}}else if(d.bindFramebuffer(l.FRAMEBUFFER,t.__webglFramebuffer),t.__webglDepthbuffer===void 0)t.__webglDepthbuffer=l.createRenderbuffer(),ge(t.__webglDepthbuffer,e,!1);else{let n=e.stencilBuffer?l.DEPTH_STENCIL_ATTACHMENT:l.DEPTH_ATTACHMENT,r=t.__webglDepthbuffer;l.bindRenderbuffer(l.RENDERBUFFER,r),l.framebufferRenderbuffer(l.FRAMEBUFFER,n,l.RENDERBUFFER,r)}d.bindFramebuffer(l.FRAMEBUFFER,null)}function _e(e,t,n){let r=f.get(e);t!==void 0&&F(r.__webglFramebuffer,e,e.texture,l.COLOR_ATTACHMENT0,l.TEXTURE_2D,0),n!==void 0&&L(e)}function ve(e){let t=e.texture,n=f.get(e),r=f.get(t);e.addEventListener(`dispose`,M);let i=e.textures,a=e.isWebGLCubeRenderTarget===!0,o=i.length>1;if(o||(r.__webglTexture===void 0&&(r.__webglTexture=l.createTexture()),r.__version=t.version,h.memory.textures++),a){n.__webglFramebuffer=[];for(let e=0;e<6;e++)if(t.mipmaps&&t.mipmaps.length>0){n.__webglFramebuffer[e]=[];for(let r=0;r<t.mipmaps.length;r++)n.__webglFramebuffer[e][r]=l.createFramebuffer()}else n.__webglFramebuffer[e]=l.createFramebuffer()}else{if(t.mipmaps&&t.mipmaps.length>0){n.__webglFramebuffer=[];for(let e=0;e<t.mipmaps.length;e++)n.__webglFramebuffer[e]=l.createFramebuffer()}else n.__webglFramebuffer=l.createFramebuffer();if(o)for(let e=0,t=i.length;e<t;e++){let t=f.get(i[e]);t.__webglTexture===void 0&&(t.__webglTexture=l.createTexture(),h.memory.textures++)}if(e.samples>0&&we(e)===!1){n.__webglMultisampledFramebuffer=l.createFramebuffer(),n.__webglColorRenderbuffer=[],d.bindFramebuffer(l.FRAMEBUFFER,n.__webglMultisampledFramebuffer);for(let t=0;t<i.length;t++){let r=i[t];n.__webglColorRenderbuffer[t]=l.createRenderbuffer(),l.bindRenderbuffer(l.RENDERBUFFER,n.__webglColorRenderbuffer[t]);let a=m.convert(r.format,r.colorSpace),o=m.convert(r.type),s=O(r.internalFormat,a,o,r.colorSpace,e.isXRRenderTarget===!0),c=Ce(e);l.renderbufferStorageMultisample(l.RENDERBUFFER,c,s,e.width,e.height),l.framebufferRenderbuffer(l.FRAMEBUFFER,l.COLOR_ATTACHMENT0+t,l.RENDERBUFFER,n.__webglColorRenderbuffer[t])}l.bindRenderbuffer(l.RENDERBUFFER,null),e.depthBuffer&&(n.__webglDepthRenderbuffer=l.createRenderbuffer(),ge(n.__webglDepthRenderbuffer,e,!0)),d.bindFramebuffer(l.FRAMEBUFFER,null)}}if(a){d.bindTexture(l.TEXTURE_CUBE_MAP,r.__webglTexture),fe(l.TEXTURE_CUBE_MAP,t);for(let r=0;r<6;r++)if(t.mipmaps&&t.mipmaps.length>0)for(let i=0;i<t.mipmaps.length;i++)F(n.__webglFramebuffer[r][i],e,t,l.COLOR_ATTACHMENT0,l.TEXTURE_CUBE_MAP_POSITIVE_X+r,i);else F(n.__webglFramebuffer[r],e,t,l.COLOR_ATTACHMENT0,l.TEXTURE_CUBE_MAP_POSITIVE_X+r,0);T(t)&&E(l.TEXTURE_CUBE_MAP),d.unbindTexture()}else if(o){for(let t=0,r=i.length;t<r;t++){let r=i[t],a=f.get(r);d.bindTexture(l.TEXTURE_2D,a.__webglTexture),fe(l.TEXTURE_2D,r),F(n.__webglFramebuffer,e,r,l.COLOR_ATTACHMENT0+t,l.TEXTURE_2D,0),T(r)&&E(l.TEXTURE_2D)}d.unbindTexture()}else{let i=l.TEXTURE_2D;if((e.isWebGL3DRenderTarget||e.isWebGLArrayRenderTarget)&&(i=e.isWebGL3DRenderTarget?l.TEXTURE_3D:l.TEXTURE_2D_ARRAY),d.bindTexture(i,r.__webglTexture),fe(i,t),t.mipmaps&&t.mipmaps.length>0)for(let r=0;r<t.mipmaps.length;r++)F(n.__webglFramebuffer[r],e,t,l.COLOR_ATTACHMENT0,i,r);else F(n.__webglFramebuffer,e,t,l.COLOR_ATTACHMENT0,i,0);T(t)&&E(i),d.unbindTexture()}e.depthBuffer&&L(e)}function ye(e){let t=e.textures;for(let n=0,r=t.length;n<r;n++){let r=t[n];if(T(r)){let t=e.isWebGLCubeRenderTarget?l.TEXTURE_CUBE_MAP:l.TEXTURE_2D,n=f.get(r).__webglTexture;d.bindTexture(t,n),E(t),d.unbindTexture()}}}let be=[],xe=[];function Se(e){if(e.samples>0){if(we(e)===!1){let t=e.textures,n=e.width,r=e.height,i=l.COLOR_BUFFER_BIT,a=e.stencilBuffer?l.DEPTH_STENCIL_ATTACHMENT:l.DEPTH_ATTACHMENT,o=f.get(e),s=t.length>1;if(s)for(let e=0;e<t.length;e++)d.bindFramebuffer(l.FRAMEBUFFER,o.__webglMultisampledFramebuffer),l.framebufferRenderbuffer(l.FRAMEBUFFER,l.COLOR_ATTACHMENT0+e,l.RENDERBUFFER,null),d.bindFramebuffer(l.FRAMEBUFFER,o.__webglFramebuffer),l.framebufferTexture2D(l.DRAW_FRAMEBUFFER,l.COLOR_ATTACHMENT0+e,l.TEXTURE_2D,null,0);d.bindFramebuffer(l.READ_FRAMEBUFFER,o.__webglMultisampledFramebuffer),d.bindFramebuffer(l.DRAW_FRAMEBUFFER,o.__webglFramebuffer);for(let c=0;c<t.length;c++){if(e.resolveDepthBuffer&&(e.depthBuffer&&(i|=l.DEPTH_BUFFER_BIT),e.stencilBuffer&&e.resolveStencilBuffer&&(i|=l.STENCIL_BUFFER_BIT)),s){l.framebufferRenderbuffer(l.READ_FRAMEBUFFER,l.COLOR_ATTACHMENT0,l.RENDERBUFFER,o.__webglColorRenderbuffer[c]);let e=f.get(t[c]).__webglTexture;l.framebufferTexture2D(l.DRAW_FRAMEBUFFER,l.COLOR_ATTACHMENT0,l.TEXTURE_2D,e,0)}l.blitFramebuffer(0,0,n,r,0,0,n,r,i,l.NEAREST),_===!0&&(be.length=0,xe.length=0,be.push(l.COLOR_ATTACHMENT0+c),e.depthBuffer&&e.resolveDepthBuffer===!1&&(be.push(a),xe.push(a),l.invalidateFramebuffer(l.DRAW_FRAMEBUFFER,xe)),l.invalidateFramebuffer(l.READ_FRAMEBUFFER,be))}if(d.bindFramebuffer(l.READ_FRAMEBUFFER,null),d.bindFramebuffer(l.DRAW_FRAMEBUFFER,null),s)for(let e=0;e<t.length;e++){d.bindFramebuffer(l.FRAMEBUFFER,o.__webglMultisampledFramebuffer),l.framebufferRenderbuffer(l.FRAMEBUFFER,l.COLOR_ATTACHMENT0+e,l.RENDERBUFFER,o.__webglColorRenderbuffer[e]);let n=f.get(t[e]).__webglTexture;d.bindFramebuffer(l.FRAMEBUFFER,o.__webglFramebuffer),l.framebufferTexture2D(l.DRAW_FRAMEBUFFER,l.COLOR_ATTACHMENT0+e,l.TEXTURE_2D,n,0)}d.bindFramebuffer(l.DRAW_FRAMEBUFFER,o.__webglMultisampledFramebuffer)}else if(e.depthBuffer&&e.resolveDepthBuffer===!1&&_){let t=e.stencilBuffer?l.DEPTH_STENCIL_ATTACHMENT:l.DEPTH_ATTACHMENT;l.invalidateFramebuffer(l.DRAW_FRAMEBUFFER,[t])}}}function Ce(e){return Math.min(p.maxSamples,e.samples)}function we(e){let t=f.get(e);return e.samples>0&&u.has(`WEBGL_multisampled_render_to_texture`)===!0&&t.__useRenderToTexture!==!1}function Te(e){let t=h.render.frame;y.get(e)!==t&&(y.set(e,t),e.update())}function Ee(e,t){let n=e.colorSpace,r=e.format,i=e.type;return e.isCompressedTexture===!0||e.isVideoTexture===!0||n!==`srgb-linear`&&n!==``&&(B.getTransfer(n)===`srgb`?(r!==1023||i!==1009)&&console.warn(`THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType.`):console.error(`THREE.WebGLTextures: Unsupported texture color space:`,n)),t}function De(e){return typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement?(v.width=e.naturalWidth||e.width,v.height=e.naturalHeight||e.height):typeof VideoFrame<`u`&&e instanceof VideoFrame?(v.width=e.displayWidth,v.height=e.displayHeight):(v.width=e.width,v.height=e.height),v}this.allocateTextureUnit=re,this.resetTextureUnits=ne,this.setTexture2D=ae,this.setTexture2DArray=oe,this.setTexture3D=se,this.setTextureCube=ce,this.rebindTextures=_e,this.setupRenderTarget=ve,this.updateRenderTargetMipmap=ye,this.updateMultisampleRenderTarget=Se,this.setupDepthRenderbuffer=L,this.setupFrameBufferTexture=F,this.useMultisampledRTT=we}function ps(e,t){function n(n,r=``){let i,a=B.getTransfer(r);if(n===1009)return e.UNSIGNED_BYTE;if(n===1017)return e.UNSIGNED_SHORT_4_4_4_4;if(n===1018)return e.UNSIGNED_SHORT_5_5_5_1;if(n===35902)return e.UNSIGNED_INT_5_9_9_9_REV;if(n===1010)return e.BYTE;if(n===1011)return e.SHORT;if(n===1012)return e.UNSIGNED_SHORT;if(n===1013)return e.INT;if(n===1014)return e.UNSIGNED_INT;if(n===1015)return e.FLOAT;if(n===1016)return e.HALF_FLOAT;if(n===1021)return e.ALPHA;if(n===1022)return e.RGB;if(n===1023)return e.RGBA;if(n===1024)return e.LUMINANCE;if(n===1025)return e.LUMINANCE_ALPHA;if(n===1026)return e.DEPTH_COMPONENT;if(n===1027)return e.DEPTH_STENCIL;if(n===1028)return e.RED;if(n===1029)return e.RED_INTEGER;if(n===1030)return e.RG;if(n===1031)return e.RG_INTEGER;if(n===1033)return e.RGBA_INTEGER;if(n===33776||n===33777||n===33778||n===33779){if(a===`srgb`){if(i=t.get(`WEBGL_compressed_texture_s3tc_srgb`),i!==null){if(n===33776)return i.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===33777)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===33778)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===33779)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null}else if(i=t.get(`WEBGL_compressed_texture_s3tc`),i!==null){if(n===33776)return i.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===33777)return i.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===33778)return i.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===33779)return i.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null}if(n===35840||n===35841||n===35842||n===35843){if(i=t.get(`WEBGL_compressed_texture_pvrtc`),i!==null){if(n===35840)return i.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===35841)return i.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===35842)return i.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===35843)return i.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null}if(n===36196||n===37492||n===37496){if(i=t.get(`WEBGL_compressed_texture_etc`),i!==null){if(n===36196||n===37492)return a===`srgb`?i.COMPRESSED_SRGB8_ETC2:i.COMPRESSED_RGB8_ETC2;if(n===37496)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:i.COMPRESSED_RGBA8_ETC2_EAC}else return null}if(n===37808||n===37809||n===37810||n===37811||n===37812||n===37813||n===37814||n===37815||n===37816||n===37817||n===37818||n===37819||n===37820||n===37821){if(i=t.get(`WEBGL_compressed_texture_astc`),i!==null){if(n===37808)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:i.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===37809)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:i.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===37810)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:i.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===37811)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:i.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===37812)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:i.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===37813)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:i.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===37814)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:i.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===37815)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:i.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===37816)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:i.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===37817)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:i.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===37818)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:i.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===37819)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:i.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===37820)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:i.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===37821)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:i.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null}if(n===36492||n===36494||n===36495){if(i=t.get(`EXT_texture_compression_bptc`),i!==null){if(n===36492)return a===`srgb`?i.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:i.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===36494)return i.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===36495)return i.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null}if(n===36283||n===36284||n===36285||n===36286){if(i=t.get(`EXT_texture_compression_rgtc`),i!==null){if(n===36492)return i.COMPRESSED_RED_RGTC1_EXT;if(n===36284)return i.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===36285)return i.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===36286)return i.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null}return n===1020?e.UNSIGNED_INT_24_8:e[n]===void 0?null:e[n]}return{convert:n}}var ms=class extends ni{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}},Y=class extends Yn{constructor(){super(),this.isGroup=!0,this.type=`Group`}},hs={type:`move`},gs=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Y,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Y,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new V,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new V),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Y,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new V,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new V),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:`connected`,data:e}),this}disconnect(e){return this.dispatchEvent({type:`disconnected`,data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let r=null,i=null,a=null,o=this._targetRay,s=this._grip,c=this._hand;if(e&&t.session.visibilityState!==`visible-blurred`){if(c&&e.hand){a=!0;for(let r of e.hand.values()){let e=t.getJointPose(r,n),i=this._getHandJoint(c,r);e!==null&&(i.matrix.fromArray(e.transform.matrix),i.matrix.decompose(i.position,i.rotation,i.scale),i.matrixWorldNeedsUpdate=!0,i.jointRadius=e.radius),i.visible=e!==null}let r=c.joints[`index-finger-tip`],i=c.joints[`thumb-tip`],o=r.position.distanceTo(i.position);c.inputState.pinching&&o>.025?(c.inputState.pinching=!1,this.dispatchEvent({type:`pinchend`,handedness:e.handedness,target:this})):!c.inputState.pinching&&o<=.015&&(c.inputState.pinching=!0,this.dispatchEvent({type:`pinchstart`,handedness:e.handedness,target:this}))}else s!==null&&e.gripSpace&&(i=t.getPose(e.gripSpace,n),i!==null&&(s.matrix.fromArray(i.transform.matrix),s.matrix.decompose(s.position,s.rotation,s.scale),s.matrixWorldNeedsUpdate=!0,i.linearVelocity?(s.hasLinearVelocity=!0,s.linearVelocity.copy(i.linearVelocity)):s.hasLinearVelocity=!1,i.angularVelocity?(s.hasAngularVelocity=!0,s.angularVelocity.copy(i.angularVelocity)):s.hasAngularVelocity=!1));o!==null&&(r=t.getPose(e.targetRaySpace,n),r===null&&i!==null&&(r=i),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(hs)))}return o!==null&&(o.visible=r!==null),s!==null&&(s.visible=i!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new Y;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},_s=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,vs=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,ys=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,n){if(this.texture===null){let r=new Bt,i=e.properties.get(r);i.__webglTexture=t.texture,(t.depthNear!=n.depthNear||t.depthFar!=n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new Zr({vertexShader:_s,fragmentShader:vs,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new G(new _i(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},bs=class extends Ge{constructor(e,t){super();let n=this,r=null,i=1,a=null,o=`local-floor`,s=1,c=null,u=null,d=null,f=null,p=null,h=null,g=new ys,_=t.getContextAttributes(),v=null,b=null,x=[],S=[],w=new R,T=null,O=new ni;O.layers.enable(1),O.viewport=new Vt;let k=new ni;k.layers.enable(2),k.viewport=new Vt;let A=[O,k],j=new ms;j.layers.enable(1),j.layers.enable(2);let M=null,ee=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(e){let t=x[e];return t===void 0&&(t=new gs,x[e]=t),t.getTargetRaySpace()},this.getControllerGrip=function(e){let t=x[e];return t===void 0&&(t=new gs,x[e]=t),t.getGripSpace()},this.getHand=function(e){let t=x[e];return t===void 0&&(t=new gs,x[e]=t),t.getHandSpace()};function N(e){let t=S.indexOf(e.inputSource);if(t===-1)return;let n=x[t];n!==void 0&&(n.update(e.inputSource,e.frame,c||a),n.dispatchEvent({type:e.type,data:e.inputSource}))}function P(){r.removeEventListener(`select`,N),r.removeEventListener(`selectstart`,N),r.removeEventListener(`selectend`,N),r.removeEventListener(`squeeze`,N),r.removeEventListener(`squeezestart`,N),r.removeEventListener(`squeezeend`,N),r.removeEventListener(`end`,P),r.removeEventListener(`inputsourceschange`,te);for(let e=0;e<x.length;e++){let t=S[e];t!==null&&(S[e]=null,x[e].disconnect(t))}M=null,ee=null,g.reset(),e.setRenderTarget(v),p=null,f=null,d=null,r=null,b=null,le.stop(),n.isPresenting=!1,e.setPixelRatio(T),e.setSize(w.width,w.height,!1),n.dispatchEvent({type:`sessionend`})}this.setFramebufferScaleFactor=function(e){i=e,n.isPresenting===!0&&console.warn(`THREE.WebXRManager: Cannot change framebuffer scale while presenting.`)},this.setReferenceSpaceType=function(e){o=e,n.isPresenting===!0&&console.warn(`THREE.WebXRManager: Cannot change reference space type while presenting.`)},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(e){c=e},this.getBaseLayer=function(){return f===null?p:f},this.getBinding=function(){return d},this.getFrame=function(){return h},this.getSession=function(){return r},this.setSession=async function(u){if(r=u,r!==null){if(v=e.getRenderTarget(),r.addEventListener(`select`,N),r.addEventListener(`selectstart`,N),r.addEventListener(`selectend`,N),r.addEventListener(`squeeze`,N),r.addEventListener(`squeezestart`,N),r.addEventListener(`squeezeend`,N),r.addEventListener(`end`,P),r.addEventListener(`inputsourceschange`,te),_.xrCompatible!==!0&&await t.makeXRCompatible(),T=e.getPixelRatio(),e.getSize(w),r.renderState.layers===void 0){let n={antialias:_.antialias,alpha:!0,depth:_.depth,stencil:_.stencil,framebufferScaleFactor:i};p=new XRWebGLLayer(r,t,n),r.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),b=new Ut(p.framebufferWidth,p.framebufferHeight,{format:C,type:l,colorSpace:e.outputColorSpace,stencilBuffer:_.stencil})}else{let n=null,a=null,o=null;_.depth&&(o=_.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,n=_.stencil?D:E,a=_.stencil?y:m);let s={colorFormat:t.RGBA8,depthFormat:o,scaleFactor:i};d=new XRWebGLBinding(r,t),f=d.createProjectionLayer(s),r.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),b=new Ut(f.textureWidth,f.textureHeight,{format:C,type:l,depthTexture:new na(f.textureWidth,f.textureHeight,a,void 0,void 0,void 0,void 0,void 0,void 0,n),stencilBuffer:_.stencil,colorSpace:e.outputColorSpace,samples:_.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1})}b.isXRRenderTarget=!0,this.setFoveation(s),c=null,a=await r.requestReferenceSpace(o),le.setContext(r),le.start(),n.isPresenting=!0,n.dispatchEvent({type:`sessionstart`})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function te(e){for(let t=0;t<e.removed.length;t++){let n=e.removed[t],r=S.indexOf(n);r>=0&&(S[r]=null,x[r].disconnect(n))}for(let t=0;t<e.added.length;t++){let n=e.added[t],r=S.indexOf(n);if(r===-1){for(let e=0;e<x.length;e++)if(e>=S.length){S.push(n),r=e;break}else if(S[e]===null){S[e]=n,r=e;break}if(r===-1)break}let i=x[r];i&&i.connect(n)}}let ne=new V,re=new V;function ie(e,t,n){ne.setFromMatrixPosition(t.matrixWorld),re.setFromMatrixPosition(n.matrixWorld);let r=ne.distanceTo(re),i=t.projectionMatrix.elements,a=n.projectionMatrix.elements,o=i[14]/(i[10]-1),s=i[14]/(i[10]+1),c=(i[9]+1)/i[5],l=(i[9]-1)/i[5],u=(i[8]-1)/i[0],d=(a[8]+1)/a[0],f=o*u,p=o*d,m=r/(-u+d),h=m*-u;if(t.matrixWorld.decompose(e.position,e.quaternion,e.scale),e.translateX(h),e.translateZ(m),e.matrixWorld.compose(e.position,e.quaternion,e.scale),e.matrixWorldInverse.copy(e.matrixWorld).invert(),i[10]===-1)e.projectionMatrix.copy(t.projectionMatrix),e.projectionMatrixInverse.copy(t.projectionMatrixInverse);else{let t=o+m,n=s+m,i=f-h,a=p+(r-h),u=c*s/n*t,d=l*s/n*t;e.projectionMatrix.makePerspective(i,a,u,d,t,n),e.projectionMatrixInverse.copy(e.projectionMatrix).invert()}}function ae(e,t){t===null?e.matrixWorld.copy(e.matrix):e.matrixWorld.multiplyMatrices(t.matrixWorld,e.matrix),e.matrixWorldInverse.copy(e.matrixWorld).invert()}this.updateCamera=function(e){if(r===null)return;let t=e.near,n=e.far;g.texture!==null&&(g.depthNear>0&&(t=g.depthNear),g.depthFar>0&&(n=g.depthFar)),j.near=k.near=O.near=t,j.far=k.far=O.far=n,(M!==j.near||ee!==j.far)&&(r.updateRenderState({depthNear:j.near,depthFar:j.far}),M=j.near,ee=j.far);let i=e.parent,a=j.cameras;ae(j,i);for(let e=0;e<a.length;e++)ae(a[e],i);a.length===2?ie(j,O,k):j.projectionMatrix.copy(O.projectionMatrix),oe(e,j,i)};function oe(e,t,n){n===null?e.matrix.copy(t.matrixWorld):(e.matrix.copy(n.matrixWorld),e.matrix.invert(),e.matrix.multiply(t.matrixWorld)),e.matrix.decompose(e.position,e.quaternion,e.scale),e.updateMatrixWorld(!0),e.projectionMatrix.copy(t.projectionMatrix),e.projectionMatrixInverse.copy(t.projectionMatrixInverse),e.isPerspectiveCamera&&(e.fov=Ye*2*Math.atan(1/e.projectionMatrix.elements[5]),e.zoom=1)}this.getCamera=function(){return j},this.getFoveation=function(){if(f!==null||p!==null)return s},this.setFoveation=function(e){s=e,f!==null&&(f.fixedFoveation=e),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=e)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(j)};let se=null;function ce(t,i){if(u=i.getViewerPose(c||a),h=i,u!==null){let t=u.views;p!==null&&(e.setRenderTargetFramebuffer(b,p.framebuffer),e.setRenderTarget(b));let n=!1;t.length!==j.cameras.length&&(j.cameras.length=0,n=!0);for(let r=0;r<t.length;r++){let i=t[r],a=null;if(p!==null)a=p.getViewport(i);else{let t=d.getViewSubImage(f,i);a=t.viewport,r===0&&(e.setRenderTargetTextures(b,t.colorTexture,f.ignoreDepthValues?void 0:t.depthStencilTexture),e.setRenderTarget(b))}let o=A[r];o===void 0&&(o=new ni,o.layers.enable(r),o.viewport=new Vt,A[r]=o),o.matrix.fromArray(i.transform.matrix),o.matrix.decompose(o.position,o.quaternion,o.scale),o.projectionMatrix.fromArray(i.projectionMatrix),o.projectionMatrixInverse.copy(o.projectionMatrix).invert(),o.viewport.set(a.x,a.y,a.width,a.height),r===0&&(j.matrix.copy(o.matrix),j.matrix.decompose(j.position,j.quaternion,j.scale)),n===!0&&j.cameras.push(o)}let i=r.enabledFeatures;if(i&&i.includes(`depth-sensing`)){let n=d.getDepthInformation(t[0]);n&&n.isValid&&n.texture&&g.init(e,n,r.renderState)}}for(let e=0;e<x.length;e++){let t=S[e],n=x[e];t!==null&&n!==void 0&&n.update(t,i,c||a)}se&&se(t,i),i.detectedPlanes&&n.dispatchEvent({type:`planesdetected`,data:i}),h=null}let le=new hi;le.setAnimationLoop(ce),this.setAnimationLoop=function(e){se=e},this.dispose=function(){}}},xs=new Mn,Ss=new H;function Cs(e,t){function n(e,t){e.matrixAutoUpdate===!0&&e.updateMatrix(),t.value.copy(e.matrix)}function r(t,n){n.color.getRGB(t.fogColor.value,qr(e)),n.isFog?(t.fogNear.value=n.near,t.fogFar.value=n.far):n.isFogExp2&&(t.fogDensity.value=n.density)}function i(e,t,n,r,i){t.isMeshBasicMaterial||t.isMeshLambertMaterial?a(e,t):t.isMeshToonMaterial?(a(e,t),d(e,t)):t.isMeshPhongMaterial?(a(e,t),u(e,t)):t.isMeshStandardMaterial?(a(e,t),f(e,t),t.isMeshPhysicalMaterial&&p(e,t,i)):t.isMeshMatcapMaterial?(a(e,t),m(e,t)):t.isMeshDepthMaterial?a(e,t):t.isMeshDistanceMaterial?(a(e,t),h(e,t)):t.isMeshNormalMaterial?a(e,t):t.isLineBasicMaterial?(o(e,t),t.isLineDashedMaterial&&s(e,t)):t.isPointsMaterial?c(e,t,n,r):t.isSpriteMaterial?l(e,t):t.isShadowMaterial?(e.color.value.copy(t.color),e.opacity.value=t.opacity):t.isShaderMaterial&&(t.uniformsNeedUpdate=!1)}function a(e,r){e.opacity.value=r.opacity,r.color&&e.diffuse.value.copy(r.color),r.emissive&&e.emissive.value.copy(r.emissive).multiplyScalar(r.emissiveIntensity),r.map&&(e.map.value=r.map,n(r.map,e.mapTransform)),r.alphaMap&&(e.alphaMap.value=r.alphaMap,n(r.alphaMap,e.alphaMapTransform)),r.bumpMap&&(e.bumpMap.value=r.bumpMap,n(r.bumpMap,e.bumpMapTransform),e.bumpScale.value=r.bumpScale,r.side===1&&(e.bumpScale.value*=-1)),r.normalMap&&(e.normalMap.value=r.normalMap,n(r.normalMap,e.normalMapTransform),e.normalScale.value.copy(r.normalScale),r.side===1&&e.normalScale.value.negate()),r.displacementMap&&(e.displacementMap.value=r.displacementMap,n(r.displacementMap,e.displacementMapTransform),e.displacementScale.value=r.displacementScale,e.displacementBias.value=r.displacementBias),r.emissiveMap&&(e.emissiveMap.value=r.emissiveMap,n(r.emissiveMap,e.emissiveMapTransform)),r.specularMap&&(e.specularMap.value=r.specularMap,n(r.specularMap,e.specularMapTransform)),r.alphaTest>0&&(e.alphaTest.value=r.alphaTest);let i=t.get(r),a=i.envMap,o=i.envMapRotation;a&&(e.envMap.value=a,xs.copy(o),xs.x*=-1,xs.y*=-1,xs.z*=-1,a.isCubeTexture&&a.isRenderTargetTexture===!1&&(xs.y*=-1,xs.z*=-1),e.envMapRotation.value.setFromMatrix4(Ss.makeRotationFromEuler(xs)),e.flipEnvMap.value=a.isCubeTexture&&a.isRenderTargetTexture===!1?-1:1,e.reflectivity.value=r.reflectivity,e.ior.value=r.ior,e.refractionRatio.value=r.refractionRatio),r.lightMap&&(e.lightMap.value=r.lightMap,e.lightMapIntensity.value=r.lightMapIntensity,n(r.lightMap,e.lightMapTransform)),r.aoMap&&(e.aoMap.value=r.aoMap,e.aoMapIntensity.value=r.aoMapIntensity,n(r.aoMap,e.aoMapTransform))}function o(e,t){e.diffuse.value.copy(t.color),e.opacity.value=t.opacity,t.map&&(e.map.value=t.map,n(t.map,e.mapTransform))}function s(e,t){e.dashSize.value=t.dashSize,e.totalSize.value=t.dashSize+t.gapSize,e.scale.value=t.scale}function c(e,t,r,i){e.diffuse.value.copy(t.color),e.opacity.value=t.opacity,e.size.value=t.size*r,e.scale.value=i*.5,t.map&&(e.map.value=t.map,n(t.map,e.uvTransform)),t.alphaMap&&(e.alphaMap.value=t.alphaMap,n(t.alphaMap,e.alphaMapTransform)),t.alphaTest>0&&(e.alphaTest.value=t.alphaTest)}function l(e,t){e.diffuse.value.copy(t.color),e.opacity.value=t.opacity,e.rotation.value=t.rotation,t.map&&(e.map.value=t.map,n(t.map,e.mapTransform)),t.alphaMap&&(e.alphaMap.value=t.alphaMap,n(t.alphaMap,e.alphaMapTransform)),t.alphaTest>0&&(e.alphaTest.value=t.alphaTest)}function u(e,t){e.specular.value.copy(t.specular),e.shininess.value=Math.max(t.shininess,1e-4)}function d(e,t){t.gradientMap&&(e.gradientMap.value=t.gradientMap)}function f(e,t){e.metalness.value=t.metalness,t.metalnessMap&&(e.metalnessMap.value=t.metalnessMap,n(t.metalnessMap,e.metalnessMapTransform)),e.roughness.value=t.roughness,t.roughnessMap&&(e.roughnessMap.value=t.roughnessMap,n(t.roughnessMap,e.roughnessMapTransform)),t.envMap&&(e.envMapIntensity.value=t.envMapIntensity)}function p(e,t,r){e.ior.value=t.ior,t.sheen>0&&(e.sheenColor.value.copy(t.sheenColor).multiplyScalar(t.sheen),e.sheenRoughness.value=t.sheenRoughness,t.sheenColorMap&&(e.sheenColorMap.value=t.sheenColorMap,n(t.sheenColorMap,e.sheenColorMapTransform)),t.sheenRoughnessMap&&(e.sheenRoughnessMap.value=t.sheenRoughnessMap,n(t.sheenRoughnessMap,e.sheenRoughnessMapTransform))),t.clearcoat>0&&(e.clearcoat.value=t.clearcoat,e.clearcoatRoughness.value=t.clearcoatRoughness,t.clearcoatMap&&(e.clearcoatMap.value=t.clearcoatMap,n(t.clearcoatMap,e.clearcoatMapTransform)),t.clearcoatRoughnessMap&&(e.clearcoatRoughnessMap.value=t.clearcoatRoughnessMap,n(t.clearcoatRoughnessMap,e.clearcoatRoughnessMapTransform)),t.clearcoatNormalMap&&(e.clearcoatNormalMap.value=t.clearcoatNormalMap,n(t.clearcoatNormalMap,e.clearcoatNormalMapTransform),e.clearcoatNormalScale.value.copy(t.clearcoatNormalScale),t.side===1&&e.clearcoatNormalScale.value.negate())),t.dispersion>0&&(e.dispersion.value=t.dispersion),t.iridescence>0&&(e.iridescence.value=t.iridescence,e.iridescenceIOR.value=t.iridescenceIOR,e.iridescenceThicknessMinimum.value=t.iridescenceThicknessRange[0],e.iridescenceThicknessMaximum.value=t.iridescenceThicknessRange[1],t.iridescenceMap&&(e.iridescenceMap.value=t.iridescenceMap,n(t.iridescenceMap,e.iridescenceMapTransform)),t.iridescenceThicknessMap&&(e.iridescenceThicknessMap.value=t.iridescenceThicknessMap,n(t.iridescenceThicknessMap,e.iridescenceThicknessMapTransform))),t.transmission>0&&(e.transmission.value=t.transmission,e.transmissionSamplerMap.value=r.texture,e.transmissionSamplerSize.value.set(r.width,r.height),t.transmissionMap&&(e.transmissionMap.value=t.transmissionMap,n(t.transmissionMap,e.transmissionMapTransform)),e.thickness.value=t.thickness,t.thicknessMap&&(e.thicknessMap.value=t.thicknessMap,n(t.thicknessMap,e.thicknessMapTransform)),e.attenuationDistance.value=t.attenuationDistance,e.attenuationColor.value.copy(t.attenuationColor)),t.anisotropy>0&&(e.anisotropyVector.value.set(t.anisotropy*Math.cos(t.anisotropyRotation),t.anisotropy*Math.sin(t.anisotropyRotation)),t.anisotropyMap&&(e.anisotropyMap.value=t.anisotropyMap,n(t.anisotropyMap,e.anisotropyMapTransform))),e.specularIntensity.value=t.specularIntensity,e.specularColor.value.copy(t.specularColor),t.specularColorMap&&(e.specularColorMap.value=t.specularColorMap,n(t.specularColorMap,e.specularColorMapTransform)),t.specularIntensityMap&&(e.specularIntensityMap.value=t.specularIntensityMap,n(t.specularIntensityMap,e.specularIntensityMapTransform))}function m(e,t){t.matcap&&(e.matcap.value=t.matcap)}function h(e,n){let r=t.get(n).light;e.referencePosition.value.setFromMatrixPosition(r.matrixWorld),e.nearDistance.value=r.shadow.camera.near,e.farDistance.value=r.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:i}}function ws(e,t,n,r){let i={},a={},o=[],s=e.getParameter(e.MAX_UNIFORM_BUFFER_BINDINGS);function c(e,t){let n=t.program;r.uniformBlockBinding(e,n)}function l(e,n){let o=i[e.id];o===void 0&&(m(e),o=u(e),i[e.id]=o,e.addEventListener(`dispose`,g));let s=n.program;r.updateUBOMapping(e,s);let c=t.render.frame;a[e.id]!==c&&(f(e),a[e.id]=c)}function u(t){let n=d();t.__bindingPointIndex=n;let r=e.createBuffer(),i=t.__size,a=t.usage;return e.bindBuffer(e.UNIFORM_BUFFER,r),e.bufferData(e.UNIFORM_BUFFER,i,a),e.bindBuffer(e.UNIFORM_BUFFER,null),e.bindBufferBase(e.UNIFORM_BUFFER,n,r),r}function d(){for(let e=0;e<s;e++)if(o.indexOf(e)===-1)return o.push(e),e;return console.error(`THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached.`),0}function f(t){let n=i[t.id],r=t.uniforms,a=t.__cache;e.bindBuffer(e.UNIFORM_BUFFER,n);for(let t=0,n=r.length;t<n;t++){let n=Array.isArray(r[t])?r[t]:[r[t]];for(let r=0,i=n.length;r<i;r++){let i=n[r];if(p(i,t,r,a)===!0){let t=i.__offset,n=Array.isArray(i.value)?i.value:[i.value],r=0;for(let a=0;a<n.length;a++){let o=n[a],s=h(o);typeof o==`number`||typeof o==`boolean`?(i.__data[0]=o,e.bufferSubData(e.UNIFORM_BUFFER,t+r,i.__data)):o.isMatrix3?(i.__data[0]=o.elements[0],i.__data[1]=o.elements[1],i.__data[2]=o.elements[2],i.__data[3]=0,i.__data[4]=o.elements[3],i.__data[5]=o.elements[4],i.__data[6]=o.elements[5],i.__data[7]=0,i.__data[8]=o.elements[6],i.__data[9]=o.elements[7],i.__data[10]=o.elements[8],i.__data[11]=0):(o.toArray(i.__data,r),r+=s.storage/Float32Array.BYTES_PER_ELEMENT)}e.bufferSubData(e.UNIFORM_BUFFER,t,i.__data)}}}e.bindBuffer(e.UNIFORM_BUFFER,null)}function p(e,t,n,r){let i=e.value,a=t+`_`+n;if(r[a]===void 0)return r[a]=typeof i==`number`||typeof i==`boolean`?i:i.clone(),!0;{let e=r[a];if(typeof i==`number`||typeof i==`boolean`){if(e!==i)return r[a]=i,!0}else if(e.equals(i)===!1)return e.copy(i),!0}return!1}function m(e){let t=e.uniforms,n=0;for(let e=0,r=t.length;e<r;e++){let r=Array.isArray(t[e])?t[e]:[t[e]];for(let e=0,t=r.length;e<t;e++){let t=r[e],i=Array.isArray(t.value)?t.value:[t.value];for(let e=0,r=i.length;e<r;e++){let r=i[e],a=h(r),o=n%16,s=o%a.boundary,c=o+s;n+=s,c!==0&&16-c<a.storage&&(n+=16-c),t.__data=new Float32Array(a.storage/Float32Array.BYTES_PER_ELEMENT),t.__offset=n,n+=a.storage}}}let r=n%16;return r>0&&(n+=16-r),e.__size=n,e.__cache={},this}function h(e){let t={boundary:0,storage:0};return typeof e==`number`||typeof e==`boolean`?(t.boundary=4,t.storage=4):e.isVector2?(t.boundary=8,t.storage=8):e.isVector3||e.isColor?(t.boundary=16,t.storage=12):e.isVector4?(t.boundary=16,t.storage=16):e.isMatrix3?(t.boundary=48,t.storage=48):e.isMatrix4?(t.boundary=64,t.storage=64):e.isTexture?console.warn(`THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group.`):console.warn(`THREE.WebGLRenderer: Unsupported uniform value type.`,e),t}function g(t){let n=t.target;n.removeEventListener(`dispose`,g);let r=o.indexOf(n.__bindingPointIndex);o.splice(r,1),e.deleteBuffer(i[n.id]),delete i[n.id],delete a[n.id]}function _(){for(let t in i)e.deleteBuffer(i[t]);o=[],i={},a={}}return{bind:c,update:l,dispose:_}}var Ts=class{constructor(e={}){let{canvas:t=St(),context:n=null,depth:r=!0,stencil:i=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:s=!0,preserveDrawingBuffer:u=!1,powerPreference:d=`default`,failIfMajorPerformanceCaveat:f=!1}=e;this.isWebGLRenderer=!0;let p;if(n!==null){if(typeof WebGLRenderingContext<`u`&&n instanceof WebGLRenderingContext)throw Error(`THREE.WebGLRenderer: WebGL 1 is not supported since r163.`);p=n.getContextAttributes().alpha}else p=a;let m=new Uint32Array(4),h=new Int32Array(4),_=null,v=null,y=[],b=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Fe,this.toneMapping=0,this.toneMappingExposure=1;let x=this,S=!1,C=0,w=0,T=null,E=-1,D=null,O=new Vt,k=new Vt,A=null,j=new U(0),M=0,ee=t.width,N=t.height,P=1,te=null,ne=null,re=new Vt(0,0,ee,N),ie=new Vt(0,0,ee,N),ae=!1,oe=new mi,se=!1,ce=!1,le=new H,ue=new H,de=new V,fe=new Vt,pe={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},me=!1;function he(){return T===null?P:1}let F=n;function ge(e,n){return t.getContext(e,n)}try{let e={alpha:!0,depth:r,stencil:i,antialias:o,premultipliedAlpha:s,preserveDrawingBuffer:u,powerPreference:d,failIfMajorPerformanceCaveat:f};if(`setAttribute`in t&&t.setAttribute(`data-engine`,`three.js r169`),t.addEventListener(`webglcontextlost`,Ue,!1),t.addEventListener(`webglcontextrestored`,We,!1),t.addEventListener(`webglcontextcreationerror`,Ge,!1),F===null){let t=`webgl2`;if(F=ge(t,e),F===null)throw ge(t)?Error(`Error creating WebGL context with your selected attributes.`):Error(`Error creating WebGL context.`)}}catch(e){throw console.error(`THREE.WebGLRenderer: `+e.message),e}let I,L,_e,ve,ye,be,xe,Se,Ce,we,Te,Ee,De,Oe,ke,Ae,je,Me,Ne,Pe,Le,Re,ze,Be;function Ve(){I=new Xi(F),I.init(),Re=new ps(F,I),L=new Ti(F,I,e,Re),_e=new ls(F),L.reverseDepthBuffer&&_e.buffers.depth.setReversed(!0),ve=new $i(F),ye=new Go,be=new fs(F,I,_e,ye,L,Re,ve),xe=new Di(x),Se=new Yi(x),Ce=new gi(F),ze=new Ci(F,Ce),we=new Zi(F,Ce,ve,ze),Te=new ta(F,we,Ce,ve),Ne=new ea(F,L,be),Ae=new Ei(ye),Ee=new Wo(x,xe,Se,I,L,ze,Ae),De=new Cs(x,ye),Oe=new Yo,ke=new ns(I),Me=new Si(x,xe,Se,_e,Te,p,s),je=new ss(x,Te,L),Be=new ws(F,ve,L,_e),Pe=new wi(F,I,ve),Le=new Qi(F,I,ve),ve.programs=Ee.programs,x.capabilities=L,x.extensions=I,x.properties=ye,x.renderLists=Oe,x.shadowMap=je,x.state=_e,x.info=ve}Ve();let He=new bs(x,F);this.xr=He,this.getContext=function(){return F},this.getContextAttributes=function(){return F.getContextAttributes()},this.forceContextLoss=function(){let e=I.get(`WEBGL_lose_context`);e&&e.loseContext()},this.forceContextRestore=function(){let e=I.get(`WEBGL_lose_context`);e&&e.restoreContext()},this.getPixelRatio=function(){return P},this.setPixelRatio=function(e){e!==void 0&&(P=e,this.setSize(ee,N,!1))},this.getSize=function(e){return e.set(ee,N)},this.setSize=function(e,n,r=!0){He.isPresenting?console.warn(`THREE.WebGLRenderer: Can't change size while VR device is presenting.`):(ee=e,N=n,t.width=Math.floor(e*P),t.height=Math.floor(n*P),r===!0&&(t.style.width=e+`px`,t.style.height=n+`px`),this.setViewport(0,0,e,n))},this.getDrawingBufferSize=function(e){return e.set(ee*P,N*P).floor()},this.setDrawingBufferSize=function(e,n,r){ee=e,N=n,P=r,t.width=Math.floor(e*r),t.height=Math.floor(n*r),this.setViewport(0,0,e,n)},this.getCurrentViewport=function(e){return e.copy(O)},this.getViewport=function(e){return e.copy(re)},this.setViewport=function(e,t,n,r){e.isVector4?re.set(e.x,e.y,e.z,e.w):re.set(e,t,n,r),_e.viewport(O.copy(re).multiplyScalar(P).round())},this.getScissor=function(e){return e.copy(ie)},this.setScissor=function(e,t,n,r){e.isVector4?ie.set(e.x,e.y,e.z,e.w):ie.set(e,t,n,r),_e.scissor(k.copy(ie).multiplyScalar(P).round())},this.getScissorTest=function(){return ae},this.setScissorTest=function(e){_e.setScissorTest(ae=e)},this.setOpaqueSort=function(e){te=e},this.setTransparentSort=function(e){ne=e},this.getClearColor=function(e){return e.copy(Me.getClearColor())},this.setClearColor=function(){Me.setClearColor.apply(Me,arguments)},this.getClearAlpha=function(){return Me.getClearAlpha()},this.setClearAlpha=function(){Me.setClearAlpha.apply(Me,arguments)},this.clear=function(e=!0,t=!0,n=!0){let r=0;if(e){let e=!1;if(T!==null){let t=T.texture.format;e=t===1033||t===1031||t===1029}if(e){let e=T.texture.type,t=e===1009||e===1014||e===1012||e===1020||e===1017||e===1018,n=Me.getClearColor(),r=Me.getClearAlpha(),i=n.r,a=n.g,o=n.b;t?(m[0]=i,m[1]=a,m[2]=o,m[3]=r,F.clearBufferuiv(F.COLOR,0,m)):(h[0]=i,h[1]=a,h[2]=o,h[3]=r,F.clearBufferiv(F.COLOR,0,h))}else r|=F.COLOR_BUFFER_BIT}t&&(r|=F.DEPTH_BUFFER_BIT,F.clearDepth(+!this.capabilities.reverseDepthBuffer)),n&&(r|=F.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),F.clear(r)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener(`webglcontextlost`,Ue,!1),t.removeEventListener(`webglcontextrestored`,We,!1),t.removeEventListener(`webglcontextcreationerror`,Ge,!1),Oe.dispose(),ke.dispose(),ye.dispose(),xe.dispose(),Se.dispose(),Te.dispose(),ze.dispose(),Be.dispose(),Ee.dispose(),He.dispose(),He.removeEventListener(`sessionstart`,Qe),He.removeEventListener(`sessionend`,$e),et.stop()};function Ue(e){e.preventDefault(),console.log(`THREE.WebGLRenderer: Context Lost.`),S=!0}function We(){console.log(`THREE.WebGLRenderer: Context Restored.`),S=!1;let e=ve.autoReset,t=je.enabled,n=je.autoUpdate,r=je.needsUpdate,i=je.type;Ve(),ve.autoReset=e,je.enabled=t,je.autoUpdate=n,je.needsUpdate=r,je.type=i}function Ge(e){console.error(`THREE.WebGLRenderer: A WebGL context could not be created. Reason: `,e.statusMessage)}function Ke(e){let t=e.target;t.removeEventListener(`dispose`,Ke),qe(t)}function qe(e){Je(e),ye.remove(e)}function Je(e){let t=ye.get(e).programs;t!==void 0&&(t.forEach(function(e){Ee.releaseProgram(e)}),e.isShaderMaterial&&Ee.releaseShaderCache(e))}this.renderBufferDirect=function(e,t,n,r,i,a){t===null&&(t=pe);let o=i.isMesh&&i.matrixWorld.determinant()<0,s=lt(e,t,n,r,i);_e.setMaterial(r,o);let c=n.index,l=1;if(r.wireframe===!0){if(c=we.getWireframeAttribute(n),c===void 0)return;l=2}let u=n.drawRange,d=n.attributes.position,f=u.start*l,p=(u.start+u.count)*l;a!==null&&(f=Math.max(f,a.start*l),p=Math.min(p,(a.start+a.count)*l)),c===null?d!=null&&(f=Math.max(f,0),p=Math.min(p,d.count)):(f=Math.max(f,0),p=Math.min(p,c.count));let m=p-f;if(m<0||m===1/0)return;ze.setup(i,r,s,n,c);let h,g=Pe;if(c!==null&&(h=Ce.get(c),g=Le,g.setIndex(h)),i.isMesh)r.wireframe===!0?(_e.setLineWidth(r.wireframeLinewidth*he()),g.setMode(F.LINES)):g.setMode(F.TRIANGLES);else if(i.isLine){let e=r.linewidth;e===void 0&&(e=1),_e.setLineWidth(e*he()),i.isLineSegments?g.setMode(F.LINES):i.isLineLoop?g.setMode(F.LINE_LOOP):g.setMode(F.LINE_STRIP)}else i.isPoints?g.setMode(F.POINTS):i.isSprite&&g.setMode(F.TRIANGLES);if(i.isBatchedMesh){if(i._multiDrawInstances!==null)g.renderMultiDrawInstances(i._multiDrawStarts,i._multiDrawCounts,i._multiDrawCount,i._multiDrawInstances);else if(I.get(`WEBGL_multi_draw`))g.renderMultiDraw(i._multiDrawStarts,i._multiDrawCounts,i._multiDrawCount);else{let e=i._multiDrawStarts,t=i._multiDrawCounts,n=i._multiDrawCount,a=c?Ce.get(c).bytesPerElement:1,o=ye.get(r).currentProgram.getUniforms();for(let r=0;r<n;r++)o.setValue(F,`_gl_DrawID`,r),g.render(e[r]/a,t[r])}}else if(i.isInstancedMesh)g.renderInstances(f,m,i.count);else if(n.isInstancedBufferGeometry){let e=n._maxInstanceCount===void 0?1/0:n._maxInstanceCount,t=Math.min(n.instanceCount,e);g.renderInstances(f,m,t)}else g.render(f,m)};function Ye(e,t,n){e.transparent===!0&&e.side===2&&e.forceSinglePass===!1?(e.side=1,e.needsUpdate=!0,ot(e,t,n),e.side=0,e.needsUpdate=!0,ot(e,t,n),e.side=2):ot(e,t,n)}this.compile=function(e,t,n=null){n===null&&(n=e),v=ke.get(n),v.init(t),b.push(v),n.traverseVisible(function(e){e.isLight&&e.layers.test(t.layers)&&(v.pushLight(e),e.castShadow&&v.pushShadow(e))}),e!==n&&e.traverseVisible(function(e){e.isLight&&e.layers.test(t.layers)&&(v.pushLight(e),e.castShadow&&v.pushShadow(e))}),v.setupLights();let r=new Set;return e.traverse(function(e){if(!(e.isMesh||e.isPoints||e.isLine||e.isSprite))return;let t=e.material;if(t){if(Array.isArray(t))for(let i=0;i<t.length;i++){let a=t[i];Ye(a,n,e),r.add(a)}else Ye(t,n,e),r.add(t)}}),b.pop(),v=null,r},this.compileAsync=function(e,t,n=null){let r=this.compile(e,t,n);return new Promise(t=>{function n(){r.forEach(function(e){ye.get(e).currentProgram.isReady()&&r.delete(e)}),r.size===0?t(e):setTimeout(n,10)}I.get(`KHR_parallel_shader_compile`)===null?setTimeout(n,10):n()})};let Xe=null;function Ze(e){Xe&&Xe(e)}function Qe(){et.stop()}function $e(){et.start()}let et=new hi;et.setAnimationLoop(Ze),typeof self<`u`&&et.setContext(self),this.setAnimationLoop=function(e){Xe=e,He.setAnimationLoop(e),e===null?et.stop():et.start()},He.addEventListener(`sessionstart`,Qe),He.addEventListener(`sessionend`,$e),this.render=function(e,t){if(t!==void 0&&t.isCamera!==!0){console.error(`THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.`);return}if(S===!0)return;if(e.matrixWorldAutoUpdate===!0&&e.updateMatrixWorld(),t.parent===null&&t.matrixWorldAutoUpdate===!0&&t.updateMatrixWorld(),He.enabled===!0&&He.isPresenting===!0&&(He.cameraAutoUpdate===!0&&He.updateCamera(t),t=He.getCamera()),e.isScene===!0&&e.onBeforeRender(x,e,t,T),v=ke.get(e,b.length),v.init(t),b.push(v),ue.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),oe.setFromProjectionMatrix(ue),ce=this.localClippingEnabled,se=Ae.init(this.clippingPlanes,ce),_=Oe.get(e,y.length),_.init(),y.push(_),He.enabled===!0&&He.isPresenting===!0){let e=x.xr.getDepthSensingMesh();e!==null&&tt(e,t,-1/0,x.sortObjects)}tt(e,t,0,x.sortObjects),_.finish(),x.sortObjects===!0&&_.sort(te,ne),me=He.enabled===!1||He.isPresenting===!1||He.hasDepthSensing()===!1,me&&Me.addToRenderList(_,e),this.info.render.frame++,se===!0&&Ae.beginShadows();let n=v.state.shadowsArray;je.render(n,e,t),se===!0&&Ae.endShadows(),this.info.autoReset===!0&&this.info.reset();let r=_.opaque,i=_.transmissive;if(v.setupLights(),t.isArrayCamera){let n=t.cameras;if(i.length>0)for(let t=0,a=n.length;t<a;t++){let a=n[t];rt(r,i,e,a)}me&&Me.render(e);for(let t=0,r=n.length;t<r;t++){let r=n[t];nt(_,e,r,r.viewport)}}else i.length>0&&rt(r,i,e,t),me&&Me.render(e),nt(_,e,t);T!==null&&(be.updateMultisampleRenderTarget(T),be.updateRenderTargetMipmap(T)),e.isScene===!0&&e.onAfterRender(x,e,t),ze.resetDefaultState(),E=-1,D=null,b.pop(),b.length>0?(v=b[b.length-1],se===!0&&Ae.setGlobalState(x.clippingPlanes,v.state.camera)):v=null,y.pop(),_=y.length>0?y[y.length-1]:null};function tt(e,t,n,r){if(e.visible===!1)return;if(e.layers.test(t.layers)){if(e.isGroup)n=e.renderOrder;else if(e.isLOD)e.autoUpdate===!0&&e.update(t);else if(e.isLight)v.pushLight(e),e.castShadow&&v.pushShadow(e);else if(e.isSprite){if(!e.frustumCulled||oe.intersectsSprite(e)){r&&fe.setFromMatrixPosition(e.matrixWorld).applyMatrix4(ue);let t=Te.update(e),i=e.material;i.visible&&_.push(e,t,i,n,fe.z,null)}}else if((e.isMesh||e.isLine||e.isPoints)&&(!e.frustumCulled||oe.intersectsObject(e))){let t=Te.update(e),i=e.material;if(r&&(e.boundingSphere===void 0?(t.boundingSphere===null&&t.computeBoundingSphere(),fe.copy(t.boundingSphere.center)):(e.boundingSphere===null&&e.computeBoundingSphere(),fe.copy(e.boundingSphere.center)),fe.applyMatrix4(e.matrixWorld).applyMatrix4(ue)),Array.isArray(i)){let r=t.groups;for(let a=0,o=r.length;a<o;a++){let o=r[a],s=i[o.materialIndex];s&&s.visible&&_.push(e,t,s,n,fe.z,o)}}else i.visible&&_.push(e,t,i,n,fe.z,null)}}let i=e.children;for(let e=0,a=i.length;e<a;e++)tt(i[e],t,n,r)}function nt(e,t,n,r){let i=e.opaque,a=e.transmissive,o=e.transparent;v.setupLightsView(n),se===!0&&Ae.setGlobalState(x.clippingPlanes,n),r&&_e.viewport(O.copy(r)),i.length>0&&it(i,t,n),a.length>0&&it(a,t,n),o.length>0&&it(o,t,n),_e.buffers.depth.setTest(!0),_e.buffers.depth.setMask(!0),_e.buffers.color.setMask(!0),_e.setPolygonOffset(!1)}function rt(e,t,n,r){if((n.isScene===!0?n.overrideMaterial:null)!==null)return;v.state.transmissionRenderTarget[r.id]===void 0&&(v.state.transmissionRenderTarget[r.id]=new Ut(1,1,{generateMipmaps:!0,type:I.has(`EXT_color_buffer_half_float`)||I.has(`EXT_color_buffer_float`)?g:l,minFilter:c,samples:4,stencilBuffer:i,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:B.workingColorSpace}));let a=v.state.transmissionRenderTarget[r.id],o=r.viewport||O;a.setSize(o.z,o.w);let s=x.getRenderTarget();x.setRenderTarget(a),x.getClearColor(j),M=x.getClearAlpha(),M<1&&x.setClearColor(16777215,.5),x.clear(),me&&Me.render(n);let u=x.toneMapping;x.toneMapping=0;let d=r.viewport;if(r.viewport!==void 0&&(r.viewport=void 0),v.setupLightsView(r),se===!0&&Ae.setGlobalState(x.clippingPlanes,r),it(e,n,r),be.updateMultisampleRenderTarget(a),be.updateRenderTargetMipmap(a),I.has(`WEBGL_multisampled_render_to_texture`)===!1){let e=!1;for(let i=0,a=t.length;i<a;i++){let a=t[i],o=a.object,s=a.geometry,c=a.material,l=a.group;if(c.side===2&&o.layers.test(r.layers)){let t=c.side;c.side=1,c.needsUpdate=!0,at(o,n,r,s,c,l),c.side=t,c.needsUpdate=!0,e=!0}}e===!0&&(be.updateMultisampleRenderTarget(a),be.updateRenderTargetMipmap(a))}x.setRenderTarget(s),x.setClearColor(j,M),d!==void 0&&(r.viewport=d),x.toneMapping=u}function it(e,t,n){let r=t.isScene===!0?t.overrideMaterial:null;for(let i=0,a=e.length;i<a;i++){let a=e[i],o=a.object,s=a.geometry,c=r===null?a.material:r,l=a.group;o.layers.test(n.layers)&&at(o,t,n,s,c,l)}}function at(e,t,n,r,i,a){e.onBeforeRender(x,t,n,r,i,a),e.modelViewMatrix.multiplyMatrices(n.matrixWorldInverse,e.matrixWorld),e.normalMatrix.getNormalMatrix(e.modelViewMatrix),i.onBeforeRender(x,t,n,r,e,a),i.transparent===!0&&i.side===2&&i.forceSinglePass===!1?(i.side=1,i.needsUpdate=!0,x.renderBufferDirect(n,t,r,i,e,a),i.side=0,i.needsUpdate=!0,x.renderBufferDirect(n,t,r,i,e,a),i.side=2):x.renderBufferDirect(n,t,r,i,e,a),e.onAfterRender(x,t,n,r,i,a)}function ot(e,t,n){t.isScene!==!0&&(t=pe);let r=ye.get(e),i=v.state.lights,a=v.state.shadowsArray,o=i.state.version,s=Ee.getParameters(e,i.state,a,t,n),c=Ee.getProgramCacheKey(s),l=r.programs;r.environment=e.isMeshStandardMaterial?t.environment:null,r.fog=t.fog,r.envMap=(e.isMeshStandardMaterial?Se:xe).get(e.envMap||r.environment),r.envMapRotation=r.environment!==null&&e.envMap===null?t.environmentRotation:e.envMapRotation,l===void 0&&(e.addEventListener(`dispose`,Ke),l=new Map,r.programs=l);let u=l.get(c);if(u!==void 0){if(r.currentProgram===u&&r.lightsStateVersion===o)return ct(e,s),u}else s.uniforms=Ee.getUniforms(e),e.onBeforeCompile(s,x),u=Ee.acquireProgram(s,c),l.set(c,u),r.uniforms=s.uniforms;let d=r.uniforms;return(!e.isShaderMaterial&&!e.isRawShaderMaterial||e.clipping===!0)&&(d.clippingPlanes=Ae.uniform),ct(e,s),r.needsLights=dt(e),r.lightsStateVersion=o,r.needsLights&&(d.ambientLightColor.value=i.state.ambient,d.lightProbe.value=i.state.probe,d.directionalLights.value=i.state.directional,d.directionalLightShadows.value=i.state.directionalShadow,d.spotLights.value=i.state.spot,d.spotLightShadows.value=i.state.spotShadow,d.rectAreaLights.value=i.state.rectArea,d.ltc_1.value=i.state.rectAreaLTC1,d.ltc_2.value=i.state.rectAreaLTC2,d.pointLights.value=i.state.point,d.pointLightShadows.value=i.state.pointShadow,d.hemisphereLights.value=i.state.hemi,d.directionalShadowMap.value=i.state.directionalShadowMap,d.directionalShadowMatrix.value=i.state.directionalShadowMatrix,d.spotShadowMap.value=i.state.spotShadowMap,d.spotLightMatrix.value=i.state.spotLightMatrix,d.spotLightMap.value=i.state.spotLightMap,d.pointShadowMap.value=i.state.pointShadowMap,d.pointShadowMatrix.value=i.state.pointShadowMatrix),r.currentProgram=u,r.uniformsList=null,u}function st(e){if(e.uniformsList===null){let t=e.currentProgram.getUniforms();e.uniformsList=lo.seqWithValue(t.seq,e.uniforms)}return e.uniformsList}function ct(e,t){let n=ye.get(e);n.outputColorSpace=t.outputColorSpace,n.batching=t.batching,n.batchingColor=t.batchingColor,n.instancing=t.instancing,n.instancingColor=t.instancingColor,n.instancingMorph=t.instancingMorph,n.skinning=t.skinning,n.morphTargets=t.morphTargets,n.morphNormals=t.morphNormals,n.morphColors=t.morphColors,n.morphTargetsCount=t.morphTargetsCount,n.numClippingPlanes=t.numClippingPlanes,n.numIntersection=t.numClipIntersection,n.vertexAlphas=t.vertexAlphas,n.vertexTangents=t.vertexTangents,n.toneMapping=t.toneMapping}function lt(e,t,n,r,i){t.isScene!==!0&&(t=pe),be.resetTextureUnits();let a=t.fog,o=r.isMeshStandardMaterial?t.environment:null,s=T===null?x.outputColorSpace:T.isXRRenderTarget===!0?T.texture.colorSpace:Ie,c=(r.isMeshStandardMaterial?Se:xe).get(r.envMap||o),l=r.vertexColors===!0&&!!n.attributes.color&&n.attributes.color.itemSize===4,u=!!n.attributes.tangent&&(!!r.normalMap||r.anisotropy>0),d=!!n.morphAttributes.position,f=!!n.morphAttributes.normal,p=!!n.morphAttributes.color,m=0;r.toneMapped&&(T===null||T.isXRRenderTarget===!0)&&(m=x.toneMapping);let h=n.morphAttributes.position||n.morphAttributes.normal||n.morphAttributes.color,g=h===void 0?0:h.length,_=ye.get(r),y=v.state.lights;if(se===!0&&(ce===!0||e!==D)){let t=e===D&&r.id===E;Ae.setState(r,e,t)}let b=!1;r.version===_.__version?_.needsLights&&_.lightsStateVersion!==y.state.version?b=!0:_.outputColorSpace===s?i.isBatchedMesh&&_.batching===!1||!i.isBatchedMesh&&_.batching===!0||i.isBatchedMesh&&_.batchingColor===!0&&i.colorTexture===null||i.isBatchedMesh&&_.batchingColor===!1&&i.colorTexture!==null||i.isInstancedMesh&&_.instancing===!1||!i.isInstancedMesh&&_.instancing===!0||i.isSkinnedMesh&&_.skinning===!1||!i.isSkinnedMesh&&_.skinning===!0||i.isInstancedMesh&&_.instancingColor===!0&&i.instanceColor===null||i.isInstancedMesh&&_.instancingColor===!1&&i.instanceColor!==null||i.isInstancedMesh&&_.instancingMorph===!0&&i.morphTexture===null||i.isInstancedMesh&&_.instancingMorph===!1&&i.morphTexture!==null?b=!0:_.envMap===c?r.fog===!0&&_.fog!==a||_.numClippingPlanes!==void 0&&(_.numClippingPlanes!==Ae.numPlanes||_.numIntersection!==Ae.numIntersection)?b=!0:_.vertexAlphas===l&&_.vertexTangents===u&&_.morphTargets===d&&_.morphNormals===f&&_.morphColors===p&&_.toneMapping===m?_.morphTargetsCount!==g&&(b=!0):b=!0:b=!0:b=!0:(b=!0,_.__version=r.version);let S=_.currentProgram;b===!0&&(S=ot(r,t,i));let C=!1,w=!1,O=!1,k=S.getUniforms(),A=_.uniforms;if(_e.useProgram(S.program)&&(C=!0,w=!0,O=!0),r.id!==E&&(E=r.id,w=!0),C||D!==e){L.reverseDepthBuffer?(le.copy(e.projectionMatrix),Et(le),Dt(le),k.setValue(F,`projectionMatrix`,le)):k.setValue(F,`projectionMatrix`,e.projectionMatrix),k.setValue(F,`viewMatrix`,e.matrixWorldInverse);let t=k.map.cameraPosition;t!==void 0&&t.setValue(F,de.setFromMatrixPosition(e.matrixWorld)),L.logarithmicDepthBuffer&&k.setValue(F,`logDepthBufFC`,2/(Math.log(e.far+1)/Math.LN2)),(r.isMeshPhongMaterial||r.isMeshToonMaterial||r.isMeshLambertMaterial||r.isMeshBasicMaterial||r.isMeshStandardMaterial||r.isShaderMaterial)&&k.setValue(F,`isOrthographic`,e.isOrthographicCamera===!0),D!==e&&(D=e,w=!0,O=!0)}if(i.isSkinnedMesh){k.setOptional(F,i,`bindMatrix`),k.setOptional(F,i,`bindMatrixInverse`);let e=i.skeleton;e&&(e.boneTexture===null&&e.computeBoneTexture(),k.setValue(F,`boneTexture`,e.boneTexture,be))}i.isBatchedMesh&&(k.setOptional(F,i,`batchingTexture`),k.setValue(F,`batchingTexture`,i._matricesTexture,be),k.setOptional(F,i,`batchingIdTexture`),k.setValue(F,`batchingIdTexture`,i._indirectTexture,be),k.setOptional(F,i,`batchingColorTexture`),i._colorsTexture!==null&&k.setValue(F,`batchingColorTexture`,i._colorsTexture,be));let j=n.morphAttributes;if((j.position!==void 0||j.normal!==void 0||j.color!==void 0)&&Ne.update(i,n,S),(w||_.receiveShadow!==i.receiveShadow)&&(_.receiveShadow=i.receiveShadow,k.setValue(F,`receiveShadow`,i.receiveShadow)),r.isMeshGouraudMaterial&&r.envMap!==null&&(A.envMap.value=c,A.flipEnvMap.value=c.isCubeTexture&&c.isRenderTargetTexture===!1?-1:1),r.isMeshStandardMaterial&&r.envMap===null&&t.environment!==null&&(A.envMapIntensity.value=t.environmentIntensity),w&&(k.setValue(F,`toneMappingExposure`,x.toneMappingExposure),_.needsLights&&ut(A,O),a&&r.fog===!0&&De.refreshFogUniforms(A,a),De.refreshMaterialUniforms(A,r,P,N,v.state.transmissionRenderTarget[e.id]),lo.upload(F,st(_),A,be)),r.isShaderMaterial&&r.uniformsNeedUpdate===!0&&(lo.upload(F,st(_),A,be),r.uniformsNeedUpdate=!1),r.isSpriteMaterial&&k.setValue(F,`center`,i.center),k.setValue(F,`modelViewMatrix`,i.modelViewMatrix),k.setValue(F,`normalMatrix`,i.normalMatrix),k.setValue(F,`modelMatrix`,i.matrixWorld),r.isShaderMaterial||r.isRawShaderMaterial){let e=r.uniformsGroups;for(let t=0,n=e.length;t<n;t++){let n=e[t];Be.update(n,S),Be.bind(n,S)}}return S}function ut(e,t){e.ambientLightColor.needsUpdate=t,e.lightProbe.needsUpdate=t,e.directionalLights.needsUpdate=t,e.directionalLightShadows.needsUpdate=t,e.pointLights.needsUpdate=t,e.pointLightShadows.needsUpdate=t,e.spotLights.needsUpdate=t,e.spotLightShadows.needsUpdate=t,e.rectAreaLights.needsUpdate=t,e.hemisphereLights.needsUpdate=t}function dt(e){return e.isMeshLambertMaterial||e.isMeshToonMaterial||e.isMeshPhongMaterial||e.isMeshStandardMaterial||e.isShadowMaterial||e.isShaderMaterial&&e.lights===!0}this.getActiveCubeFace=function(){return C},this.getActiveMipmapLevel=function(){return w},this.getRenderTarget=function(){return T},this.setRenderTargetTextures=function(e,t,n){ye.get(e.texture).__webglTexture=t,ye.get(e.depthTexture).__webglTexture=n;let r=ye.get(e);r.__hasExternalTextures=!0,r.__autoAllocateDepthBuffer=n===void 0,r.__autoAllocateDepthBuffer||I.has(`WEBGL_multisampled_render_to_texture`)===!0&&(console.warn(`THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided`),r.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(e,t){let n=ye.get(e);n.__webglFramebuffer=t,n.__useDefaultFramebuffer=t===void 0},this.setRenderTarget=function(e,t=0,n=0){T=e,C=t,w=n;let r=!0,i=null,a=!1,o=!1;if(e){let s=ye.get(e);if(s.__useDefaultFramebuffer!==void 0)_e.bindFramebuffer(F.FRAMEBUFFER,null),r=!1;else if(s.__webglFramebuffer===void 0)be.setupRenderTarget(e);else if(s.__hasExternalTextures)be.rebindTextures(e,ye.get(e.texture).__webglTexture,ye.get(e.depthTexture).__webglTexture);else if(e.depthBuffer){let t=e.depthTexture;if(s.__boundDepthTexture!==t){if(t!==null&&ye.has(t)&&(e.width!==t.image.width||e.height!==t.image.height))throw Error(`WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.`);be.setupDepthRenderbuffer(e)}}let c=e.texture;(c.isData3DTexture||c.isDataArrayTexture||c.isCompressedArrayTexture)&&(o=!0);let l=ye.get(e).__webglFramebuffer;e.isWebGLCubeRenderTarget?(i=Array.isArray(l[t])?l[t][n]:l[t],a=!0):i=e.samples>0&&be.useMultisampledRTT(e)===!1?ye.get(e).__webglMultisampledFramebuffer:Array.isArray(l)?l[n]:l,O.copy(e.viewport),k.copy(e.scissor),A=e.scissorTest}else O.copy(re).multiplyScalar(P).floor(),k.copy(ie).multiplyScalar(P).floor(),A=ae;if(_e.bindFramebuffer(F.FRAMEBUFFER,i)&&r&&_e.drawBuffers(e,i),_e.viewport(O),_e.scissor(k),_e.setScissorTest(A),a){let r=ye.get(e.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_CUBE_MAP_POSITIVE_X+t,r.__webglTexture,n)}else if(o){let r=ye.get(e.texture),i=t||0;F.framebufferTextureLayer(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,r.__webglTexture,n||0,i)}E=-1},this.readRenderTargetPixels=function(e,t,n,r,i,a,o){if(!(e&&e.isWebGLRenderTarget)){console.error(`THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.`);return}let s=ye.get(e).__webglFramebuffer;if(e.isWebGLCubeRenderTarget&&o!==void 0&&(s=s[o]),s){_e.bindFramebuffer(F.FRAMEBUFFER,s);try{let o=e.texture,s=o.format,c=o.type;if(!L.textureFormatReadable(s)){console.error(`THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.`);return}if(!L.textureTypeReadable(c)){console.error(`THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.`);return}t>=0&&t<=e.width-r&&n>=0&&n<=e.height-i&&F.readPixels(t,n,r,i,Re.convert(s),Re.convert(c),a)}finally{let e=T===null?null:ye.get(T).__webglFramebuffer;_e.bindFramebuffer(F.FRAMEBUFFER,e)}}},this.readRenderTargetPixelsAsync=async function(e,t,n,r,i,a,o){if(!(e&&e.isWebGLRenderTarget))throw Error(`THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.`);let s=ye.get(e).__webglFramebuffer;if(e.isWebGLCubeRenderTarget&&o!==void 0&&(s=s[o]),s){let o=e.texture,c=o.format,l=o.type;if(!L.textureFormatReadable(c))throw Error(`THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.`);if(!L.textureTypeReadable(l))throw Error(`THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.`);if(t>=0&&t<=e.width-r&&n>=0&&n<=e.height-i){_e.bindFramebuffer(F.FRAMEBUFFER,s);let e=F.createBuffer();F.bindBuffer(F.PIXEL_PACK_BUFFER,e),F.bufferData(F.PIXEL_PACK_BUFFER,a.byteLength,F.STREAM_READ),F.readPixels(t,n,r,i,Re.convert(c),Re.convert(l),0);let o=T===null?null:ye.get(T).__webglFramebuffer;_e.bindFramebuffer(F.FRAMEBUFFER,o);let u=F.fenceSync(F.SYNC_GPU_COMMANDS_COMPLETE,0);return F.flush(),await Tt(F,u,4),F.bindBuffer(F.PIXEL_PACK_BUFFER,e),F.getBufferSubData(F.PIXEL_PACK_BUFFER,0,a),F.deleteBuffer(e),F.deleteSync(u),a}throw Error(`THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.`)}},this.copyFramebufferToTexture=function(e,t=null,n=0){e.isTexture!==!0&&(wt(`WebGLRenderer: copyFramebufferToTexture function signature has changed.`),t=arguments[0]||null,e=arguments[1]);let r=2**-n,i=Math.floor(e.image.width*r),a=Math.floor(e.image.height*r),o=t===null?0:t.x,s=t===null?0:t.y;be.setTexture2D(e,0),F.copyTexSubImage2D(F.TEXTURE_2D,n,0,0,o,s,i,a),_e.unbindTexture()},this.copyTextureToTexture=function(e,t,n=null,r=null,i=0){e.isTexture!==!0&&(wt(`WebGLRenderer: copyTextureToTexture function signature has changed.`),r=arguments[0]||null,e=arguments[1],t=arguments[2],i=arguments[3]||0,n=null);let a,o,s,c,l,u;n===null?(a=e.image.width,o=e.image.height,s=0,c=0):(a=n.max.x-n.min.x,o=n.max.y-n.min.y,s=n.min.x,c=n.min.y),r===null?(l=0,u=0):(l=r.x,u=r.y);let d=Re.convert(t.format),f=Re.convert(t.type);be.setTexture2D(t,0),F.pixelStorei(F.UNPACK_FLIP_Y_WEBGL,t.flipY),F.pixelStorei(F.UNPACK_PREMULTIPLY_ALPHA_WEBGL,t.premultiplyAlpha),F.pixelStorei(F.UNPACK_ALIGNMENT,t.unpackAlignment);let p=F.getParameter(F.UNPACK_ROW_LENGTH),m=F.getParameter(F.UNPACK_IMAGE_HEIGHT),h=F.getParameter(F.UNPACK_SKIP_PIXELS),g=F.getParameter(F.UNPACK_SKIP_ROWS),_=F.getParameter(F.UNPACK_SKIP_IMAGES),v=e.isCompressedTexture?e.mipmaps[i]:e.image;F.pixelStorei(F.UNPACK_ROW_LENGTH,v.width),F.pixelStorei(F.UNPACK_IMAGE_HEIGHT,v.height),F.pixelStorei(F.UNPACK_SKIP_PIXELS,s),F.pixelStorei(F.UNPACK_SKIP_ROWS,c),e.isDataTexture?F.texSubImage2D(F.TEXTURE_2D,i,l,u,a,o,d,f,v.data):e.isCompressedTexture?F.compressedTexSubImage2D(F.TEXTURE_2D,i,l,u,v.width,v.height,d,v.data):F.texSubImage2D(F.TEXTURE_2D,i,l,u,a,o,d,f,v),F.pixelStorei(F.UNPACK_ROW_LENGTH,p),F.pixelStorei(F.UNPACK_IMAGE_HEIGHT,m),F.pixelStorei(F.UNPACK_SKIP_PIXELS,h),F.pixelStorei(F.UNPACK_SKIP_ROWS,g),F.pixelStorei(F.UNPACK_SKIP_IMAGES,_),i===0&&t.generateMipmaps&&F.generateMipmap(F.TEXTURE_2D),_e.unbindTexture()},this.copyTextureToTexture3D=function(e,t,n=null,r=null,i=0){e.isTexture!==!0&&(wt(`WebGLRenderer: copyTextureToTexture3D function signature has changed.`),n=arguments[0]||null,r=arguments[1]||null,e=arguments[2],t=arguments[3],i=arguments[4]||0);let a,o,s,c,l,u,d,f,p,m=e.isCompressedTexture?e.mipmaps[i]:e.image;n===null?(a=m.width,o=m.height,s=m.depth,c=0,l=0,u=0):(a=n.max.x-n.min.x,o=n.max.y-n.min.y,s=n.max.z-n.min.z,c=n.min.x,l=n.min.y,u=n.min.z),r===null?(d=0,f=0,p=0):(d=r.x,f=r.y,p=r.z);let h=Re.convert(t.format),g=Re.convert(t.type),_;if(t.isData3DTexture)be.setTexture3D(t,0),_=F.TEXTURE_3D;else if(t.isDataArrayTexture||t.isCompressedArrayTexture)be.setTexture2DArray(t,0),_=F.TEXTURE_2D_ARRAY;else{console.warn(`THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.`);return}F.pixelStorei(F.UNPACK_FLIP_Y_WEBGL,t.flipY),F.pixelStorei(F.UNPACK_PREMULTIPLY_ALPHA_WEBGL,t.premultiplyAlpha),F.pixelStorei(F.UNPACK_ALIGNMENT,t.unpackAlignment);let v=F.getParameter(F.UNPACK_ROW_LENGTH),y=F.getParameter(F.UNPACK_IMAGE_HEIGHT),b=F.getParameter(F.UNPACK_SKIP_PIXELS),x=F.getParameter(F.UNPACK_SKIP_ROWS),S=F.getParameter(F.UNPACK_SKIP_IMAGES);F.pixelStorei(F.UNPACK_ROW_LENGTH,m.width),F.pixelStorei(F.UNPACK_IMAGE_HEIGHT,m.height),F.pixelStorei(F.UNPACK_SKIP_PIXELS,c),F.pixelStorei(F.UNPACK_SKIP_ROWS,l),F.pixelStorei(F.UNPACK_SKIP_IMAGES,u),e.isDataTexture||e.isData3DTexture?F.texSubImage3D(_,i,d,f,p,a,o,s,h,g,m.data):t.isCompressedArrayTexture?F.compressedTexSubImage3D(_,i,d,f,p,a,o,s,h,m.data):F.texSubImage3D(_,i,d,f,p,a,o,s,h,g,m),F.pixelStorei(F.UNPACK_ROW_LENGTH,v),F.pixelStorei(F.UNPACK_IMAGE_HEIGHT,y),F.pixelStorei(F.UNPACK_SKIP_PIXELS,b),F.pixelStorei(F.UNPACK_SKIP_ROWS,x),F.pixelStorei(F.UNPACK_SKIP_IMAGES,S),i===0&&t.generateMipmaps&&F.generateMipmap(_),_e.unbindTexture()},this.initRenderTarget=function(e){ye.get(e).__webglFramebuffer===void 0&&be.setupRenderTarget(e)},this.initTexture=function(e){e.isCubeTexture?be.setTextureCube(e,0):e.isData3DTexture?be.setTexture3D(e,0):e.isDataArrayTexture||e.isCompressedArrayTexture?be.setTexture2DArray(e,0):be.setTexture2D(e,0),_e.unbindTexture()},this.resetState=function(){C=0,w=0,T=null,_e.reset(),ze.reset()},typeof __THREE_DEVTOOLS__<`u`&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent(`observe`,{detail:this}))}get coordinateSystem(){return We}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=e===`display-p3`?`display-p3`:`srgb`,t.unpackColorSpace=B.workingColorSpace===`display-p3-linear`?`display-p3`:`srgb`}},Es=class e{constructor(e,t=25e-5){this.isFogExp2=!0,this.name=``,this.color=new U(e),this.density=t}clone(){return new e(this.color,this.density)}toJSON(){return{type:`FogExp2`,name:this.name,color:this.color.getHex(),density:this.density}}},Ds=class extends Yn{constructor(){super(),this.isScene=!0,this.type=`Scene`,this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Mn,this.environmentIntensity=1,this.environmentRotation=new Mn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<`u`&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent(`observe`,{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}},Os=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e===void 0?0:e.length/t,this.usage=Ue,this.updateRanges=[],this.version=0,this.uuid=Xe()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let r=0,i=this.stride;r<i;r++)this.array[e+r]=t.array[n+r];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Xe()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Xe()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},ks=new V,As=class e{constructor(e,t,n,r=!1){this.isInterleavedBufferAttribute=!0,this.name=``,this.data=e,this.itemSize=t,this.offset=n,this.normalized=r}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)ks.fromBufferAttribute(this,t),ks.applyMatrix4(e),this.setXYZ(t,ks.x,ks.y,ks.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)ks.fromBufferAttribute(this,t),ks.applyNormalMatrix(e),this.setXYZ(t,ks.x,ks.y,ks.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)ks.fromBufferAttribute(this,t),ks.transformDirection(e),this.setXYZ(t,ks.x,ks.y,ks.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=gt(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=_t(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=_t(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=_t(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=_t(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=_t(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=gt(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=gt(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=gt(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=gt(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=_t(t,this.array),n=_t(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=_t(t,this.array),n=_t(n,this.array),r=_t(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=r,this}setXYZW(e,t,n,r,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=_t(t,this.array),n=_t(n,this.array),r=_t(r,this.array),i=_t(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=r,this.data.array[e+3]=i,this}clone(t){if(t===void 0){console.log(`THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.`);let e=[];for(let t=0;t<this.count;t++){let n=t*this.data.stride+this.offset;for(let t=0;t<this.itemSize;t++)e.push(this.data.array[n+t])}return new br(new this.array.constructor(e),this.itemSize,this.normalized)}return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new e(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log(`THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.`);let e=[];for(let t=0;t<this.count;t++){let n=t*this.data.stride+this.offset;for(let t=0;t<this.itemSize;t++)e.push(this.data.array[n+t])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},js=class extends gr{constructor(e){super(),this.isSpriteMaterial=!0,this.type=`SpriteMaterial`,this.color=new U(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},Ms,Ns=new V,Ps=new V,Fs=new V,Is=new R,Ls=new R,Rs=new H,zs=new V,Bs=new V,Vs=new V,Hs=new R,Us=new R,Ws=new R,Gs=class extends Yn{constructor(e=new js){if(super(),this.isSprite=!0,this.type=`Sprite`,Ms===void 0){Ms=new Ar;let e=new Os(new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),5);Ms.setIndex([0,1,2,0,2,3]),Ms.setAttribute(`position`,new As(e,3,0,!1)),Ms.setAttribute(`uv`,new As(e,2,3,!1))}this.geometry=Ms,this.material=e,this.center=new R(.5,.5)}raycast(e,t){e.camera===null&&console.error(`THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.`),Ps.setFromMatrixScale(this.matrixWorld),Rs.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),Fs.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Ps.multiplyScalar(-Fs.z);let n=this.material.rotation,r,i;n!==0&&(i=Math.cos(n),r=Math.sin(n));let a=this.center;Ks(zs.set(-.5,-.5,0),Fs,a,Ps,r,i),Ks(Bs.set(.5,-.5,0),Fs,a,Ps,r,i),Ks(Vs.set(.5,.5,0),Fs,a,Ps,r,i),Hs.set(0,0),Us.set(1,0),Ws.set(1,1);let o=e.ray.intersectTriangle(zs,Bs,Vs,!1,Ns);if(o===null&&(Ks(Bs.set(-.5,.5,0),Fs,a,Ps,r,i),Us.set(0,1),o=e.ray.intersectTriangle(zs,Vs,Bs,!1,Ns),o===null))return;let s=e.ray.origin.distanceTo(Ns);s<e.near||s>e.far||t.push({distance:s,point:Ns.clone(),uv:lr.getInterpolation(Ns,zs,Bs,Vs,Hs,Us,Ws,new R),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}};function Ks(e,t,n,r,i,a){Is.subVectors(e,n).addScalar(.5).multiply(r),i===void 0?Ls.copy(Is):(Ls.x=a*Is.x-i*Is.y,Ls.y=i*Is.x+a*Is.y),e.copy(t),e.x+=Ls.x,e.y+=Ls.y,e.applyMatrix4(Rs)}var qs=new V,Js=new V,Ys=class extends Yn{constructor(){super(),this._currentLevel=0,this.type=`LOD`,Object.defineProperties(this,{levels:{enumerable:!0,value:[]},isLOD:{value:!0}}),this.autoUpdate=!0}copy(e){super.copy(e,!1);let t=e.levels;for(let e=0,n=t.length;e<n;e++){let n=t[e];this.addLevel(n.object.clone(),n.distance,n.hysteresis)}return this.autoUpdate=e.autoUpdate,this}addLevel(e,t=0,n=0){t=Math.abs(t);let r=this.levels,i=0;for(;i<r.length&&!(t<r[i].distance);i++);return r.splice(i,0,{distance:t,hysteresis:n,object:e}),this.add(e),this}removeLevel(e){let t=this.levels;for(let n=0;n<t.length;n++)if(t[n].distance===e){let e=t.splice(n,1);return this.remove(e[0].object),!0}return!1}getCurrentLevel(){return this._currentLevel}getObjectForDistance(e){let t=this.levels;if(t.length>0){let n,r;for(n=1,r=t.length;n<r;n++){let r=t[n].distance;if(t[n].object.visible&&(r-=r*t[n].hysteresis),e<r)break}return t[n-1].object}return null}raycast(e,t){if(this.levels.length>0){qs.setFromMatrixPosition(this.matrixWorld);let n=e.ray.origin.distanceTo(qs);this.getObjectForDistance(n).raycast(e,t)}}update(e){let t=this.levels;if(t.length>1){qs.setFromMatrixPosition(e.matrixWorld),Js.setFromMatrixPosition(this.matrixWorld);let n=qs.distanceTo(Js)/e.zoom;t[0].object.visible=!0;let r,i;for(r=1,i=t.length;r<i;r++){let e=t[r].distance;if(t[r].object.visible&&(e-=e*t[r].hysteresis),n>=e)t[r-1].object.visible=!1,t[r].object.visible=!0;else break}for(this._currentLevel=r-1;r<i;r++)t[r].object.visible=!1}}toJSON(e){let t=super.toJSON(e);this.autoUpdate===!1&&(t.object.autoUpdate=!1),t.object.levels=[];let n=this.levels;for(let e=0,r=n.length;e<r;e++){let r=n[e];t.object.levels.push({object:r.object.uuid,distance:r.distance,hysteresis:r.hysteresis})}return t}},Xs=class extends Bt{constructor(e=null,t=1,n=1,i,a,o,s,c,l=r,u=r,d,f){super(null,o,s,c,l,u,i,a,d,f),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},Zs=class extends br{constructor(e,t,n,r=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=r}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},Qs=new H,$s=new H,ec=[],tc=new Yt,nc=new H,rc=new G,ic=new mn,ac=class extends G{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Zs(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let e=0;e<n;e++)this.setMatrixAt(e,nc)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Yt),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Qs),tc.copy(e.boundingBox).applyMatrix4(Qs),this.boundingBox.union(tc)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new mn),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Qs),ic.copy(e.boundingSphere).applyMatrix4(Qs),this.boundingSphere.union(ic)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let n=t.morphTargetInfluences,r=this.morphTexture.source.data.data,i=e*(n.length+1)+1;for(let e=0;e<n.length;e++)n[e]=r[i+e]}raycast(e,t){let n=this.matrixWorld,r=this.count;if(rc.geometry=this.geometry,rc.material=this.material,rc.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),ic.copy(this.boundingSphere),ic.applyMatrix4(n),e.ray.intersectsSphere(ic)!==!1))for(let i=0;i<r;i++){this.getMatrixAt(i,Qs),$s.multiplyMatrices(n,Qs),rc.matrixWorld=$s,rc.raycast(e,ec);for(let e=0,n=ec.length;e<n;e++){let n=ec[e];n.instanceId=i,n.object=this,t.push(n)}ec.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new Zs(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){let n=t.morphTargetInfluences,r=n.length+1;this.morphTexture===null&&(this.morphTexture=new Xs(new Float32Array(r*this.count),r,this.count,O,h));let i=this.morphTexture.source.data.data,a=0;for(let e=0;e<n.length;e++)a+=n[e];let o=this.geometry.morphTargetsRelative?1:1-a,s=r*e;i[s]=o,i.set(n,s+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:`dispose`}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}},oc=class extends gr{constructor(e){super(),this.isLineBasicMaterial=!0,this.type=`LineBasicMaterial`,this.color=new U(16777215),this.map=null,this.linewidth=1,this.linecap=`round`,this.linejoin=`round`,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},sc=new V,cc=new V,lc=new H,uc=new Sn,dc=new mn,fc=new V,pc=new V,mc=class extends Yn{constructor(e=new Ar,t=new oc){super(),this.isLine=!0,this.type=`Line`,this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[0];for(let e=1,r=t.count;e<r;e++)sc.fromBufferAttribute(t,e-1),cc.fromBufferAttribute(t,e),n[e]=n[e-1],n[e]+=sc.distanceTo(cc);e.setAttribute(`lineDistance`,new W(n,1))}else console.warn(`THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.`);return this}raycast(e,t){let n=this.geometry,r=this.matrixWorld,i=e.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),dc.copy(n.boundingSphere),dc.applyMatrix4(r),dc.radius+=i,e.ray.intersectsSphere(dc)===!1)return;lc.copy(r).invert(),uc.copy(e.ray).applyMatrix4(lc);let o=i/((this.scale.x+this.scale.y+this.scale.z)/3),s=o*o,c=this.isLineSegments?2:1,l=n.index,u=n.attributes.position;if(l!==null){let n=Math.max(0,a.start),r=Math.min(l.count,a.start+a.count);for(let i=n,a=r-1;i<a;i+=c){let n=l.getX(i),r=l.getX(i+1),a=hc(this,e,uc,s,n,r);a&&t.push(a)}if(this.isLineLoop){let i=l.getX(r-1),a=l.getX(n),o=hc(this,e,uc,s,i,a);o&&t.push(o)}}else{let n=Math.max(0,a.start),r=Math.min(u.count,a.start+a.count);for(let i=n,a=r-1;i<a;i+=c){let n=hc(this,e,uc,s,i,i+1);n&&t.push(n)}if(this.isLineLoop){let i=hc(this,e,uc,s,r-1,n);i&&t.push(i)}}}updateMorphTargets(){let e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){let n=e[t[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let e=0,t=n.length;e<t;e++){let t=n[e].name||String(e);this.morphTargetInfluences.push(0),this.morphTargetDictionary[t]=e}}}}};function hc(e,t,n,r,i,a){let o=e.geometry.attributes.position;if(sc.fromBufferAttribute(o,i),cc.fromBufferAttribute(o,a),n.distanceSqToSegment(sc,cc,fc,pc)>r)return;fc.applyMatrix4(e.matrixWorld);let s=t.ray.origin.distanceTo(fc);if(!(s<t.near||s>t.far))return{distance:s,point:pc.clone().applyMatrix4(e.matrixWorld),index:i,face:null,faceIndex:null,barycoord:null,object:e}}var gc=new V,_c=new V,vc=class extends mc{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type=`LineSegments`}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[];for(let e=0,r=t.count;e<r;e+=2)gc.fromBufferAttribute(t,e),_c.fromBufferAttribute(t,e+1),n[e]=e===0?0:n[e-1],n[e+1]=n[e]+gc.distanceTo(_c);e.setAttribute(`lineDistance`,new W(n,1))}else console.warn(`THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.`);return this}},yc=class extends gr{constructor(e){super(),this.isPointsMaterial=!0,this.type=`PointsMaterial`,this.color=new U(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},bc=new H,xc=new Sn,Sc=new mn,Cc=new V,wc=class extends Yn{constructor(e=new Ar,t=new yc){super(),this.isPoints=!0,this.type=`Points`,this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){let n=this.geometry,r=this.matrixWorld,i=e.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Sc.copy(n.boundingSphere),Sc.applyMatrix4(r),Sc.radius+=i,e.ray.intersectsSphere(Sc)===!1)return;bc.copy(r).invert(),xc.copy(e.ray).applyMatrix4(bc);let o=i/((this.scale.x+this.scale.y+this.scale.z)/3),s=o*o,c=n.index,l=n.attributes.position;if(c!==null){let n=Math.max(0,a.start),i=Math.min(c.count,a.start+a.count);for(let a=n,o=i;a<o;a++){let n=c.getX(a);Cc.fromBufferAttribute(l,n),Tc(Cc,n,s,r,e,t,this)}}else{let n=Math.max(0,a.start),i=Math.min(l.count,a.start+a.count);for(let a=n,o=i;a<o;a++)Cc.fromBufferAttribute(l,a),Tc(Cc,a,s,r,e,t,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){let n=e[t[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let e=0,t=n.length;e<t;e++){let t=n[e].name||String(e);this.morphTargetInfluences.push(0),this.morphTargetDictionary[t]=e}}}}};function Tc(e,t,n,r,i,a,o){let s=xc.distanceSqToPoint(e);if(s<n){let n=new V;xc.closestPointToPoint(e,n),n.applyMatrix4(r);let c=i.ray.origin.distanceTo(n);if(c<i.near||c>i.far)return;a.push({distance:c,distanceToRay:Math.sqrt(s),point:n,index:t,face:null,faceIndex:null,barycoord:null,object:o})}}var Ec=class extends Bt{constructor(e,t,n,r,i,a,o,s,c){super(e,t,n,r,i,a,o,s,c),this.isCanvasTexture=!0,this.needsUpdate=!0}},Dc=class{constructor(){this.type=`Curve`,this.arcLengthDivisions=200}getPoint(){return console.warn(`THREE.Curve: .getPoint() not implemented.`),null}getPointAt(e,t){let n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],n,r=this.getPoint(0),i=0;t.push(0);for(let a=1;a<=e;a++)n=this.getPoint(a/e),i+=n.distanceTo(r),t.push(i),r=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){let n=this.getLengths(),r=0,i=n.length,a;a=t||e*n[i-1];let o=0,s=i-1,c;for(;o<=s;)if(r=Math.floor(o+(s-o)/2),c=n[r]-a,c<0)o=r+1;else if(c>0)s=r-1;else{s=r;break}if(r=s,n[r]===a)return r/(i-1);let l=n[r],u=n[r+1]-l,d=(a-l)/u;return(r+d)/(i-1)}getTangent(e,t){let n=1e-4,r=e-n,i=e+n;r<0&&(r=0),i>1&&(i=1);let a=this.getPoint(r),o=this.getPoint(i),s=t||(a.isVector2?new R:new V);return s.copy(o).sub(a).normalize(),s}getTangentAt(e,t){let n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t){let n=new V,r=[],i=[],a=[],o=new V,s=new H;for(let t=0;t<=e;t++){let n=t/e;r[t]=this.getTangentAt(n,new V)}i[0]=new V,a[0]=new V;let c=Number.MAX_VALUE,l=Math.abs(r[0].x),u=Math.abs(r[0].y),d=Math.abs(r[0].z);l<=c&&(c=l,n.set(1,0,0)),u<=c&&(c=u,n.set(0,1,0)),d<=c&&n.set(0,0,1),o.crossVectors(r[0],n).normalize(),i[0].crossVectors(r[0],o),a[0].crossVectors(r[0],i[0]);for(let t=1;t<=e;t++){if(i[t]=i[t-1].clone(),a[t]=a[t-1].clone(),o.crossVectors(r[t-1],r[t]),o.length()>2**-52){o.normalize();let e=Math.acos(Ze(r[t-1].dot(r[t]),-1,1));i[t].applyMatrix4(s.makeRotationAxis(o,e))}a[t].crossVectors(r[t],i[t])}if(t===!0){let t=Math.acos(Ze(i[0].dot(i[e]),-1,1));t/=e,r[0].dot(o.crossVectors(i[0],i[e]))>0&&(t=-t);for(let n=1;n<=e;n++)i[n].applyMatrix4(s.makeRotationAxis(r[n],t*n)),a[n].crossVectors(r[n],i[n])}return{tangents:r,normals:i,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.6,type:`Curve`,generator:`Curve.toJSON`}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}},Oc=class extends Dc{constructor(e=0,t=0,n=1,r=1,i=0,a=Math.PI*2,o=!1,s=0){super(),this.isEllipseCurve=!0,this.type=`EllipseCurve`,this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=r,this.aStartAngle=i,this.aEndAngle=a,this.aClockwise=o,this.aRotation=s}getPoint(e,t=new R){let n=t,r=Math.PI*2,i=this.aEndAngle-this.aStartAngle,a=Math.abs(i)<2**-52;for(;i<0;)i+=r;for(;i>r;)i-=r;i<2**-52&&(i=a?0:r),this.aClockwise===!0&&!a&&(i===r?i=-r:i-=r);let o=this.aStartAngle+e*i,s=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){let e=Math.cos(this.aRotation),t=Math.sin(this.aRotation),n=s-this.aX,r=c-this.aY;s=n*e-r*t+this.aX,c=n*t+r*e+this.aY}return n.set(s,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},kc=class extends Oc{constructor(e,t,n,r,i,a){super(e,t,n,n,r,i,a),this.isArcCurve=!0,this.type=`ArcCurve`}};function Ac(){let e=0,t=0,n=0,r=0;function i(i,a,o,s){e=i,t=o,n=-3*i+3*a-2*o-s,r=2*i-2*a+o+s}return{initCatmullRom:function(e,t,n,r,a){i(t,n,a*(n-e),a*(r-t))},initNonuniformCatmullRom:function(e,t,n,r,a,o,s){let c=(t-e)/a-(n-e)/(a+o)+(n-t)/o,l=(n-t)/o-(r-t)/(o+s)+(r-n)/s;c*=o,l*=o,i(t,n,c,l)},calc:function(i){let a=i*i,o=a*i;return e+t*i+n*a+r*o}}}var jc=new V,Mc=new Ac,Nc=new Ac,Pc=new Ac,Fc=class extends Dc{constructor(e=[],t=!1,n=`centripetal`,r=.5){super(),this.isCatmullRomCurve3=!0,this.type=`CatmullRomCurve3`,this.points=e,this.closed=t,this.curveType=n,this.tension=r}getPoint(e,t=new V){let n=t,r=this.points,i=r.length,a=(i-+!this.closed)*e,o=Math.floor(a),s=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/i)+1)*i:s===0&&o===i-1&&(o=i-2,s=1);let c,l;this.closed||o>0?c=r[(o-1)%i]:(jc.subVectors(r[0],r[1]).add(r[0]),c=jc);let u=r[o%i],d=r[(o+1)%i];if(this.closed||o+2<i?l=r[(o+2)%i]:(jc.subVectors(r[i-1],r[i-2]).add(r[i-1]),l=jc),this.curveType===`centripetal`||this.curveType===`chordal`){let e=this.curveType===`chordal`?.5:.25,t=c.distanceToSquared(u)**+e,n=u.distanceToSquared(d)**+e,r=d.distanceToSquared(l)**+e;n<1e-4&&(n=1),t<1e-4&&(t=n),r<1e-4&&(r=n),Mc.initNonuniformCatmullRom(c.x,u.x,d.x,l.x,t,n,r),Nc.initNonuniformCatmullRom(c.y,u.y,d.y,l.y,t,n,r),Pc.initNonuniformCatmullRom(c.z,u.z,d.z,l.z,t,n,r)}else this.curveType===`catmullrom`&&(Mc.initCatmullRom(c.x,u.x,d.x,l.x,this.tension),Nc.initCatmullRom(c.y,u.y,d.y,l.y,this.tension),Pc.initCatmullRom(c.z,u.z,d.z,l.z,this.tension));return n.set(Mc.calc(s),Nc.calc(s),Pc.calc(s)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let n=e.points[t];this.points.push(n.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let n=this.points[t];e.points.push(n.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let n=e.points[t];this.points.push(new V().fromArray(n))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function Ic(e,t,n,r,i){let a=(r-t)*.5,o=(i-n)*.5,s=e*e,c=e*s;return(2*n-2*r+a+o)*c+(-3*n+3*r-2*a-o)*s+a*e+n}function Lc(e,t){let n=1-e;return n*n*t}function Rc(e,t){return 2*(1-e)*e*t}function zc(e,t){return e*e*t}function Bc(e,t,n,r){return Lc(e,t)+Rc(e,n)+zc(e,r)}function Vc(e,t){let n=1-e;return n*n*n*t}function Hc(e,t){let n=1-e;return 3*n*n*e*t}function Uc(e,t){return 3*(1-e)*e*e*t}function Wc(e,t){return e*e*e*t}function Gc(e,t,n,r,i){return Vc(e,t)+Hc(e,n)+Uc(e,r)+Wc(e,i)}var Kc=class extends Dc{constructor(e=new R,t=new R,n=new R,r=new R){super(),this.isCubicBezierCurve=!0,this.type=`CubicBezierCurve`,this.v0=e,this.v1=t,this.v2=n,this.v3=r}getPoint(e,t=new R){let n=t,r=this.v0,i=this.v1,a=this.v2,o=this.v3;return n.set(Gc(e,r.x,i.x,a.x,o.x),Gc(e,r.y,i.y,a.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},qc=class extends Dc{constructor(e=new V,t=new V,n=new V,r=new V){super(),this.isCubicBezierCurve3=!0,this.type=`CubicBezierCurve3`,this.v0=e,this.v1=t,this.v2=n,this.v3=r}getPoint(e,t=new V){let n=t,r=this.v0,i=this.v1,a=this.v2,o=this.v3;return n.set(Gc(e,r.x,i.x,a.x,o.x),Gc(e,r.y,i.y,a.y,o.y),Gc(e,r.z,i.z,a.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Jc=class extends Dc{constructor(e=new R,t=new R){super(),this.isLineCurve=!0,this.type=`LineCurve`,this.v1=e,this.v2=t}getPoint(e,t=new R){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new R){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Yc=class extends Dc{constructor(e=new V,t=new V){super(),this.isLineCurve3=!0,this.type=`LineCurve3`,this.v1=e,this.v2=t}getPoint(e,t=new V){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new V){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Xc=class extends Dc{constructor(e=new R,t=new R,n=new R){super(),this.isQuadraticBezierCurve=!0,this.type=`QuadraticBezierCurve`,this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new R){let n=t,r=this.v0,i=this.v1,a=this.v2;return n.set(Bc(e,r.x,i.x,a.x),Bc(e,r.y,i.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Zc=class extends Dc{constructor(e=new V,t=new V,n=new V){super(),this.isQuadraticBezierCurve3=!0,this.type=`QuadraticBezierCurve3`,this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new V){let n=t,r=this.v0,i=this.v1,a=this.v2;return n.set(Bc(e,r.x,i.x,a.x),Bc(e,r.y,i.y,a.y),Bc(e,r.z,i.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Qc=class extends Dc{constructor(e=[]){super(),this.isSplineCurve=!0,this.type=`SplineCurve`,this.points=e}getPoint(e,t=new R){let n=t,r=this.points,i=(r.length-1)*e,a=Math.floor(i),o=i-a,s=r[a===0?a:a-1],c=r[a],l=r[a>r.length-2?r.length-1:a+1],u=r[a>r.length-3?r.length-1:a+2];return n.set(Ic(o,s.x,c.x,l.x,u.x),Ic(o,s.y,c.y,l.y,u.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let n=e.points[t];this.points.push(n.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let n=this.points[t];e.points.push(n.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let n=e.points[t];this.points.push(new R().fromArray(n))}return this}},$c=Object.freeze({__proto__:null,ArcCurve:kc,CatmullRomCurve3:Fc,CubicBezierCurve:Kc,CubicBezierCurve3:qc,EllipseCurve:Oc,LineCurve:Jc,LineCurve3:Yc,QuadraticBezierCurve:Xc,QuadraticBezierCurve3:Zc,SplineCurve:Qc}),el=class extends Dc{constructor(){super(),this.type=`CurvePath`,this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){let n=e.isVector2===!0?`LineCurve`:`LineCurve3`;this.curves.push(new $c[n](t,e))}return this}getPoint(e,t){let n=e*this.getLength(),r=this.getCurveLengths(),i=0;for(;i<r.length;){if(r[i]>=n){let e=r[i]-n,a=this.curves[i],o=a.getLength(),s=o===0?0:1-e/o;return a.getPointAt(s,t)}i++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let n=0,r=this.curves.length;n<r;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],n;for(let r=0,i=this.curves;r<i.length;r++){let a=i[r],o=a.isEllipseCurve?e*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?e*a.points.length:e,s=a.getPoints(o);for(let e=0;e<s.length;e++){let r=s[e];n&&n.equals(r)||(t.push(r),n=r)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let n=e.curves[t];this.curves.push(n.clone())}return this.autoClose=e.autoClose,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){let n=this.curves[t];e.curves.push(n.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let n=e.curves[t];this.curves.push(new $c[n.type]().fromJSON(n))}return this}},tl=class extends el{constructor(e){super(),this.type=`Path`,this.currentPoint=new R,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let n=new Jc(this.currentPoint.clone(),new R(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,r){let i=new Xc(this.currentPoint.clone(),new R(e,t),new R(n,r));return this.curves.push(i),this.currentPoint.set(n,r),this}bezierCurveTo(e,t,n,r,i,a){let o=new Kc(this.currentPoint.clone(),new R(e,t),new R(n,r),new R(i,a));return this.curves.push(o),this.currentPoint.set(i,a),this}splineThru(e){let t=new Qc([this.currentPoint.clone()].concat(e));return this.curves.push(t),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,r,i,a){let o=this.currentPoint.x,s=this.currentPoint.y;return this.absarc(e+o,t+s,n,r,i,a),this}absarc(e,t,n,r,i,a){return this.absellipse(e,t,n,n,r,i,a),this}ellipse(e,t,n,r,i,a,o,s){let c=this.currentPoint.x,l=this.currentPoint.y;return this.absellipse(e+c,t+l,n,r,i,a,o,s),this}absellipse(e,t,n,r,i,a,o,s){let c=new Oc(e,t,n,r,i,a,o,s);if(this.curves.length>0){let e=c.getPoint(0);e.equals(this.currentPoint)||this.lineTo(e.x,e.y)}this.curves.push(c);let l=c.getPoint(1);return this.currentPoint.copy(l),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}},nl=class e extends Ar{constructor(e=[new R(0,-.5),new R(.5,0),new R(0,.5)],t=12,n=0,r=Math.PI*2){super(),this.type=`LatheGeometry`,this.parameters={points:e,segments:t,phiStart:n,phiLength:r},t=Math.floor(t),r=Ze(r,0,Math.PI*2);let i=[],a=[],o=[],s=[],c=[],l=1/t,u=new V,d=new R,f=new V,p=new V,m=new V,h=0,g=0;for(let t=0;t<=e.length-1;t++)switch(t){case 0:h=e[t+1].x-e[t].x,g=e[t+1].y-e[t].y,f.x=g*1,f.y=-h,f.z=g*0,m.copy(f),f.normalize(),s.push(f.x,f.y,f.z);break;case e.length-1:s.push(m.x,m.y,m.z);break;default:h=e[t+1].x-e[t].x,g=e[t+1].y-e[t].y,f.x=g*1,f.y=-h,f.z=g*0,p.copy(f),f.x+=m.x,f.y+=m.y,f.z+=m.z,f.normalize(),s.push(f.x,f.y,f.z),m.copy(p)}for(let i=0;i<=t;i++){let f=n+i*l*r,p=Math.sin(f),m=Math.cos(f);for(let n=0;n<=e.length-1;n++){u.x=e[n].x*p,u.y=e[n].y,u.z=e[n].x*m,a.push(u.x,u.y,u.z),d.x=i/t,d.y=n/(e.length-1),o.push(d.x,d.y);let r=s[3*n+0]*p,l=s[3*n+1],f=s[3*n+0]*m;c.push(r,l,f)}}for(let n=0;n<t;n++)for(let t=0;t<e.length-1;t++){let r=t+n*e.length,a=r,o=r+e.length,s=r+e.length+1,c=r+1;i.push(a,o,c),i.push(s,c,o)}this.setIndex(i),this.setAttribute(`position`,new W(a,3)),this.setAttribute(`uv`,new W(o,2)),this.setAttribute(`normal`,new W(c,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.points,t.segments,t.phiStart,t.phiLength)}},rl=class e extends Ar{constructor(e=1,t=32,n=0,r=Math.PI*2){super(),this.type=`CircleGeometry`,this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:r},t=Math.max(3,t);let i=[],a=[],o=[],s=[],c=new V,l=new R;a.push(0,0,0),o.push(0,0,1),s.push(.5,.5);for(let i=0,u=3;i<=t;i++,u+=3){let d=n+i/t*r;c.x=e*Math.cos(d),c.y=e*Math.sin(d),a.push(c.x,c.y,c.z),o.push(0,0,1),l.x=(a[u]/e+1)/2,l.y=(a[u+1]/e+1)/2,s.push(l.x,l.y)}for(let e=1;e<=t;e++)i.push(e,e+1,0);this.setIndex(i),this.setAttribute(`position`,new W(a,3)),this.setAttribute(`normal`,new W(o,3)),this.setAttribute(`uv`,new W(s,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.radius,t.segments,t.thetaStart,t.thetaLength)}},X=class e extends Ar{constructor(e=1,t=1,n=1,r=32,i=1,a=!1,o=0,s=Math.PI*2){super(),this.type=`CylinderGeometry`,this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:r,heightSegments:i,openEnded:a,thetaStart:o,thetaLength:s};let c=this;r=Math.floor(r),i=Math.floor(i);let l=[],u=[],d=[],f=[],p=0,m=[],h=n/2,g=0;_(),a===!1&&(e>0&&v(!0),t>0&&v(!1)),this.setIndex(l),this.setAttribute(`position`,new W(u,3)),this.setAttribute(`normal`,new W(d,3)),this.setAttribute(`uv`,new W(f,2));function _(){let a=new V,_=new V,v=0,y=(t-e)/n;for(let c=0;c<=i;c++){let l=[],g=c/i,v=g*(t-e)+e;for(let e=0;e<=r;e++){let t=e/r,i=t*s+o,c=Math.sin(i),m=Math.cos(i);_.x=v*c,_.y=-g*n+h,_.z=v*m,u.push(_.x,_.y,_.z),a.set(c,y,m).normalize(),d.push(a.x,a.y,a.z),f.push(t,1-g),l.push(p++)}m.push(l)}for(let n=0;n<r;n++)for(let r=0;r<i;r++){let i=m[r][n],a=m[r+1][n],o=m[r+1][n+1],s=m[r][n+1];e>0&&(l.push(i,a,s),v+=3),t>0&&(l.push(a,o,s),v+=3)}c.addGroup(g,v,0),g+=v}function v(n){let i=p,a=new R,m=new V,_=0,v=n===!0?e:t,y=n===!0?1:-1;for(let e=1;e<=r;e++)u.push(0,h*y,0),d.push(0,y,0),f.push(.5,.5),p++;let b=p;for(let e=0;e<=r;e++){let t=e/r*s+o,n=Math.cos(t),i=Math.sin(t);m.x=v*i,m.y=h*y,m.z=v*n,u.push(m.x,m.y,m.z),d.push(0,y,0),a.x=n*.5+.5,a.y=i*.5*y+.5,f.push(a.x,a.y),p++}for(let e=0;e<r;e++){let t=i+e,r=b+e;n===!0?l.push(r,r+1,t):l.push(r+1,r,t),_+=3}c.addGroup(g,_,n===!0?1:2),g+=_}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},il=class e extends X{constructor(e=1,t=1,n=32,r=1,i=!1,a=0,o=Math.PI*2){super(0,e,t,n,r,i,a,o),this.type=`ConeGeometry`,this.parameters={radius:e,height:t,radialSegments:n,heightSegments:r,openEnded:i,thetaStart:a,thetaLength:o}}static fromJSON(t){return new e(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},al=class e extends Ar{constructor(e=[],t=[],n=1,r=0){super(),this.type=`PolyhedronGeometry`,this.parameters={vertices:e,indices:t,radius:n,detail:r};let i=[],a=[];o(r),c(n),l(),this.setAttribute(`position`,new W(i,3)),this.setAttribute(`normal`,new W(i.slice(),3)),this.setAttribute(`uv`,new W(a,2)),r===0?this.computeVertexNormals():this.normalizeNormals();function o(e){let n=new V,r=new V,i=new V;for(let a=0;a<t.length;a+=3)f(t[a+0],n),f(t[a+1],r),f(t[a+2],i),s(n,r,i,e)}function s(e,t,n,r){let i=r+1,a=[];for(let r=0;r<=i;r++){a[r]=[];let o=e.clone().lerp(n,r/i),s=t.clone().lerp(n,r/i),c=i-r;for(let e=0;e<=c;e++)e===0&&r===i?a[r][e]=o:a[r][e]=o.clone().lerp(s,e/c)}for(let e=0;e<i;e++)for(let t=0;t<2*(i-e)-1;t++){let n=Math.floor(t/2);t%2==0?(d(a[e][n+1]),d(a[e+1][n]),d(a[e][n])):(d(a[e][n+1]),d(a[e+1][n+1]),d(a[e+1][n]))}}function c(e){let t=new V;for(let n=0;n<i.length;n+=3)t.x=i[n+0],t.y=i[n+1],t.z=i[n+2],t.normalize().multiplyScalar(e),i[n+0]=t.x,i[n+1]=t.y,i[n+2]=t.z}function l(){let e=new V;for(let t=0;t<i.length;t+=3){e.x=i[t+0],e.y=i[t+1],e.z=i[t+2];let n=h(e)/2/Math.PI+.5,r=g(e)/Math.PI+.5;a.push(n,1-r)}p(),u()}function u(){for(let e=0;e<a.length;e+=6){let t=a[e+0],n=a[e+2],r=a[e+4];Math.max(t,n,r)>.9&&Math.min(t,n,r)<.1&&(t<.2&&(a[e+0]+=1),n<.2&&(a[e+2]+=1),r<.2&&(a[e+4]+=1))}}function d(e){i.push(e.x,e.y,e.z)}function f(t,n){let r=t*3;n.x=e[r+0],n.y=e[r+1],n.z=e[r+2]}function p(){let e=new V,t=new V,n=new V,r=new V,o=new R,s=new R,c=new R;for(let l=0,u=0;l<i.length;l+=9,u+=6){e.set(i[l+0],i[l+1],i[l+2]),t.set(i[l+3],i[l+4],i[l+5]),n.set(i[l+6],i[l+7],i[l+8]),o.set(a[u+0],a[u+1]),s.set(a[u+2],a[u+3]),c.set(a[u+4],a[u+5]),r.copy(e).add(t).add(n).divideScalar(3);let d=h(r);m(o,u+0,e,d),m(s,u+2,t,d),m(c,u+4,n,d)}}function m(e,t,n,r){r<0&&e.x===1&&(a[t]=e.x-1),n.x===0&&n.z===0&&(a[t]=r/2/Math.PI+.5)}function h(e){return Math.atan2(e.z,-e.x)}function g(e){return Math.atan2(-e.y,Math.sqrt(e.x*e.x+e.z*e.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.vertices,t.indices,t.radius,t.details)}},ol=class extends tl{constructor(e){super(e),this.uuid=Xe(),this.type=`Shape`,this.holes=[]}getPointsHoles(e){let t=[];for(let n=0,r=this.holes.length;n<r;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let n=e.holes[t];this.holes.push(n.clone())}return this}toJSON(){let e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){let n=this.holes[t];e.holes.push(n.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let n=e.holes[t];this.holes.push(new tl().fromJSON(n))}return this}},sl={triangulate:function(e,t,n=2){let r=t&&t.length,i=r?t[0]*n:e.length,a=cl(e,0,i,n,!0),o=[];if(!a||a.next===a.prev)return o;let s,c,l,u,d,f,p;if(r&&(a=hl(e,t,a,n)),e.length>80*n){s=l=e[0],c=u=e[1];for(let t=n;t<i;t+=n)d=e[t],f=e[t+1],d<s&&(s=d),f<c&&(c=f),d>l&&(l=d),f>u&&(u=f);p=Math.max(l-s,u-c),p=p===0?0:32767/p}return ul(a,o,n,s,c,p,0),o}};function cl(e,t,n,r,i){let a,o;if(i===Rl(e,t,n,r)>0)for(a=t;a<n;a+=r)o=Fl(a,e[a],e[a+1],o);else for(a=n-r;a>=t;a-=r)o=Fl(a,e[a],e[a+1],o);return o&&Dl(o,o.next)&&(Il(o),o=o.next),o}function ll(e,t){if(!e)return e;t||=e;let n=e,r;do if(r=!1,!n.steiner&&(Dl(n,n.next)||El(n.prev,n,n.next)===0)){if(Il(n),n=t=n.prev,n===n.next)break;r=!0}else n=n.next;while(r||n!==t);return t}function ul(e,t,n,r,i,a,o){if(!e)return;!o&&a&&bl(e,r,i,a);let s=e,c,l;for(;e.prev!==e.next;)if(c=e.prev,l=e.next,a?fl(e,r,i,a):dl(e))t.push(c.i/n|0),t.push(e.i/n|0),t.push(l.i/n|0),Il(e),e=l.next,s=l.next;else if(e=l,e===s){o?o===1?(e=pl(ll(e),t,n),ul(e,t,n,r,i,a,2)):o===2&&ml(e,t,n,r,i,a):ul(ll(e),t,n,r,i,a,1);break}}function dl(e){let t=e.prev,n=e,r=e.next;if(El(t,n,r)>=0)return!1;let i=t.x,a=n.x,o=r.x,s=t.y,c=n.y,l=r.y,u=i<a?i<o?i:o:a<o?a:o,d=s<c?s<l?s:l:c<l?c:l,f=i>a?i>o?i:o:a>o?a:o,p=s>c?s>l?s:l:c>l?c:l,m=r.next;for(;m!==t;){if(m.x>=u&&m.x<=f&&m.y>=d&&m.y<=p&&wl(i,s,a,c,o,l,m.x,m.y)&&El(m.prev,m,m.next)>=0)return!1;m=m.next}return!0}function fl(e,t,n,r){let i=e.prev,a=e,o=e.next;if(El(i,a,o)>=0)return!1;let s=i.x,c=a.x,l=o.x,u=i.y,d=a.y,f=o.y,p=s<c?s<l?s:l:c<l?c:l,m=u<d?u<f?u:f:d<f?d:f,h=s>c?s>l?s:l:c>l?c:l,g=u>d?u>f?u:f:d>f?d:f,_=Sl(p,m,t,n,r),v=Sl(h,g,t,n,r),y=e.prevZ,b=e.nextZ;for(;y&&y.z>=_&&b&&b.z<=v;){if(y.x>=p&&y.x<=h&&y.y>=m&&y.y<=g&&y!==i&&y!==o&&wl(s,u,c,d,l,f,y.x,y.y)&&El(y.prev,y,y.next)>=0||(y=y.prevZ,b.x>=p&&b.x<=h&&b.y>=m&&b.y<=g&&b!==i&&b!==o&&wl(s,u,c,d,l,f,b.x,b.y)&&El(b.prev,b,b.next)>=0))return!1;b=b.nextZ}for(;y&&y.z>=_;){if(y.x>=p&&y.x<=h&&y.y>=m&&y.y<=g&&y!==i&&y!==o&&wl(s,u,c,d,l,f,y.x,y.y)&&El(y.prev,y,y.next)>=0)return!1;y=y.prevZ}for(;b&&b.z<=v;){if(b.x>=p&&b.x<=h&&b.y>=m&&b.y<=g&&b!==i&&b!==o&&wl(s,u,c,d,l,f,b.x,b.y)&&El(b.prev,b,b.next)>=0)return!1;b=b.nextZ}return!0}function pl(e,t,n){let r=e;do{let i=r.prev,a=r.next.next;!Dl(i,a)&&Ol(i,r,r.next,a)&&Ml(i,a)&&Ml(a,i)&&(t.push(i.i/n|0),t.push(r.i/n|0),t.push(a.i/n|0),Il(r),Il(r.next),r=e=a),r=r.next}while(r!==e);return ll(r)}function ml(e,t,n,r,i,a){let o=e;do{let e=o.next.next;for(;e!==o.prev;){if(o.i!==e.i&&Tl(o,e)){let s=Pl(o,e);o=ll(o,o.next),s=ll(s,s.next),ul(o,t,n,r,i,a,0),ul(s,t,n,r,i,a,0);return}e=e.next}o=o.next}while(o!==e)}function hl(e,t,n,r){let i=[],a,o,s,c,l;for(a=0,o=t.length;a<o;a++)s=t[a]*r,c=a<o-1?t[a+1]*r:e.length,l=cl(e,s,c,r,!1),l===l.next&&(l.steiner=!0),i.push(Cl(l));for(i.sort(gl),a=0;a<i.length;a++)n=_l(i[a],n);return n}function gl(e,t){return e.x-t.x}function _l(e,t){let n=vl(e,t);if(!n)return t;let r=Pl(n,e);return ll(r,r.next),ll(n,n.next)}function vl(e,t){let n=t,r=-1/0,i,a=e.x,o=e.y;do{if(o<=n.y&&o>=n.next.y&&n.next.y!==n.y){let e=n.x+(o-n.y)*(n.next.x-n.x)/(n.next.y-n.y);if(e<=a&&e>r&&(r=e,i=n.x<n.next.x?n:n.next,e===a))return i}n=n.next}while(n!==t);if(!i)return null;let s=i,c=i.x,l=i.y,u=1/0,d;n=i;do a>=n.x&&n.x>=c&&a!==n.x&&wl(o<l?a:r,o,c,l,o<l?r:a,o,n.x,n.y)&&(d=Math.abs(o-n.y)/(a-n.x),Ml(n,e)&&(d<u||d===u&&(n.x>i.x||n.x===i.x&&yl(i,n)))&&(i=n,u=d)),n=n.next;while(n!==s);return i}function yl(e,t){return El(e.prev,e,t.prev)<0&&El(t.next,e,e.next)<0}function bl(e,t,n,r){let i=e;do i.z===0&&(i.z=Sl(i.x,i.y,t,n,r)),i.prevZ=i.prev,i.nextZ=i.next,i=i.next;while(i!==e);i.prevZ.nextZ=null,i.prevZ=null,xl(i)}function xl(e){let t,n,r,i,a,o,s,c,l=1;do{for(n=e,e=null,a=null,o=0;n;){for(o++,r=n,s=0,t=0;t<l&&(s++,r=r.nextZ,r);t++);for(c=l;s>0||c>0&&r;)s!==0&&(c===0||!r||n.z<=r.z)?(i=n,n=n.nextZ,s--):(i=r,r=r.nextZ,c--),a?a.nextZ=i:e=i,i.prevZ=a,a=i;n=r}a.nextZ=null,l*=2}while(o>1);return e}function Sl(e,t,n,r,i){return e=(e-n)*i|0,t=(t-r)*i|0,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,e|t<<1}function Cl(e){let t=e,n=e;do(t.x<n.x||t.x===n.x&&t.y<n.y)&&(n=t),t=t.next;while(t!==e);return n}function wl(e,t,n,r,i,a,o,s){return(i-o)*(t-s)>=(e-o)*(a-s)&&(e-o)*(r-s)>=(n-o)*(t-s)&&(n-o)*(a-s)>=(i-o)*(r-s)}function Tl(e,t){return e.next.i!==t.i&&e.prev.i!==t.i&&!jl(e,t)&&(Ml(e,t)&&Ml(t,e)&&Nl(e,t)&&(El(e.prev,e,t.prev)||El(e,t.prev,t))||Dl(e,t)&&El(e.prev,e,e.next)>0&&El(t.prev,t,t.next)>0)}function El(e,t,n){return(t.y-e.y)*(n.x-t.x)-(t.x-e.x)*(n.y-t.y)}function Dl(e,t){return e.x===t.x&&e.y===t.y}function Ol(e,t,n,r){let i=Al(El(e,t,n)),a=Al(El(e,t,r)),o=Al(El(n,r,e)),s=Al(El(n,r,t));return!!(i!==a&&o!==s||i===0&&kl(e,n,t)||a===0&&kl(e,r,t)||o===0&&kl(n,e,r)||s===0&&kl(n,t,r))}function kl(e,t,n){return t.x<=Math.max(e.x,n.x)&&t.x>=Math.min(e.x,n.x)&&t.y<=Math.max(e.y,n.y)&&t.y>=Math.min(e.y,n.y)}function Al(e){return e>0?1:e<0?-1:0}function jl(e,t){let n=e;do{if(n.i!==e.i&&n.next.i!==e.i&&n.i!==t.i&&n.next.i!==t.i&&Ol(n,n.next,e,t))return!0;n=n.next}while(n!==e);return!1}function Ml(e,t){return El(e.prev,e,e.next)<0?El(e,t,e.next)>=0&&El(e,e.prev,t)>=0:El(e,t,e.prev)<0||El(e,e.next,t)<0}function Nl(e,t){let n=e,r=!1,i=(e.x+t.x)/2,a=(e.y+t.y)/2;do n.y>a!=n.next.y>a&&n.next.y!==n.y&&i<(n.next.x-n.x)*(a-n.y)/(n.next.y-n.y)+n.x&&(r=!r),n=n.next;while(n!==e);return r}function Pl(e,t){let n=new Ll(e.i,e.x,e.y),r=new Ll(t.i,t.x,t.y),i=e.next,a=t.prev;return e.next=t,t.prev=e,n.next=i,i.prev=n,r.next=n,n.prev=r,a.next=r,r.prev=a,r}function Fl(e,t,n,r){let i=new Ll(e,t,n);return r?(i.next=r.next,i.prev=r,r.next.prev=i,r.next=i):(i.prev=i,i.next=i),i}function Il(e){e.next.prev=e.prev,e.prev.next=e.next,e.prevZ&&(e.prevZ.nextZ=e.nextZ),e.nextZ&&(e.nextZ.prevZ=e.prevZ)}function Ll(e,t,n){this.i=e,this.x=t,this.y=n,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function Rl(e,t,n,r){let i=0;for(let a=t,o=n-r;a<n;a+=r)i+=(e[o]-e[a])*(e[a+1]+e[o+1]),o=a;return i}var zl=class e{static area(e){let t=e.length,n=0;for(let r=t-1,i=0;i<t;r=i++)n+=e[r].x*e[i].y-e[i].x*e[r].y;return n*.5}static isClockWise(t){return e.area(t)<0}static triangulateShape(e,t){let n=[],r=[],i=[];Bl(e),Vl(n,e);let a=e.length;t.forEach(Bl);for(let e=0;e<t.length;e++)r.push(a),a+=t[e].length,Vl(n,t[e]);let o=sl.triangulate(n,r);for(let e=0;e<o.length;e+=3)i.push(o.slice(e,e+3));return i}};function Bl(e){let t=e.length;t>2&&e[t-1].equals(e[0])&&e.pop()}function Vl(e,t){for(let n=0;n<t.length;n++)e.push(t[n].x),e.push(t[n].y)}var Hl=class e extends Ar{constructor(e=new ol([new R(.5,.5),new R(-.5,.5),new R(-.5,-.5),new R(.5,-.5)]),t={}){super(),this.type=`ExtrudeGeometry`,this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];let n=this,r=[],i=[];for(let t=0,n=e.length;t<n;t++){let n=e[t];a(n)}this.setAttribute(`position`,new W(r,3)),this.setAttribute(`uv`,new W(i,2)),this.computeVertexNormals();function a(e){let a=[],o=t.curveSegments===void 0?12:t.curveSegments,s=t.steps===void 0?1:t.steps,c=t.depth===void 0?1:t.depth,l=t.bevelEnabled===void 0||t.bevelEnabled,u=t.bevelThickness===void 0?.2:t.bevelThickness,d=t.bevelSize===void 0?u-.1:t.bevelSize,f=t.bevelOffset===void 0?0:t.bevelOffset,p=t.bevelSegments===void 0?3:t.bevelSegments,m=t.extrudePath,h=t.UVGenerator===void 0?Ul:t.UVGenerator,g,_=!1,v,y,b,x;m&&(g=m.getSpacedPoints(s),_=!0,l=!1,v=m.computeFrenetFrames(s,!1),y=new V,b=new V,x=new V),l||(p=0,u=0,d=0,f=0);let S=e.extractPoints(o),C=S.shape,w=S.holes;if(!zl.isClockWise(C)){C=C.reverse();for(let e=0,t=w.length;e<t;e++){let t=w[e];zl.isClockWise(t)&&(w[e]=t.reverse())}}let T=zl.triangulateShape(C,w),E=C;for(let e=0,t=w.length;e<t;e++){let t=w[e];C=C.concat(t)}function D(e,t,n){return t||console.error(`THREE.ExtrudeGeometry: vec does not exist`),e.clone().addScaledVector(t,n)}let O=C.length,k=T.length;function A(e,t,n){let r,i,a,o=e.x-t.x,s=e.y-t.y,c=n.x-e.x,l=n.y-e.y,u=o*o+s*s,d=o*l-s*c;if(Math.abs(d)>2**-52){let d=Math.sqrt(u),f=Math.sqrt(c*c+l*l),p=t.x-s/d,m=t.y+o/d,h=n.x-l/f,g=n.y+c/f,_=((h-p)*l-(g-m)*c)/(o*l-s*c);r=p+o*_-e.x,i=m+s*_-e.y;let v=r*r+i*i;if(v<=2)return new R(r,i);a=Math.sqrt(v/2)}else{let e=!1;o>2**-52?c>2**-52&&(e=!0):o<-(2**-52)?c<-(2**-52)&&(e=!0):Math.sign(s)===Math.sign(l)&&(e=!0),e?(r=-s,i=o,a=Math.sqrt(u)):(r=o,i=s,a=Math.sqrt(u/2))}return new R(r/a,i/a)}let j=[];for(let e=0,t=E.length,n=t-1,r=e+1;e<t;e++,n++,r++)n===t&&(n=0),r===t&&(r=0),j[e]=A(E[e],E[n],E[r]);let M=[],ee,N=j.concat();for(let e=0,t=w.length;e<t;e++){let t=w[e];ee=[];for(let e=0,n=t.length,r=n-1,i=e+1;e<n;e++,r++,i++)r===n&&(r=0),i===n&&(i=0),ee[e]=A(t[e],t[r],t[i]);M.push(ee),N=N.concat(ee)}for(let e=0;e<p;e++){let t=e/p,n=u*Math.cos(t*Math.PI/2),r=d*Math.sin(t*Math.PI/2)+f;for(let e=0,t=E.length;e<t;e++){let t=D(E[e],j[e],r);ie(t.x,t.y,-n)}for(let e=0,t=w.length;e<t;e++){let t=w[e];ee=M[e];for(let e=0,i=t.length;e<i;e++){let i=D(t[e],ee[e],r);ie(i.x,i.y,-n)}}}let P=d+f;for(let e=0;e<O;e++){let t=l?D(C[e],N[e],P):C[e];_?(b.copy(v.normals[0]).multiplyScalar(t.x),y.copy(v.binormals[0]).multiplyScalar(t.y),x.copy(g[0]).add(b).add(y),ie(x.x,x.y,x.z)):ie(t.x,t.y,0)}for(let e=1;e<=s;e++)for(let t=0;t<O;t++){let n=l?D(C[t],N[t],P):C[t];_?(b.copy(v.normals[e]).multiplyScalar(n.x),y.copy(v.binormals[e]).multiplyScalar(n.y),x.copy(g[e]).add(b).add(y),ie(x.x,x.y,x.z)):ie(n.x,n.y,c/s*e)}for(let e=p-1;e>=0;e--){let t=e/p,n=u*Math.cos(t*Math.PI/2),r=d*Math.sin(t*Math.PI/2)+f;for(let e=0,t=E.length;e<t;e++){let t=D(E[e],j[e],r);ie(t.x,t.y,c+n)}for(let e=0,t=w.length;e<t;e++){let t=w[e];ee=M[e];for(let e=0,i=t.length;e<i;e++){let i=D(t[e],ee[e],r);_?ie(i.x,i.y+g[s-1].y,g[s-1].x+n):ie(i.x,i.y,c+n)}}}te(),ne();function te(){let e=r.length/3;if(l){let e=0,t=O*e;for(let e=0;e<k;e++){let n=T[e];ae(n[2]+t,n[1]+t,n[0]+t)}e=s+p*2,t=O*e;for(let e=0;e<k;e++){let n=T[e];ae(n[0]+t,n[1]+t,n[2]+t)}}else{for(let e=0;e<k;e++){let t=T[e];ae(t[2],t[1],t[0])}for(let e=0;e<k;e++){let t=T[e];ae(t[0]+O*s,t[1]+O*s,t[2]+O*s)}}n.addGroup(e,r.length/3-e,0)}function ne(){let e=r.length/3,t=0;re(E,t),t+=E.length;for(let e=0,n=w.length;e<n;e++){let n=w[e];re(n,t),t+=n.length}n.addGroup(e,r.length/3-e,1)}function re(e,t){let n=e.length;for(;--n>=0;){let r=n,i=n-1;i<0&&(i=e.length-1);for(let e=0,n=s+p*2;e<n;e++){let n=O*e,a=O*(e+1);oe(t+r+n,t+i+n,t+i+a,t+r+a)}}}function ie(e,t,n){a.push(e),a.push(t),a.push(n)}function ae(e,t,i){se(e),se(t),se(i);let a=r.length/3,o=h.generateTopUV(n,r,a-3,a-2,a-1);ce(o[0]),ce(o[1]),ce(o[2])}function oe(e,t,i,a){se(e),se(t),se(a),se(t),se(i),se(a);let o=r.length/3,s=h.generateSideWallUV(n,r,o-6,o-3,o-2,o-1);ce(s[0]),ce(s[1]),ce(s[3]),ce(s[1]),ce(s[2]),ce(s[3])}function se(e){r.push(a[e*3+0]),r.push(a[e*3+1]),r.push(a[e*3+2])}function ce(e){i.push(e.x),i.push(e.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes,n=this.parameters.options;return Wl(t,n,e)}static fromJSON(t,n){let r=[];for(let e=0,i=t.shapes.length;e<i;e++){let i=n[t.shapes[e]];r.push(i)}let i=t.options.extrudePath;return i!==void 0&&(t.options.extrudePath=new $c[i.type]().fromJSON(i)),new e(r,t.options)}},Ul={generateTopUV:function(e,t,n,r,i){let a=t[n*3],o=t[n*3+1],s=t[r*3],c=t[r*3+1],l=t[i*3],u=t[i*3+1];return[new R(a,o),new R(s,c),new R(l,u)]},generateSideWallUV:function(e,t,n,r,i,a){let o=t[n*3],s=t[n*3+1],c=t[n*3+2],l=t[r*3],u=t[r*3+1],d=t[r*3+2],f=t[i*3],p=t[i*3+1],m=t[i*3+2],h=t[a*3],g=t[a*3+1],_=t[a*3+2];return Math.abs(s-u)<Math.abs(o-l)?[new R(o,1-c),new R(l,1-d),new R(f,1-m),new R(h,1-_)]:[new R(s,1-c),new R(u,1-d),new R(p,1-m),new R(g,1-_)]}};function Wl(e,t,n){if(n.shapes=[],Array.isArray(e))for(let t=0,r=e.length;t<r;t++){let r=e[t];n.shapes.push(r.uuid)}else n.shapes.push(e.uuid);return n.options=Object.assign({},t),t.extrudePath!==void 0&&(n.options.extrudePath=t.extrudePath.toJSON()),n}var Gl=class e extends al{constructor(e=1,t=0){let n=(1+Math.sqrt(5))/2,r=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1];super(r,[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1],e,t),this.type=`IcosahedronGeometry`,this.parameters={radius:e,detail:t}}static fromJSON(t){return new e(t.radius,t.detail)}},Kl=class e extends Ar{constructor(e=.5,t=1,n=32,r=1,i=0,a=Math.PI*2){super(),this.type=`RingGeometry`,this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:r,thetaStart:i,thetaLength:a},n=Math.max(3,n),r=Math.max(1,r);let o=[],s=[],c=[],l=[],u=e,d=(t-e)/r,f=new V,p=new R;for(let e=0;e<=r;e++){for(let e=0;e<=n;e++){let r=i+e/n*a;f.x=u*Math.cos(r),f.y=u*Math.sin(r),s.push(f.x,f.y,f.z),c.push(0,0,1),p.x=(f.x/t+1)/2,p.y=(f.y/t+1)/2,l.push(p.x,p.y)}u+=d}for(let e=0;e<r;e++){let t=e*(n+1);for(let e=0;e<n;e++){let r=e+t,i=r,a=r+n+1,s=r+n+2,c=r+1;o.push(i,a,c),o.push(a,s,c)}}this.setIndex(o),this.setAttribute(`position`,new W(s,3)),this.setAttribute(`normal`,new W(c,3)),this.setAttribute(`uv`,new W(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}},ql=class e extends Ar{constructor(e=new ol([new R(0,.5),new R(-.5,-.5),new R(.5,-.5)]),t=12){super(),this.type=`ShapeGeometry`,this.parameters={shapes:e,curveSegments:t};let n=[],r=[],i=[],a=[],o=0,s=0;if(Array.isArray(e)===!1)c(e);else for(let t=0;t<e.length;t++)c(e[t]),this.addGroup(o,s,t),o+=s,s=0;this.setIndex(n),this.setAttribute(`position`,new W(r,3)),this.setAttribute(`normal`,new W(i,3)),this.setAttribute(`uv`,new W(a,2));function c(e){let o=r.length/3,c=e.extractPoints(t),l=c.shape,u=c.holes;zl.isClockWise(l)===!1&&(l=l.reverse());for(let e=0,t=u.length;e<t;e++){let t=u[e];zl.isClockWise(t)===!0&&(u[e]=t.reverse())}let d=zl.triangulateShape(l,u);for(let e=0,t=u.length;e<t;e++){let t=u[e];l=l.concat(t)}for(let e=0,t=l.length;e<t;e++){let t=l[e];r.push(t.x,t.y,0),i.push(0,0,1),a.push(t.x,t.y)}for(let e=0,t=d.length;e<t;e++){let t=d[e],r=t[0]+o,i=t[1]+o,a=t[2]+o;n.push(r,i,a),s+=3}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes;return Jl(t,e)}static fromJSON(t,n){let r=[];for(let e=0,i=t.shapes.length;e<i;e++){let i=n[t.shapes[e]];r.push(i)}return new e(r,t.curveSegments)}};function Jl(e,t){if(t.shapes=[],Array.isArray(e))for(let n=0,r=e.length;n<r;n++){let r=e[n];t.shapes.push(r.uuid)}else t.shapes.push(e.uuid);return t}var Yl=class e extends Ar{constructor(e=1,t=32,n=16,r=0,i=Math.PI*2,a=0,o=Math.PI){super(),this.type=`SphereGeometry`,this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:r,phiLength:i,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let s=Math.min(a+o,Math.PI),c=0,l=[],u=new V,d=new V,f=[],p=[],m=[],h=[];for(let f=0;f<=n;f++){let g=[],_=f/n,v=0;f===0&&a===0?v=.5/t:f===n&&s===Math.PI&&(v=-.5/t);for(let n=0;n<=t;n++){let s=n/t;u.x=-e*Math.cos(r+s*i)*Math.sin(a+_*o),u.y=e*Math.cos(a+_*o),u.z=e*Math.sin(r+s*i)*Math.sin(a+_*o),p.push(u.x,u.y,u.z),d.copy(u).normalize(),m.push(d.x,d.y,d.z),h.push(s+v,1-_),g.push(c++)}l.push(g)}for(let e=0;e<n;e++)for(let r=0;r<t;r++){let t=l[e][r+1],i=l[e][r],o=l[e+1][r],c=l[e+1][r+1];(e!==0||a>0)&&f.push(t,i,c),(e!==n-1||s<Math.PI)&&f.push(i,o,c)}this.setIndex(f),this.setAttribute(`position`,new W(p,3)),this.setAttribute(`normal`,new W(m,3)),this.setAttribute(`uv`,new W(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}},Xl=class e extends Ar{constructor(e=1,t=.4,n=12,r=48,i=Math.PI*2){super(),this.type=`TorusGeometry`,this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:r,arc:i},n=Math.floor(n),r=Math.floor(r);let a=[],o=[],s=[],c=[],l=new V,u=new V,d=new V;for(let a=0;a<=n;a++)for(let f=0;f<=r;f++){let p=f/r*i,m=a/n*Math.PI*2;u.x=(e+t*Math.cos(m))*Math.cos(p),u.y=(e+t*Math.cos(m))*Math.sin(p),u.z=t*Math.sin(m),o.push(u.x,u.y,u.z),l.x=e*Math.cos(p),l.y=e*Math.sin(p),d.subVectors(u,l).normalize(),s.push(d.x,d.y,d.z),c.push(f/r),c.push(a/n)}for(let e=1;e<=n;e++)for(let t=1;t<=r;t++){let n=(r+1)*e+t-1,i=(r+1)*(e-1)+t-1,o=(r+1)*(e-1)+t,s=(r+1)*e+t;a.push(n,i,s),a.push(i,o,s)}this.setIndex(a),this.setAttribute(`position`,new W(o,3)),this.setAttribute(`normal`,new W(s,3)),this.setAttribute(`uv`,new W(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}},Zl=class e extends Ar{constructor(e=new Zc(new V(-1,-1,0),new V(-1,1,0),new V(1,1,0)),t=64,n=1,r=8,i=!1){super(),this.type=`TubeGeometry`,this.parameters={path:e,tubularSegments:t,radius:n,radialSegments:r,closed:i};let a=e.computeFrenetFrames(t,i);this.tangents=a.tangents,this.normals=a.normals,this.binormals=a.binormals;let o=new V,s=new V,c=new R,l=new V,u=[],d=[],f=[],p=[];m(),this.setIndex(p),this.setAttribute(`position`,new W(u,3)),this.setAttribute(`normal`,new W(d,3)),this.setAttribute(`uv`,new W(f,2));function m(){for(let e=0;e<t;e++)h(e);h(i===!1?t:0),_(),g()}function h(i){l=e.getPointAt(i/t,l);let c=a.normals[i],f=a.binormals[i];for(let e=0;e<=r;e++){let t=e/r*Math.PI*2,i=Math.sin(t),a=-Math.cos(t);s.x=a*c.x+i*f.x,s.y=a*c.y+i*f.y,s.z=a*c.z+i*f.z,s.normalize(),d.push(s.x,s.y,s.z),o.x=l.x+n*s.x,o.y=l.y+n*s.y,o.z=l.z+n*s.z,u.push(o.x,o.y,o.z)}}function g(){for(let e=1;e<=t;e++)for(let t=1;t<=r;t++){let n=(r+1)*(e-1)+(t-1),i=(r+1)*e+(t-1),a=(r+1)*e+t,o=(r+1)*(e-1)+t;p.push(n,i,o),p.push(i,a,o)}}function _(){for(let e=0;e<=t;e++)for(let n=0;n<=r;n++)c.x=e/t,c.y=n/r,f.push(c.x,c.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(t){return new e(new $c[t.path.type]().fromJSON(t.path),t.tubularSegments,t.radius,t.radialSegments,t.closed)}},Ql=class extends Zr{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type=`RawShaderMaterial`}},Z=class extends gr{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:``},this.type=`MeshStandardMaterial`,this.color=new U(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new U(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=0,this.normalScale=new R(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Mn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap=`round`,this.wireframeLinejoin=`round`,this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:``},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}};function $l(e,t,n){return!e||!n&&e.constructor===t?e:typeof t.BYTES_PER_ELEMENT==`number`?new t(e):Array.prototype.slice.call(e)}function eu(e){return ArrayBuffer.isView(e)&&!(e instanceof DataView)}var tu=class{constructor(e,t,n,r){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=r===void 0?new t.constructor(n):r,this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,r=t[n],i=t[n-1];validate_interval:{seek:{let a;linear_scan:{forward_scan:if(!(e<r)){for(let a=n+2;;){if(r===void 0){if(e<i)break forward_scan;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(i=r,r=t[++n],e<r)break seek}a=t.length;break linear_scan}if(!(e>=i)){let o=t[1];e<o&&(n=2,i=o);for(let a=n-2;;){if(i===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===a)break;if(r=i,i=t[--n-1],e>=i)break seek}a=n,n=0;break linear_scan}break validate_interval}for(;n<a;){let r=n+a>>>1;e<t[r]?a=r:n=r+1}if(r=t[n],i=t[n-1],i===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(r===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,i,r)}return this.interpolate_(n,i,e,r)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,r=this.valueSize,i=e*r;for(let e=0;e!==r;++e)t[e]=n[i+e];return t}interpolate_(){throw Error(`call to abstract method`)}intervalChanged_(){}},nu=class extends tu{constructor(e,t,n,r){super(e,t,n,r),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Ae,endingEnd:Ae}}intervalChanged_(e,t,n){let r=this.parameterPositions,i=e-2,a=e+1,o=r[i],s=r[a];if(o===void 0)switch(this.getSettings_().endingStart){case je:i=e,o=2*t-n;break;case Me:i=r.length-2,o=t+r[i]-r[i+1];break;default:i=e,o=n}if(s===void 0)switch(this.getSettings_().endingEnd){case je:a=e,s=2*n-t;break;case Me:a=1,s=n+r[1]-r[0];break;default:a=e-1,s=t}let c=(n-t)*.5,l=this.valueSize;this._weightPrev=c/(t-o),this._weightNext=c/(s-n),this._offsetPrev=i*l,this._offsetNext=a*l}interpolate_(e,t,n,r){let i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,s=e*o,c=s-o,l=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,f=this._weightNext,p=(n-t)/(r-t),m=p*p,h=m*p,g=-d*h+2*d*m-d*p,_=(1+d)*h+(-1.5-2*d)*m+(-.5+d)*p+1,v=(-1-f)*h+(1.5+f)*m+.5*p,y=f*h-f*m;for(let e=0;e!==o;++e)i[e]=g*a[l+e]+_*a[c+e]+v*a[s+e]+y*a[u+e];return i}},ru=class extends tu{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e,t,n,r){let i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,s=e*o,c=s-o,l=(n-t)/(r-t),u=1-l;for(let e=0;e!==o;++e)i[e]=a[c+e]*u+a[s+e]*l;return i}},iu=class extends tu{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e){return this.copySampleValue_(e-1)}},au=class{constructor(e,t,n,r){if(e===void 0)throw Error(`THREE.KeyframeTrack: track name is undefined`);if(t===void 0||t.length===0)throw Error(`THREE.KeyframeTrack: no keyframes in track named `+e);this.name=e,this.times=$l(t,this.TimeBufferType),this.values=$l(n,this.ValueBufferType),this.setInterpolation(r||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:$l(e.times,Array),values:$l(e.values,Array)};let t=e.getInterpolation();t!==e.DefaultInterpolation&&(n.interpolation=t)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new iu(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new ru(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new nu(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case De:t=this.InterpolantFactoryMethodDiscrete;break;case Oe:t=this.InterpolantFactoryMethodLinear;break;case ke:t=this.InterpolantFactoryMethodSmooth}if(t===void 0){let t=`unsupported interpolation for `+this.ValueTypeName+` keyframe track named `+this.name;if(this.createInterpolant===void 0){if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw Error(t)}return console.warn(`THREE.KeyframeTrack:`,t),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return De;case this.InterpolantFactoryMethodLinear:return Oe;case this.InterpolantFactoryMethodSmooth:return ke}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,r=t.length;n!==r;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,r=t.length;n!==r;++n)t[n]*=e}return this}trim(e,t){let n=this.times,r=n.length,i=0,a=r-1;for(;i!==r&&n[i]<e;)++i;for(;a!==-1&&n[a]>t;)--a;if(++a,i!==0||a!==r){i>=a&&(a=Math.max(a,1),i=a-1);let e=this.getValueSize();this.times=n.slice(i,a),this.values=this.values.slice(i*e,a*e)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(console.error(`THREE.KeyframeTrack: Invalid value size in track.`,this),e=!1);let n=this.times,r=this.values,i=n.length;i===0&&(console.error(`THREE.KeyframeTrack: Track is empty.`,this),e=!1);let a=null;for(let t=0;t!==i;t++){let r=n[t];if(typeof r==`number`&&isNaN(r)){console.error(`THREE.KeyframeTrack: Time is not a valid number.`,this,t,r),e=!1;break}if(a!==null&&a>r){console.error(`THREE.KeyframeTrack: Out of order keys.`,this,t,r,a),e=!1;break}a=r}if(r!==void 0&&eu(r))for(let t=0,n=r.length;t!==n;++t){let n=r[t];if(isNaN(n)){console.error(`THREE.KeyframeTrack: Value is not a valid number.`,this,t,n),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),r=this.getInterpolation()===ke,i=e.length-1,a=1;for(let o=1;o<i;++o){let i=!1,s=e[o];if(s!==e[o+1]&&(o!==1||s!==e[0])){if(r)i=!0;else{let e=o*n,r=e-n,a=e+n;for(let o=0;o!==n;++o){let n=t[e+o];if(n!==t[r+o]||n!==t[a+o]){i=!0;break}}}}if(i){if(o!==a){e[a]=e[o];let r=o*n,i=a*n;for(let e=0;e!==n;++e)t[i+e]=t[r+e]}++a}}if(i>0){e[a]=e[i];for(let e=i*n,r=a*n,o=0;o!==n;++o)t[r+o]=t[e+o];++a}return a===e.length?(this.times=e,this.values=t):(this.times=e.slice(0,a),this.values=t.slice(0,a*n)),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,r=new n(this.name,e,t);return r.createInterpolant=this.createInterpolant,r}};au.prototype.TimeBufferType=Float32Array,au.prototype.ValueBufferType=Float32Array,au.prototype.DefaultInterpolation=Oe;var ou=class extends au{constructor(e,t,n){super(e,t,n)}};ou.prototype.ValueTypeName=`bool`,ou.prototype.ValueBufferType=Array,ou.prototype.DefaultInterpolation=De,ou.prototype.InterpolantFactoryMethodLinear=void 0,ou.prototype.InterpolantFactoryMethodSmooth=void 0;var su=class extends au{};su.prototype.ValueTypeName=`color`;var cu=class extends au{};cu.prototype.ValueTypeName=`number`;var lu=class extends tu{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e,t,n,r){let i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,s=(n-t)/(r-t),c=e*o;for(let e=c+o;c!==e;c+=4)Kt.slerpFlat(i,0,a,c-o,a,c,s);return i}},uu=class extends au{InterpolantFactoryMethodLinear(e){return new lu(this.times,this.values,this.getValueSize(),e)}};uu.prototype.ValueTypeName=`quaternion`,uu.prototype.InterpolantFactoryMethodSmooth=void 0;var du=class extends au{constructor(e,t,n){super(e,t,n)}};du.prototype.ValueTypeName=`string`,du.prototype.ValueBufferType=Array,du.prototype.DefaultInterpolation=De,du.prototype.InterpolantFactoryMethodLinear=void 0,du.prototype.InterpolantFactoryMethodSmooth=void 0;var fu=class extends au{};fu.prototype.ValueTypeName=`vector`;var pu=class extends Yn{constructor(e,t=1){super(),this.isLight=!0,this.type=`Light`,this.color=new U(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}},mu=class extends pu{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type=`HemisphereLight`,this.position.copy(Yn.DEFAULT_UP),this.updateMatrix(),this.groundColor=new U(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}},hu=new H,gu=new V,_u=new V,vu=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new R(512,512),this.map=null,this.mapPass=null,this.matrix=new H,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new mi,this._frameExtents=new R(1,1),this._viewportCount=1,this._viewports=[new Vt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,n=this.matrix;gu.setFromMatrixPosition(e.matrixWorld),t.position.copy(gu),_u.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(_u),t.updateMatrixWorld(),hu.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(hu),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(hu)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},yu=new H,bu=new V,xu=new V,Su=class extends vu{constructor(){super(new ni(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new R(4,2),this._viewportCount=6,this._viewports=[new Vt(2,1,1,1),new Vt(0,1,1,1),new Vt(3,1,1,1),new Vt(1,1,1,1),new Vt(3,0,1,1),new Vt(1,0,1,1)],this._cubeDirections=[new V(1,0,0),new V(-1,0,0),new V(0,0,1),new V(0,0,-1),new V(0,1,0),new V(0,-1,0)],this._cubeUps=[new V(0,1,0),new V(0,1,0),new V(0,1,0),new V(0,1,0),new V(0,0,1),new V(0,0,-1)]}updateMatrices(e,t=0){let n=this.camera,r=this.matrix,i=e.distance||n.far;i!==n.far&&(n.far=i,n.updateProjectionMatrix()),bu.setFromMatrixPosition(e.matrixWorld),n.position.copy(bu),xu.copy(n.position),xu.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(xu),n.updateMatrixWorld(),r.makeTranslation(-bu.x,-bu.y,-bu.z),yu.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(yu)}},Cu=class extends pu{constructor(e,t,n=0,r=2){super(e,t),this.isPointLight=!0,this.type=`PointLight`,this.distance=n,this.decay=r,this.shadow=new Su}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}},wu=class extends vu{constructor(){super(new Oi(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Tu=class extends pu{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type=`DirectionalLight`,this.position.copy(Yn.DEFAULT_UP),this.updateMatrix(),this.target=new Yn,this.shadow=new wu}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}},Eu=class{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Du(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){let t=Du();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}};function Du(){return performance.now()}var Ou=`\\[\\]\\.:\\/`,ku=RegExp(`[\\[\\]\\.:\\/]`,`g`),Au=`[^\\[\\]\\.:\\/]`,ju=`[^`+Ou.replace(`\\.`,``)+`]`,Mu=`((?:WC+[\\/:])*)`.replace(`WC`,Au),Nu=`(WCOD+)?`.replace(`WCOD`,ju),Pu=`(?:\\.(WC+)(?:\\[(.+)\\])?)?`.replace(`WC`,Au),Fu=`\\.(WC+)(?:\\[(.+)\\])?`.replace(`WC`,Au),Iu=RegExp(`^`+Mu+Nu+Pu+Fu+`$`),Lu=[`material`,`materials`,`bones`,`map`],Ru=class{constructor(e,t,n){let r=n||zu.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,r)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,r=this._bindings[n];r!==void 0&&r.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let r=this._targetGroup.nCachedObjects_,i=n.length;r!==i;++r)n[r].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},zu=class e{constructor(t,n,r){this.path=n,this.parsedPath=r||e.parseTrackName(n),this.node=e.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,n,r){return t&&t.isAnimationObjectGroup?new e.Composite(t,n,r):new e(t,n,r)}static sanitizeNodeName(e){return e.replace(/\s/g,`_`).replace(ku,``)}static parseTrackName(e){let t=Iu.exec(e);if(t===null)throw Error(`PropertyBinding: Cannot parse trackName: `+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},r=n.nodeName&&n.nodeName.lastIndexOf(`.`);if(r!==void 0&&r!==-1){let e=n.nodeName.substring(r+1);Lu.indexOf(e)!==-1&&(n.nodeName=n.nodeName.substring(0,r),n.objectName=e)}if(n.propertyName===null||n.propertyName.length===0)throw Error(`PropertyBinding: can not parse propertyName from trackName: `+e);return n}static findNode(e,t){if(t===void 0||t===``||t===`.`||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(e){for(let r=0;r<e.length;r++){let i=e[r];if(i.name===t||i.uuid===t)return i;let a=n(i.children);if(a)return a}return null},r=n(e.children);if(r)return r}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)e[t++]=n[r]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)n[r]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)n[r]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)n[r]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let t=this.node,n=this.parsedPath,r=n.objectName,i=n.propertyName,a=n.propertyIndex;if(t||(t=e.findNode(this.rootNode,n.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.warn(`THREE.PropertyBinding: No target node found for track: `+this.path+`.`);return}if(r){let e=n.objectIndex;switch(r){case`materials`:if(!t.material){console.error(`THREE.PropertyBinding: Can not bind to material as node does not have a material.`,this);return}if(!t.material.materials){console.error(`THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.`,this);return}t=t.material.materials;break;case`bones`:if(!t.skeleton){console.error(`THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.`,this);return}t=t.skeleton.bones;for(let n=0;n<t.length;n++)if(t[n].name===e){e=n;break}break;case`map`:if(`map`in t){t=t.map;break}if(!t.material){console.error(`THREE.PropertyBinding: Can not bind to material as node does not have a material.`,this);return}if(!t.material.map){console.error(`THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.`,this);return}t=t.material.map;break;default:if(t[r]===void 0){console.error(`THREE.PropertyBinding: Can not bind to objectName of node undefined.`,this);return}t=t[r]}if(e!==void 0){if(t[e]===void 0){console.error(`THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.`,this,t);return}t=t[e]}}let o=t[i];if(o===void 0){let e=n.nodeName;console.error(`THREE.PropertyBinding: Trying to update property for track: `+e+`.`+i+` but it wasn't found.`,t);return}let s=this.Versioning.None;this.targetObject=t,t.needsUpdate===void 0?t.matrixWorldNeedsUpdate!==void 0&&(s=this.Versioning.MatrixWorldNeedsUpdate):s=this.Versioning.NeedsUpdate;let c=this.BindingType.Direct;if(a!==void 0){if(i===`morphTargetInfluences`){if(!t.geometry){console.error(`THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.`,this);return}if(!t.geometry.morphAttributes){console.error(`THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.`,this);return}t.morphTargetDictionary[a]!==void 0&&(a=t.morphTargetDictionary[a])}c=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=a}else o.fromArray!==void 0&&o.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(c=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=i;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][s]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};zu.Composite=Ru,zu.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3},zu.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2},zu.prototype.GetterByBindingType=[zu.prototype._getValue_direct,zu.prototype._getValue_array,zu.prototype._getValue_arrayElement,zu.prototype._getValue_toArray],zu.prototype.SetterByBindingTypeAndVersioning=[[zu.prototype._setValue_direct,zu.prototype._setValue_direct_setNeedsUpdate,zu.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[zu.prototype._setValue_array,zu.prototype._setValue_array_setNeedsUpdate,zu.prototype._setValue_array_setMatrixWorldNeedsUpdate],[zu.prototype._setValue_arrayElement,zu.prototype._setValue_arrayElement_setNeedsUpdate,zu.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[zu.prototype._setValue_fromArray,zu.prototype._setValue_fromArray_setNeedsUpdate,zu.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]],typeof __THREE_DEVTOOLS__<`u`&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent(`register`,{detail:{revision:`169`}})),typeof window<`u`&&(window.__THREE__?console.warn(`WARNING: Multiple instances of Three.js being imported.`):window.__THREE__=`169`);var Q={centerLat:34.398,centerLon:133.2,chunkSize:1e3,chunksX:10,chunksZ:6,cell:5,orthoPx:512,vegCell:10},Bu=Q.chunkSize*Q.chunksX,Vu=Q.chunkSize*Q.chunksZ,Hu=-Bu/2,Uu=-Vu/2,Wu=Bu/Q.cell+1,Gu=Vu/Q.cell+1,Ku=Bu/Q.vegCell+1,qu=Vu/Q.vegCell+1,Ju=6378137,Yu=Math.PI/180,Xu=111132.954-559.822*Math.cos(2*Q.centerLat*Yu),Zu=Math.PI/180*Ju*Math.cos(Q.centerLat*Yu);function Qu(e,t){return[(e-Q.centerLon)*Zu,-(t-Q.centerLat)*Xu]}function $u(e,t){return[Q.centerLon+e/Zu,Q.centerLat-t/Xu]}function ed(e){return!(e.heightMeters!==void 0&&(!Number.isFinite(e.heightMeters)||e.heightMeters<=0)||e.heightMeters!==void 0&&!e.heightEvidence||e.roofType!==void 0&&!e.roofEvidence||(e.useEvidence===`observed`||e.heightEvidence===`observed`||e.roofEvidence===`observed`)&&!e.source?.trim())}function td(e,t){if(!ed(t))throw Error(`Invalid building evidence`);return{...e,evidence:{...t}}}function nd(e,t,n=5){if(!Number.isFinite(n)||n<=0)throw Error(`Invalid evidence matching tolerance`);let r=e.map(e=>{let t=e.pts.length/2,n=0,r=0;for(let t=0;t<e.pts.length;t+=2)n+=e.pts[t],r+=e.pts[t+1];return t>=3?{x:n/t,z:r/t}:{x:NaN,z:NaN}}),i=new Set,a=0,o=0;for(let s of t){if(!Number.isFinite(s.x)||!Number.isFinite(s.z)||!ed(s.evidence)){o++;continue}let t=[];for(let e=0;e<r.length;e++){let i=Math.hypot(s.x-r[e].x,s.z-r[e].z);i<=n&&t.push({index:e,distance:i})}if(t.sort((e,t)=>e.distance-t.distance),t.length!==1||i.has(t[0].index)){o++;continue}let c=t[0].index;e[c]=td(e[c],s.evidence),i.add(c),a++}return{matched:a,skipped:o}}function rd(e){return Array.isArray(e)?e.filter(e=>{if(typeof e!=`object`||!e)return!1;let t=e;if(typeof t.x!=`number`||!Number.isFinite(t.x)||typeof t.z!=`number`||!Number.isFinite(t.z)||t.evidence===null||typeof t.evidence!=`object`||Array.isArray(t.evidence))return!1;let n=t.evidence,r=[`residential`,`commercial`,`industrial`,`religious`,`public`,`unknown`],i=[`observed`,`inferred`,`artistic`];return!r.includes(String(n.use))||!i.includes(String(n.useEvidence))||n.heightEvidence!==void 0&&!i.includes(String(n.heightEvidence))||n.roofEvidence!==void 0&&!i.includes(String(n.roofEvidence))||n.roofType!==void 0&&![`flat`,`gable`,`hip`,`shed`,`other`].includes(String(n.roofType))||n.heightMeters!==void 0&&typeof n.heightMeters!=`number`||n.source!==void 0&&typeof n.source!=`string`||n.observedAt!==void 0&&typeof n.observedAt!=`string`?!1:ed(n)}):[]}function id(e){if(!e||typeof e!=`object`)return[];let t=e;if(t.type!==`FeatureCollection`||!Array.isArray(t.features))return[];let n=[];for(let e of t.features){if(!e||typeof e!=`object`)continue;let t=e,r=t.geometry,i=t.properties;if(r?.type!==`Point`||!Array.isArray(r.coordinates)||!i)continue;let[a,o]=r.coordinates;if(typeof a!=`number`||typeof o!=`number`||!Number.isFinite(a)||!Number.isFinite(o)||Math.abs(a)>180||Math.abs(o)>90)continue;let[s,c]=Qu(a,o);Math.abs(s)>Bu/2||Math.abs(c)>Vu/2||n.push({x:s,z:c,evidence:i.evidence})}return rd(n)}var ad=Q.cell/2,od=class{data;constructor(e){if(this.data=new Int16Array(e),this.data.length!==Wu*Gu)throw Error(`terrain.bin のサイズが不正です`)}at(e,t){return e=e<0?0:e>=Wu?Wu-1:e,t=t<0?0:t>=Gu?Gu-1:t,this.data[t*Wu+e]*.1}sub(e,t){let n=e>>1,r=t>>1,i=e&1,a=t&1;if(n<1||r<1||n>Wu-3||r>Gu-3)return i?a?sd(this.midX(n,r-1),this.midX(n,r),this.midX(n,r+1),this.midX(n,r+2),.3):this.midX(n,r):a?this.midZ(n,r):this.at(n,r);let o=this.data,s=r*Wu+n;if(!i)return a?sd(o[s-Wu],o[s],o[s+Wu],o[s+2*Wu])*.1:o[s]*.1;if(!a)return sd(o[s-1],o[s],o[s+1],o[s+2])*.1;let c=e=>sd(o[e-1],o[e],o[e+1],o[e+2]);return sd(c(s-Wu),c(s),c(s+Wu),c(s+2*Wu))*.1}midX(e,t){return sd(this.at(e-1,t),this.at(e,t),this.at(e+1,t),this.at(e+2,t),.3)}midZ(e,t){return sd(this.at(e,t-1),this.at(e,t),this.at(e,t+1),this.at(e,t+2),.3)}height(e,t){let n=(e-Hu)/ad,r=(t-Uu)/ad,i=Math.floor(n),a=Math.floor(r),o=n-i,s=r-a,c=this.sub(i,a),l=this.sub(i+1,a+1);if(o>=s){let e=this.sub(i+1,a);return c+(e-c)*o+(l-e)*s}let u=this.sub(i,a+1);return c+(l-u)*o+(u-c)*s}slope(e,t){let n=Q.cell;return[(this.height(e+n,t)-this.height(e-n,t))/(2*n),(this.height(e,t+n)-this.height(e,t-n))/(2*n)]}};function sd(e,t,n,r,i=3){let a=(9*(t+n)-e-r)/16,o=(t<n?t:n)-i,s=(t>n?t:n)+i;return a<o?o:a>s?s:a}function cd(e){let t=new DataView(e),n=t.getUint32(0,!0),r=4,i={buildings:[],roads:[],rails:[]};for(let e=0;e<n;e++){let e=t.getUint8(r),n=t.getUint16(r+1,!0),a=t.getUint8(r+3),o=t.getUint8(r+4),s=t.getUint16(r+5,!0);r+=7;let c=new Float32Array(s*2);for(let e=0;e<s*2;e++)c[e]=t.getInt16(r,!0)/4,r+=2;e===1?i.buildings.push({code:n,lv:a,pts:c}):e===2?i.roads.push({code:n,width:a,ctg:o,pts:c}):e===3&&i.rails.push({code:n,pts:c})}return i}function ld(e){if(e.code===2721||e.code===2731)return 1.6;switch(e.width){case 0:return 2.6;case 1:return 4.5;case 2:return 8;case 3:return 14;case 4:return 21;default:return 3}}var ud=e=>e.code===2804;function dd(e,t){let n=Math.imul(Math.round(e*4)|0,374761393)^Math.imul(Math.round(t*4)|0,668265263);return n=Math.imul(n^n>>>13,1274126177),((n^n>>>16)>>>0)/4294967296}function fd(e,t){return e.filter(e=>{let n=e.pts,r=0,i=0;for(let e=0;e<n.length;e+=2)r+=n[e],i+=n[e+1];return r/=n.length/2,i/=n.length/2,!t.some(([e,t,n])=>Math.hypot(r-e,i-t)<n)})}var pd=.07,md=.4;function hd(e,t,n=4,r=.12,i=!1){let a=[],o=[],s=e.length/2;for(let t=0;t<s-1;t++){let r=e[t*2],i=e[t*2+1],s=e[t*2+2],c=e[t*2+3],l=Math.hypot(s-r,c-i),u=Math.max(1,Math.ceil(l/n));for(let e=0;e<u;e++)a.push(r+(s-r)*e/u),o.push(i+(c-i)*e/u)}a.push(e[(s-1)*2]),o.push(e[(s-1)*2+1]);let c=a.length,l=new Float32Array(c),u=new Float32Array(c);for(let e=0;e<c;e++)l[e]=t.height(a[e],o[e]),e>0&&(u[e]=u[e-1]+Math.hypot(a[e]-a[e-1],o[e]-o[e-1]));let d=new Float32Array(c);for(let e=0;e<c;e++)d[e]=Math.max(l[e],md)+r;if(i&&c>1){let e=d[0],t=d[c-1],n=u[c-1]||1;for(let r=0;r<c;r++)d[r]=Math.max(d[r],e+(t-e)*u[r]/n)}for(let e=0;e<c;e++){if(l[e]>=md)continue;let t=e;for(;t+1<c&&l[t+1]<md;)t++;let i=u[t]-u[e]+n,a=e>0?l[e-1]:md,o=t+1<c?l[t+1]:md,s=Math.max(Math.min(.12*i,40),a,o,1.2),f=(u[e]+u[t])/2;for(let n=0;n<c;n++){let a=n>=e&&n<=t?0:Math.min(Math.abs(u[n]-u[e]),Math.abs(u[n]-u[t])),o=n>=e&&n<=t?.04*i*(1-((u[n]-f)/(i/2+.001))**2):0,c=s+Math.min(o,6)-pd*a+r;c>d[n]&&(d[n]=c)}e=t}let f=new Uint8Array(c);for(let e=0;e<c;e++)f[e]=+(d[e]-l[e]>1.5);return{x:Float32Array.from(a),z:Float32Array.from(o),y:d,g:l,bridge:f}}var gd=Math.ceil(Bu/500),_d=Math.ceil(Vu/500),vd=e=>[(e>>16&255)/255,(e>>8&255)/255,(e&255)/255].map(e=>e**2.2);[13880510,13090217,12168858,14473165,8810588,6968388,11246208,13353647].map(vd),[12236978,11250083,13157305,10528169,12103842,9606810,13289408].map(vd),[4672597,4080460,5593958,6121074,7031868,5200486].map(vd),[10132118,9145480,11052187,8227462].map(vd),[9411235,10462880,8359037,12039080].map(vd),vd(14079437),vd(8358800),vd(9209210),vd(9407621),vd(10129280),vd(4210492),vd(6052695),vd(10326655),vd(11116684),vd(11973806),vd(14210768),vd(7300699),vd(9277331),vd(15265007),vd(15329764),vd(10262671),vd(11841961),vd(9077364);var yd=2*Q.chunkSize/Q.cell;function bd(e,t,n,r,i=0,a=0,o=1){let s=yd/o,c=s/r,l=(c+1)*(c+1),u=4*(c+1),d=new Float32Array((l+u)*3),f=new Float32Array((l+u)*3),p=new Float32Array((l+u)*2),m=t*yd+i*s,h=n*yd+a*s,g=ad,_=(i,a,o,s)=>{let c=m+a*r,l=h+o*r;d[i*3]=Hu+c*g,d[i*3+1]=e.sub(c,l)+s,d[i*3+2]=Uu+l*g;let u=r,_=e.sub(c+u,l)-e.sub(c-u,l),v=e.sub(c,l+u)-e.sub(c,l-u),y=2*u*g,b=Math.hypot(_,y,v);f[i*3]=-_/b,f[i*3+1]=y/b,f[i*3+2]=-v/b,p[i*2]=(c-t*yd)/yd,p[i*2+1]=1-(l-n*yd)/yd};for(let e=0;e<=c;e++)for(let t=0;t<=c;t++)_(e*(c+1)+t,t,e,0);let v=new Uint32Array(c*c*6+4*c*6),y=0;for(let e=0;e<c;e++)for(let t=0;t<c;t++){let n=e*(c+1)+t,r=n+1,i=n+c+1,a=i+1;v[y++]=n,v[y++]=a,v[y++]=r,v[y++]=n,v[y++]=i,v[y++]=a}let b=l,x=[Array.from({length:c+1},(e,t)=>[t,0]),Array.from({length:c+1},(e,t)=>[c,t]),Array.from({length:c+1},(e,t)=>[c-t,c]),Array.from({length:c+1},(e,t)=>[0,c-t])];for(let e of x){let t=b;for(let[t,n]of e)_(b++,t,n,-12);for(let n=0;n<c;n++){let r=e[n][1]*(c+1)+e[n][0],i=e[n+1][1]*(c+1)+e[n+1][0];v[y++]=r,v[y++]=t+n,v[y++]=i,v[y++]=i,v[y++]=t+n,v[y++]=t+n+1}}let S=new Ar;return S.setAttribute(`position`,new br(d,3)),S.setAttribute(`normal`,new br(f,3)),S.setAttribute(`uv`,new br(p,2)),S.setIndex(new br(l+u>65535?v:Uint16Array.from(v),1)),S.computeBoundingSphere(),S}function xd(e){let t=new Z({map:e,roughness:.96,metalness:0,envMapIntensity:.6});return t.onBeforeCompile=e=>{e.vertexShader=e.vertexShader.replace(`#include <common>`,`#include <common>
varying vec3 vWPos;`).replace(`#include <worldpos_vertex>`,`#include <worldpos_vertex>
vWPos = (modelMatrix * vec4(transformed, 1.0)).xyz;`),e.fragmentShader=e.fragmentShader.replace(`#include <common>`,`#include <common>
varying vec3 vWPos;
float tHash(vec2 p) { return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453); }
float tNoise(vec2 p) {
  vec2 i = floor(p), f = fract(p);
  f = f * f * (3.0 - 2.0 * f);
  return mix(mix(tHash(i), tHash(i + vec2(1, 0)), f.x), mix(tHash(i + vec2(0, 1)), tHash(i + vec2(1, 1)), f.x), f.y);
}`).replace(`#include <map_fragment>`,`#include <map_fragment>
// Overlay fine detail noise on the aerial photo to soften close-range blur
float dn = tNoise(vWPos.xz * 0.7) * 0.5 + tNoise(vWPos.xz * 2.9) * 0.3 + tNoise(vWPos.xz * 0.11) * 0.2;
diffuseColor.rgb *= 0.86 + dn * 0.28;
{
  // Close up, a 1 m/px photo is only blur: keep its average colour (a blurrier mip) and draw
  // the surface itself - grass where the photo is green, aggregate and stains where it is paved
  float camDist = length(vWPos - cameraPosition);
  // Only for a viewer near the ground; from the air the photo itself carries the detail
  float near = (1.0 - smoothstep(40.0, 260.0, camDist)) * (1.0 - smoothstep(12.0, 45.0, cameraPosition.y - vWPos.y));
  if (near > 0.0) {
    vec3 avg = textureLod(map, vMapUv, 5.0).rgb;
    // Lift the blue-grey of shadows baked into the photo (the renderer casts its own)
    float lum = dot(avg, vec3(0.3, 0.55, 0.15));
    avg = mix(avg, vec3(lum) * vec3(1.04, 1.0, 0.94), 0.35) * mix(1.25, 1.0, smoothstep(0.05, 0.2, lum));
    vec2 p = vWPos.xz;
    float green = avg.g - max(avg.r, avg.b);
    float grass = smoothstep(-0.005, 0.03, green) * smoothstep(0.4, 1.5, vWPos.y);
    float fine = 1.0 - smoothstep(0.2, 0.7, max(fwidth(p.x), fwidth(p.y)) * 30.0);
    // Grass: tufts and blades, patches of lighter and drier growth
    float tuft = tNoise(p * 1.7) * 0.6 + tNoise(p * 7.0) * 0.4;
    float blade = tHash(floor(p * 40.0));
    vec3 grassCol = avg * vec3(0.92, 1.05, 0.85) * (0.7 + 0.45 * tuft + fine * 0.18 * (blade - 0.5));
    grassCol = mix(grassCol, grassCol * vec3(1.18, 1.08, 0.8), smoothstep(0.55, 0.8, tNoise(p * 0.35)) * 0.6);
    // Paved ground and gravel: aggregate speckle, darker stains, faint wear
    float speck = tHash(floor(p * 28.0));
    float stain = smoothstep(0.45, 0.85, tNoise(p * 0.45) * 0.7 + tNoise(p * 2.3) * 0.3);
    vec3 pavedCol = avg * (0.94 + fine * 0.14 * (speck - 0.5)) * (1.0 - 0.18 * stain);
    vec3 ground = mix(pavedCol, grassCol, grass);
    diffuseColor.rgb = mix(diffuseColor.rgb, ground, near * 0.9);
  }
}
diffuseColor.rgb = mix(diffuseColor.rgb, diffuseColor.rgb * vec3(1.05, 1.03, 0.95), 0.5);
{
  // Steep ground that the photo does not show as vegetation is bare rock: weathered granite with
  // faint strata, darker in the cracks (Senkoji-yama's outcrops and the cuttings behind houses)
  vec3 gn = normalize(cross(dFdx(vWPos), dFdy(vWPos)));
  float steep = smoothstep(0.55, 0.8, 1.0 - abs(gn.y));
  float green = diffuseColor.g - max(diffuseColor.r, diffuseColor.b);
  float rock = steep * (1.0 - smoothstep(0.0, 0.04, green)) * smoothstep(2.0, 6.0, vWPos.y);
  if (rock > 0.01) {
    float strata = tNoise(vec2(vWPos.x * 0.6 + vWPos.z * 0.4, vWPos.y * 2.5)) * 0.6 + tNoise(vWPos.xz * 3.0 + vWPos.y) * 0.4;
    float crack = smoothstep(0.62, 0.72, tNoise(vec2(vWPos.x * 1.7, vWPos.y * 1.1 + vWPos.z * 0.7)));
    vec3 rockCol = mix(vec3(0.46, 0.43, 0.39), vec3(0.62, 0.58, 0.52), strata) * (1.0 - 0.35 * crack);
    diffuseColor.rgb = mix(diffuseColor.rgb, rockCol * (0.8 + 0.4 * dot(diffuseColor.rgb, vec3(0.33))), rock * 0.85);
  }
}
// Brighten beaches and the seabed slightly
float shore = smoothstep(1.5, -0.5, vWPos.y);
diffuseColor.rgb = mix(diffuseColor.rgb, diffuseColor.rgb * vec3(1.15, 1.1, 0.95), shore * 0.5);`).replace(`#include <normal_fragment_maps>`,`#include <normal_fragment_maps>
{
  // Fine surface relief (shows shading under low sun)
  vec2 q = vWPos.xz * 0.8;
  float e = 0.2;
  float n0 = tNoise(q) + 0.5 * tNoise(q * 3.1);
  vec2 grad = vec2(tNoise(q + vec2(e, 0.0)) + 0.5 * tNoise((q + vec2(e, 0.0)) * 3.1) - n0,
                   tNoise(q + vec2(0.0, e)) + 0.5 * tNoise((q + vec2(0.0, e)) * 3.1) - n0) / e;
  normal = normalize(normal + (viewMatrix * vec4(-grad.x * 0.18, 0.0, -grad.y * 0.18, 0.0)).xyz);
}`)},t}var Sd=class{hm;group=new Y;lods=[];chunks=[];fineRange=0;constructor(e,t,n){this.hm=e;for(let n=0;n<Q.chunksZ;n++)for(let r=0;r<Q.chunksX;r++){let i=xd(t[n][r]),a=new Ys;for(let[t,o]of[[2,0],[4,1100],[10,2600]]){let s=new G(bd(e,r,n,t),i);s.receiveShadow=!0,s.matrixAutoUpdate=!1,a.addLevel(s,o)}a.position.set(Hu+(r+.5)*Q.chunkSize,0,Uu+(n+.5)*Q.chunkSize);for(let e of a.levels)e.object.position.set(-a.position.x,0,-a.position.z);for(let e of a.levels)e.object.updateMatrix();a.updateMatrix(),a.matrixAutoUpdate=!1,this.lods.push(a),this.group.add(a),this.chunks.push({cx:r,cz:n,lod:a,mat:i,tiles:null,meshes:Array(16).fill(null),fine:Array(16).fill(!1)})}this.setQuality(n)}setQuality(e){for(let t of this.lods)t.levels[1].distance=1100*e,t.levels[2].distance=2600*e;this.fineRange=e>=1?420:e>=.8?300:160}update(e,t,n){let r=Math.max(0,t-this.hm.height(e,n)),i=Q.chunkSize/4,a=2;for(let t of this.chunks){let o=Hu+t.cx*Q.chunkSize,s=Uu+t.cz*Q.chunkSize,c=Math.hypot(Cd(e,n,o,s,Q.chunkSize),r);if(!(!t.tiles&&c>this.fineRange)){if(c>this.fineRange+200)this.release(t);else{t.tiles||(t.tiles=new Y,this.group.add(t.tiles));for(let c=0;c<16;c++){let l=c%4,u=Math.floor(c/4),d=Math.hypot(Cd(e,n,o+l*i,s+u*i,i),r)<this.fineRange+(t.fine[c]?120:0);t.meshes[c]&&t.fine[c]===d||(d&&a--<=0?t.meshes[c]||this.setTile(t,c,!1):this.setTile(t,c,d))}t.lod.visible=!1,t.tiles.visible=!0}}}}setTile(e,t,n){let r=new G(bd(this.hm,e.cx,e.cz,n?1:2,t%4,Math.floor(t/4),4),e.mat);r.receiveShadow=!0,r.matrixAutoUpdate=!1,r.updateMatrix();let i=e.meshes[t];i&&(e.tiles.remove(i),i.geometry.dispose()),e.tiles.add(r),e.meshes[t]=r,e.fine[t]=n}release(e){if(e.tiles){for(let t of e.meshes)t?.geometry.dispose();e.tiles&&this.group.remove(e.tiles),e.tiles=null,e.meshes.fill(null),e.fine.fill(!1),e.lod.visible=!0}}};function Cd(e,t,n,r,i){let a=Math.max(n-e,0,e-n-i),o=Math.max(r-t,0,t-r-i);return Math.hypot(a,o)}var wd=`
float wHash(vec3 p) {
  p = fract(p * vec3(0.1031, 0.1030, 0.0973));
  p += dot(p, p.yxz + 33.33);
  return fract((p.x + p.y) * p.z);
}
float vNoise(vec2 p) {
  vec2 i = floor(p), f = fract(p);
  f = f * f * (3.0 - 2.0 * f);
  return mix(mix(wHash(vec3(i, 1.0)), wHash(vec3(i + vec2(1, 0), 1.0)), f.x), mix(wHash(vec3(i + vec2(0, 1), 1.0)), wHash(vec3(i + vec2(1, 1), 1.0)), f.x), f.y);
}`;function Td(e){let t=new Z({vertexColors:!0,roughness:.82,metalness:0,envMapIntensity:.9});return t.onBeforeCompile=t=>{t.uniforms.uNight=e.uNight,t.vertexShader=t.vertexShader.replace(`#include <common>`,`#include <common>
attribute float aBase;
varying float vBase;
varying vec3 vWPos;
varying vec3 vWNormal;
varying float vInfo;`).replace(`#include <color_vertex>`,`#include <color_vertex>
vInfo = color.a;
vBase = aBase;`).replace(`#include <worldpos_vertex>`,`#include <worldpos_vertex>
vWPos = (modelMatrix * vec4(transformed, 1.0)).xyz;
vWNormal = normalize(mat3(modelMatrix) * objectNormal);`),t.fragmentShader=t.fragmentShader.replace(`#include <common>`,`#include <common>
uniform float uNight;
varying vec3 vWPos;
varying vec3 vWNormal;
varying float vInfo;
varying float vBase;
${wd}`).replace(`#include <emissivemap_fragment>`,`#include <emissivemap_fragment>
{
  // Round to integers so interpolation error isn't amplified by the hash
  float info = floor(vInfo * 255.0 + 0.5);
  float kind = floor(info / 64.0);
  float seed = (info - kind * 64.0) / 64.0;
  vec3 wn = normalize(vWNormal);
  vec3 bump = vec3(0.0);
  if (abs(wn.y) < 0.4) {
    vec2 t = normalize(vec2(-wn.z, wn.x));
    vec3 tangent = vec3(t.x, 0.0, t.y);
    float u = dot(vWPos.xz, t);
    float h = vWPos.y - vBase;
    // Uneven dirt and weathering (rain streaks run vertically)
    float grime = wHash(vec3(floor(u * 1.7), floor(vWPos.y * 0.25), 3.0)) * 0.5 + wHash(vec3(floor(u * 0.4), floor(vWPos.y * 0.9), 5.0)) * 0.5;
    diffuseColor.rgb *= 0.9 + 0.12 * grime;
    if (kind > 2.5) {
      // Stone walls: staggered masonry and joints
      float rowH = 0.42;
      float row = floor(h / rowH);
      float off = wHash(vec3(row, seed, 1.0)) * 0.8;
      float bw = 0.5 + 0.4 * wHash(vec3(row, floor((u + off) / 0.7), 2.0));
      float bx = (u + off) / bw;
      vec2 f = vec2(fract(bx), fract(h / rowH));
      float edge = min(min(f.x, 1.0 - f.x) * bw, min(f.y, 1.0 - f.y) * rowH);
      float mortar = (1.0 - smoothstep(0.012, 0.04, edge)) * (1.0 - smoothstep(0.15, 0.4, fwidth(h / rowH)));
      diffuseColor.rgb *= (0.78 + 0.34 * wHash(vec3(floor(bx), row, 3.0))) * (1.0 - 0.5 * mortar);
      bump += tangent * (f.x - 0.5) * 0.5 + vec3(0.0, f.y - 0.5, 0.0) * 0.5;
      roughnessFactor = 0.95;
    } else if (kind > 0.5) {
      bool concrete = kind > 1.5;
      float lum = dot(diffuseColor.rgb, vec3(0.3, 0.59, 0.11));
      bool wood = !concrete && lum < 0.18;
      if (wood) {
        // Charred cedar / board siding
        float board = fract(u / 0.21);
        float bf = 1.0 - smoothstep(0.2, 0.5, fwidth(u / 0.21));
        float e = smoothstep(0.0, 0.07, board) * smoothstep(1.0, 0.93, board);
        diffuseColor.rgb *= (1.0 - bf * 0.35 * (1.0 - e)) * (0.9 + 0.2 * wHash(vec3(floor(u / 0.21), floor(h * 2.0), 4.0)));
        bump += bf * tangent * (board - 0.5) * 0.5;
        roughnessFactor = 0.9;
      } else if (concrete) {
        // Concrete construction joints
        float jv = fract(u / 1.8), jh = fract(h / 3.2);
        float joint = max(1.0 - smoothstep(0.0, 0.02, min(jv, 1.0 - jv) * 1.8), 1.0 - smoothstep(0.0, 0.03, min(jh, 1.0 - jh) * 3.2));
        diffuseColor.rgb *= 1.0 - 0.2 * joint;
        roughnessFactor = 0.85;
      } else if (wHash(vec3(seed, 41.0, 2.0)) < 0.4) {
        // Ceramic siding: horizontal grooves and vertical panel joints
        float sfade = 1.0 - smoothstep(0.2, 0.6, fwidth(h / 0.36));
        float g = fract(h / 0.36);
        float groove = 1.0 - smoothstep(0.0, 0.07, min(g, 1.0 - g));
        float pj = fract(u / 3.03);
        float joint = 1.0 - smoothstep(0.0, 0.01, min(pj, 1.0 - pj) * 3.03);
        diffuseColor.rgb *= (1.0 - 0.2 * groove * sfade) * (1.0 - 0.15 * joint * sfade) * (0.97 + 0.05 * vNoise(vec2(u, h) * 4.0));
        bump += vec3(0.0, g - 0.5, 0.0) * 0.5 * sfade;
        roughnessFactor = 0.75;
      } else {
        // Plaster / mortar roughness
        diffuseColor.rgb *= 0.95 + 0.07 * vNoise(vec2(u, h) * 9.0);
      }
      float sp = concrete ? 2.6 : 3.4;
      float fh = concrete ? 3.2 : 2.9;
      vec2 cellId = vec2(floor(u / sp), floor(h / fh));
      vec2 f = vec2(fract(u / sp), fract(h / fh));
      float ww = concrete ? 0.62 : 0.42;
      float x0 = 0.5 - ww * 0.5, x1 = 0.5 + ww * 0.5;
      float y0 = concrete ? 0.3 : 0.32, y1 = concrete ? 0.82 : 0.72;
      float present = step(concrete ? 0.05 : 0.35, wHash(vec3(cellId, seed)));
      float inWin = step(x0, f.x) * step(f.x, x1) * step(y0, f.y) * step(f.y, y1) * present;
      float frame = step(x0 - 0.035, f.x) * step(f.x, x1 + 0.035) * step(y0 - 0.03, f.y) * step(f.y, y1 + 0.03) * present * (1.0 - inWin);
      // Ground floor: front doors for houses, glass shop doors or shutters for office buildings
      float door = 0.0;
      float dsel = wHash(vec3(cellId.x, seed, 8.0));
      if (cellId.y < 0.5) {
        if (concrete && dsel < 0.45) door = step(0.06, f.x) * step(f.x, 0.94) * step(f.y, 0.78);
        else if (!concrete && dsel < 0.22) door = step(0.3, f.x) * step(f.x, 0.62) * step(f.y, 0.7);
        inWin *= 1.0 - door;
        frame *= 1.0 - door;
      }
      if (concrete) diffuseColor.rgb *= 1.0 - 0.12 * step(x0, f.x) * step(f.x, x1) * step(f.y, y0) * (f.y / y0) * present;
      {
        // Weathering: rain streaks running down the wall, heavier below window sills, varying with
        // the building's age. Faded out when the streaks get thinner than a pixel.
        float age = 0.3 + 0.9 * wHash(vec3(seed, 21.0, 1.0));
        float sfade = 1.0 - smoothstep(0.25, 0.7, fwidth(u) * 4.0);
        float streak = smoothstep(0.55, 0.9, vNoise(vec2(u * 3.1 + seed * 7.0, h * 0.11))) * 0.6
                     + smoothstep(0.6, 0.95, vNoise(vec2(u * 8.7, h * 0.27 + seed))) * 0.4;
        float sill = step(x0 + 0.02, f.x) * step(f.x, x1 - 0.02) * step(f.y, y0) * present
                   * smoothstep(0.0, y0, f.y) * (0.5 + 0.5 * vNoise(vec2(f.x * sp * 9.0, h * 0.6)));
        float stain = (streak * 0.6 + sill) * (1.0 - inWin) * (1.0 - frame) * (1.0 - door);
        diffuseColor.rgb *= 1.0 - stain * sfade * age * (concrete ? 0.2 : 0.13) * vec3(1.0, 1.02, 1.06);
      }
      vec3 frameCol = concrete ? vec3(0.5, 0.52, 0.53) : (wood ? vec3(0.06, 0.05, 0.04) : vec3(0.3, 0.28, 0.25));
      diffuseColor.rgb = mix(diffuseColor.rgb, frameCol, frame);
      // Glass: dark and smooth, reflecting the sky and town. Behind it, curtains or blinds in
      // some windows, and the recess shading the top and one side of the pane
      vec3 glass = vec3(0.035, 0.045, 0.055) * (0.7 + 0.7 * wHash(vec3(cellId, 11.0)));
      {
        float fx = (f.x - x0) / (x1 - x0), fy = (f.y - y0) / (y1 - y0);
        float ifade = 1.0 - smoothstep(0.02, 0.06, fwidth(fx));
        float pick = wHash(vec3(cellId, seed * 3.0 + 17.0));
        float cover = 0.0;
        vec3 inner = vec3(0.0);
        if (pick < 0.45) {
          // Curtains drawn in from both sides, with folds
          float open = 0.15 + 0.55 * wHash(vec3(cellId, seed + 23.0));
          cover = step(open, abs(fx - 0.5) * 2.0);
          inner = mix(vec3(0.74, 0.7, 0.62), vec3(0.55, 0.6, 0.62), step(0.6, wHash(vec3(cellId, 29.0))));
          inner *= 1.0 - 0.15 * ifade * (0.5 + 0.5 * sin(fx * 70.0));
        } else if (pick < 0.65) {
          // Blinds lowered part of the way
          cover = step(1.0 - fy, 0.3 + 0.7 * wHash(vec3(cellId, 31.0)));
          inner = vec3(0.7, 0.69, 0.66) * (1.0 - 0.15 * ifade * step(0.5, fract(fy * 22.0)));
        }
        glass = mix(glass, inner * 0.5, cover * 0.85);
        float recess = smoothstep(0.0, 0.14, 1.0 - fy) * smoothstep(0.0, 0.06, fx);
        glass *= 0.55 + 0.45 * recess;
      }
      // Sills catch the light
      diffuseColor.rgb *= 1.0 + 0.3 * frame * step(f.y, y0);
      diffuseColor.rgb = mix(diffuseColor.rgb, glass, inWin);
      roughnessFactor = mix(roughnessFactor, 0.04, inWin);
      float mull = inWin * (1.0 - smoothstep(0.0, 0.025, abs(f.x - 0.5) * sp));
      diffuseColor.rgb = mix(diffuseColor.rgb, frameCol, mull);
      if (door > 0.5) {
        if (concrete) {
          if (wHash(vec3(cellId.x, seed, 9.0)) < 0.5) {
            float rib = fract(h / 0.09);
            diffuseColor.rgb = vec3(0.42, 0.43, 0.44) * (0.82 + 0.18 * smoothstep(0.0, 0.5, rib));
            bump += vec3(0.0, rib - 0.5, 0.0) * 0.8;
            roughnessFactor = 0.45;
            metalnessFactor = 0.5;
          } else {
            diffuseColor.rgb = vec3(0.04, 0.05, 0.06);
            roughnessFactor = 0.05;
          }
        } else {
          diffuseColor.rgb = wood ? vec3(0.09, 0.065, 0.045) : vec3(0.16, 0.12, 0.085);
          float lattice = step(0.8, fract(f.x * sp / 0.12)) + step(0.85, fract(h / 0.15));
          diffuseColor.rgb *= 1.0 - 0.25 * min(lattice, 1.0);
          roughnessFactor = 0.7;
        }
      }
      float lit = step(concrete ? 0.62 : 0.72, wHash(vec3(cellId + 3.1, seed * 9.0)));
      vec3 warm = mix(vec3(1.0, 0.62, 0.28), vec3(0.75, 0.85, 1.0), step(0.85, wHash(vec3(cellId, 7.0))));
      totalEmissiveRadiance += warm * (inWin * lit + door * (concrete ? 0.5 : 0.15) * step(0.4, dsel + lit)) * uNight * 1.15;
    }
  } else if (wn.y < 0.97 && wn.y > 0.3) {
    // Tiled roof: rows of pan tiles with alternating troughs and ridges
    vec2 sd = normalize(wn.xz);
    vec2 along = vec2(-sd.y, sd.x);
    float ch = dot(vWPos.xz, along) / 0.3;
    float us = dot(vWPos.xz, sd) / 0.25;
    float row = fract(us);
    float wave = sin(ch * 6.2831853);
    // Fade the pattern by tiles per pixel so stripes don't flicker in the distance
    float fade = 1.0 - smoothstep(0.25, 0.6, max(fwidth(ch), fwidth(us)));
    // Strongly coloured roofs in the aerial photo (blue, green, red-brown) are painted metal
    float sat = max(diffuseColor.r, max(diffuseColor.g, diffuseColor.b)) - min(diffuseColor.r, min(diffuseColor.g, diffuseColor.b));
    if (sat > 0.05) {
      // Standing-seam metal: raised seams running down the slope every 45cm
      float sc = dot(vWPos.xz, along) / 0.45;
      float s = fract(sc);
      float sfade = 1.0 - smoothstep(0.25, 0.6, fwidth(sc));
      float seam = 1.0 - smoothstep(0.0, 0.07, min(s, 1.0 - s));
      diffuseColor.rgb *= (1.0 + 0.2 * seam * sfade) * (0.95 + 0.08 * vNoise(vWPos.xz * vec2(0.3, 0.3)));
      // Flat panels; only the narrow seams stand up
      bump += vec3(along.x, 0.0, along.y) * seam * sign(0.5 - s) * 0.5 * sfade;
      roughnessFactor = 0.42;
      metalnessFactor = 0.3;
    } else {
      diffuseColor.rgb *= 1.0 - fade * (0.14 - 0.1 * wave - 0.1 * smoothstep(0.75, 1.0, row) + 0.18 * (1.0 - smoothstep(0.0, 0.12, row)));
      diffuseColor.rgb *= 0.93 + 0.14 * wHash(vec3(floor(ch), floor(us), 12.0));
      bump += fade * (vec3(along.x, 0.0, along.y) * cos(ch * 6.2831853) * 0.45 + vec3(sd.x, 0.0, sd.y) * (row - 0.5) * 0.4);
      roughnessFactor = 0.5;
    }
  } else if (wn.y >= 0.97) {
    // Flat roof: uneven waterproof membrane and drainage stains
    diffuseColor.rgb *= 0.9 + 0.12 * vNoise(vWPos.xz * 0.8) + 0.04 * wHash(vec3(floor(vWPos.xz * 3.0), 13.0));
    roughnessFactor = 0.9;
  }
  if (dot(bump, bump) > 0.0) normal = normalize(normal + (viewMatrix * vec4(bump, 0.0)).xyz);
}`)},t}function Ed(){let e=new Z({vertexColors:!0,roughness:.92,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-4});return e.onBeforeCompile=e=>{e.vertexShader=e.vertexShader.replace(`#include <common>`,`#include <common>
varying vec3 vWPos;
varying float vInfo;`).replace(`#include <color_vertex>`,`#include <color_vertex>
vInfo = color.a;`).replace(`#include <worldpos_vertex>`,`#include <worldpos_vertex>
vWPos = (modelMatrix * vec4(transformed, 1.0)).xyz;`),e.fragmentShader=e.fragmentShader.replace(`#include <common>`,`#include <common>
varying vec3 vWPos;
varying float vInfo;
${wd}`).replace(`#include <emissivemap_fragment>`,`#include <emissivemap_fragment>
{
  float kind = floor(floor(vInfo * 255.0 + 0.5) / 64.0);
  vec2 p = vWPos.xz;
  if (kind > 0.5 && kind < 1.5) {
    // Asphalt: fine aggregate grain and patchy repair marks
    float gf = 1.0 - smoothstep(0.3, 0.8, max(fwidth(p.x), fwidth(p.y)) * 18.0);
    diffuseColor.rgb *= 0.92 + gf * (0.13 * wHash(vec3(floor(p * 18.0), 2.0)) - 0.065) + 0.16 * vNoise(p * 0.15) - 0.06;
    roughnessFactor = 0.88;
  } else if (kind > 1.5 && kind < 2.5) {
    // Paving stones / concrete slabs
    vec2 g = p / 0.6;
    vec2 f = fract(g);
    float joint = (1.0 - smoothstep(0.0, 0.05, min(min(f.x, 1.0 - f.x), min(f.y, 1.0 - f.y)))) * (1.0 - smoothstep(0.1, 0.3, max(fwidth(g.x), fwidth(g.y))));
    diffuseColor.rgb *= (0.86 + 0.24 * wHash(vec3(floor(g), 4.0))) * (1.0 - 0.35 * joint);
    roughnessFactor = 0.8;
  } else if (kind > 2.5) {
    // Stone steps: large cut stones
    vec2 g = p / vec2(0.9, 0.45);
    vec2 f = fract(g);
    float joint = (1.0 - smoothstep(0.0, 0.04, min(min(f.x, 1.0 - f.x), min(f.y, 1.0 - f.y)))) * (1.0 - smoothstep(0.1, 0.3, max(fwidth(g.x), fwidth(g.y))));
    diffuseColor.rgb *= (0.8 + 0.3 * wHash(vec3(floor(g), 5.0))) * (1.0 - 0.3 * joint) * (0.92 + 0.12 * vNoise(p * 4.0));
    roughnessFactor = 0.85;
  }
}`)},e}function Dd(e){let t=new Ar;return t.setAttribute(`position`,new br(e.pos,3)),t.setAttribute(`normal`,new br(e.nor,3,!0)),t.setAttribute(`color`,new br(e.col,4,!0)),t.setAttribute(`aBase`,new br(e.base,1)),t.computeBoundingSphere(),t}var Od=class{worker;group=new Y;meshes=[];lod=[];pending=new Set;queue=[];nearRadius;bmat;get detailRadius(){return this.nearRadius*.3}constructor(e,t,n){this.worker=e,this.bmat=Td(t),this.nearRadius=1100*n,this.meshes=Array(gd*_d).fill(null),this.lod=Array(gd*_d).fill(-1)}addRoads(e){let t=Ed();for(let n of e){let e=new G(Dd(n.mesh),t);e.receiveShadow=!0,e.matrixAutoUpdate=!1,this.group.add(e)}}onCell(e,t,n){this.pending.delete(e);let r=this.meshes[e];if(r&&(this.group.remove(r),r.geometry.dispose()),this.meshes[e]=null,this.lod[e]=t,!n)return;let i=new G(Dd(n),this.bmat);i.castShadow=t<=1,i.receiveShadow=!0,i.matrixAutoUpdate=!1,this.meshes[e]=i,this.group.add(i)}update(e,t){let n=[];for(let r=0;r<_d;r++)for(let i=0;i<gd;i++){let a=r*gd+i,o=Hu+(i+.5)*500,s=Uu+(r+.5)*500,c=Math.max(0,Math.hypot(o-e,s-t)-350),l=c<this.detailRadius?0:c<this.nearRadius?1:2;this.lod[a]!==l&&!this.pending.has(a)&&n.push({cell:a,lod:l,d:c})}for(n.sort((e,t)=>e.d-t.d),this.queue=n;this.pending.size<3&&this.queue.length;){let{cell:e,lod:t}=this.queue.shift();this.pending.add(e),this.worker.postMessage({type:`cell`,cell:e,lod:t})}}get remaining(){return this.queue.length+this.pending.size}},kd=class e extends G{constructor(t,n={}){super(t),this.isReflector=!0,this.type=`Reflector`,this.camera=new ni;let r=this,i=n.color===void 0?new U(8355711):new U(n.color),a=n.textureWidth||512,o=n.textureHeight||512,s=n.clipBias||0,c=n.shader||e.ReflectorShader,l=n.multisample===void 0?4:n.multisample,u=new di,d=new V,f=new V,p=new V,m=new H,h=new V(0,0,-1),_=new Vt,v=new V,y=new V,b=new Vt,x=new H,S=this.camera,C=new Ut(a,o,{samples:l,type:g}),w=new Zr({name:c.name===void 0?`unspecified`:c.name,uniforms:Jr.clone(c.uniforms),fragmentShader:c.fragmentShader,vertexShader:c.vertexShader});w.uniforms.tDiffuse.value=C.texture,w.uniforms.color.value=i,w.uniforms.textureMatrix.value=x,this.material=w,this.onBeforeRender=function(e,t,n){if(f.setFromMatrixPosition(r.matrixWorld),p.setFromMatrixPosition(n.matrixWorld),m.extractRotation(r.matrixWorld),d.set(0,0,1),d.applyMatrix4(m),v.subVectors(f,p),v.dot(d)>0)return;v.reflect(d).negate(),v.add(f),m.extractRotation(n.matrixWorld),h.set(0,0,-1),h.applyMatrix4(m),h.add(p),y.subVectors(f,h),y.reflect(d).negate(),y.add(f),S.position.copy(v),S.up.set(0,1,0),S.up.applyMatrix4(m),S.up.reflect(d),S.lookAt(y),S.far=n.far,S.updateMatrixWorld(),S.projectionMatrix.copy(n.projectionMatrix),x.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),x.multiply(S.projectionMatrix),x.multiply(S.matrixWorldInverse),x.multiply(r.matrixWorld),u.setFromNormalAndCoplanarPoint(d,f),u.applyMatrix4(S.matrixWorldInverse),_.set(u.normal.x,u.normal.y,u.normal.z,u.constant);let i=S.projectionMatrix;b.x=(Math.sign(_.x)+i.elements[8])/i.elements[0],b.y=(Math.sign(_.y)+i.elements[9])/i.elements[5],b.z=-1,b.w=(1+i.elements[10])/i.elements[14],_.multiplyScalar(2/_.dot(b)),i.elements[2]=_.x,i.elements[6]=_.y,i.elements[10]=_.z+1-s,i.elements[14]=_.w,r.visible=!1;let a=e.getRenderTarget(),o=e.xr.enabled,c=e.shadowMap.autoUpdate;e.xr.enabled=!1,e.shadowMap.autoUpdate=!1,e.setRenderTarget(C),e.state.buffers.depth.setMask(!0),e.autoClear===!1&&e.clear(),e.render(t,S),e.xr.enabled=o,e.shadowMap.autoUpdate=c,e.setRenderTarget(a);let l=n.viewport;l!==void 0&&e.state.viewport(l),r.visible=!0},this.getRenderTarget=function(){return C},this.dispose=function(){C.dispose(),r.material.dispose()}}};kd.ReflectorShader={name:`ReflectorShader`,uniforms:{color:{value:null},tDiffuse:{value:null},textureMatrix:{value:null}},vertexShader:`
		uniform mat4 textureMatrix;
		varying vec4 vUv;

		#include <common>
		#include <logdepthbuf_pars_vertex>

		void main() {

			vUv = textureMatrix * vec4( position, 1.0 );

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

			#include <logdepthbuf_vertex>

		}`,fragmentShader:`
		uniform vec3 color;
		uniform sampler2D tDiffuse;
		varying vec4 vUv;

		#include <logdepthbuf_pars_fragment>

		float blendOverlay( float base, float blend ) {

			return( base < 0.5 ? ( 2.0 * base * blend ) : ( 1.0 - 2.0 * ( 1.0 - base ) * ( 1.0 - blend ) ) );

		}

		vec3 blendOverlay( vec3 base, vec3 blend ) {

			return vec3( blendOverlay( base.r, blend.r ), blendOverlay( base.g, blend.g ), blendOverlay( base.b, blend.b ) );

		}

		void main() {

			#include <logdepthbuf_fragment>

			vec4 base = texture2DProj( tDiffuse, vUv );
			gl_FragColor = vec4( blendOverlay( base.rgb, color ), 1.0 );

			#include <tonemapping_fragment>
			#include <colorspace_fragment>

		}`};var Ad=2e3,jd=2600,Md=[6,2.5],Nd=.28,Pd={sunDir:new Float32Array([0,1,0]),sunColor:new Float32Array(3),params:new Float32Array([400,.5,0,0])},Fd=`
float hzHash(vec2 p) { return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453); }
float hzNoise(vec2 p) {
  vec2 i = floor(p), f = fract(p);
  f = f * f * (3.0 - 2.0 * f);
  return mix(mix(hzHash(i), hzHash(i + vec2(1, 0)), f.x), mix(hzHash(i + vec2(0, 1)), hzHash(i + vec2(1, 1)), f.x), f.y);
}
float hzFbm(vec2 p) {
  float v = 0.0, a = 0.5;
  for (int i = 0; i < 5; i++) { v += a * hzNoise(p); p = p * 2.03 + vec2(1.7, 9.2); a *= 0.5; }
  return v;
}
// Cloud density 0..1 at a point of the cloud layer, by its world x/z
float cloudDensity(vec2 xz, float cover, float t) {
  vec2 p = xz + vec2(${Md[0].toFixed(1)}, ${Md[1].toFixed(1)}) * t;
  return smoothstep(cover, cover + ${Nd.toFixed(2)}, hzFbm(p / ${jd.toFixed(1)}));
}`,Id=`
#ifdef USE_FOG
	uniform vec3 fogColor;
	uniform vec3 fogSunDir;
	uniform vec3 fogSunColor;
	uniform vec4 fogHaze;
	varying vec3 vFogDir;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
	${Fd}
	// Mean haze density (as a fraction of the density at sea level) along a straight path between
	// two heights: the haze thins exponentially with altitude. Heights are mirrored below the sea,
	// so the water's mirror camera sees the same haze as the path above the surface it stands for.
	float hazeAlong(float y0, float y1) {
		float a = abs(y0) / fogHaze.x, b = abs(y1) / fogHaze.x;
		float t = b - a;
		return exp(-a) * (abs(t) < 1e-3 ? 1.0 : (1.0 - exp(-t)) / t);
	}
	// Haze colour in a direction: the fog colour, brightened toward the sun
	vec3 hazeColor(vec3 dir) {
		float toward = max(dot(dir, fogSunDir), 0.0);
		return fogColor + fogSunColor * pow(toward, 8.0);
	}
	// Sunlight left after the cloud layer above the camera, at a world position
	float cloudShadow(vec3 wp) {
		if (fogHaze.w <= 0.0) return 1.0;
		vec3 s = fogSunDir;
		float h = ${Ad.toFixed(1)} + abs(cameraPosition.y) - wp.y;
		vec2 at = wp.xz + s.xz / max(s.y, 0.2) * h;
		return 1.0 - fogHaze.w * cloudDensity(at, fogHaze.y, fogHaze.z);
	}
#endif
`,Ld=`
#ifdef USE_FOG
	varying vec3 vFogDir;
#endif
`,Rd=`
#ifdef USE_FOG
	vFogDir = mvPosition.xyz * mat3(viewMatrix);
#endif
`,zd=`
#ifdef USE_FOG
	float fogDist = length(vFogDir);
	float fogAmt = hazeAlong(cameraPosition.y, cameraPosition.y + vFogDir.y);
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp(-fogDensity * fogDensity * fogDist * fogDist * fogAmt);
	#else
		float fogFactor = smoothstep(fogNear, fogFar, fogDist * fogAmt);
	#endif
	gl_FragColor.rgb = mix(gl_FragColor.rgb, hazeColor(vFogDir / max(fogDist, 1e-3)), fogFactor);
#endif
`,Bd=`getDirectionalLightInfo( directionalLight, directLight );`,Vd=!1;function Hd(){if(Vd)return;Vd=!0;let e=q;e.fog_pars_vertex=Ld,e.fog_vertex=Rd,e.fog_pars_fragment=Id,e.fog_fragment=zd,e.lights_fragment_begin.includes(Bd)?e.lights_fragment_begin=e.lights_fragment_begin.replace(Bd,`${Bd}
		#ifdef USE_FOG
		directLight.color *= cloudShadow( cameraPosition + vFogDir );
		#endif`):console.warn(`haze: three.js の lights_fragment_begin が想定と異なるため、雲の影を無効にします`);let t=[J.fog,...Object.values(vi).map(e=>e.uniforms)];for(let e of t)e.fogColor&&Object.assign(e,Ud())}function Ud(){return{fogSunDir:{value:Pd.sunDir},fogSunColor:{value:Pd.sunColor},fogHaze:{value:Pd.params}}}var Wd=9.81,Gd=640,Kd=2.5,qd=250,Jd=315,Yd=6,Xd=8,Zd=.8,Qd=[{len:36,amp:.05,ang:0,swell:!0},{len:22,amp:.07,ang:.35},{len:14,amp:.06,ang:-.3},{len:8.5,amp:.045,ang:.15},{len:5.5,amp:.03,ang:-.5},{len:3.5,amp:.018,ang:.6}],$d=(e,t,n)=>{let r=Math.min(1,Math.max(0,(n-e)/(t-e)));return r*r*(3-2*r)},ef=`
uniform float uTime, uLevel;
uniform sampler2D uDepth;
uniform vec4 uDepthRect;
uniform vec4 uWaveA[${Yd}]; // direction x, z, wavenumber k, amplitude
uniform vec4 uWaveB[${Yd}]; // angular frequency, steepness Q, moves vertices (1) or shades only (0)
uniform vec4 uWakeA[${Xd}]; // vessel x, z, heading x, z
uniform vec4 uWakeB[${Xd}]; // speed, beam
uniform int uWakeN;
// Depth below the surface (m); stored depth is below mean sea level, the tide raises or lowers the surface
float depthAt(vec2 xz) {
  vec2 duv = (xz - uDepthRect.xy) / uDepthRect.zw;
  float inside = step(0.0, duv.x) * step(duv.x, 1.0) * step(0.0, duv.y) * step(duv.y, 1.0);
  return mix(25.0, texture2D(uDepth, vec2(duv.x, 1.0 - duv.y)).r * 25.5 + uLevel, inside);
}
// Waves die out as the water shoals toward the shore
float shoal(float depth) { return smoothstep(0.2, 3.0, depth); }
// Gerstner displacement of the longer waves at the flat position p, amplitudes scaled by s
vec3 waveDisplace(vec2 p, float s) {
  vec3 d = vec3(0.0);
  for (int i = 0; i < ${Yd}; i++) {
    vec4 a = uWaveA[i], b = uWaveB[i];
    if (b.z < 0.5) continue;
    float phi = a.z * dot(a.xy, p) - b.x * uTime;
    float A = a.w * s;
    d += vec3(a.x * b.y * A * cos(phi), A * sin(phi), a.y * b.y * A * cos(phi));
  }
  return d;
}
// Normal of the whole wave train at p (unnormalised, y about 1)
vec3 waveNormal(vec2 p, float s) {
  vec3 n = vec3(0.0, 1.0, 0.0);
  for (int i = 0; i < ${Yd}; i++) {
    vec4 a = uWaveA[i], b = uWaveB[i];
    float phi = a.z * dot(a.xy, p) - b.x * uTime;
    float kA = a.z * a.w * s;
    n.x -= a.x * kA * cos(phi);
    n.z -= a.y * kA * cos(phi);
    n.y -= b.y * kA * sin(phi);
  }
  return n;
}
// Kelvin wake of each vessel: transverse waves behind the stern inside the 19.5 degree wedge, and
// the divergent waves along its arms, with a wavelength set by the speed and fading astern
float wakeHeight(vec2 p) {
  float h = 0.0;
  for (int i = 0; i < ${Xd}; i++) {
    if (i >= uWakeN) break;
    vec4 a = uWakeA[i], b = uWakeB[i];
    vec2 rel = p - a.xy;
    float back = -dot(rel, a.zw);
    float w = abs(dot(rel, vec2(-a.w, a.z)));
    float edge = back * 0.354 + b.y * 0.6;
    if (back < 0.0 || w > edge + 8.0) continue;
    float v = b.x;
    float amp = min(0.3, 0.012 * v * v) * exp(-back / 160.0);
    float k = ${Wd.toFixed(2)} / (v * v);
    float inside = 1.0 - smoothstep(edge - 3.0, edge + 3.0, w);
    h += amp * sin(k * back) * inside * smoothstep(0.0, 8.0, back);
    float arm = 1.0 - smoothstep(0.0, 5.0 + back * 0.08, abs(w - edge));
    h += amp * 0.8 * sin(k * 1.5 * (back * 0.82 + w * 0.57)) * arm;
  }
  return h;
}
// White water of the wakes: the churned water astern and thin lines along the arms
float wakeFoam(vec2 p) {
  float f = 0.0;
  for (int i = 0; i < ${Xd}; i++) {
    if (i >= uWakeN) break;
    vec4 a = uWakeA[i], b = uWakeB[i];
    vec2 rel = p - a.xy;
    float back = -dot(rel, a.zw);
    float w = abs(dot(rel, vec2(-a.w, a.z)));
    if (back < -b.y) continue;
    float edge = back * 0.354 + b.y * 0.6;
    float stern = exp(-back / 45.0) * (1.0 - smoothstep(b.y * 0.35, b.y * 0.7 + back * 0.03, w)) * smoothstep(-b.y, 0.0, back);
    float arms = exp(-back / 120.0) * (1.0 - smoothstep(0.0, 1.5 + back * 0.02, abs(w - edge))) * 0.5;
    f += (stern + arms) * min(1.0, b.x / 3.0);
  }
  return clamp(f, 0.0, 1.0);
}`;function tf(){let e=Math.round(Gd/Kd),t=[],n=[];for(let n=0;n<=e;n++)for(let r=0;r<=e;r++)t.push(-320+r*Kd,0,-320+n*Kd);for(let t=0;t<e;t++)for(let r=0;r<e;r++){let i=t*257+r,a=i+1,o=i+e+1,s=o+1;n.push(i,o,a,a,o,s)}let r=2e4,i=t.length/3;for(let[e,n]of[[-1,-1],[1,-1],[1,1],[-1,1]])t.push(e*r,0,n*r);let a=[0,e,66048,e*257];for(let e=0;e<4;e++){let t=(e+1)%4;n.push(a[e],i+t,i+e,a[e],a[t],i+t)}let o=new Ar;return o.setAttribute(`position`,new W(t,3)),o.setIndex(n),o}var nf=class{mesh;mirror;reflections=!1;hm=null;waves=[];uniforms={uTime:{value:0},uSunDir:{value:new V(0,1,0)},uSunColor:{value:new U(1,1,1)},uSkyColor:{value:new U(.6,.75,.9)},uHorizon:{value:new U(.8,.85,.9)},uDeep:{value:new U(.04,.16,.2)},uLevel:{value:0},uDepth:{value:null},uDepthRect:{value:new Vt},fogColor:{value:new U},fogDensity:{value:1e-4},fogSunDir:{value:Pd.sunDir},fogSunColor:{value:Pd.sunColor},fogHaze:{value:Pd.params},uReflect:{value:0},uReflTex:{value:null},uReflMatrix:{value:new H},uWaveA:{value:new Float32Array(24)},uWaveB:{value:new Float32Array(24)},uWakeA:{value:new Float32Array(32)},uWakeB:{value:new Float32Array(32)},uWakeN:{value:0},uCurrent:{value:new R},uWind:{value:new R(3,1)}};constructor(){this.mirror=new kd(new _i(1,1),{textureWidth:512,textureHeight:512,clipBias:.02}),this.mirror.rotateX(-Math.PI/2);let e=this.mirror.getRenderTarget().texture;e.type=g,e.generateMipmaps=!0,e.minFilter=c,this.uniforms.uReflTex.value=e,this.setWind(.92,.38,5);let t=new Zr({uniforms:this.uniforms,transparent:!0,fog:!0,vertexShader:`
        uniform mat4 uReflMatrix;
        varying vec3 vWPos;
        varying vec2 vFlat;
        varying vec4 vRefl;
        #include <common>
        #include <logdepthbuf_pars_vertex>
        #include <fog_pars_vertex>
        ${ef}
        void main() {
          vec4 wp = modelMatrix * vec4(position, 1.0);
          vFlat = wp.xz;
          // Only the patch around the camera rides the waves; its edge stays flat to meet the ring
          float fade = 1.0 - smoothstep(${qd.toFixed(1)}, ${Jd.toFixed(1)}, max(abs(position.x), abs(position.z)));
          if (fade > 0.0) {
            float s = shoal(depthAt(wp.xz)) * fade;
            wp.xyz += waveDisplace(wp.xz, s);
            wp.y += wakeHeight(vFlat) * fade;
          }
          vWPos = wp.xyz;
          vRefl = uReflMatrix * wp;
          vec4 mvPosition = viewMatrix * wp;
          gl_Position = projectionMatrix * mvPosition;
          #include <logdepthbuf_vertex>
          #include <fog_vertex>
        }`,fragmentShader:`
        uniform vec3 uSunDir, uSunColor, uSkyColor, uHorizon, uDeep;
        uniform float uReflect;
        uniform sampler2D uReflTex;
        uniform vec2 uCurrent, uWind;
        varying vec3 vWPos;
        varying vec2 vFlat;
        varying vec4 vRefl;
        #include <common>
        #include <logdepthbuf_pars_fragment>
        #include <fog_pars_fragment>
        ${ef}
        float h(vec2 p) { return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453); }
        float n(vec2 p) {
          vec2 i = floor(p), f = fract(p);
          f = f * f * (3.0 - 2.0 * f);
          return mix(mix(h(i), h(i + vec2(1, 0)), f.x), mix(h(i + vec2(0, 1)), h(i + vec2(1, 1)), f.x), f.y);
        }
        // Wind ripples, carried along by the current
        float ripples(vec2 p) {
          float t = uTime;
          vec2 wind = normalize(uWind + vec2(1e-4)) * t;
          vec2 cur = uCurrent * t;
          return n(p * 0.08 + wind * 0.06 + cur * 0.08) * 0.5
               + n(p * 0.23 - wind * 0.1 + cur * 0.23) * 0.3
               + n(p * 0.71 + wind * 0.25 + cur * 0.71) * 0.15
               + n(p * 2.1 - wind * 0.45 + cur * 2.1) * 0.05;
        }
        void main() {
          #include <logdepthbuf_fragment>
          vec3 toCam = cameraPosition - vWPos;
          float dist = length(toCam);
          vec3 V = toCam / dist;
          vec2 p = vFlat;
          float depth = depthAt(p);
          float sh = shoal(depth);
          // The wave train: Gerstner normals, the wakes by finite differences
          vec3 N = waveNormal(p, sh);
          if (uWakeN > 0) {
            float e = 0.6;
            float w0 = wakeHeight(p);
            N.x -= (wakeHeight(p + vec2(e, 0.0)) - w0) / e;
            N.z -= (wakeHeight(p + vec2(0.0, e)) - w0) / e;
          }
          // Fine wind ripples, flattening with distance. Where the tidal current runs, smooth
          // lanes (slicks) streak the surface along the flow
          float e = 0.6;
          float amp = mix(0.45, 0.06, smoothstep(30.0, 1200.0, dist)) * (0.6 + 0.4 * sh);
          float cur = length(uCurrent);
          if (cur > 0.02) {
            vec2 cd = uCurrent / cur, cp = vec2(-cd.y, cd.x);
            float slick = smoothstep(0.5, 0.75, n(vec2(dot(p, cd) * 0.012 + uTime * 0.01, dot(p, cp) * 0.12)));
            amp *= 1.0 - 0.6 * slick * min(1.0, cur / 1.2);
          }
          float c = ripples(p);
          N.x += (c - ripples(p + vec2(e, 0.0))) * amp * 3.0;
          N.z += (c - ripples(p + vec2(0.0, e))) * amp * 3.0;
          N = normalize(N);
          float fres = 0.02 + 0.98 * pow(1.0 - max(dot(N, V), 0.0), 5.0);
          vec3 R = reflect(-V, N);
          vec3 sky = mix(uHorizon, uSkyColor, smoothstep(0.0, 0.4, R.y));
          if (uReflect > 0.5) {
            // Mirror image of hills, town and sky, wobbled by the waves and blurred with distance
            vec2 ruv = vRefl.xy / vRefl.w + N.xz * mix(0.035, 0.008, smoothstep(30.0, 900.0, dist));
            float blur = 2.0 * smoothstep(40.0, 1200.0, dist);
            sky = texture2D(uReflTex, clamp(ruv, 0.001, 0.999), blur).rgb;
          }
          // Under a cloud the water's own colour dims and the glitter goes
          float cloud = cloudShadow(vWPos);
          // Depth: shallower water is clearer and blue-green, with whitecaps at the shoreline
          float shallow = 1.0 - smoothstep(0.0, 9.0, depth);
          vec3 water = mix(uDeep, uDeep * vec3(1.0, 2.1, 1.9), shallow) * (0.7 + 0.3 * cloud);
          vec3 col = mix(water, sky, fres * (1.0 - shallow * 0.4));
          float fn = n(p * 0.35 + vec2(uTime * 0.25, -uTime * 0.18)) * 0.6 + n(p * 1.3 - uTime * 0.4) * 0.4;
          // Small waves lapping at the shore: a thin, broken line of foam right at the waterline
          float band = smoothstep(0.5, 0.0, depth) * smoothstep(0.45, 0.8, fn + 0.2 * sin(depth * 14.0 - uTime * 1.5));
          // The vessels' white water, broken up by the ripples
          float foam = uWakeN > 0 ? wakeFoam(p) * (0.45 + 0.55 * smoothstep(0.3, 0.7, fn)) : 0.0;
          foam = max(foam * 0.8, band * 0.45);
          col = mix(col, vec3(0.9, 0.93, 0.93) * (0.4 + 0.6 * max(uSunDir.y, 0.15)) * (0.6 + 0.4 * cloud), foam);
          vec3 H = normalize(uSunDir + V);
          float spec = pow(max(dot(N, H), 0.0), 220.0) * 3.0 + pow(max(dot(N, H), 0.0), 24.0) * 0.12;
          col += uSunColor * spec * smoothstep(-0.05, 0.1, uSunDir.y) * cloud * (1.0 - foam);
          float alpha = mix(mix(0.82, 0.97, smoothstep(5.0, 120.0, dist)), 0.45, shallow * shallow * (1.0 - smoothstep(60.0, 400.0, dist)));
          alpha = max(alpha, foam * 0.8);
          // The same haze as the land: thinner from up high, lit toward the sun
          float fogF = 1.0 - exp(-fogDensity * fogDensity * dist * dist * hazeAlong(cameraPosition.y, vWPos.y));
          col = mix(col, hazeColor(-V), fogF);
          gl_FragColor = vec4(col, alpha);
          #include <tonemapping_fragment>
          #include <colorspace_fragment>
        }`});this.mesh=new G(tf(),t),this.mesh.renderOrder=1,this.mesh.frustumCulled=!1}setDepth(e){this.hm=e;let t=Math.floor(Bu/10)+1,n=Math.floor(Vu/10)+1,r=new Uint8Array(t*n);for(let i=0;i<n;i++)for(let a=0;a<t;a++){let o=-e.height(Hu+a*10,Uu+i*10);r[(n-1-i)*t+a]=Math.max(0,Math.min(255,Math.round(o*10)))}let i=new Xs(r,t,n,O,l);i.unpackAlignment=1,i.magFilter=o,i.minFilter=o,i.needsUpdate=!0,this.uniforms.uDepth.value=i,this.uniforms.uDepthRect.value.set(Hu,Uu,t*10-10,n*10-10)}setWind(e,t,n){let r=Math.hypot(e,t)||1;e/=r,t/=r,this.uniforms.uWind.value.set(e*n,t*n);let i=Math.min(1.6,Math.max(.3,n/6));this.waves=Qd.map(n=>{let r=Math.atan2(t,e)+n.ang,a=2*Math.PI/n.len;return{dx:n.swell?e:Math.cos(r),dz:n.swell?t:Math.sin(r),k:a,amp:n.amp*(n.swell?1:i),omega:Math.sqrt(Wd*a),displace:n.len>=12}});let a=this.uniforms.uWaveA.value,o=this.uniforms.uWaveB.value;this.waves.forEach((e,t)=>{a.set([e.dx,e.dz,e.k,e.amp],t*4),o.set([e.omega,Zd,+!!e.displace,0],t*4)})}setCurrent(e,t){this.uniforms.uCurrent.value.set(e,t)}setVessels(e,t,n){let r=e.filter(e=>e.speed>.4).map(e=>({v:e,d:Math.hypot(e.x-t,e.z-n)})).filter(e=>e.d<2500).sort((e,t)=>e.d-t.d).slice(0,Xd),i=this.uniforms.uWakeA.value,a=this.uniforms.uWakeB.value;r.forEach(({v:e},t)=>{let n=Math.hypot(e.dx,e.dz)||1;i.set([e.x,e.z,e.dx/n,e.dz/n],t*4),a.set([e.speed,e.beam,0,0],t*4)}),this.uniforms.uWakeN.value=r.length}heightAt(e,t,n){let r=$d(.2,3,this.hm?-this.hm.height(e,t)+this.uniforms.uLevel.value:25);if(r<=0)return 0;let i=0;for(let a of this.waves)a.displace&&(i+=a.amp*r*Math.sin(a.k*(a.dx*e+a.dz*t)-a.omega*n));return i}update(e,t,n,r){this.uniforms.uTime.value=e,this.mesh.position.set(Math.round(t/Kd)*Kd,r,Math.round(n/Kd)*Kd),this.uniforms.uLevel.value=r}renderReflection(e,t,n,r=[]){if(this.uniforms.uReflect.value=this.reflections&&n.position.y>this.uniforms.uLevel.value?1:0,!this.uniforms.uReflect.value)return;let i=e.getDrawingBufferSize(new R).multiplyScalar(.4).floor(),a=this.mirror.getRenderTarget();(a.width!==i.x||a.height!==i.y)&&a.setSize(i.x,i.y),this.mirror.position.set(n.position.x,this.uniforms.uLevel.value,n.position.z),this.mirror.updateMatrixWorld(),this.mesh.visible=!1;let o=r.filter(e=>e.visible);for(let e of o)e.visible=!1;this.mirror.onBeforeRender(e,t,n,void 0,void 0,void 0),this.mesh.visible=!0;for(let e of o)e.visible=!0;let s=this.mirror.material.uniforms.textureMatrix.value;this.uniforms.uReflMatrix.value.copy(s).multiply(this.mirror.matrixWorld.clone().invert())}};function rf(e,t){let n=new Y;if(!e||typeof e!=`object`)return n;let r=e.features;if(!Array.isArray(r))return n;let i=new oc({color:4774120,transparent:!0,opacity:.85}),a=new Z({color:15779418});for(let e of r){if(!e||typeof e!=`object`)continue;let r=e,o=r.properties?.kind,s=r.geometry;if(o===`crane`&&s?.type===`Point`&&Array.isArray(s.coordinates)){let[e,r]=s.coordinates;if(typeof e!=`number`||typeof r!=`number`||!Number.isFinite(e)||!Number.isFinite(r))continue;let[i,o]=Qu(e,r),c=t.height(i,o);if(!Number.isFinite(c))continue;let l=new G(new il(3,14,5),a);l.position.set(i,c+7,o),n.add(l)}else if(o===`dock`&&s?.type===`Polygon`&&Array.isArray(s.coordinates)){let e=s.coordinates[0];if(!Array.isArray(e)||e.length<4)continue;let r=[];for(let n of e){if(!Array.isArray(n)||n.length<2||typeof n[0]!=`number`||typeof n[1]!=`number`){r.length=0;break}let[e,i]=Qu(n[0],n[1]),a=t.height(e,i);if(!Number.isFinite(a)){r.length=0;break}r.push(new V(e,a+1.5,i))}r.length&&n.add(new mc(new Ar().setFromPoints(r),i))}}return n}function af(e,t){let n=new Y;if(!e||typeof e!=`object`)return n;let r=e.elements;if(!Array.isArray(r))return n;let i=new Z({color:11840160,roughness:.88}),a=new Z({color:14857289,metalness:.5,roughness:.5}),o={dock:new oc({color:4774120}),industrial:new oc({color:15772012})};function s(e,t,n,r){let i=new V().subVectors(n,t);if(i.lengthSq()<.001)return;let o=new G(new X(r,r,i.length(),6),a);o.position.copy(t).add(n).multiplyScalar(.5),o.quaternion.setFromUnitVectors(new V(0,1,0),i.normalize()),e.add(o)}for(let e of r){if(!e||typeof e!=`object`)continue;let r=e,a=r.tags?.man_made===`pier`?`pier`:r.tags?.waterway===`dock`?`dock`:r.tags?.landuse===`industrial`||r.tags?.industrial===`shipyard`?`industrial`:null;if(r.type===`node`&&r.tags?.man_made===`crane`&&Number.isFinite(r.lat)&&Number.isFinite(r.lon)){let[e,i]=Qu(r.lon,r.lat),a=t.height(e,i);if(!Number.isFinite(a))continue;let o=new Y;o.name=`osm-crane-${r.id??`unknown`}-inferred-shape`;let c=new V(e,a+1,i),l=new V(e,a+23,i);s(o,c,l,1.1),s(o,l,new V(e+19,a+21,i),.65),s(o,l,new V(e-7,a+21,i),.65),s(o,new V(e+13,a+21,i),new V(e+13,a+10,i),.16),o.userData={source:`OpenStreetMap`,osmId:r.id,evidence:`observed-location-inferred-geometry`,facilityType:`crane`},n.add(o);continue}if(!a||!Array.isArray(r.geometry)||r.geometry.length<2)continue;let c=[];for(let e of r.geometry){if(!Number.isFinite(e.lon)||!Number.isFinite(e.lat)){c.length=0;break}let[n,r]=Qu(e.lon,e.lat),i=t.height(n,r);if(!Number.isFinite(i)){c.length=0;break}c.push(new V(n,i+1.5,r))}if(!(c.length<2)){if(a===`pier`){let e=new Y;e.name=`osm-pier-${r.id??`unknown`}-inferred-deck`;let t=r.tags?.area===`yes`&&c.length>=4;if(t){let t=c.slice(0,-1),n=new ol;n.moveTo(t[0].x,-t[0].z);for(let e of t.slice(1))n.lineTo(e.x,-e.z);n.closePath();let r=new ql(n);r.rotateX(-Math.PI/2);let i=new G(r,new Z({color:11840160,side:2,roughness:.88}));i.position.y=t.reduce((e,t)=>e+t.y,0)/t.length,i.name=`observed-osm-pier-footprint`,e.add(i)}else for(let t=1;t<c.length;t++){let n=c[t-1],r=c[t],a=new V().subVectors(r,n),o=Math.hypot(a.x,a.z);if(o<.2)continue;let s=new G(new K(4,1.2,o),i);s.position.copy(n).add(r).multiplyScalar(.5),s.rotation.y=Math.atan2(-a.x,-a.z),e.add(s)}e.userData={source:`OpenStreetMap`,osmId:r.id,evidence:t?`observed-footprint-inferred-height`:`observed-centerline-inferred-width`,facilityType:`pier`},n.add(e)}else{if(a===`dock`&&c.length>=4){let e=c.slice(0,-1),t=new ol;t.moveTo(e[0].x,-e[0].z);for(let n of e.slice(1))t.lineTo(n.x,-n.z);t.closePath();let i=new ql(t);i.rotateX(-Math.PI/2);let a=new G(i,new Z({color:5860467,roughness:.92,side:2,transparent:!0,opacity:.78,depthWrite:!1}));a.position.y=Math.max(.5,Math.min(...c.map(e=>e.y)))+.12,a.name=`osm-dock-${r.id??`unknown`}-observed-footprint-inferred-surface`,a.userData={source:`OpenStreetMap`,osmId:r.id,evidence:`observed-footprint-inferred-surface-elevation`,facilityType:`dock`},n.add(a)}let e=new mc(new Ar().setFromPoints(c),o[a]);e.name=`osm-${a}-${r.id??`unknown`}-observed-boundary`,e.userData={source:`OpenStreetMap`,osmId:r.id,evidence:`observed-boundary`,facilityName:r.tags?.name??null,facilityType:r.tags?.industrial??a,note:`Industrial area is not a surveyed factory building footprint`},n.add(e)}}}return n}function of(e,t,n=!1){let r=new Y;if(!e||typeof e!=`object`)return r;let i=e.elements;if(!Array.isArray(i))return r;let a=new Z({color:n?7838640:10987943,roughness:.85,transparent:n,opacity:n?.68:1});for(let e of i){if(!e||typeof e!=`object`)continue;let i=e;if(i.type!==`way`||!i.tags?.building||!Array.isArray(i.geometry)||i.geometry.length<4)continue;let o=[];for(let e of i.geometry){if(!Number.isFinite(e.lon)||!Number.isFinite(e.lat)){o.length=0;break}let[t,n]=Qu(e.lon,e.lat);o.push(new R(t,-n))}if(o.length<4)continue;let s=i.geometry.slice(0,-1).map(e=>{let[n,r]=Qu(e.lon,e.lat);return t.height(n,r)}).filter(Number.isFinite);if(!s.length)continue;let c=Math.min(...s),l=Number.parseFloat(i.tags.height??``),u=Number.parseFloat(i.tags[`building:levels`]??``),d=Number.isFinite(l)&&l>0&&l<200,f=Number.isFinite(u)&&u>0&&u<40,p=d?l:f?u*3.5:9,m=new G(new Hl(new ol(o),{depth:p,bevelEnabled:!1}),a);m.rotation.x=-Math.PI/2,m.position.y=c,m.name=`${n?`osm-industrial-spatial-candidate`:`osm-industrial-building`}-${i.id??`unknown`}`,m.userData={source:`OpenStreetMap`,osmId:i.id,footprint:`observed`,heightEvidence:d?`osm-height`:f?`osm-levels-estimate`:`inferred`,facilityName:i.tags.name??null,classification:n?`spatial-candidate-not-verified-industrial-building`:`explicit-osm-building-evidence`,matchedIndustrialSites:n?e.spatialEvidence?.matched_industrial_sites??[]:[]},r.add(m)}return r}var sf=class{hm;group=new Y;birds=[];last=new R(1e9,1e9);kiteMat=new Z({color:4864552,roughness:.9,side:2});gullMat=new Z({color:15263974,roughness:.8,side:2});gullTipMat=new Z({color:9212054,roughness:.8,side:2});constructor(e,t=9,n=12){this.hm=e;for(let e=0;e<t+n;e++){let n=e<t,r=n?1.5:1.1,i=new Y,a=new G(new Yl(n?.14:.1,6,4),n?this.kiteMat:this.gullMat);a.scale.set(1,.7,n?2.6:2.4),i.add(a);let o=[];for(let e of[-1,1]){let t=new _i(r/2,n?.42:.3,2,1),a=t.attributes.position;for(let e=0;e<a.count;e++)Math.abs(a.getX(e))>r/4-.01&&a.setY(e,a.getY(e)*.55);t.translate(e*r/4,0,0),t.rotateX(-Math.PI/2);let s=new G(t,n?this.kiteMat:this.gullTipMat);if(!n){let t=new G(new _i(r/4,.3).translate(e*r/8,0,0).rotateX(-Math.PI/2),this.gullMat);t.position.y=.005,s.add(t)}i.add(s),o.push(s)}if(n){let e=new G(new _i(.5,.3).rotateX(-Math.PI/2),this.kiteMat);e.position.z=.45,i.add(e)}i.visible=!1,this.group.add(i),this.birds.push({obj:i,wings:[o[0],o[1]],cx:0,cz:0,r:1,h:1,w:.1,phase:0,flap:n?.4:5.5,kite:n})}}seed(e,t){this.last.set(e,t);let n=0;for(let r of this.birds){let i=!1;for(let a=0;a<40&&!i;a++){let o=dd(e*.01+a,n*7.3)*Math.PI*2,s=r.kite?120+dd(n,a)*650:60+dd(a,n)*400,c=e+Math.cos(o)*s,l=t+Math.sin(o)*s,u=this.hm.height(c,l);(r.kite?u<-1.5:u<.6&&u>-4)&&(i=!0,r.cx=c,r.cz=l,r.r=r.kite?35+dd(c,l)*60:10+dd(l,c)*30,r.h=r.kite?45+dd(c+1,l)*90:4+dd(c,l+1)*18,r.w=(r.kite?.08+dd(l,c+2)*.08:.25+dd(c+3,l)*.3)*(dd(c,l+3)<.5?1:-1),r.phase=dd(c+4,l+4)*Math.PI*2)}r.obj.visible=i,n++}}update(e,t,n,r,i){Math.hypot(n-this.last.x,r-this.last.y)>400&&this.seed(n,r);let a=i<.6;for(let e of this.birds){if(!a){e.obj.visible=!1;continue}!e.obj.visible&&e.r>1&&(e.obj.visible=!0);let n=e.phase+t*e.w,r=e.h+Math.sin(t*.13+e.phase)*(e.kite?12:2);e.obj.position.set(e.cx+Math.cos(n)*e.r,r,e.cz+Math.sin(n)*e.r),e.obj.rotation.set(0,-n-Math.sign(e.w)*Math.PI/2,0,`YXZ`),e.obj.rotation.z=Math.sign(e.w)*.25;let i=e.kite?.08+.35*Math.max(0,Math.sin(t*.37+e.phase)-.7)/.3:1,o=Math.sin(t*e.flap+e.phase)*(e.kite?.25:.55)*i+(e.kite?.18:.05);e.wings[0].rotation.z=o,e.wings[1].rotation.z=-o}}};function cf(e,t,n,r){let i=Math.min(1,Math.max(0,(e-t)/r)),a=Math.min(1,Math.max(0,(n-e)/r));return Math.min(i,a)}function lf(e){return{summer:cf(((e-1)%365+365)%365+1,182,250,15)}}function uf(e,t,n){let r=(e-1)*24+t,i=.5+.5*Math.cos(2*Math.PI*r/354.48);return(n.neap+(n.spring-n.neap)*i)*Math.cos(2*Math.PI*r/12.42-.9)}var df=class e extends G{constructor(){let t=e.SkyShader,n=new Zr({name:t.name,uniforms:Jr.clone(t.uniforms),vertexShader:t.vertexShader,fragmentShader:t.fragmentShader,side:1,depthWrite:!1});super(new K(1,1,1),n),this.isSky=!0}};df.SkyShader={name:`SkyShader`,uniforms:{turbidity:{value:2},rayleigh:{value:1},mieCoefficient:{value:.005},mieDirectionalG:{value:.8},sunPosition:{value:new V},up:{value:new V(0,1,0)}},vertexShader:`
		uniform vec3 sunPosition;
		uniform float rayleigh;
		uniform float turbidity;
		uniform float mieCoefficient;
		uniform vec3 up;

		varying vec3 vWorldPosition;
		varying vec3 vSunDirection;
		varying float vSunfade;
		varying vec3 vBetaR;
		varying vec3 vBetaM;
		varying float vSunE;

		// constants for atmospheric scattering
		const float e = 2.71828182845904523536028747135266249775724709369995957;
		const float pi = 3.141592653589793238462643383279502884197169;

		// wavelength of used primaries, according to preetham
		const vec3 lambda = vec3( 680E-9, 550E-9, 450E-9 );
		// this pre-calcuation replaces older TotalRayleigh(vec3 lambda) function:
		// (8.0 * pow(pi, 3.0) * pow(pow(n, 2.0) - 1.0, 2.0) * (6.0 + 3.0 * pn)) / (3.0 * N * pow(lambda, vec3(4.0)) * (6.0 - 7.0 * pn))
		const vec3 totalRayleigh = vec3( 5.804542996261093E-6, 1.3562911419845635E-5, 3.0265902468824876E-5 );

		// mie stuff
		// K coefficient for the primaries
		const float v = 4.0;
		const vec3 K = vec3( 0.686, 0.678, 0.666 );
		// MieConst = pi * pow( ( 2.0 * pi ) / lambda, vec3( v - 2.0 ) ) * K
		const vec3 MieConst = vec3( 1.8399918514433978E14, 2.7798023919660528E14, 4.0790479543861094E14 );

		// earth shadow hack
		// cutoffAngle = pi / 1.95;
		const float cutoffAngle = 1.6110731556870734;
		const float steepness = 1.5;
		const float EE = 1000.0;

		float sunIntensity( float zenithAngleCos ) {
			zenithAngleCos = clamp( zenithAngleCos, -1.0, 1.0 );
			return EE * max( 0.0, 1.0 - pow( e, -( ( cutoffAngle - acos( zenithAngleCos ) ) / steepness ) ) );
		}

		vec3 totalMie( float T ) {
			float c = ( 0.2 * T ) * 10E-18;
			return 0.434 * c * MieConst;
		}

		void main() {

			vec4 worldPosition = modelMatrix * vec4( position, 1.0 );
			vWorldPosition = worldPosition.xyz;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			gl_Position.z = gl_Position.w; // set z to camera.far

			vSunDirection = normalize( sunPosition );

			vSunE = sunIntensity( dot( vSunDirection, up ) );

			vSunfade = 1.0 - clamp( 1.0 - exp( ( sunPosition.y / 450000.0 ) ), 0.0, 1.0 );

			float rayleighCoefficient = rayleigh - ( 1.0 * ( 1.0 - vSunfade ) );

			// extinction (absorbtion + out scattering)
			// rayleigh coefficients
			vBetaR = totalRayleigh * rayleighCoefficient;

			// mie coefficients
			vBetaM = totalMie( turbidity ) * mieCoefficient;

		}`,fragmentShader:`
		varying vec3 vWorldPosition;
		varying vec3 vSunDirection;
		varying float vSunfade;
		varying vec3 vBetaR;
		varying vec3 vBetaM;
		varying float vSunE;

		uniform float mieDirectionalG;
		uniform vec3 up;

		// constants for atmospheric scattering
		const float pi = 3.141592653589793238462643383279502884197169;

		const float n = 1.0003; // refractive index of air
		const float N = 2.545E25; // number of molecules per unit volume for air at 288.15K and 1013mb (sea level -45 celsius)

		// optical length at zenith for molecules
		const float rayleighZenithLength = 8.4E3;
		const float mieZenithLength = 1.25E3;
		// 66 arc seconds -> degrees, and the cosine of that
		const float sunAngularDiameterCos = 0.999956676946448443553574619906976478926848692873900859324;

		// 3.0 / ( 16.0 * pi )
		const float THREE_OVER_SIXTEENPI = 0.05968310365946075;
		// 1.0 / ( 4.0 * pi )
		const float ONE_OVER_FOURPI = 0.07957747154594767;

		float rayleighPhase( float cosTheta ) {
			return THREE_OVER_SIXTEENPI * ( 1.0 + pow( cosTheta, 2.0 ) );
		}

		float hgPhase( float cosTheta, float g ) {
			float g2 = pow( g, 2.0 );
			float inverse = 1.0 / pow( 1.0 - 2.0 * g * cosTheta + g2, 1.5 );
			return ONE_OVER_FOURPI * ( ( 1.0 - g2 ) * inverse );
		}

		void main() {

			vec3 direction = normalize( vWorldPosition - cameraPosition );

			// optical length
			// cutoff angle at 90 to avoid singularity in next formula.
			float zenithAngle = acos( max( 0.0, dot( up, direction ) ) );
			float inverse = 1.0 / ( cos( zenithAngle ) + 0.15 * pow( 93.885 - ( ( zenithAngle * 180.0 ) / pi ), -1.253 ) );
			float sR = rayleighZenithLength * inverse;
			float sM = mieZenithLength * inverse;

			// combined extinction factor
			vec3 Fex = exp( -( vBetaR * sR + vBetaM * sM ) );

			// in scattering
			float cosTheta = dot( direction, vSunDirection );

			float rPhase = rayleighPhase( cosTheta * 0.5 + 0.5 );
			vec3 betaRTheta = vBetaR * rPhase;

			float mPhase = hgPhase( cosTheta, mieDirectionalG );
			vec3 betaMTheta = vBetaM * mPhase;

			vec3 Lin = pow( vSunE * ( ( betaRTheta + betaMTheta ) / ( vBetaR + vBetaM ) ) * ( 1.0 - Fex ), vec3( 1.5 ) );
			Lin *= mix( vec3( 1.0 ), pow( vSunE * ( ( betaRTheta + betaMTheta ) / ( vBetaR + vBetaM ) ) * Fex, vec3( 1.0 / 2.0 ) ), clamp( pow( 1.0 - dot( up, vSunDirection ), 5.0 ), 0.0, 1.0 ) );

			// nightsky
			float theta = acos( direction.y ); // elevation --> y-axis, [-pi/2, pi/2]
			float phi = atan( direction.z, direction.x ); // azimuth --> x-axis [-pi/2, pi/2]
			vec2 uv = vec2( phi, theta ) / vec2( 2.0 * pi, pi ) + vec2( 0.5, 0.0 );
			vec3 L0 = vec3( 0.1 ) * Fex;

			// composition + solar disc
			float sundisk = smoothstep( sunAngularDiameterCos, sunAngularDiameterCos + 0.00002, cosTheta );
			L0 += ( vSunE * 19000.0 * Fex ) * sundisk;

			vec3 texColor = ( Lin + L0 ) * 0.04 + vec3( 0.0, 0.0003, 0.00075 );

			vec3 retColor = pow( texColor, vec3( 1.0 / ( 1.2 + ( 1.2 * vSunfade ) ) ) );

			gl_FragColor = vec4( retColor, 1.0 );

			#include <tonemapping_fragment>
			#include <colorspace_fragment>

		}`};var ff=Math.PI/180,pf=Q.centerLat,mf=Q.centerLon,hf=e=>(e%(2*Math.PI)+2*Math.PI)%(2*Math.PI);function gf(e,t,n){return(Date.UTC(e,0,t)+(n-9)*36e5)/864e5+2440587.5}function _f(e){let t=e-2451545,n=t/36525;return hf((280.46061837+360.98564736629*t+387933e-9*n*n)*ff)}function vf(e,t=mf){return hf(_f(e)+t*ff)}var yf=e=>(23.439291-4e-7*(e-2451545))*ff;function bf(e,t,n,r){let i=Math.sin(e),a=Math.cos(e),o=Math.sin(t),s=Math.cos(t);r.ra=hf(Math.atan2(i*Math.cos(n)*s-Math.sin(n)*o,a*s)),r.dec=Math.asin(o*Math.cos(n)+s*Math.sin(n)*i)}function xf(e,t={ra:0,dec:0,lambda:0}){let n=e-2451545,r=280.46+.9856474*n,i=(357.528+.9856003*n)*ff,a=(r+1.915*Math.sin(i)+.02*Math.sin(2*i))*ff;return bf(a,0,yf(e),t),t.lambda=hf(a),t}var Sf=(e,t,n)=>Math.sin((e+t*n)*ff),Cf=(e,t,n)=>Math.cos((e+t*n)*ff);function wf(e,t={ra:0,dec:0,lambda:0,beta:0,parallax:0}){let n=(e-2451545)/36525,r=(218.32+481267.881*n+6.29*Sf(135,477198.87,n)-1.27*Sf(259.3,-413335.36,n)+.66*Sf(235.7,890534.22,n)+.21*Sf(269.9,954397.74,n)-.19*Sf(357.5,35999.05,n)-.11*Sf(186.5,966404.03,n))*ff,i=(5.13*Sf(93.3,483202.02,n)+.28*Sf(228.2,960400.89,n)-.28*Sf(318.3,6003.15,n)-.17*Sf(217.6,-407332.21,n))*ff;return bf(r,i,yf(e),t),t.lambda=hf(r),t.beta=i,t.parallax=(.9508+.0518*Cf(135,477198.87,n)+.0095*Cf(259.3,-413335.36,n)+.0078*Cf(235.7,890534.22,n)+.0028*Cf(269.9,954397.74,n))*ff,t}function Tf(e,t,n={fraction:0,age:0}){return n.fraction=(1-Math.cos(t.beta)*Math.cos(t.lambda-e.lambda))/2,n.age=hf(t.lambda-e.lambda)/(2*Math.PI),n}function Ef(e,t,n,r,i={alt:0,az:0}){let a=n-e;return i.alt=Math.asin(Math.sin(r)*Math.sin(t)+Math.cos(r)*Math.cos(t)*Math.cos(a)),i.az=hf(Math.atan2(Math.sin(a),Math.cos(a)*Math.sin(r)-Math.tan(t)*Math.cos(r))),i}function Df(e,t){let n=Math.cos(e.alt);return t.x=-Math.sin(e.az)*n,t.y=Math.sin(e.alt),t.z=Math.cos(e.az)*n,t}function Of(e,t,n=Array(9)){let r=Math.cos(e),i=Math.sin(e),a=Math.sin(t),o=Math.cos(t),s=[0,o,a],c=[1,0,0],l=[0,a,-o];for(let e=0;e<3;e++)n[e]=r*s[e]-i*c[e],n[3+e]=i*s[e]+r*c[e],n[6+e]=l[e];return n}var kf=27e3,Af=26e3,jf=25e3,Mf=`
  float h3(vec3 p) { return fract(sin(dot(p, vec3(127.1, 311.7, 74.7))) * 43758.5453); }
  float n3(vec3 p) {
    vec3 i = floor(p), f = fract(p);
    f = f * f * (3.0 - 2.0 * f);
    return mix(mix(mix(h3(i), h3(i + vec3(1, 0, 0)), f.x), mix(h3(i + vec3(0, 1, 0)), h3(i + vec3(1, 1, 0)), f.x), f.y),
               mix(mix(h3(i + vec3(0, 0, 1)), h3(i + vec3(1, 0, 1)), f.x), mix(h3(i + vec3(0, 1, 1)), h3(i + vec3(1, 1, 1)), f.x), f.y), f.z);
  }`,Nf=class{mesh;uniforms={uEq:{value:new z},uMilky:{value:null},uMilkyAmt:{value:0},uSunDir:{value:new V(0,1,0)},uMoonDir:{value:new V(0,1,0)},uMoonSky:{value:new U(0,0,0)},uGlow:{value:new U(0,0,0)},uBlue:{value:new U(0,0,0)},uBelt:{value:0},uNightGlow:{value:new U(0,0,0)}};constructor(){let e=new Yl(kf,48,24),t=new Zr({uniforms:this.uniforms,side:1,transparent:!0,depthWrite:!1,fog:!1,blending:5,blendSrc:201,blendDst:205,vertexShader:`
        varying vec3 vDir;
        #include <common>
        #include <logdepthbuf_pars_vertex>
        void main() {
          vec4 wp = modelMatrix * vec4(position, 1.0);
          vDir = wp.xyz - cameraPosition;
          gl_Position = projectionMatrix * viewMatrix * wp;
          #include <logdepthbuf_vertex>
        }`,fragmentShader:`
        uniform mat3 uEq;
        uniform sampler2D uMilky;
        uniform float uMilkyAmt, uBelt;
        uniform vec3 uSunDir, uMoonDir, uMoonSky, uGlow, uBlue, uNightGlow;
        varying vec3 vDir;
        #include <common>
        #include <logdepthbuf_pars_fragment>
        ${Mf}
        void main() {
          #include <logdepthbuf_fragment>
          vec3 d = normalize(vDir);
          float h = max(d.y, 0.0);
          float hz = exp(-h * 7.0);
          vec3 col = uNightGlow * hz;
          float a = 0.0;
          // Twilight: warm glow on the horizon under the sun, fading upward and away from it
          vec2 sh = normalize(uSunDir.xz + vec2(1e-5));
          vec2 dh = normalize(d.xz + vec2(1e-5));
          float toward = dot(dh, sh) * 0.5 + 0.5;
          float glow = pow(max(toward, 0.0), 2.5) * exp(-h / mix(0.05, 0.2, toward * toward));
          col += uGlow * (glow + 0.12 * hz);
          // Earth's shadow rises in the east as the sun sinks, with the pink belt of Venus above it
          float anti = pow(max(1.0 - toward, 0.0), 1.5);
          float top = max(-uSunDir.y, 0.0) * 0.9 + 0.035;
          // Squared by hand: pow() of a negative base is undefined in GLSL and gives NaN on some GPUs,
          // which the bloom blur then spreads into black blocks
          float bz = (h - top - 0.05) / 0.06;
          float belt = anti * exp(-bz * bz);
          col += vec3(0.32, 0.15, 0.2) * belt * uBelt;
          float shadow = anti * (1.0 - smoothstep(top - 0.02, top + 0.02, h)) * uBelt * 0.35;
          col += vec3(0.03, 0.045, 0.08) * shadow;
          a += shadow;
          // Blue hour: deep blue that is strongest overhead
          col += uBlue * (0.55 + 0.45 * (1.0 - hz));
          // Moonlight scattered in the air, and the moon's aureole
          float cm = max(dot(d, uMoonDir), 0.0);
          col += uMoonSky * (0.55 + 0.45 * hz + pow(cm, 24.0) * 1.2 + pow(cm, 600.0) * 5.0);
          if (uMilkyAmt > 0.0005) {
            vec3 e = uEq * d;
            float ra = atan(e.y, e.x), dec = asin(clamp(e.z, -1.0, 1.0));
            float mw = texture2D(uMilky, vec2(ra / 6.2831853, dec / 3.1415927 + 0.5)).r;
            // Star clouds and dust lanes on top of the baked contours
            float n = n3(e * 9.0) * 0.55 + n3(e * 23.0) * 0.3 + n3(e * 61.0) * 0.15;
            float lanes = smoothstep(0.35, 0.6, n3(e * 15.0 + 3.1));
            float v = mw * (0.5 + 0.9 * n) * mix(1.0, 0.55, lanes * smoothstep(0.15, 0.6, mw));
            // A wide faint glow along the galactic plane
            float b = dot(e, vec3(-0.8676661, -0.1980764, 0.4559838));
            v += 0.06 * exp(-b * b * 30.0);
            vec3 tint = mix(vec3(0.72, 0.8, 1.0), vec3(1.0, 0.9, 0.74), smoothstep(0.2, 0.8, mw));
            col += tint * pow(max(v, 0.0), 1.4) * uMilkyAmt * smoothstep(0.0, 0.3, d.y);
          }
          gl_FragColor = vec4(col, a);
          #include <tonemapping_fragment>
          #include <colorspace_fragment>
        }`});this.mesh=new G(e,t),this.mesh.frustumCulled=!1,this.mesh.renderOrder=-5}setMilkyWay(n){let r=new Xs(n.data,n.width,n.height,O,l);r.unpackAlignment=1,r.wrapS=e,r.wrapT=t,r.magFilter=r.minFilter=o,r.needsUpdate=!0,this.uniforms.uMilky.value=r}};function Pf(e,t){let n=4600*(1/(.92*e+1.7)+1/(.92*e+.62))/100,r=n<=66?255:329.7*(n-60)**-.1332,i=n<=66?99.47*Math.log(n)-161.1:288.1*(n-60)**-.0755,a=n>=66?255:n<=19?0:138.5*Math.log(n-10)-305,o=e=>Math.min(1,Math.max(0,e/255))*.6+.4;return t.setRGB(o(r),o(i),o(a),Fe)}var Ff=class{group=new Y;uniforms={uTime:{value:0},uLimit:{value:5.5},uFade:{value:0},uPixelRatio:{value:1}};points=null;constructor(){this.group.matrixAutoUpdate=!1,this.group.visible=!1}build(e){let t=e.ra.length,n=new Float32Array(t*3),r=new Float32Array(t*3),i=new Float32Array(t*2),a=new U;for(let o=0;o<t;o++){let t=Math.cos(e.dec[o]);n[o*3]=t*Math.cos(e.ra[o]),n[o*3+1]=t*Math.sin(e.ra[o]),n[o*3+2]=Math.sin(e.dec[o]),Pf(e.bv[o],a),r[o*3]=a.r,r[o*3+1]=a.g,r[o*3+2]=a.b,i[o*2]=e.mag[o],i[o*2+1]=Math.abs(Math.sin(o*12.9898)*43758.5453)%1}let o=new Ar;o.setAttribute(`position`,new br(n,3)),o.setAttribute(`color`,new br(r,3)),o.setAttribute(`aStar`,new br(i,2));let s=new Zr({uniforms:this.uniforms,transparent:!0,depthWrite:!1,fog:!1,blending:2,vertexShader:`
        attribute vec2 aStar;
        attribute vec3 color;
        uniform float uTime, uLimit, uFade, uPixelRatio;
        varying vec3 vColor;
        #include <common>
        #include <logdepthbuf_pars_vertex>
        void main() {
          vec4 wp = modelMatrix * vec4(position, 1.0);
          float alt = normalize(mat3(modelMatrix) * position).y;
          // Atmospheric extinction: about a quarter magnitude per airmass, much more at the horizon
          float airmass = 1.0 / (max(alt, 0.0) + 0.06);
          float mag = aStar.x + 0.2 * (airmass - 1.0);
          float flux = pow(10.0, -0.4 * mag);
          // Scintillation, stronger low in the sky
          float ph = aStar.y * 50.0;
          float tw = sin(uTime * (6.0 + aStar.y * 9.0) + ph) * 0.6 + sin(uTime * (17.0 + aStar.y * 13.0) + ph * 1.7) * 0.4;
          float vis = (1.0 - smoothstep(uLimit - 1.2, uLimit + 0.4, mag)) * uFade * smoothstep(-0.01, 0.06, alt);
          vColor = color * vis * min(1.6, 0.45 + 0.75 * pow(flux, 0.5)) * (1.0 + tw * mix(0.12, 0.4, 1.0 - alt));
          gl_PointSize = (1.3 + 2.1 * pow(min(flux, 6.0), 0.35)) * uPixelRatio;
          gl_Position = projectionMatrix * viewMatrix * wp;
          #include <logdepthbuf_vertex>
        }`,fragmentShader:`
        varying vec3 vColor;
        #include <common>
        #include <logdepthbuf_pars_fragment>
        void main() {
          #include <logdepthbuf_fragment>
          vec2 p = gl_PointCoord * 2.0 - 1.0;
          float r2 = dot(p, p);
          if (r2 > 1.0) discard;
          gl_FragColor = vec4(vColor * exp(-r2 * 3.5), 1.0);
          #include <tonemapping_fragment>
          #include <colorspace_fragment>
        }`});this.points=new wc(o,s),this.points.frustumCulled=!1,this.points.renderOrder=-4,this.group.add(this.points)}},If=class{mesh;uniforms={uSunDir:{value:new V(0,1,0)},uColor:{value:new U(1,1,1)},uEarthshine:{value:new U(0,0,0)},uCover:{value:1}};constructor(e){let t=new Zr({uniforms:this.uniforms,transparent:!0,depthWrite:!1,fog:!1,blending:5,blendSrc:201,blendDst:205,vertexShader:`
        varying vec2 vP;
        varying vec3 vRight, vUp, vBack;
        #include <common>
        #include <logdepthbuf_pars_vertex>
        void main() {
          vP = position.xy * 2.0;
          vRight = normalize(modelMatrix[0].xyz);
          vUp = normalize(modelMatrix[1].xyz);
          vBack = normalize(modelMatrix[2].xyz);
          gl_Position = projectionMatrix * viewMatrix * modelMatrix * vec4(position, 1.0);
          #include <logdepthbuf_vertex>
        }`,fragmentShader:`
        uniform vec3 uSunDir, uColor, uEarthshine;
        uniform float uCover;
        varying vec2 vP;
        varying vec3 vRight, vUp, vBack;
        #include <common>
        #include <logdepthbuf_pars_fragment>
        ${Mf}
        void main() {
          #include <logdepthbuf_fragment>
          float r2 = dot(vP, vP);
          float edge = 1.0 - smoothstep(0.86, 1.0, r2);
          if (edge <= 0.0) discard;
          float z = sqrt(max(1.0 - r2, 0.0));
          ${e?`
          vec3 N = normalize(vRight * vP.x + vUp * vP.y + vBack * z);
          float mu0 = dot(N, uSunDir);
          // Lunar soil scatters light back, so the full moon looks flat rather than shaded like a ball
          float lit = smoothstep(-0.04, 0.08, mu0) * mix(1.0, max(mu0, 0.0) / (max(mu0, 0.0) + z + 0.05) * 2.0, 0.5);
          // Darker maria
          vec2 q = vP * 1.6;
          float maria = smoothstep(0.48, 0.66, n3(vec3(q, 0.5)) * 0.65 + n3(vec3(q * 2.7, 4.1)) * 0.35);
          float albedo = 1.0 - 0.32 * maria;
          vec3 col = uColor * albedo * lit + uEarthshine * albedo * (1.0 - lit);
          gl_FragColor = vec4(col * edge, edge * uCover);`:`
          // Limb darkening
          vec3 col = uColor * (0.62 + 0.38 * z);
          gl_FragColor = vec4(col * edge, edge * uCover);`}
          #include <tonemapping_fragment>
          #include <colorspace_fragment>
        }`});this.mesh=new G(new _i(1,1),t),this.mesh.frustumCulled=!1,this.mesh.renderOrder=-3}place(e,t,n,r=1){this.mesh.position.copy(e).addScaledVector(t,jf),this.mesh.lookAt(e);let i=jf*n;this.mesh.scale.set(i,i*r,i)}},Lf=Math.PI/180,Rf={ra:192.859*Lf,dec:27.128*Lf},zf={ra:266.405*Lf,dec:-28.936*Lf},Bf=(e,t,n,r)=>Math.acos(Math.min(1,Math.max(-1,Math.sin(t)*Math.sin(r)+Math.cos(t)*Math.cos(r)*Math.cos(e-n))));function Vf(e,t){return Math.PI/2-Bf(e,t,Rf.ra,Rf.dec)}function Hf(e){let t=e>>>0||1;return()=>(t=t*1664525+1013904223>>>0)/4294967296}function Uf(e=2800,t=5.5){let n=Hf(2026),r=new Float32Array(e),i=new Float32Array(e),a=new Float32Array(e),o=new Float32Array(e);for(let s=0;s<e;){let e=n()*Math.PI*2,c=Math.asin(n()*2-1),l=Math.max(-1.4,t+2*Math.log10(Math.max(n(),1e-6))),u=Vf(e,c);l>3&&n()>.35+.65*Math.exp(-((u/.35)**2))||(r[s]=e,i[s]=c,a[s]=l,o[s]=Math.min(1.8,Math.max(-.25,.55+(n()+n()+n()-1.5)*.7)),s++)}let s=new Uint8Array(32768),c=Hf(7),l=Array.from({length:2048},()=>c()),u=(e,t)=>{let n=e*64,r=t*32,i=Math.floor(n),a=Math.floor(r),o=n-i,s=r-a,c=(e,t)=>l[(t%32+32)%32*64+(e%64+64)%64],u=o*o*(3-2*o),d=s*s*(3-2*s);return(c(i,a)*(1-u)+c(i+1,a)*u)*(1-d)+(c(i,a+1)*(1-u)+c(i+1,a+1)*u)*d};for(let e=0;e<128;e++){let t=((e+.5)/128-.5)*Math.PI;for(let n=0;n<256;n++){let r=(n+.5)/256*Math.PI*2,i=Vf(r,t),a=Bf(r,t,zf.ra,zf.dec),o=Math.exp(-((i/.16)**2))*(.4+.6*Math.exp(-((a/1)**2)))*(1-.55*Math.exp(-((i/.035)**2))*Math.exp(-((a/1.4)**2)))*(.65+.7*u(n/256,e/128));s[e*256+n]=Math.min(255,Math.round(o*255))}}return{ra:r,dec:i,mag:a,bv:o,milky:{width:256,height:128,data:s}}}var Wf=(e,t,n)=>{let r=Math.min(1,Math.max(0,(n-e)/(t-e)));return r*r*(3-2*r)},Gf=Math.PI/180,Kf=pf*Gf,qf=new Date(Date.now()+324e5).getUTCFullYear(),Jf=1.15*Gf,Yf=.9*Gf,Xf=new U(1,.97,.92),Zf=new U(1,.62,.32),Qf=new U(1,.46,.2),$f=new U(.6,.7,1),ep=new U(12375274),tp=new U(4085376),np=new U(15775888),rp=new U(5918784),ip=new U(1449e3),ap=new U(12570845),op=new U(14723202),sp=new U(726048),cp=new U(461847),lp=new U(1,.62,.28),up=new U(1,.34,.09),dp=new U(.7,.15,.09),fp=new U(.2,.06,.18),pp=new U(.018,.045,.15),mp=new U(.03,.055,.12),hp=new U(.012,.01,.009),gp=new U(2.6,2.2,1.7),_p=new U(2.2,.75,.16),vp=new U(1.5,.3,.06),yp=new U(1,.97,.9),bp=new U(1,.62,.36),xp=new U(.03,.04,.06),Sp=new U(.11,.12,.15),Cp=new U(6131648),wp=new U(660516),Tp=new U(997962),Ep=new U(132876),Dp=new V(.3,.8,-.5).normalize(),Op=new U,kp=new V,Ap=class{sky=new df;sun=new Tu(16777215,3);hemi=new mu(12375274,5918784,1);sunDir=new V;moonDir=new V(0,-1,0);moonPhase=0;moonLight=0;fog=new Es(13162208,12e-5);night=0;stars=new Ff;dome=new Nf;sunDisc=new If(!1);moonDisc=new If(!0);cloudShadows=!0;shadowSize=140;pmrem=null;envScene=new Ds;envSky=new df;envTarget=null;envSun=new V(0,-1,0);clouds;sunPos=xf(2451545);moonPos=wf(2451545);phase={fraction:0,age:0};horiz={alt:0,az:0};eq=Array(9);eqMat=new z;t0=performance.now();constructor(e){this.envSky.scale.setScalar(900),this.envScene.add(this.envSky),this.clouds=new jp,e.add(this.clouds.mesh),this.sky.scale.setScalar(45e3);let t=this.sky.material.uniforms;t.turbidity.value=4,t.rayleigh.value=1.6,t.mieCoefficient.value=.005,t.mieDirectionalG.value=.82,e.add(this.sky),e.add(this.hemi),this.sun.castShadow=!0,this.sun.shadow.mapSize.set(4096,4096);let n=this.sun.shadow.camera;n.left=-this.shadowSize,n.right=this.shadowSize,n.top=this.shadowSize,n.bottom=-this.shadowSize,n.near=10,n.far=2e3,this.applyShadowBias(),e.add(this.sun,this.sun.target),e.fog=this.fog,e.add(this.dome.mesh,this.stars.group,this.sunDisc.mesh,this.moonDisc.mesh);let r=Uf();this.stars.build(r),this.dome.setMilkyWay(r.milky)}setShadowQuality(e){let t=e?4096:2048;this.sun.shadow.mapSize.x!==t&&(this.sun.shadow.mapSize.set(t,t),this.sun.shadow.map?.dispose(),this.sun.shadow.map=null,this.applyShadowBias())}applyShadowBias(){let e=this.sun.shadow,t=this.shadowSize*2/e.mapSize.x;e.normalBias=Math.max(.12,t*3),e.bias=-(t+.25)/(e.camera.far-e.camera.near)}setShadowRange(e){let t=e>300?900:e>120?500:e>40?260:140;if(t===this.shadowSize)return;this.shadowSize=t;let n=this.sun.shadow.camera;n.left=-t,n.right=t,n.top=t,n.bottom=-t,n.far=2e3+t*2,n.updateProjectionMatrix(),this.applyShadowBias()}updateEnv(e,t){let n=this.night>.5?Dp:this.sunDir;if(this.envTarget&&n.angleTo(this.envSun)<.03)return;this.envSun.copy(n),this.pmrem??=new Vi(e);let r=this.envSky.material.uniforms,i=this.sky.material.uniforms;for(let e of[`turbidity`,`rayleigh`,`mieCoefficient`,`mieDirectionalG`])r[e].value=i[e].value;r.sunPosition.value.copy(this.sunDir),this.envScene.background=this.night>.6?new U(791588):null,this.envSky.visible=this.night<=.6;let a=this.envTarget;this.envTarget=this.pmrem.fromScene(this.envScene,0,1,2e3),t.environment=this.envTarget.texture,a?.dispose()}ephemeris(e,t,n){let r=gf(e,t,n),i=vf(r),a=xf(r,this.sunPos);Df(Ef(a.ra,a.dec,i,Kf,this.horiz),this.sunDir);let o=wf(r,this.moonPos),s=Ef(o.ra,o.dec,i,Kf,this.horiz);s.alt-=o.parallax*Math.cos(s.alt),Df(s,this.moonDir),this.moonPhase=Tf(a,o,this.phase).fraction,this.eqMat.fromArray(Of(i,Kf,this.eq))}update(e,t,n,r=80,i,a=qf){this.ephemeris(a,r,e);let o=this.sunDir.y;this.night=1-Wf(-.12,.05,o);let s=Wf(.35,.02,o)*(1-this.night),c=this.moonPhase**1.5,l=c*Wf(-.03,.25,this.moonDir.y);this.moonLight=c*Wf(-.02,.15,this.moonDir.y);let u=this.sky.material.uniforms;u.sunPosition.value.copy(this.sunDir),u.rayleigh.value=1.2+s*2,u.turbidity.value=4+s*3,u.mieCoefficient.value=.005+s*.004,this.sky.visible=this.night<.98;let d=this.night,f=d>.5?kp.set(this.moonDir.x,Math.max(this.moonDir.y,.2),this.moonDir.z).normalize():this.sunDir;this.sun.position.copy(t).addScaledVector(f,800),this.sun.target.position.copy(t),this.sun.target.updateMatrixWorld(),d>.5?this.sun.color.copy($f):this.sun.color.copy(Xf).lerp(Zf,s).lerp(Qf,Wf(.08,0,o)*(1-this.night)),this.sun.intensity=d>.5?(.12+.95*this.moonLight)*Wf(.5,1,d):3.2*Wf(-.02,.12,o);let p=this.shadowSize*2/this.sun.shadow.mapSize.x;this.sun.position.x=Math.round(this.sun.position.x/p)*p,this.sun.position.z=Math.round(this.sun.position.z/p)*p,this.hemi.color.copy(ep).lerp(tp,this.night).lerp(np,s*.4),this.hemi.groundColor.copy(rp).lerp(ip,this.night),this.hemi.intensity=((i?.9:2.2)-this.night*(i?.3:1))*(1-.15*this.night*(1-this.moonLight)),i&&(i.environmentIntensity=.2+.6*(1-this.night),this.updateEnv(n,i)),this.fog.color.copy(ap).lerp(op,s*.8).lerp(Op.copy(cp).lerp(sp,l),this.night),n.toneMappingExposure=.62+(1-this.night)*.08+this.night*.42,this.updateSky(t,o,l,n);let m=(performance.now()-this.t0)/1e3;this.clouds.update(t,this.sunDir,this.sun.color,this.night,this.fog.color,this.dome.uniforms.uGlow.value,1-Wf(-.15,-.04,o),Op.copy(Sp).multiplyScalar(l),m),this.sky.position.copy(t),this.updateHaze(o,s,m)}updateHaze(e,t,n){this.sunDir.toArray(Pd.sunDir);let r=Wf(-.08,.05,e);Op.copy(this.fog.color).multiplyScalar(.35*r*(1-.5*t));let i=this.dome.uniforms.uGlow.value,a=1.1*Wf(-.1,0,e);Pd.sunColor[0]=Op.r+i.r*a,Pd.sunColor[1]=Op.g+i.g*a,Pd.sunColor[2]=Op.b+i.b*a,Pd.params[1]=this.clouds.cover,Pd.params[2]=n,Pd.params[3]=this.cloudShadows?.65*Wf(.02,.2,e):0}updateSky(e,t,n,r){let i=this.dome.uniforms,a=i.uGlow.value;t>0?a.copy(lp).lerp(up,Wf(.18,0,t)).multiplyScalar(.45*Wf(.32,.03,t)):t>-.07?a.copy(up).lerp(dp,-t/.07).multiplyScalar(.45+.1*Wf(0,-.03,t)):a.copy(dp).lerp(fp,Wf(-.07,-.15,t)).multiplyScalar(.55*Wf(-.21,-.07,t)),i.uBlue.value.copy(pp).multiplyScalar(Wf(.01,-.04,t)*Wf(-.22,-.1,t)),i.uBelt.value=Wf(.06,0,t)*Wf(-.13,-.05,t),i.uSunDir.value.copy(this.sunDir),i.uMoonDir.value.copy(this.moonDir),i.uMoonSky.value.copy(mp).multiplyScalar(n*this.night),i.uNightGlow.value.copy(hp).multiplyScalar(this.night),i.uMilkyAmt.value=.1*Wf(-.17,-.3,t)*(1-n)*(1-n),i.uEq.value.copy(this.eqMat).transpose(),this.dome.mesh.position.copy(e),this.dome.mesh.visible=t<.33||this.night>0;let o=this.stars.uniforms;o.uTime.value=(performance.now()-this.t0)/1e3,o.uFade.value=Wf(.3,.95,this.night),o.uLimit.value=1+4.6*Wf(-.03,-.25,t)-1.8*n,o.uPixelRatio.value=r.getPixelRatio();let s=this.stars.group;s.visible=o.uFade.value>0,s.matrix.setFromMatrix3(this.eqMat).scale(kp.setScalar(Af)).setPosition(e),s.matrixWorldNeedsUpdate=!0;let c=this.sunDisc;c.mesh.visible=t>-.03&&t<.35,c.mesh.visible&&(c.uniforms.uColor.value.copy(gp).lerp(_p,Wf(.25,.02,t)).lerp(vp,Wf(.03,-.015,t)),c.uniforms.uCover.value=Wf(.35,.22,t),c.place(e,this.sunDir,Jf,1-.2*Wf(.08,0,t)));let l=this.moonDisc;l.mesh.visible=this.moonDir.y>-.03&&this.moonPhase>.01,l.mesh.visible&&(l.uniforms.uSunDir.value.copy(this.sunDir),l.uniforms.uColor.value.copy(bp).lerp(yp,Wf(0,.3,this.moonDir.y)).multiplyScalar(.4+1.1*this.night),l.uniforms.uEarthshine.value.copy(xp).multiplyScalar((1-this.moonPhase)*this.night),l.uniforms.uCover.value=this.night,l.place(e,this.moonDir,Yf))}skyColors(e){let t=this.night;e.uSkyColor.value.copy(Cp).lerp(wp,t),e.uHorizon.value.copy(this.fog.color),t>.5?e.uSunColor.value.copy($f).multiplyScalar(.7*this.moonLight):e.uSunColor.value.copy(this.sun.color),e.uSunDir.value.copy(t>.5?this.moonDir:this.sunDir),e.uDeep.value.copy(Tp).lerp(Ep,t)}},jp=class{mesh;uniforms={uTime:{value:0},uSunDir:{value:new V},uSunColor:{value:new U},uNight:{value:0},uCover:{value:.5},uFog:{value:new U},uGlow:{value:new U},uDark:{value:0},uMoon:{value:new U}};get cover(){return this.uniforms.uCover.value}constructor(){let e=Math.floor(Date.now()/864e5);this.uniforms.uCover.value=.38+(Math.sin(e*12.9898)*43758.5453%1+1)%1*.3;let t=new Yl(3e4,32,16),n=new Zr({uniforms:this.uniforms,side:1,transparent:!0,depthWrite:!1,fog:!1,vertexShader:`
        varying vec3 vDir;
        #include <common>
        #include <logdepthbuf_pars_vertex>
        void main() {
          vec4 wp = modelMatrix * vec4(position, 1.0);
          vDir = wp.xyz - cameraPosition;
          gl_Position = projectionMatrix * viewMatrix * wp;
          #include <logdepthbuf_vertex>
        }`,fragmentShader:`
        uniform float uTime, uNight, uCover;
        uniform float uDark;
        uniform vec3 uSunDir, uSunColor, uFog, uGlow, uMoon;
        varying vec3 vDir;
        #include <common>
        #include <logdepthbuf_pars_fragment>
        ${Fd}
        void main() {
          #include <logdepthbuf_fragment>
          vec3 d = normalize(vDir);
          if (d.y < 0.01) discard;
          // The layer is anchored to the world (so the shadows it casts can be looked up at the same place)
          vec2 xz = cameraPosition.xz + d.xz / d.y * ${Ad.toFixed(1)};
          vec2 q = (xz + vec2(${Md[0].toFixed(1)}, ${Md[1].toFixed(1)}) * uTime) / ${jd.toFixed(1)};
          float base = hzFbm(q);
          float c = smoothstep(uCover, uCover + ${Nd.toFixed(2)}, base);
          if (c < 0.01) discard;
          // Shade using the density toward the sun
          float toward = hzFbm(q + uSunDir.xz * 0.12);
          float light = clamp(0.55 + (base - toward) * 3.0, 0.15, 1.0);
          vec3 lit = mix(vec3(0.62, 0.66, 0.72), vec3(1.0), light) * mix(uSunColor, vec3(1.0), 0.35);
          vec3 col = mix(lit, vec3(0.06, 0.07, 0.1), uNight);
          // Around sunset the clouds are lit from below by the low sun: brightest toward it, with warm rims
          vec2 dh = normalize(d.xz + vec2(1e-5));
          vec2 sh = normalize(uSunDir.xz + vec2(1e-5));
          float facing = pow(max(dot(dh, sh) * 0.5 + 0.5, 0.0), 2.0);
          float under = (0.35 + 1.3 * facing) * mix(1.0, 0.6, light) + (1.0 - light) * facing * 0.6;
          float glowAmt = clamp(dot(uGlow, vec3(1.2)), 0.0, 1.0) * (1.0 - uDark);
          col = mix(col, uGlow * 2.2 * under + vec3(0.03, 0.03, 0.05), glowAmt);
          // Silvered by moonlight at night
          col += uMoon * (0.5 + 0.8 * light) * uNight;
          // Fade into haze near the horizon
          float horizon = smoothstep(0.01, 0.2, d.y);
          col = mix(uFog, col, horizon);
          gl_FragColor = vec4(col, c * horizon * 0.92);
          #include <tonemapping_fragment>
          #include <colorspace_fragment>
        }`});this.mesh=new G(t,n),this.mesh.frustumCulled=!1,this.mesh.renderOrder=-1}update(e,t,n,r,i,a,o,s,c){this.mesh.position.copy(e),this.uniforms.uTime.value=c,this.uniforms.uSunDir.value.copy(t),this.uniforms.uSunColor.value.copy(n),this.uniforms.uNight.value=r,this.uniforms.uFog.value.copy(i),this.uniforms.uGlow.value.copy(a),this.uniforms.uDark.value=o,this.uniforms.uMoon.value.copy(s)}},Mp=20,Np=Math.ceil(Bu/Mp),Pp=Math.ceil(Vu/Mp);function Fp(e,t,n,r,i){let a=Math.max(0,Math.floor((e-Hu)/Mp)),o=Math.min(Np-1,Math.floor((n-Hu)/Mp)),s=Math.max(0,Math.floor((t-Uu)/Mp)),c=Math.min(Pp-1,Math.floor((r-Uu)/Mp));for(let e=s;e<=c;e++)for(let t=a;t<=o;t++)i(e*Np+t)}var Ip=class{hm;buildings;tops;bottoms;bridges;grid=new Map;bridgeGrid=new Map;platforms=[];constructor(e,t,n,r,i){this.hm=e,this.buildings=t,this.tops=n,this.bottoms=r,this.bridges=i,t.forEach((e,t)=>{let n=1/0,r=1/0,i=-1/0,a=-1/0;for(let t=0;t<e.pts.length;t+=2)n=Math.min(n,e.pts[t]),i=Math.max(i,e.pts[t]),r=Math.min(r,e.pts[t+1]),a=Math.max(a,e.pts[t+1]);Fp(n,r,i,a,e=>{this.grid.has(e)||this.grid.set(e,[]),this.grid.get(e).push(t)})});for(let e=0;e<i.length;e+=7){let t=i[e+6];Fp(Math.min(i[e],i[e+3])-t,Math.min(i[e+1],i[e+4])-t,Math.max(i[e],i[e+3])+t,Math.max(i[e+1],i[e+4])+t,t=>{this.bridgeGrid.has(t)||this.bridgeGrid.set(t,[]),this.bridgeGrid.get(t).push(e)})}}ground(e,t,n,r=1.2){let i=this.hm.height(e,t),a=null,o=!1,s=Math.floor((t-Uu)/Mp)*Np+Math.floor((e-Hu)/Mp),c=this.bridgeGrid.get(s);if(c){let a=this.bridges;for(let s of c){let c=a[s],l=a[s+1],u=a[s+2],d=a[s+3],f=a[s+4],p=a[s+5],m=a[s+6],h=d-c,g=f-l,_=h*h+g*g||1,v=Math.max(0,Math.min(1,((e-c)*h+(t-l)*g)/_));if(Math.hypot(e-(c+h*v),t-(l+g*v))>m)continue;let y=u+(p-u)*v;y>i&&y<=n+r&&(i=y,o=!0)}}for(let o of this.platforms){let s=o.heightAt(e,t);s!==null&&s>i&&s<=n+r&&(i=s,a=o)}return{h:i,platform:a,bridge:o}}resolve(e,t,n,r,i){for(let a=0;a<3;a++){let a=!1,o=new Set;if(Fp(e-r,t-r,e+r,t+r,s=>{let c=this.grid.get(s);if(c)for(let s of c){if(o.has(s)||(o.add(s),this.tops[s]<=n+.4||this.bottoms[s]>=n+i))continue;let c=this.buildings[s].pts,l=c.length/2,u=1/0,d=0,f=0,p=!1;for(let n=0,r=l-1;n<l;r=n++){let i=c[n*2],a=c[n*2+1],o=c[r*2],s=c[r*2+1];a>t!=s>t&&e<(o-i)*(t-a)/(s-a)+i&&(p=!p);let l=o-i,m=s-a,h=l*l+m*m||1,g=Math.max(0,Math.min(1,((e-i)*l+(t-a)*m)/h)),_=i+l*g,v=a+m*g,y=Math.hypot(e-_,t-v);y<u&&(u=y,d=_,f=v)}if(!p&&u>=r)continue;let m=u||1e-4,h=(e-d)/m,g=(t-f)/m;p&&(h=-h,g=-g);let _=p?u+r:r-u;e+=h*_,t+=g*_,a=!0}}),!a)break}return[e,t]}insideBuilding(e,t){let[n,r]=this.resolve(e,t,this.hm.height(e,t),.01,1.7);return n!==e||r!==t}findFree(e,t,n=40){if(!this.insideBuilding(e,t))return[e,t];for(let r=2;r<=n;r+=2)for(let n=0;n<16;n++){let i=e+Math.cos(n/16*Math.PI*2)*r,a=t+Math.sin(n/16*Math.PI*2)*r;if(this.hm.height(i,a)>.3&&!this.insideBuilding(i,a))return[i,a]}return[e,t]}},Lp=class{canvas;keys=new Set;pressed=new Set;lookX=0;lookY=0;stickX=0;stickY=0;locked=!1;touch=!1;wheel=0;vertical=0;stickRun=!1;pinchAcc=0;dragging=!1;dragDistance=0;onLockChange=null;constructor(e){this.canvas=e,window.addEventListener(`keydown`,e=>{e.repeat||(this.keys.add(e.code),this.pressed.add(e.code),[`Space`,`Tab`].includes(e.code)&&e.preventDefault())}),window.addEventListener(`keyup`,e=>this.keys.delete(e.code)),window.addEventListener(`blur`,()=>this.keys.clear()),e.addEventListener(`mousedown`,e=>{e.button!==0||this.locked||(this.dragging=!0,this.dragDistance=0)}),window.addEventListener(`mouseup`,()=>{this.dragging=!1}),window.addEventListener(`mousemove`,e=>{(this.locked||this.dragging)&&(this.lookX+=e.movementX,this.lookY+=e.movementY,this.dragging&&(this.dragDistance+=Math.abs(e.movementX)+Math.abs(e.movementY)))}),document.addEventListener(`pointerlockchange`,()=>{this.locked=document.pointerLockElement===e,this.onLockChange?.(this.locked)}),e.addEventListener(`wheel`,e=>{e.preventDefault(),this.wheel+=Math.sign(e.deltaY)},{passive:!1}),this.setupTouch()}lock(){this.touch||this.canvas.requestPointerLock?.()}unlock(){document.pointerLockElement&&document.exitPointerLock()}hit(e){return this.pressed.delete(e)}press(e){this.pressed.add(e)}endFrame(){this.pressed.clear(),this.lookX=0,this.lookY=0,this.wheel=0}axis(e,t){let n=0;return e.some(e=>this.keys.has(e))&&--n,t.some(e=>this.keys.has(e))&&(n+=1),n}setupTouch(){let e=document.getElementById(`stick`),t=document.getElementById(`knob`),n=null,r=null,i=0,a=0,o=()=>{let t=e.getBoundingClientRect();return[t.left+t.width/2,t.top+t.height/2,t.width/2]},s=n=>{let[r,i,a]=o(),s=(n.clientX-r)/a,c=(n.clientY-i)/a,l=Math.hypot(s,c);l>1&&(s/=l,c/=l);let u=.12,d=l<u?0:Math.min(1,(l-u)/.88)/Math.max(l,1e-6);this.stickX=s*d,this.stickY=c*d,this.stickRun=l>.96,e.classList.toggle(`run`,this.stickRun),t.style.transform=`translate(${s*a*.6}px, ${c*a*.6}px)`},c=new Map,l=0,u=()=>{let[e,t]=[...c.values()],n=Math.hypot(e.x-t.x,e.y-t.y);if(l)for(this.pinchAcc+=(l-n)/40;Math.abs(this.pinchAcc)>=1;){let e=Math.sign(this.pinchAcc);this.wheel+=e,this.pinchAcc-=e}l=n};e.addEventListener(`touchstart`,e=>{e.preventDefault(),this.touch=!0,n=e.changedTouches[0].identifier,s(e.changedTouches[0])},{passive:!1}),this.canvas.addEventListener(`touchstart`,e=>{this.touch=!0,document.getElementById(`touch`).classList.remove(`hidden`);for(let t of Array.from(e.changedTouches))c.set(t.identifier,{x:t.clientX,y:t.clientY}),r===null&&(r=t.identifier,i=t.clientX,a=t.clientY);c.size===2&&(l=0)},{passive:!0}),window.addEventListener(`touchmove`,e=>{for(let t of Array.from(e.changedTouches))t.identifier===n&&s(t),c.has(t.identifier)&&c.set(t.identifier,{x:t.clientX,y:t.clientY}),t.identifier===r&&c.size<2&&(this.lookX+=(t.clientX-i)*2.2,this.lookY+=(t.clientY-a)*2.2,i=t.clientX,a=t.clientY);c.size===2&&u()},{passive:!0});let d=o=>{for(let s of Array.from(o.changedTouches))if(s.identifier===n&&(n=null,this.stickX=this.stickY=0,this.stickRun=!1,e.classList.remove(`run`),t.style.transform=``),c.delete(s.identifier),s.identifier===r){r=null;let[e]=c.entries();e&&(r=e[0],i=e[1].x,a=e[1].y)}c.size<2&&(l=0)};window.addEventListener(`touchend`,d),window.addEventListener(`touchcancel`,d);for(let e of Array.from(document.querySelectorAll(`#touch-buttons button, #prompt`))){let t=e.dataset.key;e.addEventListener(`touchstart`,e=>{e.preventDefault(),this.keys.add(t),this.pressed.add(t)},{passive:!1}),e.addEventListener(`touchend`,()=>this.keys.delete(t)),e.addEventListener(`touchcancel`,()=>this.keys.delete(t))}}};function Rp(e,t=!1){let n=e[0].index!==null,r=new Set(Object.keys(e[0].attributes)),i=new Set(Object.keys(e[0].morphAttributes)),a={},o={},s=e[0].morphTargetsRelative,c=new Ar,l=0;for(let u=0;u<e.length;++u){let d=e[u],f=0;if(n!==(d.index!==null))return console.error(`THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index `+u+`. All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them.`),null;for(let e in d.attributes){if(!r.has(e))return console.error(`THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index `+u+`. All geometries must have compatible attributes; make sure "`+e+`" attribute exists among all geometries, or in none of them.`),null;a[e]===void 0&&(a[e]=[]),a[e].push(d.attributes[e]),f++}if(f!==r.size)return console.error(`THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index `+u+`. Make sure all geometries have the same number of attributes.`),null;if(s!==d.morphTargetsRelative)return console.error(`THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index `+u+`. .morphTargetsRelative must be consistent throughout all geometries.`),null;for(let e in d.morphAttributes){if(!i.has(e))return console.error(`THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index `+u+`.  .morphAttributes must be consistent throughout all geometries.`),null;o[e]===void 0&&(o[e]=[]),o[e].push(d.morphAttributes[e])}if(t){let e;if(n)e=d.index.count;else if(d.attributes.position!==void 0)e=d.attributes.position.count;else return console.error(`THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index `+u+`. The geometry must have either an index or a position attribute`),null;c.addGroup(l,e,u),l+=e}}if(n){let t=0,n=[];for(let r=0;r<e.length;++r){let i=e[r].index;for(let e=0;e<i.count;++e)n.push(i.getX(e)+t);t+=e[r].attributes.position.count}c.setIndex(n)}for(let e in a){let t=zp(a[e]);if(!t)return console.error(`THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the `+e+` attribute.`),null;c.setAttribute(e,t)}for(let e in o){let t=o[e][0].length;if(t===0)break;c.morphAttributes=c.morphAttributes||{},c.morphAttributes[e]=[];for(let n=0;n<t;++n){let t=[];for(let r=0;r<o[e].length;++r)t.push(o[e][r][n]);let r=zp(t);if(!r)return console.error(`THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the `+e+` morphAttribute.`),null;c.morphAttributes[e].push(r)}}return c}function zp(e){let t,n,r,i=-1,a=0;for(let o=0;o<e.length;++o){let s=e[o];if(t===void 0&&(t=s.array.constructor),t!==s.array.constructor)return console.error(`THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes.`),null;if(n===void 0&&(n=s.itemSize),n!==s.itemSize)return console.error(`THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes.`),null;if(r===void 0&&(r=s.normalized),r!==s.normalized)return console.error(`THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes.`),null;if(i===-1&&(i=s.gpuType),i!==s.gpuType)return console.error(`THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes.`),null;a+=s.count*n}let o=new t(a),s=new br(o,n,r),c=0;for(let t=0;t<e.length;++t){let r=e[t];if(r.isInterleavedBufferAttribute){let e=c/n;for(let t=0,i=r.count;t<i;t++)for(let i=0;i<n;i++){let n=r.getComponent(t,i);s.setComponent(t+e,i,n)}}else o.set(r.array,c);c+=r.count*n}return i!==void 0&&(s.gpuType=i),s}function Bp(e,t){let n=new Float32Array(e.x.length);for(let t=1;t<e.x.length;t++)n[t]=n[t-1]+Math.hypot(e.x[t]-e.x[t-1],e.z[t]-e.z[t-1]);return n[n.length-1]<60?null:{d:e,s:n,offset:Math.max(1.4,t/4)}}function Vp(e,t,n,r){let i=e.s,a=i[i.length-1];t=Math.max(0,Math.min(a,t));let o=0,s=i.length-1;for(;s-o>1;){let e=o+s>>1;i[e]<=t?o=e:s=e}let c=(t-i[o])/(i[s]-i[o]||1),l=e.d,u=l.x[s]-l.x[o],d=l.z[s]-l.z[o],f=Math.hypot(u,d)||1;return u=u/f*n,d=d/f*n,r.x=l.x[o]+(l.x[s]-l.x[o])*c+d*e.offset,r.z=l.z[o]+(l.z[s]-l.z[o])*c-u*e.offset,r.y=l.y[o]+(l.y[s]-l.y[o])*c,r.yaw=Math.atan2(u,d),r}var Hp=[15921904,15921904,13225168,1842464,10099483,2837114,15262415,6122322,15921904,9080726],Up=class{lanes;count;group=new Y;body;parts;cars=[];near=[];nearTimer=0;lightMat;tailMat;constructor(e,t=50){this.lanes=e,this.count=t;let n=Gp();this.body=new ac(n.body,new Z({roughness:.3,metalness:.35}),t);let r=new ac(n.glass,new Z({color:1778219,roughness:.08,metalness:.6}),t),i=new ac(n.tyres,new Z({color:1710618,roughness:.9}),t),a=new ac(n.trim,new Z({color:12106944,roughness:.3,metalness:.8}),t);this.lightMat=new Z({color:16777215,emissive:16773840,emissiveIntensity:0}),this.tailMat=new Z({color:6689041,emissive:16719888,emissiveIntensity:.2});let o=new ac(n.lights,this.lightMat,t),s=new ac(n.tail,this.tailMat,t),c=new U;for(let e=0;e<t;e++)this.body.setColorAt(e,c.set(Hp[e%Hp.length]));this.parts=[this.body,r,i,a,o,s];for(let e of this.parts)e.castShadow=e===this.body||e===r,e.frustumCulled=!1,e.count=0,this.group.add(e)}spawn(e,t,n){if(!this.near.length)return null;let r=this.near[Math.floor(Math.random()*this.near.length)],i=this.lanes[r],a=i.s[i.s.length-1],o=e??{};o.lane=r,o.dir=Math.random()<.5?1:-1;let s=0,c=1/0;for(let e=0;e<i.d.x.length;e+=4){let r=Math.hypot(i.d.x[e]-t,i.d.z[e]-n)+Math.random()*300;r<c&&(c=r,s=i.s[e])}return o.t=s,o.speed=9+Math.random()*7,o.len=a,o}update(e,t,n,r){for(this.nearTimer-=e,this.nearTimer<=0&&(this.nearTimer=2,this.near=[],this.lanes.forEach((e,r)=>{for(let i=0;i<e.d.x.length;i+=6)if(Math.hypot(e.d.x[i]-t,e.d.z[i]-n)<900){this.near.push(r),e.s[e.s.length-1]>500&&this.near.push(r);break}}));this.cars.length<this.count&&this.near.length;){let e=this.spawn(null,t,n);if(!e)break;this.cars.push(e)}let i={x:0,y:0,z:0,yaw:0},a=new H,o=new Kt,s=new V(1,1,1),c=new V,l=new V(0,1,0),u=0;for(let r of this.cars){r.t+=r.speed*r.dir*e,(r.t<0||r.t>r.len)&&this.spawn(r,t,n),Vp(this.lanes[r.lane],r.t,r.dir,i),Math.hypot(i.x-t,i.z-n)>1100&&(this.spawn(r,t,n),Vp(this.lanes[r.lane],r.t,r.dir,i)),c.set(i.x,i.y,i.z),o.setFromAxisAngle(l,i.yaw),a.compose(c,o,s);for(let e of this.parts)e.setMatrixAt(u,a);u++}for(let e of this.parts)e.count=u,e.instanceMatrix.needsUpdate=!0;this.lightMat.emissiveIntensity=r*4,this.tailMat.emissiveIntensity=.3+r*3}};function Wp(e,t,n){return new Hl(new ol(e.map(([e,t])=>new R(e,t))),{depth:t-2*n,bevelEnabled:!0,bevelThickness:n,bevelSize:n,bevelSegments:3,curveSegments:10}).rotateY(-Math.PI/2).translate(t/2-n,0,0)}function Gp(){let e=new ol;e.moveTo(-2.1,.3),e.lineTo(-1.74,.3),e.absarc(-1.33,.32,.41,Math.PI,0,!0),e.lineTo(.94,.3),e.absarc(1.35,.32,.41,Math.PI,0,!0),e.lineTo(1.98,.3),e.quadraticCurveTo(2.16,.32,2.15,.52),e.quadraticCurveTo(2.14,.76,1.85,.84),e.lineTo(.85,.95),e.lineTo(-1.62,.98),e.quadraticCurveTo(-2.1,.98,-2.14,.78),e.quadraticCurveTo(-2.16,.4,-2.1,.3);let t=new Hl(e,{depth:1.62,bevelEnabled:!0,bevelThickness:.04,bevelSize:.04,bevelSegments:3,curveSegments:10});t.rotateY(-Math.PI/2).translate(.81,0,0);let n=Rp([t,Wp([[.22,1.39],[-1,1.42],[-1.04,1.47],[.16,1.45]],1.36,.03)]),r=Rp([Wp([[.86,.94],[.2,1.41],[-1,1.44],[-1.62,.97]],1.44,.04),new K(.9,.16,.05).translate(0,.58,2.2).toNonIndexed()]),i=[],a=[];for(let e of[-.74,.74])for(let t of[-1.33,1.35])i.push(new X(.31,.31,.2,18).rotateZ(Math.PI/2).translate(e,.31,t)),a.push(new X(.19,.19,.21,12).rotateZ(Math.PI/2).translate(e*1.01,.31,t));for(let e of[2.19,-2.19])a.push(new K(1.6,.08,.08).translate(0,.36,e));for(let e of[-.85,.85])for(let t of[.25,-.75])a.push(new K(.03,.03,.16).translate(e,.88,t));let o=(e,t,n,r,i)=>new K(r,i,.06).translate(e,t,n);return{body:n,glass:r,tyres:Rp(i),trim:Rp(a),lights:Rp([o(-.58,.72,2.17,.34,.12),o(.58,.72,2.17,.34,.12)]),tail:Rp([o(-.66,.84,-2.2,.28,.14),o(.66,.84,-2.2,.28,.14)])}}var Kp=[15921386,3095378,7043674,12101002,9059131,4013373,14272419,5926794,15262416],qp=[2830138,4866102,1973794,6055024,7035722],Jp=[1709844,2761244,3878693,9209728,12433069],Yp=[15254688,14266508,15782580,13213050],Xp=[2762018,15263456,5916214,1974832],Zp=[.09,.88],Qp=[.215,1.4];function $p(e){let t=(e,t)=>new nl(e.map(([e,t])=>new R(e,t)),t);return{torso:t([[.001,.86],[.15,.87],[.155,.98],[.145,1.08],[.165,1.25],[.19,1.36],[.17,1.43],[.1,1.47],[.05,1.48]],16).scale(1,1,.62),pelvis:t([[.001,.8],[.13,.81],[.158,.88],[.152,.98]],16).scale(1,1,.68),head:Rp([new X(.045,.052,.12,10).translate(0,1.5,0).toNonIndexed(),new Yl(.104,18,14).scale(.9,1.08,1).translate(0,1.62,.006*e).toNonIndexed()]),hair:new Yl(.112,18,10,0,Math.PI*2,0,Math.PI*.56).scale(.94,1.05,1.04).translate(0,1.635,-.012*e),leg:new X(.07,.05,.8,12).translate(0,-.42,0),shoe:new Yl(.06,12,8).scale(.85,.6,2).translate(0,-.84,.045*e),arm:new X(.05,.038,.56,10).translate(0,-.28,0),hand:new Yl(.042,10,8).scale(.8,1.3,1).translate(0,-.6,0)}}var em=class{lanes;count;group=new Y;parts=[];walkers=[];near=[];nearTimer=0;constructor(e,t=40){this.lanes=e,this.count=t;let n=new Z({roughness:.85}),r=(e,r,i,a)=>{let o=new ac(e,n,t);if(o.castShadow=!0,o.frustumCulled=!1,o.count=0,a){let e=new U;for(let n=0;n<t;n++)o.setColorAt(n,e.set(a[(n*7+a.length)%a.length]))}this.group.add(o),this.parts.push({mesh:o,pivot:new V(...r),local:new H,swing:i})},i=$p(1),[a,o]=Zp,[s,c]=Qp;r(i.torso,[0,0,0],0,Kp),r(i.pelvis,[0,0,0],0,qp),r(i.head,[0,0,0],0,Yp),r(i.hair,[0,0,0],0,Jp);for(let e of[-1,1])r(i.leg,[e*a,o,0],e,qp),r(i.shoe,[e*a,o,0],e,Xp),r(i.arm,[e*s,c,0],-.8*e,Kp),r(i.hand,[e*s,c,0],-.8*e,Yp)}spawn(e,t,n){if(!this.near.length)return null;let r=this.near[Math.floor(Math.random()*this.near.length)],i=this.lanes[r],a=i.s,o=0,s=1/0;for(let e=0;e<i.d.x.length;e+=2){let r=Math.hypot(i.d.x[e]-t,i.d.z[e]-n)+Math.random()*120;r<s&&(s=r,o=a[e])}let c=e??{};return c.lane=r,c.t=o,c.dir=Math.random()<.5?1:-1,c.speed=1+Math.random()*.5,c.side=(Math.random()-.5)*.8,c.phase=Math.random()*10,c.scale=.9+Math.random()*.16,c}update(e,t,n){for(this.nearTimer-=e,this.nearTimer<=0&&(this.nearTimer=3,this.near=[],this.lanes.forEach((e,r)=>{for(let i=0;i<e.d.x.length;i+=4)if(Math.hypot(e.d.x[i]-t,e.d.z[i]-n)<260){this.near.push(r);break}}));this.walkers.length<this.count&&this.near.length;){let e=this.spawn(null,t,n);if(!e)break;this.walkers.push(e)}let r={x:0,y:0,z:0,yaw:0},i=new H,a=new H,o=new Kt,s=new H,c=new V(0,1,0),l=new V,u=new V,d=0;for(let f of this.walkers){let p=this.lanes[f.lane],m=p.s[p.s.length-1];f.t+=f.speed*f.dir*e,f.phase+=f.speed*e*3.2,(f.t<0||f.t>m)&&this.spawn(f,t,n);let h=p.offset;p.offset=f.side,Vp(p,f.t,f.dir,r),p.offset=h,Math.hypot(r.x-t,r.z-n)>320&&(this.spawn(f,t,n),Vp(p,f.t,f.dir,r)),l.set(r.x,r.y-.05,r.z),o.setFromAxisAngle(c,r.yaw),u.setScalar(f.scale),i.compose(l,o,u);let g=Math.sin(f.phase)*.55;for(let e of this.parts)e.swing?(a.makeRotationX(g*e.swing).setPosition(e.pivot),s.multiplyMatrices(i,a)):s.copy(i),e.mesh.setMatrixAt(d,s);d++}for(let e of this.parts)e.mesh.count=d,e.mesh.instanceMatrix.needsUpdate=!0}},tm=[`position`,`normal`,`uv`],nm=class{parts=new Map;m=new H;q=new Kt;e=new Mn;add(e,t,n=0,r=0,i=0,a=0,o=0,s=0){return this.q.setFromEuler(this.e.set(o,a,s,`YXZ`)),this.addMatrix(e,t,this.m.compose(new V(n,r,i),this.q,new V(1,1,1)))}addMatrix(e,t,n){let r=e.index?e.toNonIndexed():e.clone();for(let e of Object.keys(r.attributes))tm.includes(e)||r.deleteAttribute(e);r.attributes.uv||r.setAttribute(`uv`,new br(new Float32Array(r.attributes.position.count*2),2)),r.clearGroups(),r=r.applyMatrix4(n);let i=this.parts.get(t)??[];return i.push(r),this.parts.set(t,i),this}beam(e,t,n,r,i){let a=new V().copy(e),o=new V().copy(t),s=a.distanceTo(o),c=new Yn;return c.position.copy(a).lerp(o,.5),c.lookAt(o),c.updateMatrix(),this.addMatrix(new K(n,r,s),i,c.matrix)}rod(e,t,n,r,i=8){let a=new V().copy(e),o=new V().copy(t),s=new Yn;return s.position.copy(a).lerp(o,.5),s.quaternion.setFromUnitVectors(new V(0,1,0),o.clone().sub(a).normalize()),s.updateMatrix(),this.addMatrix(new X(n,n,a.distanceTo(o),i),r,s.matrix)}build(e=!0,t=!0){let n=new Y;for(let[r,i]of this.parts){let a=new G(Rp(i),r);a.castShadow=e,a.receiveShadow=t,n.add(a);for(let e of i)e.dispose()}return this.parts.clear(),n}};function rm(e,t,n,r,i){let a=[],o=[],s=[];for(let i=0;i<=e;i++)for(let s=0;s<=t;s++)a.push(...n(i/e,s/t)),o.push(...r(i/e,s/t));for(let n=0;n<e;n++)for(let e=0;e<t;e++){let r=n*(t+1)+e,i=r+1,a=r+t+1,o=a+1;s.push(r,i,o,r,o,a)}let c=new Ar;c.setAttribute(`position`,new W(a,3)),c.setAttribute(`uv`,new W(o,2)),c.setIndex(s);let l=Math.floor(e/2),u=Math.floor(t/2),d=e=>new V(a[e*3],a[e*3+1],a[e*3+2]),f=l*(t+1)+u,p=d(f),m=d(f+1),h=d(f+t+2),g=m.clone().sub(p).cross(h.clone().sub(p)),_=i([p.x,p.y,p.z]);if(g.x*_[0]+g.y*_[1]+g.z*_[2]<0){for(let e=0;e<s.length;e+=3)[s[e+1],s[e+2]]=[s[e+2],s[e+1]];c.setIndex(s)}return c.computeVertexNormals(),c}function im(e){let{w:t,d:n,h:r}=e,i=e.gable??1,a=e.lift??0,o=e.curve??1.6,s=e.thick??.2,c=i<1?e.verge??0:0,l=t/2,u=n/2,d=l-i*u,f=e=>r*e**+o,p=(e,t,n,r)=>{let i=r*r*r*(1-n)*(1-n),o=1+.025*i;return[e*o,f(n)+a*i,t*o]},m=[],h=[],g=()=>[0,1,0],_=()=>[0,-1,0],v=e=>[e[0],0,e[2]],y=[];for(let e of[-1,1])i>0&&y.push({s0:0,s1:i,at:(t,n)=>{let r=l-t*u;return p((2*n-1)*r,e*u*(1-t),t,Math.abs(2*n-1))},u:(e,t)=>(2*t-1)*(l-e*u)}),i<1&&y.push({s0:i,s1:1,at:(t,n)=>p((2*n-1)*(d+c),e*u*(1-t),t,Math.abs(2*n-1)),u:(e,t)=>(2*t-1)*(d+c)}),i>0&&y.push({s0:0,s1:i,at:(t,n)=>p(e*(l-t*u),(2*n-1)*u*(1-t),t,Math.abs(2*n-1)),u:(e,t)=>(2*t-1)*u*(1-e)});let b=Math.min(1,(e.overhang??0)/u);for(let e of y){let t=t=>e.s0+(e.s1-e.s0)*t;m.push(rm(10,16,(n,r)=>e.at(t(n),r),(n,r)=>[e.u(t(n),r),t(n)*u],g));let n=Math.min(e.s1,b);if(n>e.s0){let t=t=>e.s0+(n-e.s0)*t;h.push(rm(4,16,(n,r)=>{let i=e.at(t(n),r);return[i[0],i[1]-s,i[2]]},(n,r)=>[e.u(t(n),r),t(n)*u],_))}if(e.s0===0&&h.push(rm(1,16,(t,n)=>{let r=e.at(0,n);return[r[0],r[1]-t*s,r[2]]},(t,n)=>[e.u(0,n),t*s],v)),e.s0===i&&i<1)for(let n of[0,1])h.push(rm(10,1,(r,i)=>{let a=e.at(t(r),n);return[a[0],a[1]-i*s,a[2]]},(e,n)=>[t(e)*u,n*s],v))}if(i<1){let e=u*(1-i);for(let t of[-1,1])h.push(rm(1,16,(n,r)=>{let a=(2*r-1)*e,o=1-Math.abs(a)/u,s=p(d,a,o,d/(d+c||1))[1]-.04;return[t*(d-.05),f(i)+(s-f(i))*n,a]},(t,n)=>[(2*n-1)*e,t],()=>[t,0,0]))}if(e.rafters&&b>0){let t=e.rafters*.35,n=b<=i?l-b*u:Math.min(l-b*u,d+c);for(let r of[-1,1])for(let a=-n;a<=n+1e-6;a+=e.rafters){let e=e=>{let t=i>=e?l-e*u:d+c;return p(a,r*u*(1-e),e,Math.abs(a)/t)},n=e(.02),o=e(b),f=new K(t,t,Math.hypot(n[0]-o[0],n[1]-o[1],n[2]-o[2])),m=new Yn;m.position.set((n[0]+o[0])/2,(n[1]+o[1])/2-s-t/2,(n[2]+o[2])/2),m.lookAt(o[0],o[1]-s-t/2,o[2]),m.updateMatrix(),h.push(f.applyMatrix4(m.matrix))}if(i>0)for(let n of[-1,1])for(let r=-(u-b*u);r<=u-b*u+1e-6;r+=e.rafters){let e=e=>p(n*(l-e*u),r,e,Math.abs(r)/(u*(1-e))),i=e(.02),a=e(b),o=new K(t,t,Math.hypot(i[0]-a[0],i[1]-a[1],i[2]-a[2])),c=new Yn;c.position.set((i[0]+a[0])/2,(i[1]+a[1])/2-s-t/2,(i[2]+a[2])/2),c.lookAt(a[0],a[1]-s-t/2,a[2]),c.updateMatrix(),h.push(o.applyMatrix4(c.matrix))}}let x=e.ridge??0;if(x>0){let e=2*(d+c);if(e>.1){m.push(new K(e+x,x,x*.9).translate(0,r+x*.3,0));for(let t of[-1,1])m.push(new K(x*.5,x*2,x*1.4).translate(t*(e/2+x*.3),r+x*.7,0))}if(i>0)for(let[e,t]of[[-1,-1],[1,-1],[1,1],[-1,1]]){let n=[];for(let r=0;r<=12;r++){let a=r/12*i,o=p(e*(l-a*u),t*u*(1-a),a,1);n.push(new V(o[0],o[1]+x*.3,o[2]))}m.push(new Zl(new Fc(n),16,x*.4,5,!1))}}let S=e=>Rp(e.map(e=>{let t=e.index?e.toNonIndexed():e;for(let e of Object.keys(t.attributes))tm.includes(e)||t.deleteAttribute(e);return t}));return{tiles:S(m),under:S(h)}}function am(e,t,n=Math.PI/t){let r=[],i=e.length-1;for(let a=0;a<t;a++){let o=n+a/t*Math.PI*2,s=n+(a+1)/t*Math.PI*2,c=(o+s)/2;r.push(rm(i,1,(t,n)=>{let[r,a]=e[Math.round(t*i)],c=n?s:o;return[Math.cos(c)*r,a,Math.sin(c)*r]},(t,n)=>[n,e[Math.round(t*i)][1]],()=>[Math.cos(c),0,Math.sin(c)]))}let a=(e,i,a)=>{if(e<=0)return;let o=new ol;for(let r=0;r<t;r++){let i=n+r/t*Math.PI*2;r===0?o.moveTo(Math.cos(i)*e,Math.sin(i)*e):o.lineTo(Math.cos(i)*e,Math.sin(i)*e)}let s=new ql(o);if(s.rotateX(a>0?-Math.PI/2:Math.PI/2),a>0&&s.scale(1,1,-1),a>0){let e=s.index.array;for(let t=0;t<e.length;t+=3)[e[t+1],e[t+2]]=[e[t+2],e[t+1]]}s.translate(0,i,0),s.computeVertexNormals(),r.push(s)};return a(e[0][0],e[0][1],-1),a(e[i][0],e[i][1],1),Rp(r.map(e=>e.index?e.toNonIndexed():e))}function om(e,t,n,r,i=24){let a=new K(e,t,n,i,1,1),o=a.attributes.position;for(let t=0;t<o.count;t++){let n=Math.abs(o.getX(t))/(e/2);o.setY(t,o.getY(t)+r*n*n*n)}return a.computeVertexNormals(),a}function sm(e){let t=new Z({color:e,roughness:.55,metalness:.15,side:2});return t.onBeforeCompile=e=>{e.vertexShader=e.vertexShader.replace(`#include <common>`,`#include <common>
varying vec2 vTile;`).replace(`#include <uv_vertex>`,`#include <uv_vertex>
vTile = uv;`),e.fragmentShader=e.fragmentShader.replace(`#include <common>`,`#include <common>
varying vec2 vTile;`).replace(`#include <map_fragment>`,`#include <map_fragment>
{
  // Barrel tiles every 0.3m with dark grooves between them, and the courses' overlaps
  float k = fract(vTile.x / 0.3);
  float ridge = sin(k * 3.14159);
  float course = smoothstep(0.0, 0.12, fract(vTile.y / 0.28));
  diffuseColor.rgb *= (0.62 + 0.38 * ridge) * (0.82 + 0.18 * course);
}`).replace(`#include <normal_fragment_maps>`,`#include <normal_fragment_maps>
{
  float k = fract(vTile.x / 0.3);
  vec3 tg = dFdx(vViewPosition) * dFdx(vTile.x) + dFdy(vViewPosition) * dFdy(vTile.x);
  float l = length(tg);
  if (l > 1e-8) normal = normalize(normal + tg / l * cos(k * 3.14159) * 0.5);
}`)},t.customProgramCacheKey=()=>`tile`,t}function cm(e,t=.5){let{len:n,beam:r,depth:i}=e,a=e.sheer??i*.25,o=e.rake??.7,s=e.transom??.8,c=e.full??2.4,l=e.entry??0,u=e=>{let t=s+(1-s)*Math.min(1,e/.3)**.5,n=e>.45?l+(1-l)*Math.sqrt(Math.max(0,1-((e-.45)/.55)**1.8)):1;return r/2*t*n},d=e=>o*i*Math.max(0,(e-.55)/.45)**2,f=e=>i+a*e*e+a*.2*(1-e)**2,p=(e,t,r)=>[r*u(e)*(1-(1-t)**c),d(e)+(f(e)-d(e))*t,-n/2+e*n],m=(e,t)=>Rp([-1,1].map(r=>rm(32,8,(n,i)=>p(n,e+(t-e)*i,r),(r,i)=>[r*n,e+(t-e)*i],()=>[r,0,0]).toNonIndexed())),h=rm(6,8,(e,t)=>{let n=p(0,e,1);return[(2*t-1)*n[0],n[1],n[2]]},(e,t)=>[t,e],()=>[0,0,-1]),g=rm(32,6,(e,t)=>[(2*t-1)*u(e),f(e),-n/2+e*n],(e,t)=>[e*n,t*r],()=>[0,1,0]),_=[h.toNonIndexed()];l>0&&_.push(rm(6,8,(e,t)=>{let n=p(1,e,1);return[(2*t-1)*n[0],n[1],n[2]]},(e,t)=>[t,e],()=>[0,0,1]).toNonIndexed());let v=Rp([m(t,1),..._]);return{bottom:m(0,t),top:v,deck:g,sheerAt:e=>[u(e),f(e),-n/2+e*n]}}var lm=`
varying vec3 vObjPos;
float bHash(vec3 p) { return fract(sin(dot(p, vec3(127.1, 311.7, 74.7))) * 43758.5453); }
float bNoise(vec3 p) {
  vec3 i = floor(p), f = fract(p);
  f = f * f * (3.0 - 2.0 * f);
  return mix(mix(mix(bHash(i), bHash(i + vec3(1, 0, 0)), f.x), mix(bHash(i + vec3(0, 1, 0)), bHash(i + vec3(1, 1, 0)), f.x), f.y),
             mix(mix(bHash(i + vec3(0, 0, 1)), bHash(i + vec3(1, 0, 1)), f.x), mix(bHash(i + vec3(0, 1, 1)), bHash(i + vec3(1, 1, 1)), f.x), f.y), f.z);
}`;function um(e,t,n,r){let i=new Z(e);return i.onBeforeCompile=e=>{e.vertexShader=e.vertexShader.replace(`#include <common>`,`#include <common>
varying vec3 vObjPos;`).replace(`#include <begin_vertex>`,`#include <begin_vertex>
vObjPos = (modelMatrix * vec4(transformed, 1.0)).xyz;`),e.fragmentShader=e.fragmentShader.replace(`#include <common>`,`#include <common>\n${lm}\nfloat relief(vec3 p) { return ${t}; }`).replace(`#include <map_fragment>`,`#include <map_fragment>\n{ vec3 p = vObjPos; float h = relief(p); diffuseColor.rgb *= ${n}; }`).replace(`#include <normal_fragment_maps>`,`#include <normal_fragment_maps>
{
  // Bump from screen-space derivatives of the relief height
  vec3 dpx = dFdx(-vViewPosition), dpy = dFdy(-vViewPosition);
  float h = relief(vObjPos);
  float hx = dFdx(h), hy = dFdy(h);
  vec3 r1 = cross(dpy, normal), r2 = cross(normal, dpx);
  float det = dot(dpx, r1);
  if (abs(det) > 1e-9) {
    vec3 grad = sign(det) * (hx * r1 + hy * r2);
    normal = normalize(abs(det) * normal - grad * ${r.toFixed(3)});
  }
}`)},i.customProgramCacheKey=()=>`relief|${t}|${n}|${r}`,i}function dm(e){return um({color:e,roughness:.95},`bNoise(p * 2.3) * 0.65 + bNoise(p * 8.0) * 0.35`,`(0.88 + 0.18 * h) * mix(1.0, 0.86, smoothstep(0.6, 0.85, bNoise(p * 0.7 + 7.0)))`,.35)}function fm(e,t=.8){return um({color:e,roughness:t},`bNoise(vec3(p.x * 18.0, p.y * 1.2, p.z * 18.0)) * 0.7 + bNoise(p * 6.0) * 0.3`,`(0.93 + 0.1 * h)`,.25)}var pm={walk:`徒歩`,bike:`自転車`,boat:`船`,fly:`空撮`},mm=22,hm=class{hm;col;input;pos=new V;vel=new V;yaw=0;pitch=-.05;mode=`walk`;thirdPerson=!1;sensitivity=1;invertY=!1;camDist=null;onGround=!1;swimming=!1;speed=0;platform=null;avatar;parts;bob=0;waterLevel=0;surface=null;constructor(e,t,n){this.hm=e,this.col=t,this.input=n,this.avatar=new Y,this.parts={walk:_m(),bike:ym(),boat:bm(),fly:xm()};for(let e of Object.values(this.parts))e.visible=!1,e.traverse(e=>{e.castShadow=!0}),this.avatar.add(e);this.setMode(`walk`)}get riding(){return this.mode===`fly`?null:this.platform}get defaultCamDist(){return{walk:5,bike:6,boat:12,fly:10}[this.mode]}get cameraDistance(){return this.camDist??this.defaultCamDist}get eyeHeight(){return{walk:1.6,bike:1.75,boat:2.3,fly:0}[this.mode]}setMode(e){if(e===`boat`){let e=this.nearestWater();if(!e)return`近くに船を出せる水辺がありません`;this.pos.set(e[0],this.waterLevel,e[1])}if(this.mode===`fly`&&e!==`fly`){let[e,t]=this.col.findFree(this.pos.x,this.pos.z);this.pos.x=e,this.pos.z=t,this.pos.y=Math.max(this.hm.height(e,t),this.waterLevel)}if(e===`fly`&&(this.pos.y+=2),e!==`boat`&&this.mode===`boat`){let e=this.nearestLand();if(!e)return`近くに上陸できる岸がありません`;this.pos.set(e[0],this.hm.height(e[0],e[1]),e[1])}this.mode=e,this.vel.set(0,0,0),this.speed=0;for(let[t,n]of Object.entries(this.parts))n.visible=t===e;return null}nearestWater(){for(let e=0;e<=300;e+=4)for(let t=0;t<24;t++){let n=this.pos.x+Math.cos(t/24*Math.PI*2)*e,r=this.pos.z+Math.sin(t/24*Math.PI*2)*e;if(this.hm.height(n,r)<this.waterLevel-1.2&&this.hm.height(n+4,r)<this.waterLevel-1&&this.hm.height(n,r+4)<this.waterLevel-1)return[n,r];if(e===0)break}return null}nearestLand(){for(let e=2;e<=200;e+=3)for(let t=0;t<24;t++){let n=this.pos.x+Math.cos(t/24*Math.PI*2)*e,r=this.pos.z+Math.sin(t/24*Math.PI*2)*e;if(this.hm.height(n,r)>this.waterLevel+.4&&!this.col.insideBuilding(n,r))return[n,r]}return null}teleport(e,t){let[n,r]=this.mode===`fly`?[e,t]:this.col.findFree(e,t,80);this.mode===`boat`&&(this.pos.set(n,0,r),this.hm.height(n,r)>this.waterLevel-1&&this.setMode(`walk`));let i=this.col.ground(n,r,1e4).h;this.pos.set(n,this.mode===`fly`?Math.max(i,0)+60:this.mode===`boat`?this.waterLevel:i,r),this.vel.set(0,0,0)}update(e){let t=this.input,n=.0022*this.sensitivity;if(this.yaw-=t.lookX*n,this.pitch=Math.max(-1.45,Math.min(1.3,this.pitch-t.lookY*n*(this.invertY?-1:1))),t.wheel){let e=this.defaultCamDist;if(!this.thirdPerson)t.wheel>0&&(this.thirdPerson=!0,this.camDist=Math.max(2.5,e*.6));else{let n=(this.camDist??e)*(t.wheel>0?1.15:1/1.15);n<2.2&&(this.thirdPerson=!1),this.camDist=Math.min(e*4,Math.max(2.2,n))}}this.yaw-=t.axis([`ArrowLeft`],[`ArrowRight`])*e*1.6,this.pitch=Math.max(-1.45,Math.min(1.3,this.pitch+t.axis([`ArrowDown`],[`ArrowUp`])*e*1.1));let r=t.axis([`KeyS`],[`KeyW`])-t.stickY,i=t.axis([`KeyA`],[`KeyD`])+t.stickX;r=Math.max(-1,Math.min(1,r)),i=Math.max(-1,Math.min(1,i));let a=t.keys.has(`ShiftLeft`)||t.keys.has(`ShiftRight`)||t.stickRun,o=-Math.sin(this.yaw),s=-Math.cos(this.yaw),c=-s,l=o,u=this.pos;if(this.platform&&this.mode!==`fly`&&(u.x+=this.platform.delta.x,u.y+=this.platform.delta.y,u.z+=this.platform.delta.z),this.mode===`fly`){let n=a?120:30,d=t.axis([`KeyC`,`ControlLeft`],[`Space`])+t.vertical,f=new V((o*r+c*i)*n,Math.max(-1,Math.min(1,d))*n*.6,(s*r+l*i)*n);this.vel.lerp(f,1-Math.exp(-e*4)),u.addScaledVector(this.vel,e);let p=Math.max(this.hm.height(u.x,u.z),this.waterLevel);u.y=Math.min(Math.max(u.y,p+2),2500),this.speed=this.vel.length()}else if(this.mode===`boat`){let t=a?16:8;this.speed+=(r*t-this.speed)*(1-Math.exp(-e*(r?.8:.4))),this.yaw-=i*e*.9*Math.min(1,Math.abs(this.speed)/3+.3);let n=u.x+o*this.speed*e,c=u.z+s*this.speed*e;this.hm.height(n,c)<this.waterLevel-.8?(u.x=n,u.z=c):this.speed*=-.3,this.bob+=e,u.y=this.waterLevel+(this.surface?.(u.x,u.z)??0)+Math.sin(this.bob*1.3)*.04}else{let n=this.mode===`bike`,d=this.waterLevel,f=this.col.ground(u.x,u.z,u.y);this.swimming=!n&&f.h<d-1.3&&u.y<d-.9;let p=n?a?13:7.5:a?8.5:4.2;if(this.swimming&&(p=a?2.2:1.4),n){let[e,t]=this.hm.slope(u.x,u.z),n=e*o+t*s;p*=Math.max(.35,1-Math.max(0,n)*2.5)}let m,h;if(n)this.speed+=(r*p-this.speed)*(1-Math.exp(-e*(r>0?1.2:2.5))),r<=0&&this.speed>0&&(this.speed=Math.max(0,this.speed-e*(r<0?8:1.5))),this.yaw-=i*e*1.8*Math.min(1,Math.abs(this.speed)/4+.25),m=o*this.speed,h=s*this.speed;else{let e=Math.hypot(r,i)||1,t=Math.min(1,Math.hypot(r,i));m=(o*r+c*i)/e*p*t,h=(s*r+l*i)/e*p*t}let g=this.onGround||this.swimming?10:2;n?(this.vel.x=m,this.vel.z=h):(this.vel.x+=(m-this.vel.x)*(1-Math.exp(-e*g)),this.vel.z+=(h-this.vel.z)*(1-Math.exp(-e*g))),this.swimming?this.vel.y=(d-1.25-u.y)*4:(this.vel.y-=mm*e,this.onGround&&t.keys.has(`Space`)&&!n&&(this.vel.y=6.5));let _=Math.max(1,Math.ceil(Math.hypot(this.vel.x,this.vel.z)*e/.25));for(let t=0;t<_;t++){let t=u.x+this.vel.x*e/_,r=u.z+this.vel.z*e/_;[t,r]=this.col.resolve(t,r,u.y,n?.5:.3,1.7),u.x=t,u.z=r}n&&(this.speed=Math.min(this.speed,Math.hypot(this.vel.x,this.vel.z))),u.y+=this.vel.y*e;let v=this.col.ground(u.x,u.z,u.y+.6);this.platform=v.platform,u.y<=v.h+(this.onGround?.6:0)?(this.vel.y<=0||u.y<v.h)&&(u.y=v.h,this.vel.y=0,this.onGround=!0):this.onGround=!1,this.swimming&&(this.onGround=!1),this.speed=n?this.speed:Math.hypot(this.vel.x,this.vel.z)}u.x=Math.min(Math.max(u.x,Hu+5),Hu+Bu-5),u.z=Math.min(Math.max(u.z,Uu+5),Uu+Vu-5),this.updateAvatar(e)}walkPhase=0;updateAvatar(e){let t=this.avatar;t.position.copy(this.pos),t.rotation.set(0,this.yaw,0);let n=this.parts[this.mode];if(this.mode===`walk`){this.walkPhase+=e*this.speed*2.2;let t=n.userData.legs,r=n.userData.arms,i=Math.sin(this.walkPhase)*Math.min(1,this.speed/3)*.6;t[0].rotation.x=i,t[1].rotation.x=-i,r[0].rotation.x=-i*.8,r[1].rotation.x=i*.8,n.position.y=this.swimming?-.9:0}else if(this.mode===`bike`){let t=n.userData.wheels;for(let n of t)n.rotation.x-=this.speed*e/.34;let[r,i]=this.hm.slope(this.pos.x,this.pos.z),a=-Math.sin(this.yaw),o=-Math.cos(this.yaw);n.rotation.x=Math.atan(r*a+i*o)}else if(this.mode===`boat`)n.rotation.z=Math.sin(this.bob*1.1)*.03,n.rotation.x=Math.sin(this.bob*.8)*.02-Math.min(this.speed,16)*.004;else{let t=n.userData.rotors;for(let n of t)n.rotation.y+=e*40}}},gm=(e,t=.7)=>new Z({color:e,roughness:t});function _m(){let e=new Y,t=gm(15780261),n=gm(16052714,.85),r=gm(2965084,.85),i=gm(15260072,.9),a=gm(6965812,.6),o=gm(3815994,.8),s=gm(9132604,.6),c=$p(-1);e.add(new G(c.torso,n),new G(c.pelvis,r),new G(c.head,t));let l=new G(new nl([[.001,.02],[.14,.012],[.24,0],[.29,-.025],[.3,-.035]].map(([e,t])=>new R(e,t)),32),new Z({color:15260072,roughness:.9,side:2}));l.position.y=1.69;let u=new G(new nl([[.135,0],[.14,.08],[.125,.13],[.07,.145],[.001,.15]].map(([e,t])=>new R(e,t)),24),i);u.position.y=1.69;let d=new G(new X(.142,.142,.03,24,1,!0),o);d.position.y=1.715;let f=new G(new K(.26,.24,.1,2,2,2),s);f.position.set(.17,1,.1),f.rotation.y=.3;let p=new G(new Xl(.24,.012,4,24),s);p.position.set(.02,1.2,0),p.rotation.set(0,Math.PI/2,.75),p.scale.set(1,1.15,.62),e.add(l,u,d,f,p);let[m,h]=Zp,[g,_]=Qp,v=(t,n,r)=>{let i=new Y;i.position.set(t,n,0);for(let[e,t]of r)i.add(new G(e,t));return e.add(i),i};return e.userData.legs=[-1,1].map(e=>v(e*m,h,[[c.leg,r],[c.shoe,a]])),e.userData.arms=[-1,1].map(e=>v(e*g,_,[[c.arm,n],[c.hand,t]])),e}function vm(e){let t=new Xl(e,.032,10,40).rotateY(Math.PI/2),n=[new Xl(e-.04,.012,6,40).rotateY(Math.PI/2).toNonIndexed()];for(let t=0;t<16;t++){let r=t/16*Math.PI*2,i=new X(.003,.003,e-.05,3).translate(0,(e-.05)/2,0).rotateX(r);n.push(i.translate(t%2?.015:-.015,0,0).toNonIndexed())}return n.push(new X(.03,.03,.1,10).rotateZ(Math.PI/2).toNonIndexed()),{tyre:t,metal:Rp(n)}}function ym(){let e=new Y,t=gm(2785208,.35),n=gm(1710618,.7),r=gm(13159632,.25);r.metalness=.8;let i=[],a=vm(.34);for(let t of[-.55,.55]){let o=new Y;o.position.set(0,.36,t),o.add(new G(a.tyre,n),new G(a.metal,r)),e.add(o),i.push(o);let s=new G(new Xl(.38,.03,4,20,Math.PI*.75),r);s.rotation.set(0,Math.PI/2,t<0?Math.PI*.2:Math.PI*.05),s.scale.set(1,1,1.6),s.position.set(0,.36,t),e.add(s)}let o=(n,r,i=.022,a=t)=>{let o=new V(...n),s=new V(...r),c=new G(new X(i,i,o.distanceTo(s),10),a);c.position.copy(o).add(s).multiplyScalar(.5),c.quaternion.setFromUnitVectors(new V(0,1,0),s.clone().sub(o).normalize()),e.add(c)},s=new Fc([new V(0,.88,-.42),new V(0,.55,-.25),new V(0,.38,0),new V(0,.36,.1)]);e.add(new G(new Zl(s,16,.028,10),t)),o([0,.36,.1],[0,.88,.22],.024),o([0,.36,.1],[0,.36,.55],.015),o([0,.84,.21],[0,.36,.55],.014),o([0,.36,-.55],[0,.98,-.4],.02),o([0,.98,-.4],[0,1.03,-.36],.02,r);let c=new Fc([new V(-.3,1.04,-.22),new V(-.2,1.05,-.36),new V(0,1.03,-.38),new V(.2,1.05,-.36),new V(.3,1.04,-.22)]);e.add(new G(new Zl(c,20,.012,8),r));for(let e of[-1,1])o([e*.26,1.04,-.25],[e*.31,1.04,-.19],.02,n);let l=new G(new K(.36,.24,.28),new Z({color:13159632,metalness:.7,roughness:.35,wireframe:!0}));l.position.set(0,.92,-.62);let u=new G(new K(.36,.01,.28),r);u.position.set(0,.8,-.62),e.add(l,u);let d=new G(new Xl(.1,.012,6,24),r);d.rotation.y=Math.PI/2,d.position.set(.05,.36,.1);let f=new G(new K(.02,.12,.55),t);f.position.set(.07,.38,.33),e.add(d,f);for(let t of[-1,1]){o([t*.07,.36,.1],[t*.07,.36-t*.15,.1+t*.04],.012,r);let i=new G(new K(.1,.025,.07),n);i.position.set(t*.12,.36-t*.15,.1+t*.04),e.add(i)}let p=new G(new Yl(.1,14,8),n);p.scale.set(.9,.35,1.5),p.position.set(0,.92,.24),e.add(p),o([-.08,.72,.45],[-.08,.72,.8],.01,r),o([.08,.72,.45],[.08,.72,.8],.01,r),o([0,.72,.45],[0,.36,.55],.01,r);let m=_m();return m.position.set(0,0,.15),m.scale.setScalar(.95),m.userData.legs.forEach(e=>e.rotation.x=.9),m.userData.arms.forEach(e=>e.rotation.x=1.1),m.position.y=-.1,e.add(m),e.userData.wheels=i,e}function bm(){let e=new Y,t=gm(16053488,.4),n=gm(2056075,.45),r=gm(12167564,.85),i=gm(13685976,.3);i.metalness=.8;let a=cm({len:6.4,beam:2.4,depth:1.1,sheer:.3,rake:.6,transom:.85,full:2.2},.42),o=new Y;o.add(new G(a.bottom,n),new G(a.top,t),new G(a.deck,r)),o.rotation.y=Math.PI,o.position.y=-.45,e.add(o);let s=e=>a.sheerAt(e)[1]-.45,c=(e,t,n)=>new Fc(Array.from({length:13},(r,i)=>{let o=i/12,[s,c,l]=a.sheerAt(o);return new V(e*Math.max(0,s-n),c-.45+t,-l)}));for(let t of[-1,1])e.add(new G(new Zl(c(t,0,0),40,.035,6),n));for(let t of[-1,1]){let n=Array.from({length:7},(e,n)=>{let r=.62+n/6*.34,[i,o,s]=a.sheerAt(r);return new V(t*Math.max(.02,i-.12),o-.45+.45,-s)});e.add(new G(new Zl(new Fc(n),16,.018,6),i));for(let t of[n[0],n[3]]){let n=new G(new X(.015,.015,.45,6),i);n.position.set(t.x,t.y-.225,t.z),e.add(n)}}let l=s(.4),u=new G(new K(.9,.9,.7,2,2,2),t);u.position.set(0,l+.45,.1);let d=new G(new K(.95,.45,.03),gm(2241348,.05));d.position.set(0,l+1.08,-.2),d.rotation.x=.35;let f=new G(new Xl(.16,.018,6,20),gm(2236962));f.position.set(0,l+.95,.42),f.rotation.x=-.6;let p=new G(new K(1.6,.4,.5),t);p.position.set(0,l+.2,1.6);let m=new G(new Yl(.28,14,10),gm(2763306,.35));m.scale.set(.9,1.1,1.3),m.position.set(0,s(0)+.25,3.45);let h=new G(new K(.12,.9,.2),gm(2763306,.5));return h.position.set(0,s(0)-.35,3.45),e.add(u,d,f,p,m,h),e}function xm(){let e=new Y,t=gm(3816770,.45),n=gm(1710618,.5),r=gm(14540253,.4),i=gm(659224,.05),a=new G(new Yl(.16,20,12),t);a.scale.set(.8,.35,1.25);let o=new G(new K(.2,.05,.3,2,1,2),t);o.position.y=.03,e.add(a,o);let s=[];for(let[i,a]of[[-.25,-.25],[.25,-.25],[.25,.25],[-.25,.25]]){let o=new G(new X(.014,.018,Math.hypot(i,a),8),t);o.position.set(i/2,.01,a/2),o.rotation.order=`YXZ`,o.rotation.set(Math.PI/2,Math.atan2(i,a),0);let c=new G(new X(.03,.03,.05,14),n);c.position.set(i,.03,a);let l=new Y;l.position.set(i,.065,a);for(let e of[0,Math.PI]){let t=new G(new K(.15,.004,.025),r);t.position.x=Math.cos(e)*.075,t.rotation.x=e?-.15:.15,l.add(t)}l.add(new G(new X(.012,.012,.02,8),n)),e.add(o,c,l),s.push(l);let u=new G(new X(.006,.006,.09,6),n);u.position.set(i*.6,-.06,a*.6),e.add(u)}let c=new G(new Yl(.04,12,10),n);c.position.set(0,-.06,-.12);let l=new G(new X(.018,.018,.02,12),i);return l.rotation.x=Math.PI/2,l.position.set(0,-.06,-.16),e.add(c,l),e.userData.rotors=s,e.position.y=-1.2,e}function Sm(e,t){let n=new Map(t.map(e=>[e.n,e]));return e.map(e=>{let t=e.label?n.get(e.label):void 0,[r,i]=t?[t.x,t.z]:Qu(e.lon,e.lat);return{...e,x:r,z:i}})}var Cm=(e,t=.75,n=0)=>new Z({color:e,roughness:t,metalness:n}),wm=(e,t,n)=>new V(e,t,n),$=(e,t,n)=>new K(e,t,n),Tm=(e,t,n,r=12)=>new X(e,t,n,r),Em=(e,t)=>Array.from({length:t},(n,r)=>-e+2*e*r/(t-1));function Dm(e,t,n,r,i,a,o,s=.13){e.add($(n-.12,i,r-.12),o.wall,0,t+i/2,0),e.add($(n-.08,i*.18,r-.08),o.plaster,0,t+i*.84,0);for(let c of Em(n/2,a+1))for(let n of[-r/2,r/2])e.add(Tm(s,s,i,10),o.post,c,t+i/2,n);for(let c of Em(r/2,Math.max(2,Math.round(a*r/n)+1)).slice(1,-1))for(let r of[-n/2,n/2])e.add(Tm(s,s,i,10),o.post,r,t+i/2,c);let c=n/a;for(let[a,s,l]of[[0,r/2,0],[0,-r/2,0],[n/2,0,Math.PI/2],[-n/2,0,Math.PI/2]]){e.add($(c*.8,i*.62,.06),o.door,a,t+i*.36,s,l);for(let n of[.2,.4,.58])e.add($(c*.8,.05,.08),o.post,a,t+i*n,s,l)}for(let a of[.15,i*.72,i-.08])e.add($(n+.2,.16,.16),o.post,0,t+a,r/2+.02),e.add($(n+.2,.16,.16),o.post,0,t+a,-r/2-.02),e.add($(.16,.16,r+.2),o.post,n/2+.02,t+a,0),e.add($(.16,.16,r+.2),o.post,-n/2-.02,t+a,0);let l=t+i;e.add($(n+.45,.2,r+.45),o.post,0,l+.1,0);for(let t of Em(n/2,a+1))for(let i of[-1,1])e.add($(.28,.22,.5),o.post,t,l+.31,i*(r/2+.28)),e.add($(.5,.22,.28),o.post,t+Math.sign(t)*.28*(Math.abs(t)>n/2-.01),l+.31,i*(r/2+.05));for(let t of Em(r/2,Math.max(2,Math.round(a*r/n)+1)))for(let r of[-1,1])e.add($(.5,.22,.28),o.post,r*(n/2+.28),l+.31,t);return e.add($(n+1,.18,r+1),o.post,0,l+.51,0),l+.6}function Om(e,t,n,r,i,a=.75,o=1.2){let s=[wm(-n/2,t,-r/2),wm(n/2,t,-r/2),wm(n/2,t,r/2),wm(-n/2,t,r/2)];for(let t=0;t<4;t++){let n=s[t],r=s[(t+1)%4];for(let t of[a,a*.45])e.beam(wm(n.x,n.y+t,n.z),wm(r.x,r.y+t,r.z),.08,.08,i);let c=Math.max(2,Math.round(n.distanceTo(r)/o)+1);for(let t=0;t<c;t++){let o=n.clone().lerp(r,t/(c-1));e.add($(.1,a,.1),i,o.x,o.y+a/2,o.z)}}}function km(e,t,n,r,i=1){e.add($(.9*i,.45*i,.9*i),r,0,t+.22*i,0),e.add(new Yl(.42*i,16,8,0,Math.PI*2,0,Math.PI/2),n,0,t+.45*i,0),e.add(Tm(.34*i,.16*i,.25*i,16),n,0,t+.95*i,0),e.add(Tm(.07*i,.09*i,5.4*i,8),n,0,t+3.3*i,0);for(let r=0;r<9;r++)e.add(new Xl((.42-r*.017)*i,.055*i,6,20),n,0,t+(1.35+r*.4)*i,0,0,Math.PI/2);for(let r=0;r<4;r++)e.add($(.5*i,.75*i,.03*i),n,Math.sin(r*Math.PI/2)*.12*i,t+5.15*i,Math.cos(r*Math.PI/2)*.12*i,r*Math.PI/2);e.add(new Yl(.13*i,12,8),n,0,t+5.75*i,0),e.add(new il(.1*i,.18*i,12),n,0,t+5.92*i,0)}function Am(e=1,t=3){let n=new nm,r=Cm(10173226,.7),i=Cm(15262420,.9),a=Cm(5974559,.8),o=sm(3948357),s=Cm(13148490,.35,.6),c=dm(9406330),l=Cm(9255462,.75),u={post:r,wall:r,door:a,plaster:i};n.add($(7.4,.7,7.4),c,0,.35,0),n.add($(6.6,.5,6.6),c,0,.95,0);for(let e=0;e<4;e++)for(let t=0;t<3;t++)n.add($(1.6,.4*(t+1),.35),c,Math.sin(e*Math.PI/2)*(3.9+(2-t)*.35),.2*(t+1),Math.cos(e*Math.PI/2)*(3.9+(2-t)*.35),e*Math.PI/2);let d=1.2,f=t===2;for(let e=0;e<t;e++){let a=5-e*.55,s=3-e*.25,c=a+3.6-e*.2,p=1.6;if(f&&e===1){let e=new nl([wm(2.15,0,0),wm(2.1,.35,0),wm(1.85,.8,0),wm(1.4,1.15,0),wm(1.1,1.3,0),wm(.01,1.32,0)].map(e=>new R(e.x,e.y)),32);n.add(e,i,0,d-.1,0),n.add(Tm(1.25,1.25,1.9,24),r,0,d+1.9/2+.9,0);for(let e=0;e<12;e++){let t=e/12*Math.PI*2;n.add($(.24,.24,.9),r,Math.sin(t)*1.5,d+2.9,Math.cos(t)*1.5,t)}n.add($(3.6,.2,3.6),r,0,d+3.1,0),d+=3.2,c=8.6,p=2}else e>0&&(n.add($(a+1.1,.14,a+1.1),r,0,d+.07,0),Om(n,d+.14,a+1,a+1,r,.6,1)),d=Dm(n,d,a,a,s,3,u);let m=im({w:c,d:c,h:p,lift:.6,curve:1.7,thick:.28,overhang:(c-a)/2,rafters:.3,ridge:.2});if(n.add(m.tiles,o,0,d,0),n.add(m.under,l,0,d,0),e<t-1){let t=1-(f?4.3:5-(e+1)*.55)/c;d+=p*t**1.7-.05}else d+=p-.1}km(n,d,s,i);let p=n.build();return p.scale.setScalar(e),p}function jm(e=10,t=8){let n=new nm,r=Cm(11813164,.7),i=Cm(15262420,.9),a=Cm(4860448,.8),o=sm(3948357),s=fm(7227954),c=Cm(10238502,.75),l=Cm(13148490,.35,.6),u=e+2.4,d=t+2.4,f=Em(u/2-.3,5),p=Em(d/2-.3,4);for(let e of f)for(let t of p)n.add($(.36,6.2,.36),s,e,-3.1,t);for(let e of[-1.6,-4]){for(let t of p)n.add($(u-.4,.22,.14),s,0,e,t);for(let t of f)n.add($(.14,.22,d-.4),s,t,e,0)}n.add($(u,.3,d),s,0,-.15,0),Om(n,0,u-.1,d-.1,r,.85,1.4);for(let e=0;e<6;e++)n.add($(2.4,.2,.32),s,0,-.2-e*.2,d/2+.16+e*.32);let m=Dm(n,0,e,t,4,5,{post:r,wall:r,door:a,plaster:i},.2),h=im({w:e+3.4,d:t+3.4,h:4.2,gable:.55,lift:.55,curve:1.6,thick:.32,overhang:1.7,verge:.5,rafters:.4,ridge:.38});n.add(h.tiles,o,0,m,0),n.add(h.under,c,0,m,0);for(let r of[-1,1])n.add(new Yl(.22,12,8),l,r*((e+3.4)/2-.55*(t+3.4)/2-.1),m+4.2*.8**1.6-.3,0);return n.build()}function Mm(e=4.5){let t=new nm,n=Cm(12664874,.6),r=Cm(2500134,.6),i=Cm(2762018,.7),a=Cm(13148490,.35,.6),o=e*.9;for(let i of[-1,1]){let a=i*.04;t.add(Tm(.15,.19,e,20),n,i*o/2,e/2,0,0,0,a),t.add(Tm(.24,.28,.35,20),r,i*(o/2+a*.17),.17,0),t.add(Tm(.2,.2,.18,20),n,i*(o/2-a*e*.45),e-.27,0)}t.add($(o*1.28,.2,.13),n,0,e*.74,0);for(let r of[-1,1])t.add($(.1,.24,.16),n,r*o*.4,e*.74,0);return t.add($(.2,e*.24,.12),n,0,e*.86,0),t.add($(.55,.75,.08),i,0,e*.86,.07),t.add($(.62,.82,.05),a,0,e*.86,.04),t.add(om(o*1.32,.2,.3,.12),n,0,e-.07,0),t.add(om(o*1.46,.14,.4,.3),r,0,e+.1,0),t.build(!0,!1)}function Nm(e=2.2){let t=new nm,n=dm(9407104),r=Cm(2039066,.95),i=e/2.2,a=e=>e.map(([e,t])=>[e*i,t*i]);t.add(am(a([[.42,0],[.42,.1],[.36,.16],[.22,.26],[.15,.3]]),6),n),t.add(new nl(a([[.12,.28],[.11,.6],[.135,.66],[.135,.7],[.11,.76],[.1,1.04],[.13,1.08]]).map(([e,t])=>new R(e,t)),20),n),t.add(am(a([[.13,1.06],[.24,1.14],[.3,1.18],[.3,1.26],[.26,1.28]]),6),n),t.add(am(a([[.22,1.28],[.22,1.66]]),6),n);let o=.22*Math.cos(Math.PI/6)*i;for(let e of[0,Math.PI])t.add($(.14*i,.2*i,.02),r,Math.sin(e)*(o+.005),1.47*i,Math.cos(e)*(o+.005),e);return t.add(am(a([[.5,1.66],[.5,1.7],[.42,1.76],[.28,1.84],[.16,1.92],[.1,1.98]]),6),n),t.add(new nl(a([[.001,1.97],[.09,2],[.1,2.04],[.08,2.1],[.03,2.17],[.001,2.2]]).map(([e,t])=>new R(e,t)),16),n),t.build()}function Pm(e=5,t=2.6){let n=new nm,r=fm(5913898),i=fm(4074014),a=Cm(14999248,.9),o=dm(9406330),s=sm(3948357),c=Cm(5125412,.85),l=2.8;for(let e of[-2.8/2,l/2])n.add(Tm(.24,.26,4.3,16),r,e,2.15,0),n.add(Tm(.34,.38,.25,16),o,e,.12,0);for(let i of[-e/2,e/2])for(let e of[-t/2,t/2])n.add($(.26,3.9,.26),r,i,1.95,e),n.add($(.4,.2,.4),o,i,.1,e);for(let i of[-t/2,0,t/2])n.add($(e+.6,.3,.22),r,0,4,i);for(let i of[-e/2,-2.8/2,l/2,e/2])n.add($(.22,.3,t+.5),r,i,4,0);let u=e/2-l/2-.2;for(let e of[-1,1])n.add($(u,3.3,.16),a,e*(1.5+u/2),2.15,0);for(let e of[-1,1]){let t=e*(l/2-.2),a=-.7;n.add($(l/2-.1,3.3,.06),i,t,1.9,a,Math.PI/2);for(let i of[.6,1.9,3.2])n.add($(l/2-.1,.1,.1),r,t-e*.05,i,a,Math.PI/2)}for(let e of[-t/2,t/2])n.add($(.7,.35,.12),r,0,4.32,e);let d=im({w:e+.4,d:t+2.6,h:2,gable:0,lift:.3,curve:1.6,thick:.25,overhang:1.3,verge:.9,rafters:.3,ridge:.3});return n.add(d.tiles,s,0,4.5,0),n.add(d.under,c,0,4.5,0),n.build()}function Fm(){let e=new nm,t=fm(7031347),n=dm(9406330),r=sm(3948357),i=Cm(5914155,.85),a=Cm(5661514,.45,.5),o=Cm(14207392,.9);e.add($(4.6,.6,4.6),n,0,.3,0),e.add($(4.9,.12,4.9),n,0,.06,0);let s=1.65,c=1.45;for(let[r,i]of[[-1,-1],[1,-1],[1,1],[-1,1]])e.rod(wm(r*s,.6,i*s),wm(r*c,4.4,i*c),.15,t,12),e.add(Tm(.22,.26,.2,12),n,r*s,.7,i*s);for(let[n,r]of[[1,.12],[3.4,.11],[4.25,.15]]){let i=s+-.19999999999999996*(n-.6)/3.8000000000000003;for(let a of[-1,1])e.beam(wm(-i-.25,n,a*i),wm(i+.25,n,a*i),.16,r*2,t),e.beam(wm(a*i,n,-i-.25),wm(a*i,n,i+.25),.16,r*2,t)}e.add($(3.5,.3,.3),t,0,4.25,0);let l=[[.52,.06],[.6,0],[.64,.05],[.6,.2],[.56,.45],[.55,1.05],[.5,1.32],[.36,1.45],[.001,1.5]],u=2.3;e.add(new nl(l.map(([e,t])=>new R(e,t)),40),a,0,u,0);for(let t of[.32,.8,1.12])e.add(new Xl(t<.5?.575:.555,.022,6,40),a,0,u+t,0,0,Math.PI/2);for(let t=0;t<4;t++)for(let n=0;n<3;n++)for(let r=0;r<3;r++){let i=t/4*Math.PI*2+(n-1)*.16;e.add(new Yl(.035,8,6),a,Math.sin(i)*.565,3.1999999999999997+r*.08,Math.cos(i)*.565)}e.add(new Xl(.12,.04,8,16),a,0,3.88,0),e.add($(.08,.3500000000000001,.08),a,0,8.15/2,0);let d=2.9;e.rod(wm(.7,d,0),wm(2.2,d,0),.11,t,12);for(let t of[1,1.9])e.add(Tm(.015,.015,1.35,4),o,t,7.15/2,0);let f=im({w:4.8,d:4.8,h:2,gable:.55,lift:.4,curve:1.6,thick:.25,overhang:1,verge:.3,rafters:.28,ridge:.26});return e.add(f.tiles,r,0,4.45,0),e.add(f.under,i,0,4.45,0),e.build()}function Im(e,t,n,r){let i=new Y,a=Cm(11570530),o=Cm(14606046,.4),s=t,c=n;for(let r=0;r<=80;r+=4)for(let i=0;i<16;i++){let a=t+Math.cos(i/16*Math.PI*2)*r,o=n+Math.sin(i/16*Math.PI*2)*r;e.height(a,o)>e.height(s,c)&&(s=a,c=o)}let l=Math.sin(r),u=Math.cos(r),d=e.height(s,c)+.6;for(let t=0;t<=36;t+=2)d=Math.max(d,e.height(s+l*t,c+u*t)+.4);let f=new G(new K(5,.4,36),a);f.position.set(0,-.2,18),i.add(f);for(let e of[.5,1.1]){for(let t of[-5/2,5/2]){let n=new G(new K(.06,.06,36),o);n.position.set(t,e,18),i.add(n)}let t=new G(new K(5,.06,.06),o);t.position.set(0,e,36),i.add(t)}for(let e=0;e<=36;e+=3)for(let t of[-5/2,5/2]){let n=new G(new K(.06,1.1,.06),o);n.position.set(t,.55,e),i.add(n)}for(let t=6;t<=36;t+=10){let n=e.height(s+l*t,c+u*t),r=d-n+1;if(r<1)continue;let a=new G(new K(.5,r,.5),o);a.position.set(0,-r/2,t),i.add(a)}i.position.set(s,d,c),i.rotation.y=r,i.traverse(e=>{e.castShadow=!0,e.receiveShadow=!0});let p=s+l*36/2,m=c+u*36/2;return{group:i,platform:{delta:{x:0,y:0,z:0},heightAt(e,t){let n=e-p,i=t-m,a=n*Math.cos(r)-i*Math.sin(r),o=n*Math.sin(r)+i*Math.cos(r);return Math.abs(a)<=5/2&&Math.abs(o)<=18?d:null}},center:[p,m]}}function Lm(e,t,n,r,i=0,a=0){return e.position.set(n,t.height(n,r)+a,r),e.rotation.y=i,e}var Rm=420,zm=class{group=new Y;tags=[];constructor(e,t){for(let n of e){if((n.radius??30)>80)continue;let e=new Gs(new js({transparent:!0,depthWrite:!1,sizeAttenuation:!1}));e.position.set(n.x,t(n),n.z),e.center.set(.5,0),e.renderOrder=10,e.visible=!1,this.group.add(e),this.tags.push({id:n.id,name:n.name,sprite:e,found:null})}}update(e,t){for(let n of this.tags){let r=t.has(n.id);if(r!==n.found){n.found=r;let e=n.sprite.material;e.map?.dispose(),e.map=Bm(r?n.name:`？`,r),e.needsUpdate=!0;let t=e.map.image,i=.045;n.sprite.scale.set(i*t.width/t.height,i,1)}let i=e.distanceTo(n.sprite.position),a=1-vt.smoothstep(i,Rm*.6,Rm);n.sprite.visible=a>.01&&i>6,n.sprite.material.opacity=a*(n.found?.95:.8)}}};function Bm(e,t){let n=`600 44px "Hiragino Mincho ProN", "Yu Mincho", serif`,r=document.createElement(`canvas`),i=r.getContext(`2d`);i.font=n;let a=Math.ceil(i.measureText(e).width)+56;r.width=a,r.height=100,i.fillStyle=t?`rgba(20, 24, 32, 0.72)`:`rgba(20, 24, 32, 0.55)`,i.beginPath(),i.roundRect(0,0,a,80,40),i.moveTo(a/2-20,80),i.lineTo(a/2,100),i.lineTo(a/2+20,80),i.fill(),i.font=n,i.fillStyle=t?`#fff6e6`:`#ffd98a`,i.textAlign=`center`,i.textBaseline=`middle`,i.fillText(e,a/2,42);let o=new Ec(r);return o.colorSpace=Fe,o}function Vm(e,t,n=16763274,r=.9){e.updateMatrixWorld(!0);let i=new Yt().setFromObject(e),a={uFloodNight:t,uFloodColor:{value:new U(n).multiplyScalar(r)},uFloodRange:{value:new R(i.min.y,Math.max(i.max.y,i.min.y+1))}},o=new Set;e.traverse(e=>{let t=e;if(t.isMesh)for(let e of Array.isArray(t.material)?t.material:[t.material]){if(o.has(e)||e.userData.flood)continue;o.add(e),e.userData.flood=!0;let t=e.onBeforeCompile,n=e.customProgramCacheKey();e.onBeforeCompile=(n,r)=>{t.call(e,n,r),Object.assign(n.uniforms,a),n.vertexShader=n.vertexShader.replace(`#include <common>`,`#include <common>
varying float vFloodY;`).replace(`#include <begin_vertex>`,`#include <begin_vertex>
vFloodY = (modelMatrix * vec4(transformed, 1.0)).y;`),n.fragmentShader=n.fragmentShader.replace(`#include <common>`,`#include <common>
varying float vFloodY;
uniform float uFloodNight;
uniform vec3 uFloodColor;
uniform vec2 uFloodRange;`).replace(`#include <emissivemap_fragment>`,`#include <emissivemap_fragment>
{
  float k = mix(1.0, 0.2, smoothstep(uFloodRange.x, uFloodRange.y, vFloodY));
  totalEmissiveRadiance += uFloodColor * uFloodNight * k * diffuseColor.rgb;
}`)},e.customProgramCacheKey=()=>n+`|flood`,e.needsUpdate=!0}})}function Hm(e,t,n,r){return 1+(n-new Date(Date.UTC(e,t-1,1)).getUTCDay()+7)%7+(r-1)*7}function Um(e,t,n){let r=new Date(Date.UTC(e,t,0)).getUTCDate();return r-(new Date(Date.UTC(e,t-1,r)).getUTCDay()-n+7)%7}function Wm(e,t,n){return Math.round((Date.UTC(e,t-1,n)-Date.UTC(e,0,1))/864e5)+1}function Gm(e,t){let n=new Date(Date.UTC(e,0,t));return{month:n.getUTCMonth()+1,day:n.getUTCDate()}}var Km=(e,t,n)=>new Date(Date.UTC(e,t-1,n)).getUTCDay();function qm(e,t,n){if({1:[1],2:[11,23],4:[29],5:[3,4,5],8:[11],11:[3,23]}[t]?.includes(n))return!0;let r={1:2,7:3,9:3,10:2};if(r[t]&&n===Hm(e,t,1,r[t]))return!0;let i=Math.floor((e-1980)/4);return t===3&&n===Math.floor(20.8431+.242194*(e-1980)-i)||t===9&&n===Math.floor(23.2488+.242194*(e-1980)-i)}function Jm(e,t,n){if(qm(e,t,n))return!0;let r=Date.UTC(e,t-1,n),i=e=>{let t=new Date(e);return[t.getUTCFullYear(),t.getUTCMonth()+1,t.getUTCDate()]};if(Km(e,t,n)!==0)for(let e=1;e<=3;e++){let[t,n,a]=i(r-e*864e5);if(!qm(t,n,a))break;if(Km(t,n,a)===0)return!0}if(Km(e,t,n)!==0){let[e,t,n]=i(r-864e5),[a,o,s]=i(r+864e5);if(qm(e,t,n)&&qm(a,o,s))return!0}return!1}function Ym(e,t){let{month:n,day:r}=Gm(e,t),i=Km(e,n,r);return i===0||i===6||Jm(e,n,r)?`holiday`:`weekday`}function Xm(e,t){if(`day`in e)return e.day;if(`last`in e)return Um(t,e.month,e.weekday);let n=Hm(t,e.month,e.weekday,e.nth);return n<=new Date(Date.UTC(t,e.month,0)).getUTCDate()?n:0}function Zm(e,t,n,r){if(n!==e.month)return!1;let i=Xm(e,t);return i>0&&r>=i&&r<i+(e.days??1)}var Qm=class{festivals;constructor(e){this.festivals=e}festivalsOn(e,t,n){return this.festivals.filter(r=>Zm(r.date,e,t,n))}festivalAt(e,t,n){let{month:r,day:i}=Gm(e,t);return this.festivalsOn(e,r,i).find(e=>n>=e.start&&n<e.end)??null}nextFestivalDates(e,t,n){let r=[],i=new Set,a=Date.UTC(e,t-1,n);for(let e=0;e<400&&i.size<this.festivals.length;e++){let t=new Date(a+e*864e5);for(let e of this.festivalsOn(t.getUTCFullYear(),t.getUTCMonth()+1,t.getUTCDate()))i.has(e.id)||(i.add(e.id),r.push({festival:e,year:t.getUTCFullYear(),month:t.getUTCMonth()+1,day:t.getUTCDate(),hours:e.start+Math.min(1,(e.end-e.start)/3)}))}return r}},$m=`日月火水木金土`;function eh(e,t){return e===12&&t>=26||e===1&&t<=7?`冬・正月`:e===3&&t>=27||e===4&&t<=16?`春・桜`:e===6||e===7&&t<=19?`夏・梅雨`:e===11&&t>=10||e===12&&t<=8?`秋・紅葉`:e<=2||e===12?`冬`:e<=5?`春`:e<=8?`夏`:`秋`}function th(e,t,n,r){let i=new Date(Date.UTC(e,0,t)),a=i.getUTCMonth()+1,o=i.getUTCDate(),s=Math.floor(n*60),c=`${Math.floor(s/60)%24}:${String(s%60).padStart(2,`0`)}`;return[`${a}月${o}日（${$m[i.getUTCDay()]}）${c}`,eh(a,o),r].filter(Boolean).join(` ・ `)}var nh=[`walk`,`bike`,`boat`,`fly`];function rh(e){let t=new URLSearchParams(e),n=/^(\d{4})-(\d{2})-(\d{2})$/.exec(t.get(`date`)??``),r=/^(\d{1,2}):(\d{2})$/.exec(t.get(`time`)??``);if(!n&&!r&&!t.has(`lat`)&&!t.has(`lon`)&&!t.has(`pos`))return null;let i=new Date(Date.now()+324e5),a=i.getUTCFullYear(),o=i.getUTCMonth()+1,s=i.getUTCDate();if(n){let[e,t,r]=[+n[1],+n[2],+n[3]],i=new Date(Date.UTC(e,t-1,r));if(i.getUTCMonth()!==t-1||i.getUTCDate()!==r)return null;[a,o,s]=[e,t,r]}let c=i.getUTCHours()+i.getUTCMinutes()/60;if(r){let[e,t]=[+r[1],+r[2]];if(e>23||t>59)return null;c=e+t/60}let l={year:a,dayOfYear:Wm(a,o,s),hours:c},u=/^(-?\d+(?:\.\d+)?),(-?\d+(?:\.\d+)?)$/.exec(t.get(`pos`)??``);u&&(l.pos=[+u[1],+u[2]]);let d=Number(t.get(`lat`)),f=Number(t.get(`lon`));if(t.has(`lat`)&&t.has(`lon`)&&Number.isFinite(d)&&Number.isFinite(f)&&Math.abs(d)<=90&&Math.abs(f)<=180){let[e,t]=Qu(f,d);e>=Hu&&e<=Hu+Bu&&t>=Uu&&t<=Uu+Vu&&(l.pos=[e,t])}let p=Number(t.get(`dir`));t.has(`dir`)&&Number.isFinite(p)&&(l.yaw=p*Math.PI/180);let m=Number(t.get(`alt`));t.has(`alt`)&&Number.isFinite(m)&&m>=2&&m<=3e3&&(l.altitude=m);let h=Number(t.get(`pitch`));t.has(`pitch`)&&Number.isFinite(h)&&h>=-89&&h<=89&&(l.pitch=h*Math.PI/180);let g=t.get(`mode`);return g&&nh.includes(g)&&(l.mode=g),l}function ih(e,t){let{month:n,day:r}=Gm(t.year,t.dayOfYear),i=Math.round(t.hours*60),a=Math.floor(i/60)%24,o=i%60,s=e=>String(e).padStart(2,`0`),c=new URLSearchParams({date:`${t.year}-${s(n)}-${s(r)}`,time:`${s(a)}:${s(o)}`});if(t.pos){let[e,n]=$u(t.pos[0],t.pos[1]);c.set(`lat`,n.toFixed(6)),c.set(`lon`,e.toFixed(6))}return t.altitude!==void 0&&c.set(`alt`,String(Math.round(t.altitude))),t.pitch!==void 0&&c.set(`pitch`,String(Math.round(t.pitch*180/Math.PI))),t.yaw!==void 0&&c.set(`dir`,String(Math.round((t.yaw*180/Math.PI%360+360)%360))),t.mode&&c.set(`mode`,t.mode),`${e.split(/[?#]/)[0]}?${c}`}function ah(e){let t=e>>>0||1;return()=>(t=t*1664525+1013904223>>>0)/4294967296}function oh(e,t,n){let r=(e,t,n)=>{let r=e*374761393+t*668265263+n*1274126177|0;return r=Math.imul(r^r>>>13,1274126177),((r^r>>>16)>>>0)/4294967296},i=Math.floor(e),a=Math.floor(t),o=Math.floor(n),s=e-i,c=t-a,l=n-o,u=e=>e*e*(3-2*e),d=u(s),f=u(c),p=u(l),m=(e,t,n)=>e+(t-e)*n;return m(m(m(r(i,a,o),r(i+1,a,o),d),m(r(i,a+1,o),r(i+1,a+1,o),d),f),m(m(r(i,a,o+1),r(i+1,a,o+1),d),m(r(i,a+1,o+1),r(i+1,a+1,o+1),d),f),p)}function sh(e,t,n=.75){let r=new Gl(e,5),i=r.attributes.position,a=ah(t),o=[a()*50,a()*50,a()*50],s=Array.from({length:3},()=>({n:new V(a()-.5,a()*.6,a()-.5).normalize(),d:e*(.62+a()*.2)})),c=new V;for(let t=0;t<i.count;t++){c.fromBufferAttribute(i,t).normalize();let r=.78+.32*oh(c.x*1.3+o[0],c.y*1.3+o[1],c.z*1.3+o[2]);r+=.12*(oh(c.x*4+o[1],c.y*4+o[2],c.z*4+o[0])-.5),r+=.04*(oh(c.x*11+o[2],c.y*11+o[0],c.z*11+o[1])-.5),c.multiplyScalar(e*r);for(let e of s){let t=c.dot(e.n)-e.d;t>0&&c.addScaledVector(e.n,-t*.85)}c.y*=n,c.y<-e*.25&&(c.y=-e*.25),i.setXYZ(t,c.x,c.y+e*.25,c.z)}return r.computeVertexNormals(),r}function ch(e,t,n){let r=null,i=0;for(let a of e){if(a.code!==2701)continue;let e=0;for(let r=0;r+3<a.pts.length;r+=2){let i=(a.pts[r]+a.pts[r+2])/2,o=(a.pts[r+1]+a.pts[r+3])/2;Math.hypot(i-t,o-n)<40&&(e+=Math.hypot(a.pts[r+2]-a.pts[r],a.pts[r+3]-a.pts[r+1]))}e>i&&(i=e,r=a)}return i<10?null:r}function lh(e,t,n,r,i=320){let a=ch(t,n,r);if(!a)return null;let o=hd(a.pts,e,3,0),s=Math.max(ld(a),5)/2+.4,c=new nm,l=new Z({color:13225168,roughness:.35,metalness:.7}),u=new Z({color:16052712,roughness:.4,transparent:!0,opacity:.55,side:2,depthWrite:!1}),d=0,f=1/0;for(let e=0;e<o.x.length;e++){let t=Math.hypot(o.x[e]-n,o.z[e]-r);t<f&&(f=t,d=e)}let p=[0];for(let e=1;e<o.x.length;e++)p.push(p[e-1]+Math.hypot(o.x[e]-o.x[e-1],o.z[e]-o.z[e-1]));let m=6.5,h=[],g=-1/0;for(let t=0;t<o.x.length;t++){if(Math.abs(p[t]-p[d])>i||o.bridge[t])continue;let n=Math.max(0,t-1),r=Math.min(o.x.length-1,t+1),a=o.x[r]-o.x[n],u=o.z[r]-o.z[n],f=Math.hypot(a,u)||1,_=u/f,v=-a/f,y=o.y[t];if(h.push(Array.from({length:9},(e,n)=>{let r=n/8*2-1;return new V(o.x[t]+_*s*r,y+m+1.6*(1-r*r),o.z[t]+v*s*r)})),p[t]-g>=9){g=p[t];for(let n of[-1,1]){let r=o.x[t]+_*s*n,i=o.z[t]+v*s*n;c.add(new X(.1,.12,m,10),l,r,Math.min(y,e.height(r,i))+m/2,i)}let n=h[h.length-1];for(let e=0;e<8;e++)c.beam(n[e].clone().setY(n[e].y-.08),n[e+1].clone().setY(n[e+1].y-.08),.12,.16,l)}}if(h.length<2)return null;let _=[];for(let e=0;e+1<h.length;e++){for(let t=0;t<8;t++){let n=h[e][t],r=h[e][t+1],i=h[e+1][t+1],a=h[e+1][t];_.push(n.x,n.y,n.z,r.x,r.y,r.z,i.x,i.y,i.z,n.x,n.y,n.z,i.x,i.y,i.z,a.x,a.y,a.z)}for(let t of[0,8])c.beam(h[e][t],h[e+1][t],.14,.2,l)}let v=new Ar;v.setAttribute(`position`,new W(_,3)),v.computeVertexNormals(),c.add(v,u);let y=c.build(!0,!0);for(let e of y.children)e.material===u&&(e.castShadow=!1);return y}var uh=(()=>{let e=null;return()=>{if(e)return e;let t=document.createElement(`canvas`);t.width=t.height=64;let n=t.getContext(`2d`),r=n.createRadialGradient(32,32,0,32,32,32);return r.addColorStop(0,`rgba(255,255,255,1)`),r.addColorStop(.25,`rgba(255,255,255,.55)`),r.addColorStop(1,`rgba(255,255,255,0)`),n.fillStyle=r,n.fillRect(0,0,64,64),e=new Ec(t)}})(),dh=[16730682,16756782,16773544,5951999,8257386,13855743,16743096,16777215],fh=class{sites;points;flash=new Cu(16769200,0,900,1.2);gold=new U(16760928);n=5e3;pos;col;vel=new Float32Array(this.n*3);base=new Float32Array(this.n*3);life=new Float32Array(this.n);max=new Float32Array(this.n);kind=new Uint8Array(this.n);next=0;timer=0;flashLeft=0;constructor(e){this.sites=e;let t=new Ar;this.pos=new Float32Array(this.n*3),this.col=new Float32Array(this.n*3),t.setAttribute(`position`,new br(this.pos,3)),t.setAttribute(`color`,new br(this.col,3)),this.points=new wc(t,new yc({size:3.2,map:uh(),vertexColors:!0,transparent:!0,depthWrite:!1,blending:2})),this.points.frustumCulled=!1}alloc(){for(let e=0;e<this.n;e++){let t=(this.next+e)%this.n;if(this.life[t]<=0)return this.next=(t+1)%this.n,t}return-1}emit(e,t,n,r,i,a,o,s,c){let l=this.alloc();l<0||(this.pos.set([e,t,n],l*3),this.vel.set([r,i,a],l*3),this.base.set([s.r,s.g,s.b],l*3),this.life[l]=this.max[l]=o,this.kind[l]=c)}launch(){let e=this.sites[Math.floor(Math.random()*this.sites.length)],t=new U(16767392);this.emit(e.x+(Math.random()-.5)*20,e.y+1,e.z+(Math.random()-.5)*20,(Math.random()-.5)*4,70+Math.random()*25,(Math.random()-.5)*4,2.2+Math.random()*.8,t,1)}burst(e,t,n,r,i){let a=Math.random(),o=new U(dh[Math.floor(Math.random()*dh.length)]),s=new U(dh[Math.floor(Math.random()*dh.length)]),c=26+Math.random()*18,l=new V;if(a<.2){let r=new U(16760928);for(let i=0;i<160;i++)l.randomDirection().multiplyScalar(c*(.8+Math.random()*.3)),this.emit(e,t,n,l.x,l.y,l.z,3.5+Math.random(),r,2)}else if(a<.35){let r=new V().randomDirection(),i=new V(1,0,0).cross(r).normalize(),a=r.clone().cross(i);for(let r=0;r<90;r++){let s=r/90*Math.PI*2;l.copy(i).multiplyScalar(Math.cos(s)).addScaledVector(a,Math.sin(s)).multiplyScalar(c),this.emit(e,t,n,l.x,l.y,l.z,2.2,o,0)}}else{for(let r=0;r<150;r++)l.randomDirection().multiplyScalar(c*(.9+Math.random()*.2)),this.emit(e,t,n,l.x,l.y,l.z,2+Math.random()*.6,o,0);for(let r=0;r<50;r++)l.randomDirection().multiplyScalar(c*.45),this.emit(e,t,n,l.x,l.y,l.z,1.6,s,0)}this.flash.position.set(e,t,n),this.flash.color.copy(a<.2?this.gold:o),this.flashLeft=.35,i.firework(r.distanceTo(this.flash.position),a<.25)}update(e,t,n,r){if(t&&(this.timer-=e,this.timer<=0)){let e=Math.random()<.15?5+Math.floor(Math.random()*6):1;for(let t=0;t<e;t++)this.launch();this.timer=e>1?3.5:.5+Math.random()*1.6}let i=!1;for(let t=0;t<this.n;t++){if(this.life[t]<=0)continue;i=!0;let a=t*3,o=this.kind[t],s=o===1?0:o===2?1.6:1.1,c=o===2?6:o===1?26:4,l=Math.max(0,1-s*e);this.vel[a]*=l,this.vel[a+1]=this.vel[a+1]*l-c*e,this.vel[a+2]*=l,this.pos[a]+=this.vel[a]*e,this.pos[a+1]+=this.vel[a+1]*e,this.pos[a+2]+=this.vel[a+2]*e,this.life[t]-=e;let u=Math.max(0,this.life[t]/this.max[t]),d=o===1?.5:u*u*(.75+.25*Math.random());this.col[a]=this.base[a]*d,this.col[a+1]=this.base[a+1]*d,this.col[a+2]=this.base[a+2]*d,this.life[t]<=0&&(this.col[a]=this.col[a+1]=this.col[a+2]=0,o===1&&this.burst(this.pos[a],this.pos[a+1],this.pos[a+2],n,r))}this.points.visible=i,i&&(this.points.geometry.attributes.position.needsUpdate=!0,this.points.geometry.attributes.color.needsUpdate=!0),this.flashLeft=Math.max(0,this.flashLeft-e),this.flash.visible=t||this.flashLeft>0,this.flash.intensity=(this.flashLeft/.35)**2*4e4}};function ph(e,t,n,r,i){let a=hd(t,e,n,0);for(let t=1;t<a.x.length;t++){if(a.bridge[t])continue;let n=a.x[t]-a.x[t-1],o=a.z[t]-a.z[t-1],s=Math.hypot(n,o)||1,c=t%2?r:-r,l=a.x[t]+o/s*c,u=a.z[t]-n/s*c;i.push(l,e.height(l,u),u,Math.atan2(n,o))}}var mh=class{isOpen;group=new Y;fireworks;lanterns;lanternMat;lanternGlow;banners;oni=[];oniGroup=new Y;route=null;time=0;constructor(e,t,n,r){this.isOpen=r,this.fireworks=new fh(n.barges),this.fireworks.flash.visible=!1,this.group.add(this.fireworks.points,this.fireworks.flash);let i=[],[a,o,s]=n.town;for(let n of t){if(n.code!==2721&&n.code!==2731&&(n.code!==2701||n.width!==0))continue;let t=!1;for(let e=0;e<n.pts.length&&!t;e+=2)t=Math.hypot(n.pts[e]-a,n.pts[e+1]-o)<s;t&&ph(e,n.pts,3,ld(n)/2+.3,i)}for(let[t,r]of n.temples)for(let n=0;n<28;n++){let a=n/28*Math.PI*2,o=9+n%2*4,s=t+Math.cos(a)*o,c=r+Math.sin(a)*o;i.push(s,e.height(s,c),c,a)}let c=[];for(let e=0;e<i.length&&c.length<10400;e+=4)this.isOpen(i[e],i[e+2])&&c.push(i[e],i[e+1],i[e+2],i[e+3]);this.lanternMat=new Z({color:15918796,emissive:16756816,emissiveIntensity:1.6,roughness:.9});let l=new X(.11,.13,.32,10).translate(0,.16,0),u=c.length/4,d=new ac(l,this.lanternMat,u),f=new Float32Array(u*3),p=new H;for(let e=0;e<u;e++)p.makeRotationY(c[e*4+3]).setPosition(c[e*4],c[e*4+1],c[e*4+2]),d.setMatrixAt(e,p),f.set([c[e*4],c[e*4+1]+.2,c[e*4+2]],e*3);d.frustumCulled=!1;let m=new Ar;m.setAttribute(`position`,new br(f,3)),this.lanternGlow=new yc({size:1.4,map:uh(),color:16758880,transparent:!0,depthWrite:!1,blending:2});let h=new wc(m,this.lanternGlow);h.frustumCulled=!1,this.lanterns=new Y,this.lanterns.add(d,h),this.lanterns.visible=!1,this.group.add(this.lanterns),this.banners=new Y,this.banners.visible=!1,this.group.add(this.banners,this.oniGroup);let g=ch(t,n.street[0],n.street[1]);if(g){let t=[];ph(e,g.pts,9,Math.max(ld(g),5)/2+.2,t);let r=[];for(let e=0;e<t.length;e+=4)Math.hypot(t[e]-n.street[0],t[e+2]-n.street[1])<420&&r.push(...t.slice(e,e+4));let i=r.length/4,a=new ac(new X(.03,.035,4.6,6).translate(0,2.3,0),new Z({color:14210248,roughness:.6}),i),o=new _i(.62,2.8,1,8),s=o.attributes.position;for(let e=0;e<s.count;e++)s.setZ(e,Math.sin((s.getY(e)+1.4)/2.8*Math.PI)*.08);o.computeVertexNormals(),o.translate(.34,2.9,0);let c=new ac(o,new Z({roughness:.85,side:2}),i),l=[13111342,15921128,2047866,15246620],u=new U;for(let e=0;e<i;e++)p.makeRotationY(r[e*4+3]+Math.PI/2).setPosition(r[e*4],r[e*4+1],r[e*4+2]),a.setMatrixAt(e,p),c.setMatrixAt(e,p),c.setColorAt(e,u.set(l[e%l.length]));for(let e of[a,c])e.castShadow=!0,this.banners.add(e);let d=hd(g.pts,e,3,.05);this.route=Bp(d,0),this.route&&(this.route.offset=0)}if(this.route){[12068894,2763312,14198842].forEach((e,t)=>this.oni.push({...hh(e),t:0,dir:t%2?1:-1,speed:1.1+t*.25,phase:t*2}));for(let e of this.oni)this.oniGroup.add(e.obj)}this.oniGroup.visible=!1}placeOni(e,t){let n=this.route;if(!n)return;let r=0,i=1/0;for(let a=0;a<n.d.x.length;a++){let o=Math.hypot(n.d.x[a]-e,n.d.z[a]-t);o<i&&(i=o,r=n.s[a])}this.oni.forEach((e,t)=>{e.t=r+(t-1)*12})}update(e,t,n,r){if(this.time+=e,this.fireworks.update(e,!!t?.fireworks,n,r),this.lanterns.visible=!!t?.lanterns,this.lanterns.visible){let e=.85+.15*Math.sin(this.time*13)*Math.sin(this.time*7.3+1);this.lanternMat.emissiveIntensity=1.6*e,this.lanternGlow.opacity=.75*e}this.banners.visible=!!t?.banners;let i=!!t?.oni&&!!this.route;if(i&&!this.oniGroup.visible&&this.placeOni(n.x,n.z),this.oniGroup.visible=i,i){let t=this.route,n=t.s[t.s.length-1],r={x:0,y:0,z:0,yaw:0};for(let i of this.oni){let a=Math.sin(this.time*.37+i.phase)>.75?2.6:1;i.t+=i.speed*a*i.dir*e,(i.t<5||i.t>n-5)&&(i.dir*=-1),i.t=Math.min(n-5,Math.max(5,i.t)),Vp(t,i.t,i.dir,r),i.obj.position.set(r.x,r.y,r.z),i.obj.rotation.y=r.yaw;let o=Math.sin(this.time*6*a+i.phase)*.5;i.legs[0].rotation.x=o,i.legs[1].rotation.x=-o,i.arms[0].rotation.x=-o*.6,i.arms[1].rotation.x=-1.2+Math.sin(this.time*4+i.phase)*.5}}}};function hh(e){let t=new Y,n=$p(1),r=(e,t=.8)=>new Z({color:e,roughness:t}),i=r(2047866),a=r(15921128),o=r(e,.45),s=r(2762018,.95),c=r(13152368,.6);t.add(new G(n.torso,i),new G(n.pelvis,a));let l=new Y;l.position.set(0,1.62,0);let u=new G(new Yl(.15,18,14).scale(1,1.15,.8),o),d=new G(new il(.035,.14,10).rotateX(Math.PI/2),o);d.position.set(0,-.01,.15);let f=new G(new Yl(.21,16,12,0,Math.PI*2,0,Math.PI*.62).scale(1.1,1.2,1),s);f.position.set(0,.05,-.05),l.add(u,d,f);for(let e of[-1,1]){let t=new G(new K(.09,.025,.04),s);t.position.set(e*.06,.06,.12),t.rotation.z=e*.3;let n=new G(new Yl(.022,8,6),r(15917168,.3));n.position.set(e*.06,.02,.12),l.add(t,n)}t.add(l);let p=(e,n,r)=>{let i=new Y;i.position.set(e,n,0);for(let[e,t]of r)i.add(new G(e,t));return t.add(i),i},[m,h]=Zp,[g,_]=Qp,v=[-1,1].map(e=>p(e*m,h,[[n.leg,a],[n.shoe,r(3811870)]])),y=[-1,1].map(e=>p(e*g,_,[[n.arm,i],[n.hand,o]])),b=new G(new X(.02,.025,1.1,8),c);return b.position.set(0,-.62,.45),b.rotation.x=Math.PI/2.3,y[1].add(b),t.traverse(e=>{e.castShadow=!0}),t.scale.setScalar(1.05),{obj:t,legs:v,arms:y}}var gh=(e,t)=>e*100+t;function _h(e,t,n,r){let i=gh(e,t);return n<=r?i>=n&&i<=r:i>=n||i<=r}function vh(e){let t=e>>>0||1;return()=>(t=t*1664525+1013904223>>>0)/4294967296}var yh=new V(1,0,.25).normalize(),bh=class{group=new Y;carp=[];poles=[];uTime={value:0};m=new H;q=new Kt;e=new Mn;constructor(e,t,n,r){let i=vh(5),[a,o,s]=n.town;for(let n of t){if(this.poles.length>=32)break;if(n.code!==3101||i()>.06)continue;let t=n.pts,c=t.length/2,l=0,u=0;for(let e=0;e<c;e++)l+=t[e*2],u+=t[e*2+1];if(l/=c,u/=c,Math.hypot(l-a,u-o)>s)continue;let d=t[0]-l,f=t[1]-u,p=Math.hypot(d,f)||1,m=t[0]+d/p*1.5,h=t[1]+f/p*1.5;r(m,h)&&this.poles.push(new V(m,e.height(m,h),h))}let c=this.poles.length,l=new nm,u=new Z({color:14210248,roughness:.5,metalness:.4}),d=new Z({color:14200906,roughness:.3,metalness:.7});for(let e of this.poles)l.add(new X(.05,.08,10,8),u,e.x,e.y+5,e.z),l.add(new Yl(.14,12,8),d,e.x,e.y+10.1,e.z),l.add(new X(.32,.32,.03,16),d,e.x,e.y+9.85,e.z);c&&this.group.add(l.build());let f=[[0,2.6,9.4],[1842214,3,8.4],[13117498,2.5,7.3],[2775720,2,6.3]];f.forEach(([e,t],n)=>{let r=n===0?Sh(t):xh(t,new U(e)),i=new Z({vertexColors:!0,roughness:.6,side:2});i.onBeforeCompile=e=>{e.uniforms.uTime=this.uTime,e.vertexShader=e.vertexShader.replace(`#include <common>`,`#include <common>
uniform float uTime;`).replace(`#include <begin_vertex>`,`#include <begin_vertex>
{
  // Ripple travelling down the body, growing toward the tail
  float s = transformed.x;
  float ph = float(gl_InstanceID) * 1.7;
  transformed.y += sin(uTime * 5.0 - s * 2.2 + ph) * 0.06 * s;
  transformed.z += sin(uTime * 3.7 - s * 1.6 + ph) * 0.09 * s;
}`)};let a=new ac(r,i,Math.max(c,1));a.count=c,a.castShadow=!0,a.frustumCulled=!1,this.carp.push(a),this.group.add(a)}),this.heights=f.map(e=>e[2]),this.group.visible=!1}heights;pos=new V;one=new V(1,1,1);update(e){this.uTime.value=e;let t=Math.atan2(-yh.z,yh.x);this.poles.forEach((n,r)=>{let i=.5+.5*Math.sin(e*.45+r*1.3)*Math.sin(e*.23+r);this.carp.forEach((a,o)=>{let s=t+Math.sin(e*.6+r+o*.4)*.25,c=-1.1+i*.95+Math.sin(e*1.3+o+r)*.05;this.q.setFromEuler(this.e.set(0,s,c,`YZX`)),this.m.compose(this.pos.set(n.x,n.y+this.heights[o],n.z),this.q,this.one),a.setMatrixAt(r,this.m)})});for(let e of this.carp)e.instanceMatrix.needsUpdate=!0}};function xh(e,t){let n=new nl([[.22,0],[.26,.08],[.3,.3],[.29,.6],[.22,.85],[.17,.93],[.3,1]].map(([t,n])=>new R(t*e*.35,n*e)),18,0,Math.PI*2);n.rotateZ(-Math.PI/2);let r=n.attributes.position,i=new Float32Array(r.count*3),a=new U(16052714),o=new U(15249456),s=new U;for(let n=0;n<r.count;n++){let c=r.getX(n)/e,l=r.getY(n),u=r.getZ(n),d=Math.atan2(l,u),f=Math.max(0,-Math.sin(d)),p=c>.05&&c<.16&&Math.abs(Math.cos(d))>.8&&Math.sin(d)>-.2,m=.85+.15*Math.sin(c*60+Math.cos(d)*8);s.copy(t).multiplyScalar(m).lerp(a,f*.75),c>.93&&s.copy(t).lerp(a,.3),p&&s.copy(c>.08&&c<.13?a:o),i.set([s.r,s.g,s.b],n*3)}return n.setAttribute(`color`,new br(i,3)),n}function Sh(e){let t=new X(.4,.3,e,20,10,!0).rotateZ(-Math.PI/2).translate(e/2,0,0),n=t.attributes.position,r=new Float32Array(n.count*3),i=[2775720,16052714,13117498,15249456,2787914].map(e=>new U(e));for(let e=0;e<n.count;e++){let t=Math.atan2(n.getY(e),n.getZ(e)),a=i[Math.floor((t+Math.PI)/(Math.PI*2)*5)%5];r.set([a.r,a.g,a.b],e*3)}return t.setAttribute(`color`,new br(r,3)),t}function Ch(e,t,n){let r=new nm,i=ch(t,n.street[0],n.street[1]);if(!i)return r.build();let a=vh(77),o=new Z({color:8034890,roughness:.6}),s=new Z({color:5143090,roughness:.8,side:2}),c=[15224922,15913034,4885208,6997098,15921128,14187208].map(e=>new Z({color:e,roughness:.85,side:2})),l=hd(i.pts,e,16,0),u=Math.max(ld(i),5)/2+.3;for(let t=1;t<l.x.length;t++){if(Math.hypot(l.x[t]-n.street[0],l.z[t]-n.street[1])>380||l.bridge[t])continue;let i=l.x[t]-l.x[t-1],d=l.z[t]-l.z[t-1],f=Math.hypot(i,d)||1,p=t%2?1:-1,m=l.x[t]+d/f*u*p,h=l.z[t]-i/f*u*p,g=e.height(m,h),_=(a()-.5)*.15;r.add(new X(.025,.04,4.8,6),o,m,g+2.4,h,0,_,0);for(let e=0;e<12;e++){let e=a()*Math.PI*2,t=3+a()*1.8;r.add(new _i(.06,.32).translate(0,-.16,0),s,m+Math.cos(e)*.25,g+t,h+Math.sin(e)*.25,e,.9,0)}for(let e=0;e<22;e++){let t=a()*Math.PI*2,n=.15+a()*.5,i=2.4+a()*2;r.add(new _i(.07,.22).translate(0,-.11,0),c[e%c.length],m+Math.cos(t)*n,g+i,h+Math.sin(t)*n,a()*Math.PI)}}return r.build(!0,!1)}function wh(){let e=[],t=e=>{let t=new X(.06,.06,e,12,1,!1),n=t.attributes.position;for(let e=0;e<n.count;e++)n.getY(e)>0&&n.setY(e,n.getY(e)-n.getZ(e)*1.2);return t.computeVertexNormals(),t};return e.push(t(1.3).translate(0,1,-.04),t(1).translate(-.12,.85,.05),t(.85).translate(.12,.77,.05)),e}function Th(e,t){let n=new nm,r=new Z({color:5933626,roughness:.45}),i=new Z({color:13150312,roughness:.9}),a=new Z({color:3037738,roughness:.85}),o=new Z({color:8014378,roughness:.8});for(let[s,c,l]of e.gates)for(let e of[-1,1]){let u=s+Math.cos(l)*e*2.6,d=c-Math.sin(l)*e*2.6,f=t.height(u,d),p=new Yn;p.position.set(u,f,d),p.rotation.y=l,p.updateMatrix();for(let e of wh())n.addMatrix(e,r,p.matrix);n.addMatrix(new X(.3,.34,.45,16).translate(0,.22,0),i,p.matrix);for(let e of[.12,.32])n.addMatrix(new Xl(.33,.02,4,24).rotateX(Math.PI/2).translate(0,e,0),o,p.matrix);for(let e=0;e<7;e++){let t=e/7*Math.PI*2;n.addMatrix(new il(.1,.35,6).rotateZ(Math.cos(t)*.8).rotateX(Math.sin(t)*.8).translate(Math.cos(t)*.22,.6,Math.sin(t)*.22),a,p.matrix)}}return n.build()}var Eh=class{group=new Y;flowers;bloom=-1;constructor(e,t,n,r){let i=vh(41),a=[],[o,s,c]=n.town;for(let n of t){if(n.code!==2721&&n.code!==2731||Math.hypot(n.pts[0]-o,n.pts[1]-s)>c)continue;let t=hd(n.pts,e,7,0);for(let n=1;n<t.x.length&&a.length<2e3;n++){if(i()>.55)continue;let o=t.x[n]-t.x[n-1],s=t.z[n]-t.z[n-1],c=Math.hypot(o,s)||1,l=i()<.5?1:-1,u=t.x[n]+s/c*1.6*l,d=t.z[n]-o/c*1.6*l;r(u,d)&&a.push(u,e.height(u,d),d,.7+i()*.5)}}let l=a.length/4,u=new ac(new Gl(.6,2).scale(1.2,.75,1.1).translate(0,.38,0),new Z({color:4090418,roughness:.85}),Math.max(l,1)),d=[],f=vh(9);for(let e=0;e<9;e++){let e=f()*Math.PI*2,t=.3+f()*.9,n=new V(Math.cos(e)*Math.cos(t)*.66,.38+Math.sin(t)*.42,Math.sin(e)*Math.cos(t)*.6);d.push(new Gl(.17,1).translate(n.x,n.y,n.z))}let p=Dh(d);this.flowers=new ac(p,new Z({roughness:.7}),Math.max(l,1));let m=[5929688,8022736,10119880,14191288,6988e3,15262960].map(e=>new U(e)),h=new H,g=new Kt,_=new V(0,1,0);for(let e=0;e<l;e++){let t=a[e*4+3];h.compose(new V(a[e*4],a[e*4+1],a[e*4+2]),g.setFromAxisAngle(_,f()*6.28),new V(t,t,t)),u.setMatrixAt(e,h),this.flowers.setMatrixAt(e,h),this.flowers.setColorAt(e,m[Math.floor(f()*m.length)])}u.count=this.flowers.count=l;for(let e of[u,this.flowers])e.castShadow=!0,e.receiveShadow=!0,this.group.add(e)}setBloom(e){e!==this.bloom&&(this.bloom=e,this.flowers.visible=e>.02,this.flowers.material.color.setScalar(.55+.45*e))}};function Dh(e){let t=new Ar,n=[],r=[];for(let t of e){let e=t.index?t.toNonIndexed():t;n.push(...e.attributes.position.array),r.push(...e.attributes.normal.array)}return t.setAttribute(`position`,new W(n,3)),t.setAttribute(`normal`,new W(r,3)),t}var Oh=class{mesh;list=[];constructor(e,t){this.mesh=t;for(let t=0;t<e;t++)this.list.push({p:new V,v:new V,phase:Math.random()*10,target:new V,timer:0})}};function kh(){let e=new ol;return e.moveTo(0,.12),e.lineTo(.05,.05),e.lineTo(.2,.02),e.lineTo(.17,-.03),e.lineTo(.04,-.03),e.lineTo(.05,-.16),e.lineTo(0,-.08),e.lineTo(-.05,-.16),e.lineTo(-.04,-.03),e.lineTo(-.17,-.03),e.lineTo(-.2,.02),e.lineTo(-.05,.05),e.closePath(),new ql(e).rotateX(Math.PI/2).scale(1.4,1,1.4)}function Ah(){let e=new X(.006,.004,.07,6).rotateX(Math.PI/2),t=new Yl(.008,8,6).translate(0,0,.036),n=Dh([new _i(.11,.014).rotateX(-Math.PI/2).translate(0,.002,.014),new _i(.1,.014).rotateX(-Math.PI/2).translate(0,.002,.002)]);return{body:Dh([e,t]),wings:n}}var jh=class{hm;veg;sites;group=new Y;carp;tanabata;kadomatsu;hydrangeas;swallows;fireflies;dragonflies;dragonWings;ducks;time=0;m=new H;q=new Kt;e=new Mn;tmp=new V;one=new V(1,1,1);dragonScale=new V(1.4,1.4,1.4);constructor(e,t,n,r,i,a){this.hm=e,this.veg=r,this.sites=i,this.carp=new bh(e,t,i,a),this.tanabata=Ch(e,n,i),this.kadomatsu=Th(i,e),this.hydrangeas=new Eh(e,n,i,a);let o=new Z({color:1711658,roughness:.5,side:2});this.swallows=new Oh(10,new ac(kh(),o,10));let s=new Ar;s.setAttribute(`position`,new br(new Float32Array(210),3)),s.setAttribute(`color`,new br(new Float32Array(210),3)),this.fireflies=new Oh(70,new wc(s,new yc({size:.5,map:uh(),vertexColors:!0,transparent:!0,depthWrite:!1,blending:2})));let c=Ah();this.dragonflies=new Oh(16,new ac(c.body,new Z({color:13119518,roughness:.5}),16)),this.dragonWings=new ac(c.wings,new Z({color:15265522,roughness:.2,transparent:!0,opacity:.45,side:2,depthWrite:!1}),16);let l=[],u=vh(23),[d,f,p]=i.town;for(let t=0;t<400&&l.length<5;t++){let t=d+(u()-.5)*p*2.4,n=f+(u()-.2)*p*1.6,r=e.height(t,n);r<-1.5&&r>-6&&e.height(t,n-25)>0&&l.push(new V(t,0,n))}let m=new Yl(.16,12,8).scale(1,.62,1.6).translate(0,.04,0),h=new Yl(.075,10,8).translate(0,.2,.2),g=l.length*8;this.ducks={body:new ac(m,new Z({roughness:.8}),Math.max(g,1)),head:new ac(h,new Z({roughness:.5}),Math.max(g,1)),spots:l};let _=new U;for(let e=0;e<g;e++){let t=e%2==0;this.ducks.body.setColorAt(e,_.set(t?9079428:8018494)),this.ducks.head.setColorAt(e,_.set(t?1989178:6965808))}this.ducks.body.count=this.ducks.head.count=g;for(let e of[this.carp.group,this.tanabata,this.kadomatsu,this.hydrangeas.group,this.swallows.mesh,this.fireflies.mesh,this.dragonflies.mesh,this.dragonWings,this.ducks.body,this.ducks.head])e.frustumCulled=!1,this.group.add(e)}vegAt(e,t){return this.veg.at(Math.round((e-Hu)/Q.vegCell),Math.round((t-Uu)/Q.vegCell))}update(e,t,n){this.time+=e;let r=this.time,{month:i,day:a,hours:o,night:s}=t,c=Math.hypot(n.x-this.sites.town[0],n.z-this.sites.town[1])<this.sites.town[2]+800;this.carp.group.visible=c&&_h(i,a,410,505),this.carp.group.visible&&this.carp.update(r),this.tanabata.visible=c&&_h(i,a,701,707),this.kadomatsu.visible=c&&_h(i,a,1226,107);let l=gh(i,a);this.hydrangeas.setBloom(l>=601&&l<=715?Math.min(1,(l-601)/10,(715-l)/10):0),this.hydrangeas.group.visible=c;let u=n.y-Math.max(this.hm.height(n.x,n.z),0)<40,d=u&&c&&_h(i,a,401,731)&&s<.3&&o>5;this.swallows.mesh.visible=d,d&&this.flySwallows(e,n);let f=u&&_h(i,a,525,630)&&s>.7&&o>=19.5&&o<23;this.fireflies.mesh.visible=f,f&&this.flyFireflies(e,n);let p=u&&_h(i,a,901,1031)&&s<.2&&o>9&&o<17.5;this.dragonflies.mesh.visible=this.dragonWings.visible=p,p&&this.flyDragonflies(e,n);let m=_h(i,a,1115,310)&&this.ducks.spots.length>0;this.ducks.body.visible=this.ducks.head.visible=m,m&&this.floatDucks(t.water)}flySwallows(e,t){let n=this.swallows.mesh;this.swallows.list.forEach((r,i)=>{if(r.timer-=e,r.timer<=0||r.p.distanceTo(t)>120){(r.p.lengthSq()===0||r.p.distanceTo(t)>120)&&r.p.set(t.x+(Math.random()-.5)*80,0,t.z+(Math.random()-.5)*80);let e=t.x+(Math.random()-.5)*70,n=t.z+(Math.random()-.5)*70;r.target.set(e,Math.max(this.hm.height(e,n),0)+3+Math.random()*10,n),r.timer=1.5+Math.random()*2,r.p.y===0&&(r.p.y=r.target.y)}let a=this.tmp.copy(r.target).sub(r.p).normalize().multiplyScalar(13);r.v.lerp(a,Math.min(1,e*2.2)),r.p.addScaledVector(r.v,e);let o=Math.atan2(r.v.x,r.v.z),s=Math.max(-1,Math.min(1,(a.z*r.v.x-a.x*r.v.z)*.02));this.q.setFromEuler(this.e.set(Math.atan2(-r.v.y,Math.hypot(r.v.x,r.v.z))*.6,o,s,`YXZ`)),this.m.compose(r.p,this.q,this.one),n.setMatrixAt(i,this.m)}),n.instanceMatrix.needsUpdate=!0}flyFireflies(e,t){let n=this.fireflies.mesh,r=n.geometry.attributes.position,i=n.geometry.attributes.color;this.fireflies.list.forEach((n,a)=>{if(n.p.lengthSq()===0||n.p.distanceTo(t)>60){let e=t.x,r=t.z,i=-1;for(let n=0;n<6;n++){let n=t.x+(Math.random()-.5)*90,a=t.z+(Math.random()-.5)*90,o=this.vegAt(n,a);o>i&&this.hm.height(n,a)>.5&&(i=o,e=n,r=a)}n.p.set(e,this.hm.height(e,r)+.5+Math.random()*2.5,r),n.v.set(0,0,0),n.timer=+(i>60)}n.v.x+=(Math.random()-.5)*e*1.2,n.v.y+=(Math.random()-.5)*e*.6,n.v.z+=(Math.random()-.5)*e*1.2,n.v.multiplyScalar(.98),n.p.addScaledVector(n.v,e);let o=this.hm.height(n.p.x,n.p.z);n.p.y=Math.min(Math.max(n.p.y,o+.3),o+3.5);let s=Math.max(0,Math.sin(this.time*2.2+n.phase))**3*n.timer;r.setXYZ(a,n.p.x,n.p.y,n.p.z),i.setXYZ(a,.75*s,1*s,.35*s)}),r.needsUpdate=i.needsUpdate=!0}flyDragonflies(e,t){let n=this.dragonflies.mesh;this.dragonflies.list.forEach((r,i)=>{if(r.timer-=e,r.p.lengthSq()===0||r.p.distanceTo(t)>40){let e=t.x+(Math.random()-.5)*40,n=t.z+(Math.random()-.5)*40;r.p.set(e,this.hm.height(e,n)+1+Math.random()*2.5,n)}if(r.timer<=0){let e=r.p.x+(Math.random()-.5)*8,t=r.p.z+(Math.random()-.5)*8;r.target.set(e,Math.max(this.hm.height(e,t),0)+.8+Math.random()*2.5,t),r.timer=.6+Math.random()*2.2}let a=this.tmp.copy(r.target).sub(r.p);r.p.addScaledVector(a,Math.min(1,e*3));let o=a.lengthSq()>.01?Math.atan2(a.x,a.z):r.phase;r.phase=o,this.q.setFromEuler(this.e.set(0,o,0)),this.m.compose(r.p,this.q,this.dragonScale),n.setMatrixAt(i,this.m),this.q.setFromEuler(this.e.set(Math.sin(this.time*60+i)*.15,o,0)),this.m.compose(r.p,this.q,this.dragonScale),this.dragonWings.setMatrixAt(i,this.m)}),n.instanceMatrix.needsUpdate=this.dragonWings.instanceMatrix.needsUpdate=!0}floatDucks(e){let t=0,n=this.tmp;this.ducks.spots.forEach((r,i)=>{for(let a=0;a<8;a++){let o=a%2?1:-1,s=this.time*.05*o+a*.8+i,c=2+a%4*1.5;n.set(r.x+Math.cos(s)*c,e+Math.sin(this.time*1.3+a)*.02,r.z+Math.sin(s)*c),this.q.setFromEuler(this.e.set(0,-s+(o>0?0:Math.PI),0)),this.m.compose(n,this.q,this.one),this.ducks.body.setMatrixAt(t,this.m),this.ducks.head.setMatrixAt(t,this.m),t++}}),this.ducks.body.instanceMatrix.needsUpdate=this.ducks.head.instanceMatrix.needsUpdate=!0}},Mh=(e,t=.6,n={})=>new Z({color:e,roughness:t,...n}),Nh=class{pts;s=[0];constructor(e){this.pts=e;for(let t=1;t<e.length;t++)this.s.push(this.s[t-1]+e[t].distanceTo(e[t-1]))}get length(){return this.s[this.s.length-1]}at(e,t=new V){e=Math.max(0,Math.min(this.length,e));let n=0,r=this.s.length-1;for(;r-n>1;){let t=n+r>>1;this.s[t]<=e?n=t:r=t}let i=this.s[r]-this.s[n]||1;return t.copy(this.pts[n]).lerp(this.pts[r],(e-this.s[n])/i)}nearest(e,t){let n=1/0,r=0;for(let i=0;i<this.pts.length;i++){let a=Math.hypot(this.pts[i].x-e,this.pts[i].z-t);a<n&&(n=a,r=this.s[i])}return r}},Ph=class{hw;hl;delta={x:0,y:0,z:0};x=0;y=0;z=0;yaw=0;constructor(e,t){this.hw=e,this.hl=t}move(e,t,n,r){this.delta={x:e-this.x,y:t-this.y,z:n-this.z},this.x=e,this.y=t,this.z=n,this.yaw=r}heightAt(e,t){let n=e-this.x,r=t-this.z,i=Math.cos(this.yaw),a=Math.sin(this.yaw),o=n*i-r*a,s=n*a+r*i;return Math.abs(o)<=this.hw&&Math.abs(s)<=this.hl?this.y:null}};function Fh(e,t,n){let r=e%(2*(t+n));return r<n?{p:0,dir:1}:(r-=n,r<t?{p:Ih(r/t),dir:1}:(r-=t,r<n?{p:1,dir:-1}:(r-=n,{p:1-Ih(r/t),dir:-1})))}var Ih=e=>{let t=.12;return e<t?e*e/(2*t*.88):e>.88?1-(1-e)*(1-e)/(2*t*.88):(e-t/2)/.88},Lh=class{group=new Y;platforms=[];gondolas=[];path;base;top;constructor(e,t,n){let[r,i]=Qu(...t),[a,o]=Qu(...n),s=e.height(r,i)+.3,c=e.height(a,o)+.3;this.base=new V(r,s,i),this.top=new V(a,c,o);let l=[];for(let t=0;t<=80;t++){let n=t/80,u=r+(a-r)*n,d=i+(o-i)*n,f=s+(c-s)*n;l.push(t===0||t===80?f:Math.max(f,e.height(u,d)+9))}for(let t=0;t<30;t++)for(let t=1;t<80;t++){let n=t/80,s=r+(a-r)*n,c=i+(o-i)*n;l[t]=Math.max((l[t-1]+l[t]+l[t+1])/3,e.height(s,c)+7)}let u=l.map((e,t)=>new V(r+(a-r)*t/80,e,i+(o-i)*t/80));this.path=new Nh(u);let d=Math.atan2(a-r,o-i),f=new Ar().setFromPoints(u.map(e=>e.clone().add(new V(0,4.2,0))));for(let e of[-1.6,1.6]){let t=new mc(f,new oc({color:3355443}));t.position.set(Math.cos(d)*e,0,-Math.sin(d)*e),this.group.add(t)}for(let e of[this.base,this.top]){let t=new Y,n=new G(new K(9,.5,12),Mh(15790314));n.position.y=6,t.add(n);for(let[e,n]of[[-4,-5.5],[4,-5.5],[4,5.5],[-4,5.5]]){let r=new G(new K(.4,6,.4),Mh(12597547));r.position.set(e,3,n),t.add(r)}let r=new G(new K(9,.6,12),Mh(10524808));r.position.y=-.3,t.add(r),t.position.copy(e),t.rotation.y=d,this.group.add(t)}for(let e=0;e<2;e++){let t=Bh(e?14242639:4033497);t.rotation.y=d,t.traverse(e=>{e.castShadow=!0}),this.group.add(t),this.gondolas.push(t),this.platforms.push(new Ph(1.3,1.4))}}update(e){let{p:t}=Fh(e,60,18),n=new V;[t,1-t].forEach((e,t)=>{this.path.at(e*this.path.length,n),this.gondolas[t].position.copy(n),this.platforms[t].move(n.x,n.y+.08,n.z,this.gondolas[t].rotation.y)})}},Rh=class{group=new Y;platforms=[];routes=[];vessels=[];boats=[];constructor(e,t){for(let{name:n,lon:r,lat:i}of t){let[t,a]=Qu(r,i),o=null,s=null;for(let n=a-1200;n<a+1200;n+=2){let r=e.height(t,n);if(o===null&&r<-1.2&&e.height(t,n-6)>.4)o=n;else if(o!==null&&r>.4){s=n;break}}if(o===null||s===null)continue;let c={a:new V(t,0,o+3),b:new V(t,0,s-5),name:n};this.routes.push(c);let l=zh();this.group.add(l),this.boats.push(l),this.platforms.push(new Ph(2.6,6.2)),this.vessels.push({x:c.a.x,z:c.a.z,dx:0,dz:1,speed:0,beam:6})}}update(e,t,n){this.routes.forEach((r,i)=>{let a=r.a.distanceTo(r.b),o=a/2.5,{p:s}=Fh(e+i*17,o,20),c=r.a.x+(r.b.x-r.a.x)*s,l=r.a.z+(r.b.z-r.a.z)*s,u=t+(n?.(c,l)??0)+Math.sin(e*1.2+i)*.03,d=Math.atan2(r.b.x-r.a.x,r.b.z-r.a.z),f=this.boats[i];f.position.set(c,u,l),f.rotation.y=d,this.platforms[i].move(c,u+1.2,l,d);let p=.25,m=(s-Fh(e-p+i*17,o,20).p)*a/p,h=this.vessels[i];h.x=c,h.z=l,h.dx=Math.sin(d)*Math.sign(m||1),h.dz=Math.cos(d)*Math.sign(m||1),h.speed=Math.abs(m)})}};function zh(){let e=new nm,t=Mh(3108751,.5),n=Mh(15921386,.5),r=Mh(9211016,.9),i=Mh(12597547,.5),a=Mh(1778992,.1,{metalness:.5}),o=Mh(15658734,.4),s=Mh(2236962,.8),c=cm({len:13,beam:6,depth:1.6,sheer:.05,rake:.3,transom:.95,full:7,entry:.85},.55);e.add(c.bottom,s,0,-.42,0).add(c.top,t,0,-.42,0).add(c.deck,r,0,-.42,0);for(let t of[-1,1])e.add(new K(4.2,.12,1.4),r,0,1.15,t*6.9,0,t*.12);e.add(new K(1.6,1.4,2.6),n,2.15,1.85,0),e.add(new K(1.64,.6,2.4),a,2.15,2.7,0),e.add(new K(1.62,.2,2.62),n,2.15,3.1,0),e.add(new K(2,.14,3),i,2.15,3.27,0),e.add(new X(.05,.05,1.2,8),o,2.4,3.9,.8);for(let t of[-1,1]){for(let n of[.55,1.05])e.beam(new V(t*2.45,1.15+n,-6),new V(t*2.45,1.15+n,6),.06,.06,o);for(let n=-6;n<=6;n+=1.5)e.add(new X(.03,.03,1.05,6),o,t*2.45,1.67,n)}return e.add(new Xl(.3,.07,8,20),i,1.33,1.9,.6,Math.PI/2),e.build()}function Bh(e){let t=new nm,n=Mh(e,.35),r=Mh(15921904,.4),i=Mh(1845814,.1,{transparent:!0,opacity:.55}),a=Mh(7829367,.4,{metalness:.6}),o=new ol;o.moveTo(-1.2,.2),o.lineTo(1.2,.2),o.lineTo(1.25,1.1),o.lineTo(1.2,2.5),o.quadraticCurveTo(1.15,2.65,1,2.65),o.lineTo(-1,2.65),o.quadraticCurveTo(-1.15,2.65,-1.2,2.5),o.lineTo(-1.25,1.1),o.closePath();let s=new tl;s.moveTo(-1.08,.32),s.lineTo(1.08,.32),s.lineTo(1.12,1.1),s.lineTo(1.08,2.52),s.lineTo(-1.08,2.52),s.lineTo(-1.12,1.1),s.closePath(),o.holes.push(s);for(let e of[-1.25,1.1])t.add(new Hl(o,{depth:.15,bevelEnabled:!0,bevelThickness:.03,bevelSize:.03,bevelSegments:2,curveSegments:8}),n,0,0,e);for(let e of[-1,1])t.add(new K(.1,.95,2.4),n,e*1.2,.68,0),t.add(new K(.06,1.3,2.36),i,e*1.2,1.8,0);t.add(new K(2.5,.12,2.6),r,0,2.68,0),t.add(new K(2.4,.15,2.6),a,0,.005,0);for(let e of[-.9,.9])t.add(new K(2.2,.12,.45),r,0,.65,e);return t.add(new X(.07,.07,1.5,8),a,0,3.45,0),t.add(new K(.5,.3,.9),a,0,4.2,0),t.build()}var Vh=class{group=new Y;path=null;ships=[];vessels=[];constructor(e,t){let n=[],[r,i]=Qu(...t);r=Math.max(r,Hu+200);for(let t=r;t<Hu+Bu-200;t+=60){let r=i,a=-1/0;for(let n=-120;n<=120;n+=6){let o=-e.height(t,i+n);o>a&&(a=o,r=i+n)}if(a<2)break;i=r,n.push(new V(t,0,i))}if(n.length<20)return;for(let e=0;e<6;e++)for(let e=1;e<n.length-1;e++)n[e].z=(n[e-1].z+n[e].z*2+n[e+1].z)/4;this.path=new Nh(n);let a=[{obj:Hh(),speed:4.5,offset:0,lane:-25,len:62,beam:11},{obj:Uh(),speed:6,offset:.45,lane:30,len:12,beam:3.5},{obj:Uh(),speed:5,offset:.8,lane:-35,len:12,beam:3.5}];for(let e of a)this.group.add(e.obj),this.ships.push(e),this.vessels.push({x:0,z:0,dx:1,dz:0,speed:0,beam:e.beam})}update(e,t,n){if(!this.path)return;let r=this.path.length,i=new V,a=new V;this.ships.forEach((o,s)=>{let c=(e/(2*r/o.speed)+o.offset)%1*2,l=c<1,u=(l?c:2-c)*r;this.path.at(u,i),this.path.at(u+(l?5:-5),a);let d=-(a.z-i.z),f=a.x-i.x,p=Math.hypot(d,f)||1,m=l?o.lane:-o.lane,h=i.x+d/p*m,g=i.z+f/p*m,_=(a.x-i.x)/p,v=(a.z-i.z)/p,y=o.len/2,b=n?.(h+_*y,g+v*y)??0,x=n?.(h-_*y,g-v*y)??0,S=t+(b+x)/2+Math.sin(e+o.offset*10)*.03;o.obj.position.set(h,S,g),o.obj.lookAt(h+_*5,S+(b-x)/o.len*5,g+v*5);let C=this.vessels[s];C.x=h,C.z=g,C.dx=_,C.dz=v,C.speed=o.speed})}};function Hh(){let e=new nm,t=Mh(8003359,.6),n=Mh(2832970,.6),r=Mh(15921902,.5),i=Mh(5925466,.85),a=Mh(1318956,.1,{metalness:.5}),o=Mh(2056075,.5),s=Mh(3824186,.7),c=Mh(10132118,.6),l=cm({len:62,beam:11,depth:5,sheer:1.2,rake:.75,transom:.8,full:4.5},.45);e.add(l.bottom,t,0,-2.2,0).add(l.top,n,0,-2.2,0).add(l.deck,i,0,-2.2,0);let u=e=>{let[t,n]=l.sheerAt((e+31)/62);return{hb:t,y:n-2.2}};for(let t=-12;t<=14;t+=8.5){let n=Math.min(8.4,2*u(t+3.9).hb-1.6),r=u(t).y;e.add(new K(n,.9,7.8),c,0,r+.45,t),e.add(new K(n-.4,.25,7.6),s,0,r+1.02,t)}e.add(new K(9,2.6,7),r,0,4.1,-24),e.add(new K(8.4,2.4,6),r,0,6.6,-24.3),e.add(new K(10.5,2.4,4.4),r,0,9,-23.4),e.add(new K(10.52,.9,.1),a,0,9.399999999999999,-21.18);for(let t of[-1,1])e.add(new K(.1,.8,3.4),a,t*5.26,9.399999999999999,-23.4);for(let t of[-1,1])for(let n of[2.6,5])e.add(new K(.1,.6,5),a,t*(n<4?4.51:4.21),2.8+n,-24.2);e.add(new K(10.8,.2,4.8),r,0,10.3,-23.4),e.add(new X(1,1.2,3.6,20),r,0,11.899999999999999,-26.5),e.add(new X(1.03,1.1,1,20),o,0,12.600000000000001,-26.5),e.add(new X(.12,.15,5,8),c,0,12.899999999999999,-22.5),e.add(new K(2.4,.12,.12),c,0,14.2,-22.5),e.add(new X(.15,.2,9,8),c,0,7.3,27),e.add(new X(.5,.6,4,12),Mh(14201402,.5),3.4,4.8,4.5),e.rod(new V(3.4,6.4,4.5),new V(1,11.8,13),.18,Mh(14201402,.5));for(let t of[-1,1])for(let n=-28;n<28;n+=4){let i=u(n),a=u(n+4);e.beam(new V(t*(i.hb-.15),i.y+1,n),new V(t*(a.hb-.15),a.y+1,n+4),.08,.08,r)}return e.build()}function Uh(){let e=new nm,t=Mh(16053488,.5),n=Mh(2779808,.5),r=Mh(9079424,.85),i=Mh(1318956,.1,{metalness:.5}),a=Mh(14540253,.5),o=Mh(8014378,.8),s=cm({len:10,beam:3,depth:1.9,sheer:.7,rake:.8,transom:.85,full:2.4},.38);e.add(s.bottom,n,0,-.75,0).add(s.top,t,0,-.75,0).add(s.deck,r,0,-.75,0),e.add(new K(2,1.8,2.4),t,0,2.05,.8),e.add(new K(2.02,.6,.06),i,0,2.55,2.01);for(let t of[-1,1])e.add(new K(.06,.6,1.8),i,t*1.01,2.55,.8);return e.add(new K(2.3,.12,2.8),n,0,3.01,.8),e.add(new X(.07,.08,4,8),a,0,4.75,.2),e.add(new K(1.6,.06,.06),a,0,5.75,.2),e.rod(new V(0,4.15,.2),new V(0,2.3499999999999996,-3.5),.05,a),e.add(new X(.4,.4,1.4,16),o,0,1.65,-2.8,0,0,Math.PI/2),e.build()}var Wh=(e,t)=>`${Math.round(e[0]/t)},${Math.round(e[1]/t)}`;function Gh(e,t=.5){let n=new Map,r=e.map(e=>e.slice()),i=(e,t)=>{let r=n.get(e);r?r.push(t):n.set(e,[t])};r.forEach((e,n)=>{i(Wh(e[0],t),n),i(Wh(e[e.length-1],t),n)});let a=new Set,o=(e,t)=>{let r=n.get(e);r.splice(r.indexOf(t),1)};for(let e=0;e<r.length;e++){if(a.has(e))continue;let s=!0;for(;s;){s=!1;let c=r[e];for(let l of[!0,!1]){let u=Wh(l?c[c.length-1]:c[0],t),d=n.get(u);if(d.length!==2)continue;let f=d[0]===e?d[1]:d[0];if(f===e||a.has(f))continue;let p=r[f],m=Wh(p[0],t)===u?p:p.slice().reverse();if(o(Wh(p[0],t),f),o(Wh(p[p.length-1],t),f),o(u,e),a.add(f),l)c.push(...m.slice(1)),i(Wh(c[c.length-1],t),e);else{let n=m.slice().reverse();c.splice(0,1,...n),i(Wh(c[0],t),e)}s=!0;break}}}return r.filter((e,t)=>!a.has(t))}var Kh=e=>e/3.6,qh={urara:{name:`227系500番台 Urara`,kind:`emu`,vmax:Kh(110),accel:.55,decel:.7,carLen:20,livery:{body:15987696,band:15171494,doors:15171494,front:15171494,endStripes:[15171494,15852214,15238970,8014382],roof:12106944,doorCount:3}},redwing:{name:`227系 Red Wing`,kind:`emu`,vmax:Kh(110),accel:.55,decel:.7,carLen:20,livery:{body:15987696,band:13111342,doors:13111342,front:13111342,endStripes:[13111342],roof:12106944,doorCount:3}},115:{name:`115系`,kind:`emu`,vmax:Kh(100),accel:.4,decel:.6,carLen:20,livery:{body:14069038,band:14069038,doors:13280043,front:14069038,roof:9080208,doorCount:3}},213:{name:`213系`,kind:`emu`,vmax:Kh(110),accel:.5,decel:.65,carLen:20,livery:{body:13225168,band:1989288,doors:13225168,front:15329766,roof:10132896,metal:!0,doorCount:2}},etsetora:{name:`etSETOra`,kind:`dmu`,vmax:Kh(95),accel:.3,decel:.5,carLen:21.3,livery:{body:2054758,band:13215818,doors:2054758,front:2054758,roof:5925488,doorCount:2}},freight:{name:`EF210 コンテナ列車`,kind:`freight`,vmax:Kh(100),accel:.12,decel:.35,carLen:20.4}},Jh=18.2,Yh=.6;function Xh(e,t){return e.kind===`freight`?18.8+t*(e.carLen+Yh):t*(e.carLen+Yh)-Yh}function Zh(e,t,n,r,i,a,o){let s=[],c=0,l=-t,u=e.vmax,d=(e,t)=>{t<=0||(s.push({t:c,s:l,v:u,a:e,dt:t}),l+=u*t+.5*e*t*t,u+=e*t,c+=t)},f=r+t/2,p;i?(d(0,(f-e.vmax*e.vmax/(2*e.decel)-l)/e.vmax),d(-e.decel,e.vmax/e.decel),u=0,d(0,o),p=c,d(e.accel,e.vmax/e.accel),u=e.vmax):(d(0,(f-l)/e.vmax),p=c),d(0,(n+t-l)/e.vmax);let m=a-p;for(let e of s)e.t+=m;return{phases:s,enter:s[0].t,exit:s[s.length-1].t+s[s.length-1].dt}}function Qh(e,t){let n=e[0];for(let r of e)r.t<=t&&(n=r);let r=Math.min(Math.max(0,t-n.t),n.dt);return{s:n.s+n.v*r+.5*n.a*r*r,v:n.v+n.a*r}}var $h=e=>{let t=0;for(let n=1;n<e.length;n++)t+=Math.hypot(e[n][0]-e[n-1][0],e[n][1]-e[n-1][1]);return t};function eg(e,t){let n=t?e[e.length-1]:e[0],r=t?e[Math.max(0,e.length-3)]:e[Math.min(e.length-1,2)],i=n[0]-r[0],a=n[1]-r[1],o=Math.hypot(i,a)||1;return[i/o,a/o]}function tg(e,t=4){let n=Gh(e.filter(e=>e.code>=2801&&e.code<=2804).map(e=>{let t=+!!ud(e),n=[];for(let r=0;r<e.pts.length;r+=2)n.push([e.pts[r],e.pts[r+1],t]);return n}),3);n.sort((e,t)=>$h(t)-$h(e));let r=new Set,i=[];for(let e=0;e<n.length;e++){if(r.has(e))continue;r.add(e);let a=n[e].slice();for(let e of[!0,!1])for(;;){let i=e?a[a.length-1]:a[0],o=eg(a,e),s=-1,c=!1,l=Math.cos(35*Math.PI/180);if(n.forEach((e,n)=>{if(!r.has(n))for(let r of[!1,!0]){let a=r?e[e.length-1]:e[0];if(Math.hypot(a[0]-i[0],a[1]-i[1])>t)continue;let u=eg(e,r),d=-(u[0]*o[0]+u[1]*o[1]);d>l&&(l=d,s=n,c=r)}}),s<0)break;r.add(s);let u=c?n[s].slice().reverse():n[s].slice();a=e?a.concat(u):u.reverse().concat(a)}i.push(a)}return i.sort((e,t)=>$h(t)-$h(e))}function ng(e,t,n){let r=0,i=0,a=1/0;for(let o=0;o<e.length;o++){o&&(r+=Math.hypot(e[o][0]-e[o-1][0],e[o][1]-e[o-1][1]));let s=Math.hypot(e[o][0]-t,e[o][1]-n);s<a&&(a=s,i=r)}return[i,a]}function rg(e,t){let n=0;for(let r=1;r<e.length;r++){let i=Math.hypot(e[r][0]-e[r-1][0],e[r][1]-e[r-1][1]);if(n+i>=t){let a=i?(t-n)/i:0;return[e[r-1][0]+(e[r][0]-e[r-1][0])*a,e[r-1][1]+(e[r][1]-e[r-1][1])*a]}n+=i}return[e[e.length-1][0],e[e.length-1][1]]}function ig(e,t,n){let r=e.filter(e=>ng(e,t.x,t.z)[1]<60&&$h(e)>1e3).slice(0,2);if(r.length<2)return null;let i=Math.hypot(n[0],n[1])||1,a=n[0]/i,o=n[1]/i,[s,c]=r.map(e=>{let t=e[0],n=e[e.length-1];return(n[0]-t[0])*a+(n[1]-t[1])*o>=0?e:e.slice().reverse()}),[l]=ng(s,t.x,t.z),u=rg(s,l),d=rg(s,l+20),f=d[0]-u[0],p=d[1]-u[1],m=Math.hypot(f,p)||1,h=p/m,g=-f/m,[_]=ng(c,t.x,t.z),v=rg(c,_),y=(v[0]-u[0])*h+(v[1]-u[1])*g>0;return{up:y?c:s,down:(y?s:c).slice().reverse()}}var ag=class{group=new Y;trains=[];pools=new Map;dwell;ok;constructor(e,t,n,r){this.dwell=r.dwell??40;let i=ig(tg(t),n,r.up);if(this.ok=i!==null,!i)return;let a={up:this.run(i.up,e,n),down:this.run(i.down,e,n)};for(let e of r.services){let t=qh[e.stock];if(!t)throw Error(`railway: unknown stock ${e.stock}`);let n=a[e.dir],r=Xh(t,e.cars),i=Zh(t,r,n.path.length,n.stop,e.stop!==!1,e.time*60,this.dwell);this.trains.push({service:e,stock:t,length:r,...i,track:n,cars:null})}}run(e,t,n){let r=hd(Float32Array.from(e.flatMap(e=>[e[0],e[1]])),t,6,.5),i=new Uint8Array(r.x.length);for(let t=0;t<r.x.length;t++){let n=0,a=1/0,o=Math.floor(t*e.length/r.x.length);for(let i=Math.max(0,o-3);i<Math.min(e.length,o+4);i++){let o=Math.hypot(e[i][0]-r.x[t],e[i][1]-r.z[t]);o<a&&(a=o,n=i)}i[t]=e[n][2]}let a=Array.from(r.y);for(let e=0;e<a.length;e++){if(!i[e])continue;let t=e;for(;t+1<a.length&&i[t+1];)t++;let n=a[Math.max(0,e-1)],r=a[Math.min(a.length-1,t+1)];for(let i=e;i<=t;i++)a[i]=n+(r-n)*(i-e+1)/(t-e+2);e=t}let o=new Nh(a.map((e,t)=>new V(r.x[t],e+.2,r.z[t])));return{path:o,stop:o.nearest(n.x,n.z)}}update(e,t){let n=new V,r=new V;for(let i of this.trains){let a=!i.service.days||i.service.days===t,o=e;if(a&&e<i.enter&&e+86400<=i.exit&&(o=e+86400),!(a&&o>=i.enter&&o<=i.exit)){i.cars&&this.release(i);continue}i.cars||=this.acquire(i.stock,i.service.cars);let{s}=Qh(i.phases,o),c=s;i.cars.forEach((e,t)=>{let a=i.stock.kind===`freight`&&t===0?Jh:i.stock.carLen,o=c,s=c-a;c=s-Yh;let l=o>0&&s<i.track.path.length;e.visible=l,l&&(i.track.path.at(o,n),i.track.path.at(s,r),e.position.copy(n).add(r).multiplyScalar(.5),e.lookAt(n))})}}nearest(e,t){let n=1/0;for(let r of this.trains)if(r.cars)for(let i of r.cars)i.visible&&(n=Math.min(n,Math.hypot(i.position.x-e,i.position.z-t)));return n}acquire(e,t){let n=`${e.name}/${t}`,r=(this.pools.get(n)??[]).pop()??sg(e,t);for(let e of r)e.visible=!1,this.group.add(e);return r}release(e){let t=`${e.stock.name}/${e.service.cars}`;for(let t of e.cars)this.group.remove(t);let n=this.pools.get(t)??[];n.push(e.cars),this.pools.set(t,n),e.cars=null}},og=(e,t=.6,n={})=>new Z({color:e,roughness:t,...n});function sg(e,t){if(e.kind===`freight`)return[lg(),...Array.from({length:t},(e,n)=>dg(n*7+t))];let n=e.livery;return Array.from({length:t},(r,i)=>cg(n,e.carLen,i===0,i===t-1))}function cg(e,t,n,r){let i=new nm,a=og(e.body,e.metal?.3:.4,e.metal?{metalness:.6}:{}),o=og(e.band,.4),s=og(e.doors,.45),c=og(e.roof,.7),l=og(e.front,.4),u=og(1778992,.12,{metalness:.4}),d=og(3815994,.7),f=og(9080208,.4,{metalness:.7}),p=new ol;p.moveTo(-1.45,.95),p.lineTo(1.45,.95),p.lineTo(1.48,3.3),p.quadraticCurveTo(1.45,3.8,.9,3.95),p.lineTo(-.9,3.95),p.quadraticCurveTo(-1.45,3.8,-1.48,3.3),p.closePath(),i.add(new Hl(p,{depth:t,bevelEnabled:!1,curveSegments:8}),a,0,0,-t/2),i.add(new K(1.9,.08,t-.6),c,0,3.96,0);let m=Array.from({length:e.doorCount},(n,r)=>-t/2+(r+.5)*t/e.doorCount);for(let n of[-1,1]){i.add(new K(.02,.85,t-1.6),u,n*1.475,2.75,0),e.band!==e.body&&i.add(new K(.02,.3,t-.3),o,n*1.475,1.55,0);for(let e of m)i.add(new K(.04,2.05,1.3),s,n*1.47,2.05,e),i.add(new K(.05,.6,1.1),u,n*1.48,2.7,e);if(e.endStripes){let r=.35;e.endStripes.forEach((e,a)=>{let o=a===0?.5:.14;for(let a of[-1,1])i.add(new K(.025,2.9,o),og(e,.4),n*1.482,2.35,a*(t/2-r-o/2));r+=o+.04})}}for(let e of[-t/4,t/4])i.add(new K(1.6,.35,2.4),og(14211284,.5),0,4.1,e);i.add(new K(2.4,.6,t*.6),d,0,.7,0);for(let e of[-t*.36,t*.36]){i.add(new K(2.1,.35,2.6),d,0,.55,e);for(let t of[-1.05,1.05])for(let n of[-.75,.75])i.add(new X(.43,.43,.14,18),f,n,.43,e+t,0,0,Math.PI/2)}for(let[e,a]of[[1,n],[-1,r]])if(a){i.add(new K(2.6,1,.06),u,0,2.85,e*(t/2+.02));for(let n of[-.95,.95])i.add(new K(.3,.14,.06),og(16775392,.2,{emissive:3353104}),n,1.75,e*(t/2+.03));i.add(new K(2.9,.9,.06),l,0,1.45,e*(t/2+.02)),i.add(new K(2.6,.5,.3),d,0,.85,e*(t/2-.1))}else i.add(new K(1.2,2,.3),d,0,2.1,e*(t/2+.1));return(n||t>20.5)&&i.add(new K(1.6,.08,.4),f,0,4.55,0),i.build()}function lg(){let e=new nm,t=Jh,n=og(1920926,.45),r=og(13159632,.5),i=og(6975090,.7),a=og(1778992,.12,{metalness:.4}),o=og(3815994,.7),s=og(9080208,.4,{metalness:.7}),c=og(15790316,.5);e.add(new K(2.9,2.2,t),n,0,2.45,0),e.add(new K(2.92,.7,t),r,0,1.3,0),e.add(new K(2.94,.08,18),c,0,1.68,0),e.add(new K(2.7,.35,17.599999999999998),i,0,3.7,0);for(let n of[-1,1]){e.add(new K(2.5,.8,.06),a,0,3,n*9.12);for(let t of[-.9,.9])e.add(new K(.3,.16,.06),og(16775392,.2,{emissive:3353104}),t,2.1,n*9.129999999999999);e.add(new K(2.7,.5,.3),o,0,.75,n*(t/2-.1)),e.add(new K(1.8,.08,.4),s,0,4.9,n*5.5);for(let t of[-.6,.6])e.rod(new V(t,3.9,n*4.6),new V(t*.3,4.85,n*5.5),.04,s,6)}for(let t of[-1,1])e.add(new K(.04,.9,15.2),a,t*1.46,2.9,0);for(let t of[-6.2,0,6.2]){e.add(new K(2.3,.45,2.8),o,0,.6,t);for(let n of[-1.1,1.1])for(let r of[-.78,.78])e.add(new X(.56,.56,.14,18),s,r,.56,t+n,0,0,Math.PI/2)}return e.build()}var ug=[3108687,3108687,3108687,3899226,2051738,13111342,15329764,14252577,5921370];function dg(e){let t=new nm,n=qh.freight.carLen,r=og(4608606,.7),i=og(3815994,.7),a=og(9080208,.4,{metalness:.7});t.add(new K(2.7,.3,n),r,0,1,0);for(let e of[-1,1])t.add(new K(.12,.25,n),r,e*1.3,1.25,0);for(let e of[-n*.36,n*.36]){t.add(new K(2.1,.35,2.4),i,0,.55,e);for(let n of[-1,1])for(let r of[-.75,.75])t.add(new X(.43,.43,.14,18),a,r,.43,e+n,0,0,Math.PI/2)}let o=e*1103515245+12345>>>0,s=()=>(o=o*1664525+1013904223>>>0)/4294967296,c=s()<.35?[[-4.9,9.4],[4.9,9.4]]:[0,1,2,3,4].map(e=>[(e-2)*3.76,3.66]);for(let[e,n]of c){if(s()<.12)continue;let r=ug[Math.floor(s()*ug.length)];t.add(new K(2.45,2.5,n-.1),og(r,.55),0,2.4,e)}return t.build()}function fg(e,t,n){return e.map(([e,r,i,a,o,s])=>{let[c,l]=Qu(o,a);[c,l]=n.findFree(c,l,30);let u=pg(s,e.length);return u.position.set(c,n.ground(c,l,t.height(c,l)+50).h,l),u.rotation.y=e.charCodeAt(0)*.7%(Math.PI*2),{id:e,name:r,where:i,x:c,z:l,obj:u}})}function pg(e,t){let n=new Y,r=new Z({color:e<0?15921128:e,roughness:.9}),i=new Z({color:e===-1?13666876:2763306,roughness:.9}),a=new Z({color:14260890,roughness:.8}),o=new Z({color:1710608,roughness:.2}),s=(e,t,r,i,a,o=1,s=1,c=1)=>{let l=new G(e,t);return l.position.set(r,i,a),l.scale.set(o,s,c),n.add(l),l},c=e=>new Yl(e,20,14);s(c(.15),r,0,.14,.06,.95,.9,1.2),s(c(.11),r,0,.24,-.08,.9,1.15,.95);for(let e of[-1,1]){s(c(.085),r,e*.085,.1,.1,.8,1,1.25);let t=s(new X(.026,.022,.2,10),r,e*.045,.1,-.13);t.rotation.x=.08,s(c(.03),r,e*.045,.015,-.155,1,.6,1.3),s(c(.03),r,e*.1,.015,-.02,1,.6,1.6)}let l=new Y;l.position.set(0,.37,-.13),n.add(l);let u=(e,t,n,r,i,a=1,o=1,s=1)=>{let c=new G(e,t);return c.position.set(n,r,i),c.scale.set(a,o,s),l.add(c),c};u(c(.095),r,0,0,0,1.12,.95,.95),u(c(.042),r,0,-.03,-.075,1.25,.8,.9),u(c(.012),a,0,-.012,-.11);for(let t of[-1,1])u(new il(.038,.075,3),e===-2?i:r,t*.058,.085,.005).rotation.set(-.15,t*.5,-t*.32),u(c(.012),o,t*.038,.015,-.083,1,1.2,.6);e<0&&(s(c(.1),i,.06,.2,.06,1,.8,1.3),u(c(.07),i,-.04,.035,0,1,.8,1.1));let d=new Y;d.position.set(0,.06,.2);let f=new Fc([[0,0,0],[.04,-.03,.09],[.12,-.05,.12],[.2,-.04,.06],[.24,-.02,-.04]].map(([e,t,n])=>new V(e,t,n)));return d.add(new G(new Zl(f,24,.022,8),e===-2?i:r)),n.add(d),n.userData.tail=d,n.userData.seed=t,n.traverse(e=>{e.castShadow=!0}),n}function mg(e,t){for(let n of e){let e=n.obj.userData.tail;e.rotation.y=Math.sin(t*2+n.obj.userData.seed)*.35}}var hg=e=>document.getElementById(e),gg=200,_g=Q.chunkSize/gg,vg=2,yg=1,bg=4;function xg(e,t=``){let n=[...e].length+[...t].length;return Math.round(Math.min(7e3,Math.max(2500,2e3+n*75)))}var Sg=class{fallbackName;map;mini=hg(`minimap`);big=hg(`bigmap`);districts;constructor(e,t,n){this.fallbackName=n,this.map=document.createElement(`canvas`),this.map.width=Q.chunksX*gg,this.map.height=Q.chunksZ*gg;let r=this.map.getContext(`2d`);e.forEach((e,t)=>e.forEach((e,n)=>r.drawImage(e,n*gg,t*gg,gg,gg))),this.districts=t.filter(e=>[210,220,800,352].includes(e.c)),r.font=`bold 13px "Hiragino Sans", "Noto Sans JP", sans-serif`,r.textAlign=`center`;for(let e of t){if(![341,352,312,810,422,662,413].includes(e.c))continue;let[t,n]=this.toMap(e.x,e.z);r.lineWidth=3,r.strokeStyle=`rgba(0,0,0,.6)`,r.strokeText(e.n,t,n),r.fillStyle=e.c===341?`#bfe6ff`:`#fff`,r.fillText(e.n,t,n)}this.big.width=this.map.width,this.big.height=this.map.height}toMap(e,t){return[(e-Hu)/_g,(t-Uu)/_g]}fromMap(e,t){return[Hu+e*_g,Uu+t*_g]}place(e,t,n){let r=null,i=1/0;for(let n of this.districts){let a=Math.hypot(n.x-e,n.z-t);a<i&&(i=a,r=n)}let a=null,o=1/0;for(let r of n){let n=Math.hypot(r.x-e,r.z-t);n<(r.radius??40)*1.5&&n<o&&(o=n,a=r)}let s=r&&i<700?r.n.replace(/（.）/,``):``;return a?{name:a.name,sub:s}:{name:s||this.fallbackName,sub:``}}status(e,t=!1){let[n,r]=$u(e.x,e.z),i=e.speed*3.6;t?hg(`status`).innerHTML=`<b>${e.mode}</b>　${e.time}　標高 ${e.elev.toFixed(0)}m${i>1?`　${i.toFixed(0)}km/h`:``}　名所 ${e.found}/${e.total}　猫 ${e.cats}/${e.catsTotal}`+(e.loading>0?`　<span style="opacity:.7">読込 ${e.loading}</span>`:``):hg(`status`).innerHTML=`<b>${e.mode}</b>　${e.time}　標高 ${e.elev.toFixed(0)}m${i>1?`　${i.toFixed(0)}km/h`:``}<br>${r.toFixed(4)}°N ${n.toFixed(4)}°E　名所 ${e.found}/${e.total}　猫 ${e.cats}/${e.catsTotal}`+(e.loading>0?`　<span style="opacity:.7">街並み読込中 ${e.loading}</span>`:``)}setPlace(e,t){let n=hg(`place-name`);n.textContent!==e&&(n.textContent=e);let r=hg(`place-sub`);r.textContent!==t&&(r.textContent=t)}setDate(e){let t=hg(`place-date`);t.textContent!==e&&(t.textContent=e)}promptText=null;prompt(e){if(e===this.promptText)return;this.promptText=e;let t=hg(`prompt`);e?(t.classList.remove(`hidden`),t.innerHTML=document.documentElement.classList.contains(`touch`)?``:`<kbd>E</kbd> `,t.appendChild(document.createTextNode(e))):t.classList.add(`hidden`)}toastQueue=[];toastsShown=0;isNight=!1;toast(e,t,n=``){this.toastQueue.push({kind:e,title:t,body:n}),this.toastQueue.length>bg&&this.toastQueue.splice(0,this.toastQueue.length-bg),this.pumpToasts()}pumpToasts(){let e=document.documentElement.classList.contains(`touch`)&&innerHeight>innerWidth?yg:vg;for(;this.toastsShown<e&&this.toastQueue.length;){let{kind:e,title:t,body:n}=this.toastQueue.shift(),r=document.createElement(`div`);r.className=`toast-item`,r.innerHTML=`<small>${e}</small><strong></strong>${n?`<p></p>`:``}`,r.querySelector(`strong`).textContent=t,n&&(r.querySelector(`p`).textContent=n);let i=xg(t,n);r.style.animationDuration=`${i}ms`,hg(`toast`).appendChild(r),this.toastsShown++,setTimeout(()=>{r.remove(),this.toastsShown--,this.pumpToasts()},i)}}setNight(e){let t=this.isNight?e>.45:e>.55;t!==this.isNight&&(this.isNight=t,hg(`hud`).classList.toggle(`night`,t))}drawMinimap(e,t,n,r,i){let a=this.mini.getContext(`2d`),o=this.mini.width,s=1.4,[c,l]=this.toMap(e,t);a.save(),a.fillStyle=`#1d3a4a`,a.fillRect(0,0,o,o),a.translate(o/2,o/2),a.scale(s,s),a.translate(-c,-l),a.drawImage(this.map,0,0);for(let e of r){let[t,n]=this.toMap(e.x,e.z);a.fillStyle=i.has(e.id)?`#ffd166`:`rgba(255,255,255,.75)`,a.beginPath(),a.arc(t,n,3,0,Math.PI*2),a.fill()}a.restore(),a.save(),a.translate(o/2,o/2),a.rotate(-n),a.fillStyle=`#ff5a3c`,a.strokeStyle=`#fff`,a.lineWidth=2,a.beginPath(),a.moveTo(0,-9),a.lineTo(6,7),a.lineTo(0,3),a.lineTo(-6,7),a.closePath(),a.fill(),a.stroke(),a.restore(),a.fillStyle=`#fff`,a.font=`bold 12px sans-serif`,a.textAlign=`center`,a.fillText(`N`,o/2,14)}drawBigMap(e,t,n,r,i,a){let o=this.big.getContext(`2d`),s=this.big.width/(this.big.clientWidth||this.big.width);o.drawImage(this.map,0,0),o.save();for(let e of i){if(!a.has(e.id))continue;let[t,n]=this.toMap(e.x,e.z);o.font=`${14*s}px sans-serif`,o.textAlign=`center`,o.fillText(`🐈`,t,n+5*s)}for(let e of n){let[t,n]=this.toMap(e.x,e.z),i=r.has(e.id);o.fillStyle=i?`#ffd166`:`rgba(255,255,255,.6)`,o.strokeStyle=`#000`,o.lineWidth=1.5*s,o.beginPath(),o.arc(t,n,(i?6:4.5)*s,0,Math.PI*2),o.fill(),o.stroke(),o.font=`bold ${12*s}px "Hiragino Sans", "Noto Sans JP", sans-serif`,o.textAlign=`left`,o.lineWidth=3*s,o.strokeStyle=`rgba(0,0,0,.7)`;let a=i?e.name:`？`;o.strokeText(a,t+8*s,n+4*s),o.fillStyle=i?`#ffd166`:`#ddd`,o.fillText(a,t+8*s,n+4*s)}let[c,l]=this.toMap(e,t);o.fillStyle=`#ff5a3c`,o.strokeStyle=`#fff`,o.lineWidth=2*s,o.beginPath(),o.arc(c,l,7*s,0,Math.PI*2),o.fill(),o.stroke(),o.restore()}compass=document.getElementById(`compass-tape`);lastHeading=``;drawCompass(e,t){let n=(-e*180/Math.PI%360+360)%360,r=this.compass.getContext(`2d`),i=this.compass.width,a=this.compass.height;r.clearRect(0,0,i,a);let o=i/180,s=[`北`,`北東`,`東`,`南東`,`南`,`南西`,`西`,`北西`];r.textAlign=`center`,r.lineWidth=1.5;for(let e=Math.ceil((n-90)/5)*5;e<=n+90;e+=5){let t=i/2+(e-n)*o,c=(e%360+360)%360,l=c%45==0;r.strokeStyle=l?`rgba(255,255,255,.95)`:`rgba(255,255,255,.45)`,r.beginPath(),r.moveTo(t,a-4),r.lineTo(t,a-(l?14:c%15==0?10:7)),r.stroke(),l?(r.font=`600 13px "Hiragino Sans", "Noto Sans JP", sans-serif`,r.fillStyle=c===0?`#ff8a6b`:`#fff`,r.fillText(s[c/45],t,a-18)):c%15==0&&(r.font=`10px ui-monospace, monospace`,r.fillStyle=`rgba(255,255,255,.6)`,r.fillText(String(c),t,a-18))}r.fillStyle=`#ffd88a`,r.beginPath(),r.moveTo(i/2-6,0),r.lineTo(i/2+6,0),r.lineTo(i/2,7),r.closePath(),r.fill();let c=`${s[Math.round(n/45)%8]} ${Math.round(n)}°`,l=t===null?``:`高度 ${Math.round(t)}m`,u=c+l;u!==this.lastHeading&&(this.lastHeading=u,document.getElementById(`heading`).textContent=c,document.getElementById(`altitude`).textContent=l)}bigMapPoint(e){let t=this.big.getBoundingClientRect(),n=(e.clientX-t.left)/t.width*this.big.width,r=(e.clientY-t.top)/t.height*this.big.height;return this.fromMap(n,r)}journal(e,t,n,r,i){let a=hg(`journal`);a.innerHTML=``;let o=(e,t)=>{let n=document.createElement(`h3`);n.className=`journal-section`,n.innerHTML=`<span></span><small></small>`,n.querySelector(`span`).textContent=e,n.querySelector(`small`).textContent=t,a.appendChild(n)},s=(e,t,n,r=``)=>{let i=document.createElement(`div`);return i.className=`entry ${r}`.trim(),i.innerHTML=`<div class="kind"></div><h3></h3><p></p>`,i.querySelector(`.kind`).textContent=e,i.querySelector(`h3`).textContent=t,i.querySelector(`p`).textContent=n,a.appendChild(i),i},c=i.goals.filter(e=>e.done).length;o(`お題`,`${c}/${i.goals.length} 達成`);for(let e of i.goals){let t=s(e.done?`達成`:`お題`,`${e.done?`✔ `:``}${e.name}`,e.desc,e.done?`done`:``);if(!e.done&&e.total>1){let n=document.createElement(`div`);n.className=`bar`,n.innerHTML=`<i></i>`,n.firstChild.style.width=`${e.n/e.total*100}%`,n.title=`${e.n}/${e.total}`,t.appendChild(n)}}o(`名所`,`${t.size}/${e.length}`);for(let n of e){let e=t.has(n.id);s(n.kind,e?n.name:`？？？`,e?n.desc:`まだ訪れていない場所。地図の「？」を目指して歩いてみよう。`,e?``:`locked`)}o(`猫`,`${r.size}/${n.length}`);for(let e of n){let t=r.has(e.id);s(`猫`,t?`🐈 ${e.name}`:`🐈 ？？？`,t?`${e.where}で出会った。`:`ヒント: ${e.where}のあたり`,t?``:`locked`)}hg(`journal-stats`).textContent=`旅の達成度 ${Math.floor(i.completion*100)}%`}mapStats(e,t){hg(`map-stats`).textContent=`名所 ${e}/${t} 発見　—　東西 ${Bu/1e3}km × 南北 ${Vu/1e3}km`}},Cg=[15845846,16243171,15382729],wg=[15716312,15981539,15319759],Tg=[13122078,14241834,14713130],Eg=[15982563,16313582,15518418],Dg=Object.fromEntries([{id:`ubamegashi`,name:`ウバメガシ`,form:`broad`,evergreen:!0,height:[4,8],width:1.05,bark:4011052,jitter:6,keys:[{d:1,c:3888179},{d:95,c:3888179},{d:112,c:7036732},{d:135,c:6061376},{d:175,c:4218938},{d:365,c:3888179}]},{id:`arakashi`,name:`アラカシ`,form:`broad`,evergreen:!0,height:[8,14],width:1,bark:4866104,jitter:6,keys:[{d:1,c:4087098},{d:105,c:4087098},{d:120,c:8034890},{d:150,c:5141312},{d:190,c:4153401},{d:365,c:4087098}]},{id:`shii`,name:`シイ`,form:`broad`,evergreen:!0,height:[10,16],width:1.15,bark:4865846,jitter:5,keys:[{d:1,c:3824184},{d:115,c:3824184},{d:130,c:8098888},{d:145,c:13219946},{d:158,c:12891236},{d:172,c:6257986},{d:200,c:3955769},{d:365,c:3824184}]},{id:`kusunoki`,name:`クスノキ`,form:`broad`,evergreen:!0,height:[12,22],width:1.3,bark:5918791,jitter:5,keys:[{d:1,c:4876860},{d:98,c:4876860},{d:112,c:9071168},{d:128,c:10138962},{d:165,c:6061890},{d:220,c:4876860},{d:365,c:4876860}]},{id:`yamamomo`,name:`ヤマモモ`,form:`broad`,evergreen:!0,height:[6,10],width:1.1,bark:5062453,fruitColour:10493996,jitter:5,keys:[{d:1,c:3495226},{d:120,c:3495226},{d:135,c:5930818},{d:160,c:3890748},{d:170,c:3890748,fruit:1},{d:190,c:3890748,fruit:1},{d:198,c:3890748},{d:365,c:3495226}]},{id:`tabunoki`,name:`タブノキ`,form:`broad`,evergreen:!0,height:[8,14],width:1.2,bark:5588797,jitter:5,keys:[{d:1,c:4153664},{d:95,c:4153664},{d:108,c:9198650},{d:125,c:7311176},{d:170,c:4482623},{d:365,c:4153664}]},{id:`mikan`,name:`ミカン`,form:`broad`,evergreen:!0,height:[2.5,3.5],width:1.1,bark:5917240,fruitColour:15764e3,jitter:4,keys:[{d:1,c:3824696,fruit:.4},{d:20,c:3824696},{d:125,c:3824696},{d:133,c:7309906},{d:142,c:6192452},{d:170,c:4153913},{d:290,c:4153913},{d:315,c:3824696,fruit:1},{d:355,c:3824696,fruit:1},{d:365,c:3824696,fruit:.5}]},{id:`kuromatsu`,name:`クロマツ`,form:`pine`,evergreen:!0,height:[8,16],width:1,bark:3813419,jitter:5,keys:[{d:1,c:3363384},{d:120,c:3363384},{d:145,c:4876862},{d:200,c:3494712},{d:325,c:4873782},{d:350,c:3824185},{d:365,c:3363384}]},{id:`akamatsu`,name:`アカマツ`,form:`pine`,evergreen:!0,height:[10,18],width:1,bark:9062960,jitter:5,keys:[{d:1,c:4153400},{d:120,c:4153400},{d:145,c:5929536},{d:200,c:4153400},{d:325,c:5795893},{d:350,c:4350521},{d:365,c:4153400}]},{id:`konara`,name:`コナラ`,form:`broad`,evergreen:!1,height:[8,14],width:1,bark:6181962,jitter:8,keys:[{d:1,c:7234387,leaf:0},{d:98,c:7234387,leaf:0},{d:108,c:10465378,leaf:.6},{d:118,c:9087058},{d:150,c:5143100},{d:305,c:5208637},{d:316,c:7307066},{d:328,c:11045434},{d:340,c:11890734},{d:348,c:10119738,leaf:.6},{d:356,c:8022608,leaf:.15},{d:362,c:7234387,leaf:0}]},{id:`abemaki`,name:`アベマキ`,form:`broad`,evergreen:!1,height:[10,16],width:1.05,bark:5983552,jitter:7,keys:[{d:1,c:8020552,leaf:.3},{d:15,c:7234387,leaf:0},{d:100,c:7234387,leaf:0},{d:110,c:10004570,leaf:.6},{d:122,c:8626254},{d:155,c:4879929},{d:305,c:4879929},{d:328,c:10521148},{d:342,c:10840364},{d:352,c:9067062,leaf:.6},{d:365,c:8020552,leaf:.35}]},{id:`hazenoki`,name:`ハゼノキ`,form:`broad`,evergreen:!1,height:[5,9],width:.95,bark:6969934,jitter:6,keys:[{d:1,c:8219484,leaf:0},{d:96,c:8219484,leaf:0},{d:104,c:10508858,leaf:.5},{d:115,c:8362564},{d:150,c:5012026},{d:290,c:5143098},{d:305,c:12730410},{d:318,c:13643807},{d:330,c:12073508,leaf:.6},{d:340,c:9067326,leaf:.15},{d:347,c:8219484,leaf:0}]},{id:`enoki`,name:`エノキ`,form:`broad`,evergreen:!1,height:[10,16],width:1.2,bark:7037784,jitter:6,keys:[{d:1,c:7760218,leaf:0},{d:95,c:7760218,leaf:0},{d:105,c:10139738,leaf:.6},{d:118,c:8365648},{d:160,c:5012027},{d:305,c:5012027},{d:322,c:13152828},{d:336,c:13279790,leaf:.7},{d:346,c:10124874,leaf:.2},{d:352,c:7760218,leaf:0}]},{id:`yamazakura`,name:`ヤマザクラ`,form:`broad`,evergreen:!1,height:[8,14],width:1.05,bark:4863538,jitter:5,keys:[{d:1,c:7298904,leaf:0},{d:80,c:7298904,leaf:0},{d:86,c:14268596,leaf:.7},{d:93,c:[15191497,15653076,14663867]},{d:100,c:12884602},{d:112,c:9083982},{d:150,c:4879929},{d:300,c:5077051},{d:318,c:13202991},{d:330,c:12603436,leaf:.7},{d:342,c:9068094,leaf:.15},{d:350,c:7298904,leaf:0}]},{id:`somei`,name:`ソメイヨシノ`,form:`broad`,evergreen:!1,height:[6,10],width:1.3,bark:4140586,jitter:2,keys:[{d:1,c:6970197,leaf:0},{d:82,c:6970197,leaf:0},{d:86,c:wg,leaf:.45},{d:94,c:Cg},{d:102,c:wg,leaf:.9},{d:108,c:12032628,leaf:.7},{d:120,c:8822860},{d:160,c:4946490},{d:300,c:5143099},{d:318,c:13206575},{d:330,c:12868138,leaf:.7},{d:340,c:9199162,leaf:.2},{d:348,c:6970197,leaf:0}]},{id:`icho`,name:`イチョウ`,form:`broad`,evergreen:!1,height:[10,18],width:.85,bark:6971480,jitter:5,keys:[{d:1,c:8024166,leaf:0},{d:98,c:8024166,leaf:0},{d:108,c:10404442,leaf:.6},{d:120,c:8038474},{d:160,c:5209914},{d:310,c:5932088},{d:325,c:12104752},{d:338,c:15254042},{d:346,c:15121172,leaf:.5},{d:352,c:8024166,leaf:0}]},{id:`momiji`,name:`イロハモミジ`,form:`broad`,evergreen:!1,height:[5,8],width:1.25,bark:5921362,jitter:6,keys:[{d:1,c:7234136,leaf:0},{d:92,c:7234136,leaf:0},{d:100,c:10997602,leaf:.6},{d:112,c:8367946},{d:150,c:5209146},{d:305,c:5931580},{d:322,c:11893292},{d:333,c:Tg},{d:345,c:[12072224,12862506,13199912],leaf:.6},{d:355,c:9067076,leaf:.1},{d:360,c:7234136,leaf:0}]},{id:`keyaki`,name:`ケヤキ`,form:`broad`,evergreen:!1,height:[12,20],width:1.2,bark:7235164,jitter:6,keys:[{d:1,c:7760478,leaf:0},{d:100,c:7760478,leaf:0},{d:110,c:10206556,leaf:.6},{d:122,c:7971914},{d:160,c:5012026},{d:305,c:5274427},{d:320,c:12161338},{d:333,c:12610860},{d:343,c:10116918,leaf:.5},{d:352,c:7760478,leaf:0}]},{id:`ume`,name:`ウメ`,form:`broad`,evergreen:!1,height:[3,5],width:1.15,bark:5128250,jitter:5,keys:[{d:1,c:7102037,leaf:0},{d:30,c:7102037,leaf:0},{d:38,c:Eg,leaf:.5},{d:48,c:Eg,leaf:.8},{d:60,c:Eg,leaf:.6},{d:70,c:9214552,leaf:.5},{d:100,c:5932352},{d:150,c:4879929},{d:300,c:5143099},{d:320,c:11835964},{d:335,c:10123836,leaf:.5},{d:345,c:7102037,leaf:0}]}].map(e=>[e.id,e])),Og=new Map;function kg(e){let t=Og.get(e);if(!t){let n=new U;t=(Array.isArray(e.c)?e.c:[e.c]).map(e=>(n.setHex(e),[n.r,n.g,n.b])),Og.set(e,t)}return t}function Ag(e,t,n,r){let i=e.keys,a=((t-1)%365+365)%365+1,o=i.length-1;for(;o>0&&i[o].d>a;)o--;let s=i[o],c=i[(o+1)%i.length],l=c.d-s.d,u=a-s.d;l<=0&&(l+=365,u<0&&(u+=365));let d=l>0?Math.min(1,Math.max(0,u/l)):0,f=kg(s),p=kg(c),m=f[Math.min(f.length-1,Math.floor(n*f.length))],h=p[Math.min(p.length-1,Math.floor(n*p.length))];r.colour.setRGB(m[0]+(h[0]-m[0])*d,m[1]+(h[1]-m[1])*d,m[2]+(h[2]-m[2])*d);let g=s.leaf??1;r.leaf=g+((c.leaf??1)-g)*d;let _=s.fruit??0;return r.fruit=_+((c.fruit??0)-_)*d,r}function jg(e,t){let n=0;for(let[,t]of e)n+=t;let r=0;for(let[i,a]of e)if(r+=a,t*n<r)return Dg[i];return Dg[e[e.length-1][0]]}var Mg=class{data;constructor(e){if(this.data=e,e.length!==Ku*qu)throw Error(`veg.bin のサイズが不正です`)}at(e,t){return e<0||t<0||e>=Ku||t>=qu?0:this.data[t*Ku+e]}},Ng=60;function Pg(e,t,n,r,i,a,o=0){let s=e.at(n,r);if(dd(n*3.1,r*7.7)>Math.max(0,(s-75)/180))return null;let c=Q.vegCell,l=Hu+(n+dd(n,r+.5)-.5)*c,u=Uu+(r+dd(n+.5,r)-.5)*c,d=t.height(l,u);if(d<.8)return null;let f=dd(r*1.3,n*2.9),p=Math.max(0,(s-150)/105),m=null;for(let e of a)if(!(Math.hypot(e.x-l,e.z-u)>e.r)){dd(l*.37,u*.53)<e.share&&(m=e.mix);break}m||=d>=i.ridgeAbove?i.ridge:d<25&&(t.height(l+Ng,u)<0||t.height(l-Ng,u)<0||t.height(l,u+Ng)<0||t.height(l,u-Ng)<0)?i.shore:p<.3?i.town:i.woods;let h=jg(m,dd(n*5.3,r*1.1)),[g,_]=h.height;return{x:l,y:d,z:u,h:g+f*(_-g),species:h,pine:h.form===`pine`,tint:dd(l,u),dense:p,phase:(dd(n*.7,r*9.3)-.5)*2*h.jitter}}var Fg=`
float fHash(vec3 p) { return fract(sin(dot(p, vec3(127.1, 311.7, 74.7))) * 43758.5453); }
float fNoise(vec3 p) {
  vec3 i = floor(p), f = fract(p);
  f = f * f * (3.0 - 2.0 * f);
  return mix(mix(mix(fHash(i), fHash(i + vec3(1, 0, 0)), f.x), mix(fHash(i + vec3(0, 1, 0)), fHash(i + vec3(1, 1, 0)), f.x), f.y),
             mix(mix(fHash(i + vec3(0, 0, 1)), fHash(i + vec3(1, 0, 1)), f.x), mix(fHash(i + vec3(0, 1, 1)), fHash(i + vec3(1, 1, 1)), f.x), f.y), f.z);
}
// Leaf cards (aCard > 0): a ragged cluster envelope filled with individual leaves (or needles),
// each a small ellipse at a random spot and angle in a cellular grid
float leafShapes(vec2 uv, float seed, float needles) {
  vec2 g = uv * (needles > 0.5 ? 7.0 : 11.0);
  vec2 stretch = needles > 0.5 ? vec2(1.0, 7.0) : vec2(1.0, 2.1);
  float best = 0.0;
  for (int j = -1; j <= 1; j++) for (int i = -1; i <= 1; i++) {
    vec2 cell = floor(g) + vec2(float(i), float(j));
    vec2 o = vec2(fHash(vec3(cell, seed)), fHash(vec3(cell, seed + 1.7)));
    float a = fHash(vec3(cell, seed + 3.1)) * 6.2832;
    vec2 d = g - cell - o;
    d = mat2(cos(a), -sin(a), sin(a), cos(a)) * d;
    best = max(best, 1.0 - smoothstep(0.42, 0.5, length(d * stretch)));
  }
  return best;
}
float cardMask(vec2 uv, float seed, float needles) {
  float n = fNoise(vec3(uv * 4.0, seed * 31.0)) * 0.6 + fNoise(vec3(uv * 9.0, seed * 7.0)) * 0.4;
  float envelope = n * 1.2 - length(uv - 0.5) * 1.5;
  // Leaves count only inside the envelope; the centre of a cluster is dense
  return envelope > 0.05 ? max(leafShapes(uv, seed, needles), smoothstep(0.35, 0.55, envelope)) : 0.0;
}`,Ig=`
attribute float aCard;
varying float vCard;
varying vec2 vCardUv;`,Lg=`
varying vec3 vLocal;
varying float vSeed;`,Rg=`
vLocal = position;
vSeed = fract((instanceMatrix * vec4(0.0, 0.0, 0.0, 1.0)).x * 0.137 + (instanceMatrix * vec4(0.0, 0.0, 0.0, 1.0)).z * 0.071);`,zg=`
varying vec3 vLocal;
varying float vSeed;
float leafClumps(vec3 p) { return fNoise(p * 9.0 + vSeed * 17.0) * 0.65 + fNoise(p * 23.0) * 0.35; }`,Bg=`
attribute vec4 aPheno;
varying vec4 vPheno;`,Vg=`
vPheno = aPheno;`,Hg=`
varying vec4 vPheno;
// Leaves falling: the cards drop one at a time, the solid crown thins along its clumps
bool leafFallen(float cover, float card, vec3 local) {
  if (cover >= 0.999) return false;
  if (card > 0.5) return fHash(vec3(card * 97.0, vSeed * 13.0, 1.0)) > cover;
  return leafClumps(local) < (1.0 - cover) * 1.1 - 0.05;
}`,Ug=`
if (leafFallen(vPheno.x, vCard, vLocal)) discard;`,Wg=`
vec4 ip = instanceMatrix * vec4(0.0, 0.0, 0.0, 1.0);
float sway = sin(uTime * 1.3 + ip.x * 0.11 + ip.z * 0.07) * 0.5 + sin(uTime * 2.1 + ip.z * 0.13) * 0.25;
transformed.x += sway * 0.05 * max(position.y, 0.0);
transformed.z += sway * 0.03 * max(position.y, 0.0);`;function Gg(e,t={}){let n=t.sway??!0,r=t.needles??!1,i=t.pheno??!1,a=new Z({color:16777215,roughness:.9,side:2});return a.alphaToCoverage=!0,a.onBeforeCompile=t=>{t.uniforms.uTime=e,t.vertexShader=t.vertexShader.replace(`#include <common>`,`#include <common>\nuniform float uTime;${Lg}${Ig}${i?Bg:``}`).replace(`#include <begin_vertex>`,`#include <begin_vertex>${Rg}
vCard = aCard;
vCardUv = uv;
${i?Vg:``}
${n?Wg:``}`),t.fragmentShader=t.fragmentShader.replace(`#include <common>`,`#include <common>
varying float vCard;
varying vec2 vCardUv;
${Fg}${zg}${i?Hg:``}`).replace(`#include <clipping_planes_fragment>`,`#include <clipping_planes_fragment>
${i?Ug:``}
if (vCard > 0.5) {
  // Coverage of the leaf shapes, softened over about a pixel
  float mk = cardMask(vCardUv, vCard * 13.0, ${r?`1.0`:`0.0`});
  float aa = clamp(fwidth(mk), 0.02, 0.3);
  float cover = smoothstep(0.5 - aa, 0.5 + aa, mk);
  if (cover < 0.02) discard;
  diffuseColor.a = cover;
}`).replace(`#include <color_fragment>`,`#include <color_fragment>
float clump = leafClumps(vLocal);
// Gaps between clumps and the inside of the crown are in shade; tips catch the light
float interior = smoothstep(0.25, 0.85, length(vLocal.xz) / max(0.18, 0.5 - abs(vLocal.y - 0.62)));
float lower = smoothstep(0.3, 0.85, vLocal.y);
diffuseColor.rgb *= (0.55 + 0.6 * clump) * mix(0.62, 1.0, lower) * mix(0.75, 1.0, interior);
diffuseColor.rgb *= vec3(1.0 + (clump - 0.5) * 0.12, 1.0, 1.0 - (clump - 0.5) * 0.1);
// Leaf cards: individual leaves catch the light differently
if (vCard > 0.5) diffuseColor.rgb *= 0.85 + 0.35 * fNoise(vec3(vCardUv * 9.0, vCard * 5.0));
${i?`
// Fruit: round spots among the outer leaves, their colour and number from the instance
{
  float amount = max(vPheno.y, max(vPheno.z, vPheno.w));
  if (amount > 0.01) {
    float spot = smoothstep(0.74, 0.8, fNoise(vLocal * 60.0 + vSeed * 7.0)) * min(1.0, amount * 1.2) * interior;
    diffuseColor.rgb = mix(diffuseColor.rgb, vPheno.yzw / amount, spot);
  }
}`:``}`).replace(`#include <normal_fragment_maps>`,`#include <normal_fragment_maps>
{
  // Bump from the leaf clumps (screen-space derivatives, as in three's bump mapping)
  float h = leafClumps(vLocal);
  vec3 sx = dFdx(-vViewPosition), sy = dFdy(-vViewPosition);
  vec3 r1 = cross(sy, normal), r2 = cross(normal, sx);
  float det = dot(sx, r1);
  vec3 grad = sign(det) * (dFdx(h) * r1 + dFdy(h) * r2) * 1.4;
  normal = normalize(abs(det) * normal - grad);
}`).replace(`#include <lights_fragment_end>`,`#include <lights_fragment_end>
#if NUM_DIR_LIGHTS > 0
{
  // Sunlight through the leaves when looking toward the sun
  vec3 L = directionalLights[0].direction;
  float back = pow(max(dot(normalize(vViewPosition), -L), 0.0), 4.0);
  #ifdef USE_FOG
  back *= cloudShadow(cameraPosition + vFogDir);
  #endif
  reflectedLight.directDiffuse += diffuseColor.rgb * vec3(1.0, 1.1, 0.7) * directionalLights[0].color * back * 0.45;
}
#endif`)},a.customProgramCacheKey=()=>`canopy|${n}|${r}|${i}`,a}function Kg(e,t=!1){let n=new rs({depthPacking:Pe});return n.onBeforeCompile=n=>{n.uniforms.uTime=e,n.vertexShader=n.vertexShader.replace(`#include <common>`,`#include <common>\nuniform float uTime;${Lg}${Ig}${Bg}`).replace(`#include <begin_vertex>`,`#include <begin_vertex>${Rg}\nvCard = aCard;\nvCardUv = uv;${Vg}${Wg}`),n.fragmentShader=n.fragmentShader.replace(`#include <common>`,`#include <common>\nvarying float vCard;\nvarying vec2 vCardUv;${Fg}${zg}${Hg}`).replace(`#include <clipping_planes_fragment>`,`#include <clipping_planes_fragment>${Ug}
if (vCard > 0.5 && cardMask(vCardUv, vCard * 13.0, ${t?`1.0`:`0.0`}) < 0.5) discard;`)},n.customProgramCacheKey=()=>`canopyDepth|${t}`,n}function qg(){let e=new Z({color:16777215,roughness:1});return e.onBeforeCompile=e=>{e.vertexShader=e.vertexShader.replace(`#include <common>`,`#include <common>
varying vec3 vBark;`).replace(`#include <begin_vertex>`,`#include <begin_vertex>
vBark = position;`),e.fragmentShader=e.fragmentShader.replace(`#include <common>`,`#include <common>\nvarying vec3 vBark;${Fg}`).replace(`#include <color_fragment>`,`#include <color_fragment>
float ang = atan(vBark.z, vBark.x);
float fissure = fNoise(vec3(ang * 4.0, vBark.y * 40.0, 0.0)) * 0.6 + fNoise(vec3(ang * 11.0, vBark.y * 120.0, 3.0)) * 0.4;
diffuseColor.rgb *= 0.6 + 0.7 * fissure;
diffuseColor.rgb = mix(diffuseColor.rgb, vec3(0.42, 0.45, 0.36), smoothstep(0.7, 0.9, fNoise(vec3(ang * 3.0, vBark.y * 25.0, 9.0))) * 0.35);`)},e}function Jg(e){return e.setAttribute(`aCard`,new br(new Float32Array(e.attributes.position.count),1)),e}function Yg(e,t,n,r){return .5*Math.sin(e*9.1+r)*Math.sin(t*7.3+n*5.9+r*1.7)+.32*Math.sin(n*15.7-e*11.3+r*2.3)*Math.sin(t*13.1-r)+.18*Math.sin(e*23.9+t*19.7+n*21.1+r*.7)}var Xg=(e,t,n,r,i,a)=>1+a*Yg(e,t,n,i*5.3+r*3.7);function Zg(e,t,n,r,i){let a=[];return e.forEach((e,o)=>{let s=new Gl(1,t),c=s.attributes.position,l=new Float32Array(c.count*3);for(let t=0;t<c.count;t++){let n=c.getX(t),a=c.getY(t),s=c.getZ(t),u=Xg(n,a,s,o,r,i)*e.r*.86;c.setXYZ(t,e.x+n*u,e.y+a*u*e.sy,e.z+s*u),l.set([n,a/e.sy,s],t*3)}s.computeVertexNormals();let u=s.attributes.normal,d=new V,f=new V;for(let e=0;e<c.count;e++)d.set(l[e*3],l[e*3+1],l[e*3+2]).normalize().multiplyScalar(.45),f.set(c.getX(e),c.getY(e)-n,c.getZ(e)).normalize().multiplyScalar(.3),d.add(f).addScaledVector(new V(u.getX(e),u.getY(e),u.getZ(e)),.3).normalize(),u.setXYZ(e,d.x,d.y,d.z);a.push(Jg(s))}),Rp(a)}function Qg(e,t,n,r,i,a,o){let s=[],c=[],l=[],u=[],d=[],f=e=>dd(a*13.1+t*5.3+e*1.7,e*.37+a+t),p=new V,m=new V,h=new V,g=new V,_=new V;for(let v=0;v<n;v++){let y=1-(v+.5)/n*1.6,b=Math.sqrt(1-y*y),x=v*2.39996+a+t*1.9;p.set(Math.cos(x)*b,y,Math.sin(x)*b);let S=Xg(p.x,p.y,p.z,t,a,o)*e.r*(.97+f(v)*.12),C=e.x+p.x*S,w=e.y+p.y*S*e.sy,T=e.z+p.z*S;p.y/=e.sy,p.normalize(),m.set(C,w-i,T).normalize().multiplyScalar(.45).addScaledVector(p,.55).normalize(),h.set(0,1,0).cross(p),h.lengthSq()<1e-4&&h.set(1,0,0),h.normalize().applyAxisAngle(p,f(v+3)*Math.PI),g.copy(p).cross(h);let E=r*(.8+f(v+7)*.5),D=s.length/3;for(let[e,n]of[[0,0],[1,0],[1,1],[0,1]])_.set(C,w,T).addScaledVector(h,(e-.5)*E).addScaledVector(g,(n-.5)*E),s.push(_.x,_.y,_.z),c.push(m.x,m.y,m.z),l.push(e,n),u.push(1+(v*7+t*11+a*3)%61/64);d.push(D,D+1,D+2,D,D+2,D+3)}let v=new Ar;return v.setAttribute(`position`,new W(s,3)),v.setAttribute(`normal`,new W(c,3)),v.setAttribute(`uv`,new W(l,2)),v.setAttribute(`aCard`,new W(u,1)),v.setIndex(d),v.toNonIndexed()}function $g(e,t,n,r,i,a,o){let s=[Zg(e,t,i,a,o)];return e.forEach((e,t)=>{let c=n(e);c>0&&s.push(Qg(e,t,c,r*(e.r/.17)**.5,i,a,o))}),Rp(s)}var e_=.63;function t_(e){let t=t=>dd(e*17.3+t*1.37,t*.71-e*5.1),n=[{x:(t(40)-.5)*.06,y:.8,z:(t(41)-.5)*.06,r:.19,sy:.8}],r=t(0)*Math.PI*2;for(let e=0;e<5;e++){let i=r+e*1.2566+(t(e+1)-.5)*.6,a=.15+t(e+11)*.06;n.push({x:Math.cos(i)*a,y:.65+(t(e+21)-.5)*.1,z:Math.sin(i)*a,r:.15+t(e+31)*.04,sy:.82})}for(let e=0;e<3;e++){let i=r+.63+e*2.094+(t(e+51)-.5)*.5,a=.13+t(e+61)*.05;n.push({x:Math.cos(i)*a,y:.5+(t(e+71)-.5)*.06,z:Math.sin(i)*a,r:.13+t(e+81)*.03,sy:.78})}return n.push({x:0,y:e_,z:0,r:.25,sy:.75}),n}function n_(e,t){let n=t_(e),r=n.length-1;return t===`close`?$g(n,1,e=>e===n[r]?0:12,.16,e_,e+1,.2):$g(n,0,e=>e===n[r]?0:6,.22,e_,e+1,.2)}var r_=.7;function i_(e){let t=t=>dd(e*23.9+t*1.13,t*.53+e*7.7),n=[],r=t(0)*Math.PI*2;for(let e=0;e<6;e++){let i=r+e*2.4+(t(e+1)-.5)*.7,a=(.12-e*.017)*(.6+t(e+11)*.8),o=.47+e*.094+(t(e+21)-.5)*.03,s=.2-e*.022;if(n.push({x:Math.cos(i)*a,y:o,z:Math.sin(i)*a,r:s,sy:.42}),e<3){let r=i+Math.PI+(t(e+31)-.5)*1.2,a=.09+t(e+41)*.05;n.push({x:Math.cos(r)*a,y:o+.035,z:Math.sin(r)*a,r:s*.7,sy:.45})}}return n}function a_(e,t){let n=i_(e);return t===`close`?$g(n,1,e=>Math.round(6+e.r*40),.15,r_,e+7,.28):$g(n,0,e=>Math.round(3+e.r*18),.2,r_,e+7,.28)}var o_=class{pos=[];nor=[];idx=[];limb(e,t,n,r,i,a,o,s=1){let c=r=>new V().addScaledVector(e,(1-r)*(1-r)).addScaledVector(t,2*r*(1-r)).addScaledVector(n,r*r),l=this.pos.length/3,u=new V,d=new V,f=new V,p=n.clone().sub(e).normalize(),m=Math.abs(p.y)<.7?new V(0,1,0):new V(1,0,0);for(let e=0;e<=o;e++){let t=e/o,n=c(t),l=c(Math.min(1,t+.01)).sub(c(Math.max(0,t-.01))).normalize();u.crossVectors(l,m).normalize(),d.crossVectors(l,u);let p=(r+(i-r)*t)*(1+(s-1)*(1-t)**3);for(let e=0;e<a;e++){let t=e/a*Math.PI*2;f.copy(u).multiplyScalar(Math.cos(t)).addScaledVector(d,Math.sin(t)),this.pos.push(n.x+f.x*p,n.y+f.y*p,n.z+f.z*p),this.nor.push(f.x,f.y,f.z)}}for(let e=0;e<o;e++)for(let t=0;t<a;t++){let n=(t+1)%a,r=l+e*a+t,i=l+e*a+n,o=l+(e+1)*a+n,s=l+(e+1)*a+t;this.idx.push(r,i,o,r,o,s)}}geometry(){let e=new Ar;return e.setAttribute(`position`,new W(this.pos,3)),e.setAttribute(`normal`,new W(this.nor,3)),e.setIndex(this.idx),e}},s_=(e,t,n)=>new V(e,t,n);function c_(e,t,n,r,i){let a=n===`close`,o=e=>dd(r*31.7+e*1.9,e*.29-r),s=new o_,c=i?.07:.025,l=o(0)*Math.PI*2,u=s_(Math.cos(l)*c,t,Math.sin(l)*c),d=s_(-Math.cos(l+.8)*c*.8,t*.5,-Math.sin(l+.8)*c*.8),f=i?.032:.042,p=i?.012:.024;s.limb(s_(0,0,0),d,u,f,p,a?8:5,a?4:1,a?1.5:1);let m=e=>{let n=Math.min(1,e/t);return s_(0,0,0).addScaledVector(d,2*n*(1-n)).addScaledVector(u,n*n).setY(e)};return e.forEach((e,n)=>{if(!a&&n%2)return;let r=m(Math.min(t*.98,i?e.y-.06:t*(.72+.25*o(n+1)))),c=s_(e.x*.8,e.y-e.r*e.sy*.2,e.z*.8);if(c.distanceTo(r)<.05)return;let l=r.clone().lerp(c,.5).add(s_(0,i?-.02:.04,0));s.limb(r,l,c,i?.011:.016,.005,a?4:3,a?2:1)}),s.geometry()}function l_(){let e=new Gl(.38,1),t=e.attributes.position;for(let e=0;e<t.count;e++){let n=t.getX(e),r=t.getY(e),i=t.getZ(e),a=1+.14*Yg(n/.38,r/.38,i/.38,4.1);t.setXYZ(e,n*a,r*a*.85+.6,i*a)}e.computeVertexNormals();let n=e.attributes.normal,r=new V;for(let e=0;e<t.count;e++)r.set(t.getX(e),(t.getY(e)-.6)/.85,t.getZ(e)).normalize().multiplyScalar(.7),r.x+=n.getX(e)*.3,r.y+=n.getY(e)*.3,r.z+=n.getZ(e)*.3,r.normalize(),n.setXYZ(e,r.x,r.y,r.z);return e}var u_=2,d_=class{parent;geometry;material;sectors;opts;meshes=[];mats=[];cols=[];phenos=[];n=[];constructor(e,t,n,r,i){this.parent=e,this.geometry=t,this.material=n,this.sectors=r,this.opts=i;for(let e=0;e<r;e++)this.mats.push(new Float32Array(1024)),this.cols.push(new Float32Array(192)),this.phenos.push(new Float32Array(256)),this.n.push(0)}begin(){this.n.fill(0)}add(e,t,n,r,i){let a=this.n[e]++;if(a*16>=this.mats[e].length){let t=new Float32Array(this.mats[e].length*2),n=new Float32Array(this.cols[e].length*2),r=new Float32Array(this.phenos[e].length*2);t.set(this.mats[e]),n.set(this.cols[e]),r.set(this.phenos[e]),this.mats[e]=t,this.cols[e]=n,this.phenos[e]=r}if(t.toArray(this.mats[e],a*16),n?.toArray(this.cols[e],a*3),r){let t=i?r.fruit:0;this.phenos[e].set([r.leaf,i?i.r*t:0,i?i.g*t:0,i?i.b*t:0],a*4)}}finish(){for(let e=0;e<this.sectors;e++){let t=this.n[e],n=this.meshes[e];if(!n||n.instanceMatrix.count<t){n&&(this.parent.remove(n),n.dispose());let r=Math.max(16,Math.ceil(t*1.25)),i=this.geometry;if(this.opts.pheno){i=new Ar;for(let e of Object.keys(this.geometry.attributes))i.setAttribute(e,this.geometry.attributes[e]);i.setIndex(this.geometry.index),i.setAttribute(`aPheno`,new Zs(new Float32Array(r*4),4))}n=new ac(i,this.material,r),this.opts.colour&&(n.instanceColor=new Zs(new Float32Array(r*3),3)),n.castShadow=n.receiveShadow=this.opts.shadow,this.opts.depth&&(n.customDepthMaterial=this.opts.depth),this.meshes[e]=n,this.parent.add(n)}if(n.count=t,n.visible=t>0,t){if(n.instanceMatrix.array.set(this.mats[e].subarray(0,t*16)),n.instanceMatrix.clearUpdateRanges(),n.instanceMatrix.addUpdateRange(0,t*16),n.instanceMatrix.needsUpdate=!0,n.instanceColor&&(n.instanceColor.array.set(this.cols[e].subarray(0,t*3)),n.instanceColor.clearUpdateRanges(),n.instanceColor.addUpdateRange(0,t*3),n.instanceColor.needsUpdate=!0),this.opts.pheno){let r=n.geometry.attributes.aPheno;r.array.set(this.phenos[e].subarray(0,t*4)),r.clearUpdateRanges(),r.addUpdateRange(0,t*4),r.needsUpdate=!0}n.computeBoundingSphere(),n.boundingSphere.radius=n.boundingSphere.radius*1.05+2}}}},f_=8,p_=16,m_=.12,h_=class{veg;hm;flora;group=new Y;uTime={value:0};sets=[];far;trunks=new Y;last=new R(1e9,1e9);closeR;nearR;farR;day=1;groves=[];excludedAreas=[];constructor(e,t,n,r){this.veg=e,this.hm=t,this.flora=r,this.closeR=230*n,this.nearR=650*n,this.farR=1900*n;let i=qg(),a=Gg(this.uTime,{pheno:!0}),o=Kg(this.uTime),s=Gg(this.uTime,{needles:!0,pheno:!0}),c=Kg(this.uTime,!0);this.group.add(this.trunks);for(let e of[!1,!0])for(let t of[`close`,`mid`])for(let n=0;n<u_;n++){let r=t===`close`?1:16,l=new d_(this.group,e?a_(n,t):n_(n,t),e?s:a,r,{colour:!0,shadow:!0,depth:e?c:o,pheno:!0}),u=e?i_(n):t_(n).slice(0,-1),d=new d_(this.trunks,c_(u,e?.9:.52,t,n+(e?5:1),e),i,1,{colour:!0,shadow:!0});this.sets[this.setIndex(e,t===`close`,n)]={crown:l,trunk:d}}this.far=new d_(this.group,Jg(l_()),Gg(this.uTime,{sway:!1}),32,{colour:!0,shadow:!1})}setExcludedAreas(e){this.excludedAreas=e,this.last.set(1e9,1e9)}insideExcludedArea(e,t){return this.excludedAreas.some(n=>{let r=!1;for(let i=0,a=n.length-1;i<n.length;a=i++){let[o,s]=n[i],[c,l]=n[a];s>t!=l>t&&e<(c-o)*(t-s)/(l-s)+o&&(r=!r)}return r})}setIndex(e,t,n){return((e?2:0)+ +!t)*u_+n}get minorParts(){return[this.trunks]}setDay(e,t){this.day=e,this.groves=t,this.last.set(1e9,1e9)}update(e,t){if(Math.hypot(e-this.last.x,t-this.last.y)<80)return;this.last.set(e,t);let n=Q.vegCell,r=Math.round((e-Hu)/n),i=Math.round((t-Uu)/n),a=new H,o=new Kt,s=new V,c=new V,l=new V(0,1,0),u=new U,d=new U,f={colour:new U,leaf:1,fruit:0};for(let e of this.sets)e.crown.begin(),e.trunk.begin();this.far.begin();let p=(n,r,i,a,o,s)=>Math.floor((Math.atan2(r-t,n-e)/(Math.PI*2)+1)%1*a)%a+(i>(o+s)/2?a:0),m=Math.ceil(this.farR/n);for(let e=i-m;e<=i+m;e++)for(let t=r-m;t<=r+m;t++){let m=Math.hypot(t-r,e-i)*n;if(m>this.farR)continue;let h=m<this.nearR;if(!h&&t+e&1)continue;let g=Pg(this.veg,this.hm,t,e,this.flora,this.groves,h?0:30);if(!g||this.insideExcludedArea(g.x,g.z))continue;let _=g.species;if(Ag(_,this.day+g.phase,g.tint,f),f.colour.offsetHSL((g.tint-.5)*.02,0,(g.tint-.5)*.06),o.setFromAxisAngle(l,g.tint*Math.PI*2),c.set(g.x,g.y-.3,g.z),h){let e=this.sets[this.setIndex(g.pine,m<this.closeR,Math.floor(dd(g.x*.71,g.z*1.37)*u_))],t=(g.pine?g.h*.85:g.h*(1+g.tint*.3))*_.width*(1+g.dense*.45);s.set(t,g.h,t),a.compose(c,o,s);let n=m<this.closeR?0:p(g.x,g.z,m,f_,this.closeR,this.nearR);f.leaf>.02&&e.crown.add(n,a,f.colour,f,_.fruitColour===void 0?void 0:d.setHex(_.fruitColour)),e.trunk.add(0,a,u.setHex(_.bark))}else if(f.leaf>m_){let e=g.h*(1.6+g.dense*.6)*_.width*Math.sqrt(f.leaf);s.set(e,g.h*1.1*Math.sqrt(f.leaf),e),a.compose(c,o,s),f.colour.multiplyScalar(.85),this.far.add(p(g.x,g.z,m,p_,this.nearR,this.farR),a,f.colour)}}for(let e of this.sets)e.crown.finish(),e.trunk.finish();this.far.finish()}setQuality(e){this.closeR=230*e,this.nearR=650*e,this.farR=1900*e,this.last.set(1e9,1e9)}},g_={name:`CopyShader`,uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = opacity * texel;


		}`},__=class{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error(`THREE.Pass: .render() must be implemented in derived pass.`)}dispose(){}},v_=new Oi(-1,1,1,-1,0,1),y_=new class extends Ar{constructor(){super(),this.setAttribute(`position`,new W([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute(`uv`,new W([0,2,0,0,2,0],2))}},b_=class{constructor(e){this._mesh=new G(y_,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,v_)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}},x_=class extends __{constructor(e,t){super(),this.textureID=t===void 0?`tDiffuse`:t,e instanceof Zr?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=Jr.clone(e.uniforms),this.material=new Zr({name:e.name===void 0?`unspecified`:e.name,defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this.fsQuad=new b_(this.material)}render(e,t,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this.fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}},S_=class extends __{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,n){let r=e.getContext(),i=e.state;i.buffers.color.setMask(!1),i.buffers.depth.setMask(!1),i.buffers.color.setLocked(!0),i.buffers.depth.setLocked(!0);let a,o;this.inverse?(a=0,o=1):(a=1,o=0),i.buffers.stencil.setTest(!0),i.buffers.stencil.setOp(r.REPLACE,r.REPLACE,r.REPLACE),i.buffers.stencil.setFunc(r.ALWAYS,a,4294967295),i.buffers.stencil.setClear(o),i.buffers.stencil.setLocked(!0),e.setRenderTarget(n),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),i.buffers.color.setLocked(!1),i.buffers.depth.setLocked(!1),i.buffers.color.setMask(!0),i.buffers.depth.setMask(!0),i.buffers.stencil.setLocked(!1),i.buffers.stencil.setFunc(r.EQUAL,1,4294967295),i.buffers.stencil.setOp(r.KEEP,r.KEEP,r.KEEP),i.buffers.stencil.setLocked(!0)}},C_=class extends __{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}},w_=class{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){let n=e.getSize(new R);this._width=n.width,this._height=n.height,t=new Ut(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:g}),t.texture.name=`EffectComposer.rt1`}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name=`EffectComposer.rt2`,this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new x_(g_),this.copyPass.material.blending=0,this.clock=new Eu}swapBuffers(){let e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){let t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){e===void 0&&(e=this.clock.getDelta());let t=this.renderer.getRenderTarget(),n=!1;for(let t=0,r=this.passes.length;t<r;t++){let r=this.passes[t];if(r.enabled!==!1){if(r.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(t),r.render(this.renderer,this.writeBuffer,this.readBuffer,e,n),r.needsSwap){if(n){let t=this.renderer.getContext(),n=this.renderer.state.buffers.stencil;n.setFunc(t.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),n.setFunc(t.EQUAL,1,4294967295)}this.swapBuffers()}S_!==void 0&&(r instanceof S_?n=!0:r instanceof C_&&(n=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){let t=this.renderer.getSize(new R);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;let n=this._width*this._pixelRatio,r=this._height*this._pixelRatio;this.renderTarget1.setSize(n,r),this.renderTarget2.setSize(n,r);for(let e=0;e<this.passes.length;e++)this.passes[e].setSize(n,r)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}},T_=class extends __{constructor(e,t,n=null,r=null,i=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=n,this.clearColor=r,this.clearAlpha=i,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new U}render(e,t,n){let r=e.autoClear;e.autoClear=!1;let i,a;this.overrideMaterial!==null&&(a=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor,e.getClearAlpha())),this.clearAlpha!==null&&(i=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==1&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(i),this.overrideMaterial!==null&&(this.scene.overrideMaterial=a),e.autoClear=r}},E_={name:`LuminosityHighPassShader`,shaderID:`luminosityHighPass`,uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new U(0)},defaultOpacity:{value:0}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;
		uniform vec3 defaultColor;
		uniform float defaultOpacity;
		uniform float luminosityThreshold;
		uniform float smoothWidth;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );

			float v = luminance( texel.xyz );

			vec4 outputColor = vec4( defaultColor.rgb, defaultOpacity );

			float alpha = smoothstep( luminosityThreshold, luminosityThreshold + smoothWidth, v );

			gl_FragColor = mix( outputColor, texel, alpha );

		}`},D_=class e extends __{constructor(e,t,n,r){super(),this.strength=t===void 0?1:t,this.radius=n,this.threshold=r,this.resolution=e===void 0?new R(256,256):new R(e.x,e.y),this.clearColor=new U(0,0,0),this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let i=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);this.renderTargetBright=new Ut(i,a,{type:g}),this.renderTargetBright.texture.name=`UnrealBloomPass.bright`,this.renderTargetBright.texture.generateMipmaps=!1;for(let e=0;e<this.nMips;e++){let t=new Ut(i,a,{type:g});t.texture.name=`UnrealBloomPass.h`+e,t.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(t);let n=new Ut(i,a,{type:g});n.texture.name=`UnrealBloomPass.v`+e,n.texture.generateMipmaps=!1,this.renderTargetsVertical.push(n),i=Math.round(i/2),a=Math.round(a/2)}let o=E_;this.highPassUniforms=Jr.clone(o.uniforms),this.highPassUniforms.luminosityThreshold.value=r,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new Zr({uniforms:this.highPassUniforms,vertexShader:o.vertexShader,fragmentShader:o.fragmentShader}),this.separableBlurMaterials=[];let s=[3,5,7,9,11];i=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);for(let e=0;e<this.nMips;e++)this.separableBlurMaterials.push(this.getSeperableBlurMaterial(s[e])),this.separableBlurMaterials[e].uniforms.invSize.value=new R(1/i,1/a),i=Math.round(i/2),a=Math.round(a/2);this.compositeMaterial=this.getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=t,this.compositeMaterial.uniforms.bloomRadius.value=.1;let c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new V(1,1,1),new V(1,1,1),new V(1,1,1),new V(1,1,1),new V(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors;let l=g_;this.copyUniforms=Jr.clone(l.uniforms),this.blendMaterial=new Zr({uniforms:this.copyUniforms,vertexShader:l.vertexShader,fragmentShader:l.fragmentShader,blending:2,depthTest:!1,depthWrite:!1,transparent:!0}),this.enabled=!0,this.needsSwap=!1,this._oldClearColor=new U,this.oldClearAlpha=1,this.basic=new _r,this.fsQuad=new b_(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this.basic.dispose(),this.fsQuad.dispose()}setSize(e,t){let n=Math.round(e/2),r=Math.round(t/2);this.renderTargetBright.setSize(n,r);for(let e=0;e<this.nMips;e++)this.renderTargetsHorizontal[e].setSize(n,r),this.renderTargetsVertical[e].setSize(n,r),this.separableBlurMaterials[e].uniforms.invSize.value=new R(1/n,1/r),n=Math.round(n/2),r=Math.round(r/2)}render(t,n,r,i,a){t.getClearColor(this._oldClearColor),this.oldClearAlpha=t.getClearAlpha();let o=t.autoClear;t.autoClear=!1,t.setClearColor(this.clearColor,0),a&&t.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this.fsQuad.material=this.basic,this.basic.map=r.texture,t.setRenderTarget(null),t.clear(),this.fsQuad.render(t)),this.highPassUniforms.tDiffuse.value=r.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this.fsQuad.material=this.materialHighPassFilter,t.setRenderTarget(this.renderTargetBright),t.clear(),this.fsQuad.render(t);let s=this.renderTargetBright;for(let n=0;n<this.nMips;n++)this.fsQuad.material=this.separableBlurMaterials[n],this.separableBlurMaterials[n].uniforms.colorTexture.value=s.texture,this.separableBlurMaterials[n].uniforms.direction.value=e.BlurDirectionX,t.setRenderTarget(this.renderTargetsHorizontal[n]),t.clear(),this.fsQuad.render(t),this.separableBlurMaterials[n].uniforms.colorTexture.value=this.renderTargetsHorizontal[n].texture,this.separableBlurMaterials[n].uniforms.direction.value=e.BlurDirectionY,t.setRenderTarget(this.renderTargetsVertical[n]),t.clear(),this.fsQuad.render(t),s=this.renderTargetsVertical[n];this.fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,t.setRenderTarget(this.renderTargetsHorizontal[0]),t.clear(),this.fsQuad.render(t),this.fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,a&&t.state.buffers.stencil.setTest(!0),this.renderToScreen?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(r),this.fsQuad.render(t)),t.setClearColor(this._oldClearColor,this.oldClearAlpha),t.autoClear=o}getSeperableBlurMaterial(e){let t=[];for(let n=0;n<e;n++)t.push(.39894*Math.exp(-.5*n*n/(e*e))/e);return new Zr({defines:{KERNEL_RADIUS:e},uniforms:{colorTexture:{value:null},invSize:{value:new R(.5,.5)},direction:{value:new R(.5,.5)},gaussianCoefficients:{value:t}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`#include <common>
				varying vec2 vUv;
				uniform sampler2D colorTexture;
				uniform vec2 invSize;
				uniform vec2 direction;
				uniform float gaussianCoefficients[KERNEL_RADIUS];

				void main() {
					float weightSum = gaussianCoefficients[0];
					vec3 diffuseSum = texture2D( colorTexture, vUv ).rgb * weightSum;
					for( int i = 1; i < KERNEL_RADIUS; i ++ ) {
						float x = float(i);
						float w = gaussianCoefficients[i];
						vec2 uvOffset = direction * invSize * x;
						vec3 sample1 = texture2D( colorTexture, vUv + uvOffset ).rgb;
						vec3 sample2 = texture2D( colorTexture, vUv - uvOffset ).rgb;
						diffuseSum += (sample1 + sample2) * w;
						weightSum += 2.0 * w;
					}
					gl_FragColor = vec4(diffuseSum/weightSum, 1.0);
				}`})}getCompositeMaterial(e){return new Zr({defines:{NUM_MIPS:e},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`varying vec2 vUv;
				uniform sampler2D blurTexture1;
				uniform sampler2D blurTexture2;
				uniform sampler2D blurTexture3;
				uniform sampler2D blurTexture4;
				uniform sampler2D blurTexture5;
				uniform float bloomStrength;
				uniform float bloomRadius;
				uniform float bloomFactors[NUM_MIPS];
				uniform vec3 bloomTintColors[NUM_MIPS];

				float lerpBloomFactor(const in float factor) {
					float mirrorFactor = 1.2 - factor;
					return mix(factor, mirrorFactor, bloomRadius);
				}

				void main() {
					gl_FragColor = bloomStrength * ( lerpBloomFactor(bloomFactors[0]) * vec4(bloomTintColors[0], 1.0) * texture2D(blurTexture1, vUv) +
						lerpBloomFactor(bloomFactors[1]) * vec4(bloomTintColors[1], 1.0) * texture2D(blurTexture2, vUv) +
						lerpBloomFactor(bloomFactors[2]) * vec4(bloomTintColors[2], 1.0) * texture2D(blurTexture3, vUv) +
						lerpBloomFactor(bloomFactors[3]) * vec4(bloomTintColors[3], 1.0) * texture2D(blurTexture4, vUv) +
						lerpBloomFactor(bloomFactors[4]) * vec4(bloomTintColors[4], 1.0) * texture2D(blurTexture5, vUv) );
				}`})}};D_.BlurDirectionX=new R(1,0),D_.BlurDirectionY=new R(0,1);var O_={name:`OutputShader`,uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
		precision highp float;

		uniform mat4 modelViewMatrix;
		uniform mat4 projectionMatrix;

		attribute vec3 position;
		attribute vec2 uv;

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`
	
		precision highp float;

		uniform sampler2D tDiffuse;

		#include <tonemapping_pars_fragment>
		#include <colorspace_pars_fragment>

		varying vec2 vUv;

		void main() {

			gl_FragColor = texture2D( tDiffuse, vUv );

			// tone mapping

			#ifdef LINEAR_TONE_MAPPING

				gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );

			#elif defined( REINHARD_TONE_MAPPING )

				gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );

			#elif defined( CINEON_TONE_MAPPING )

				gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );

			#elif defined( ACES_FILMIC_TONE_MAPPING )

				gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );

			#elif defined( AGX_TONE_MAPPING )

				gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );

			#elif defined( NEUTRAL_TONE_MAPPING )

				gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );

			#endif

			// color space

			#ifdef SRGB_TRANSFER

				gl_FragColor = sRGBTransferOETF( gl_FragColor );

			#endif

		}`},k_=class extends __{constructor(){super();let e=O_;this.uniforms=Jr.clone(e.uniforms),this.material=new Ql({name:e.name,uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader}),this.fsQuad=new b_(this.material),this._outputColorSpace=null,this._toneMapping=null}render(e,t,n){this.uniforms.tDiffuse.value=n.texture,this.uniforms.toneMappingExposure.value=e.toneMappingExposure,(this._outputColorSpace!==e.outputColorSpace||this._toneMapping!==e.toneMapping)&&(this._outputColorSpace=e.outputColorSpace,this._toneMapping=e.toneMapping,this.material.defines={},B.getTransfer(this._outputColorSpace)===`srgb`&&(this.material.defines.SRGB_TRANSFER=``),this._toneMapping===1?this.material.defines.LINEAR_TONE_MAPPING=``:this._toneMapping===2?this.material.defines.REINHARD_TONE_MAPPING=``:this._toneMapping===3?this.material.defines.CINEON_TONE_MAPPING=``:this._toneMapping===4?this.material.defines.ACES_FILMIC_TONE_MAPPING=``:this._toneMapping===6?this.material.defines.AGX_TONE_MAPPING=``:this._toneMapping===7&&(this.material.defines.NEUTRAL_TONE_MAPPING=``),this.material.needsUpdate=!0),this.renderToScreen===!0?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}},A_=class{ctx=null;waveGain=null;windGain=null;cicadaGain=null;master=null;noise=null;white=null;muted=!1;start(){if(this.ctx)return;try{this.ctx=new AudioContext}catch{return}let e=this.ctx;this.master=e.createGain(),this.master.gain.value=this.muted?0:this.volume,this.master.connect(e.destination);let t=e.createBuffer(1,e.sampleRate*4,e.sampleRate),n=t.getChannelData(0),r=0;for(let e=0;e<n.length;e++)r=(r+.02*(Math.random()*2-1))/1.02,n[e]=r*3.5;this.noise=t,this.white=e.createBuffer(1,e.sampleRate,e.sampleRate);let i=this.white.getChannelData(0);for(let e=0;e<i.length;e++)i[e]=Math.random()*2-1;let a=(n,r,i)=>{let a=e.createBufferSource();a.buffer=t,a.loop=!0;let o=e.createBiquadFilter();o.type=`lowpass`,o.frequency.value=n;let s=e.createGain();s.gain.value=0;let c=e.createOscillator();c.frequency.value=r;let l=e.createGain();return l.gain.value=i,c.connect(l).connect(o.frequency),c.start(),a.connect(o).connect(s).connect(this.master),a.start(0,Math.random()*3),s};this.waveGain=a(700,.12,400),this.windGain=a(350,.07,200),this.cicadaGain=e.createGain(),this.cicadaGain.gain.value=0,this.cicadaGain.connect(this.master);for(let[n,r]of[[4300,38],[5200,44]]){let i=e.createBufferSource();i.buffer=t,i.loop=!0;let a=e.createBiquadFilter();a.type=`bandpass`,a.frequency.value=n,a.Q.value=4;let o=e.createGain();o.gain.value=.5;let s=e.createOscillator();s.frequency.value=r;let c=e.createGain();c.gain.value=.5,s.connect(c).connect(o.gain),s.start(),i.connect(a).connect(o).connect(this.cicadaGain),i.start(0,Math.random()*3)}}cicadas(e){this.ctx&&this.cicadaGain&&this.cicadaGain.gain.setTargetAtTime(e*1.6,this.ctx.currentTime,1.5)}gull(e=.5){let t=this.ctx;if(!t||!this.master)return;let n=t.currentTime,r=1+Math.floor(Math.random()*3);for(let i=0;i<r;i++){let r=n+i*.42,a=t.createOscillator();a.type=`sawtooth`;let o=1100+Math.random()*300;a.frequency.setValueAtTime(o,r),a.frequency.linearRampToValueAtTime(o*1.15,r+.08),a.frequency.exponentialRampToValueAtTime(o*.7,r+.35);let s=t.createOscillator();s.frequency.value=28;let c=t.createGain();c.gain.value=40,s.connect(c).connect(a.frequency);let l=t.createBiquadFilter();l.type=`bandpass`,l.Q.value=2.5,l.frequency.value=o*1.6;let u=t.createGain();u.gain.setValueAtTime(0,r),u.gain.linearRampToValueAtTime(.08*(1-e*.7),r+.04),u.gain.exponentialRampToValueAtTime(1e-4,r+.38),a.connect(l).connect(u).connect(this.master),a.start(r),s.start(r),a.stop(r+.4),s.stop(r+.4)}}ferryHorn(){let e=this.ctx;if(!e||!this.master)return;let t=e.currentTime;for(let n of[138,207,276]){let r=e.createOscillator();r.type=`sawtooth`,r.frequency.value=n;let i=e.createBiquadFilter();i.type=`lowpass`,i.frequency.value=600;let a=e.createGain();a.gain.setValueAtTime(0,t),a.gain.linearRampToValueAtTime(.05,t+.15),a.gain.setValueAtTime(.05,t+1.8),a.gain.linearRampToValueAtTime(0,t+2.3),r.connect(i).connect(a).connect(this.master),r.start(t),r.stop(t+2.4)}}firework(e,t){let n=this.ctx;if(!n||!this.master||!this.noise)return;let r=n.currentTime+e/340,i=Math.min(1,300/Math.max(e,60)),a=n.createOscillator();a.frequency.setValueAtTime(90,r),a.frequency.exponentialRampToValueAtTime(35,r+.5);let o=n.createGain();o.gain.setValueAtTime(0,r),o.gain.linearRampToValueAtTime(.5*i,r+.01),o.gain.exponentialRampToValueAtTime(1e-4,r+.9),a.connect(o).connect(this.master),a.start(r),a.stop(r+1);let s=n.createBufferSource();s.buffer=this.noise;let c=n.createBiquadFilter();c.type=`lowpass`,c.frequency.value=260;let l=n.createGain();if(l.gain.setValueAtTime(0,r),l.gain.linearRampToValueAtTime(.35*i,r+.03),l.gain.exponentialRampToValueAtTime(1e-4,r+2.2),s.connect(c).connect(l).connect(this.master),s.start(r,Math.random()*2),s.stop(r+2.3),t)for(let e=0;e<18;e++){let e=n.createBufferSource();e.buffer=this.white;let t=n.createBiquadFilter();t.type=`highpass`,t.frequency.value=2500;let a=n.createGain(),o=r+.6+Math.random()*1.2;a.gain.setValueAtTime(0,o),a.gain.linearRampToValueAtTime(.08*i,o+.003),a.gain.exponentialRampToValueAtTime(1e-4,o+.05),e.connect(t).connect(a).connect(this.master),e.start(o,Math.random()*.9),e.stop(o+.06)}}volume=.7;setMuted(e){this.muted=e,this.master&&(this.master.gain.value=e?0:this.volume)}setVolume(e){this.volume=e,this.master&&!this.muted&&(this.master.gain.value=e)}ambience(e,t){if(!this.ctx||!this.waveGain||!this.windGain)return;let n=this.ctx.currentTime;this.waveGain.gain.setTargetAtTime(e*.5,n,.5),this.windGain.gain.setTargetAtTime(t*.35,n,.5)}bell(){let e=this.ctx;if(!e||!this.master)return;let t=e.currentTime;for(let[n,r,i]of[[1,.5,9],[2,.25,6],[2.76,.18,4],[5.4,.1,2.5],[.5,.3,11]]){let a=e.createOscillator();a.frequency.value=110*n;let o=e.createGain();o.gain.setValueAtTime(0,t),o.gain.linearRampToValueAtTime(r*.6,t+.01),o.gain.exponentialRampToValueAtTime(1e-4,t+i);let s=e.createOscillator();s.frequency.value=1.3;let c=e.createGain();c.gain.value=.8,s.connect(c).connect(a.frequency),a.connect(o).connect(this.master),a.start(t),s.start(t),a.stop(t+i),s.stop(t+i)}}chime(){let e=this.ctx;if(!e||!this.master)return;let t=e.currentTime;[659.3,784,987.8,1318.5].forEach((n,r)=>{let i=e.createOscillator();i.type=`triangle`,i.frequency.value=n;let a=e.createGain();a.gain.setValueAtTime(0,t+r*.12),a.gain.linearRampToValueAtTime(.15,t+r*.12+.02),a.gain.exponentialRampToValueAtTime(1e-4,t+r*.12+1.2),i.connect(a).connect(this.master),i.start(t+r*.12),i.stop(t+r*.12+1.3)})}meow(){let e=this.ctx;if(!e||!this.master)return;let t=e.currentTime,n=e.createOscillator();n.type=`sawtooth`,n.frequency.setValueAtTime(520,t),n.frequency.linearRampToValueAtTime(780,t+.15),n.frequency.linearRampToValueAtTime(430,t+.55);let r=e.createBiquadFilter();r.type=`bandpass`,r.Q.value=3,r.frequency.setValueAtTime(900,t),r.frequency.linearRampToValueAtTime(1800,t+.15),r.frequency.linearRampToValueAtTime(700,t+.55);let i=e.createGain();i.gain.setValueAtTime(0,t),i.gain.linearRampToValueAtTime(.25,t+.05),i.gain.linearRampToValueAtTime(1e-4,t+.6),n.connect(r).connect(i).connect(this.master),n.start(t),n.stop(t+.65)}horn(){let e=this.ctx;if(!e||!this.master)return;let t=e.currentTime;for(let n of[220,277]){let r=e.createOscillator();r.type=`square`,r.frequency.value=n;let i=e.createBiquadFilter();i.type=`lowpass`,i.frequency.value=900;let a=e.createGain();a.gain.setValueAtTime(0,t),a.gain.linearRampToValueAtTime(.06,t+.05),a.gain.setValueAtTime(.06,t+1),a.gain.linearRampToValueAtTime(0,t+1.3),r.connect(i).connect(a).connect(this.master),r.start(t),r.stop(t+1.4)}}},j_=e=>document.getElementById(e),M_=[`terrain`,`photo`,`city`,`world`],N_=class{tips;tipTimer;tip;constructor(e){this.tips=e,this.tip=Math.floor(Math.random()*e.length),this.showTip(),this.tipTimer=window.setInterval(()=>{let e=j_(`load-tip`);e.classList.add(`fading`),setTimeout(()=>{this.tip=(this.tip+1)%this.tips.length,this.showTip(),e.classList.remove(`fading`)},400)},4500)}showTip(){j_(`load-tip`).textContent=this.tips[this.tip]??``}set(e,t,n){let r=M_.indexOf(e);for(let e of Array.from(document.querySelectorAll(`#load-steps li`))){let t=M_.indexOf(e.dataset.step);e.classList.toggle(`done`,t<r),e.classList.toggle(`active`,t===r)}let i=Math.round(Math.min(1,Math.max(0,t))*100);j_(`load-bar`).style.width=`${i}%`,j_(`load-pct`).textContent=`${i}%`,j_(`load-text`).textContent=n}fail(e){j_(`loading`).classList.add(`error`),j_(`load-text`).textContent=e,j_(`load-tip`).textContent=`ページを再読み込みするか、WebGL に対応したブラウザでお試しください。`,clearInterval(this.tipTimer)}done(){clearInterval(this.tipTimer),j_(`loading`).classList.add(`hidden`)}};function P_(e,t){let n=j_(`settings-form`),r=e=>n.elements.namedItem(e),i=(e,t)=>{n.elements.namedItem(`${e}-out`).value=t},a=()=>{r(`sensitivity`).value=String(e.sensitivity),r(`invertY`).checked=e.invertY,r(`fov`).value=String(e.fov),r(`quality`).value=e.quality,r(`volume`).value=String(e.volume),r(`hints`).checked=e.hints,r(`mouseLock`).checked=e.mouseLock,r(`nightBrightness`).value=String(e.nightBrightness),i(`nightBrightness`,`${Math.round(e.nightBrightness*100)}%`),i(`sensitivity`,`×${e.sensitivity.toFixed(2)}`),i(`fov`,`${e.fov}°`),i(`volume`,`${Math.round(e.volume*100)}%`)};return n.addEventListener(`input`,()=>{e.sensitivity=Number(r(`sensitivity`).value),e.invertY=r(`invertY`).checked,e.fov=Number(r(`fov`).value),e.quality=r(`quality`).value,e.volume=Number(r(`volume`).value),e.hints=r(`hints`).checked,e.mouseLock=r(`mouseLock`).checked,e.nightBrightness=Number(r(`nightBrightness`).value),a(),t(e)}),n.addEventListener(`submit`,e=>e.preventDefault()),a(),a}function F_(e,t=`OK`){return new Promise(n=>{let r=j_(`dialog`);j_(`dialog-text`).textContent=e,j_(`dialog-ok`).textContent=t,r.classList.remove(`hidden`);let i=e=>{r.classList.add(`hidden`),j_(`dialog-ok`).removeEventListener(`click`,a),j_(`dialog-cancel`).removeEventListener(`click`,o),n(e)},a=()=>i(!0),o=()=>i(!1);j_(`dialog-ok`).addEventListener(`click`,a),j_(`dialog-cancel`).addEventListener(`click`,o),j_(`dialog-cancel`).focus()})}function I_(e){let t=j_(`map-wrap`),n=j_(`bigmap`),r=1,i=0,a=0,o=()=>{let e=t.clientWidth,o=t.clientHeight,s=n.clientWidth*r,c=n.clientHeight*r;i=Math.min(0,Math.max(e-s,i)),a=s&&c>o?Math.min(0,Math.max(o-c,a)):0,n.style.transform=`translate(${i}px, ${a}px) scale(${r})`},s=(e,t,n)=>{let s=Math.min(6,Math.max(1,r*n));i=e-(e-i)*s/r,a=t-(t-a)*s/r,r=s,o()};t.addEventListener(`wheel`,e=>{e.preventDefault();let n=t.getBoundingClientRect();s(e.clientX-n.left,e.clientY-n.top,e.deltaY<0?1.2:1/1.2)},{passive:!1});let c=new Map,l=0,u=0;t.addEventListener(`pointerdown`,e=>{if(c.set(e.pointerId,{x:e.clientX,y:e.clientY}),t.setPointerCapture(e.pointerId),l=0,c.size===2){let[e,t]=[...c.values()];u=Math.hypot(e.x-t.x,e.y-t.y)}t.classList.add(`dragging`)}),t.addEventListener(`pointermove`,e=>{let n=c.get(e.pointerId);if(!n)return;let r={x:e.clientX,y:e.clientY};if(c.size===2){c.set(e.pointerId,r);let[n,i]=[...c.values()],a=Math.hypot(n.x-i.x,n.y-i.y),o=t.getBoundingClientRect();u&&s((n.x+i.x)/2-o.left,(n.y+i.y)/2-o.top,a/u),u=a,l+=10}else i+=r.x-n.x,a+=r.y-n.y,l+=Math.abs(r.x-n.x)+Math.abs(r.y-n.y),c.set(e.pointerId,r),o()});let d=n=>{c.has(n.pointerId)&&(c.delete(n.pointerId),c.size<2&&(u=0),c.size||t.classList.remove(`dragging`),l<6&&n.type===`pointerup`&&e(n))};return t.addEventListener(`pointerup`,d),t.addEventListener(`pointercancel`,d),{reset(){r=1,i=0,a=0,o()},focus(e,s){r=2.2;let c=n.clientWidth/n.width*r;i=t.clientWidth/2-e*c,a=t.clientHeight/2-s*c,o()}}}function L_(e,t){let n=e=>`<kbd>${e}</kbd>`,r=`${n(`V`)} ${t?`一人称にする`:`自分の姿を見る`}`;switch(e){case`walk`:return`${n(`E`)} 調べる　${r}　${n(`M`)} 地図　${n(`4`)} 空へ`;case`bike`:return`${n(`A`)}${n(`D`)} でハンドル　${n(`S`)} ブレーキ　${r}`;case`boat`:return`${n(`A`)}${n(`D`)} で舵を切る　${n(`1`)} 岸に上がる`;case`fly`:return`${n(`1`)} 真下の地上に降りる　${n(`M`)} 地図でワープ　ホイールで自分の姿を見る`}}function R_(e,t){return Math.min(t,e>=1?2:e>=.8?1.25:1)}var z_=1e3/45,B_=1e3/56,V_=1e3,H_=3,U_=.92,W_=1.06,G_=class{min;scale=1;sum=0;frames=0;good=0;constructor(e=.6){this.min=e}sample(e){if(e<=0||e>250||(this.sum+=e,this.frames++,this.sum<V_))return!1;let t=this.sum/this.frames;this.sum=this.frames=0;let n=this.scale;return t>z_?(this.good=0,this.scale=Math.max(this.min,this.scale*U_)):t<B_&&this.scale<1?++this.good>=H_&&(this.good=0,this.scale=Math.min(1,this.scale*W_)):this.good=0,this.scale!==n}reset(){this.scale=1,this.sum=this.frames=this.good=0}},K_={sensitivity:1,invertY:!1,fov:65,quality:`auto`,volume:.7,hints:!0,mouseLock:!1,nightBrightness:1},q_=e=>`${e}-explorer-settings-v1`,J_=(e,t,n,r)=>typeof e==`number`&&Number.isFinite(e)?Math.min(n,Math.max(t,e)):r;function Y_(e){let t={};try{t=JSON.parse(localStorage.getItem(q_(e))??`{}`)??{}}catch{}return{sensitivity:J_(t.sensitivity,.3,3,K_.sensitivity),invertY:typeof t.invertY==`boolean`?t.invertY:K_.invertY,fov:J_(t.fov,50,90,K_.fov),quality:t.quality===`high`||t.quality===`medium`||t.quality===`light`?t.quality:`auto`,volume:J_(t.volume,0,1,K_.volume),hints:typeof t.hints==`boolean`?t.hints:K_.hints,mouseLock:typeof t.mouseLock==`boolean`?t.mouseLock:K_.mouseLock,nightBrightness:J_(t.nightBrightness,.6,1.8,K_.nightBrightness)}}function X_(e,t){try{localStorage.setItem(q_(e),JSON.stringify(t))}catch{}}function Z_(e,t,n=!1){return e===`high`?1:e===`medium`?.8:e===`light`?.6:t?n?.6:.8:1}var Q_={1:`高（影・光のにじみ・水面の映り込み）`,.8:`標準（影あり）`,.6:`軽量`};function $_(e,t){for(let n of[q_(e),...t])try{localStorage.removeItem(n)}catch{}}var ev=()=>({pets:0,maxAlt:0,distance:0,flags:{}});function tv(e){let t=ev();if(!e||typeof e!=`object`)return t;let n=e;for(let e of[`pets`,`maxAlt`,`distance`]){let r=n[e];typeof r==`number`&&Number.isFinite(r)&&(t[e]=r)}for(let[e,r]of Object.entries(n))r===!0&&(t.flags[e]=!0);if(n.flags&&typeof n.flags==`object`)for(let[e,r]of Object.entries(n.flags))r===!0&&(t.flags[e]=!0);return t}var nv=(e,t)=>[+!!e.stats.flags[t],1],rv=(e,t)=>[Math.min(e,t),t],iv=(e,t)=>{let[n,r]=e.progress(t);return n>=r};function av(e,t,n){let r=[];for(let i of n)!e.has(i.id)&&iv(i,t)&&(e.add(i.id),r.push(i));return r}function ov(e,t,n,r){let i=new nm,a=dm(10130570),o=dm(8157039),s=new Z({color:16770736,emissive:16758858,emissiveIntensity:.6,roughness:.2,metalness:.3}),c=ah(7),l=t+16,u=n-14,d=e.height(l,u)-.6,f=sh(5.5,11,.95);f.computeBoundingBox();let p=d+f.boundingBox.max.y;i.add(f,a,l,d,u),i.add(new X(.12,.15,1,10),o,l,p+.3,u),i.add(new Yl(.55,24,16),s,l,p+1.2,u);for(let s=0;s<14;s++){let l=c()*Math.PI*2,u=18+c()*45,d=t+Math.cos(l)*u,f=n+Math.sin(l)*u;if(Math.abs(d-t)<10&&f>n-6&&f<n+30||!r(d,f))continue;let p=1.2+c()*2.8;i.add(sh(p,100+s,.6+c()*.35),c()<.5?a:o,d,e.height(d,f)-p*.35,f,c()*6)}return i.build()}function sv(e,t,n,r,i=24){let a=new nm,o=ah(31),s=[15921128,15921128,2763306,13666876,10132114].map(e=>new Z({color:e,roughness:.75})),c=new Z({color:1710618,roughness:.6}),l=new Z({color:14714508,roughness:.6}),u=new Z({color:13666876,roughness:.75});for(let d=0;d<i;d++){let i=o()*Math.PI*2,f=4+o()*30,p=t+Math.cos(i)*f,m=n+Math.sin(i)*f;if(!r(p,m))continue;let h=.18+o()*.14,g=e.height(p,m),_=o()*Math.PI*2,v=s[d%s.length],y=new Yn;y.position.set(p,g,m),y.rotation.y=_,y.updateMatrix();let b=(e,t,n,r,i)=>{a.addMatrix(e.translate(n,r,i),t,y.matrix)};b(new Yl(h,18,12).scale(1.2,.65,1),v,0,h*.55,0),v.color.getHex()===15921128&&o()<.6&&b(new Yl(h*.55,12,8).scale(1.1,.5,1),u,h*.35,h*.82,-h*.15);for(let e of[-1,1])b(new Yl(h*.09,8,6).scale(1,1.4,.5),c,e*h*.28,h*.72,-h*.9),b(new il(h*.16,h*.25,3),v===s[2]?v:c,e*h*.42,h*1,-h*.55);b(new Yl(h*.06,8,6),l,0,h*.58,-h*.97)}return a.build(!0,!0)}function cv(){let e=new nm,t=new Z({color:5200456,roughness:.45,metalness:.6}),n=dm(9407104);e.add(new K(1.6,.5,1.2),n,0,.25,0),e.add((e=>new nl(e.map(([e,t])=>new R(e,t)),16))([[.001,0],[.2,.02],[.22,.2],[.18,.42],[.2,.55],[.12,.66],[.001,.68]]).scale(1,1,.7),t,-.15,.55,0,0,.25),e.add(new Yl(.11,16,12).scale(.95,1.1,1),t,-.05,1.3399999999999999,-.1),e.add(new Yl(.06,10,8),t,-.08,1.42,0);for(let n of[-1,1])e.rod(new V(-.15+n*.09,.62,.05),new V(-.1+n*.09,.9,-.22),.06,t,10),e.rod(new V(-.1+n*.09,.9,-.22),new V(-.1+n*.09,.55,-.3),.05,t,10);return e.rod(new V(-.2,1.1,-.05),new V(-.08,.95,-.25),.04,t,8),e.rod(new V(-.08,.95,-.25),new V(-.05,1.25,-.16),.035,t,8),e.add(new K(.55,.35,.3),t,.45,.675,-.05),e.add(new K(.57,.04,.32),t,.45,.8,-.05),e.rod(new V(.25,.5,.3),new V(.1,1.25,.25),.03,t,8),e.build()}var lv={title:`尾道さんぽ — Onomichi Explorer`,description:`国土地理院の標高・空中写真・地図データで再現した広島県尾道市と尾道水道を自由に歩ける 3D 探索ゲーム`,eyebrow:`広島県尾道市・尾道水道`,wordmark:`尾道さんぽ`,wordmarkEn:`ONOMICHI EXPLORER`,lead:`尾道駅前の上空から、実測データでつくった坂と海の町へ。空から眺め、気になる場所に降りて歩こう。名所 24 か所と 15 匹の猫、<span class="goal-count"></span> のお題が待っています。`,place:`尾道`,mapTitle:`尾道 周辺図`,canvasLabel:`尾道の 3D ビュー`,shareNote:`「この日時にする」でその日時（日本時間）の尾道に切り替わります。季節の木々や花、生き物、潮の満ち引き、月の満ち欠け、その日の祭りも再現されます。リンクを開いた人も、選んだ日時から始まります。`,disclaimer:`このゲームは個人が制作した非公式のファン作品です。尾道市、観光団体、登場する寺社・施設、国土地理院とは関係がなく、これらの団体が内容を保証・推奨するものではありません。`,welcome:{title:`ようこそ尾道へ`,body:`空から街を眺めてみよう`},restart:`見つけた名所と猫、お題の記録を消して、尾道駅前からはじめますか？`,tips:[`尾道は「坂の町」。石段や路地は徒歩で、海沿いは自転車が気持ちいい。`,`千光寺山ロープウェイのゴンドラの床に乗ると、そのまま山頂まで運ばれます。`,`渡船の床に乗っていれば、向島まで数分の船旅。`,`空撮モード（4）なら、地図でクリックした場所へひとっ飛び。`,`日が傾くと、尾道水道が金色に。夜は窓明かりと街灯がともります。`,`猫の細道には猫が多いとか。坂の途中で耳を澄ませてみよう。`,`T キーで時間を進められます。夕暮れの千光寺山がおすすめ。`,`旅の手帖の「お題」をすべて達成すると、旅の達成度 100% に近づきます。`]},uv=(e,t)=>e*60+t,dv=[[5,11,`吉永`,4],[5,47,`岡山`],[6,25,`岡山`,7],[6,52,`和気`],[7,1,`岡山`],[7,19,`岡山`,4],[7,34,`岡山`],[7,49,`相生`],[8,7,`瀬戸`,4],[8,35,`福山`],[9,3,`岡山`],[9,40,`相生`],[10,15,`岡山`],[10,46,`福山`,4],[11,10,`岡山`],[11,42,`相生`,4],[12,5,`岡山`],[12,25,`福山`],[13,5,`岡山`,4],[13,40,`相生`],[14,5,`福山`],[14,47,`岡山`],[15,9,`播州赤穂`,4],[15,26,`福山`],[15,44,`姫路`,4],[15,56,`岡山`,4],[16,18,`岡山`],[16,33,`岡山`],[16,52,`播州赤穂`],[17,13,`長船`],[17,35,`岡山`,4],[17,50,`姫路`,4],[18,10,`岡山`,4],[18,29,`姫路`],[18,46,`岡山`],[19,3,`姫路`],[19,15,`日生`],[19,46,`岡山`,4],[20,25,`岡山`,4],[20,46,`三石`],[21,13,`岡山`],[21,39,`岡山`,4],[22,9,`岡山`],[22,51,`岡山`],[23,44,`福山`]],fv=[[6,30,`糸崎`],[7,9,`三原`,4,`115`],[7,35,`糸崎`,4],[8,7,`三原`,4],[8,19,`糸崎`],[8,40,`三原`],[8,54,`糸崎`],[9,25,`三原`],[9,44,`糸崎`],[10,7,`三原`,4],[10,37,`三原`],[11,10,`三原`,4],[11,36,`三原`],[11,59,`糸崎`],[12,32,`三原`,4],[13,10,`三原`,4,`115`],[13,32,`糸崎`,4],[14,18,`糸崎`,4],[14,51,`三原`],[15,21,`三原`,4],[15,54,`三原`],[16,13,`三原`],[16,32,`糸崎`],[16,50,`糸崎`,4],[17,3,`三原`,4],[17,21,`糸崎`,4],[17,46,`糸崎`],[18,9,`三原`],[18,26,`三原`,3,`213`],[18,42,`糸崎`],[19,2,`糸崎`],[19,24,`糸崎`,4],[19,37,`糸崎`],[19,50,`糸崎`,4],[20,1,`糸崎`,4],[20,16,`三原`],[20,43,`糸崎`,4],[21,5,`糸崎`,4],[21,20,`糸崎`],[21,40,`三原`,3,`213`],[21,59,`糸崎`,7],[22,21,`糸崎`,4],[22,55,`三原`],[23,56,`三原`]],pv=(e,t)=>e.map(([e,n,r,i=3,a=`urara`])=>({time:uv(e,n),dir:t,stock:a,cars:i,label:`${r}行き`})),mv=[{time:uv(12,35),dir:`up`,stock:`etsetora`,cars:2,days:`holiday`,label:`etSETOra 福山行き`},{time:uv(14,38),dir:`down`,stock:`etsetora`,cars:2,days:`holiday`,label:`etSETOra 広島行き`}],hv=18,gv=[[0,8,`down`,`61`,!0],[0,22,`up`,`1060`,!1],[0,36,`down`,`3051`,!0],[0,40,`down`,`1087`,!1],[0,58,`up`,`1064`,!0],[1,35,`up`,`5052`,!0],[1,57,`up`,`1058`,!1],[2,9,`up`,`60`,!1],[2,29,`down`,`1063`,!0],[2,43,`down`,`1065`,!1],[2,52,`down`,`5075`,!0],[3,21,`down`,`2071`,!0],[3,59,`down`,`8091`,!0],[4,8,`up`,`8056`,!1],[4,27,`down`,`1095`,!0],[4,49,`down`,`5053`,!0],[4,56,`down`,`57`,!0],[5,13,`down`,`5051`,!1],[5,22,`up`,`3050`,!0],[5,40,`up`,`1072`,!0],[5,55,`up`,`56`,!0],[6,14,`up`,`1070`,!0],[6,33,`up`,`68`,!0],[7,31,`up`,`1086`,!0],[7,35,`up`,`1062`,!0],[7,59,`up`,`1050`,!0],[8,3,`down`,`2075`,!0],[8,12,`up`,`1054`,!0],[8,40,`up`,`5070`,!0],[8,42,`down`,`1091`,!1],[8,56,`up`,`1052`,!1],[9,2,`down`,`63`,!1],[9,3,`up`,`5050`,!0],[9,27,`up`,`5074`,!1],[9,39,`down`,`1061`,!1],[9,51,`down`,`5069`,!0],[10,13,`down`,`69`,!1],[10,36,`down`,`55`,!1],[10,39,`up`,`2084`,!0],[10,43,`down`,`1051`,!0],[10,44,`down`,`5057`,!1],[11,10,`up`,`2070`,!0],[12,2,`down`,`5067`,!1],[12,7,`down`,`1053`,!0],[13,21,`down`,`1067`,!0],[13,28,`up`,`2080`,!0],[13,38,`down`,`1059`,!1],[13,52,`down`,`1055`,!0],[14,42,`up`,`5054`,!0],[14,51,`down`,`73`,!1],[15,24,`down`,`1071`,!0],[15,59,`up`,`1056`,!0],[16,27,`up`,`5066`,!0],[17,39,`down`,`2081`,!0],[17,53,`down`,`1073`,!0],[18,1,`up`,`8090`,!0],[18,45,`up`,`5068`,!0],[19,48,`up`,`2072`,!0],[20,6,`down`,`5085`,!0],[20,21,`up`,`1074`,!0],[22,3,`up`,`54`,!0],[22,38,`up`,`1094`,!1],[23,1,`down`,`1093`,!0],[23,31,`up`,`1068`,!0],[23,51,`up`,`1066`,!0],[23,53,`down`,`8057`,!0]],_v=e=>20+Number.parseInt(e,10)%7,vv=()=>gv.map(([e,t,n,r,i])=>({time:(uv(e,t)+(n===`down`?hv:-18)+1440)%1440,dir:n,stock:`freight`,cars:_v(r),stop:!1,label:`${r}レ`,...i?{}:{days:`weekday`}})),yv={up:[1,0],services:[...pv(dv,`up`),...pv(fv,`down`),...mv,...vv()],dwell:40},bv=[{id:`station`,name:`尾道駅`,kind:`駅`,label:`尾道駅`,lat:34.4046,lon:133.195,desc:`JR山陽本線の駅。駅前はすぐ海で、正面に尾道水道と向島の造船所のクレーンが見える。旅はここから。`},{id:`senkoji`,name:`千光寺`,kind:`寺院`,label:`千光寺`,lat:34.4097,lon:133.1977,desc:`大同元年（806年）創建と伝わる真言宗の古刹。岩の上に建つ朱塗りの本堂と「鼓岩」「玉の岩」が有名。鐘楼の「時の鐘」は日本の音風景百選。`},{id:`senkoji-park`,name:`千光寺公園`,kind:`公園`,label:`千光寺公園`,lat:34.4112,lon:133.1968,radius:90,desc:`千光寺山（標高約140m）の山頂一帯の公園。桜の名所で、展望台からは尾道水道としまなみの島々を一望できる。`},{id:`peak`,name:`千光寺山 頂上展望台`,kind:`展望`,lat:34.4113,lon:133.1963,desc:`山頂の展望台。眼下に市街地と尾道水道、対岸の向島、遠くに因島や四国の山並みまで見渡せる。`},{id:`ropeway`,name:`千光寺山ロープウェイ`,kind:`乗り物`,lat:34.4082,lon:133.1994,desc:`山麓駅から山頂駅までを約3分で結ぶロープウェイ。ゴンドラの床に乗ればそのまま山頂へ運ばれる。`},{id:`museum`,name:`尾道市立美術館`,kind:`美術館`,label:`尾道市立美術館`,lat:34.4115,lon:133.1958,desc:`千光寺公園内にある美術館。安藤忠雄の設計による改修で、ガラス越しに尾道水道を望む。`},{id:`path`,name:`文学のこみち`,kind:`散策路`,lat:34.4105,lon:133.1971,radius:50,desc:`千光寺山頂から千光寺へ下る小径。志賀直哉、林芙美子ら尾道ゆかりの文人の作品を刻んだ文学碑が点在する。`},{id:`ushitora`,name:`艮神社`,kind:`神社`,lat:34.4081,lon:133.1989,desc:`尾道で最も古いとされる神社。境内の大楠は樹齢900年ともいわれ、ロープウェイがそのすぐ上をかすめていく。`},{id:`nekonohosomichi`,name:`猫の細道`,kind:`路地`,lat:34.4088,lon:133.1983,radius:35,desc:`艮神社から天寧寺へと続く細い路地。石に猫を描いた「福石猫」が置かれ、本物の猫たちもよく昼寝している。`},{id:`tenneiji`,name:`天寧寺 三重塔（海雲塔）`,kind:`寺院`,lat:34.4091,lon:133.1961,desc:`1388年建立の三重塔。坂の途中から塔越しに尾道水道を望む景色は、尾道を代表する眺め。`},{id:`misode`,name:`御袖天満宮`,kind:`神社`,label:`天満宮`,lat:34.4086,lon:133.2008,desc:`菅原道真を祀る神社。55段の石段は映画「転校生」の名場面で知られる。`},{id:`saikokuji`,name:`西國寺`,kind:`寺院`,label:`西國寺`,lat:34.411,lon:133.2074,desc:`真言宗醍醐派の大本山。仁王門の巨大な草鞋（わらじ）と、山の中腹に立つ朱塗りの三重塔が見どころ。`},{id:`jodoji`,name:`浄土寺`,kind:`寺院`,label:`浄土寺庭園`,lat:34.4108,lon:133.2124,desc:`聖徳太子の開基と伝わる古刹。本堂と多宝塔は国宝。境内は小津安二郎の映画「東京物語」のロケ地でもある。`},{id:`jodojisan`,name:`浄土寺山 展望台`,kind:`展望`,label:`浄土寺山`,lat:34.414,lon:133.213,desc:`浄土寺の裏山、標高約180m。不動岩の展望台からは尾道大橋と新尾道大橋が並ぶ姿を真正面に見られる。`},{id:`hondori`,name:`尾道本通り商店街`,kind:`商店街`,lat:34.4067,lon:133.1985,radius:60,desc:`駅前から東へ約1.6km続くアーケード商店街。老舗の和菓子屋や尾道ラーメンの店、古い建物を活かしたカフェが並ぶ。`},{id:`fumiko`,name:`林芙美子像`,kind:`記念碑`,lat:34.4055,lon:133.1967,desc:`「海が見えた。海が見える。五年振りに見る尾道の海はなつかしい」——『放浪記』の一節とともに、商店街の入口に座る作家の像。`},{id:`u2`,name:`ONOMICHI U2`,kind:`複合施設`,lat:34.4038,lon:133.1906,desc:`県営上屋2号倉庫を改装したサイクリスト向けの複合施設。しまなみ海道を自転車で渡る旅の拠点。`},{id:`tosen-ekimae`,name:`駅前渡船`,kind:`渡船`,lat:34.4041,lon:133.1962,radius:45,desc:`尾道と向島を結ぶ小さな渡し船。わずか数分の船旅で、自転車ごと乗れる。渡船の床に乗っていれば対岸へ運ばれる。`},{id:`onomichi-bridge`,name:`尾道大橋`,kind:`橋`,label:`尾道大橋`,lat:34.4035,lon:133.2135,radius:90,desc:`1968年に開通した斜張橋。尾道水道をまたいで本土と向島を結ぶ。歩道はなく、空から眺めるのがおすすめ。`},{id:`shin-onomichi-bridge`,name:`新尾道大橋`,kind:`橋`,label:`新尾道大橋`,lat:34.4035,lon:133.2145,radius:90,desc:`西瀬戸自動車道（しまなみ海道）の最初の橋。尾道大橋と並ぶ白い斜張橋が尾道水道の東の玄関口を飾る。`},{id:`suido`,name:`尾道水道`,kind:`海峡`,label:`尾道水道`,lat:34.4015,lon:133.2,radius:150,desc:`本土と向島の間の幅200〜300mほどの細長い海峡。古くから天然の良港として栄え、今も渡船や造船所の船が行き交う。`},{id:`mukaishima`,name:`向島`,kind:`島`,label:`向島`,lat:34.39,lon:133.2,radius:250,desc:`尾道水道の対岸の島。造船所と柑橘畑、のどかな集落が広がる。しまなみ海道で最初に渡る島。`},{id:`iwashijima`,name:`岩子島`,kind:`島`,label:`岩子島`,lat:34.387,lon:133.158,radius:250,desc:`向島の西に岩子島大橋でつながる小島。小さな漁港と畑が広がる、海辺ののどかな島。`},{id:`shipyard`,name:`向島の造船所`,kind:`産業`,label:`日立造船所`,lat:34.3985,lon:133.199,radius:120,desc:`尾道水道沿いに並ぶ造船所。巨大なクレーンと船体が、坂の街から見下ろす景色に欠かせない。`}],xv=[[`tama`,`タマ`,`猫の細道`,34.4088,133.1983,15921128],[`kuro`,`クロ`,`猫の細道の上`,34.4091,133.1979,2236962],[`tora`,`トラ`,`艮神社`,34.408,133.1991,13666876],[`mike`,`ミケ`,`千光寺の鐘楼`,34.4098,133.1979,-1],[`sora`,`ソラ`,`千光寺公園`,34.4113,133.197,10134443],[`hachi`,`ハチ`,`天寧寺`,34.4089,133.1963,-2],[`mugi`,`ムギ`,`本通り商店街`,34.4066,133.199,13214315],[`ekichan`,`エキちゃん`,`尾道駅前`,34.4044,133.1945,15921128],[`nyoro`,`ニョロ`,`浄土寺`,34.4106,133.2122,5917242],[`waraji`,`ワラジ`,`西國寺`,34.4105,133.2072,-1],[`fune`,`フネ`,`向島の渡船乗り場`,34.4003,133.196,13666876],[`bike`,`チャリ`,`ONOMICHI U2`,34.4037,133.1902,2236962],[`tenma`,`テンマ`,`御袖天満宮の石段`,34.4087,133.2006,10134443],[`bungaku`,`ブンガク`,`文学のこみち`,34.4104,133.1973,-2],[`shima`,`シマ`,`岩子島`,34.388,133.159,15921128]],Sv=[{id:`minato`,name:`尾道みなと祭`,start:10,end:17,date:{month:4,weekday:6,nth:4,days:2},effects:{banners:!0},desc:`港町尾道の春祭り。駅前から商店街まで幟が立ち並び、「ええじゃんSANSA・がり」の踊りで街がにぎわう。`},{id:`sumiyoshi`,name:`おのみち住吉花火まつり`,start:19.5,end:20.5,date:{month:7,weekday:6,last:!0},effects:{fireworks:!0},desc:`江戸時代から続く住吉神社の例祭。尾道水道の上に約1万3000発の花火が上がり、山と水面を照らす。`},{id:`akari`,name:`尾道灯りまつり`,start:18,end:20.5,date:{month:10,weekday:6,nth:3},effects:{lanterns:!0},desc:`寺の境内や坂道、路地に灯籠やろうそくの灯りがともり、古い街並みがやわらかな光に包まれる秋の夜。`},{id:`beccha`,name:`尾道ベッチャー祭`,start:9,end:16,date:{month:11,day:1,days:3},effects:{banners:!0,oni:!0},desc:`一宮神社の例祭。面をつけたベタ・ソバ・ショーキが町を練り歩き、子どもを追いかけてはささらや祝い棒で叩く。叩かれると無病息災といわれる。`},{id:`joya`,name:`除夜の鐘`,start:23,end:24,date:{month:12,day:31},effects:{bells:!0},desc:`大晦日の夜、千光寺をはじめ山手の寺々で鐘が撞かれ、尾道水道に響きわたる。`}],Cv=[{id:`first`,name:`はじめの一歩`,desc:`名所をひとつ見つける`,progress:e=>rv(e.landmarks,1)},{id:`explorer`,name:`名所めぐり`,desc:`名所を12か所見つける`,progress:e=>rv(e.landmarks,12)},{id:`master`,name:`尾道通`,desc:`すべての名所を見つける`,progress:e=>[e.landmarks,e.landmarksTotal]},{id:`catfriend`,name:`猫の友だち`,desc:`猫に5匹出会う`,progress:e=>rv(e.cats,5)},{id:`catall`,name:`猫の町の住人`,desc:`すべての猫に出会う`,progress:e=>[e.cats,e.catsTotal]},{id:`pets`,name:`なでなで`,desc:`猫を10回なでる（猫のそばで E）`,progress:e=>rv(e.stats.pets,10)},{id:`bell`,name:`時の鐘`,desc:`千光寺の鐘楼で鐘をつく`,progress:e=>nv(e,`bell`)},{id:`ropeway`,name:`空中散歩`,desc:`ロープウェイのゴンドラに乗る`,progress:e=>nv(e,`ropeway`)},{id:`ferry`,name:`渡し船`,desc:`渡船に乗って尾道水道を渡る`,progress:e=>nv(e,`ferry`)},{id:`sunset`,name:`夕焼けの展望台`,desc:`17〜19時に千光寺山の頂上展望台に立つ`,progress:e=>nv(e,`sunset`)},{id:`nightboat`,name:`夜の水道`,desc:`夜、船で尾道水道に出る`,progress:e=>nv(e,`nightBoat`)},{id:`high`,name:`鳥の目`,desc:`ドローンで地上300mまで上がる`,progress:e=>rv(Math.floor(e.stats.maxAlt),300)},{id:`walker`,name:`旅人`,desc:`合計10km移動する（ワープは除く）`,progress:e=>rv(Math.floor(e.stats.distance/100)/10,10)}],wv=[{flag:`sunset`,when:e=>e.hours>=17&&e.hours<19&&e.mode===`walk`&&Math.hypot(e.lm.peak.x-e.x,e.lm.peak.z-e.z)<25},{flag:`nightBoat`,when:e=>e.mode===`boat`&&e.night>.6}],Tv={ropeway:{base:[133.1993,34.4083],top:[133.1971,34.411]},ferries:[{name:`駅前渡船`,lon:133.196,lat:34.4},{name:`尾道渡船`,lon:133.2008,lat:34.4},{name:`福本渡船`,lon:133.2042,lat:34.4}],train:{station:`station`,timetable:yv},ships:{from:[133.1477,34.3935]}},Ev={woods:[[`ubamegashi`,22],[`arakashi`,18],[`shii`,14],[`akamatsu`,10],[`konara`,9],[`abemaki`,7],[`yamazakura`,5],[`hazenoki`,5],[`yamamomo`,4],[`enoki`,3],[`kusunoki`,3]],shore:[[`kuromatsu`,40],[`ubamegashi`,25],[`tabunoki`,15],[`arakashi`,10],[`enoki`,5],[`hazenoki`,5]],ridgeAbove:110,ridge:[[`akamatsu`,35],[`ubamegashi`,30],[`kuromatsu`,10],[`arakashi`,10],[`konara`,8],[`abemaki`,7]],town:[[`kusunoki`,14],[`somei`,12],[`keyaki`,10],[`arakashi`,10],[`icho`,8],[`ubamegashi`,8],[`momiji`,8],[`mikan`,8],[`enoki`,6],[`kuromatsu`,6],[`hazenoki`,5],[`ume`,5]]},Dv=[[`somei`,80],[`momiji`,8],[`kuromatsu`,6],[`akamatsu`,6]],Ov=[[`momiji`,45],[`kusunoki`,15],[`icho`,10],[`ume`,10],[`somei`,10],[`kuromatsu`,10]],kv=[[`mikan`,85],[`ubamegashi`,10],[`kuromatsu`,5]];function Av(e){let[t,n]=Qu(133.2079,34.4116),[r,i]=Qu(...Tv.ropeway.base),[a,o]=Qu(...Tv.ropeway.top);return{tennei:[e.tenneiji.x,e.tenneiji.z,8],saikoku:[t,n,8],senkoji:[e.senkoji.x,e.senkoji.z,10],bell:[e.senkoji.x+14,e.senkoji.z-6,4],tahoto:[e.jodoji.x+18,e.jodoji.z-8,7],ropeBase:[r,i,9],ropeTop:[a,o,9]}}function jv(e){let t=(e,t,n,r,i)=>{let[a,o]=Qu(e,t);return{x:a,z:o,r:n,mix:r,share:i}},n=e[`senkoji-park`];return[{x:n.x,z:n.z,r:160,mix:Dv,share:.8},{x:e.peak.x,z:e.peak.z,r:120,mix:Dv,share:.8},{x:e.ushitora.x,z:e.ushitora.z,r:35,mix:[[`kusunoki`,100]],share:.9},{x:e.misode.x,z:e.misode.z,r:40,mix:[[`ume`,50],[`kusunoki`,30],[`momiji`,20]],share:.7},...[`senkoji`,`tenneiji`,`saikokuji`,`jodoji`].map(t=>({x:e[t].x,z:e[t].z,r:70,mix:Ov,share:.6})),t(133.17,34.388,500,kv,.55),t(133.215,34.38,600,kv,.5),t(133.235,34.392,400,kv,.45),t(133.158,34.387,450,kv,.5)]}function Mv(e){let{hm:t,lm:n,roads:r,collision:i,open:a}=e,o=Av(n),s=[];s.push(Lm(Am(1),t,o.tennei[0],o.tennei[1],.3,-.5)),s.push(Lm(Am(1.05),t,o.saikoku[0],o.saikoku[1],.2,-.5)),s.push(Lm(jm(11,9),t,o.senkoji[0],o.senkoji[1],2.6,1.5));let c={x:o.bell[0],z:o.bell[1]};s.push(Lm(Fm(),t,c.x,c.z,.5,0));for(let e of[`ushitora`,`misode`])s.push(Lm(Mm(),t,n[e].x,n[e].z+9,0,0));for(let e of[`saikokuji`,`jodoji`])s.push(Lm(Pm(),t,n[e].x,n[e].z+22,0,0));for(let e of[-1,1])s.push(Lm(Nm(),t,o.senkoji[0]+e*4.5,o.senkoji[1]+9,0,0)),s.push(Lm(Nm(1.8),t,n.jodoji.x+e*3,n.jodoji.z+16,0,0));s.push(Lm(Am(.9,2),t,o.tahoto[0],o.tahoto[1],0,-.5)),s.push(ov(t,o.senkoji[0],o.senkoji[1],a)),s.push(sv(t,n.nekonohosomichi.x,n.nekonohosomichi.z,a));let l=lh(t,r,n.hondori.x,n.hondori.z);l&&s.push(l);{let[e,r]=i.findFree(n.fumiko.x,n.fumiko.z,30);s.push(Lm(cv(),t,e,r,Math.PI,0))}let u=Im(t,o.ropeTop[0],o.ropeTop[1],Math.PI*.08);[n.peak.x,n.peak.z]=u.center;let d=[];{let e=n.hondori,r=e.z;for(;r<e.z+600&&t.height(e.x,r)>-2;)r+=5;for(let t of[-70,0,70])d.push(new V(e.x+t,0,r+90))}return{props:s,plain:[u.group],platforms:[u.platform],tagLift:{tenneiji:26,senkoji:14},festivalSites:{street:[n.hondori.x,n.hondori.z],temples:[`senkoji`,`tenneiji`,`ushitora`,`misode`,`saikokuji`,`jodoji`].map(e=>[n[e].x,n[e].z]),town:[n.nekonohosomichi.x,n.nekonohosomichi.z,700],barges:d},seasonSites:{town:[n.nekonohosomichi.x,n.nekonohosomichi.z,900],street:[n.hondori.x,n.hondori.z],gates:[...[`ushitora`,`misode`].map(e=>[n[e].x,n[e].z+12,0]),...[`saikokuji`,`jodoji`].map(e=>[n[e].x,n[e].z+25,0]),[n.station.x,n.station.z+12,0]]},groves:jv(n),interactables:[{x:c.x,z:c.z,radius:8,prompt:`時の鐘をつく`,act:e=>{e.sound.bell(),e.flag(`bell`),e.toast(`千光寺`,`ゴーン……`,`時の鐘の音が尾道水道に響きわたる。`)}}],chimes:[{hours:[6,18],x:c.x,z:c.z,range:1500,act:(e,t)=>{e.sound.bell(),e.toast(`時の鐘`,`${t}時`,`千光寺の鐘が町に響く。`)}}]}}var Nv={id:`onomichi`,text:lv,tide:{neap:.75,spring:1.7},flora:Ev,landmarks:bv,cats:xv,festivals:Sv,goals:Cv,rides:Tv,flagRules:wv,clearings:e=>Object.values(Av(e)),build:Mv,spawn:e=>({x:e.station.x+20,z:e.station.z+45,altitude:100,lookAt:e[`onomichi-bridge`]}),flyover:e=>({x:e.ushitora.x,y:30,z:e.ushitora.z+150}),current:e=>[e[`onomichi-bridge`].x-e.station.x,e[`onomichi-bridge`].z-e.station.z]},Pv=e=>document.getElementById(e),Fv=`./`,Iv=Nv.text,Lv=`${Nv.id}-explorer-v1`;function Rv(){try{let e=JSON.parse(localStorage.getItem(Lv)??`null`);if(e&&Array.isArray(e.found)&&Array.isArray(e.cats))return e}catch{}return null}function zv(e){try{localStorage.setItem(Lv,JSON.stringify(e))}catch{}}var Bv=new N_(Iv.tips);async function Vv(e){let t=await fetch(Fv+e);if(!t.ok)throw Error(`${e}: ${t.status}`);return t.arrayBuffer()}async function Hv(e){let t=new Image;return t.decoding=`async`,t.src=Fv+e,await t.decode(),t}async function Uv(){let e=Pv(`view`),n=Rv(),r=n??{found:[],cats:[]},i=Y_(Nv.id),a=matchMedia(`(pointer: coarse)`).matches;document.documentElement.classList.toggle(`touch`,a);let o=navigator,s=(navigator.hardwareConcurrency??8)<=4||(o.deviceMemory??8)<=3,c=Z_(i.quality,a,s);Hd(),Bv.set(`terrain`,.03,`標高データを読み込んでいます`);let[l,u,d,f,p,m]=await Promise.all([Vv(`data/terrain.bin`),Vv(`data/features.bin`),Vv(`data/roofs.bin`),Vv(`data/veg.bin`),fetch(`./data/labels.json`).then(e=>e.json()),fetch(`./data/meta.json`).then(e=>e.json())]);for(let e of[`centerLat`,`centerLon`,`chunkSize`,`chunksX`,`chunksZ`,`cell`,`vegCell`])if(m.world[e]!==void 0&&m.world[e]!==Q[e])throw Error(`地図データ（data/meta.json）の ${e} がこの地域の設定と一致しません。npm run bake で再生成してください`);let h=new od(l);Bv.set(`photo`,.15,`空中写真を読み込んでいます`);let _=[],v=0,y=new Set(c>=1?await fetch(`./data/ortho/index.json`).then(e=>e.json()).then(e=>e.hi2x).catch(()=>[]):[]);await Promise.all(Array.from({length:Q.chunksZ},(e,t)=>(_[t]=[],Promise.all(Array.from({length:Q.chunksX},async(e,n)=>{_[t][n]=await Hv(`data/ortho/${n}_${t}${y.has(`${n}_${t}`)?`@2x`:``}.jpg`);let r=++v,i=Q.chunksX*Q.chunksZ;Bv.set(`photo`,.15+r/i*.35,`空中写真を読み込んでいます（${r}/${i}）`)})))));let b=cd(u),x=await fetch(`./data/building-evidence.json`).then(e=>e.ok?e.json():[]).catch(()=>[]),S=await fetch(`./data/building-evidence.geojson`).then(e=>e.ok?e.json():[]).catch(()=>[]),C=[...rd(x),...id(S)];C.length&&nd(b.buildings,C),Bv.set(`city`,.52,`街並みを組み立てています（建物 ${b.buildings.length.toLocaleString(`ja-JP`)} 棟）`);let w=new Worker(new URL(new URL(`worker-DLthd1MJ.js`,import.meta.url).href,``+import.meta.url),{type:`module`}),T=Sm(Nv.landmarks,p),E=Object.fromEntries(T.map(e=>[e.id,e])),D=Nv.clearings(E);b.buildings=fd(b.buildings,D);let O=new Promise(e=>{w.addEventListener(`message`,function t(n){n.data.type===`ready`&&(w.removeEventListener(`message`,t),e(n.data))})}),k=await fetch(`./data/osm-industrial-buildings.json`).then(e=>e.ok?e.json():null).catch(()=>null);if(k&&typeof k==`object`){let e=k.elements;if(Array.isArray(e)){for(let t of e){let e=t.geometry;if(!Array.isArray(e)||e.length<4)continue;let n=e.map(e=>Qu(e.lon,e.lat));if(n.some(([e,t])=>!Number.isFinite(e)||!Number.isFinite(t)))continue;let r=(e,t)=>{let r=!1;for(let i=0,a=n.length-1;i<n.length;a=i++){let[o,s]=n[i],[c,l]=n[a];s>t!=l>t&&e<(c-o)*(t-s)/(l-s)+o&&(r=!r)}return r};for(let e of b.buildings){let t=0,n=0;for(let r=0;r<e.pts.length;r+=2)t+=e.pts[r],n+=e.pts[r+1];let i=e.pts.length/2;if(i&&r(t/i,n/i)){let r=Math.max(1,...Array.from({length:i},(r,a)=>Math.hypot(e.pts[a*2]-t/i,e.pts[a*2+1]-n/i)));D.push([t/i,n/i,Math.min(r,1.5)])}}}b.buildings=fd(b.buildings,D)}}w.postMessage({type:`init`,terrain:l.slice(0),features:u.slice(0),roofs:d.slice(0),exclude:D,evidence:C});let A=new Ts({canvas:e,antialias:!0,powerPreference:`high-performance`,logarithmicDepthBuffer:!0});A.setPixelRatio(R_(c,devicePixelRatio)),A.setSize(innerWidth,innerHeight),A.toneMapping=4,A.shadowMap.enabled=c>=.8,A.shadowMap.type=2;let j=new Ds;j.background=new U;let M=new ni(65,innerWidth/innerHeight,.2,4e4);j.add(M);let ee=new Sd(h,_.map(e=>e.map(e=>{let n=new Bt(e);return n.colorSpace=Fe,n.anisotropy=A.capabilities.getMaxAnisotropy(),n.wrapS=n.wrapT=t,n.needsUpdate=!0,n})),c);j.add(ee.group);let N=new Ap(j);N.setShadowQuality(c>=1),N.cloudShadows=c>=.8;let P=new nf;P.setDepth(h),j.add(P.mesh);let te=await fetch(`./data/osm-port-evidence.geojson`).then(e=>e.ok?e.json():null).catch(()=>null),ne=await fetch(`./data/osm-facilities.json`).then(e=>e.ok?e.json():null).catch(()=>null);j.add(ne?af(ne,h):rf(te,h));let re=await fetch(`./data/osm-industrial-buildings.json`).then(e=>e.ok?e.json():null).catch(()=>null);re&&j.add(of(re,h));let ie=await fetch(`./data/osm-industrial-candidates.json`).then(e=>e.ok?e.json():null).catch(()=>null);if(ie&&typeof ie==`object`){let e=new Set((re&&typeof re==`object`?re.elements??[]:[]).map(e=>e.id)),t=ie.elements;Array.isArray(t)&&j.add(of({elements:t.filter(t=>!e.has(t.id))},h,!0))}P.reflections=c>=1;let ae=new Mg(new Uint8Array(f)),oe=new h_(ae,h,c,Nv.flora);if(ne&&typeof ne==`object`){let e=ne.elements;if(Array.isArray(e)){let t=[];for(let n of e){let e=n;if(e.tags?.industrial!==`shipyard`||!Array.isArray(e.geometry))continue;let r=e.geometry.map(e=>Qu(e.lon,e.lat));r.length>=4&&r.every(([e,t])=>Number.isFinite(e)&&Number.isFinite(t))&&t.push(r)}oe.setExcludedAreas(t)}}j.add(oe.group);let se={uNight:{value:0}},ce=await O;Bv.set(`world`,.8,`木々や人、乗り物を配置しています`);let le=new Od(w,se,c);if(le.addRoads(ce.cells),j.add(le.group),w.addEventListener(`message`,e=>{e.data.type===`cell`&&le.onCell(e.data.cell,e.data.lod,e.data.mesh)}),ce.cables.length){let e=new Ar;e.setAttribute(`position`,new br(ce.cables,3)),j.add(new vc(e,new oc({color:15265007})))}let ue=new Ip(h,b.buildings,ce.tops,ce.bottoms,ce.bridges),de=new X(.13,.17,10,6).translate(0,5,0),fe=new K(1.6,.1,.1).translate(0,8.7,0),pe=new X(.28,.28,.9,8).translate(.35,7.6,0),me=new Z({color:10131343,roughness:.9}),he=new oc({color:1710618,transparent:!0,opacity:.75}),F=ce.utility.map(e=>{let t=new Y,n=e.poles.length/4,r=new H,i=new Kt,a=new V(1,1,1),o=new V(0,1,0);for(let s of[de,fe,pe]){let c=new ac(s,me,n);for(let t=0;t<n;t++){let n=s===pe&&t%4?0:1;c.setMatrixAt(t,r.compose(new V(e.poles[t*4],e.poles[t*4+1],e.poles[t*4+2]),i.setFromAxisAngle(o,e.poles[t*4+3]+Math.PI/2),n?a:new V(0,0,0)))}c.castShadow=s===de,t.add(c)}if(e.wires.length){let n=new Ar;n.setAttribute(`position`,new br(e.wires,3)),t.add(new vc(n,he))}return t.visible=!1,j.add(t),{g:t,cx:Hu+(e.cell%gd+.5)*500,cz:Uu+(Math.floor(e.cell/gd)+.5)*500}}),ge=new Y;{let{mirrors:e,rails:t}=ce.furniture,n=new Yn,r=e.length/5,i=new ac(new X(.035,.045,2.5,6).translate(0,1.25,0),me,r),a=new ac(new rl(.33,20),new Z({color:14212578,metalness:.95,roughness:.12,envMapIntensity:1.4}),r),o=new ac(new Kl(.33,.4,20),new Z({color:15233834,roughness:.6,side:2}),r);for(let t=0;t<r;t++){let r=e[t*5],s=e[t*5+1],c=e[t*5+2],l=e[t*5+3],u=e[t*5+4];n.position.set(r,s,c),n.rotation.set(0,0,0),n.scale.setScalar(1),n.updateMatrix(),i.setMatrixAt(t,n.matrix),n.position.set(r,s+2.45,c),n.lookAt(r+l,s+2.45,c+u),n.rotateX(.18),n.updateMatrix(),a.setMatrixAt(t,n.matrix),o.setMatrixAt(t,n.matrix)}let s=t.length/6,c=new Z({color:15132386,roughness:.55,metalness:.3}),l=new ac(new K(.06,.32,1),c,s),u=new ac(new X(.05,.05,.85,6).translate(0,-.3,0),c,s),d=new V,f=new V;for(let e=0;e<s;e++)d.set(t[e*6],t[e*6+1],t[e*6+2]),f.set(t[e*6+3],t[e*6+4],t[e*6+5]),n.position.copy(d).lerp(f,.5),n.lookAt(f),n.scale.set(1,1,d.distanceTo(f)),n.updateMatrix(),l.setMatrixAt(e,n.matrix),n.position.copy(d),n.scale.setScalar(1),n.rotation.set(0,0,0),n.updateMatrix(),u.setMatrixAt(e,n.matrix);for(let e of[i,a,o,l,u])e.castShadow=!0,e.frustumCulled=!1,ge.add(e)}j.add(ge);let I=new Lp(e),L=new hm(h,ue,I);j.add(L.avatar);let _e=(e,t)=>!ue.insideBuilding(e,t),ve=Nv.build({hm:h,lm:E,roads:b.roads,buildings:b.buildings,rails:b.rails,collision:ue,open:_e}),ye=new Y;j.add(ye);for(let e of ve.props)ye.add(e);for(let e of ye.children)Vm(e,se.uNight);for(let e of ve.plain??[])j.add(e);ue.platforms.push(...ve.platforms??[]);let be=ve.tagLift??{},xe=new zm(T,e=>{let t=Math.max(h.height(e.x,e.z),0);return Math.max(t,ue.ground(e.x,e.z,t+150).h)+(be[e.id]??9)});j.add(xe.group);let Se=new mh(h,b.roads,ve.festivalSites,_e);j.add(Se.group);let Ce=new jh(h,b.buildings,b.roads,ae,ve.seasonSites,_e);j.add(Ce.group);let we=new Qm(Nv.festivals),Te=null,Ee=-1,De=null,Oe={month:1,day:1,hours:0,night:0,water:0},ke=0,Ae=Nv.rides,je=Ae.ropeway?new Lh(h,Ae.ropeway.base,Ae.ropeway.top):null,Me=new Rh(h,Ae.ferries??[]),Ne=Ae.train?new ag(h,b.rails,E[Ae.train.station],Ae.train.timetable):null;Ne&&!Ne.ok&&console.warn(`railway: no double track past the station in the rail data`);let Pe=Ae.ships?new Vh(h,Ae.ships.from):null;for(let e of[je,Me,Ne,Pe])e&&j.add(e.group);ue.platforms.push(...je?.platforms??[],...Me.platforms);let Ie=[...Pe?.vessels??[],...Me.vessels],Le=[...Pe?.group.children??[],...Me.group.children],Re=fg(Nv.cats,h,ue);for(let e of Re)j.add(e.obj);let ze=[];for(let e of b.roads){if(e.code!==2701&&e.code!==2703||e.ctg>1&&e.ctg!==3&&e.width<2)continue;let t=Bp(hd(e.pts,h,4,.2,e.code===2703),ld(e));t&&ze.push(t)}let Be=new Up(ze,c>=1?50:25);j.add(Be.group);let Ve=[];for(let e of b.roads){let t=e.code===2721||e.code===2731;if(!t&&!(e.code===2701&&e.ctg===2&&e.width<=1))continue;let n=Bp(hd(e.pts,h,3,t?.1:.15),0);n&&Ve.push(n)}let He=new em(Ve,c>=1?40:18);j.add(He.group);let Ue=[];for(let e of b.roads){if(e.code!==2701||e.width<1&&e.ctg>1)continue;let t=hd(e.pts,h,4,0),n=ld(e)/2+.5,r=0;for(let e=1;e<t.x.length;e++){if(r+=Math.hypot(t.x[e]-t.x[e-1],t.z[e]-t.z[e-1]),r<32)continue;r=0;let i=t.x[e]-t.x[e-1],a=t.z[e]-t.z[e-1],o=Math.hypot(i,a)||1;Ue.push(t.x[e]-a/o*n,t.y[e]+6,t.z[e]+i/o*n)}}{let e=ce.bridges,t=25;for(let n=0;n+6<e.length;n+=7){let r=e[n],i=e[n+1],a=e[n+2],o=e[n+3],s=e[n+4],c=e[n+6];if(t+=Math.hypot(o-r,s-i),t<25||c<4)continue;t=0;let l=o-r,u=s-i,d=Math.hypot(l,u)||1;for(let e of[-1,1])Ue.push(r-u/d*(c-.6)*e,a+5.5,i+l/d*(c-.6)*e)}}let We=(()=>{let e=document.createElement(`canvas`);e.width=e.height=64;let t=e.getContext(`2d`),n=t.createRadialGradient(32,32,0,32,32,32);return n.addColorStop(0,`rgba(255,240,210,1)`),n.addColorStop(.2,`rgba(255,200,130,.6)`),n.addColorStop(1,`rgba(255,170,90,0)`),t.fillStyle=n,t.fillRect(0,0,64,64),new Ec(e)})(),Ge=new Ar;Ge.setAttribute(`position`,new br(Float32Array.from(Ue),3));let Ke=new yc({size:3.6,map:We,transparent:!0,depthWrite:!1,blending:2,color:16767392,sizeAttenuation:!0}),qe=new wc(Ge,Ke);j.add(qe);let Je=new Float32Array(Le.length*3),Ye=new Ar;Ye.setAttribute(`position`,new br(Je,3));let Xe=new yc({size:2.5,map:We,transparent:!0,depthWrite:!1,blending:2,color:16773840,sizeAttenuation:!0}),Ze=new wc(Ye,Xe);Ze.frustumCulled=!1,j.add(Ze);let Qe=new Cu(16763274,0,45,1.6);j.add(Qe);let $e=new Sg(_,p,Iv.place),et=new A_,tt=(e,t)=>fn.find(n=>(n.modes??[`walk`]).includes(L.mode)&&Math.hypot(n.x-e,n.z-t)<n.radius)??null,nt=new Set(r.found),rt=new Set(r.cats),it=Nv.goals;for(let e of Array.from(document.querySelectorAll(`.goal-count`)))e.textContent=String(it.length);let at=new Set((r.goals??[]).filter(e=>it.some(t=>t.id===e))),ot=tv(r.stats),st=()=>({stats:ot,landmarks:nt.size,landmarksTotal:T.length,cats:rt.size,catsTotal:Re.length}),ct=()=>{let e=st();return(e.landmarks+e.cats+at.size)/(e.landmarksTotal+e.catsTotal+it.length)},lt={sound:et,toast:(e,t,n)=>$e.toast(e,t,n),flag:e=>{ot.flags[e]=!0}},ut=rh(location.search),dt=ut?.pos??null,ft=new Date(Date.now()+324e5),pt=ut?.year??ft.getUTCFullYear(),mt=ut?.hours??ft.getUTCHours()+ft.getUTCMinutes()/60,ht=ut?.dayOfYear??Math.floor((ft.getTime()-Date.UTC(ft.getUTCFullYear(),0,1))/864e5)+1,gt=()=>oe.setDay(ht,ve.groves),_t=()=>{mt-=24;let e=Wm(pt,12,31);++ht>e&&(ht=1,pt++),gt()};gt();let vt=new sf(h,c>=1?9:5,c>=1?12:6);j.add(vt.group);let z=0,yt=()=>{if(!dt||!ut)return!1;let[e,t]=dt,n=ut.mode??`walk`;return L.mode!==`fly`&&L.setMode(`fly`),L.pos.set(e,Math.max(h.height(e,t),0)+(ut.altitude??60),t),n!==`fly`&&L.setMode(n),n!==`boat`&&L.teleport(e,t),L.yaw=ut.yaw??0,L.pitch=ut.pitch??(n===`fly`?-.25:0),!0},bt=()=>{if(yt())return;L.mode!==`fly`&&L.setMode(`fly`);let{x:e,z:t,altitude:n,lookAt:r}=Nv.spawn(E);L.pos.set(e,Math.max(h.height(e,t),0)+n,t),L.vel.set(0,0,0),L.yaw=Math.atan2(-(r.x-e),-(r.z-t)),L.pitch=-.22};dt?yt():r.pos?(r.mode&&r.mode!==L.mode&&L.setMode(r.mode),L.mode===`fly`?L.pos.set(...r.pos):L.teleport(r.pos[0],r.pos[2]),L.yaw=r.yaw??0,L.pitch=r.pitch??-.1):bt();let xt=!1,St=()=>{xt&&zv({found:[...nt],cats:[...rt],pos:[L.pos.x,L.pos.y,L.pos.z],yaw:L.yaw,pitch:L.pitch,mode:L.mode,goals:[...at],stats:ot})};setInterval(St,5e3),addEventListener(`beforeunload`,St);let Ct=new w_(A,new Ut(1,1,{type:g,samples:4}));Ct.addPass(new T_(j,M));let wt=new D_(new R(innerWidth/2,innerHeight/2),.3,.55,.92);Ct.addPass(wt),Ct.addPass(new k_),Ct.setPixelRatio(A.getPixelRatio()),Ct.setSize(innerWidth,innerHeight);let Tt=new G_,Et=()=>{let e=Math.max(.5,Math.round(R_(c,devicePixelRatio)*Tt.scale*20)/20);e!==A.getPixelRatio()&&(A.setPixelRatio(e),Ct.setPixelRatio(e))},Dt=e=>{c=e,A.shadowMap.enabled=e>=.8,N.setShadowQuality(e>=1),N.cloudShadows=e>=.8,Tt.reset(),Et(),le.nearRadius=1100*e,P.reflections=e>=1,oe.setQuality(e),ee.setQuality(e),j.traverse(e=>{let t=e.material;t&&(t.needsUpdate=!0)})},Ot=()=>{L.sensitivity=i.sensitivity,L.invertY=i.invertY,M.fov=i.fov,M.updateProjectionMatrix(),et.setVolume(i.volume);let e=Z_(i.quality,a,s);e!==c&&Dt(e),Pv(`hint`).classList.toggle(`hidden`,!i.hints)};P_(i,()=>{X_(Nv.id,i),Ot()}),Ot();let kt=`title`,At=[`pause`,`settings`,`help`,`credits`,`share`,`map-screen`,`journal-screen`],jt=()=>At.find(e=>!Pv(e).classList.contains(`hidden`))??null,B=!0,Mt=()=>{B=kt!==`play`||jt()!==null},Nt=e=>{for(let t of At)Pv(t).classList.toggle(`hidden`,t!==e);Mt(),e&&I.unlock()},Pt=()=>{i.mouseLock&&I.lock()},Ft=()=>{kt===`title`?Nt(null):(Nt(null),Pt())},It=()=>{Nt(`map-screen`),$e.drawBigMap(L.pos.x,L.pos.z,T,nt,Re,rt),$e.mapStats(nt.size,T.length);let[e,t]=$e.toMap(L.pos.x,L.pos.z);qt.focus(e,t)},Lt=()=>{let e=st();$e.journal(T,nt,Re,rt,{goals:it.map(t=>{let[n,r]=t.progress(e);return{name:t.name,desc:t.desc,done:at.has(t.id)||iv(t,e),n,total:r}}),completion:ct()}),Nt(`journal-screen`)},Rt=()=>{kt=`play`,xt=!0,Pv(`title`).classList.add(`hidden`),Pv(`hud`).classList.remove(`hidden`),et.start(),Nt(null),Pt(),a&&document.getElementById(`touch`).classList.remove(`hidden`),$e.toast(Iv.welcome.title,Iv.welcome.body,a?`左のスティックで移動、画面をなぞって向きを変えます。▲ ▼ で上昇・下降、「徒歩」を押すと地上に降りて歩けます。`:`WASD で水平に移動、Space / C で上昇・下降、マウスのドラッグや矢印キーで向きを変えます。1 キーで地上に降りて歩けます。`),dt=null;let{month:e,day:t}=Gm(pt,ht);if(!we.festivalAt(pt,ht,mt))for(let n of we.festivalsOn(pt,e,t)){let e=e=>`${Math.floor(e)}:${String(Math.round(e%1*60)).padStart(2,`0`)}`;mt<n.end&&setTimeout(()=>$e.toast(`今日の祭り`,n.name,`${e(n.start)}〜${e(n.end)}。${n.desc}`),5500)}},zt=()=>{St(),kt=`title`,Nt(null),I.unlock(),Pv(`hud`).classList.add(`hidden`),Pv(`title`).classList.remove(`hidden`),Pv(`btn-continue`).classList.toggle(`hidden`,!Rv()),Vt()},Vt=()=>{let e=Pv(`title-progress`);e.classList.toggle(`hidden`,!xt&&!n),e.textContent=`旅の達成度 ${Math.floor(ct()*100)}%　—　名所 ${nt.size}/${T.length}・猫 ${rt.size}/${Re.length}・お題 ${at.size}/${it.length}`};Vt(),Pv(`btn-continue`).classList.toggle(`hidden`,!n),Pv(`btn-start`).textContent=n?`はじめから`:`はじめる`,Pv(`btn-continue`).addEventListener(`click`,Rt),Pv(`btn-start`).addEventListener(`click`,async()=>{(!Rv()||await F_(Iv.restart,`はじめから`))&&(nt.clear(),rt.clear(),at.clear(),ot=tv(null),bt(),Rt())}),Pv(`btn-resume`).addEventListener(`click`,Ft),Pv(`btn-title`).addEventListener(`click`,zt),Pv(`btn-pause`).addEventListener(`click`,()=>Nt(`pause`));let Ht=Pv(`btn-fullscreen`);document.documentElement.requestFullscreen||Ht.classList.add(`hidden`),Ht.addEventListener(`click`,()=>{document.fullscreenElement?document.exitFullscreen():document.documentElement.requestFullscreen().catch(()=>{}),Ft()}),document.addEventListener(`fullscreenchange`,()=>{Ht.textContent=document.fullscreenElement?`全画面をやめる`:`全画面にする`}),Pv(`btn-clear`).addEventListener(`click`,async()=>{await F_(`このブラウザに保存した設定と進行状況をすべて消去しますか？`,`消去する`)&&($_(Nv.id,[Lv]),nt.clear(),rt.clear(),xt=!1,location.reload())});let Wt=!1;{let e=Pv(`share-form`),t=t=>e.elements.namedItem(t),n=e=>String(e).padStart(2,`0`),r=()=>{let[e,n,r]=t(`date`).value.split(`-`).map(Number),[i,a]=t(`time`).value.split(`:`).map(Number);if(!e||!t(`time`).value||Number.isNaN(i))return;let o=Math.round((Date.UTC(e,n-1,r)-Date.UTC(e,0,1))/864e5)+1,s=t(`here`).checked;t(`url`).value=ih(location.href,{year:e,dayOfYear:o,hours:i+(a||0)/60,...s?{pos:[L.pos.x,L.pos.z],yaw:L.yaw,mode:L.mode,...L.mode===`fly`?{altitude:L.pos.y-Math.max(h.height(L.pos.x,L.pos.z),0),pitch:L.pitch}:{}}:{}})},i=(e,i,a,o)=>{t(`date`).value=`${e}-${n(i)}-${n(a)}`;let s=Math.round(o*60);t(`time`).value=`${n(Math.floor(s/60)%24)}:${n(s%60)}`,r()};Pv(`place-date`).addEventListener(`click`,()=>{Wt=!0,Pv(`btn-share`).click()}),Pv(`btn-share`).addEventListener(`click`,e=>{e.isTrusted&&(Wt=!1);let{month:t,day:n}=Gm(pt,ht);i(pt,t,n,mt);let r=Pv(`share-festivals`);r.textContent=``;for(let e of we.nextFestivalDates(pt,t,n)){let t=document.createElement(`button`);t.type=`button`,t.textContent=`${e.festival.name}（${e.month}/${e.day}）`,t.addEventListener(`click`,()=>i(e.year,e.month,e.day,e.hours)),r.appendChild(t)}Nt(`share`)}),e.addEventListener(`input`,r),e.addEventListener(`change`,r),Pv(`btn-share-apply`).addEventListener(`click`,()=>{let[e,n,r]=t(`date`).value.split(`-`).map(Number),[i,a]=t(`time`).value.split(`:`).map(Number);e&&n&&r&&t(`time`).value&&!Number.isNaN(i)&&(pt=e,ht=Math.round((Date.UTC(e,n-1,r)-Date.UTC(e,0,1))/864e5)+1,mt=i+(a||0)/60,gt(),Ft(),$e.toast(`日時`,`${e}年${n}月${r}日 ${i}:${String(a||0).padStart(2,`0`)}`))}),e.addEventListener(`submit`,e=>e.preventDefault()),Pv(`btn-share-copy`).addEventListener(`click`,async()=>{try{await navigator.clipboard.writeText(t(`url`).value),$e.toast(`共有`,`リンクをコピーしました`)}catch{let e=t(`url`);e.focus(),e.setSelectionRange(0,e.value.length),$e.toast(`共有`,document.execCommand?.(`copy`)?`リンクをコピーしました`:`リンクを選択しました。コピーしてください`)}});let a=Pv(`btn-share-native`);`share`in navigator&&a.classList.remove(`hidden`),a.addEventListener(`click`,()=>{navigator.share?.({title:Iv.wordmark,url:t(`url`).value}).catch(()=>{})})}for(let e of Array.from(document.querySelectorAll(`[data-open]`)))e.addEventListener(`click`,()=>Nt(e.dataset.open));for(let e of Array.from(document.querySelectorAll(`[data-action]`)))e.addEventListener(`click`,()=>e.dataset.action===`map`?It():Lt());for(let e of Array.from(document.querySelectorAll(`[data-close]`)))e.addEventListener(`click`,()=>kt===`play`&&e.closest(`#settings, #help, #share`)&&!(e.closest(`#share`)&&Wt)?Nt(`pause`):Ft());let Gt=-1/0;I.onLockChange=e=>{e||(Gt=performance.now(),kt===`play`&&!jt()&&!a&&Nt(`pause`))},addEventListener(`keydown`,e=>{if(e.code!==`Escape`||performance.now()-Gt<400)return;let t=jt();!t&&kt===`play`?Nt(`pause`):t===`pause`?Ft():t&&(kt===`play`&&(t===`settings`||t===`help`||t===`share`&&!Wt)?Nt(`pause`):Ft())}),e.addEventListener(`click`,()=>{kt===`play`&&!B&&!I.locked&&I.dragDistance<6&&Pt()});let qt=I_(e=>{let[t,n]=$e.bigMapPoint(e);if(L.mode===`fly`){L.teleport(t,n),Ft();return}let r=null,i=150;for(let e of T){let a=Math.hypot(e.x-t,e.z-n);nt.has(e.id)&&a<i&&(i=a,r=e)}r&&(L.mode===`boat`&&L.setMode(`walk`),L.teleport(r.x,r.z),$e.toast(`ワープ`,r.name),Ft())}),Jt=Array.from(document.querySelectorAll(`#modebar button`)),Yt=e=>{if(L.mode===e)return;let t=L.setMode(e);$e.toast(`移動手段`,t??pm[e])};for(let e of Jt)e.addEventListener(`click`,()=>Yt(e.dataset.mode));let Xt=``,Zt=0,Qt=()=>{for(let e of Jt)e.classList.toggle(`active`,e.dataset.mode===L.mode);let e=`${L.mode}|${L.thirdPerson}`;e!==Xt&&(Xt=e,Pv(`hint`).innerHTML=L_(L.mode,L.thirdPerson),Pv(`hint`).classList.remove(`quiet`),Zt=8)},$t=Array.from(document.querySelectorAll(`#guide kbd[data-k]`)),en=new Map,tn=``,nn=0,rn=e=>{let t=!1;for(let e of $t){let n=e.dataset.k,r=I.keys.has(n)||n===`ShiftLeft`&&I.keys.has(`ShiftRight`);t||=r,en.get(e)!==r&&(en.set(e,r),e.classList.toggle(`on`,r))}if(tn!==L.mode){tn=L.mode;let e=L.mode===`fly`;Pv(`guide`).classList.toggle(`no-vertical`,!e),Pv(`g-vertical`).classList.toggle(`hidden`,L.mode===`bike`||L.mode===`boat`),Pv(`g-up`).textContent=e?`上昇`:`ジャンプ`,Pv(`g-vertical-title`).textContent=e?`上下`:`ジャンプ`,document.getElementById(`touch`).classList.toggle(`fly`,e),nn=0}nn=t?0:nn+e,Pv(`guide`).classList.toggle(`quiet`,nn>12),Pv(`g-mouse`).textContent=I.locked?`マウスを動かすと向きが変わる`:`マウスをドラッグでも`,$e.drawCompass(L.yaw,L.mode===`fly`?L.pos.y-Math.max(h.height(L.pos.x,L.pos.z),0):null)};addEventListener(`resize`,()=>{Ct.setSize(innerWidth,innerHeight),M.aspect=innerWidth/innerHeight,M.updateProjectionMatrix(),A.setSize(innerWidth,innerHeight)}),Bv.set(`world`,1,`準備ができました`),Bv.done(),Pv(`title`).classList.remove(`hidden`);let an=new Eu,on=new V,sn=0,cn=0,ln=!1,un=ve.chimes??[],dn=un.map(()=>!1),fn=ve.interactables??[],pn=Me.group.children.map(e=>e.position.clone()),mn=Me.group.children.map(()=>!1),hn=Nv.flyover(E),gn=new V(hn.x,hn.y,hn.z),_n=[He.group,Be.group,L.avatar,vt.group,ge,...Re.map(e=>e.obj),...F.map(e=>e.g),...oe.minorParts],vn=(e,t)=>P.heightAt(e,t,z);L.surface=vn;let yn=Nv.current(E),bn=yn?new R(...yn).normalize():new R,xn=-1,Sn={x:0,z:0,dx:0,dz:1,speed:0,beam:2},Cn=()=>{requestAnimationFrame(Cn);let e=an.getDelta(),t=Math.min(e,.1);if(Tt.sample(e*1e3)&&Et(),kt===`play`&&(I.hit(`KeyM`)&&(Pv(`map-screen`).classList.contains(`hidden`)?It():Ft()),I.hit(`KeyJ`)&&(Pv(`journal-screen`).classList.contains(`hidden`)?Lt():Ft())),B)kt===`title`&&(z+=t);else{z+=t,mt+=t/60,mt>=24&&_t();for(let[e,t]of[[`Digit1`,`walk`],[`Digit2`,`bike`],[`Digit3`,`boat`],[`Digit4`,`fly`]])I.hit(e)&&Yt(t);I.hit(`KeyV`)&&(L.thirdPerson=!L.thirdPerson),I.hit(`KeyT`)&&(mt+=1,mt>=24&&_t(),$e.toast(`時間`,`${Math.floor(mt)}時になりました`)),I.hit(`KeyQ`)&&(i.quality=c>=1?`light`:c>=.8?`high`:`medium`,X_(Nv.id,i),Ot(),$e.toast(`画質`,Q_[c])),I.hit(`KeyN`)&&et.setMuted(!et.muted);let e={x:L.pos.x,z:L.pos.z};L.update(t);let n=Math.hypot(L.pos.x-e.x,L.pos.z-e.z);n<60&&(ot.distance+=n),L.mode===`fly`&&(ot.maxAlt=Math.max(ot.maxAlt,L.pos.y-Math.max(h.height(L.pos.x,L.pos.z),0)));let r=L.riding;r&&je&&je.platforms.includes(r)&&(ot.flags.ropeway=!0),r&&Me.platforms.includes(r)&&(ot.flags.ferry=!0),Qt(),rn(t),Zt-=t,Zt<0&&Pv(`hint`).classList.add(`quiet`)}let n=uf(ht,mt,Nv.tide);L.waterLevel=n,xn!==ht&&(xn=ht,P.setWind(Md[0],Md[1],2.5+6*dd(ht*1.7,pt)));let r=(uf(ht,mt+1/60,Nv.tide)-n)*60;P.setCurrent(bn.x*r*1.75,bn.y*r*1.75),je?.update(z),Me.update(z,n,vn),Ne?.update(mt*3600,Ym(pt,ht)),Pe?.update(z,n,vn);let o=kt===`title`?M.position:L.pos;vt.update(t,z,o.x,o.z,N.night),mg(Re,z);let s=kt===`title`?M.position:L.pos;if(kt===`title`){let e=z*.035;M.position.set(gn.x+Math.sin(e)*700,230+Math.sin(e*.7)*30,gn.z+Math.cos(e)*700),M.lookAt(gn)}else if(L.thirdPerson){let e=L.cameraDistance,t=Math.cos(L.pitch),n=Math.sin(L.pitch);on.set(s.x+Math.sin(L.yaw)*t*e,s.y+1.6-n*e,s.z+Math.cos(L.yaw)*t*e),on.y=Math.max(on.y,h.height(on.x,on.z)+.6,.6),M.position.copy(on),M.lookAt(s.x,s.y+1.5,s.z),L.avatar.visible=!0}else M.position.set(s.x,s.y+L.eyeHeight+(L.swimming?-.9:0),s.z),M.rotation.set(L.pitch,L.yaw,0,`YXZ`),L.avatar.visible=!1;N.update(mt,s,A,ht,j,pt),A.toneMappingExposure*=1+(i.nightBrightness-1)*N.night,$e.setNight(N.night),N.setShadowRange(s.y-Math.max(h.height(s.x,s.z),0)),j.background.copy(N.fog.color),N.skyColors(P.uniforms),P.update(z,M.position.x,M.position.z,n);{let e=Math.sign(L.speed||1);Sn.x=s.x,Sn.z=s.z,Sn.dx=-Math.sin(L.yaw)*e,Sn.dz=-Math.cos(L.yaw)*e,Sn.speed=L.mode===`boat`&&!B?Math.abs(L.speed):0,P.setVessels([...Ie,Sn],M.position.x,M.position.z)}ee.update(M.position.x,M.position.y,M.position.z);{let e=(pt*400+ht)*1440+Math.floor(mt*60);if(e!==Ee){Ee=e,De=we.festivalAt(pt,ht,mt);let{month:t,day:n}=Gm(pt,ht);Oe.month=t,Oe.day=n}let n=kt===`play`?De:null;(n?.id??null)!==Te&&(Te=n?.id??null,n&&$e.toast(`祭り`,n.name,n.desc)),Se.update(B?0:t,n?.effects??null,M.position,et),Oe.hours=mt,Oe.night=N.night,Oe.water=L.waterLevel,Ce.update(B?0:t,Oe,M.position),n?.effects.bells&&!B&&(ke-=t)<=0&&(et.bell(),ke=40)}if(oe.uTime.value=z,Be.update(B?0:t,s.x,s.z,N.night),He.update(B?0:t,s.x,s.z),se.uNight.value=N.night,Ke.opacity=Math.min(1,N.night*1.3),qe.visible=N.night>.05,Xe.opacity=Ke.opacity,Ze.visible=qe.visible,Ze.visible){let e=0;for(let t of Le)Je[e++]=t.position.x,Je[e++]=t.position.y+6,Je[e++]=t.position.z;Ye.attributes.position.needsUpdate=!0}if(Qe.intensity=N.night*35,Qe.position.set(s.x,s.y+9,s.z),cn-=t,cn<=0){le.update(s.x,s.z),oe.update(s.x,s.z);for(let e of F)e.g.visible=Math.hypot(e.cx-s.x,e.cz-s.z)<650*c+350;cn=.25,xe.group.visible=kt===`play`,xe.group.visible&&xe.update(M.position,nt)}if(sn-=t,sn<=0&&!B){sn=.2;let e=s.y-Math.max(h.height(s.x,s.z),0)<(L.mode===`fly`?45:25);for(let t of T)!nt.has(t.id)&&e&&Math.hypot(t.x-s.x,t.z-s.z)<(t.radius??30)&&(nt.add(t.id),$e.toast(`名所を発見`,t.name,t.desc),et.chime(),navigator.vibrate?.(30),St());let t=null;for(let e of Re)Math.hypot(e.x-s.x,e.z-s.z)<3&&Math.abs(e.obj.position.y-s.y)<3&&(rt.has(e.id)?t=`${e.name}をなでる`:(rt.add(e.id),$e.toast(`猫に出会った`,`${e.name}`,`${e.where}にいた猫。（${rt.size}/${Re.length}）`),et.meow(),St()));L.mode!==`walk`&&(t=null);let n=tt(s.x,s.z);n&&(t=n.prompt),$e.prompt(t);let r=lf(ht),i={hours:mt,night:N.night,mode:L.mode,x:s.x,z:s.z,lm:E};for(let e of Nv.flagRules)!ot.flags[e.flag]&&e.when(i)&&(ot.flags[e.flag]=!0);let o=av(at,st(),it);if(o.length){if(o.length>2)$e.toast(`お題達成`,`${o.length} 個のお題を達成`,o.map(e=>e.name).join(`・`));else for(let e of o)$e.toast(`お題達成`,e.name,`${e.desc}（${at.size}/${it.length}）`);et.chime(),St()}let c=$e.place(s.x,s.z,T);$e.setPlace(c.name,c.sub),$e.setDate(th(pt,ht,mt,De?.name));let l=Math.floor(mt),u=Math.floor(mt%1*60);$e.status({mode:pm[L.mode],elev:s.y,x:s.x,z:s.z,time:`${l}:${String(u).padStart(2,`0`)}`,speed:L.speed,found:nt.size,total:T.length,cats:rt.size,catsTotal:Re.length,loading:le.remaining},a),$e.drawMinimap(s.x,s.z,L.yaw,T,nt);let d=0;for(let e=0;e<8;e++)h.height(s.x+Math.cos(e)*40,s.z+Math.sin(e)*40)<0&&d++;let f=s.y-h.height(s.x,s.z);et.ambience(d/8*Math.max(0,1-f/80),Math.min(1,Math.max(f/120,L.speed/40,s.y/300)));let p=Math.round((s.x-Hu)/Q.vegCell),m=Math.round((s.z-Uu)/Q.vegCell),g=0;for(let e=-2;e<=2;e++)for(let t=-2;t<=2;t++)g+=ae.at(p+t,m+e);g/=6375,et.cicadas(r.summer*(1-N.night)*Math.min(1,g*1.6)*Math.max(0,1-f/60)),d>0&&f<80&&N.night<.5&&Math.random()<.012&&et.gull(Math.random()),un.forEach((e,t)=>{let n=Math.floor(mt);e.hours.includes(n)?dn[t]||Math.hypot(e.x-s.x,e.z-s.z)>e.range||(dn[t]=!0,e.act(lt,n)):dn[t]=!1}),Me.group.children.forEach((e,t)=>{let n=e.position.distanceTo(pn[t])>.03;n&&!mn[t]&&e.position.distanceTo(s)<220&&et.ferryHorn(),mn[t]=n,pn[t].copy(e.position)});let _=Ne?Ne.nearest(M.position.x,M.position.z)<200:!1;_&&!ln&&et.horn(),ln=_}if(!B&&I.hit(`KeyE`)){let e=tt(s.x,s.z),t=L.mode===`walk`?Re.filter(e=>Math.hypot(e.x-s.x,e.z-s.z)<3):[];e?e.act(lt):t.length&&(et.meow(),ot.pets+=t.length)}M.updateMatrixWorld(),P.renderReflection(A,j,M,_n),c>=1?(wt.strength=.25+N.night*.7,Ct.render(t)):A.render(j,M),I.endFrame()};Cn(),window.game={region:Nv,player:L,camera:M,scene:j,renderer:A,city:le,hm:h,landmarks:T,ropeway:je,ferries:Me,train:Ne,collision:ue,forest:oe,traffic:Be,water:P,people:He,atmo:N,hours:()=>mt,setHours:e=>mt=e,setDay:e=>{ht=e,gt()},tide:()=>uf(ht,mt,Nv.tide),furniture:ce.furniture,stats:()=>ot,goals:at}}Uv().catch(e=>{console.error(e),Bv.fail(`読み込みに失敗しました: ${e instanceof Error?e.message:e}`)});