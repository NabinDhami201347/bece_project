import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import Navigation from "./src/routes/Navigation";
import { AuthProvider } from "./src/contexts/AuthContext";
import { BookProvider } from "./src/contexts/BookContext";

const queryClient = new QueryClient();

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <BookProvider>
          <Navigation />
        </BookProvider>
      </AuthProvider>
    </QueryClientProvider>
  );
}
