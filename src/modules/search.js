import getData from "./getData";
import renderGoods from "./renderGoods";
import { searchfilter } from "./filters";

const search = () => {
	const searchInput = document.querySelector('.search-wrapper_input')
	searchInput.addEventListener('input', (event) => {
		const value = event.target.value

		getData(value).then((data) => {
			//   console.log(data);
			renderGoods(searchfilter(data, value))
		})
	})
}

export default search