import "../buttons/styles.css";
const FillButton = (props) => {
  const { type, handleClick, name, customStyle} = props;
  return (
    <div>
      <button
        type={type}
        onClick={handleClick}
        className={customStyle ? customStyle : "fill-btn"}
      >
        {name}
      </button>
    </div>
  );
};
export default FillButton;
