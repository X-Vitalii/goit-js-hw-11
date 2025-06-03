import{a as l,S as u,i as n}from"./assets/vendor-Ca8cN8cH.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&a(i)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function a(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}})();const f="50595955-e0b6c1995a30b33308caba1cc";l.defaults.baseURL="https://pixabay.com/api/";function p(r){return l("",{params:{key:f,q:r,image_type:"photo",orientation:"horizontal",safesearch:!0}}).then(({data:s})=>s)}const h=new u(".gallery-link",{captions:!0,captionsData:"alt",captionDelay:250,captionPosition:"bottom"}),g=document.querySelector(".gallery");function y(r){const o=r.map(({webformatURL:s,largeImageURL:a,tags:e,likes:t,views:i,comments:m,downloads:d})=>`
      <li class="gallery-item">
    <a class="gallery-link" href="${a}">
      <img
        class="gallery-image"
        src="${s}"
        alt="${e}"
      />
    </a>
    <div class="statisticInfo">
      <div class="itemInfo">
        <h3 class="itemInfoName">Likes</h3>
        <p>${t}</p>
      </div>
      <div class="itemInfo">
        <h3 class="itemInfoName">Views</h3>
        <p>${i}</p>
      </div>
      <div class="itemInfo">
        <h3 class="itemInfoName">Comments</h3>
        <p>${m}</p>
      </div>
      <div class="itemInfo">
        <h3 class="itemInfoName">Downloads</h3>
        <p>${d}</p>  
       </div>
    </div>
  </li>`).join("");g.insertAdjacentHTML("beforeend",o),h.refresh()}function L(){const r=document.getElementById("loader");r&&r.classList.remove("hidden")}function v(){const r=document.getElementById("loader");r&&r.classList.add("hidden")}const c=document.querySelector(".form"),b=document.querySelector(".gallery");c.addEventListener("submit",I);function I(r){r.preventDefault();const o=c.elements["search-text"].value.trim();if(console.log(o),console.dir(o),o===""){n.warning({message:"Please enter a search term.",position:"topRight"});return}b.innerHTML="",L(),p(o).then(({hits:s})=>{if(s.length===0){n.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}y(s)}).catch(s=>{console.error("Search failed:",s),n.error({message:"Something went wrong. Please try again later.",position:"topRight"})}).finally(()=>{v(),c.reset()})}
//# sourceMappingURL=index.js.map
