import React,{useState,useEffect, useCallback} from "react";
import ReactDOM from "react-dom/client";
function PasswordGenerator()
{
  const [Pass, setPass]=useState('Set password attributes');
  const [length, setLen]=useState(1);
  const [numCheck, setNumCheck]=useState(false);
  const [specCharCheck, setspecCharCheck]=useState(false);
  const [lowerCheck, setlowerCheck]=useState(false);
  const [upperCheck, setupperCheck]=useState(false);
  
  const generatePassword=useCallback(()=>{
    let str="";
    if(numCheck)
      str+='1234567890'
    if(specCharCheck)
        str+="!@#$%^&*()_+=-`~{}[]:;'<>,.?/";
    if(lowerCheck)
      str+="qwertyuioplkjhgfdsazxcvbnm";
    if(upperCheck)
      str+="QWERTYUIOPLKJHGFDSAZXCVBNM";

    if(length===0 || str==="")
      {
        setPass('Set password attributes');
        return;
      }
      
      let pass="";

    for(let i=0;i<length;i++)
    {
      if(str.length>0)
        pass+=str[Math.floor(Math.random()*str.length)];
    }
    setPass(pass);
  },[length,numCheck,specCharCheck,lowerCheck,upperCheck])
  useEffect(()=>{
    generatePassword();
  },[length,numCheck,specCharCheck,lowerCheck,upperCheck]);
  return (
    <>
      <h1>Password Generator</h1>
      <h2>{Pass}</h2>
      <div>
        <div className="range">
          <input type="range" id='range' min={1} max={50} onChange={(ele)=>setLen(ele.target.value)}></input>
          <label htmlFor='range'>Length is {length}</label>
        </div>
        <div className="inputSection">
          <div className="checkBoxSection">
            <div className="checks">
              <input type="checkbox" id="Number" defaultChecked={numCheck} onChange={(ele)=>{setNumCheck(!numCheck)}}/>
              <label htmlFor="Number">Include Number</label>
            </div>
            <div className="checks">
              <input type="checkbox" id="Character" defaultChecked={specCharCheck} onChange={(ele)=>{setspecCharCheck(!specCharCheck)}}/>
              <label htmlFor="Character">Include Special Characters</label>
            </div>
            <div className="checks">
              <input type="checkbox" id="Lowercase" defaultChecked={lowerCheck} onChange={(ele)=>{setlowerCheck(!lowerCheck)}}/>
              <label htmlFor="Lowercase">Include Lowercase letters</label>
            </div>
            <div className="checks">
              <input type="checkbox" id="UpperCase" defaultChecked={upperCheck} onChange={(ele)=>{setupperCheck(!upperCheck)}}/>
              <label htmlFor="UpperCase">Include Uppercase letters</label>
            </div>
          </div>
          <button onClick={generatePassword}>Re-shuffle</button>
        </div>
      </div>
    </>
  )
}
ReactDOM.createRoot(document.getElementById('root')).render(<PasswordGenerator/>);

