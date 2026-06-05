<?php
require_once __DIR__ . '/site-data.php';

function hero_section() { ?>
  <section class="hero section" id="home">
    <div class="hero-copy reveal">
      <p class="eyebrow">Less watching. More talking. More confidence.</p>
      <h1>Help Your Child Speak, Learn, and Grow With Confidence</h1>
      <p class="hero-text">PLG Kids turns screen time into active learning with two-way speaking practice, phonics, numbers, stories, manners, Hindi, English, and confidence-building lessons.</p>
      <p class="speech-note">For shy, hesitant, or developing speakers, PLG Kids gives patient repeat practice that supports clearer speaking and everyday confidence.</p>
      <div class="hero-actions">
        <a class="button primary" href="pricing.php">Start Active Learning -></a>
        <a class="button secondary" href="#preview">Watch How It Works</a>
      </div>
      <p class="trust-line">Built for young learners. Designed for parents who want meaningful screen time.</p>
    </div>
    <div class="hero-art reveal">
      <?php echo image_tag('hero-child-ai-tutor', 'Child speaking to a friendly tutor on a tablet', 'hero-image'); ?>
      <div class="floating-card voice-card"><span>Child speaks back</span></div>
    </div>
    <div class="pain-strip">
      <article class="pain-card"><span>Videos do not answer back</span></article>
      <article class="pain-card"><span>Kids need real speaking practice</span></article>
      <article class="pain-card"><span>Confidence grows through participation</span></article>
    </div>
  </section>
<?php }

function problem_solution_sections() {
  global $features; ?>
  <section class="section split problem" id="problem">
    <div class="section-copy reveal">
      <p class="eyebrow">The parent problem</p>
      <h2>Children Are Watching More, But Speaking Less</h2>
      <p>Short videos and passive apps can keep children busy, but they rarely help them speak with confidence. Children build language and thinking skills when they listen, answer, repeat, ask, and try again.</p>
      <p>Some children are naturally shy. Some speak slowly or need more time to form words. PLG Kids gives them a calm space to practice without pressure.</p>
    </div>
    <div class="image-panel reveal">
      <?php echo image_tag('passive-vs-active-learning', 'Passive screen time compared with active learning', 'section-image'); ?>
    </div>
  </section>
  <section class="section" id="features">
    <div class="center reveal">
      <p class="eyebrow">The PLG Kids way</p>
      <h2>PLG Kids Makes Learning Active</h2>
      <p>Children learn by listening, speaking, answering, repeating, and trying again with kind guidance.</p>
    </div>
    <div class="feature-grid">
      <?php foreach ($features as $feature): ?>
        <article class="feature-card reveal">
          <?php echo image_tag($feature[2], '', 'feature-icon-img'); ?>
          <h3><?php echo htmlspecialchars($feature[0]); ?></h3>
          <p><?php echo htmlspecialchars($feature[1]); ?></p>
        </article>
      <?php endforeach; ?>
    </div>
  </section>
<?php }

function modules_section() {
  global $modules; ?>
  <section class="section modules" id="lessons">
    <div class="section-heading reveal">
      <div>
        <p class="eyebrow">What children learn</p>
        <h2>English, Hindi, Phonics, Math, Manners, and Stories</h2>
      </div>
      <a class="text-link" href="lessons.php">See Learning Modules -></a>
    </div>
    <div class="module-grid">
      <?php foreach ($modules as $module): ?>
        <article class="module-card reveal">
          <?php echo image_tag($module[1], '', 'module-icon'); ?>
          <span><?php echo htmlspecialchars($module[0]); ?></span>
        </article>
      <?php endforeach; ?>
    </div>
  </section>
<?php }

function app_preview_section() {
  global $screens; ?>
  <section class="section preview" id="preview">
    <div class="center reveal">
      <p class="eyebrow">App preview</p>
      <h2>Big, Clear Screens Made for Young Learners</h2>
      <p>Simple lesson screens help children focus on speaking, listening, and trying again.</p>
    </div>
    <div class="phone-row">
      <?php foreach ($screens as $screen): ?>
        <article class="phone-card reveal">
          <?php echo image_tag($screen[1], $screen[0] . ' app preview', 'phone-image'); ?>
          <h3><?php echo htmlspecialchars($screen[0]); ?></h3>
          <p><?php echo htmlspecialchars($screen[2]); ?></p>
        </article>
      <?php endforeach; ?>
    </div>
  </section>
<?php }

