 const tabsBox = document.querySelector('.tabs-box'),
 allTabs = document.querySelectorAll('.tab'),
 arrowIcons = document.querySelectorAll('.icon i')

 let isDragging = false;

 const handleIcons = ()=> {
   let scrollVal = Math.round(tabsBox.scrollLeft);
   let maxScrollableWidth = tabsBox.scrollWidth - tabsBox.clientWidth;
   arrowIcons[0].parentElement.style.display = scrollVal > 0 ? "flex" : "none";
   arrowIcons[1].parentElement.style.display = scrollVal < maxScrollableWidth ? "flex" : "none"

 }

 arrowIcons.forEach(icon => {
   icon.addEventListener('click' , ()=> {
      tabsBox.scrollLeft += icon.id === "left" ? -350 : 350 ;
      setTimeout(()=> handleIcons() , 50);
      
   })
 })

 allTabs.forEach(tab => {
   tab.addEventListener('click' , ()=> {
      tabsBox.querySelector('.active').classList.remove('active');
      tab.classList.add('active');
   })
 })

 const dragging = (e)=> {
   tabsBox.classList.add("dragging")
   if(!isDragging) return;
   tabsBox.scrollLeft -= e.movementX;
   handleIcons()
 }
 let dragStop = ()=>{
   tabsBox.classList.remove("dragging")
   isDragging = false;
 }


 tabsBox.addEventListener("mousedown" , ()=> isDragging = true);
 tabsBox.addEventListener("mousemove" , dragging);
 document.addEventListener("mouseup" , dragStop);