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
        <input type="text" value={str} onChange={onChange}/>
        <button type="button" id="search-button" onClick={onClick}>Button</button>
    </div>

}



export default Main