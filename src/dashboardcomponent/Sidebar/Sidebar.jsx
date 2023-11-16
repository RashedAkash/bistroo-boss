import { FaAd, FaBook, FaCalendarAlt, FaHome, FaList, FaShoppingCart, FaStar, FaUser, FaUsers, FaUtensilSpoon, FaWallet } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';

const Sidebar = () => {
	const admin = true;
  return (
    <div>
      <div className="h-full p-3 space-y-2 w-60 dark:bg-[#D1A054] dark:text-gray-900">
	<div className="flex items-center p-2 space-x-4">
		<img src="https://source.unsplash.com/100x100/?portrait" alt="" className="w-12 h-12 rounded-full dark:bg-gray-500" />
		<div>
			<h2 className="text-lg font-semibold">Leroy Jenkins</h2>
			<span className="flex items-center space-x-1">
				<a rel="noopener noreferrer" href="#" className="text-xs hover:underline dark:text-gray-400">View profile</a>
			</span>
		</div>
	</div>
	<div className="divide-y divide-gray-700">
					{
						admin ? <>
							<ul className="pt-2 pb-4 space-y-1 text-sm">
			<li className="dark:bg-gray-800 dark:text-gray-50">
				<a rel="noopener noreferrer" href="#" className="flex items-center p-2 space-x-3 rounded-md">
					<FaHome></FaHome>
					<NavLink to='/'>Admin HOME</NavLink>
				</a>
			</li>
			<li>
				<a rel="noopener noreferrer" href="#" className="flex items-center p-2 space-x-3 rounded-md">
					<FaUtensilSpoon></FaUtensilSpoon>
					<NavLink to='addItem'>Add Item</NavLink>
				</a>
			</li>
			<li>
				<a rel="noopener noreferrer" href="#" className="flex items-center p-2 space-x-3 rounded-md">
				<FaList />
					<NavLink to='manageItems'>Manage Items</NavLink>
				</a>
			</li>
			<li>
				<a rel="noopener noreferrer" href="#" className="flex items-center p-2 space-x-3 rounded-md">
					<FaUsers></FaUsers>
					<NavLink to='allUsers'>All Users</NavLink>
				</a>
			</li>
			<li>
				<a rel="noopener noreferrer" href="#" className="flex items-center p-2 space-x-3 rounded-md">
					<FaBook></FaBook>
					<NavLink to='manageBooking'>Manage booking</NavLink>
				</a>
			</li>
		</ul>
						</>:<><ul className="pt-2 pb-4 space-y-1 text-sm">
			<li className="dark:bg-gray-800 dark:text-gray-50">
				<a rel="noopener noreferrer" href="#" className="flex items-center p-2 space-x-3 rounded-md">
					<FaHome></FaHome>
					<NavLink to='userHome'>USER HOME</NavLink>
				</a>
			</li>
			<li>
				<a rel="noopener noreferrer" href="#" className="flex items-center p-2 space-x-3 rounded-md">
					<FaCalendarAlt></FaCalendarAlt>
					<NavLink to='reservation'>RESERVATION</NavLink>
				</a>
			</li>
			<li>
				<a rel="noopener noreferrer" href="#" className="flex items-center p-2 space-x-3 rounded-md">
				<FaWallet />
					<NavLink to='payment'>PAYMENT HISTORY</NavLink>
				</a>
			</li>
			<li>
				<a rel="noopener noreferrer" href="#" className="flex items-center p-2 space-x-3 rounded-md">
					<FaShoppingCart></FaShoppingCart>
					<NavLink to='/dashboard'>MY CART</NavLink>
				</a>
			</li>
			<li>
				<a rel="noopener noreferrer" href="#" className="flex items-center p-2 space-x-3 rounded-md">
					<FaAd></FaAd>
					<NavLink to='addReview'>ADD REVIEW</NavLink>
				</a>
			</li>
		</ul></>
		}
		<ul className="pt-4 pb-2 space-y-1 text-sm">
			<li>
				<NavLink rel="noopener noreferrer" to="/" className="flex items-center p-2 space-x-3 rounded-md">
					<FaHome></FaHome>
					<span>HOME</span>
				</NavLink>
			</li>
			<li>
				<a rel="noopener noreferrer" href="#" className="flex items-center p-2 space-x-3 rounded-md">
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-5 h-5 fill-current dark:text-gray-400">
						<path d="M440,424V88H352V13.005L88,58.522V424H16v32h86.9L352,490.358V120h56V456h88V424ZM320,453.642,120,426.056V85.478L320,51Z"></path>
						<rect width="32" height="64" x="256" y="232"></rect>
					</svg>
					<span>Logout</span>
				</a>
			</li>
		</ul>
	</div>
</div>
    </div>
  );
};

export default Sidebar;