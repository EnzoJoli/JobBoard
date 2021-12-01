<?php

include('database.php'); 

$email = "";
$firstname = "";
$lastname = "";
$password = "";
 

// REGISTER USER

  // receive all input values from the form
  $firstname = mysqli_real_escape_string($connect, $_POST['firstname']);
  $email = mysqli_real_escape_string($connect, $_POST['email']);
  $lastname = mysqli_real_escape_string($connect, $_POST['lastname']);
  $password = mysqli_real_escape_string($connect, $_POST['password']);

  
  // first check the database to make sure 
  // a user does not already exist with the same username and/or email
 // $user_check_query = "SELECT * FROM utilisateur WHERE email='$email'  LIMIT 1";
  //$result = mysqli_query($connect, $user_check_query);
  //$user = mysqli_fetch_assoc($result);
  
//   if ($user) {
//     if ($user['email'] === $email) {
//       array_push($errors, "email already exists");
//     }
//   }


  
  	//$psw = md5($password);//encrypt the password before saving in the database

  	$query = "INSERT INTO utilisateur (Nom, Prenom, email) 
  			  VALUES('$lastname', '$firstname','$email')";
  	mysqli_query($connect, $query);
      echo "You are now logged in" . $firstname;
  	//$_SESSION['username'] = $username;
  	//$_SESSION['success'] = "You are now logged in";
  	//header('location: index.php');

?>