
$(document).ready(function() {
    "use strict";
    
//
$("body").on("contextmenu",function(e){
        return false;
    });
    $(document).keydown(function(e){
         if (e.ctrlKey && (e.keyCode === 67 || e.keyCode === 86 || e.keyCode === 85 || e.keyCode === 117)){
           return false;
         }
         if(e.which === 123){
             return false;
         }
         if(e.metaKey){
             return false;
         }
         //document.onkeydown = function(e) {
         // "I" key
         if (e.ctrlKey && e.shiftKey && e.keyCode == 73) {
             return false;
         }
         // "J" key
         if (e.ctrlKey && e.shiftKey && e.keyCode == 74) {
             return false;
         }
         // "S" key + macOS
         if (e.keyCode == 83 && (navigator.platform.match("Mac") ? e.metaKey : e.ctrlKey)) {
             return false;
         }
         if (e.keyCode == 224 && (navigator.platform.match("Mac") ? e.metaKey : e.ctrlKey)) {
             return false;
         }
         // "U" key
         if (e.ctrlKey && e.keyCode == 85) {
            return false;
         }
         // "F12" key
         if (event.keyCode == 123) {
            return false;
         }
    });
 
	

(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','../../../www.google-analytics.com/analytics.js','ga');

ga('create', 'UA-120909275-1', 'auto');
ga('send', 'pageview');

    var ones = $("#owl-carousel-one");
    ones.owlCarousel({
        singleItem: true,
        items: 1,
        slideSpeed: 1000,
        pagination: false,
        navigation: true,
        autoPlay: 3500,
		dots: false,
        nav: true,
        navigationText: ["<i class='icofont icofont-thin-left'></i>", "<i class='icofont icofont-thin-right'></i>"],
        afterAction: syncPosition,
        responsiveRefreshRate: 200,
    });

    // ===========Category Owl Carousel============
    var objowlcarousel = $(".owl-carousel-category");
    if (objowlcarousel.length > 0) {
        objowlcarousel.owlCarousel({
            items: 4,
            lazyLoad: true,
            pagination: false,
			 loop: true,
            autoPlay: 2000,
            navigation: true,
            stopOnHover: true,
			navigationText: ["<i class='icofont icofont-thin-left'></i>", "<i class='icofont icofont-thin-right'></i>"]
        });
    }

    // ===========Right Sidebar============
    $('[data-toggle="offcanvas"]').on('click', function() {
        $('body').toggleClass('toggled');
    });

    // ===========Hover Nav============ 
    $('.navbar-nav li.dropdown').on('mouseenter', function(){ $(this).find('.dropdown-menu').stop(true, true).delay(100).fadeIn(500); })
    $('.navbar-nav li.dropdown').on('mouseleave', function(){ $(this).find('.dropdown-menu').stop(true, true).delay(100).fadeOut(500); })
    
	// ===========Select2============
    $('select').select2();
	
    // ===========Tooltip============
    $('[data-toggle="tooltip"]').tooltip();

    // ===========Single Items Slider============   
    var sync1 = $("#sync1");
    var sync2 = $("#sync2");
    sync1.owlCarousel({
        singleItem: true,
        items: 1,
        slideSpeed: 1000,
        pagination: false,
        navigation: true,
        autoPlay: 2500,
		dots: false,
        nav: true,
        navigationText: ["<i class='icofont icofont-thin-left'></i>", "<i class='icofont icofont-thin-right'></i>"],
        afterAction: syncPosition,
        responsiveRefreshRate: 200,
    });
    sync2.owlCarousel({
        items: 5,
        navigation: true,
        dots: false,
        pagination: false,
        nav: true,
        navigationText: ["<i class='icofont icofont-thin-left'></i>", "<i class='icofont icofont-thin-right'></i>"],
        responsiveRefreshRate: 100,
        afterInit: function(el) {
            el.find(".owl-item").eq(0).addClass("synced");
        }
    });

    function syncPosition(el) {
        var current = this.currentItem;
        $("#sync2")
            .find(".owl-item")
            .removeClass("synced")
            .eq(current)
            .addClass("synced")
        if ($("#sync2").data("owlCarousel") !== undefined) {
            center(current)
        }
    }
    $("#sync2").on("click", ".owl-item", function(e) {
        e.preventDefault();
        var number = $(this).data("owlItem");
        sync1.trigger("owl.goTo", number);
    });

    function center(number) {
        var sync2visible = sync2.data("owlCarousel").owl.visibleItems;
        var num = number;
        var found = false;
        for (var i in sync2visible) {
            if (num === sync2visible[i]) {
                var found = true;
            }
        }
        if (found === false) {
            if (num > sync2visible[sync2visible.length - 1]) {
                sync2.trigger("owl.goTo", num - sync2visible.length + 2)
            } else {
                if (num - 1 === -1) {
                    num = 0;
                }
                sync2.trigger("owl.goTo", num);
            }
        } else if (num === sync2visible[sync2visible.length - 1]) {
            sync2.trigger("owl.goTo", sync2visible[1])
        } else if (num === sync2visible[0]) {
            sync2.trigger("owl.goTo", num - 1)
        }
    }
	
	// ===========Datatabel============
	$('.datatabel').DataTable();
	
	

});

 var swiper = new Swiper(".testimonialSwiper", {
    loop: true,
    autoplay: {
      delay: 2000,
      disableOnInteraction: false,
    },
    slidesPerView: 1,
    spaceBetween: 20,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      768: {
        slidesPerView: 2,
      },
      1024: {
        slidesPerView: 3,
      }
    }
  });