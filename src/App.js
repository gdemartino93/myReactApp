import Card from "./Card";

const amazonGift = {
  nome : "Amazon Giftcard",
  prezzo : 10,
  img : "https://a71eba0458acf57331d3-d31ce5ebd093935dff8526660841b743.ssl.cf2.rackcdn.com/products/f11900.jpg",
  soldBy : "Amazon s.p.a."
};
const covidMask = {
  nome : "Mascherine 50 pz",
  prezzo : 20,
  img : "https://www.dentaltix.com/it/sites/default/files/styles/large/public/ffp2-mascarilla-plegable-de-color-negro.jpeg?itok=GMTlXGrM",
  soldBy : "Sanitary Services s.p.a"
}
const montblanc = {
  nome : "Penna Montblanc",
  prezzo : 250,
  img : "https://www.montblanc.com/variants/images/30828384629622771/A/w2500.jpg",
  soldBy : "Montblanc s.p.a"
}
const reactCourse = {
  nome : "Corso React",
  prezzo : 10000,
  img : "https://amerlin.keantex.com/wp-content/uploads/2021/02/react.png",
  soldBy : "Gianluca"
}

function App() {
  return (
    <div className="App">
      <main>
        <Card {...amazonGift} />
        <Card {...covidMask}/>
        <Card {...montblanc}/>
        <Card {...reactCourse} />

      </main>
  
    </div>
  );
}

export default App;
