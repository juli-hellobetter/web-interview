# Fullstack Tech Interview Challenge

## Backend

Your task is to fix all failing tests by implementing a missing API endpoint: `GET v1/interventions/:id`

### Context

- You are working on a backend service that manages "interventions" for a digital health platform. There is a set of automated tests for the endpoint GET v1/interventions/:id, but currently all related tests are failing because the endpoint is not yet implemented.
- The API code is located inside the `api` folder.

### Running tests

```
npm run test:server
```

### Running the API

```
npm run server
```

### Requirements

Implement the missing endpoint: `GET v1/interventions/:id`

### Expected behavior:

When called with a valid id, the endpoint should return the details of the corresponding intervention as JSON.
If the intervention with the given id does not exist, it should return a 404 Not Found response.
The response should follow the structure expected by the tests (inspect the tests to understand the required response format).

### Data:

Interventions are stored in a in-memory implementation of a MongoDB database, as provided in the code base.

### Instructions

- Review the failing tests for GET v1/interventions/:id to understand the expected input and output.
- Implement the endpoint so that all tests for this route pass.
- You may refactor or add helper functions as needed, but focus on the endpoint implementation.
  Once all tests pass, you're done!

## Frontend

Your task is to build a React application that displays intervention data from the backend API you just implemented.

### Context

You are working on the frontend of a digital health platform that displays intervention details to users.
The React app skeleton is already set up with some prepared UI components in the components folder.
You need to add the logic to fetch and display intervention data from the backend API.

### Running the app

```
npm run dev
```

### Requirements

Build a React component that fetches intervention data from the GET v1/interventions/:id endpoint and displays the intervention details using the provided UI components.

### Expected behavior

- When mounted, the component should fetch the intervention data from the API
- Display a loading state while the request is in progress
- Show error message if the request fails or intervention is not found
- Display the intervention details when successfully loaded
- Include basic prop validation (PropTypes or TypeScript interfaces)

### Instructions

- Review the existing UI components to understand their props and usage
- Implement the main InterventionDetails component with proper state management
- Add appropriate prop types or TypeScript interfaces
- Handle all states of data fetching (loading, error, empty, success)
- Bonus (if time allows): if the intervention contains lists, implement sorting by different criteria
