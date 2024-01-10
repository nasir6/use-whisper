import { useMemo, useEffect } from 'react';

var s=(i,e,t,r)=>{let c=useMemo(()=>{let n=[];return Array.isArray(e)&&(n=[...n,...e]),Array.isArray(t)&&(n=[...n,...t]),Array.isArray(r)&&(n=[...n,...r]),n},[r,e,t]);return useEffect(()=>((async()=>{try{await i();}catch(n){typeof t=="function"&&t(n);}})(),()=>{typeof e=="function"&&e();}),c)},u=(i,e,t)=>{let r=useMemo(()=>{let o=[];return Array.isArray(e)&&(o=[...o,...e]),Array.isArray(t)&&(o=[...o,...t]),o},[e,t]);return useMemo(()=>async(...o)=>{try{return await i(...o)}catch(n){typeof e=="function"&&e(n);}},r)};

export { s as a, u as b };
