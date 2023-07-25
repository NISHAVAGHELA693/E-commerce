import "../inputField/styles.css";
const InputField = (props) => {
   const {type,name,id,value,handleChange,headeing}=props
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
    </div>
  );
};
export default InputField;