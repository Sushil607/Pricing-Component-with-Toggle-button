import { useState } from "react";
import Plan from "./Plan";

function App() {
  //Data
  const planData = [
    {
      id: 0,
      professional: false,
      name: "Basic",
      value: { monthly: 19.99, annually: 199.99 },
      storage: "500 GB",
      users: 2,
      limit: "3 GB",
    },
    {
      id: 1,
      professional: true,
      name: "Professional",
      value: { monthly: 24.99, annually: 249.99 },
      storage: "1 TB",
      users: 5,
      limit: "10 GB",
    },
    {
      id: 2,
      professional: false,
      name: "Master",
      value: { monthly: 39.99, annually: 399.99 },
      storage: "2 TB",
      users: 10,
      limit: "20 GB",
    },
  ];
  //state
  const [planType, setPlanType] = useState("monthly");
  //function to toggle between plans
  const togglePlans = () => {
    if (planType === "monthly") {
      setPlanType("annually");
    } else {
      setPlanType("monthly");
    }
  };
  return (
    <>
      <div className="wrapper">
        <div className="header">
          <h1>Our Pricing</h1>
          <div className="toggle-container">
            <p>Annually</p>
            <div className="toggle-button" onClick={() => togglePlans()}>
              <div className={`circle ${planType}`}></div>
            </div>
            <p>Monthly</p>
          </div>
        </div>
        <div className="plans">
          {planData.map((plan) => {
            return <Plan planType={planType} plan={plan} key={plan.id} />;
          })}
        </div>
      </div>
    </>
  );
}

export default App;
