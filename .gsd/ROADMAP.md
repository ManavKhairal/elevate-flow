# ElevateFlow Frames Optimization Roadmap

## Phase 1: Preparation & Compression
- [ ] Create `frames_webp` directory.
- [ ] Convert 285 `.jpg` frames in `frames` to `.webp` using ImageMagick (`mogrify`).

## Phase 2: Implementation (Lazy-loading)
- [ ] Update `index.html` `currentFrame` function to point to `.webp`.
- [ ] Update JS preloader to trigger `initAnimation` early (after 15 frames).
- [ ] Update canvas rendering in `updateImage` to check `img.complete` safely.

## Phase 3: Verification
- [ ] Test the webpage load speed.
- [ ] Verify scroll animation works without breaking.
