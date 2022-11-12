import React from 'react'
import Container from '../global components/Container'
import crown from '../../img/crown.jpg'
import dahmer from '../../img/dahmer.jpg'
const style = { display: 'flex',flexDirection: 'column' , paddingRight:'10px',height: '50%', width: '100%',textAlign:'center' }
export default function Program() {
  return (
    <div style={{ width: '300px', height: '350px', flexDirection: 'column',  display: 'flex', justifyContent: 'space-between',alignItems:'center', margin: '10px 50px', position: 'absolute', right: '85px', top: '70%' }}>
      <div style={{padding:'20px 25px', textAlign:'center'}}><h4>The Night's Proram</h4></div>
      <div style={{display:'flex', justifyContent:'space-between',width:'100%'}} >
        <div style={style}>
          <p>Playing Now</p>
          <Container img={crown} title={'The Crown'} rate={8} desc={'At a time when Britain was recovering from war and her empire was in decline, a young woman took the throne as a matter of duty not desire. Prepare for a world full of intrigue and revelations in The Crown. Now Streaming on MediaHub.'}  />
        </div>
        <div style={style}>
          <p>Playing Next</p>
          <Container img={dahmer} title={'Jeffery Dahmer '} rate={7.5} desc={'At a time when Britain was recovering from war and her empire was in decline, a young woman took the throne as a matter of duty not desire. Prepare for a world full of intrigue and revelations in The Crown. Now Streaming on MediaHub.'}  />
        </div>
      </div>
    </div>
  )
}
