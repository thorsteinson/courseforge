# courseforge
A microservice front end

## Login
Create a basic page that allows for logins. This will force us to use redux async middleware and set up a series of asynchronous events.

The flow should be pretty simple. Initally we will go to the the main page, and it will be empty with nothing but a login button.

We click the login button, which then triggers the async flow and series of events.

According to the Redux documenation all async actions consist of the following:

1. An action informing the reducers that the request began.
2. An action informing the reducers that the request finished successfully.
3. An action informing the reducers that the request failed.

Our corresponding actions should then look like the following

1. Login button clicked -> `MADE_LOGIN_REQUEST`
2. Login was successful -> `LOGIN_SUCCESS`
3. Login was a failure -> `LOGIN_FAILURE`

We should handle each of these cases, and explore the testing methods for these as wel via mocking.
