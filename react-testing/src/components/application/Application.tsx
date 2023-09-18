import React from "react";

const Application = () => {
  return (
    <form>
      <div>
        <label htmlFor="Name">Name</label>
        <input type="text" id="Name" value="reda" onChange={() => {}} />
      </div>
      <div>
        <label htmlFor="Bio">Bio</label>
        <textarea id="Bio" name="Bio" />
      </div>
      <div>
        <label datatest-id="lol" htmlFor="job-location">Job Location</label>
        <select id="job-location">
          <option value="">Select a Country</option>
          <option value="US">USA</option>
          <option value="GB">UK</option>
          <option value="CA">CANADA</option>
          <option value="IN">INDIA</option>
          <option value="AU">Australia</option>
        </select>
      </div>
      <div>
        <label>
          <input type="checkbox" id="terms" />I agree to the terms and
          conditions
        </label>
      </div>
      <button>Submit</button>
    </form>
  );
};

export default Application;
