# React Concepts - Q&A

## Q1. What is React? What is the role of React in software development?

**Answer:**
1. React is an open-source JavaScript library.
2. React is used for building user interfaces (UI).
3. React simplifies the creation of Single Page Applications (SPAs) by using reusable components.

## Q2. What are the key features of React?

**Answer:** React has seven main key features:

- **Virtual DOM**: React uses a Virtual DOM for efficient updates, only modifying changed parts in the real DOM instead of re-rendering the entire UI.
- **Component-Based Architecture**: React applications are built using reusable components, making it easy to structure, organize, and maintain complex UIs.
- **Reusability & Composition**: Components can be reused across different parts of an application, and they can be composed together to build complex UIs from simple parts.
- **JSX (JavaScript XML)**: JSX is a syntax extension that combines JavaScript and HTML-like code, making it easier to write and visualize the UI structure directly within JavaScript.
- **Declarative Syntax**: React’s syntax is declarative, meaning you describe what the UI should look like, and React updates the DOM based on changes in data.
- **Community and Ecosystem**: React has a large, active community and ecosystem, offering extensive libraries, tools, and resources that make development faster and more powerful.
- **React Hooks**: Hooks are special functions that enable functional components to use features like state and lifecycle methods, enhancing component functionality and code simplicity.

## Q3. What is DOM? What is the difference between DOM and HTML?

**Answer:**
- **DOM**: The Document Object Model (DOM) represents the page as a tree-like structure, allowing JavaScript to dynamically access and manipulate the content and structure of a webpage.
- **HTML**: HTML is a markup language helpful for developers for reading and development purposes.

**Note**: Memory operations are performed on the DOM, not HTML.

## Q4. What is Virtual DOM? What is the difference between Virtual and Real DOM?

**Answer:** The Virtual DOM in React is a lightweight representation of the real DOM. When a component’s state or props change, React creates an updated Virtual DOM and compares it to the previous one to identify changes. This process, called **reconciliation**, allows React to update only the changed parts in the real DOM, making updates faster and more efficient without re-rendering the entire page.

During reconciliation, React uses a "diffing algorithm" to detect changes between the previous and updated Virtual DOM versions, ensuring efficient and minimal updates to the Real DOM.

## Q5. What are React components? What are the main elements of a React component?

**Answer:**  
React components are the building blocks of a React application. They are reusable, independent pieces of UI, like buttons, forms, or entire sections of a webpage. Components can be thought of as JavaScript functions or classes that return HTML elements.

## Q6. What is SPA (Single Page Application)?

**Answer:**  
A Single Page Application (SPA) is a web application with only one single web page. Whenever a user interacts with the website, the content is dynamically updated without refreshing or reloading a new page.

## Q7. What are five advantages of React?

**Answer:**
1. Easy to build Single Page Applications with a component-based architecture.
2. React is cross-platform and open-source (free to use).
3. Lightweight and very fast due to the Virtual DOM advantage.
4. Large community and ecosystem, providing extensive resources and tutorials.
5. Easy to test UI applications.

## Q8. What is a disadvantage of React?

**Answer:**  
React is ideal for dynamic or complex component-based applications. However, for smaller applications, simpler technologies like HTML, CSS, and JavaScript may be more suitable.

## Q9. What is the role of JSX in React? (3 Points)

**Answer:**
1. JSX stands for JavaScript XML.
2. JSX allows React to use HTML-like code in JavaScript.
3. JSX is converted to JavaScript using tools like Babel, as browsers only understand HTML, CSS, and JavaScript, not JSX.

## Q10. What is the difference between declarative and imperative syntax?

**Answer:**
- **Declarative Syntax**: Used in React via JSX, it describes what the UI should look like.
- **Imperative Syntax**: Written using pure JavaScript, focusing on how to achieve specific results step-by-step.

## Q11. How does a React app load and display components in the browser?

**Answer:**  
When a user loads the UI in the browser, the request flows as follows:

USER => Index.html => Index.js => App.js => Components

- **index.html**: A single page that loads `index.js` using React libraries.
- **index.js**: Replaces the root element in `index.html` with the App component.
- **App.js**: The root component that contains all child components.
- **Child Components**: Custom components nested within the App component.

## Q12. What is the difference between React and Angular?

**Answer:**  
**Common Point**: Both React and Angular are used to create Single Page Applications (SPA) using components.

**React**:
1. React is a JavaScript library.
2. React uses a Virtual DOM, making it faster.
3. React is smaller in size and lightweight.
4. React relies on external libraries for complex features, requiring more code for complex functions.
5. React is simpler to learn and more popular than Angular.

**Angular**:
1. Angular is a complete framework.
2. Angular uses the Real DOM.
3. Angular is larger as it is a full-featured framework.
4. Angular provides built-in support for routing, forms, validation, and HTTP requests.
5. Angular is slightly harder to learn, incorporating TypeScript, OOP concepts, and more.

## Q13. How does React provide reusability and composition?

**Answer:**
- **Reusability**: Once a component is created in React, it can be reused across different parts of the application or even in other projects.
- **Composition**: Composition involves creating larger components by combining smaller ones. This approach ensures that changes to one small component do not affect other components.
