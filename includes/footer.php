    <footer class="footer">
      <div class="footer-brand">
        <?php echo image_tag('plg-kids-logo', '', 'brand-logo'); ?>
        <div>
          <strong>PLG Kids</strong>
          <p>Less watching. More talking. More confidence.</p>
        </div>
      </div>
      <nav aria-label="Footer navigation">
        <a href="index.php">Home</a>
        <a href="features.php">Features</a>
        <a href="lessons.php">Lessons</a>
        <a href="pricing.php">Pricing</a>
        <a href="dashboard.php">Parent Dashboard</a>
        <a href="contact.php">Contact</a>
        <a href="privacy-policy.php">Privacy Policy</a>
        <a href="terms-of-service.php">Terms of Service</a>
        <a href="refund-policy.php">Refund Policy</a>
      </nav>
    </footer>
    <script>
      const toggle = document.querySelector('[data-menu-toggle]');
      const nav = document.querySelector('[data-nav]');
      if (toggle && nav) {
        toggle.addEventListener('click', () => nav.classList.toggle('open'));
      }
      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add('visible');
        });
      }, { threshold: 0.08 });
      document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));
    </script>
  </body>
</html>
