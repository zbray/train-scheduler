# Train Scheduler

This web app uses HTML, CSS, jQuery and Firebase to take data that the user inputs into forms, stores them in a database, operates some equations, and displays the data on a table for the user to view.

### Problem

Needed a way to display information that a user inputed into a database.

### Solution

Used firebase to store inputs form a form and display them back to the user.

### Lessons Learned

I learned that even though an npm package like Moment.js could translate time taken from the user and display it in a 24-hour format, the current limits on `<input type="time"` are such that input validation that would require a 24-hour input don't exist yet.

I also learned in testing that Safari doesn't support Date and Time input types. Researching further at Can I Use I learned that many other browsers support Date and Time, including Safari on iOS devices but not desktop Safari.

### Tools Utilized

HTML, CSS, Javascript, Firebase, Moment.js

### Future Fixes

Validation, Uppercase Destination, 24-hour clock

### GitHub Pages Deployment
https://zbray.github.io/trainScheduler/

&copy; 2018 zbray
