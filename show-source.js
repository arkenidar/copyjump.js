(function show_source_code(){
var url=document.currentScript.dataset.href; if(!url) url=""
var text=`<pre contenteditable="true" class="show_source"
  style=" overflow-y: scroll; border:1px solid black; padding: 1em; "></pre>`
document.currentScript.insertAdjacentHTML("afterend", text)
var code=document.currentScript.nextSibling
fetch(url).then(res=>res.text()).then(res=>code.textContent=res)
})()