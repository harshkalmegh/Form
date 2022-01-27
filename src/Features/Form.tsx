import { useEffect, useState } from "react";
import { render } from "react-dom";
import FormShow from "./FormShow";

/**
 * Algorithm
 * 1. Start
 * 2. create input field for name, country, state, city, email, giturl, photo, password
 * 3. using useState maintain state for fields
 * 4. using onchange set the state
 * 5. log the state on button click
 * 6. onclicking submit button data will pass through props
 * 7. on Button click Show data will show as fields name and input
 * 8. End
 *
 */

function Form() {
  const [showComponent, setShowComponent] = useState<any>(false);
  const [state, setState] = useState({});
  const [form, setForm] = useState({
    name: "",
    country: "",
    state: "",
    city: "",
    email: "",
    giturl: "",
    photo: "",
    password: "",
  });

  const handleUpdate = (e: any) => {
    const { name, value, files } = e.target;
    console.log(files);
    setForm({ ...form, [name]: value });
  };

  const handleImg = (e: any) => {
    const { name, files } = e.target;
    setForm({ ...form, [name]: URL.createObjectURL(files[0]) });
  };

  const handleOnclick = () => {
    setState(form);
    setShowComponent(true);
  };

  const handleClear = () => {
    setForm({
      ...form,
      name: "",
      country: "",
      state: "",
      city: "",
      email: "",
      giturl: "",
      photo: "",
      password: "",
    });
  };

  return (
    <div>
      <div>
        <p>Name : </p>
        <input
          type="text"
          name="name"
          value={form.name}
          onChange={handleUpdate}
          placeholder="Enter Name"
        />

        <p>Country : </p>
        <select
          name="country"
          value={form.country}
          onChange={handleUpdate}
          placeholder="Enter Country"
        >
          <option value="none" hidden>
            Select Country
          </option>
          <option value="China">China</option>
          <option value="India">India</option>
          <option value="Russia">Russia</option>
          <option value="United Kingdom">United Kingdom</option>
          <option value="United States">United States</option>
        </select>

        <p>State : </p>
        <select
          name="state"
          value={form.state}
          onChange={handleUpdate}
          placeholder="Enter State"
        >
          <option value="none" hidden>
            Select State
          </option>
          <option value="Arunachal Pradesh">Arunachal Pradesh</option>
          <option value="Assam">Assam</option>
          <option value="Bihar">Bihar</option>
          <option value="Madhya Pradesh">Madhya Pradesh</option>
          <option value="Maharashtra">Maharashtra</option>
        </select>

        <p>City : </p>
        <select
          name="city"
          value={form.city}
          onChange={handleUpdate}
          placeholder="Enter City"
        >
          <option value="none" hidden>
            Select City
          </option>
          <option value="Bhopal">Bhopal</option>
          <option value="Indore">Indore</option>
          <option value="Morena">Morena</option>
          <option value="Ratlam">Ratlam</option>
          <option value="Ujjain">Ujjain</option>
        </select>

        <p>Email : </p>
        <input
          type="text"
          name="email"
          value={form.email}
          onChange={handleUpdate}
          placeholder="Enter Email"
        />

        <p>GitHub Url : </p>
        <input
          type="text"
          name="giturl"
          value={form.giturl}
          onChange={handleUpdate}
          placeholder="Enter GitHub Url"
        />

        <p>Photo : </p>
        <input
          type="file"
          name="photo"
          onChange={handleImg}
          placeholder="Enter Photo"
          accept="image/gif, image/jpeg, image/png"
        />

        <p>Password : </p>
        <input
          type="password"
          name="password"
          value={form.password}
          onChange={handleUpdate}
          placeholder="Enter Password"
        />
      </div>
      <button onClick={handleOnclick}>Submit</button>
      <button onClick={handleClear}>Clear</button>
      {showComponent ? <FormShow input={state} /> : null}
    </div>
  );
}

export default Form;
