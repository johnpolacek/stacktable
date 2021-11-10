import ItemDropdown from "./ItemDropdown"

const getItemColumns = ({ activeItem, onToggleDropdown, onAddToCount }) => [
  {
    label: "",
    sortable: false,
    render: (id) => (
      <ItemDropdown
        id={id}
        onToggle={onToggleDropdown}
        onAddToCount={onAddToCount}
        activeItem={activeItem}
      />
    ),
  },
  {
    label: "Status",
    sortable: false,
    render: (status) => <div className="font-mono text-gray-700">{status}</div>,
  },
  {
    label: "Vehicle",
    sortable: true,
    render: ({ name, category, link, icon }) => (
      <div className="flex flex-wrap">
        <div className="text-3xl p-2 border md:ml-2 mr-4">{icon}</div>
        <div className="text-left pt-1">
          <p>
            <a href={link} className="text-blue-900 italic">
              {name}
            </a>
          </p>
          <p className="text-sm text-gray-600">{category}</p>
        </div>
      </div>
    ),
  },
  {
    label: "Cost per Trip",
    sortable: false,
  },
  {
    label: "Departure",
    sortable: false,
  },
  {
    label: "Count",
    sortable: false,
  },
]

export default getItemColumns
