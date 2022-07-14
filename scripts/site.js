console.log("Javascript Loaded");

// get all the FAQ's into a NodeList.
const faqNodes = document.querySelectorAll(".faq-question");

// handle the FAQ click
const handleClick = (e) => {
  const parent = e.target.parentNode;
  faqNodes.forEach((element) => {
    element.parentNode.classList.remove("active");
  });
  parent.classList.add("active");
};
// add click handlers to all FAQ elements
faqNodes.forEach((element) => {
  element.addEventListener("click", handleClick);
});
