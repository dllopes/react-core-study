export default function Button({children, ...props}) {
  return (
    <button className="bg-gray-800 text-white px-6 py-2 rounded shadow hover:bg-gray-600" {...props}>
      {children}
    </button>
  )
}