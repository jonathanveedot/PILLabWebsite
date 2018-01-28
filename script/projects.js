var current = 
    {
        c1 : {title : "Higi Machines", img : "higi.png", desc : "Patient health data continues to advance as a significant source of information available for analysis and interpretation. To connect data from various sources and make meaning of them, Higi allows patients to aggregate data in a single account and track their health. This account can be managed at Higi machines, which also collect patient data (weight, BMI, pulse, blood pressure). We have recently installed a Higi machine at the School of Pharmacy to help determine what drives user engagement and understand how pharmacists can use of this data to improve operations. "}, 
        c2 : {title : "MEDIvate", img : "MEDIvate.png", desc : "At discharge, patients leave with complex medication regimens and limited instruction, but these medication lists often differ from the regimens known to some service providers. How can a patient be provided access to a constantly updated medication list accompanied by informational resources? The solution is to provide a patient with a QR code linked to an updating medication list associated with an application that educates patients about their medication. Clinicians can use the QR code to support their practice and access an up-to-date medication list for each patient. "},
        c3 : {title : "PharmGenius", img : "PharmGenius.png", desc: "We want to encourage students to become more engaged in studying for the curriculum offered here at the School of Pharmacy. We aim to engage students with our new pharmacy quiz game, PharmGenius. This system is intended to prepare students for assessments within various courses, and allows users to rack up points while racing against the clock. Students are encouraged to submit contributions to the question bank so that they can stump their fellow classmates while gaining a deeper understanding of the subject. "}
    };

var previous = 
    {
        p1 : {title : "Badging Credentials", img : "BadgingCredentials.png", desc : "Clinicians across multiple specialties are limited in documenting professional growth. Board and specialty certifications are exhaustive processes, and continuing education requirements are superficial and not stackable. The PILLab was approached to create a system to engage clinicians across multiple specialties by leveraging digital badges, as recognized by the University of Pittsburgh. "}, 
        p2 : {title : "PharmDash", img : "PharmDash.png", desc : "Pharamacists do more than just process prescriptions and dispense medications - they provide general healthcare consultation, connect with healthcare and insurance providers to satisfy the needs of a patient, and manage staff, inventory and records. Prioritizing tasks is essential to delivering quality services and ensuring patient satisfaction. PharmDash is an information technology dashboard that has been developed and implemented to support pharmacy operations and efficiently manage tasks while minimizing patient wait-times. "},
        p3 : {title : "RxPedition", img : "rxpedition.png", desc: "This is an interactive serious game about drug development that is designed to teach pharmacy students about the process of bringing a drug candidate to market. Groups of students play the role of a small pharmaceutical company. Each group is tasked with identifying a disease state and indication of interest, exploring the preclinical phase, designing clinical trials, providing press releases at critical milestones, presenting results to the FDA for continued approval, and developing a drug label. "}
    };

function insert_current_projects()
{
    var div_current = $('#current-projects');
    for (var key in current) 
    {
        var project = current[key];
        div_current.append('<h3 class=\"project-title\">'+project['title']+'</h3>')
        var div = $('<div class=\"body-div\"></div>');
        div.append('<div class=\"img-container\"><img class=\"project-img\" src=\"img/projects/'+project['img']+'\" alt=\"'+project['title']+'\"/></div>');
        div_current.append(div);
        div = $('<div class=\"body-div\"></div>');
        div.append('<p class=\"smaller-text\">'+project['desc']+'</p>');
        div_current.append(div);
    }
}

function insert_previous_projects()
{
    var div_previous = $('#previous-projects');
    for (var key in previous) 
    {
        var project = previous[key];
        div_previous.append('<h3 class=\"project-title\">'+project['title']+'</h3>')
        var div = $('<div class=\"body-div\"></div>');
        div.append('<div class=\"img-container\"><img class=\"project-img\" src=\"img/projects/'+project['img']+'\" alt=\"'+project['title']+'\"/></div>');
        div_previous.append(div);
        div = $('<div class=\"body-div\"></div>');
        div.append('<p class=\"smaller-text\">'+project['desc']+'</p>');
        div_previous.append(div);
    }
}

$(
    function()
    {
        insert_current_projects();
        insert_previous_projects();
    }
);