<?php
$pageTitle = 'Parent Dashboard | PLG Kids';
$pageDescription = 'Preview the PLG Kids parent dashboard for speaking practice, completed lessons, new words, confidence, and suggested next lessons.';
require __DIR__ . '/includes/header.php';
require __DIR__ . '/includes/sections.php';
?>
<main>
  <section class="page-hero section">
    <p class="eyebrow">Parent clarity</p>
    <h1>Parent Dashboard</h1>
    <p>See what your child practiced, what improved, and where more speaking practice may help.</p>
  </section>
  <?php parents_section(); ?>
  <?php app_preview_section(); ?>
</main>
<?php require __DIR__ . '/includes/footer.php'; ?>
