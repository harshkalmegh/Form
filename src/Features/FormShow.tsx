function FormShow(props: any) {
  // if (!props.input.name) {
  //   return null;
  // }

  return (
    <div>
      <p>Name : {props.input.name}</p>
      <p>Country : {props.input.country}</p>
      <p>State : {props.input.state}</p>
      <p>City : {props.input.city}</p>
      <p>Email : {props.input.email}</p>
      <p>GitHub Url : {props.input.giturl}</p>
      <p>Photo : </p>
      <img src={props.input.photo} alt="photo" style={{ width: "200px" }} />
      <p>Password : {props.input.password}</p>
    </div>
  );
}
export default FormShow;
