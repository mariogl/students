import Counter from "../Counter/Counter";
import "./Layout.css";
import StudentsList from "../StudentsList/StudentsList";
import CreateForm from "../CreateForm/CreateForm";

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
        <CreateForm />
        <Counter />
        <StudentsList />
      </main>
    </>
  );
};

export default Layout;
