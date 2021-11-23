  var show = document.getElementById('show');
  var text = document.getElementById('text');
  
  function openNav() {
    document.getElementById("sidebar").style.width = "250px";
    document.getElementById("openbtn").style.marginLeft = "250px";
    document.getElementById("openbtn").style.visibility = "hidden";
}
  
function closeNav() {
    document.getElementById("sidebar").style.width = "0";
    document.getElementById("openbtn").style.marginLeft= "0";
    document.getElementById("openbtn").style.visibility= "visible";
}

window.onscroll = function(){
    if(document.documentElement.scrollTop > 18 || document.body.scrollTop > 18){
      up.style.visibility = "visible";
    }
    else{
      up.style.visibility = "hidden";
    }
  }

  function show1() {
      document.getElementById('show').src='img2.png';
      text.innerHTML = "Web Development";
  }
  function show2() {
      document.getElementById('show').src='img3.png';
      text.innerHTML = "Python Programming";
  }
  function show3() {
      document.getElementById('show').src='img4.png';
      text.innerHTML = "Gaming";
  }
  function show4() {
    document.getElementById('show').src='img5.png';
    text.innerHTML = "Watching Marvel Movies";
}