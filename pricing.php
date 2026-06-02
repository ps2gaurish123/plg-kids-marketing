<?php
$pageTitle = 'Pricing | PLG Kids';
$pageDescription = 'PLG Kids pricing for active speaking practice, structured lessons, Hindi and English modules, and parent progress tracking.';
require __DIR__ . '/includes/header.php';
require __DIR__ . '/includes/sections.php';
?>
<main>
  <section class="page-hero section">
    <p class="eyebrow">Simple plans</p>
    <h1>Pricing</h1>
    <p>Choose meaningful screen time that supports speaking practice, early learning, and confidence.</p>
  </section>
  <?php pricing_section(); ?>
  <?php testimonials_faq_section(); ?>
</main>
<?php require __DIR__ . '/includes/footer.php'; ?>
