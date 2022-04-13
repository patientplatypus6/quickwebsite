import BlogList from '../components/bloglist'
import styles from '../css/Main.module.css'
import Header from '../components/header'
import PageList from '../components/pagelist'
import Head from 'next/head'
import {useState, useEffect} from 'react'
import {postData, getData} from '../utility/utility'

const MessageHandler = ({msgprops}) => {
  const [inputval, setInputval] = useState("")
  const [msgs, setMsgs] = useState([])

  useEffect(()=>{
    console.log('value of inputval', inputval)
  },[inputval]) 

  useEffect(()=>{
    console.log('value of msgprops', JSON.stringify(msgprops))
    //console.log('value of msgprops.messages', JSON.stringify(msgprops.msgprops.msgprops.messages))
    setMsgs(msgprops)
  }, [msgprops])
 
 // useEffect(()=>{ 
 //   getData('http://164.92.157.124:3002/api/getmessages')
 //    .then(data => {
 //     console.log("inside messagewall and data:", data); // JSON data parsed by `data.json()` call
 //     setMsgs(data.messages)
 //   });
 //  }
 // , [])

  const handleEnter = () => {
    console.log("if you are seeing this message it's because this is a work in progress")
    postData('https://lightchan.org/api/addmessage', { message: inputval})
     .then(data => {
      console.log("inside messagewall and data:", data); // JSON data parsed by `data.json()` call
      setMsgs(data.messages)
    });
  }

  const displaymessages = () => {
    return(
      <div style={{padding: '5px'}}>
	hello displaymessages
        {msgs.map((msg, key)=>{
          return(
            <div 
            style={{}}
            key={key}>
              {msg}
            </div>
          )
          }
        )}
      </div>
    )   
  }

  return(
    <div style={{width: 'calc(100% - 20px)', background: ''}}>	
      <div style={{float: 'left', display: 'inline-block', width: '50%'}}>
        <div style={{display: 'inline-block'}}>
          <textarea cols="40" rows="20" style={{resize: 'none'}}  onChange={(e)=>{setInputval(e.target.value)}} value={inputval} />
        </div>
        <br/>
        <div style={{display: 'inline-block'}}>
          <div style={{background: 'black', color: 'white'}} onClick={()=>handleEnter()}>ENTER</div>
        </div>
      </div>
      <div style={{display: 'inline-block', width: '50%', background:'rgba(0,0,0,0.2)'}}>
        {displaymessages()}  
      </div>
    </div>
  )
}


//function useForceUpdate(){
//    const [value, setValue] = useState(0); // integer state
//    return () => setValue(value => value + 1); // update the state to force render
//}

export default function Messagewall(){
  const [msgprops, setMsgprops] = useState([])
  const [value, setValue] = useState(0)
  useEffect(()=>{
    //var await getData('http://lightchan.org/api/getmessages')
   getData('https://lightchan.org/api/getmessages')
   .then(data => {
    console.log("inside messagewall MAIN and data:", data.messages); // JSON data parsed by `data.json()` call
    setMsgprops(data.messages)
    console.log('value of msgprops after setting in main: ', msgprops)
   });
  }, [])
  useEffect(()=>{
    console.log('msgprops has updated and new value', msgprops)
    var newvalue = value + 1
    setValue(newvalue)
    console.log('value of value: ', value)
    console.log('state should have updated')
  }, [msgprops])
  return(
    <div>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
        <link href="https://fonts.googleapis.com/css2?family=Press+Start+2P&family=Roboto+Mono:wght@100&display=swap" rel="stylesheet"/>
      </Head>
      <div className={styles.headercontainer} style={{width: '100vw'}}>
        <Header/>
      </div> 
      <div className={styles.listcontainerleft}>
        <BlogList/>
      </div>
      <div className={styles.pagecontentcontainer}>
        This is the message wall
	{msgprops!=[]?
	  <MessageHandler msgprops={msgprops}/>:<div/>}
      </div>
      <div className={styles.listcontainerright}>
        <PageList/>
      </div>
    </div>
  )
}



//export async function getStaticProps(){
//  var msgprops = {}
//  msgprops = await getData('http://lightchan.org/api/getmessages')
//  console.log('value of msgs from getData: ', msgprops)
//  const msgprops = await getData('http://lightchan.org/go/messages/get')
//  return{
//    props: {
//      msgprops
//    }
//  }
//}
