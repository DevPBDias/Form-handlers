import BtnForm from '../components/BtnForm';
import Header from '../components/Header';

function Home() {
  return (
    <section>
      <Header pageName="Menu inicial" />
      <main
        className="flex flex-col justify-items-center items-center p-10"
      >
        <BtnForm path="login&pwd" nameBtn="Login e Password" />
      </main>
    </section>
  );
}

export default Home;
