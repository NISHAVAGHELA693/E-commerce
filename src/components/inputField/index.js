import "../inputField/styles.css";
const InputField = (props) => {
   const {type,name,id,value,handleChange,formErrors,headeing}=props
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
      {formErrors && (
        <span className="error">{formErrors}</span>
      )}
    </div>
  );
};
export default InputField;