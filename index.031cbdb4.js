var e=document.querySelector(".tree"),t=new Map;e.addEventListener("click",function(n){n.preventDefault();var r=n.target,a=r.innerHTML.replaceAll(" ","").split("\n")[0];if(n.target!==e&&"UL"!==n.target.tagName){if(t.get(a)){r.innerHTML=t.get(a),t.delete(a);return}var l=r.innerHTML.replaceAll(" ",""),i=l.split("\n")[0];t.set(i,l||""),r.innerHTML=l.split("\n")[0]}});//# sourceMappingURL=index.031cbdb4.js.map

//# sourceMappingURL=index.031cbdb4.js.map
