# Assets Guide

## Adding Your Own Assets

### Profile Image
Replace `src/assets/images/profile-placeholder.svg` with your actual profile photo:
- Recommended size: 300x300px
- Supported formats: JPG, PNG, SVG
- Update the import in `src/components/About.js`

### Project Images
Replace the project placeholder images in `src/assets/images/`:
- `project1.svg` - E-Commerce Platform screenshot
- `project2.svg` - Task Management App screenshot  
- `project3.svg` - Weather Dashboard screenshot

Recommended specifications:
- Size: 400x200px (2:1 aspect ratio)
- Formats: JPG, PNG, SVG
- Update imports in `src/components/Projects.js`

### Icons
The following icons are included and ready to use:
- `github.svg` - GitHub icon
- `linkedin.svg` - LinkedIn icon
- `email.svg` - Email icon
- `external-link.svg` - External link icon

### Adding New Assets

1. **Images**: Place in `src/assets/images/`
2. **Icons**: Place in `src/assets/icons/`
3. **Import in component**:
   ```javascript
   import myImage from '../assets/images/my-image.jpg';
   ```
4. **Use in JSX**:
   ```javascript
   <img src={myImage} alt="Description" />
   ```

### Asset Optimization Tips
- Compress images before adding them
- Use SVG for icons when possible
- Consider using WebP format for better performance
- Keep file sizes reasonable for web loading

### Folder Structure
```
src/
  assets/
    images/
      profile-placeholder.svg
      project1.svg
      project2.svg
      project3.svg
    icons/
      github.svg
      linkedin.svg
      email.svg
      external-link.svg
```