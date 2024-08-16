# Hintflow

HintFlow is a lightweight and easy-to-configure React library for creating dismissable in-app cues, helping you guide users through new features or important changes in a non-intrusive way.

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
To use HintFlow, import the `Hint` component and specify the target element selector, message, and optional positioning.
```typescript
import React from 'react';
import { HintFlow } from 'hintflow';

function App() {
  return (
    <div className="App">
      <h1 id="welcome">Welcome to HintFlow!</h1>
      <HintFlow
        id="welcome-hint"
        message="Check out this awesome new feature!"
        targetSelector="#welcome"
        position="right"
      />
    </div>
  );
}

export default App;
```
