import { useEffect, useState } from "react";
import { render } from "react-dom";
import FormShow from "./FormShow";
import Modal from "./Modal";

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
  const [error, setError] = useState("");
  const [state, setState] = useState({});
  const [img, setImg] = useState([]);
  const [form, setForm] = useState<any>({
    name: "",
    country: "",
    state: "",
    city: "",
    email: "",
    giturl: "",
    photo: [],
    password: "",
    confirmPassword: "",
  });
  const [show, setShow] = useState(false);

  const handleUpdate = (e: any) => {
    const { name, value, files } = e.target;
    console.log(files);
    setForm({ ...form, [name]: value });
  };

  // Version 1
  // const handleImg = (e: any) => {
  //   const { photo } = form;
  //   const { name, files } = e.target;
  //   for (let i = 0, numFiles = files.length; i < numFiles; i++) {
  //     photo.push(URL.createObjectURL(files[i]));
  //   }
  //   setForm({ ...form, [name]: photo });
  // };

  // Version 2
  // const handleImg = (e: any) => {
  //   const { photo } = form;
  //   const { name, files } = e.target;
  //   photo.push(URL.createObjectURL(files[0]));
  //   setForm({ ...form, [name]: photo });
  // };

  // Version 3
  const handleImg = (e: any) => {
    const { photo, img } = form;
    const { name, files } = e.target;
    const arr = [];
    arr.push(files);
    // photo.push(URL.createObjectURL(files[0]));
    // setForm({ ...form, [name]: photo });
    console.log(arr);
  };

  const handleOnclick = () => {
    const {
      name,
      country,
      state,
      city,
      email,
      giturl,
      photo,
      password,
      confirmPassword,
    } = form;
    if (name) {
      setForm({ ...form, name: name.replace(/\s+/g, " ").trim() });
    }
    if (!name) {
      setShow(true);
      return setError("Name field should not be empty");
    }
    // if (name.match(/^[a-zA-Z]+$/) == null) {
    //   setShow(true);
    //   return setError("Name is not proper");
    // }

    if (!country) {
      setShow(true);
      return setError("Country field should not be empty");
    }
    if (!state) {
      setShow(true);
      return setError("State field should not be empty");
    }
    if (!city) {
      setShow(true);
      return setError("City field should not be empty");
    }
    if (!email) {
      setShow(true);
      return setError("email field should not be empty");
    }
    if (
      email.match(
        /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/
      ) == null
    ) {
      setShow(true);
      return setError("Email is not proper");
    }
    if (!giturl) {
      setShow(true);
      return setError("GitHub Url field should not be empty");
    }
    if (
      giturl.match(
        /^(http(s)?:\/\/)[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\(\)\*\+,;=.]+$/gm
      ) == null
    ) {
      setShow(true);
      return setError("GitHub Url is not in proper form");
    }
    if (!photo) {
      setShow(true);
      return setError("Photo field should not be empty");
    }
    if (!password) {
      setShow(true);
      return setError("Password field should not be empty");
    }
    if (
      password.match(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/gm) ==
      null
    ) {
      setShow(true);
      return setError(
        "Password should contain atleast one character capital, one symbol and number"
      );
    }
    if (password !== confirmPassword) {
      setShow(true);
      return setError("Password didn't match");
    }
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
      photo: [],
      password: "",
      confirmPassword: "",
    });
    setShowComponent(false);
  };

  return (
    <div>
      <Modal
        onClose={() => {
          setShow(false);
        }}
        show={show}
        error={error}
      />
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
          multiple
        />
        {form.photo &&
          form.photo.map((val: any, key: any) => {
            return (
              <div key={key}>
                <img src={val} alt="image" style={{ width: "150px" }} />
                <button
                  onClick={() => {
                    form.photo.splice(key, 1);
                    setForm({ ...form, photo: form.photo || [] });
                  }}
                >
                  clear
                </button>
              </div>
            );
          })}

        <p>Password : </p>
        <input
          type="password"
          name="password"
          value={form.password}
          onChange={handleUpdate}
          placeholder="Enter Password"
        />
        <p>Confirm Password : </p>
        <input
          type="password"
          name="confirmPassword"
          value={form.confirmPassword}
          onChange={handleUpdate}
          placeholder="Confirm Password"
        />
      </div>
      <button onClick={handleOnclick}>Submit</button>
      <button onClick={handleClear}>Clear</button>
      {showComponent ? <FormShow input={state} /> : null}
      {/* <div className={error ? "errorModal" : "errorModals"}>{error}</div> */}
    </div>
  );
}

export default Form;
