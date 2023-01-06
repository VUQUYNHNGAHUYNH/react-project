import Home from "./routes/HomePage/Home"
import Shop from "./routes/ShopPage/Shop"
import Navbar from "./routes/Navbar/Navbar"
import {Routes, Route} from 'react-router-dom'
import CheckOut from "./routes/CheckOut/CheckOut"

const App =() => {
    return (
        <Routes>
         <Route path='/' element={<Navbar />} >
            <Route index element={<Home />} />
            <Route path='shop' element={<Shop />} />
            <Route path='checkout' element={<CheckOut />} />
        </Route>
        </Routes>
    )
}
export default App;