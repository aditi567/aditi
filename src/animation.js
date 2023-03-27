
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    console.log(entry);
    if(entry.isIntersecting){
      entry.target.classList.add('show');
    } else{
      entry.target.classList.remove('show');
    }
  });
  });
  const hiddenElements = document.querySelectorAll('.hidden');
  hiddenElements.forEach((el) => observer.observe(el));
 
const observer1 = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    console.log(entry);
    if(entry.isIntersecting){
      entry.target.classList.add('prof-aft-animi');
    } else{
      entry.target.classList.remove('prof-aft-animi');
    }
  });
  });
  const fadeInElements = document.querySelectorAll('.prof-animi');
  fadeInElements.forEach((el) => observer1.observe(el));
