const Save = (props) => {
  return (
    <>
      <button onClick={props.saveData} onClick={() => props.setEdit(false)}>
        save
      </button>
    </>
  );
};

export default Save;
