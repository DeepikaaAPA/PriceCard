import { useState } from "react";
import plans from "./data/plans.json";
import "./App.css";

function App() {
  console.log(plans);
  return (
    <div className="container  ">
      <div className="row">
        {plans.map((p) => (
          <Card plan={p} />
        ))}
      </div>
    </div>
  );
}
function Card({ plan }) {
  return (
    <>
      <div className="col-md-4">
        <div className="pricing-box mt-4">
          <div className="text-center">
            <h6 className="text-muted ">{plan.name}</h6>
            <h3>${plan.price}/month</h3>
          </div>
          <hr className="text-muted"></hr>
          <div className="mt-4 pt-2">
            <p className="mb-2">
              ✔{" "}
              {plan.users == "1" ? " Single User" : " " + plan.users + " Users"}
            </p>
            {plan.features.map((f) => (
              <p className={f.available ? "" : "text-muted"}>
                {f.available ? "✔" : "❌"}
                {f.name}
              </p>
            ))}
          </div>
          <button
            className={
              plan.name == "PRO"
                ? "btn btn-primary w-100"
                : "btn btn-lightblue w-100"
            }
          >
            Buy
          </button>
        </div>
      </div>
    </>
  );
}
export default App;
