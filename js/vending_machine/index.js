new Vue({
  el: '.medal',
  data: {
    flg: false,
    count: 0
  },
  methods: {
    into: function() {
      // console.log(999)
      console.log(this.flg)
      this.flg = true;
    },

    out: function() {
      // console.log(999)
// console.log(flg)
      this.flg = false;
    },

    release: function(event) {
      console.log(this.flg)
      if(this.flg) {
        count++;
        console.log(count)
      }
    }
  }
})

Draggable.create(".medal", {type:"x,y", edgeResistance:0.65, bounds:".wrapper", throwProps:true});