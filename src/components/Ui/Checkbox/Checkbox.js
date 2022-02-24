const Checkbox = () => {
  return (
    <>
      <input
        className="input-checkbox"
        id={'1'}
        type="checkbox"
        // checked={isChecked}
        name={'tik'}
        // onChange={onChange}
        // disabled={handleDisabled()}
      />

      <label className="label-input-checkbox" htmlFor={'tik'}>
        <span className="check-box">
          <svg width="12px" height="10px">
            <use href="#check"></use>
          </svg>
        </span>
      </label>
    </>
  );
};

export default Checkbox;
