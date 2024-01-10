'use strict';

var react = require('react');

var s=(i,e,t,r)=>{let c=react.useMemo(()=>{let n=[];return Array.isArray(e)&&(n=[...n,...e]),Array.isArray(t)&&(n=[...n,...t]),Array.isArray(r)&&(n=[...n,...r]),n},[r,e,t]);return react.useEffect(()=>((async()=>{try{await i();}catch(n){typeof t=="function"&&t(n);}})(),()=>{typeof e=="function"&&e();}),c)},u=(i,e,t)=>{let r=react.useMemo(()=>{let o=[];return Array.isArray(e)&&(o=[...o,...e]),Array.isArray(t)&&(o=[...o,...t]),o},[e,t]);return react.useMemo(()=>async(...o)=>{try{return await i(...o)}catch(n){typeof e=="function"&&e(n);}},r)};

exports.a = s;
exports.b = u;
