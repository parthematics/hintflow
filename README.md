# *hintflow*

*hintflow* is a lightweight and easy-to-configure React library for creating dismissable in-app cues, helping you guide users through new features or important changes in a non-intrusive way.

## Features

- **Non-Intrusive Cues**: Display subtle popups to inform users about new features or important updates.
- **Configurable Positioning**: Place cues above, below, left, or right of target elements.
- **Persistent Dismissal**: Cues won't reappear for users who have already seen and dismissed them.
- **Easy Integration**: Quickly integrate with any React component using simple props.

## Installation

Install the library using npm or yarn:

```bash
npm install hintflow
```
or 
```bash
yarn add hintflow
```

## Usage
To use *hintflow*, import the `Hint` component and specify the target element selector, message, and optional positioning.
```typescript
import React from 'react';
import { Hint } from 'hintflow';

function App() {
  return (
    <div className="App">
      <h1 id="welcome">Welcome to hintflow!</h1>
      <Hint
        id="welcome-hint"
        message="Check out this awesome new feature!"
        targetSelector="#welcome"
        position="bottom"
        align="center"
        color="#808080"
      />
    </div>
  );
}

export default App;
```

### `Hint` Props
- `id` (string, required): Unique identifier for the hint. This ensures the hint does not repeatedly appear once dismissed.
- `message` (string, required): The message to display inside the hint.
- `targetSelector` (string, required): A CSS selector for the target element that the hint should be anchored to.
- `dismissable` (boolean, optional, default: true): Whether the hint can be dismissed by the user.
- `position` (string, optional, default: 'bottom'): Position of the hint relative to the target element. Can be 'top', 'bottom', 'left', or 'right'.
- `align` (string, optional, default: 'center'): Alignment of the hint relative to the target element. Can be 'left', 'center', or 'right'.

## Example
Here's how you might use *hintflow* to introduce a new button in your UI:
```typescript
import React from 'react';
import { Hint } from 'hintflow';

function App() {
  return (
    <div>
      <button id="new-feature-button">New Feature</button>
      <Hint
        id="new-feature-hint"
        message="Click here to try out our new feature!"
        targetSelector="#new-feature-button"
        position="bottom"
        align="center"
      />
    </div>
  );
}

export default App;
```

## Contributing
We welcome contributions! Please submit issues or pull requests to help improve *hintflow*.

## Local Development
Clone the repository:
```bash
git clone https://github.com/parthematics/hintflow.git
cd hintflow
```

Install dependencies:
```bash
yarn
```

Run the development server:
```bash
yarn start
```

Build the library:
```bash
yarn build
```

## License
*hintflow* is licensed under the MIT License. See the LICENSE file for more details.
