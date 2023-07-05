// import { BrowserRouter, Route, Routes } from "react-router-dom"
import Header from "./components/Header"
import Home from "./pages/Home"
import Cart from "./pages/Cart"

const App = () => {
	return (
		<div className="">
			{/* // <BrowserRouter> */}

			<Header />
			{/* // <Routes> */}
			<div className="">
				{/* <Route path="/" exact> */}
				<Home />
				{/* </Route>
					<Route path="/cart" exact>
						<Cart />
					</Route> */}
			</div>
			{/* </Routes> */}
			{/* // </BrowserRouter> */}
		</div>
	)
}

export default App
