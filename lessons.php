<?php
$pageTitle = 'Lessons | PLG Kids';
$pageDescription = 'See PLG Kids learning modules for English, phonics, Hindi, numbers, math, manners, routines, stories, and communication.';
require __DIR__ . '/includes/header.php';
require __DIR__ . '/includes/sections.php';
?>
<main>
  <section class="page-hero section">
    <p class="eyebrow">Structured learning</p>
    <h1>Lessons</h1>
    <p>Short, clear modules help children listen, speak, answer, repeat, and grow step by step.</p>
    <a class="button primary" href="pricing.php">See Plans</a>
  </section>
  <?php modules_section(); ?>
  <?php journey_section(); ?>
</main>
<?php require __DIR__ . '/includes/footer.php'; ?>
