import "../inputField/styles.css";
const InputField = (props) => {
   const {type,name,id,value,handleChange,formErrors={},headeing}=props
  //  console.log('hgj....',formErrors)
  return (
    <div className="maindiv">

        {headeing&&
        <label >{headeing}</label>
}
      <input
        type={type}
        name={name}
        id={id}
        value={value}
        onChange={handleChange}
    
      />

       
       {/* {formErrors?.username ? <span className="error">{formErrors.username}</span>
       : <span className="error">{formErrors.password}</span>}
        */}
    </div>
  );
};
export default InputField;