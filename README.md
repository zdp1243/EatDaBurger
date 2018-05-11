# EatDaBurger
A burger logger created with MySQL, Node, Express, Handlebars, Bootstrap and a homemade ORM.
+
+## Description
+
+This application demonstrates a simple full stack application with a front end implemented with HTML/CSS/Bootstrap.  The back end is implemented with Node.js and Express. HTML templating is done with Handlebars.
+
+The user may enter any burger name to add it to the menu. This also adds the new burger entry into the MySQL database. The initial burger entry is added as *available* on the menu and placed on the left side of the screen. The user may then eat any burger by clicking on it, which moves it into the right-hand column and updates its status accordingly in the database.
+
+## Installation
+
+To run the application locally, first clone the repository with the following command.
+
+	git clone https://github.com/zdp1243/EatDaBurger.git
+	
+Next, install the application dependencies.
+
+	cd EatDaBurger
+	npm install
+	
+Finally, run the node server locally.
+
+	node server
+	
+Now, open the local application on port 3000 at the URL: `http://localhost:3000`.
+
+**Enjoy!**
+
