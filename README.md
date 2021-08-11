# TestCafe end to end test

### Description 

The following assignment is meant to asset QA candidate on writing end to end test scripts with some documentations.

#### General objective.

The assignment is meant to test permission on a user account. There shall be two user roles. One with admin role to disable the user role. 
Once an admin has disable the permission for the user, the test should assert whether the permission has been disabled appropriately. 


#### Requirements

1. The user role should first login and be able to see their identification information.
2. Then the test should **switch** to admin role and disable the permission on this account 
3. Then **switch** back to user account and test whether the permission to access indification information has been disabled.
4. You should provide appropriate assertions
5. Use DRY in your script as much as possible. 
6. Provide test documents

#### Accounts

Admin: admin@aristockphoto.com
Password: Password123!

User: 

