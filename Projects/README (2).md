# Study Hub

Static Study Hub website that allows inserted JSON files to be turned into a study platform with PDF interaction, Flashcards, Quizzes, and Games.

## Currently Hosted
[CollegeStudyHub.com](CollegeStudyHub.com)

## Frontend - No Backend Required
✅ Static HTML/CSS/JavaScript only
✅ Dynamic content discovery  
✅ Deploy anywhere (AWS Amplify, GitHub Pages, Netlify)
✅ No server, no dependencies, no setup

## Main Files
- **`index.html`** - Your complete study application
- **`classes/`** - **Put your study materials here!**
- **`amplify.yml`** - Ready for AWS Amplify deployment

## Adding Study Content

### Just Drop and Go 
1. Create class folder in `classes/` (e.g., `classes/machine-learning/`)
2. Create Topics folder: `classes/machine-learning/Topics/`
3. Create topic folder: `classes/machine-learning/Topics/quiz-1/`
4. Add `study-material.json` file with your content
5. **That's it!** The app will automatically discover it

### Example Structure
```
classes/
  your-class-name/
    Topics/
      quiz-1/
        study-material.json
      exam-prep/
        study-material.json
    Study Materials/
      Lecture1.pdf
      Week1.pdf
```

### Auto-Discovery Patterns
The app automatically looks for these topic names:
- `quiz-1`, `quiz-2`, `quiz-3`...
- `exam-1`, `midterm`, `final-exam`
- `week-1`, `week-2`...
- `chapter-1`, `chapter-2`...
- `unit-1`, `assignment-1`, `lab-1`...

And these PDF names:
- `Week 1 - Introduction.pdf`
- `Lecture 1.pdf`, `Chapter 1.pdf`
- `Notes 1.pdf`, `Assignment 1.pdf`...

## Features
- **Notes**: Organized study points
- **Flashcards**: Interactive flip cards  
- **Quizzes**: Multiple choice with explanations
- **Games**: Sorting and matching activities
- **PDFs**: Integrated PDF viewer

## Deployment Ready
- **AWS Amplify**: Just connect your repo
- **GitHub Pages**: Enable in repo settings
- **Netlify**: Drag and drop deployment
- **Vercel**: One-click deployment

## File Structure
```
Study-Hub/
├── index.html               ← Your complete study app
├── amplify.yml              ← AWS Amplify config
└── classes/                 ← YOUR CONTENT HERE
    └── design-&-analysis-of-algorithms/
        ├── Topics/
        │   ├── quiz-1/
        │   │   └── study-material.json
        │   └── quiz-2/
        │       └── study-material.json
        └── Study Materials/
            ├── Week 1 - Introduction to DAA.pdf
            └── Week 2 - Analysis Efficiency.pdf
```
    └── design-analysis-algorithms/
        ├── big-o-notation/
        └── quiz-1/
```

## Local Daily Usage
1. Look for "Study-Hub" folder on your Desktop
2. Double-click `QUICK_START.bat`
3. Browser opens to your study site
4. Select class → topic → study mode
5. Study away!

---
