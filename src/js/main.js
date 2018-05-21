import "../scss/main.scss";

(()=> {

     _initGallery();

 })();


function _initGallery(){

    
    $('.gallery').slick({
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 4,
        lazyLoad: 'ondemand',
        dots: true,
        responsive: [
            {
              breakpoint: 768,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2
              }
            },
            {
              breakpoint: 540,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
        ]
      });
}

// const arr = [1, 2, 3];
// const iAmJavascriptES6 = () => console.log(...arr);
// window.iAmJavascriptES6 = iAmJavascriptES6;