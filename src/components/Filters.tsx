//* Packages Imports */

//* Components Imports */
import Search from "@Components/Search";

const Filters = () => {
    return (
        <div className="w-full h-12 border-2 border-gray-100 rounded-lg flex items-center justify-between relative">
            <Search />
            <div>Currency</div>
            <div>Sorting</div>
        </div>
    )
}

export default Filters;