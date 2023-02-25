import React from 'react';
import './App.scss';

const App = () => {

  const[value, setValue] = React.useState('');
  const[checkedValue, setCheckedValue] = React.useState('');
  const[checkedValueArr, setCheckedValueArr] = React.useState('');
  const[resultArr, setResultArr] = React.useState([]);
  const[finish, setFinish] = React.useState([]);

  const handleChange = (e) => {
    
    setValue(e.target.value);
    //console.log(e.target.value)
  };

  const handleSubmit =(e) => {
    e.preventDefault();
    setCheckedValue(checkedValue => value.replace(/viagra|виагра|виагру|виагрой|xxx/gi, '***'));
    setCheckedValueArr([...checkedValueArr, checkedValue]);
    console.log(checkedValue);
   
    //console.log(checkedValueArr.join("<br>"));


    //setCheckedValueArr([...checkedValueArr, {checkedValue: value.replace(/viagra|виагра|виагру|виагрой|xxx/gi, '***')}]);
    
    setValue('');

    //setFinish(checkedValueArr.map((item, i) => <div key={i}> {item + ","} </div> ));
    //setResultArr(checkedValueArr.map((item, i) => <div key={i}> {item + " "} </div> ));
   
    
    // console.log(JSON.stringify(checkedValueArr));
    // let newArr= JSON.stringify(checkedValueArr);
    // let newArrArr = newArr.split(" ");
    // console.log(newArrArr);
    // console.log(checkedValueArr.length)

    // let resultArr = JSON.parse(newArrArr);
    // console.log(resultArr);

  
    // setShowResult(showResult = checkedValueArr.forEach(element => {
    //   document.write(element + '<br>')
    // }));
    // console.log(showResult)
    

    // setCheckedValueArr(checkedValueArr.forEach(element => {
    //   console.log(element)
    // } ))
    //console.log(checkedValueArr.lenght);

  }


  return (

    <div className="form__container">

    <div className="form__text_top">Hello, how are you?</div> 
      
      <div className='form__comments'>{checkedValue}</div>

      <div className='form__comments_before'>
        {/* {resultArr} */}
        {checkedValueArr}
      {/* {resultArr.map((item) => <li> {item} </li> )} */}
      </div>

     

      {/* <div className='form__comments_before'>{resultArr.forEach(element => {
        // document.write(element + '<br>')
        console.log(element + ' ')
      }) }</div> */}

      {/* <div className='form__comments_before'>{checkedValue} {finish}</div>   */}
      
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
