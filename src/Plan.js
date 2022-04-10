const Plan = ({ planType, plan }) => {
  return (
    <div className={`plan ${plan.professional ? "professional" : null}`}>
      <h2>{plan.name}</h2>
      <div className="amount">
        &#x24;
        <span>
          {planType === "monthly" ? plan.value.monthly : plan.value.annually}
        </span>
      </div>
      <div className="divider"></div>
      <p>{plan.storage} GB Storage</p>
      <div className="divider"></div>
      <p>{plan.users} Users Allowed</p>
      <div className="divider"></div>
      <p>Send up to {plan.limit}</p>
      <div className="divider"></div>
      <button className="btn">learn more</button>
    </div>
  );
};

export default Plan;
