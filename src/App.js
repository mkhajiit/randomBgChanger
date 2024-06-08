import Button from './Components/Button';
import handleClick from './Handlers/handleClick';

function App() {
  return (
    <div>
      <h1>Home</h1>
      <Button handler={handleClick} />
      {/* handler 같은 prop이름은 컴포넌트에서 설정한것과 똑같이 해야함 */}
    </div>
  );
}

export default App;
