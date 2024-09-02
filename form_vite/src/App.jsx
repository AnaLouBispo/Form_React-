import Footer from "./components/Footer/Footer";
import Form from "./components/Form/Form";
import Header from "./components/Header/Header";
import "./app.css";
import Card from "./components/Card/Card";
import card1 from "./assets/arthurVerocai.jfif";
import card2 from "./assets/evinha.jfif";
import card3 from "./assets/JorgeBen.jfif";
import Banner from "./components/Banner/Banner";

function App() {
  return (
    <>
      <Header />
      <Banner />
      <Form />
      <div className="cardInfo">
        <Card
          img={card1}
          title={"Arthur Verocai"}
          content={
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin accumsan a ligula eget laoreet. Curabitur placerat semper ipsum, eu convallis nisi vulputate eu."
          }
        />
        <Card
          img={card2}
          title={"Evinha"}
          content={
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin accumsan a ligula eget laoreet. Curabitur placerat semper ipsum, eu convallis nisi vulputate eu."
          }
        />
        <Card
          img={card3}
          title={"Jorge Ben Jor"}
          content={
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin accumsan a ligula eget laoreet. Curabitur placerat semper ipsum, eu convallis nisi vulputate eu."
          }
        />
      </div>
      <Footer />
    </>
  );
}

export default App;
