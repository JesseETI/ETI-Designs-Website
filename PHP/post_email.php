<?php
    //variables
    $my_email = "jesseemamalie2@gmail.com";
    $name;
    $post_email;
    $budget;
    $desc;
    $header;
    $subject = "New Project";
    $message;

    if (isset($_POST['submit'])) { //checks if submit button was sent to array $_POST
        $name = $_POST['name'];
        $post_email = $_POST['email'];
        $budget = $_POST['budget'];
        $desc = $_POST['project_desc'];

        //condition to check if name inputted and email is formatted correct
        if (preg_match("/^[a-zA-Z ]*$/", $name) && filter_var($post_email, FILTER_VALIDATE_EMAIL)) {
            $header = "FROM: " . $post_email;
            $header .= "MIME-Version: 1.0 \r\n";
            $header .= "Content-type: text/plain; charset=iso-8859-1\r\n";
            $header .= "X-Priority: 3\r\n";
            $header .= "X-Mailer: PHP". phpversion() ."\r\n";
            $message = "Client Name: " . $name . "\nEmail: " . $post_email .
            "\nBudget: " . $budget . "\nProject Description: " . $desc;

            if (mail($my_email, $subject, $message, $header)) {
                echo "Thank You " .$name . " for reaching out! You'll receive a response soon. " . "<a href='../index.html'>Click here to return to website</a>";
            }
            else {
                echo $name . ", the email failed to send. Please try again. " . "<a href='../index.html'>Click here to return to website</a>";
            }

        }
        else {
            echo $name . ", you seemed to have entered some information incorrectly. Please try again. " . "<a href='../index.html'>Click here to return to website</a>";
        }
    }
?>
