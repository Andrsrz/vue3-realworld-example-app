import{y as e,e as o}from"./index.6c8e5414.js";function n({username:n,following:l}){const{active:t,run:r}=e((async function(){let e=null;return e=!0===l.value?await async function(e){return o.delete(`/profiles/${e}/follow`).then(e=>e.profile)}(n.value):await async function(e){return o.post(`/profiles/${e}/follow`).then(e=>e.profile)}(n.value),e}));return{followProcessGoing:t,toggleFollow:r}}export{n as u};
