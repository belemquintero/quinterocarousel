import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'
import { Button, Carousel } from 'antd';



function App() {
  function onChange(a, b, c) {
    console.log(a, b, c);
  }

  const contentStyle = {
    height: '550px',
    color: '#fff',
    lineHeight: '160px',
    textAlign: 'center',
    background: 'black',
  };
  return (
   <>
    <Carousel afterChange={onChange}>
    <div>
      <h3 style={contentStyle}>
      <center>
      <img src='https://raw.githubusercontent.com/belemquintero/CarouselMG/main/imagenesFinal/1.jpg'/>
      </center>
      </h3>
    </div>

    <div>
      <h3 style={contentStyle}>
      <center>
      <img src='https://raw.githubusercontent.com/belemquintero/CarouselMG/main/imagenesFinal/2.jpg'/>
      </center>
      </h3>
    </div>

    <div>
      <h3 style={contentStyle}>
      <center>
      <img src='https://raw.githubusercontent.com/belemquintero/CarouselMG/main/imagenesFinal/3.jpg'/>
      </center>
      </h3>
    </div>

    <div>
      <h3 style={contentStyle}>
      <center>
      <img src='https://raw.githubusercontent.com/belemquintero/CarouselMG/main/imagenesFinal/4.jpg'/>
      </center>
      </h3>
    </div>

    <div>
      <h3 style={contentStyle}>
      <center>
      <img src='https://raw.githubusercontent.com/belemquintero/CarouselMG/main/imagenesFinal/5.jpg'/>
      </center>
      </h3>
    </div>

    <div>
      <h3 style={contentStyle}>
      <center>
      <img src='https://raw.githubusercontent.com/belemquintero/CarouselMG/main/imagenesFinal/6.jpg'/>
      </center>
      </h3>
    </div>

    <div>
      <h3 style={contentStyle}>
      <center>
      <img src='https://raw.githubusercontent.com/belemquintero/CarouselMG/main/imagenesFinal/7.jpg'/>
      </center>
      </h3>
    </div>
  
    <div>
      <h3 style={contentStyle}>
      <center>
      <img src='https://raw.githubusercontent.com/belemquintero/CarouselMG/main/imagenesFinal/8.jpg'/>
      </center>
      </h3>
    </div>

    <div>
      <h3 style={contentStyle}>
      <center>
      <img src='https://raw.githubusercontent.com/belemquintero/CarouselMG/main/imagenesFinal/9.jpg'/>
      </center>
      </h3>
    </div>

    <div>
      <h3 style={contentStyle}>
      <center>
      <img src='https://raw.githubusercontent.com/belemquintero/CarouselMG/main/imagenesFinal/10.jpg'/>
      </center>
      </h3>
    </div>

    <div>
      <h3 style={contentStyle}>
      <center>
      <img src='https://raw.githubusercontent.com/belemquintero/CarouselMG/main/imagenesFinal/11.jpg'/>
      </center>
      </h3>
    </div>

    <div>
      <h3 style={contentStyle}>
      <center>
      <img src='https://raw.githubusercontent.com/belemquintero/CarouselMG/main/imagenesFinal/12.jpg'/>
      </center>
      </h3>
    </div>
  </Carousel>
   </>
  );
}

export default App;
