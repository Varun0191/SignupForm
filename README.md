# Login-Signup Component

A simple React component for user authentication, allowing users to sign up or log in. This component includes basic input validation for email, password, and phone number.

## Installation

Use npm to install the project dependencies.

```bash
npm install 
```

## Usage

```react
import LoginSignup from './path/to/LoginSignup';

// Use the component in your JSX
<LoginSignup />

```
## Example

```react

<LoginSignup 
    onLogin={(email, password) => console.log("Logging in with:", email, password)}
    onSignup={(name, email, password, number) => console.log("Signing up:", name, email, password, number)}
/>


```
## License

[MIT](https://choosealicense.com/licenses/mit/)