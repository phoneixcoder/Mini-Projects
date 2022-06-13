// alert("hellw");
var navBar = document.querySelectorAll('.nav-bar a');

// console.log(navBar);

for(let i = 0; i < navBar.length; i++){
    navBar[i].addEventListener('click' , function(event){
        event.preventDefault();
        var targetSectionID = this.textContent.trim().toLowerCase();
        // console.log(targetSectionID);
        
        var targetSection = document.getElementById('targetSectionID'); 
        // console.log(targetSection);

        var interval = setInterval(() => {
            var targetSectionCoordinates = targetSection.getBoundingClientRect();
            if (targetSectionCoordinates.top <= 0) {
                clearInterval(interval);
                return;
            }
            window.scrollBy(0 , 50)
        }, 50);
      });

}
