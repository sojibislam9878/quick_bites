"use client";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const MangeDeleveryman = () => {
  const { refetch, isPending, data, isLoading, isFetching } = useQuery({
    queryKey: ["mangedeleveryman"],

    queryFn: async () => {
      const res = await axios.get(`http://localhost:3000/api/allDeleveryMan`);
      return res?.data;
    },
  });

  return (
    <div class="antialiased font-sans bg-gray-200 w-full">
      <div class="w-full mx-auto px-4 sm:px-8">
        <div class="py-8">
          <div>
            <h2 class="text-2xl font-semibold leading-tight">ALL Delevery Man</h2>
          </div>

          <div class="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto ">
            <div class="inline-block min-w-full shadow rounded-lg overflow-hidden">
              <table class="min-w-full leading-normal">
                <thead>
                  <tr>
                    <th class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                      Name
                    </th>
                    <th class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                      Documents
                    </th>
                    <th class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                       Email
                    </th>
                    <th class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                      Status
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {data?.result?.map((mangeUser) => (
                    <tr key={Math.random()}>
                      <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                        <div class="flex items-center">
                          <div class="flex-shrink-0 w-10 h-10">
                            <img
                              class="w-full h-full rounded-full"
                              src={mangeUser.image}
                              alt=""
                            />
                          </div>
                          <div class="ml-3">
                            <p class="text-gray-900 whitespace-no-wrap">
                              {mangeUser.name}
                            </p>
                          </div>
                        </div>
                      </td>
                      <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                        <p class="text-gray-900 whitespace-no-wrap">
                        {mangeUser.image}
                        </p>
                      </td>
                      <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                        <p class="text-gray-900 whitespace-no-wrap">
                        {mangeUser.email}
                        </p>
                      </td>
                      <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                        <span class={`${mangeUser.status==="active" ?  "text-green-700" : "text-red-700" } relative inline-block px-3 py-1 font-semibold leading-tight`}>
                          <span
                            aria-hidden
                            class={`${mangeUser.status==="active" ? "bg-green-200" : "bg-red-200"} absolute inset-0 opacity-50 rounded-full`}
                          ></span>
                          <span class="relative">{mangeUser.status}</span>
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MangeDeleveryman