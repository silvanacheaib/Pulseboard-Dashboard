<?php
// Allow our React app (running on a different port) to call this file
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json");

// Reuse the connection we already built
include "db_connect.php";

// Ask the database for all transactions, newest first
$sql = "SELECT id, transaction_code, customer_name, channel, amount, status, transaction_date FROM transactions ORDER BY transaction_date DESC";
$result = $conn->query($sql);

// Turn the database rows into a plain array
$transactions = [];
while ($row = $result->fetch_assoc()) {
    $transactions[] = $row;
}

// Output that array as JSON text
echo json_encode($transactions);

$conn->close();
?>