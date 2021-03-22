import Header from "./components/Header"


function App() {
  const name= 'Brad'

  return (
    <div className="container">
      <Header title={name}/>
    </div>
  )
}


export default App;
