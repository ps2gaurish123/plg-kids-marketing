<?php
$page = $_GET['page'] ?? 'index';
$allowed = ['index', 'features', 'lessons', 'pricing', 'dashboard', 'about', 'contact', 'privacy', 'terms'];
$file = in_array($page, $allowed, true) ? $page . '.html' : 'index.html';
readfile(__DIR__ . '/' . $file);
?>
