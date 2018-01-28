<!DOCTYPE html>
<html lang="en">

<head>

    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <title>PILLab: (Re)imagine Pharmacy</title>

    <link rel="icon" href="img/favicon.png" sizes="16x16" type="image/png">

    <link rel="stylesheet" type="text/css" href="style/navigation.css">
    <link rel="stylesheet" type="text/css" href="style/stylesheet.css">
    <link rel="stylesheet" type="text/css" href="style/contact-form.css">

    <script src="script/jquery-1.11.1.min.js"></script>
    <script src="script/navigation.js"></script>
    <script src="script/footer.js"></script>
    <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
    
</head>

<body>

<div id="wrap">
    
    <div id="header-wrap">
        
        <a href="index.html"><img id="logo" src="img/header_and_footer/logo.png" alt="PILLab Logo"></a>
        <a href="https://www.pharmacy.pitt.edu/"  target="_blank" ><img id="apply-pittpharm" src="img/header_and_footer/apply-for-pittpharm.png" alt="Apply for PittPharm"></a>
        <div id="navimenu"><ul></ul></div>
        
    </div>

    <div id="body-wrap">

        <h1>Contact</h1>
        
        <div class="banner">
            <img src="img/banners/contact-banner.png" alt="Contact Banner">
        </div>

        <div class="body-div-wide">
            <div id="contact-form">
            <?php
            if(isset($_POST['submit']))
            {
                // email recipient and subject-line
                $email_to = "pharmacyinnovationlab@gmail.com";
                $email_subject = "PILLab Website Contact Form";
                
                // error handling
                function died($error)
                {
                    echo "We are very sorry, but an error has occurred with the form you have submitted. ";
                    echo "Any errors appear below. <br><br>";
                    echo $error."<br><br>";
                    echo "Please go back and fix any errors. <br><br>";
                    die();
                }
                
                // validate the expected data exists
                if(!isset($_POST['name']) || 
                   empty($_POST['name']) || 
                   !isset($_POST['status']) || 
                   empty($_POST['status']) ||  !isset($_POST['organization']) || 
                   empty($_POST['organization']) || 
                   !isset($_POST['email']) || 
                   empty($_POST['email']) || 
                   !isset($_POST['interests']) || 
                   empty($_POST['interests']) ||
                   !isset($_POST['comments']) || 
                   empty($_POST['comments']))
                {
                    died('We apologize, but there seems to be a problem with the data that you submitted. ');
                }
                
                $name = $_POST['name']; // required
                $status = $_POST['status']; // required
                $organization = $_POST['organization']; // required
                $email_from = $_POST['email']; // required
                $comments = $_POST['comments']; // required
                
                // Validation
                $error_message = "";
                $email_exp = "/^[A-Za-z0-9._%-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/";
                $string_exp = "/^[A-Za-z .'-]+$/";
                
                if(!preg_match($email_exp, $email_from))
                {
                    $error_message .= 'The email address that you entered does not appear to be valid. <br>';
                }
                if(!preg_match($string_exp, $name))
                {
                    $error_message .= 'The name that you entered does not appear to be valid. <br>';
                }
                // comments need validation
                if(strlen($error_message) > 0)
                {
                    died($error_message);
                }
                
                // format email
                $email_message = "Form details below.\n\n";
                
                function clean_string($string)
                {
                    $bad = array("content-type", "bcc:", "cc:", "href");
                    return str_replace($bad, "", $string);
                }
                
                $email_message .="Name: ".clean_string($name)."\n";
                $email_message .="Email: ".clean_string($email_from)."\n";
                $email_message .="Status: ".clean_string($status)."\n";
                $email_message .="Organization: ".clean_string($organization)."\n";
                $email_message .="Interests: ";
                if (is_array($_POST['interests']))
                {
                    $lastElement = end($_POST['interests']);
                    foreach($_POST['interests'] as $value)
                    {
                        if($value == $lastElement)
                        {
                            $email_message .=$value."\n";
                        }
                        else
                        {
                            $email_message .=$value.", ";
                        }
                    }
                } 
                else 
                {
                    $value = $_POST['interests'];
                    $email_message .=$value."\n";
                }
                $email_message .="Comments: ".clean_string($comments)."\n";
                
                // create email headers
                $headers = 'From: '.$email_from."\r\n".
                    'Reply-To: '.$email_from."\r\n".
                    'X-Mailer: PHP/'.phpversion();
                @mail($email_to, $email_subject, $email_message, $headers);
                echo "<br>Mail sent. Thank you, ".$name.". We look forward to collaborating!<br>";
            }
            ?>
            
            <br>
            <form action="<?php echo htmlspecialchars($_SERVER["PHP_SELF"]);?>" method="post">
            <label for="name">Hello, my name is </label>
            <input id="name" class="" name="name" type="text"  placeholder="(name)" style="width: 175px;" required />
            <label>, </label><br>
            <label>and I am a </label>
            <select name="status" style="width: 240px;" required>
                <option value="" disabled selected> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(select)</option>
                <option value="student">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Student</option>
                <option value="partner">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Potential Partner</option>
            </select><br>
            <label for="org">affiliated with </label>
            <input id="org" class="" name="organization" type="text"  placeholder="(school or organization)" style="width: 230px;" required />
            <label>. </label><br><br>

            <label for="email">My e-mail address is </label>
            <input id="email" class="" name="email" type="text"  placeholder="(e-mail)" style="width: 150px;" required /><label> , </label><br>

            <label>and I am interested in :</label><br>

            <input type="checkbox" id="discuss_new_ideas" name="interests[]" value="discussing new ideas">
            <label for="discuss_new_ideas">discussing new ideas</label><br>

            <input type="checkbox" id="explore_info_solutions" name="interests[]" value="exploring information solutions">
            <label for="explore_info_solutions">exploring information solutions</label><br>

            <input type="checkbox" id="data_mngt_plan" name="interests[]" value="data management planning">
            <label for="data_mngt_plan">data management planning</label><br>

            <input type="checkbox" id="market_analyses" name="interests[]" value="conducting market analyses">
            <label for="market_analyses">conducting market analyses</label><br>

            <input type="checkbox" id="development" name="interests[]" value="developing software and products">
            <label for="development">developing software and products</label><br><br>

            <label>Here are some details regarding my interests: <br><br></label>
            <textarea name="comments" rows="8" cols="32" required></textarea><br>
            <input type="submit" name="submit" value="Submit Message">
            </form>
            </div>
        </div>
        <div class="body-div-wide"><p>&nbsp;</p></div>
        <div class="body-div-wide"><p>&nbsp;</p></div>


    </div>

    <div id="footer-wrap"></div>

</div>

</body>



</html>