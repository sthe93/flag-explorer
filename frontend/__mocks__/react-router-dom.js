// Simple mock implementations
export const BrowserRouter = ({ children }) => <div>{children}</div>;
export const Routes = ({ children }) => <div>{children}</div>;
export const Route = ({ element }) => element;
export const useNavigate = () => jest.fn();
export const useParams = () => ({});
export const Link = ({ children }) => <a>{children}</a>;