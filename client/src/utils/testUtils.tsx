import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { render, RenderOptions } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { BrowserRouter } from 'react-router-dom';
import { ReactElement, ReactNode } from 'react';

const queryClient = new QueryClient({
	defaultOptions: {
		queries: {
			retryDelay: 1,
			retry: 0,
		},
	},
});

export const wrapper = ({ children }: { children: ReactNode }) => (
	<QueryClientProvider client={queryClient}>
		<BrowserRouter>{children}</BrowserRouter>
	</QueryClientProvider>
);

export const renderWithRouter = (ui: ReactElement, { route = '/' } = {}, options?: Omit<RenderOptions, 'wrapper'>) => {
	window.history.pushState({}, 'Test page', route);

	return {
		user: userEvent.setup(),
		...render(ui, { wrapper, ...options }),
	};
};

export const customRender = (ui: React.ReactElement, options?: Omit<RenderOptions, 'wrapper'>) => render(ui, { wrapper, ...options });
