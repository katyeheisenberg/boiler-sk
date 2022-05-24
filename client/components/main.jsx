import React, { useState } from 'react'

// const Input = (props) => {
//     const [value, setValue] = useState('')
//     const onChange = (e) => {
//         const newValue = e.target.value
//         setValue(newValue)
//         props.onChange(newValue)
//     }
//     return <div id="input=field">
//         <input 
//           type="text"
//           value={value}
//           onChange={onChange} 
//         />
//     </div>
// }
 
// const Main = () => {
//   const [str, setStrNew] = useState('')
//   const onInputChange = (string) => {
//     setStrNew(string)
//   }
//   return <div>
//       <div>
//           <Input onChange={onInputChange} />
//       </div>
//       {str}
//   </div>
// }

const Main = (props) => {
    const [str, setStrNew] = useState('')
    const onChange = (e) => {
      const newValue = e.target.value
      setStrNew(newValue)
    }
    const onClick = () => {
      props.changeState(str)
    }
    return <div>
      <div className="flex justify-center ">
      <div className=" shadow-2xl rounded-lg border border-orange-200 w-96 mt-9 bg-gradient-to-br from-emerald-800 to-green-400">
      <div className="px-6 py-9">
        <div className="text-orange-500 font-bold text-xl mb-2 font-mono">Git Browser</div>
          <p className="text-white text-base font-medium font-mono">
            Search for a GitHub User
          </p>
          <label htmlFor="Username" className="mt-3 block text-sm font-medium text-white font-mono antialiased">
            GitHub User
          </label>
          <input
           type="text"
           name="username"
           id="username"
           className="block w-50% mt-3 pl-7 pr-12 sm:text-sm rounded-full border border-green-600 placeholder-white antialiased bg-gradient-to-tl from-emerald-800 to-green-400 ring-inherit outline-inherit text-emerald-200 font-mono font-semibold"
           placeholder="Username"
           autoComplete="given-name"
           value={str}
           onChange={onChange}
          />
          <button
           type="button"
           className="inline-block px-6 py-2.5 mt-3 border-2 border-orange-500 bg-green-500 text-white font-medium text-xs leading-tight uppercase rounded-full shadow-md hover:bg-green-600 hover:shadow-lg focus:bg-emerald-600 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-green-500 active:shadow-lg transition duration-150 ease-in-out font-mono antialiased"
           onClick={onClick}
          >
            Search
          </button>
        </div>
        </div>
        </div>
    </div>
}



export default Main