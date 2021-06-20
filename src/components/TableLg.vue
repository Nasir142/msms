<template>
  <div class="flex flex-col">
    <div class="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
      <div class="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
        <div class="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
          <table class="min-w-full divide-y divide-gray-200">
            <thead class="bg-green-600 text-white">
              <tr>
                <th scope="col" class="px-6 py-3 text-right text-xs font-medium  uppercase tracking-wider ">
                  {{td1 ? td1 : 'Name'}}
                </th>
                <th scope="col" class="px-6 py-3 text-right text-xs font-medium  uppercase tracking-wider">
                  {{td2 ? td2 : 'Title'}}
                </th>
                <th scope="col" class="px-6 py-3 text-right text-xs font-medium  uppercase tracking-wider">
                  {{td3 ? td3 : 'Status'}}
                </th>
                <th v-if="td4" scope="col" class="px-6 py-3 text-right text-xs font-medium  uppercase tracking-wider">
                  Role
                </th>
                <th scope="col" class="relative px-6 py-3">
                  <span class="sr-only">Edit</span>
                </th>
              </tr>
            </thead>
            <tbody class="bg-white divide-y divide-gray-200">
              <tr v-for="person in data" :key="person.email">
                <td class="px-6 py-4 whitespace-nowrap">
                  <div class="flex items-center">
                    <div class="flex-shrink-0 h-10 w-10">
                      <img class="h-10 w-10 rounded-full" :src="person.image" alt="" />
                    </div>
                    <div class="mr-4 text-right">
                      <div class="text-sm font-medium text-gray-900">
                        {{ person.name }}
                      </div>
                      <div class="text-sm text-gray-500">
                        {{ person.email }}
                      </div>
                    </div>
                  </div>
                </td>
                <td class="px-6 py-4 whitespace-nowrap ">
                  <div class="text-sm text-gray-900 text-right">{{ person.title }}</div>
                  <div class="text-sm text-gray-500 text-right">{{ person.department }}</div>
                </td>
                <td class="px-6 py-4 whitespace-nowrap text-right">
                  <span class="px-2 inline-flex text-xs leading-5  font-semibold rounded-full bg-green-100 text-green-800">
                    Active
                  </span>
                </td>
                <td v-if="td4" class="px-6 py-4 whitespace-nowrap text-left text-sm text-gray-500">
                  {{ person.role }}
                </td>
                <td class="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                  <a href="#" class="text-indigo-600 hover:text-indigo-900">Edit</a>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
name:"TableLg",
props:{
 td1 : String,
 td2 :String,
 td3: String,
 td4:String,
 data :Array
}

 
}
</script>