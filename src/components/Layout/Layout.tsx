import "./Layout.css";

const Layout = (): JSX.Element => {
  return (
    <>
      <header className="main-header">
        <div className="container">
          <h1>Students App</h1>
        </div>
      </header>
      <main className="container">
        <h2>Students list</h2>
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
        <span className="students-info">Total: 6 students</span>
        <ul className="students">
          <li>
            <article className="student">
              <h2 className="student__name">Luis González</h2>
              <div className="student__actions">
                <button className="student__action student__action--toggle-mood">
                  😊
                  {/* 😔 */}
                </button>
                <button className="student__action student__action--remove">
                  🗑️
                </button>
              </div>
            </article>
          </li>
          <li>
            <article className="student">
              <h2 className="student__name">Luis González</h2>
              <div className="student__actions">
                <button className="student__action student__action--toggle-mood">
                  😊
                  {/* 😔 */}
                </button>
                <button className="student__action student__action--remove">
                  🗑️
                </button>
              </div>
            </article>
          </li>
          <li>
            <article className="student">
              <h2 className="student__name">Luis González</h2>
              <div className="student__actions">
                <button className="student__action student__action--toggle-mood">
                  😊
                  {/* 😔 */}
                </button>
                <button className="student__action student__action--remove">
                  🗑️
                </button>
              </div>
            </article>
          </li>
          <li>
            <article className="student">
              <h2 className="student__name">Luis González</h2>
              <div className="student__actions">
                <button className="student__action student__action--toggle-mood">
                  😊
                  {/* 😔 */}
                </button>
                <button className="student__action student__action--remove">
                  🗑️
                </button>
              </div>
            </article>
          </li>
          <li>
            <article className="student">
              <h2 className="student__name">Luis González</h2>
              <div className="student__actions">
                <button className="student__action student__action--toggle-mood">
                  😊
                  {/* 😔 */}
                </button>
                <button className="student__action student__action--remove">
                  🗑️
                </button>
              </div>
            </article>
          </li>
          <li>
            <article className="student">
              <h2 className="student__name">Luis González</h2>
              <div className="student__actions">
                <button className="student__action student__action--toggle-mood">
                  😊
                  {/* 😔 */}
                </button>
                <button className="student__action student__action--remove">
                  🗑️
                </button>
              </div>
            </article>
          </li>
        </ul>
      </main>
    </>
  );
};

export default Layout;
