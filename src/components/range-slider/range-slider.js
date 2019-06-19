var wNumb = require("./wNumb");
var noUiSlider = require("nouislider");
var inputFormat = document.getElementById('amount');
var slider = document.getElementById('slider-range');
  noUiSlider.create(slider, {
   start: [5000, 10000],
   connect: true,
   step: 100,
   orientation: 'horizontal', // 'horizontal' or 'vertical'
   range: {
     'min': 0,
     'max': 15600
   },     
   format: wNumb({
    decimals: 0,
    thousand: ' ',
    suffix: '₽'
  }) 
  });
slider.noUiSlider.on('update', function (values, handle) {
    inputFormat.value = values[0]+' - '+values[1];
    console.log(values[0]);
});
