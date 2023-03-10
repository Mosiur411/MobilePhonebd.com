import { toast } from 'react-toastify'
import { useGetInfoQuery, useDeleteInfoMutation } from '../../app/features/Api/user'
import Loading from '../../components/shared/Loading.tsx'
export default function User() {
  const { data, isError, isLoading, isSuccess } = useGetInfoQuery()
  const [DeleteUserInfo] = useDeleteInfoMutation()
  if (isLoading) {
    return <Loading />
  }
  const DeleteUser = async (Id) => {
    const data = await DeleteUserInfo({ Id })
    if (data) {
      toast("Success Delete")
    }
  }
  return (
    <div className='p-10'>

      <div className="overflow-x-auto relative shadow-md sm:rounded-lg">
        <div className="flex justify-between items-center pb-4">
          <div>
            <button id="dropdownRadioButton" data-dropdown-toggle="dropdownRadio" className="inline-flex items-center text-gray-500 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-3 py-1.5 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700" type="button">
              <svg className="mr-2 w-4 h-4 text-gray-400" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillrule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" cliprule="evenodd"></path></svg>
              Last 30 days
              <svg className="ml-2 w-3 h-3" aria-hidden="true" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokelinecap="round" strokelinejoin="round" strokewidth="2" d="M19 9l-7 7-7-7"></path></svg>
            </button>
            <div id="dropdownRadio" className="hidden z-10 w-48 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600" data-popper-reference-hidden="" data-popper-escaped="" data-popper-placement="top">
              <ul className="p-3 space-y-1 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownRadioButton">
                <li>
                  <div className="flex items-center p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-600">
                    <input id="filter-radio-example-1" type="radio" value="" name="filter-radio" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                    <label htmlFor="filter-radio-example-1" className="ml-2 w-full text-sm font-medium text-gray-900 rounded dark:text-gray-300">Last day</label>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <label htmlFor="table-search" className="sr-only">Search</label>
          <div className="relative">
            <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
              <svg className="w-5 h-5 text-gray-500 dark:text-gray-400" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillrule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" cliprule="evenodd"></path></svg>
            </div>
            <input type="text" id="table-search" className="block p-2 pl-10 w-80 text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search for items" />
          </div>
        </div>
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="py-3 px-6">
                Names
              </th>
              <th scope="col" className="py-3 px-6">
                Email
              </th>
              <th scope="col" className="py-3 px-6">
                Category
              </th>
              <th scope="col" className="py-3 px-6">
                Action
              </th>
              <th scope="col" className="py-3 px-6">
                Delete
              </th>
            </tr>
          </thead>
          <tbody>
            {
              data.data.map(data => {
                return (
                  <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                    <th scope="row" className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                      {data?.email}
                    </th>
                    <td className="py-4 px-6">
                      White
                    </td>
                    <td className="py-4 px-6">
                      Laptop PC
                    </td>
                    <td className="py-4 px-6">
                      {data?.uid}
                    </td>
                    <td className="py-4 px-6">
                      <button onClick={() => DeleteUser(data?._id)} className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Delete</button>
                    </td>
                  </tr>
                )
              })
            }

          </tbody>
        </table>
      </div>


    </div>
  )
}
