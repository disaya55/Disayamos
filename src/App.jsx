import { useState } from 'react'
import './App.css'
import { ImageProfile } from './components/ImageProfile'
import { Title } from './components/Title'
import moment from 'moment';

function App() {
  const [hide, setHide] = useState(false)

  return (
    <main id="main">
      <div className="leftPort">
        <ImageProfile image="/src/assets/react.svg" />

        <Title title="Thanadet Kaewsri (Matt)">
          <h3>ตำแหน่ง : Frontend</h3>
        </Title>

        <Title title="Contact">
     
          <p>วันที่ปัจจุบัน: {moment().format("D MMM YYYY")}</p>
          <p>วันเกิด: {moment("2002/09/05").format("D MMM YYYY")}</p>
          <p style={{ display: hide ? 'none': 'block'}} >
            Tel : +66935192266
          </p>
          <button onClick={() => setHide(!hide)}>
            {hide ? 'Show': 'Hide'}
          </button>
          <p>Email : s64122202084@ssru.ac.th</p>
        </Title>
    
        <Title title="Education">
          <p>ปริญญาตรี สาขาเทคโนโลยีสารสนเทศ</p>
          <p>มหาวิทยาลัยราชภัฏสวนสุนันทา</p> 
        </Title>
      </div>

      <div className="rightPort">
        <Title title="Profile">
          <p> อยากมีประสบการให้ตรงสาย.</p>
        </Title>

        <Title title="Work Experience">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid veritatis eligendi cumque, laborum dolore error at, excepturi eum distinctio iste facere obcaecati natus impedit eaque eveniet nulla? Cupiditate, blanditiis in?</p>
        </Title>

        <Title title="Skills">
          <p>photoshop</p>
        </Title>
      </div>
    </main>
  )
}

export default App
