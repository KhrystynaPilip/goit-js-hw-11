import{S as u,i as n}from"./assets/vendor-5ObWk2rO.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&o(i)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function o(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}})();function m({hits:a}){if(a.length===0){onSearchError();return}return a.map(({webformatURL:r,largeImageURL:s,tags:o,likes:e,views:t,comments:i,downloads:p})=>`
          <li class="gallery-item">
          <a class="gallery-link" href="${s}">
         <img
          class="gallery-image"
          src="${r}"
          alt="${o}"
        />
      </a>
      <ul class="galery-attribute-list">
        <li class="attribute-item">
              <p class="attribute">Likes</p>
              <p class="attribute-value">${e}</p>
            </li>
            <li class="attribute-item">
              <p class="attribute">Views</p>
              <p class="attribute-value">${t}</p>
            </li>
            <li class="attribute-item">
              <p class="attribute">Comments</p>
              <p class="attribute-value">${i}</p>
            </li>
            <li class="attribute-item">
              <p class="attribute">Downloads</p>
              <p class="attribute-value">${p}</p>
            </li>
            </ul>
    </li>`).join("")}function y(a){const r="https://pixabay.com/api/",s="48329530-69c109c2641b284f345f462d9",o=new URLSearchParams({key:s,q:a,image_type:"photo",orientation:"horizontal",safesearch:"true"});return fetch(`${r}?${o}`).then(e=>{if(!e.ok)throw new Error(e.status);return e.json()})}new u(".gallery .gallery-link",{captionsData:"alt",captionDelay:250});n.settings({class:"izi-toast",position:"topRight",backgroundColor:"rgba(239, 64, 64, 1)",progressBarColor:"rgba(181, 27, 27, 1)",theme:"dark"});const c=document.querySelector(".gallery"),f=document.querySelector(".js-search-form"),l=document.querySelector(".loader");l.style.display="none";f.addEventListener("submit",g);function g(a){a.preventDefault();const r=a.currentTarget,s=r.elements.query.value.trim().toLowerCase();if(s===""){c.innerHTML="",n.error({message:"Please enter a search query."});return}l.style.display="block",y(s).then(o=>{const e=m(o);c.innerHTML=e,h.refresh()}).catch(d).finally(()=>{l.style.display="none",r.reset()})}function d(a){n.error({message:"Sorry, there are no images matching your search query. Please try again!"}),c.innerHTML="",l.style.display="none"}let h=new u(".gallery .gallery-link",{captionsData:"alt",captionDelay:250});n.settings({class:"izi-toast",position:"topRight",backgroundColor:"rgba(239, 64, 64, 1)",progressBarColor:"rgba(181, 27, 27, 1)",theme:"dark"});
//# sourceMappingURL=index.js.map
