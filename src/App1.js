import React from 'react';
import './App.scss';


const App = () => {

  const[value, setValue] = React.useState('');
  const[checkedValue, setCheckedValue] = React.useState('');
  const[checkedValueArr, setCheckedValueArr] = React.useState([]);
 
  
  const handleChange = (e) => {
    
    setValue(e.target.value);
  
  };

  const handleSubmit =(e) => {
    e.preventDefault();
    setCheckedValue(checkedValue => value.replace(/viagra|виагра|виагру|виагрой|xxx/gi, '***'));
    setCheckedValueArr([...checkedValueArr, checkedValue]);

    // console.log(value)
    // console.log(checkedValue);
    // console.log(checkedValueArr);
   
    setValue('');

  }


  return (

    <div className="form__container">

    <div className="form__text_top">Hello, how are you?</div> 
      
      <div className='form__comments'>{checkedValue}</div>
      

      <div className='form__comments_before'>
       
        {checkedValueArr.map((message)=> <div key={message}>{message}</div>)}
      
      </div>
      
      <div className='form__activepart'>

      <form className="form__submit" onSubmit = {handleSubmit}>
      <textarea className="form__textarea" onChange={handleChange} value={value}/>
      <input className="form__input" type="submit" value = "submit"/>
      </form>
      </div>
  
    </div>
  );
}

export default App;
