import React, { createContext, useState, useContext } from "react";

const TestContext = createContext("default");

const ContextComp = (props, ref) => {
  const [name] = useState("chen");
  const context = useContext(TestContext);

  return (
    <p>
      {context} {name}
    </p>
  );
};

export default function App() {
  const [name, setName] = useState("xiao");

  return (
    <>
      <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
      <TestContext.Provider value={name}>
        <ContextComp />
      </TestContext.Provider>
    </>
  );
}

// const { Provider, Consumer } = React.createContext("default");

// class Parent extends React.Component {
//   state = {
//     value: "",
//   };

//   render() {
//     return (
//       <>
//         <div>
//           <label>Context:</label>
//           <input type="text" value={this.state.value} onChange={(e) => this.setState({ value: e.target.value })} />
//         </div>
//         <Provider value={this.state.value}>{this.props.children}</Provider>
//       </>
//     );
//   }
// }

// function Child(props, context) {
//   return <Consumer>{(value) => <p>value: {value}</p>}</Consumer>;
// }

// export default function App() {
//   return (
//     <Parent>
//       <Child />
//     </Parent>
//   );
// }
