//import logo from './logo.svg';
import './App.css';
//import profile from './profile.jpeg'

function Header(props){
  console.log(props);
  return(
    <h1>Learning React with {props.name}</h1>
  );
}
function Main(props){
  return(
    <section>
      <p>Lets build a web app with</p>
      <img src={"https://github.com/bharathsurampudi.png"} height = {200} alt="man standing with bag on his shoulder"/>

      <ul style = {{textAlign : "left"}}>
        {props.stacks.map((stack) => (<li key ={stack.id}>{stack.title}</li>))}
      </ul>
      </section>
  );
}
function Footer(props){
  return(
      <footer>
        <p>Copyright@{props.year}</p>
      </footer>
      
  );
}
const stacks = ["python","SQL","JavaScript","React"];
const stackObjects = stacks.map((stack,i) => ({id : i, title : stack}));
function App() {
  return (
    <div className="App">
      <Header name="Bharath Surampudi"/>
      <Main stacks = {stackObjects}/>
      <Footer year = {new Date().getFullYear()}/>
    </div>
  );
}

export default App;
