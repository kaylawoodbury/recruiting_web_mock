# Notes:

## Setup
I decided used a boilerplate I had previously created with an attached MaterialsUI template as a starting point, particularly aiding on the design side. It doesn't always make sense to build something completely from scratch if something can help get you started and work more effectively towards a clients needs. Granted this would be situation dependant on if it makes sense and the stakeholder's desires/situation. In this case, to make use of the limit time the templates offered an effective way to jumpstart on styling and some basic components that I could then move on from and develop what I needed to from there. However, on the flip side, this approach can lend itself towards over-engineering a solution. 

From there I built out first an overview daskboard that serves as the landing page. Then I focused on creating the form that would serve for both adding a new user and editing existing uers. Then I set up redux to handle local storage and changes since I was not using a live api.

## Things Including
- dashboard list of active recruitees
- search on dashboard
- candidate details update
- delete candidate
- add candidate

## Things I'd consider adding if I spent more time with this project
- oauth, login/out functionality
- different role designations: admin, etc
- separate views of active vs inactive recruits
- specific sections for notes on each interview phase and who the recruiter was in that phase
- notes on if the candidates needs to relocate
- start dates
- maybe graphs of number of candidates in each phase
- initially planned to include cypress tests but decided to cut this as running low on time 
- lots of things can be added but for time constrainst will keep to test requirements
- Add header with ability to change light/dark settings
- Add candidate details view

## Notes
The folder material_ui holds the template and is not directly used in the solution. All actively used files are under src and public folders.

### Thoughts/Reminders
- As with all coding, could have easily spent a lot more time with this. Was a bit overly ambitious with my initial idea, and thus ended up with some more set up that what I ended up actually using (i.e. cypress, some error handling, etc). As a consequence, I think the final product is more complex than what it needs to be for the end result the user sees. However, this would be a good exercise that I can continue to expand on for practice, or try to pair down and simplify. Both angles would prove interesting exercises. 

- Due to spending only about 8 active hours on this, I did not do as much prep work as I would normally and I think it showed in both the quality and in my coding experience with it. 

- I ended up skipping building out automated tests in this case, however, looking back I think my overall flow would have been smoother by still choosing to include them. And would have probably helped me catch a couple of bugs I found after manually playing around with the end result for a bit.


## Video of Going Playing with the Result
[mock_web.mov.zip](https://github.com/kaylawoodbury/recruiting_web_mock/files/10834893/mock_web.mov.zip)

### To Run Web App Locally

`yarn start`

Runs the app in the development mode.\
Open to view it in the browser.
