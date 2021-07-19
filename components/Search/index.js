import {SearchIcon} from '@heroicons/react/outline';

export default function Search({searchTerm, value}) {
  return (
    <div className="w-full flex-grow lg:flex  lg:content-center lg:items-center lg:w-auto lg:block mt-2 lg:mt-0 z-20">
      <div className="flex-1 w-full mx-auto content-center py-4 px-8 lg:py-0">
        <span className="z-10 leading-snug font-normal absolute text-center text-gray-400 absolute bg-transparent rounded text-base items-center justify-center w-8 pl-3 py-3">
          <SearchIcon className="h-5" />
        </span>
        <input
          onChange={(e) => searchTerm(e)}
          value={value}
          type="text"
          placeholder="Search"
          className="px-3 py-3 placeholder-gray-400 text-gray-600 relative bg-white bg-white rounded text-sm border border-gray-400 outline-none focus:outline-none focus:ring w-full pl-10"
        />
      </div>
    </div>
  );
}
