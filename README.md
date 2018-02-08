# secret-santa
Full stack secret santa web application
This application allows a user to create a secret santa event (see here for description: https://en.wikipedia.org/wiki/Secret_Santa).
After the event is created the admin (creator) can share the link of the event and have others sign up.
Participants arriving at the link provided by the admin will be asked to sign up via email and name and to select a number of preferences of their choice for gifts.
The users and events are saved in a database.
The admin can access a separate page which presents all the users and uses a sorting algorithim to pair a unique user to each other user (no to users should have the same pair).
--In development - a mailer that sends all participants an email which informs of their pair.
