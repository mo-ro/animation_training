const $animation = $(".animation")

$(".button").on("click", function() {
  $(".button").hide();
  const tl = new TimelineMax();

  tl.set($animation, {
    attr: {
      points: "90,30 1090,30 1090,30 90,30"
    },
  })
  .to($animation, .3, {
    attr: {
      points: "90,30 1090,30 1090,400 90,450"
    },
    ease: Power2.easeOut,
    delay: .5
  }
)

.to ($animation, .3, {
    attr: {
      points: "90,30 1090,30 1090,700 90,550"
    },
    ease: Power2.easeInOut,
    onComplete: function(){
      $(".button").show();
    }
  }
)
})

