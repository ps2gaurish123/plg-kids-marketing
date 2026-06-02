<?php
$pageTitle = 'Features | PLG Kids';
$pageDescription = 'Explore PLG Kids features for active speaking practice, confidence building, phonics, Hindi, math, manners, stories, and parent progress.';
require __DIR__ . '/includes/header.php';
require __DIR__ . '/includes/sections.php';
?>
<main>
  <section class="page-hero section">
    <p class="eyebrow">PLG Kids</p>
    <h1>Features</h1>
    <p>Active two-way learning for children who need meaningful practice, not passive screen time.</p>
    <a class="button primary" href="pricing.php">Start Active Learning</a>
  </section>
  <?php problem_solution_sections(); ?>
  <?php confidence_section(); ?>
  <?php trust_section(); ?>
</main>
<?php require __DIR__ . '/includes/footer.php'; ?>
