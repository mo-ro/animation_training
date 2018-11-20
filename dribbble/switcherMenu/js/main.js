var degree = 0;

$(".select-box").on("mousedown", function() {
  TweenMax.to($(".arrow"), 0.2, {
    opacity: 1
  });

  TweenMax.fromTo($(".cover"), 0.2, {
    borderWidth: 22,
    height: 0,
    scale: 1,
    width: 0,
  },
  {
    scale: 0.8,
    opacity: 0.2,
  })
});

$(".select-box").on("mouseup", function(event) {
  $(this).css({
    pointerEvents: 'none'
  })

  TweenMax.to($(".arrow"), 0.2, {
    opacity: 0.4
  });

  TweenMax.to($(".cover"), 0.5, {
    scale: 2.4
  });
  TweenMax.to($(".cover"), 0.3, {
    borderWidth: 0,
    height: 44,
    opacity: 0.1,
    width: 44,
    delay: 0.2
  });

  TweenMax.to($(".select-list"), 0.45, {
    rotation: degree += 90
  });

  TweenMax.to(this, 0.25, {
    rotation: 5,
    repeat: 1,
    yoyo: true,
    onComplete: function() {
      $(this.target).css({
        pointerEvents: 'all'
      })
    }
  })
});