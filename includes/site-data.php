<?php
$navLinks = [
  ['Home', 'index.php'],
  ['Features', 'features.php'],
  ['Lessons', 'lessons.php'],
  ['Pricing', 'pricing.php'],
  ['Parent Dashboard', 'dashboard.php'],
  ['Contact', 'contact.php'],
];

$features = [
  ['Two-Way Speaking Practice', 'Children hear a question, speak their answer, and get gentle feedback.', 'icon-microphone'],
  ['Confidence Building', 'Daily practice encourages children to try, repeat, and speak without fear.', 'icon-confidence'],
  ['Speech Confidence Support', 'Helpful for shy, hesitant, or developing speakers who need patient repeat practice.', 'speaking-confidence-child'],
  ['Structured Lessons', 'Step-by-step learning across letters, phonics, numbers, words, stories, manners, and routines.', 'icon-path'],
  ['Parent-Friendly Progress', 'Parents can see what the child practiced, where they improved, and what needs more attention.', 'icon-dashboard'],
];

$modules = [
  ['English Letters A-Z', 'icon-abc'],
  ['ABC Phonics', 'icon-phonics'],
  ['Simple Words', 'icon-repeat'],
  ['Pronunciation Practice', 'icon-microphone'],
  ['Counting and Numbers', 'icon-numbers'],
  ['Addition', 'icon-addition'],
  ['Subtraction', 'icon-subtraction'],
  ['Shapes', 'icon-shapes'],
  ['Fruits and Vegetables', 'icon-fruits'],
  ['Animals', 'icon-animals'],
  ['Vehicles', 'icon-vehicles'],
  ['Body Parts', 'icon-body'],
  ['Emotions', 'icon-emotions'],
  ['Good Manners', 'icon-manners'],
  ['Daily Routines', 'icon-routines'],
  ['Story Time', 'icon-story'],
  ['Hindi Swar', 'icon-hindi'],
  ['Hindi Vyanjan', 'icon-hindi'],
  ['Hindi Words', 'hindi-learning-swar-vyanjan'],
  ['Practical Life Communication', 'icon-conversation'],
];

$trustCards = [
  'Child-safe learning flow',
  'No distracting clutter',
  'Gentle feedback',
  'Parent progress view',
  'Offline-friendly PWA direction',
  'English-first with Hindi support',
  'Built for Indian and global children',
  'No passive scrolling',
];

$screens = [
  ['Home', 'app-home-screen', 'Letters, Numbers, Phonics, Hindi, Stories, and Manners in one calm home screen.'],
  ['Speaking Practice', 'app-speaking-practice-screen', 'A large microphone button, friendly tutor, and simple prompts.'],
  ['Hindi Lesson', 'app-hindi-lesson-screen', 'Hindi letters, audio support, and repeat practice.'],
  ['Math Practice', 'app-math-practice-screen', 'Visual number practice with large answer cards.'],
  ['Parent Dashboard', 'app-parent-dashboard-screen', 'Today practice, spoken words, completed lessons, and next steps.'],
];

$faqs = [
  ['What age group is PLG Kids for?', 'PLG Kids is built mainly for children aged 2 to 8.'],
  ['Is this only an English learning app?', 'No. It includes English, phonics, numbers, math, Hindi letters, manners, daily routines, and practical communication.'],
  ['How is this different from videos?', 'Videos are mostly passive. PLG Kids asks the child to speak, answer, repeat, and participate.'],
  ['Does the app help shy or hesitant children?', 'Yes. PLG Kids supports shy, hesitant, and developing speakers with gentle prompts and repeat practice. It is not a medical or speech therapy replacement.'],
  ['Can parents track learning?', 'Yes. The parent dashboard shows practice, progress, and areas that need attention.'],
  ['Does it work on mobile?', 'Yes. The design is mobile-first and PWA-friendly.'],
  ['Can it work offline?', 'Some lessons and cached content should work offline. Speech recognition and login features may need internet depending on device support.'],
];

function asset_path($name) {
  return 'public/assets/' . $name . '.webp';
}

function image_tag($name, $alt = '', $class = '') {
  $src = asset_path($name);
  return '<img class="' . htmlspecialchars($class) . '" src="' . htmlspecialchars($src) . '" alt="' . htmlspecialchars($alt) . '" loading="lazy" decoding="async">';
}
?>
