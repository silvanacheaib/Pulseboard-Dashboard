<?php
// Database connection settings
$host = "127.0.0.1";
$db_user = "pulseboard_app";
$db_pass = "Pulse2026!";
$db_name = "pulseboard";

// Create the connection
$conn = new mysqli($host, $db_user, $db_pass, $db_name);

// Check if it failed
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}
?>