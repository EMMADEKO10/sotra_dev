// ------------------------------------------------------------------------------ //
//
// Template name : Bootsnav - Multi Purpose Header
// Categorie : Bootstrap Menu in CSS
// Author : adamnurdin01
// Version : v.1.2
// Created : 2016-06-02
// Last update : 2016-10-19
//
// ------------------------------------------------------------------------------ //

(function ($) {
    "use strict";
    
    var bootsnav = {
        initialize: function() {
            this.event();
            this.hoverDropdown();
            this.navbarSticky();
            this.navbarScrollspy();
        },
        event : function(){
            
            // ------------------------------------------------------------------------------ //
            // Variable
            // ------------------------------------------------------------------------------ //
            var getNav = $("nav.navbar.bootsnav");
            
            // ------------------------------------------------------------------------------ //
            // Navbar Sticky 
            // ------------------------------------------------------------------------------ //
            var navSticky = getNav.hasclass("navbar-sticky");
            if( navSticky ){
                // Wraped navigation
                getNav.wrap("<div class='wrap-sticky'></div>");
            }   
            
            // ------------------------------------------------------------------------------ //
            // Navbar Center 
            // ------------------------------------------------------------------------------ //
            if( getNav.hasclass("brand-center")){                
                var postsArr = new Array(),
                    index = $("nav.brand-center"),
                    $postsList = index.find('ul.navbar-nav');
                
                index.prepend("<span class='storage-name' style='display:none;'></span>");
                
                //Create array of all posts in lists
                index.find('ul.navbar-nav > li').each(function(){
                    if( $(this).hasclass("active") ){
                        var getElement = $("a", this).eq(0).text();
                        $(".storage-name").html(getElement);
                    }
                    postsArr.push($(this).html());
                });
                
                //Split the array at this point. The original array is altered.
                var firstList = postsArr.splice(0, Math.round(postsArr.length / 2)),
                    secondList = postsArr,
                    ListHTML = '';
                
                var createHTML = function(list){
                    ListHTML = '';
                    for (var i = 0; i < list.length; i++) {
                        ListHTML += '<li>' + list[i] + '</li>'
                    }
                }
                
                //Generate HTML for first list
                createHTML(firstList);
                $postsList.html(ListHTML);
                index.find("ul.nav").first().addclass("navbar-left");
                
                //Generate HTML for second list
                createHTML(secondList);
                //Create new list after original one
                $postsList.after('<ul class="nav navbar-nav"></ul>').next().html(ListHTML);
                index.find("ul.nav").last().addclass("navbar-right");
                
                //Wrap navigation menu
                index.find("ul.nav.navbar-left").wrap("<div class='col-half left'></div>");
                index.find("ul.nav.navbar-right").wrap("<div class='col-half right'></div>");
                
                //Selection class
                index.find('ul.navbar-nav > li').each(function(){ 
                    var dropDown = $("ul.dropdown-menu", this),
                        megaMenu = $("ul.megamenu-content", this);
                    dropDown.closest("li").addclass("dropdown");
                    megaMenu.closest("li").addclass("megamenu-fw");
                });
                
                var getName = $(".storage-name").html();
                if( !getName == ""  ){
                    $( "ul.navbar-nav > li:contains('" + getName + "')" ).addclass("active");
                }       
            } 
            
            
            // ------------------------------------------------------------------------------ //
            // Navbar Sidebar 
            // ------------------------------------------------------------------------------ //
            if( getNav.hasclass("navbar-sidebar")){
                // Add class to body
                $("body").addclass("wrap-nav-sidebar");
                getNav.wrapInner("<div class='scroller'></div>");
            }else{
                $(".bootsnav").addclass("on");
            }
            
            // ------------------------------------------------------------------------------ //
            // Menu Center 
            // ------------------------------------------------------------------------------ //
            if( getNav.find("ul.nav").hasclass("navbar-center")){
                getNav.addclass("menu-center");
            }
            
            // ------------------------------------------------------------------------------ //
            // Navbar Full
            // ------------------------------------------------------------------------------ //
            if( getNav.hasclass("navbar-full")){
                // Add class to body
                $("nav.navbar.bootsnav").find("ul.nav").wrap("<div class='wrap-full-menu'></div>");
                $(".wrap-full-menu").wrap("<div class='nav-full'></div>");
                $("ul.nav.navbar-nav").prepend("<li class='close-full-menu'><a href='#'><i class='fa fa-times'></i></a></li>");
            }else if( getNav.hasclass("navbar-mobile")){
                getNav.removeclass("no-full");
            }else{
                getNav.addclass("no-full");
            }
                
            // ------------------------------------------------------------------------------ //
            // Navbar Mobile
            // ------------------------------------------------------------------------------ //
            if( getNav.hasclass("navbar-mobile")){
                // Add class to body
                $('.navbar-collapse').on('shown.bs.collapse', function() {
                    $("body").addclass("side-right");
                });
                $('.navbar-collapse').on('hide.bs.collapse', function() {
                    $("body").removeclass("side-right");
                });
                
                $(window).on("resize", function(){
                    $("body").removeclass("side-right");
                });
            }
            
            // ------------------------------------------------------------------------------ //
            // Navbar Fixed
            // ------------------------------------------------------------------------------ //
            if( getNav.hasclass("no-background")){
                $(window).on("scroll", function(){
                    var scrollTop = $(window).scrollTop();
                    if(scrollTop >34){
                        $(".navbar-fixed").removeclass("no-background");
                    }else {
                        $(".navbar-fixed").addclass("no-background");
                    }
                });
            }
            
            // ------------------------------------------------------------------------------ //
            // Navbar Fixed
            // ------------------------------------------------------------------------------ //
            if( getNav.hasclass("navbar-transparent")){
                $(window).on("scroll", function(){
                    var scrollTop = $(window).scrollTop();
                    if(scrollTop >34){
                        $(".navbar-fixed").removeclass("navbar-transparent");
                    }else {
                        $(".navbar-fixed").addclass("navbar-transparent");
                    }
                });
            }
            
            // ------------------------------------------------------------------------------ //
            // Button Cart
            // ------------------------------------------------------------------------------ //
            $(".btn-cart").on("click", function(e){
                e.stopPropagation();
            });
            
            // ------------------------------------------------------------------------------ //
            // Toggle Search
            // ------------------------------------------------------------------------------ //
            $("nav.navbar.bootsnav .attr-nav").each(function(){  
                $("li.search > a", this).on("click", function(e){
                    e.preventDefault();
                    $(".top-search").slideToggle();
                });
            });
            $(".input-group-addon.close-search").on("click", function(){
                $(".top-search").slideUp();
            });
            
            // ------------------------------------------------------------------------------ //
            // Toggle Side Menu
            // ------------------------------------------------------------------------------ //
            $("nav.navbar.bootsnav .attr-nav").each(function(){  
                $("li.side-menu > a", this).on("click", function(e){
                    e.preventDefault();
                    $("nav.navbar.bootsnav > .side").toggleclass("on");
                    $("body").toggleclass("on-side");
                });
            });
            $(".side .close-side").on("click", function(e){
                e.preventDefault();
                $("nav.navbar.bootsnav > .side").removeclass("on");
                $("body").removeclass("on-side");
            });  
            
            
            
            // ------------------------------------------------------------------------------ //
            // Wrapper
            // ------------------------------------------------------------------------------ //
            $("body").wrapInner( "<div class='wrapper'></div>");
        }, 
        

        // ------------------------------------------------------------------------------ //
        // Change dropdown to hover on dekstop
        // ------------------------------------------------------------------------------ //
        hoverDropdown : function(){
            var getNav = $("nav.navbar.bootsnav"),
                getWindow = $(window).width(),
                getHeight = $(window).height(),
                getIn = getNav.find("ul.nav").data("in"),
                getOut = getNav.find("ul.nav").data("out");
            
            if( getWindow < 991 ){
                
                // Height of scroll navigation sidebar
                $(".scroller").css("height", "auto");
                
                // Disable mouseenter event
                $("nav.navbar.bootsnav ul.nav").find("li.dropdown").off("mouseenter");
                $("nav.navbar.bootsnav ul.nav").find("li.dropdown").off("mouseleave");
                $("nav.navbar.bootsnav ul.nav").find(".title").off("mouseenter"); 
                $("nav.navbar.bootsnav ul.nav").off("mouseleave");    
                
                // Enable click event
                $("nav.navbar.bootsnav ul.nav").each(function(){
                    $(".dropdown-menu", this).removeclass(getOut);
                    
                    // Dropdown Fade Toggle
                    $("a.dropdown-toggle", this).off('click');
                    $("a.dropdown-toggle", this).on('click', function (e) {
                        e.stopPropagation();
                        $(this).closest("li.dropdown").find(".dropdown-menu").first().stop().fadeToggle().toggleclass(getIn);
                        $(this).closest("li.dropdown").first().toggleclass("on");                        
                        return false;
                    });   
                    
                    // Hidden dropdown action
                    $('li.dropdown', this).each(function () {
                        $(this).find(".dropdown-menu").stop().fadeOut();
                        $(this).on('hidden.bs.dropdown', function () {
                            $(this).find(".dropdown-menu").stop().fadeOut();
                        });
                        return false;
                    });

                    // Megamenu style
                    $(".megamenu-fw", this).each(function(){
                        $(".col-menu", this).each(function(){
                            $(".content", this).stop().fadeOut();
                            $(".title", this).off("click");
                            $(".title", this).on("click", function(){
                                $(this).closest(".col-menu").find(".content").stop().fadeToggle().addclass(getIn);
                                $(this).closest(".col-menu").toggleclass("on");
                                return false;
                            });

                            $(".content", this).on("click", function(e){
                                e.stopPropagation();
                            });
                        });
                    });  
                }); 
                
                // Hidden dropdown
                var cleanOpen = function(){
                    $('li.dropdown', this).removeclass("on");
                    $(".dropdown-menu", this).stop().fadeOut();
                    $(".dropdown-menu", this).removeclass(getIn);
                    $(".col-menu", this).removeclass("on");
                    $(".col-menu .content", this).stop().fadeOut();
                    $(".col-menu .content", this).removeclass(getIn);
                }
                
                // Hidden om mouse leave
                $("nav.navbar.bootsnav").on("mouseleave", function(){
                    cleanOpen();
                });
                
                // Enable click atribute navigation
                $("nav.navbar.bootsnav .attr-nav").each(function(){  
                    $("li.dropdown", this).off("mouseenter");
                    $("li.dropdown", this).off("mouseleave");                    
                    $("a.dropdown-toggle", this).off('click');
                    $("a.dropdown-toggle", this).on('click', function (e) {
                        e.stopPropagation();
                        $(this).closest("li.dropdown").find(".dropdown-menu").first().stop().fadeToggle();
                        $(".navbar-toggle").each(function(){
                            $(".fa", this).removeclass("fa-times");
                            $(".fa", this).addclass("fa-bars");
                            $(".navbar-collapse").removeclass("in");
                            $(".navbar-collapse").removeclass("on");
                        });
                    });
                    
                    $(this).on("mouseleave", function(){
                        $(".dropdown-menu", this).stop().fadeOut();
                        $("li.dropdown", this).removeclass("on");
                        return false;
                    });
                });
                
                // Toggle Bars
                $(".navbar-toggle").each(function(){
                    $(this).off("click");
                    $(this).on("click", function(){
                        $(".fa", this).toggleclass("fa-bars");
                        $(".fa", this).toggleclass("fa-times");
                        cleanOpen();
                    });
                });

            }else if( getWindow > 991 ){
                // Height of scroll navigation sidebar
                $(".scroller").css("height", getHeight + "px");
                
                // Navbar Sidebar
                if( getNav.hasclass("navbar-sidebar")){
                    // Hover effect Sidebar Menu
                    $("nav.navbar.bootsnav ul.nav").each(function(){  
                        $("a.dropdown-toggle", this).off('click');
                        $("a.dropdown-toggle", this).on('click', function (e) {
                            e.stopPropagation();
                        }); 

                        $("li.dropdown", this).on("mouseenter", function(){
                            $(".dropdown-menu", this).eq(0).removeclass(getOut);
                            $(".dropdown-menu", this).eq(0).stop().fadeIn().addclass(getIn);
                            $(this).addclass("on");
                            return false;
                        });
                        
                        $(".col-menu").each(function(){
                            $(".title", this).on("mouseenter", function(){
                                $(this).closest(".col-menu").find(".content").stop().fadeIn().addclass(getIn);
                                $(this).closest(".col-menu").addclass("on");
                                return false;
                            });
                        });
                        
                        $(this).on("mouseleave", function(){
                            $(".dropdown-menu", this).stop().removeclass(getIn);
                            $(".dropdown-menu", this).stop().addclass(getOut).fadeOut();
                            $(".col-menu", this).find(".content").stop().fadeOut().removeclass(getIn);
                            $(".col-menu", this).removeclass("on");
                            $("li.dropdown", this).removeclass("on");
                            return false;
                        });
                    }); 
                }else{
                    // Hover effect Default Menu
                    $("nav.navbar.bootsnav ul.nav").each(function(){  
                        $("a.dropdown-toggle", this).off('click');
                        $("a.dropdown-toggle", this).on('click', function (e) {
                            e.stopPropagation();
                        }); 

                        $(".megamenu-fw", this).each(function(){
                            $(".title", this).off("click");
                            $("a.dropdown-toggle", this).off("click");
                        });

                        $("li.dropdown", this).on("mouseenter", function(){
                            $(".dropdown-menu", this).eq(0).removeclass(getOut);
                            $(".dropdown-menu", this).eq(0).stop().fadeIn().addclass(getIn);
                            $(this).addclass("on");
                            return false;
                        });

                        $("li.dropdown", this).on("mouseleave", function(){
                            $(".dropdown-menu", this).eq(0).removeclass(getIn);
                            $(".dropdown-menu", this).eq(0).stop().fadeOut().addclass(getOut);
                            $(this).removeclass("on");
                        });

                        $(this).on("mouseleave", function(){
                            $(".dropdown-menu", this).removeclass(getIn);
                            $(".dropdown-menu", this).eq(0).stop().fadeOut().addclass(getOut);
                            $("li.dropdown", this).removeclass("on");
                            return false;
                        });
                    });
                }
                
                // ------------------------------------------------------------------------------ //
                // Hover effect Atribute Navigation
                // ------------------------------------------------------------------------------ //
                $("nav.navbar.bootsnav .attr-nav").each(function(){                      
                    $("a.dropdown-toggle", this).off('click');
                    $("a.dropdown-toggle", this).on('click', function (e) {
                        e.stopPropagation();
                    }); 
                    
                    $("li.dropdown", this).on("mouseenter", function(){
                        $(".dropdown-menu", this).eq(0).removeclass(getOut);
                        $(".dropdown-menu", this).eq(0).stop().fadeIn().addclass(getIn);
                        $(this).addclass("on");
                        return false;
                    });

                    $("li.dropdown", this).on("mouseleave", function(){
                        $(".dropdown-menu", this).eq(0).removeclass(getIn);
                        $(".dropdown-menu", this).eq(0).stop().fadeOut().addclass(getOut);
                        $(this).removeclass("on");
                    });

                    $(this).on("mouseleave", function(){
                        $(".dropdown-menu", this).removeclass(getIn);
                        $(".dropdown-menu", this).eq(0).stop().fadeOut().addclass(getOut);
                        $("li.dropdown", this).removeclass("on");
                        return false;
                    });
                });
            }
            
            // ------------------------------------------------------------------------------ //
            // Menu Fullscreen
            // ------------------------------------------------------------------------------ //
            if( getNav.hasclass("navbar-full")){
                var windowHeight = $(window).height(),
                    windowWidth =  $(window).width();

                $(".nav-full").css("height", windowHeight + "px");
                $(".wrap-full-menu").css("height", windowHeight + "px");
                $(".wrap-full-menu").css("width", windowWidth + "px");
                
                $(".navbar-toggle").each(function(){
                    var getId = $(this).data("target");
                    $(this).off("click");
                    $(this).on("click", function(e){
                        e.preventDefault();
                        $(getId).removeclass(getOut);
                        $(getId).addclass("in");
                        $(getId).addclass(getIn);
                        return false;
                    });
                    
                    $("li.close-full-menu").on("click", function(e){
                        e.preventDefault();
                        $(getId).addclass(getOut);
                        setTimeout(function(){
                            $(getId).removeclass("in");
                            $(getId).removeclass(getIn);
                        }, 500);
                        return false;
                    });
                });
            }
        },
        
        // ------------------------------------------------------------------------------ //
        // Navbar Sticky
        // ------------------------------------------------------------------------------ //
        navbarSticky : function(){  
            var getNav = $("nav.navbar.bootsnav"),
                navSticky = getNav.hasclass("navbar-sticky");
            
            if( navSticky ){
                
                // Set Height Navigation
                var getHeight = getNav.height();             
                $(".wrap-sticky").height(getHeight);
                
                // Windown on scroll
                var getOffset = $(".wrap-sticky").offset().top;
                $(window).on("scroll", function(){  
                    var scrollTop = $(window).scrollTop();
                    if(scrollTop > getOffset){
                        getNav.addclass("sticked");
                    }else {
                        getNav.removeclass("sticked");
                    }
                });
            }   
        },
        
        // ------------------------------------------------------------------------------ //
        // Navbar Scrollspy
        // ------------------------------------------------------------------------------ //
        navbarScrollspy : function(){ 
            var navScrollSpy = $(".navbar-scrollspy"),
                $body   = $('body'), 
                getNav = $('nav.navbar.bootsnav'),
                offset  = getNav.outerHeight();
            
            if( navScrollSpy.length ){
                $body.scrollspy({target: '.navbar', offset: offset });
                
                // Animation Scrollspy
                $('.scroll').on('click', function(event) {
                    event.preventDefault();

                    // Active link
                    $('.scroll').removeclass("active");
                    $(this).addclass("active");

                    // Remove navbar collapse
                    $(".navbar-collapse").removeclass("in");

                    // Toggle Bars
                    $(".navbar-toggle").each(function(){
                        $(".fa", this).removeclass("fa-times");
                        $(".fa", this).addclass("fa-bars");
                    });

                    // Scroll
                    var scrollTop = $(window).scrollTop(),
                        $anchor = $(this).find('a'),
                        $section = $($anchor.attr('href')).offset().top,
                        $window = $(window).width(),
                        $minusDesktop = getNav.data("minus-value-desktop"),
                        $minusMobile = getNav.data("minus-value-mobile"),
                        $speed = getNav.data("speed");
                    
                    if( $window > 992 ){
                        var $position = $section - $minusDesktop;
                    }else{
                        var $position = $section - $minusMobile;
                    }             
                        
                    $('html, body').stop().animate({
                        scrollTop: $position
                    }, $speed);
                });
                
                // Activate Navigation
                var fixSpy = function() {
                    var data = $body.data('bs.scrollspy');
                    if (data) {
                        offset = getNav.outerHeight();
                        data.options.offset = offset;
                        $body.data('bs.scrollspy', data);
                        $body.scrollspy('refresh');
                    }
                }
                
                // Activate Navigation on resize
                var resizeTimer;
                $(window).on('resize', function() {
                    clearTimeout(resizeTimer);
                    var resizeTimer = setTimeout(fixSpy, 200);
                });
            }
        }
    };
    
    // Initialize
    $(document).ready(function(){
        bootsnav.initialize();
    });
    
    // Reset on resize
    $(window).on("resize", function(){   
        bootsnav.hoverDropdown();
        setTimeout(function(){
            bootsnav.navbarSticky();
        }, 500);
        
        // Toggle Bars
        $(".navbar-toggle").each(function(){
            $(".fa", this).removeclass("fa-times");
            $(".fa", this).addclass("fa-bars");
            $(this).removeclass("fixed");
        });        
        $(".navbar-collapse").removeclass("in");
        $(".navbar-collapse").removeclass("on");
        $(".navbar-collapse").removeclass("bounceIn");      
    });
    
}(jQuery));

