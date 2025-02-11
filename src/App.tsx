import { useState } from 'react'
import './index.css'

function App() {
  const [file, setFile] = useState<File | null>(null)

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = event.target.files?.[0]
    if (selectedFile && selectedFile.type === 'text/xml') {
      setFile(selectedFile)
    } else {
      alert('Please select an XML file')
    }
  }

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg shadow-md p-8 w-full max-w-md">
        <h1 className="text-2xl font-semibold text-center mb-6">XML File Upload</h1>
        <div className="space-y-4">
          <label className="block">
            <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center cursor-pointer hover:border-blue-500 transition-colors">
              <div className="text-gray-600 mb-2">
                {file ? file.name : 'Click to upload or drag and drop'}
              </div>
              <div className="text-sm text-gray-400">XML files only</div>
            </div>
            <input
              type="file"
              className="hidden"
              accept=".xml"
              onChange={handleFileChange}
            />
          </label>
          <button
            className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 disabled:opacity-50 disabled:cursor-not-allowed"
            disabled={!file}
          >
            Process XML
          </button>
        </div>
      </div>
    </div>
  )
}

export default App
