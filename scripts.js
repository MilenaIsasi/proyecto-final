document.addEventListener("DOMContentLoaded", () => { //agrego un evento 
    const elementosCarousel = document.querySelectorAll('.carousel');
    M.Carousel.init(elementosCarousel, {     //queremos que inicies un carousel por cada elemento que encuentres en la pag
        duration: 150,
        dist : -80,
        shift: 5,
        padding: 5,
        numVisible: 5,
        indicators: true,
        noWrap: false,

    });

});


