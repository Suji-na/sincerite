# Parijat Boilerplate
---

- Clone the repository( **git clone** _respository-name_)
- Install the dependencies(**npm install**)
- First of all run **gulp build** or **gulp** to build the distribution folder OR **gulp run** to build and watch the project at once.
- Then run **npm start** OR **gulp watch** to start the server.

## RULES & REGULATION

---

- Use **src/index.html** for markup and **src/assets/scss** folder to style.
- Use **src/parts/\*.html** for parts like **header** **footer** **nav** etc.
- Add **ID** on each section(_e.g: **#area1** for section 1, **#area2** for section 2..._).
- Add light bg-color to the button while it is in hover state above screen size _768px_(_use SASS lighten property for that_)
- Cut ~~hover~~ on button on screen size below _768px_.
- Use `@@webRoot` for relative path to denote path from Root.
- Using **loading="lazy"** on _&lt;img&gt;_ tag is must. (Optional) add width height attribute to HTML tag.
- When there're PC and SP images use **<picture> <source srcset=""... /> <img src="" ... /></picture>**.
- Perform **cross-browser** test against major browsers(_Chrome, Firefox, Safari, IE 10-11, Android default browsers_)
- Perform **cross-OS-browser** test against major OS(_Windows, Mac OS, iOS and Android_) for above available browser
- Responsive check form **360px** and resize the browser width.
- Perform **HTML5 validation**.
- Perform **diff** check for correct text.
- Add image title as image **alt** tag.
- If there is contact form, style should be written for **send.php** and **confirmation.php**.

## FINALIZATION

---
- If you want to combine all repeating similar media-queries and remove unused styles use **gulp purge** after final **gulp build**
