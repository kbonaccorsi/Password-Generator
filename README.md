# Password-Generator
Project 3

Modify starter code to enable employees to generate random passwords based on criteria they select.

App will run in browser, feature dynamically updated HTML and CSS, clean and polished responsive UI adapting to multiple screen sizes. Password can include special characters.

user clicks button to generate password -> user prompted for password criteria

user prompted for password criteria -> user selects criteria to include

user prompted for length -> user chooses between 8-128 characters

user prompted for character types -> user confirms whether/not to include: lowercase, uppercase, numeric, and/or special characters

user answers prompts -> input is validated and >=1 character type is selected

user completes prompts -> password is generated matching criteria

password is generated -> password displayed in an alert/ written to the page


Define "generatePassword"
URL:

Screenshot:


Notes from .js
/*
GIVEN I need a new, secure password
WHEN I click the button to generate a password
THEN I am presented with a series of prompts for password criteria
// If the button is clicked, then prompts pop up
WHEN prompted for password criteria
THEN I select which criteria to include in the password
//user chooses password criteria
WHEN prompted for the length of the password
THEN I choose a length of at least 8 characters and no more than 128 characters
//var passwordLength = (8-128 characters)
WHEN asked for character types to include in the password
THEN I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters
//var characterTypes = (lowercase, uppercase, numeric, and/or special characters)
WHEN I answer each prompt
THEN my input should be validated and at least one character type should be selected
//validate EACH input
//select >=1 character type
WHEN all prompts are answered
THEN a password is generated that matches the selected criteria
// If all prompts are answered, then generate password    (&&)?
WHEN the password is generated
THEN the password is either displayed in an alert or written to the page
//generated password shows in alert OR written to the page

need booleans for:
passwordLength 8-128 characters = true
characterTypes = true
all prompts answered = true


passwordLength uses array?  var passwordLength = [8-128]
characterTypes uses array?  var characterType = [lowercase, uppercase, numeric, special character]



function passwordLength = number(input)

math.floor(math.random() + (max - min + 1) + min)
get a random number between 2 number variable to store the selection

We need this to happen using the 
