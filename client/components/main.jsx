import React, { useState } from 'react'

const Main = (props) => {
    const [str, setStrNew] = useState('')
    const onChange = (e) => {
      const newValue = e.target.value
      setStrNew(newValue)
    }
    const onClick = () => {
      props.changeState(str)
    }
    return <div className="w-screen h-screen flex items-center justify-center bg-gradient-to-tr from-green-500 to-teal-800">
           <div className="bg-gradient-to-br from-green-500 to-teal-800  w-1/4 h-1/4 flex items-center place-content-center rounded-md border-2 border-emerald-400 border-double ">      
            <input
           type="text"
           name="username"
           id="username"
           className="block w-50% pl-7 pr-12 sm:text-sm rounded-full border border-green-300 placeholder-white antialiased bg-gradient-to-tl from-green-500 to-teal-800 outline-inherit text-emerald-200 font-mono font-semibold"
           placeholder="Username"
           autoComplete="given-name"
           value={str}
           onChange={onChange}
            />
          <button
           type="button"
           className="inline-block px-6 py-2.5 mt-1 ml-2 bg-teal-900 text-white font-medium text-xs leading-tight uppercase rounded-full shadow-md hover:bg-teal-600 hover:shadow-lg focus:bg-emerald-600 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-teal-500 active:shadow-lg transition duration-150 ease-in-out font-mono antialiased"
           onClick={onClick}
          >
            Search
          </button>
          </div>
    </div>
}



export default Main