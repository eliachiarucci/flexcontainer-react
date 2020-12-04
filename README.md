## React FlexContainer

FlexContainer is a react component to make flexible layouts easier in React.

<br>

### Installation

```
npm install react-fc-layout
```

or

```
yarn add react-fc-layout
```

<br>

### Import it like this

```js
import FlexContainer from "react-fc-layout";
```

<br>

### Usage

You can use a FlexContainer to wrap every kind of element.

```jsx
<FlexContainer type="vertical" alignItems="center" gap={20}>
  <div className="blue">Child 1</div>
  <div className="blue">Child 2</div>
  <div className="blue">Child 3</div>
</FlexContainer>
```

#### Result

![Demo FlexContainer](../assets/examplenormal.png?raw=true)

<br>

Or you can also use it to wrap other FlexContainers

```jsx
<FlexContainer type="vertical" alignItems="center" gap={20}>
  <div className="blue">Child 1</div>
  <div className="blue">Child 2</div>
  <FlexContainer type="horizontal" justifyContent="center" gap={10}>
    <div className="blue">Child 3</div>
    <div className="blue">Child 4</div>
  </FlexContainer>
  <div className="blue">Child 5</div>
</FlexContainer>
```

#### Result

![Demo FlexContainer](../assets/examplenested.png?raw=true)

<br>

### Properties

The component is made with TypeScript, so when you use it in vscode all the properties are automatically shown to you.

![Demo Autocompletion](../assets/justifycontent.png?raw=true)
![Demo Autocompletion](../assets/justifycenter.png?raw=true)

#### This is a list of every settable property

```js
width: number;
height: number;
flex: string;
type: "horizontal" | "vertical"; // Flex direction, either row or column
alignSelf: "auto" | "flex-start" | "flex-end" | "center" | "baseline" | "stretch";
justifyContent: "flex-start" | "flex-end" | "center" | "space-between" | "space-around" | "space-evenly";
alignItems: "auto" | "flex-start" | "flex-end" | "center" | "baseline" | "stretch";
wrap: "nowrap" | "wrap" | "wrap-reverse";
minWidth: string;
minHeight: string;
overflow: string; // What to do when content overflows, CSS Overflow property
padding: number;
margin: number;
gap: number; // The space between each children in px
```
