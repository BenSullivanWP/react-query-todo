import './App.css';
import { useState } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import List from './components/List/List';
import UserList from './components/UserList/UserList';
import { minutes } from '../src/helpers/minutes'

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      staleTime: minutes(100),
    }
  }
})

function App() {
  const [selectedUser, setSelectedUser] = useState(null)

  return (
    <QueryClientProvider client={queryClient}>
      <div className="App">
        <List />
        <UserList userId={162} />
      </div>
    </QueryClientProvider>
  );
}

export default App;