function confidence_section() { ?>
  <section class="section confidence" id="confidence">
    <div class="section-copy reveal">
      <p class="eyebrow">Practice without pressure</p>
      <h2>Built for Children Who Need Practice, Not Pressure</h2>
      <p>PLG Kids gives gentle correction. No harsh failure messages. No pressure. Just patient practice that helps the child speak again, slowly, clearly, and confidently.</p>
      <p>It can support children who are shy, hesitant to speak, or still developing confidence with words. It does not diagnose or treat speech delay, but it encourages safe everyday speaking practice.</p>
      <div class="dialogue">
        <p><strong>Tutor:</strong> "Can you say Apple?"</p>
        <p><strong>Child:</strong> "Apple"</p>
        <p><strong>Tutor:</strong> "Good try. Let us say it slowly together: Ap-ple."</p>
        <p><strong>Child:</strong> "Apple"</p>
        <p><strong>Tutor:</strong> "Great. You said it clearly."</p>
      </div>
    </div>
    <div class="feedback-wrap reveal">
      <?php echo image_tag('gentle-feedback', 'Child receiving gentle speaking feedback', 'section-image'); ?>
      <div class="feedback-card">
        <span>Heard: Apple</span>
        <span>Clarity: Good</span>
        <span>Try again slowly</span>
        <strong>Great effort</strong>
      </div>
    </div>
  </section>
<?php }

function parents_section() { ?>
  <section class="section parents" id="dashboard">
    <div class="section-copy reveal">
      <p class="eyebrow">For parents</p>
      <h2>Know What Your Child Is Actually Learning</h2>
      <p>PLG Kids helps parents move away from random screen time and toward meaningful practice. Each session is built to improve speaking, listening, thinking, and early learning habits.</p>
      <a class="button primary" href="dashboard.php">View Parent Dashboard -></a>
    </div>
    <div class="dashboard-panel reveal">
      <?php echo image_tag('parent-dashboard-preview', 'Parent reviewing child learning dashboard', 'section-image'); ?>
      <div class="dashboard-cards">
        <span>Speaking practice completed</span>
        <span>New words learned</span>
        <span>Letters practiced</span>
        <span>Math attempts</span>
        <span>Confidence score</span>
        <span>Suggested next lesson</span>
      </div>
    </div>
  </section>
<?php }

function difference_section() { ?>
  <section class="section difference">
    <div class="center reveal">
      <p class="eyebrow">Why it feels different</p>
      <h2>More Than Games. More Than Videos. Real Participation.</h2>
    </div>
    <div class="comparison-grid">
      <article class="comparison-card reveal"><h3>Passive videos</h3><p>Child watches.</p><p>No response.</p><p>No speaking check.</p><p>No confidence loop.</p></article>
      <article class="comparison-card reveal"><h3>Traditional learning apps</h3><p>Tap-based learning.</p><p>Some games.</p><p>Limited speaking.</p><p>Limited real conversation.</p></article>
      <article class="comparison-card best reveal"><h3>PLG Kids</h3><p>Child listens.</p><p>Child speaks.</p><p>Child answers.</p><p>Child repeats.</p><p>Child builds confidence.</p><p>Parent sees progress.</p></article>
    </div>
  </section>
<?php }

function trust_section() {
  global $trustCards; ?>
  <section class="section trust">
    <div class="section-heading reveal">
      <div>
        <p class="eyebrow">Parent trust</p>
        <h2>Designed With Safety, Simplicity, and Real Learning in Mind</h2>
      </div>
    </div>
    <div class="trust-grid">
      <?php foreach ($trustCards as $card): ?>
        <article class="trust-card reveal"><span><?php echo htmlspecialchars($card); ?></span></article>
      <?php endforeach; ?>
    </div>
  </section>
<?php }

