$cube = $(".cube");
$name = $(".name");

if(navigator.userAgent.match(/(iPhone|iPad|iPod|Android)/)){
  let degrees;

  $("body").on('click', function(e) {
    overlayW = $cube.width();
    mouseX = e.clientX - ($cube.offset().left + overlayW / 2);
    mouseY = e.clientY - ($cube.offset().top + overlayW / 2);
    degrees = Math.atan2( mouseY, mouseX ) * 180 / Math.PI;

    if ( degrees > -135 && degrees <= -45 ) {
      $cube.css('transform', 'rotateX(-90deg)')
      setTimeout(() => {
        $name.text("ふんわりとしたモアイ")
      }, 300);
    } else if ( degrees > -45 && degrees <= 45 ) {
      $cube.css('transform', 'rotateY(-90deg)')
      setTimeout(() => {
        $name.text("メタリックなモアイ")
      }, 300);
    } else if ( degrees > 45 && degrees <= 135 ) {
      $cube.css('transform', 'rotateX(90deg)')
      setTimeout(() => {
        $name.text("ザラついたモアイ")
      }, 300);
    } else {
      $cube.css('transform', 'rotateY(90deg)')
      setTimeout(() => {
        $name.text("抽象的なモアイ")
      }, 300);
    }
  })


  $(".front").mouseenter(function() {
    

    $(".cube-wrapper").mouseleave(function() {
      $cube.css('transform', 'rotateX(0deg) rotateY(0deg)');
      setTimeout(() => {
        $name.text("普通のモアイ")
      }, 400);
    })
  })

}else {
  let degrees;

  $("body").mousemove(function(e) {
    overlayW = $cube.width();
    mouseX = e.clientX - ($cube.offset().left + overlayW / 2);
    mouseY = e.clientY - ($cube.offset().top + overlayW / 2);
    degrees = Math.atan2( mouseY, mouseX ) * 180 / Math.PI;
  })


  $(".front").mouseenter(function() {
    if ( degrees > -135 && degrees <= -45 ) {
      $cube.css('transform', 'rotateX(-90deg)')
      setTimeout(() => {
        $name.text("ふんわりとしたモアイ")
      }, 300);
    } else if ( degrees > -45 && degrees <= 45 ) {
      $cube.css('transform', 'rotateY(-90deg)')
      setTimeout(() => {
        $name.text("メタリックなモアイ")
      }, 300);
    } else if ( degrees > 45 && degrees <= 135 ) {
      $cube.css('transform', 'rotateX(90deg)')
      setTimeout(() => {
        $name.text("ザラついたモアイ")
      }, 300);
    } else {
      $cube.css('transform', 'rotateY(90deg)')
      setTimeout(() => {
        $name.text("抽象的なモアイ")
      }, 300);
    }

    $(".cube-wrapper").mouseleave(function() {
      $cube.css('transform', 'rotateX(0deg) rotateY(0deg)');
      setTimeout(() => {
        $name.text("普通のモアイ")
      }, 400);
    })
  })



}