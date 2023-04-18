# MVC Blog

## Description
This is a simple blog application that holds users, posts, and comments in a MySQL database. Handlebars and the MVC framework are used to dynamically create the webpages. A guest may view all of the posts and comments but only registered users are allowed to create posts and comments. Registered users are also able to update and delete their posts. The deployed app can be found [here](https://dh-mvc-blog.herokuapp.com/).  

## Table of Contents
1. [Installation](#installation)
2. [Usage](#usage)
3. [License](#license)
4. [Contributing](#contributing)
5. [Tests](#tests)
6. [Questions](#questions)

## Installation
You must install Node.JS (I used version 16.19.0) on your computer and run `npm i` to install the required modules. The program utilizes MySQL so that must be installed as well. You will need to create the `app_db` database by running `source <path/to/schema.sql>`. The final step is to create a dotenv file to contain your MySQL credentials. The file should be named `.env` and contain the following database information: 
```
DB_NAME='app_db'
DB_USER='your_username' 
DB_PW='your_pass'
``` 

You should then be ready to use the program.

## Usage
Run `npm start` to start the server. You can then access the webpage in your browser or you can use an API tool such as [Insomnia](https://insomnia.rest/) or [Postman](https://www.postman.com/) to make API calls.
## License
This project is covered by the following license: [MIT License](https://opensource.org/licenses/MIT)

## Contributing
If you would like to contribute to the project, please contact me with one of the methods listed in the 'Questions' section.

## Tests
There are no tests for this application.

## Questions
Contact me at:
* GitHub - [dhoneck](https://github.com/dhoneck)
* Email - honeck_34@hotmail.com