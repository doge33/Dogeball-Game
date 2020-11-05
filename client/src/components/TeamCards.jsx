import React from 'react';
import MK from '../assets/michael_photo.jpg'
import AA from '../assets/adnan_ash.jpg'
import SL from '../assets/sandy.png'

function TeamCard() {
  return (
    <div className="card-container" id="team">
      <div className="card card__AA-bg">
        <div className="card-image">
          <div>
            <img src={AA} alt="AA" />
          </div>
        </div>
        <div className="card-text">
          <span className="name">AA</span>
          {/* <h2>Adnan Ashfaq</h2> */}
          <p><div>Like to learn and build things on my own. Hardcore gamer, love to code and heavy anime watcher. Volunteer work on spare time.</div></p>
        </div>
        <div className="card-contact card-contact__AA-social">
          <div className="contact contact-1">
            <a href="https://github.com/dreamb0yDani" target="_blank"><i class="fa fa-github"></i></a>
          </div>
          <div className="contact contact-2 border-sides">
            <a href="https://www.linkedin.com/in/adnanashfaq/" target="_blank"><i class="fa fa-linkedin"></i></a>
          </div>
        </div>
      </div>

      <div className="card card__MK-bg">
        <div className="card-image">
          <div>
            <img src={MK} alt="MK" />
          </div>
        </div>
        <div className="card-text">
          <span className="name">MK</span>
          {/* <h2>Post One</h2> */}
          <p><div className="2">Former financial analyst turned developer. Avid gamer who also loves a good book. And long walks on the beach.</div></p>
        </div>
        <div className="card-contact card-contact__MK-social">
          <div className="contact contact-1">
            <a href="https://github.com/mrklep90" target="_blank"><i class="fa fa-github"></i></a>
          </div>
          <div className="contact contact-2 border-sides">
            <a href="https://www.linkedin.com/in/michaelk9290/" target="_blank"><i class="fa fa-linkedin"></i></a>
          </div>
        </div>
      </div>

      <div className="card card__SL-bg">
        <div className="card-image">
          <div>
            <img src={SL} alt="SL" />
          </div>
        </div>
        <div className="card-text">
          <span className="name">SL</span>
          {/* <h2>Post One</h2> */}
          <p><div className="2">New gamer passionate about anything involving creativity and technology - cinema, gaming, web development...also enjoy building Ikea furnitures :)</div></p>
        </div>
        <div className="card-contact card-contact__SL-social">
          <div className="contact contact-1">
            <a href="https://github.com/doge33" target="_blank"><i class="fa fa-github"></i></a>
          </div>
          <div className="contact contact-2 border-sides">
            <a href="https://www.linkedin.com/in/sandy-long-3657b335/" target="_blank"><i class="fa fa-linkedin"></i></a>
          </div>
        </div>
      </div>
    </div >
  )
}

export default TeamCard;