import './App.css';
import vdo from './assets/bg vdo.mp4';
import vdo1 from './assets/bg vdo 1.mp4'
import NavBar from './pages/NavBar';


export default function App(){
  return(
    <div className="App">
      <NavBar/>
      <div className='bgvdo'>
      <video
        className='vdo'
        height="100%"
        autoPlay
        muted
        loop
      >
        <source src={vdo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className='overflow_text'>
        <p class="typing-animation">
          Welcome To Green World !
        </p>
      </div>
      <div className='overflow_text1'>
        <p class="typing-animation1">
          Explore With Us !
        </p>
      </div>
      </div>
      <div className='content1'>
        <h1>Save Agriculture</h1>
        <div className='abt-content1'>
          <div className='abt'>
          Agriculture, the backbone of our sustenance, urgently needs preservation to ensure food security and environmental balance. Adopting sustainable farming practices, such as crop rotation, organic farming, and efficient water management, can rejuvenate soil health and boost productivity. Supporting local farmers through fair trade policies and technological assistance empowers them to thrive amid climate challenges. Reducing food waste and promoting responsible consumption also play pivotal roles in sustaining agriculture. Additionally, investing in agricultural research and development fosters innovation, helping farmers adapt to changing conditions. Encouraging community-based farming initiatives strengthens local food systems and enhances resilience. Implementing policies that protect agricultural land from urban sprawl is also essential. By prioritizing these measures, we can safeguard agriculture for future generations and nurture a healthier planet.
          </div>
          <div className='poster'></div>
        </div>
      </div>
      <div className='content2'>
        <h1>Our Aim</h1>
        <div className='abt-content1'>
          <div className='abt'>
            <ul>
              <li><b>Promote Sustainable Agriculture:</b>Advocate for eco-friendly farming practices that preserve the environment while boosting crop yields and farm profitability.</li><br/>
              <li><b>Offer High-Quality Products:</b>Provide a diverse range of top-notch agricultural products, from seeds and fertilizers to farming equipment, ensuring reliability and effectiveness.</li><br/>
              <li><b>Educate and Empower Farmers:</b>Share knowledge and innovative techniques to help farmers enhance their skills, productivity, and sustainability.</li><br/>
              <li><b>Build a Supportive Community:</b>Foster a network where farmers, agricultural experts, and enthusiasts can exchange ideas, experiences, and solutions.</li><br/>
              <li><b>Embrace Technological Innovation:</b>Highlight the latest advancements in agricultural technology to improve efficiency, reduce waste, and increase sustainability.</li><br/>
              <li><b>Promote Health and Nutrition:</b>Advocate for the production and consumption of nutritious, organically grown produce to improve public health.</li><br/>
              <li><b>Enhance Market Accessibility:</b>Facilitate easier access to local and global markets for farmers, ensuring they receive fair prices for their products.</li><br/>
              <li><b>Commit to Environmental Stewardship:</b>Support practices that protect natural resources, promote biodiversity, and combat climate change for a greener world.</li><br/>
            </ul>
          </div>
          <div className='bgvdo1'>
          <video
            className='vdo1'
            height="100%"
            autoPlay
            muted
            loop
          >
        <source src={vdo1} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
          </div>
        </div>
        <div className='products'>
            <h1>Our Products</h1>
          </div>
      </div>
    </div>

  );
}
    