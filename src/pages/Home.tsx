import BtnForm from '../components/BtnForm';
import Header from '../components/Header';

function Home() {
  return (
    <section>
      <Header pageName="Menu inicial" />
      <main
        className="flex flex-row justify-items-center items-center p-10 justify-evenly"
      >
        <BtnForm path="login&pwd" nameBtn="Login e Password" />
        <BtnForm path="Register" nameBtn="Register" />
      </main>
    </section>
  );
}

export default Home;
