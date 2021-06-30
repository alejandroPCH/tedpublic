import React from 'react'
import { BrowserRouter,Route,Switch} from 'react-router-dom'


import Layout from './Layout'
import MainPage from '../pages/MainPage'
import NewAttendance from '../pages/NewAttendance'
import NotFound from '../pages/NotFound'
import BadgeEdit from '../pages/BadgeEdit'
import BadgeDetails from '../pages/BadgeDetails'
 function App(){
    return (
    
    <BrowserRouter>

        <Layout>

            <Switch>
                <Route exact path="/attendance" component={MainPage} />
                <Route exact path="/attendance/new" component={NewAttendance} />

                <Route exact path="/attendance/:badgeId" component={BadgeDetails} />

                <Route exact path="/attendance/:badgeId/edit" component={BadgeEdit} />
                <Route component={NotFound}/>

            </Switch> 
            
        </Layout>
    </BrowserRouter>

    )
}

export default App

