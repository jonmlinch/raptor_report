# Raptor Report

Content coming soon

##What it includes

* Sequelize models and migration for user model
* Setting for PostgreSQL
* Passport and Passport-Local for authentication
* Express sessions to keep user loggedin from page to page
* Connect-Flash for error/success messages
* Bcrypt for hashing passwords

### User Model

| Column Name | SQL Type | Notes							|
|_____________|__________|__________________________________|
|id | Integer | Serial primary key|
|createdAt | Date | Automatically generated |
|updatedAt | Date | Automatically generated |
| firstname | String | - |
| lastname | String | - |
| email | String | usernameField for login |
| password | String | Hashed with bcrypt |
| dob | Date | - |

> NOTE: Change these fields in both the model and migration files before running sequelize db:migrate

### Default Routes Supplied

| Method | Path | Location | Purpose |
|________|________________|______________________|________________________________________|
| GET | / | index.js| Home Page|
| GET | /profile | controllers/profile.js | Profile page (authorization req) |
| GET | /auth/login| controllers/auth.js | Login form page |
| POST | /auth/login | controllers/auth.js | Login submission + Redirect to profile |
| GET | /auth/signup | controllers/auth.js | Signup form page |
| POST | /auth/signup | controllers/auth.js | Signup submission + Redirect to login |
| GET | /auth/logout | controllers/auth.js | Logout + redirect home |

## Next Steps

Assuming that the setup steps went smoothly, now you can add new models/migrations for your new app, and generally just start developing it as if you had started from scratch!