$(document).ready(function(){
    //Burger Menu
    $(".burger").click(function(){
        $("nav").slideToggle("fast");
    })

    //Nav
    var url = window.location.href;
    var fileName = url.split("/").pop();
    console.info(fileName);

    var allLinks = document.querySelectorAll("nav ul li")
    for(var i = 0; i < allLinks.length; i++){
        if(allLinks[i].querySelector("a").getAttribute("href") == fileName){
            allLinks[i].setAttribute("class", "currentPage")
            break;
        }
    };

    var showCurrentTime = function(){
        var clock = document.getElementById('clock');

        var currentTime = new Date();

        var hours = currentTime.getHours();
        var minutes = currentTime.getMinutes();
        var seconds = currentTime.getSeconds();
        var meridiem = "AM";

        if(hours >= 12){
            meridiem = "PM";
        }

        if(hours > 12){
            hours -= 12;
        }

        if(seconds < 10){
            seconds = "0" + seconds;
        }

        var clockValue = hours + ':' + minutes + ':' + seconds + ' ' + meridiem;

        clock.innerText = clockValue;
    }

    showCurrentTime();
    setInterval(showCurrentTime, 1000);

    //LightSlider
    $("#lightSlider").lightSlider({
        item: 1,
        sliderMargin: 10,
        loop: true,
        auto: true,
        pause: 4000,
        pauseOnHover: true,
        controls: false,
        pager: true
    })
})

//Table filter
function tableSearch() {
    var input, filter, table, tr, td, i, txtValue;
    input = document.getElementById("input");
    filter = input.value.toUpperCase();
    table = document.getElementById("course-table");
    tr = table.getElementsByTagName("tr");
  
    for (i = 0; i < tr.length; i++) {
        td = tr[i].getElementsByTagName("td")[0];
        if (td) {
          txtValue = td.textContent || td.innerText;
          if (txtValue.toUpperCase().indexOf(filter) > -1) {
            tr[i].style.display = "";
          } else {
            tr[i].style.display = "none";
          }
        }
    }
}