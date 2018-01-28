$(function() {
    
    // need to keep '\n\r' after appended footer-div to maintain text-align property from footer-wrap
    var left_div = '<div class=\"footer-div\" id=\"rss-wrap\"></div>\n\r';
    var left_center_div = '<div class=\"footer-div\" id=\"ad-wrap-a\"></div>\n\r';
    var right_center_div = '<div class=\"footer-div\" id=\"ad-wrap-b\"></div>\n\r';
    var right_div = '<div class=\"footer-div\" id=\"contact-wrap\"></div>\n\r';
    
    var left_html = 
        '<a class=\"twitter-timeline\" data-lang=\"en\" data-width=\"380\" data-height=\"280\" data-theme=\"light\" data-link-color=\"#2B90C8\" href=\"https://twitter.com/PittPIL\"></a>';
    var left_center_html = 
        '<p>(re)imagine, <br>'+
        'innovate, <br>'+
        '&amp; collaborate. <br>'+
        'attend any of <br>'+
        '<a href=\"participate.html#calendar\">OUR EVENTS*</a></p>';
    var right_center_html = 
        '<p>Check out our collaborators at <br>'+
        '<a href="http://learningtechlab.pitt.edu/" target="_blank">Learning Tech Lab*</a></p>';
    var right_html = 
        '<p id=\"contact-info\"><br>'+
        '<img src=\"img/header_and_footer/house.png\" alt=\"Address\">&nbsp;PILLAB <br>'+
        '&nbsp; &nbsp; &nbsp; &nbsp;Salk Hall #641 <br>'+
        '&nbsp; &nbsp; &nbsp; &nbsp;3501 Terrace St <br>'+
        '&nbsp; &nbsp; &nbsp; &nbsp;Pittsburgh, PA 15213 <br>'+
        '<img src=\"img/header_and_footer/telephone.png\" alt=\"Telephone\">  412.648.8551 <br>'+
        '<img src=\"img/header_and_footer/email.png\" alt=\"Email\">  PharmacyInnovationLab@gmail.com<br>'+
        '<img src=\"img/header_and_footer/twitter.png\" alt=\"Twitter\">  @PittPIL</p>'+
        '<div id=\"terms\">'+
        'Copyright 2017. Pharmacy Innovation Launch Lab.<br><a href=\"terms-and-conditions.html\">Terms and Conditions</a>.'+
        '</div>';
    
    var footer = $('#footer-wrap');
    
    footer.append(left_div);
    footer.append(left_center_div);
    footer.append(right_center_div);
    footer.append(right_div);
    
    var left_wrap = $('#rss-wrap');
    var left_center_wrap = $('#ad-wrap-a');
    var right_center_wrap = $('#ad-wrap-b');
    var right_wrap = $('#contact-wrap');
    
    left_wrap.append(left_html);
    left_center_wrap.append(left_center_html);
    right_center_wrap.append(right_center_html);
    right_wrap.append(right_html);
    
});