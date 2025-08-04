import { Fragment } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { publicRoutes } from '~/routes';
import { DefaultLayout } from '~/components/Layout';

function App() {
    return (
        <Router>
            <div className="App">
                <Routes>
                    {publicRoutes.map((route, index) => {
                       
                        const Page = route.component;
                        let LayoutDefault = DefaultLayout
                        
                        if( route.layout ) {
                            LayoutDefault = route.layout
                        }else if( route.layout === null){
                            LayoutDefault = Fragment
                        }
                        return (
                            <Route
                                key={index}
                                path={route.path}
                                element={
                                    <LayoutDefault>
                                        <Page />
                                    </LayoutDefault>
                                }
                            ></Route>
                        );
                    })}
                </Routes>
            </div>
        </Router>
    );
}

export default App;
