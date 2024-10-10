import Header from "./Header"
import AddToDo from "./AddToDo";
import ConditionalRendering from "./ConditionalRendering";
import Login from "./Login"
function App() {
  var title = "To do List"

  return (
    <div>{
      /*
      
      <ConditionalRendering />
       <Login/>
     
      */}
      <Header company={title} />
       <AddToDo />
     
      
    </div>
  );
}

export default App;
