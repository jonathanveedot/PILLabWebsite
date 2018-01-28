<!DOCTYPE html>
<html lang="en">

<head>

    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <title>PILLab: (Re)imagine Pharmacy</title>

    <link rel="icon" href="img/header_and_footer/favicon.png" sizes="16x16" type="image/png">

    <link rel="stylesheet" type="text/css" href="style/navigation.css">
    <link rel="stylesheet" type="text/css" href="style/stylesheet.css">
    <link rel="stylesheet" type="text/css" href="style/updates.css">

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

        <h1>Partner Updates</h1>

        <div class="banner">
            <img src="img/banners/updates-banner.png" alt="Partner Updates">
        </div>

        <div class="body-div-wide">
            <p>
                Partners, log in to recieve announcements and detailed updates about the projects you are affiliated with. Please <a href="contact.php">contact us</a> if you need to recieve login credentials for access.
            </p>
            <br><br>
            <div id="login-form">
                <form action="" method="POST">
                    <label>email:</label><br>
                    <input type="text" name="username" size="31" placeholder=" enter email" required><br>
                    <label>password:</label><br>
                    <input type="password" name="password" size="31" placeholder=" enter password" required><br>
                    <br>
                    <input id="login-button" name="submit" type="submit" value="Login" disabled="true">
                    <input type="checkbox" checked="checked"> remember me<br>
                </form>
                <br>
                <span class="forgot-password">Forgot your <a href="">password</a>?</span><br>
                <br>
                <br>
                <span><?php /*echo $error;*/ ?></span>
            </div>
        </div>
        
        <div class="body-div-wide"><p>&nbsp;</p></div>

    </div>

    <div id="footer-wrap"></div>

</div>

</body>

</html>