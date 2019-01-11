const observer = new IntersectionObserver(entries => {
   entries.forEach(item => {
    //踩坑了 元素在被observe的时候也会触发一次
    if(item.intersectionRatio > 0 && item.intersectionRatio) {
      console.log(item)
      const target = item.target
      const timer = setTimeout(()=>{
        if(target.getAttribute('src') === './assets/loading.gif'){
          target.src = target.getAttribute('data-url')
          observer.unobserve(target)
         }
         clearTimeout(timer)
      }, 500)
    }
   })
})

function query(selector) {
  return Array.from(document.querySelectorAll(selector))
}

query('.image').forEach(item => {
  observer.observe(item)
 })
