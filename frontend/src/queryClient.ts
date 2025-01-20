import { QueryClient } from "@tanstack/react-query";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry: (failureCount, error) => {
        if (error instanceof Error) {
          console.error(error);
        }
        // Retry up to 3 times
        return failureCount < 0;
      },
    },
  },
});

export default queryClient;
