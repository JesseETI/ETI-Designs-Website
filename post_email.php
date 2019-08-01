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
			$subject = "NEW PROJECT";
			$header = "From:" . $post_email . "\n";
			$header .= "MIME-Version: 1.0 \n";
 			$header .= "Content-type: text/html; charset=iso-8859-1 \n";
			$message = "Client Name: " . $name . "<br><br> Email: " . $post_email .
		 	"<br><br>Budget: " . $budget . "<br><br>Project Description: " . $desc;
		 
			mail($my_email, $subject, $message, $header); //email function using parameters above
			header("Location: successful.html"); //redirect to success page
		}
		
		else {
			 header("Location: unsuccessful.html"); //redirect to failure page 
		}
	}
	
	else {
		header("Location: unsuccessful.html");
	}
?>