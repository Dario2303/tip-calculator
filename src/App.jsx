import Calculator from "./components/Calculator";

function App() {

  return (
    <div>
      <div className="w-full h-screen flex flex-col gap-3 justify-center items-center">
        <h1 className="uppercase -tracking-[-0.3em] text-base text-[var(--Dark-grayish-cyan)]">Spli<br/>tter</h1>
        <Calculator/>
      </div>  
    </div>
  )
}

export default App;
