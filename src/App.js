import './App.css';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import List from './components/List/List';
import { minutes } from '../src/helpers/minutes'

const queryClient = new QueryClient({ staleTime: minutes(100) })

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="App">
        <List />
      </div>
    </QueryClientProvider>
  );
}

export default App;
