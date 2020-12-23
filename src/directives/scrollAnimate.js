let scrollObserves = new IntersectionObserver((entries, observer)=>{
  entries.forEach((entry)=>{
    if(entry.isIntersecting){
      entry.target.classList.add('animate__fadeIn');
      observer.unobserve(entry.target);
    }
  })
});
export default {
  bind(el){
    el.classList.add('animate__animated');
    scrollObserves.observe(el);
  }
}