const Form = ({
  onSubmitHandler,
  onChangeHandler,
  inputValue,
  btntext,
  btnClassName,
}) => {
  return (
    <form onSubmit={onSubmitHandler}>
      <label>Title</label>
      <input className="input" value={inputValue} onChange={onChangeHandler} />
      <button className={`button ${btnClassName}`}>{btntext}</button>
    </form>
  );
};
export default Form;
