<?php
require_once __DIR__ . '/site-data.php';
$pageTitle = $pageTitle ?? 'PLG Kids | Active Learning App for Kids';
$pageDescription = $pageDescription ?? 'PLG Kids helps children learn English, phonics, Hindi, numbers, manners, and confidence through active speaking practice and structured lessons.';
?>
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="theme-color" content="#1b2b52">
    <meta name="description" content="<?php echo htmlspecialchars($pageDescription); ?>">
    <meta property="og:title" content="<?php echo htmlspecialchars($pageTitle); ?>">
    <meta property="og:description" content="<?php echo htmlspecialchars($pageDescription); ?>">
    <meta property="og:type" content="website">
    <link rel="icon" href="public/assets/favicon-plg-kids.webp">
    <link rel="manifest" href="manifest.webmanifest">
    <link rel="stylesheet" href="src/styles.css">
    <title><?php echo htmlspecialchars($pageTitle); ?></title>
  </head>
  <body>
    <header class="site-header">
      <a class="brand" href="index.php" aria-label="PLG Kids home">
        <?php echo image_tag('plg-kids-logo', '', 'brand-logo'); ?>
        <span>PLG Kids</span>
      </a>
      <button class="menu-toggle" aria-label="Open navigation" data-menu-toggle>Menu</button>
      <nav class="nav-links" aria-label="Main navigation" data-nav>
        <?php foreach ($navLinks as $link): ?>
          <a href="<?php echo htmlspecialchars($link[1]); ?>"><?php echo htmlspecialchars($link[0]); ?></a>
        <?php endforeach; ?>
        <a class="nav-cta" href="pricing.php">Start Learning</a>
      </nav>
    </header>
