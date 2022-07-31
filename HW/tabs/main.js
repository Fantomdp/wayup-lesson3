const tabs = document.getElementById('tabs');
const content = document.querySelectorAll('.content')

// console.log(tabs.children);

const changeClass = el => {
   console.log(el)
   for(let i = 0; i<tabs.children.length; i++) {
      tabs.children[i].classList.remove('active');
      console.log(tabs.children[i]);
   }
   el.classList.add('active');
}

console.log(content)

tabs.addEventListener('click', e => {
   const currTab = e.target.dataset.btn;
   changeClass(e.target);
   for (let i=0; i<content.length;i++){
      content[i].classList.remove('active');
      console.log(content[i].dataset.content)
      if (content[i].dataset.content === currTab) {
         content[i].classList.add('active');
      }
   }
})