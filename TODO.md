# TODO: Add Scroll-Down Image Zoom-Out Animation to ImageGallery.tsx

## Steps to Complete:
- [ ] Import React hooks: useEffect and useState
- [ ] Add state variable `scale` initialized to 1.0
- [ ] Add useEffect hook to set up scroll event listener on window
- [ ] Implement scroll handler function to calculate scale based on scrollY (clamp between 0.5 and 1.0)
- [ ] Use requestAnimationFrame in scroll handler for smooth animation
- [ ] Apply `transform: scale(${scale})` style to each image container div
- [ ] Add cleanup to remove event listener on component unmount
- [ ] Test the animation by scrolling to ensure it works correctly
