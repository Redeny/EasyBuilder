function sidebar_checker(){
    let sidebar_state = localStorage.getItem('sidebar-state');
    if(sidebar_state == 'normal'){
        localStorage.setItem('sidebar-state','normal');
        $('#sidebar-state').empty().html('close');
        $('body').removeClass('compact-sidebar');
    }
    else{
        $('body').addClass('compact-sidebar');
        localStorage.setItem('sidebar-state','compact');
        $('#sidebar-state').empty().html('panorama_fish_eye');
        localStorage.setItem('sidebar-state','compact');
    }
}
function theme_Checker(){
    // localStorage.setItem('time_theme_toggle','true');
    // localStorage.setItem('time_toggle','11');
    // let time_theme_toggle = localStorage.getItem('time_theme_toggle');
    // if((time_theme_toggle == "true")&&(localStorage.getItem('theme') != 'white')){
    //     let time = new Date();
    //     let time_toggle =  localStorage.getItem('time_toggle');
    //     if(time.getHours >= time_toggle){
    //         $('body').addClass('dark-theme');
    //     }
    // }
}
sidebar_checker();
theme_Checker();
$(document).ready(function() {
    "use strict";


    const submenu_animation_speed = 200;
    
    const simulateClick = function (elem) {
        // Create our event (with options)
        var evt = new MouseEvent('click', {
            bubbles: true,
            cancelable: true,
            view: window
        });
        // If cancelled, don't dispatch our event
	   var canceled = !elem.dispatchEvent(evt);
    };
    
    const connectSidebar = function() { 
        var select_sub_menus = $('.accordion-menu li:not(.open) ul'),
            active_page_sub_menu_link = $('.accordion-menu li.active-page > a');
        
        // Hide all sub-menus
        select_sub_menus.hide();
        
        // Accordion
        $('.accordion-menu li a').on('click', function() {
            var sub_menu = $(this).next('ul'),
                parent_list_el = $(this).parent('li'),
                active_list_element = $('.accordion-menu > li.open'),
                show_sub_menu = function() {
                    sub_menu.slideDown(submenu_animation_speed);
                    parent_list_el.addClass('open');
                },
                hide_sub_menu = function() {
                    sub_menu.slideUp(submenu_animation_speed);
                    parent_list_el.removeClass('open');
                },
                hide_active_menu = function() {
                    $('.accordion-menu > li.open > ul').slideUp(submenu_animation_speed);
                    active_list_element.removeClass('open');
                };
            
            if(sub_menu.length) {
                
                if(!parent_list_el.hasClass('open')) {
                    if(active_list_element.length) {
                        hide_active_menu();
                    };
                    show_sub_menu();
                } else {
                    hide_sub_menu();
                };
                
                return false;
                
            };
        });
        
        if($('.active-page > ul').length) {
            active_page_sub_menu_link.click();
        };

        $('#sidebar-state').on('click', function(){
            let sidebar_state = localStorage.getItem('sidebar-state');
            if(sidebar_state == 'normal'){
                $('body').toggleClass('compact-sidebar');
                localStorage.setItem('sidebar-state','compact');
                $('#sidebar-state').empty().html('panorama_fish_eye');
                localStorage.setItem('sidebar-state','compact');
            }
            else{
                localStorage.setItem('sidebar-state','normal');
                $('#sidebar-state').empty().html('close');

                $('body').removeClass('compact-sidebar');
            }
        });
        
        
        $(window).click(function() {
            if($('body').hasClass('small-screen-sidebar-active')) {
                var navToggle = document.querySelector('.small-screens-sidebar-link a');
                simulateClick(navToggle);
            }
        });

        $('.small-screens-sidebar-link a').on('click', function(){
            $('body').toggleClass('small-screen-sidebar-active');
            event.stopPropagation();
        });

        $('#sidebar-close').on('click', function(){
            $('body').toggleClass('small-screen-sidebar-active');
        });


        $('.page-sidebar').click(function(event){
            event.stopPropagation();
        });

        
        $('.horizontal-bar').click(function(event){
            event.stopPropagation();
        });

        
        $('.hide-horizontal-bar').on('click', function(){
            $('body').toggleClass('small-screen-sidebar-active');
        });

         
        var horizontal_sub_menus = $('.horizontal-bar-menu li:not(.open) ul');
        
        // Hide all sub-menus
        horizontal_sub_menus.hide();
        
        // Accordion
        $('.horizontal-bar-menu li a').on('click', function() {
            var sub_menu = $(this).next('ul'),
                parent_list_el = $(this).parent('li'),
                active_list_element = $('.horizontal-bar-menu > ul > li.open'),
                show_sub_menu = function() {
                    sub_menu.slideDown(submenu_animation_speed);
                    parent_list_el.addClass('open');
                },
                hide_sub_menu = function() {
                    sub_menu.slideUp(submenu_animation_speed);
                    parent_list_el.removeClass('open');
                },
                hide_active_menu = function() {
                    $('.horizontal-bar-menu > ul > li.open > ul').slideUp(submenu_animation_speed);
                    active_list_element.removeClass('open');
                };
            
            if(sub_menu.length) {
                
                if(!parent_list_el.hasClass('open')) {
                    if(active_list_element.length) {
                        hide_active_menu();
                    };
                    show_sub_menu();
                } else {
                    hide_sub_menu();
                };
                
                return false;
                
            };
        });
        

    };

    const dark_theme = function() {
    localStorage.setItem('time_toggle','11');
    let time_theme_toggle = localStorage.getItem('time_theme_toggle');
    let button = $('#dark-theme-toggle');
        if((localStorage.getItem('theme') == 'dark')) {
            $('body').addClass('dark-theme');
            $('.loader').css({'background-color':'#1F2128'});
            button.empty();
            button.html('<i class="material-icons-outlined">brightness_7</i>');
        }
        else{
            if((time_theme_toggle == "true")){
                let time = new Date();
                let time_toggle =  localStorage.getItem('time_toggle');
                if(time.getHours >= time_toggle){
                    $('body').addClass('dark-theme');
                }
            }
             $('.loader').css({'background-color':'#edf2f0'});
            button.empty();
            button.html('<i class="material-icons-outlined">brightness_2</i>');
        }
        if(localStorage.getItem('theme') != 'dark' && $('body').hasClass('dark-theme')) {
            localStorage.setItem('theme', 'dark');
        }
        $('#dark-theme-toggle').on('click', function() {

            localStorage.setItem('time_theme_toggle','false')
            $('body').toggleClass('dark-theme');

            if($('body').hasClass('dark-theme')) {

                localStorage.setItem('theme', 'dark');
                button.empty();
                button.html('<i class="material-icons-outlined">brightness_7</i>');
            } else {
                localStorage.setItem('theme', 'light');
                button.empty();
                button.html('<i class="material-icons-outlined">brightness_2</i>');
            }
            event.preventDefault();
        });
    };
    
    const plugins_init = function(){

        if($(window).width() > 767) {
        // Slimscroll
            $('.slimscroll').slimScroll({
                wheelStep: 5,
                touchScrollStep: 30,
                opacity: 0
                }).mouseover(function() {
                    $(this).next('.slimScrollBar').css('opacity', 0.4);
                });
        }
        
        $('[data-toggle="popover"]').popover();
        $('[data-toggle="tooltip"]').tooltip(); // gives the scroll position
        
        window.addEventListener('load', function() {
            // Fetch all the forms we want to apply custom Bootstrap validation styles to
            var forms = document.getElementsByClassName('needs-validation');
            // Loop over them and prevent submission
            var validation = Array.prototype.filter.call(forms, function(form) {
                form.addEventListener('submit', function(event) {
                    if (form.checkValidity() === false) {
                        event.preventDefault();
                        event.stopPropagation();
                    }
                    form.classList.add('was-validated');
                }, false);
            });
        }, false);

    };

    
    connectSidebar();
    dark_theme();
    //plugins_init();
});
$(window).on("load", function () {
    setTimeout(function() {
    $('body').addClass('no-loader')}, 1000)
});
class elementOnPanel{
    constructor (type,content, elementClass,id, appendTo){
        this.type = type;
        this.content = content;
        this.elementClass = elementClass;
        this.appendTo = appendTo;
        this.id = id;
    }
}
function appendElement(element){
    let num = 0;
    for(let data of element){
        let id = data.id;
        if ((id == '')||(id == 'undefind')){
            id = 'idElement'+num+'EasyBuilder';
        }
        num++;
        //add Elements to Extra panel

        let elementik = $(data.type).addClass(data.elementClass).attr('id',id);
        elementik.html(data.content).appendTo(data.appendTo == undefined? '#extra-panel-EasyBuilder':data.appendTo);
    }
}

function classToggler(elementName,classToggleArr, mainClassArr){
    let element = $(elementName);
    for(let classToggle of classToggleArr)
    {

        if(element.hasClass(classToggle)){
            element.removeClass();
            for(let data of mainClassArr){
                element.addClass(data);
            }
        }
        else{
            element.removeClass();
            for(let data of mainClassArr){
                element.addClass(data);
            }
            for(let data of classToggleArr){
                element.addClass(data);
            }
        }
    }
}

function addDataByClick(clickedElementName , element, parnetName, extraClasses, mainClass){
    // Extra Panel Initalization
    let parent = $(parnetName);
    // Clicked element initialization
        parent.empty();
        // if Extra panel is not Empty 

        if (parent.hasClass(clickedElementName+'clicked')){
            // if it not empty Empty it!
            parent.removeClass();
            parent.addClass(mainClass);
        }
        else{
            //remove connect class
            parent.removeClass();
            //add All classes
            parent.addClass(mainClass);
            for(let clas of extraClasses){
                parent.addClass(clas);
            }
            //add class clicked element
            parent.addClass(clickedElementName+'clicked');
            // add data
            appendElement(element);
        }
}