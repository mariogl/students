const CreateForm = (): JSX.Element => {
  return (
    <form className="form" autoComplete="off" noValidate>
      <div className="form__control">
        <label htmlFor="name">Name: </label>
        <input type="text" id="name" />
      </div>
      <div className="form__control">
        <label htmlFor="surname">Surname: </label>
        <input type="text" id="surname" />
      </div>
      <div className="form__control">
        <button type="submit">create</button>
      </div>
    </form>
  );
};

export default CreateForm;
