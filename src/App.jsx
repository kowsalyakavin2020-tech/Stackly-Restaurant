import AppRoutes from "./routes/AppRoutes";

function App() {
  return <AppRoutes />;
}

<BrowserRouter basename="/Stackly-Restaurant">
  <AppRoutes />
</BrowserRouter>
export default App;