function journey_section() { ?>
  <section class="section journey">
    <div class="section-heading reveal">
      <div>
        <p class="eyebrow">Learning journey</p>
        <h2>100+ Lessons Added Every Week. More Than 5000 Lessons Already.</h2>
      </div>
    </div>
    <div class="journey-track reveal">
      <div class="journey-step"><strong>Listen</strong></div>
      <div class="journey-step"><strong>Speak</strong></div>
      <div class="journey-step"><strong>Try</strong></div>
      <div class="journey-step"><strong>Learn</strong></div>
      <div class="journey-step"><strong>Build Confidence</strong></div>
    </div>
    <?php echo image_tag('learning-journey-steps', 'Child walking along a learning journey', 'wide-illustration reveal'); ?>
  </section>
<?php }

function pricing_section() { ?>
  <section class="section pricing" id="pricing">
    <div class="center reveal">
      <p class="eyebrow">Pricing</p>
      <h2>Start Your Child's Learning Journey</h2>
    </div>
    <div class="pricing-grid">
      <article class="price-card reveal"><h3>Free Trial</h3><strong>Explore PLG Kids</strong><p>For parents who want to explore.</p><span class="plan-item">Starter lessons</span><span class="plan-item">Speaking demo</span><span class="plan-item">Parent preview</span><a class="button secondary" href="https://plg-kids.com">Start Learning</a></article>
      <article class="price-card reveal"><h3>Monthly Plan</h3><strong>₹499/month</strong><p>Includes full access to structured lessons, speaking practice, Hindi and English modules, stories, manners, and progress tracking.</p><span class="plan-item">Structured lessons</span><span class="plan-item">Speaking practice</span><span class="plan-item">Progress tracking</span><a class="button secondary" href="https://plg-kids.com">Start Learning</a></article>
      <article class="price-card highlighted reveal"><span class="badge">Best value</span><h3>Yearly Plan</h3><strong>₹1999/year</strong><p>Best value for families. Save more with annual learning access.</p><span class="plan-item">Everything in Monthly</span><span class="plan-item">Annual learning access</span><span class="plan-item">Confidence practice</span><a class="button primary" href="https://plg-kids.com">Start Learning</a></article>
    </div>
  </section>
<?php }

function testimonials_faq_section() {
  global $faqs; ?>
  <section class="section testimonials">
    <div class="section-heading reveal"><div><p class="eyebrow">Parent stories</p><h2>What Parents May Say After Daily Practice</h2></div></div>
    <div class="testimonial-grid">
      <article class="testimonial-card reveal"><div class="stars">★★★★★</div><p>"My child started speaking more confidently after daily practice."</p><span>Parent placeholder</span></article>
      <article class="testimonial-card reveal"><div class="stars">★★★★★</div><p>"This feels better than passive videos because my child actually responds."</p><span>Parent placeholder</span></article>
      <article class="testimonial-card reveal"><div class="stars">★★★★★</div><p>"The Hindi and English practice is very useful for home learning."</p><span>Parent placeholder</span></article>
    </div>
  </section>
  <section class="section faq">
    <div class="section-heading reveal"><div><p class="eyebrow">FAQ</p><h2>Questions Parents Ask</h2></div></div>
    <div class="faq-list">
      <?php foreach ($faqs as $faq): ?>
        <details class="faq-item reveal"><summary><?php echo htmlspecialchars($faq[0]); ?></summary><p><?php echo htmlspecialchars($faq[1]); ?></p></details>
      <?php endforeach; ?>
    </div>
  </section>
<?php }

function final_cta_section() { ?>
  <section class="final-cta section" id="contact">
    <div class="reveal">
      <p class="eyebrow">Ready for active learning?</p>
      <h2>Turn Screen Time Into Speaking Time</h2>
      <p>Help your child listen, speak, answer, repeat, and build confidence with structured daily practice.</p>
      <div class="hero-actions">
        <a class="button primary" href="mailto:gaurish@icarryu.com?cc=info@divvyupandgrow.com,divvyupandgrow@gmail.com&amp;subject=PLG%20Kids%20Inquiry">Contact PLG Kids</a>
        <a class="button secondary" href="lessons.php">Build Speaking Confidence</a>
      </div>
    </div>
  </section>
<?php }
?>
