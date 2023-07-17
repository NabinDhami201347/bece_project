import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import Navigation from "./src/routes/Navigation";
import { AuthProvider } from "./src/contexts/AuthContext";
import { BookProvider } from "./src/contexts/BookContext";
import { NoticeProvider } from "./src/contexts/NoticeContext";

import "react-native-gesture-handler";

const queryClient = new QueryClient();

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        {/* <BookProvider> */}
        {/* <NoticeProvider> */}
        <Navigation />
        {/* </NoticeProvider> */}
        {/* </BookProvider> */}
      </AuthProvider>
    </QueryClientProvider>
  );
}
