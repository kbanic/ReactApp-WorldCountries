import "bootstrap/dist/css/bootstrap.css";
import "react-bootstrap-table-next/dist/react-bootstrap-table2.min.css";
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import {QueryClient, QueryClientProvider} from "react-query";

import About from "./About";
import Countries from "./Countries";
import Navbar from "./Navbar";

const queryClient = new QueryClient();

function App() {
    return (
        <div className="App">
            <BrowserRouter>
            <Navbar />
                <main>
                    <QueryClientProvider client={queryClient}>
                    <Switch>
                        <Route path='/' component={Countries} exact/>
                        <Route path='/about' component={About} />
                        <Route component={Error} />
                    </Switch>
                </QueryClientProvider>
                </main>
            </BrowserRouter>
        </div>
    );
}

export default App;
