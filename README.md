Infinity
Full Stack Test Application

V1 
State: 21.02.2022


Table of Contents
Wenn Sie Überschriften hinzufügen und sie als Überschriften ("Format" > "Absatzstile") formatieren, werden sie automatisch ins Inhaltsverzeichnis aufgenommen.


1.Overview
The Goal of this project is to see if the partnership works out for both parties.
In this project we have UI Design, frontend, backend, implementing business logic and presenting the finalized application as a viewable website + Code.

The time period for this project is within 96h starting by the time the resources are provided.

This test application is used in order to see how the partnership works out for both sides and serves as a comparable benchmark test between different applicants.

The main goal with this application is to get the data from the database, process it based on the given business logic and display it on the frontend in a non-technical user friendly interface.
By the end, the Binary Commission earned by user_1 as well as the Binary Volume History of user_1 should be displayed.
2.Resources
The Applicant will be provided with:

-Database containing the Testdata as MySQL.
-Compensation Plan Documentation
-Metronic8 Theme

The mentioned Resources will be provided in the Google Drive Folder called “Testing Application”.
If further resources are required, please feel free to reach out to the CTO Patrik Hörmann.
He will provide the required resources as best as possible in a timely manner.
3.Businesslogic
3.1.Binary Compensation
In order to gain more knowledge about how the compensation plan works, please visit the “Compensation Plan Documentation” - Point 6.3

There you get a good Idea of how the Binary commission is calculated.

As the value of cycle, we can use $20 per cycle in our test application to keep it simple.
Therefore, we do not have to care about the rank of the user.

Please also note and respect that the Binary Compensation is using a monthly calculation period what can be read in the “Compensation Plan Documentation” - Point 4.2

3.2.Binary Volume History
Since we calculate the Binary Volume and Commission in Monthly periods, we will end up with a 2 year record of data based on “Compensation Plan Documentation” - Point 6.3.1

Therefore, we have to treat each month's volume separately to let the oldest one expire first.
4.Backend
The Backend programming language can be either Ruby, Python or Node.JS
The backend should fetch the data from the database and process it in a way that the frontend can pull the calculated and stored data based on the above stated business logic.
5.Frontend
In terms of Design, the application should be built using React in combination with the Metronic8 Theme as it will be used in the final project as well.

The Applicant can choose any format in how to display the calculated commission and Binary Volume history.

The only requirement for the UI is a Header Bar with a Sidebar.
6.Hosting & Submission
By the end of this application, it should be possible to view the frontend through browser access without installing/running the application locally.

So for hosting, AWS, Heroku, Netlify,... might be utilized.
The hiring company is going to cover the hosting costs for the applications up to $50 which should be sufficient to host the application on a basic EC2 or similar.

The Code for backend and frontend should be submitted and shared in a github repository for the review.




