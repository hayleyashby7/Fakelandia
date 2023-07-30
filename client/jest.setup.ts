import { server } from './src/mocks/server';

// Setup before tests
beforeAll(() => server.listen());

// Reset between tests
afterEach(() => server.resetHandlers());

// Clean up after tests
afterAll(() => server.close());
