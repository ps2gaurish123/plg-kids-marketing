# Assets Folder - Coding Agent Instructions (DOX)

This folder contains public/local fallback assets and mappings.

## 1. Responsibilities
* Local asset directory structures (`public/assets/toddler/`, `public/assets/phonics/`, etc.) used directly in native APK builds.
* CDN synchronization tracking manifests.

---

## 2. Asset Synchronization Rules

1. **Backblaze B2 Uploads**: Any new asset folder added locally must be synced to B2. Run:
   ```bash
   node --env-file=.env.local scripts/verify-and-track-uploads.js
   ```
   This will verify that local files exist on B2/Cloudflare and generate the updated `public/plgassets-verification-manifest.json`.
2. **Path Mapping Integrity**: Ensure new files match the paths mapped inside `scripts/verify-and-track-uploads.js` and `src/config/assets.js` so they resolve to the CDN correctly.
3. **No Direct Git Bloat**: Do not commit extremely large raw source ZIP files, backups, or raw videos directly to GitHub unless they are required offline fallbacks for APK compilation.

---

## 3. Verification Checklist
* Run the verify-and-track-uploads script and check that all assets are uploaded successfully.
* Verify that the generated manifest file correctly registers the new assets.
