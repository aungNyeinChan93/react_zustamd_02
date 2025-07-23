import React from "react";
import TestUserData from "./components/tests/TestUserData";
// import TestTasks from "./components/tests/TestTasks";
// import TestUsers from "./components/tests/TestUsers";
// import TestCustomers from "./components/tests/TestCustomers";
// import TestCounter from "./components/tests/TestCounter";

const App = () => {
  return (
    <React.Fragment>
      <section className="container bg-slate-100 mx-auto p-6 my-4">
        {/* <TestCounter /> */}
        {/* <TestCustomers /> */}
        {/* <TestUsers /> */}
        {/* <TestTasks /> */}
        <TestUserData />
      </section>
    </React.Fragment>
  );
};

export default App;
