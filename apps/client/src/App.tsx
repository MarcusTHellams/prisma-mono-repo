import { Query } from './components/Query';

function App() {
  return (
    <>
      <Query loading={false} error={'Something went wrong'}>
        <h1>Hello World</h1>
      </Query>
    </>
  );
}

export default App;
