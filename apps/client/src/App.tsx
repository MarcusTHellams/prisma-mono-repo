import {
  ErrorComponent,
  notificationProvider,
  ThemedLayout,
} from '@refinedev/chakra-ui';
import { Refine } from '@refinedev/core';
import { ChakraUIInferencer } from '@refinedev/inferencer/chakra-ui';
import routerBindings, {
  NavigateToResource,
  UnsavedChangesNotifier,
} from '@refinedev/react-router-v6';
import dataProvider from '@refinedev/simple-rest';
import { type Prisma } from 'database';
import { BrowserRouter, Outlet, Route, Routes } from 'react-router-dom';


const input: Prisma.UserWhereUniqueInput = {
  email: 'mehllams@hotmail.com',
};
console.log('input: ', input);

function App() {
  return (
    <>
      <BrowserRouter>
        <Refine
          notificationProvider={notificationProvider()}
          routerProvider={routerBindings}
          dataProvider={dataProvider('api')}
          resources={[
            {
              name: 'posts',
              list: '/posts',
              // show: '/blog-posts/show/:id',
              // create: '/blog-posts/create',
              // edit: '/blog-posts/edit/:id',
            },
          ]}
          options={{
            syncWithLocation: true,
            warnWhenUnsavedChanges: true,
          }}
        >
          <Routes>
            <Route
              element={
                <ThemedLayout>
                  <Outlet />
                </ThemedLayout>
              }
            >
              <Route
                index
                element={<NavigateToResource resource="blog_posts" />}
              />
              <Route path="posts">
                <Route index element={<ChakraUIInferencer />} />
                {/* <Route path="show/:id" element={<ChakraUIInferencer />} />
                <Route path="edit/:id" element={<ChakraUIInferencer />} />
                <Route path="create" element={<ChakraUIInferencer />} /> */}
              </Route>
              <Route path="*" element={<ErrorComponent />} />
            </Route>
          </Routes>
          <UnsavedChangesNotifier />
        </Refine>
      </BrowserRouter>
    </>
  );
}

export default App;
