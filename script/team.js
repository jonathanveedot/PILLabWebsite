var leaders = 
    {
        l1 : {title : "Idea Man", img : "rsmith.png", name : "Randall Smith, PhD"}, 
        l2 : {title : "Advocate", img : "mmcgivney.png", name : "Melissa McGivney, PharmD"},
        l3 : {title : "Catalyst", img : "aali.png", name : "Ameer Ali, PharmD"},
        l4 : {title : "Connector", img : "rpatel.png", name : "Ravi Patel, PharmD"},
    };

var associates = 
    {
        a1 : {title : "The TV Holder", img : "malilio.png", name : "Marijanel Alilio", linkedin: ""}, 
        a2 : {title : "The Dapper Developer", img : "jkovac.png", name : "Jonathan Kovac", linkedin: ""}, 
        a3 : {title : "Professional Thinker", img : "rkonicki.png", name : "Robyn Konicki", linkedin: ""}, 
        a4 : {title : "The Wizard", img : "dleung.png", name : "Douglas Leung", linkedin: ""}, 
        a5 : {title : "Innovative Evangelist", img : "elecato.png", name : "Eric LeCato", linkedin: ""} 
    };

var alumni = 
    {
        a1 : {img : "kmccormick.png", name : "Kyle McCormick", linkedin : ""}, 
        a2 : {img : "bantinopoulos.png", name : "Brandon Antinopoulos", linkedin : ""} 
    };

var advisors = 
    {
        a1 : {name : "Al LaCamera", position : "Consultant, R&amp;D"}, 
        a2 : {name : "Jim Mastrian", position : "Former COO, Rite Aid"}, 
        a3 : {name : "Kelly Bobby", position : "Adjunct Faculty and Pharmacist"}, 
        a4 : {name : "Lawrence Bergenfield", position : "CEO, Magnetify Corp"}, 
        a5 : {name : "Ted Search", position : "CEO, Skipta"},
        a6 : {name : "Anthony Marlowe", position : "CEO, Mass Markets"}
    };

function insert_leaders()
{
    var div_leadership = $('#leadership');
    var last = Object.keys(leaders).length;
    var i = 0;
    for (var key in leaders) 
    {
        ++i;
        if (i == last && i%2 != 0)
        {
            var div = $('<div class=\"body-div-wide\"></div>');
            div_leadership.append(div); 
        }
        else 
        {
            var div = $('<div class=\"body-div\"></div>');
            div_leadership.append(div);
        }
            
        var leader = leaders[key];
        div.append('<h3>'+leader['title']+'</h3>');
        div.append('<div class=\"img-container\"><img class=\"team\" src=\"img/team/'+leader['img']+'\" alt=\"'+leader['name']+'\"/></div>');
        div.append('<p class=\"team-name\">'+leader['name']+'</p>');
    }
}

function insert_associates()
{
    var div_associates = $('#associates');
    var last = Object.keys(associates).length;
    var i = 0;
    for (var key in associates) 
    {
        ++i;
        if (i == last && i%2 != 0)
        {
            var div = $('<div class=\"body-div-wide\"></div>');
            div_associates.append(div); 
        }
        else 
        {
            var div = $('<div class=\"body-div\"></div>');
            div_associates.append(div);
        }
            
        var associate = associates[key];
        div.append('<h3>'+associate['title']+'</h3>');
        div.append('<div class=\"img-container\"><img class=\"team\" src=\"img/team/'+associate['img']+'\" alt=\"'+associate['name']+'\"/></div>');
        div.append('<p class=\"team-name\"><a href=\"'+associate['linkedin']+'\"><img src="img/team/LinkedIn.png" alt="LinkedIn"/></a>&nbsp;'+associate['name']+'</p>');
    }
}

function insert_alumni()
{
    var div_alumni = $('#alumni');
    var last = Object.keys(alumni).length;
    var i = 0;
    for (var key in alumni) 
    {
        ++i;
        if (i == last && i%2 != 0)
        {
            var div = $('<div class=\"body-div-wide\"></div>');
            div_alumni.append(div); 
        }
        else 
        {
            var div = $('<div class=\"body-div\"></div>');
            div_alumni.append(div);
        }
            
        var alum = alumni[key];
        div.append('<div class=\"img-container\"><img class=\"team\" src=\"img/team/'+alum['img']+'\" alt=\"'+alum['name']+'\"/></div>');
        div.append('<p class=\"team-name\"><a href=\"'+alum['linkedin']+'\"><img src="img/team/LinkedIn.png" alt="LinkedIn"/></a>&nbsp;'+alum['name']+'</p><br><br>');
    }
}

function insert_advisors()
{
    var div_advisors = $('#advisors');
    var last = Object.keys(advisors).length;
    var i = 0;
    for (var key in advisors) 
    {
        ++i;
        if (i == last && i%2 != 0)
        {
            var div = $('<div class=\"body-div-wide\"></div>');
            div_advisors.append(div); 
        }
        else 
        {
            var div = $('<div class=\"body-div\"></div>');
            div_advisors.append(div);
        }
            
        var advisor = advisors[key];
        div.append('<p class="team-name">'+advisor['name']+'</p>');
        div.append('<p class="team-pos">'+advisor['position']+'</p>');
    }
}

$(
    function()
    {
        insert_leaders();
        insert_associates();
        insert_alumni();
        insert_advisors();
    }
);




    
        