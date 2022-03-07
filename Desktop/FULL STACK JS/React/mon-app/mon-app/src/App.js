import './style.css';
import img1 from './imageInSrc.jpg';
import video from './html.mp4'
function App() {
  return (
<div >
<div style={{border:'solid 1px black',maxwidth:'100vw'}}>
<h1 className="title">Nefzi Abdelkader</h1>
<br>
</br>
</div>
<h2 className='title'>GOMYCODE</h2>
<img style={{width:'600px',height:'600px',marginLeft:'900px'}} src={img1} alt="insrc"/>
<img style={{width:'600px',height:'600px'}} src="/imageInPublic.jpg" alt="imageinpublic" />
<video width="750" height="500" controls >
      <source src={video} type="video/mp4"/>
     </video>
</div>
  );
} 
export default App;
