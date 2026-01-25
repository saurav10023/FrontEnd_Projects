import { useState } from "react";

export default function Todo() {
  const [list, addtolist] = useState([]);
  const [text, settext] = useState('');

  function addtodo() {
    if (!text.trim()) return;
    addtolist(prev => [...prev, text]);
    settext('');
  }

  function removetask(index) {
    addtolist(prev => prev.filter((_, i) => i !== index));
  }

  return (
    <div className="min-h-screen bg-linear-to-br from-indigo-50 to-fuchsia-50 p-4 sm:p-6">
      {/* Header */}
      <div className="max-w-xl mx-auto bg-white rounded-2xl shadow-lg p-5">
        <h1 className="text-2xl sm:text-3xl font-bold text-center text-fuchsia-700 mb-4">
          📝 Todo List
        </h1>

        {/* Input Section */}
        <div className="flex gap-2">
          <input
            type="text"
            value={text}
            placeholder="Add a new task..."
            onChange={(e) => settext(e.target.value)}
            className="flex-1 px-3 py-2 rounded-xl border focus:outline-none focus:ring-2 focus:ring-fuchsia-400"
            onKeyDown={(e) => e.key === 'Enter' && addtodo()}
          />
          <button
            onClick={addtodo}
            className="bg-fuchsia-600 hover:bg-fuchsia-700 text-white px-4 py-2 rounded-xl font-semibold transition"
          >
            Add
          </button>
        </div>
      </div>

      {/* Todo List */}
      <div className="max-w-4xl mx-auto mt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {list.map((item, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-md p-4 flex flex-col justify-between"
          >
            <div>
              <span className="inline-block mb-2 text-xs font-semibold text-gray-500">
                Task {index + 1}
              </span>
              <p className="text-gray-800 wrap-break-word">{item}</p>
            </div>
            <button
              onClick={() => removetask(index)}
              className="mt-4 bg-green-500 hover:bg-green-600 text-white py-1.5 rounded-xl transition"
            >
              Done
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
