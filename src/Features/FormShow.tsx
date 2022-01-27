import { useEffect } from "react";

function FormShow(props: any) {
  // if (!props.input.name) {
  //   return null;
  // }

  return (
    <div>
      {props.input.name &&
      props.input.name !== " " &&
      props.input.name !== " " ? (
        <p>Name : {props.input.name}</p>
      ) : null}
      {props.input.country ? <p>Country : {props.input.country}</p> : null}
      {props.input.state ? <p>State : {props.input.state}</p> : null}
      {props.input.city ? <p>City : {props.input.city}</p> : null}
      {props.input.email ? <p>Email : {props.input.email}</p> : null}
      {props.input.giturl ? <p>GitHub Url : {props.input.giturl}</p> : null}
      {props.input.photo ? (
        <p>
          Photo :
          <img src={props.input.photo} alt="photo" style={{ width: "200px" }} />
        </p>
      ) : null}
    </div>
  );
}
export default FormShow;
