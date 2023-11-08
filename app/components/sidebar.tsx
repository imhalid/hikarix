const data = [
  {
    id: 1,
    name: 'Category 1',
    slug: 'category-1',
  },
  {
    id: 2,
    name: 'Category 2',
    slug: 'category-2',
  },
  {
    id: 3,
    name: 'Category 3',
    slug: 'category-3',
  },
  {
    id: 4,
    name: 'Category 4',
    slug: 'category-4',
  },
  {
    id: 5,
    name: 'Category 5',
    slug: 'category-5',
  },
  {
    id: 6,
    name: 'Category 6',
    slug: 'category-6',
  },
  {
    id: 7,
    name: 'Category 7',
    slug: 'category-7',
  },
  {
    id: 8,
    name: 'Category 8',
    slug: 'category-8',
  },
  {
    id: 9,
    name: 'Category 9',
    slug: 'category-9',
  },
  {
    id: 10,
    name: 'Category 10',
    slug: 'category-10',
  },
]

const SideBar = () => {
  return (
    <aside className="h-full w-64 text-left bg-gray-100 sticky top-0 rounded-lg p-1 mr-3">
      <div className="">
        <h1 className="text-2xl font-bold">Categories</h1>
        <div className="flex flex-col mt-3">
          {data.map((item) => (
            <div key={item.id} className="flex justify-between items-center py-2 px-2 hover:bg-gray-200 rounded-md">
              <a href={`/category/${item.slug}`}>{item.name}</a>
              <span className="text-xs text-gray-400">10</span>
            </div>
          ))}
        </div>
      </div>
    </aside>
  )
}

export default SideBar
