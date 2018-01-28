var navi_items = [
    {name: "Home", link: "", type: "item"},
    {name: "About", link: "", type: "item"},
    {name: "Our Mission", link: "", type: "sub-item"},
    {name: "Our Team", link: "", type: "sub-item"},
    {name: "Participate", link: "", type: "item"},
    {name: "Students", link: "", type: "sub-item"},
    {name: "Partners", link: "", type: "sub-item"},
    {name: "Event Calendar", link: "", type: "sub-item"},
    {name: "Donate", link: "", type: "sub-item"},
    {name: "Projects", link: "", type: "item"},
    {name: "Current Innovations", link: "", type: "sub-item"},
    {name: "Previous Works", link: "", type: "sub-item"},
    {name: "Login", link: "", type: "item"},
    {name: "Contact", link: "", type: "item"},
];

(function($) {

  $.fn.menumaker = function(options) {
      
      var navimenu = $(this), settings = $.extend({
          title: "Menu",
          format: "dropdown",
          breakpoint: 768,
          sticky: false
      }, options);

      return this.each(function() {
          
          navimenu.find('li ul').parent().addClass('has-sub');
          if (settings.format != 'select') {
              navimenu.prepend('<div id="menu-button">' + settings.title + '</div>');
              $(this).find("#menu-button").on('click', function(){
                  
                  $(this).toggleClass('menu-opened');
                  var mainmenu = $(this).next('ul');
                  if (mainmenu.hasClass('open')) { 
                      
                      mainmenu.hide().removeClass('open');
                  }
                  else {
                      
                      mainmenu.show().addClass('open');
                      if (settings.format === "dropdown") {
                          mainmenu.find('ul').show();
                      }
                  }
              });

              multiTg = function() {
                  
                  navimenu.find(".has-sub").prepend('<span class="submenu-button"></span>');
                  navimenu.find('.submenu-button').on('click', function() {
                      
                      $(this).toggleClass('submenu-opened');
                      if ($(this).siblings('ul').hasClass('open')) {
                          $(this).siblings('ul').removeClass('open').hide();
                      }
                      else {
                          $(this).siblings('ul').addClass('open').show();
                      }
                  });
              };

              if (settings.format === 'multitoggle') multiTg();
              else navimenu.addClass('dropdown');
          }

          else if (settings.format === 'select')
          {
              navimenu.append('<select style="width: 100%"/>').addClass('select-list');
              var selectList = navimenu.find('select');
              selectList.append('<option>' + settings.title + '</option>', 
                                {"selected": "selected", "value": ""});
              navimenu.find('a').each(function() {
                  var element = $(this), indentation = "";
                  for (i = 1; i < element.parents('ul').length; i++)
                  {
                      indentation += '-';
                  }
                  selectList.append('<option value="' + $(this).attr('href') + '">' + indentation + element.text() + '</option>');
              });
              selectList.on('change', function() {
                  window.location = $(this).find("option:selected").val();
              });
          }
          
          if (settings.sticky === true) navimenu.css('position', 'fixed');
          resizeFix = function() {
              if ($(window).width() > settings.breakpoint) {
                  navimenu.find('ul').show();
                  navimenu.removeClass('small-screen');
                  if (settings.format === 'select') {
                      navimenu.find('select').hide();
                  }
                  else {
                      navimenu.find("#menu-button").removeClass("menu-opened");
                  }
              }
              if ($(window).width() <= settings.breakpoint && !navimenu.hasClass("small-screen")) {
                  navimenu.find('ul').hide().removeClass('open');
                  navimenu.addClass('small-screen');
                  if (settings.format === 'select') {
                      navimenu.find('select').show();
                  }
              }
          };
          resizeFix();
          return $(window).on('resize', resizeFix);
      });
  };
})(jQuery);

$(function() {

    var navimenu = $("#navimenu").append("<ul></ul>").find("ul").first();
    navimenu.append("<li><a href='index.html'>Home</a></li>");
    navimenu.append("<li><a href='about.html'>About</a><ul><li><a href='about.html#mission'>Our Mission</a></li><li><a href='about.html#team'>Our Team</a></li></ul></li>");
    navimenu.append("<li><a href='participate.html'>Participate</a><ul><li><a href='participate.html#students'>Students</a></li><li><a href='participate.html#partners'>Partners</a></li><li><a href='participate.html#calendar'>Event Calendar</a></li><li><a href='donate.html'>Donate</a></li></ul></li>");
    navimenu.append("<li><a href='projects.html'>Projects</a><ul><li><a href='projects.html#current'>Current Innovations</a></li><li><a href='projects.html#previous'>Previous Works</a></li></ul></li>");
    navimenu.append("<li><a href='contact.php'>Contact</a></li>");
    navimenu.append("<li><a href='updates.php'>Login</a></li>");
    
    $("#navimenu").menumaker({
        title: "Menu",
        breakpoint: 768,
        format: "multitoggle"
    });
});