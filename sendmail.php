<?php
/**
 * Contact form mailer for decnox.com
 * Upload this file to: public_html/sendmail.php
 *
 * Receives POST (JSON): name, email, message
 * Sends email to office@decnox.com with Reply-To set to sender.
 * Returns JSON: { "success": true|false, "message": "..." }
 */

header('Content-Type: application/json; charset=utf-8');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit;
}

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['success' => false, 'message' => 'Method not allowed']);
    exit;
}

$input = json_decode(file_get_contents('php://input'), true);
if (!is_array($input)) {
    $input = $_POST;
}

$name    = isset($input['name'])    ? trim((string) $input['name'])    : '';
$email   = isset($input['email'])  ? trim((string) $input['email'])   : '';
$message = isset($input['message']) ? trim((string) $input['message']) : '';

if ($name === '') {
    http_response_code(400);
    echo json_encode(['success' => false, 'message' => 'Name is required.']);
    exit;
}

if ($email === '') {
    http_response_code(400);
    echo json_encode(['success' => false, 'message' => 'Email is required.']);
    exit;
}

if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    http_response_code(400);
    echo json_encode(['success' => false, 'message' => 'Please enter a valid email address.']);
    exit;
}

if ($message === '') {
    http_response_code(400);
    echo json_encode(['success' => false, 'message' => 'Message is required.']);
    exit;
}

$to       = 'office@decnox.com';
$subject  = 'New Contact Message from Website';
$bodyText = "Name: $name\nEmail: $email\n\nMessage:\n$message";
$bodyHtml = '<p><strong>Name:</strong> ' . htmlspecialchars($name, ENT_QUOTES, 'UTF-8') . '</p>'
    . '<p><strong>Email:</strong> ' . htmlspecialchars($email, ENT_QUOTES, 'UTF-8') . '</p>'
    . '<p><strong>Message:</strong></p><p>' . nl2br(htmlspecialchars($message, ENT_QUOTES, 'UTF-8')) . '</p>';

$headers = [
    'MIME-Version: 1.0',
    'Content-Type: text/html; charset=UTF-8',
    'From: ' . $to,
    'Reply-To: ' . $email,
    'X-Mailer: PHP/' . phpversion(),
];

$sent = @mail(
    $to,
    $subject,
    $bodyHtml,
    implode("\r\n", $headers)
);

if ($sent) {
    echo json_encode(['success' => true, 'message' => 'Your message has been sent successfully.']);
} else {
    http_response_code(500);
    echo json_encode(['success' => false, 'message' => 'Failed to send message. Please try again.']);
}
