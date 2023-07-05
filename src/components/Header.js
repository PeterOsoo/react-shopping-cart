import { FaShoppingCart } from "react-icons/fa"
import {
	Badge,
	Container,
	Dropdown,
	FormControl,
	Nav,
	Navbar,
} from "react-bootstrap"
// import { Link } from "react-router-dom"

const Header = () => {
	return (
		<Navbar bg="dark" variant="dark" style={{ height: 80 }}>
			<Container>
				<Navbar.Brand>
					{/* <Link to="/">Mavitu Shopping </Link> */}
					<a href="#">Shoppe</a>
				</Navbar.Brand>

				<Navbar.Text className="search">
					<FormControl
						style={{ width: 500 }}
						type="search"
						placeholder="Search a product..."
						className="m-auto"
						aria-label="Search"
					/>
				</Navbar.Text>

				<Nav>
					<Dropdown alignRight>
						<Dropdown.Toggle variant="success">
							<FaShoppingCart color="white" fontSize="25px" />
							<Badge> {12} </Badge>
						</Dropdown.Toggle>

						{/* <Dropdown.Menu style={{ minWidth: 370 }}>Items</Dropdown.Menu> */}
					</Dropdown>
				</Nav>
			</Container>
		</Navbar>
	)
}

export default Header
