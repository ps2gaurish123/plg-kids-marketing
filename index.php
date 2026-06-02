<?php
$pageTitle = 'PLG Kids | Active Learning App for Kids';
$pageDescription = 'PLG Kids helps children learn English, phonics, Hindi, numbers, manners, and confidence through active speaking practice and structured lessons.';
require __DIR__ . '/includes/header.php';
require __DIR__ . '/includes/sections.php';
?>
<main>
  <?php hero_section(); ?>
  <?php problem_solution_sections(); ?>
  <section class="section mini-feature-band">
    <article class="mini-card reveal"><?php echo image_tag('speaking-confidence-child', 'Speaking confidence practice', 'mini-image'); ?><h3>Speaking</h3></article>
    <article class="mini-card reveal"><?php echo image_tag('english-phonics-abc', 'English phonics learning', 'mini-image'); ?><h3>Phonics</h3></article>
    <article class="mini-card reveal"><?php echo image_tag('hindi-learning-swar-vyanjan', 'Hindi learning', 'mini-image'); ?><h3>Hindi</h3></article>
    <article class="mini-card reveal"><?php echo image_tag('early-math-counting', 'Early math learning', 'mini-image'); ?><h3>Math</h3></article>
    <article class="mini-card reveal"><?php echo image_tag('manners-daily-routines', 'Manners and routines', 'mini-image'); ?><h3>Manners</h3></article>
    <article class="mini-card reveal"><?php echo image_tag('story-time-child', 'Story time learning', 'mini-image'); ?><h3>Stories</h3></article>
  </section>
  <?php app_preview_section(); ?>
  <?php confidence_section(); ?>
  <?php parents_section(); ?>
  <?php modules_section(); ?>
  <?php difference_section(); ?>
  <?php trust_section(); ?>
  <?php journey_section(); ?>
  <?php pricing_section(); ?>
  <?php testimonials_faq_section(); ?>
  <?php final_cta_section(); ?>
</main>
<?php require __DIR__ . '/includes/footer.php'; ?>
