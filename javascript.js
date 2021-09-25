
window.onscroll = function() {myFunction()};
            
var header = document.getElementById("topNav");
var sticky = header.offsetTop;
            
function myFunction() {
    if (window.pageYOffset > sticky) {
        header.classList.add("sticky");
    } else {
        header.classList.remove("sticky");
    }
}

function colorModeSwitch () {
    const mode = localStorage['colorMode']
    document.body.classList.toggle('darkMode', mode)
  }

const checkbox         = document.querySelector('#chk')
      checkbox.checked = localStorage['colorMode']

checkbox.addEventListener('change', () => {
    localStorage['colorMode'] = checkbox.checked || ""
    colorModeSwitch()
  })

colorModeSwitch()



let ratingsText = "This project is a simple calculator that takes multiple rating inputs by the user, and displays the mean value."

let btn = document.querySelector(".effect01");

btn.addEventListener("mouseover", function() {
  this.textContent = ratingsText;
})
btn.addEventListener("mouseout", function() {
    this.textContent = "Average Ratings Calculator";
  })


