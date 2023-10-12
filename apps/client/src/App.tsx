import { type Prisma } from 'database';

const input: Prisma.UserWhereUniqueInput = {
  email: 'mehllams@hotmail.com',
};
console.log('input: ', input);

function App() {
  return (
    <>
      <h1>Hello World</h1>
    </>
  );
}

export default App;
