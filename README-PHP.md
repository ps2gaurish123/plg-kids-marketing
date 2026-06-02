# PLG Kids PHP Website

This is now a PHP/HTML website.

Main pages:
- `index.php`
- `features.php`
- `lessons.php`
- `pricing.php`
- `dashboard.php`
- `about.php`
- `contact.php`
- `privacy.php`
- `terms.php`

Shared files:
- `includes/header.php`
- `includes/footer.php`
- `includes/sections.php`
- `includes/site-data.php`

Assets:
- `public/assets`

Styles:
- `src/styles.css`

For Apache or cPanel hosting, upload the full folder and make sure PHP is enabled. The `.htaccess` file sets `index.php` as the first homepage file.

For local testing with PHP installed:

```bash
php -S localhost:8080
```

Then open:

```text
http://localhost:8080/index.php
```
