import React from 'react';

function TeamCard() {
  return (
    <div className="card-container">
      <div className="card">
        <div className="card-image"></div>
        <div className="card-text">
          <span className="name">AA</span>
          <h2>Post One</h2>
          <p><div className="2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium quam pariatur enim,</div></p>
        </div>
        <div className="card-contact">
          <div className="contact contact-1">
            <a href="" target="_blank"><i class="fa fa-github"></i></a>
          </div>
          <div className="contact contact-2 border-sides">
            <a href="" target="_blank"><i class="fa fa-linkedin"></i></a>
          </div>
          <div className="contact contact-3">
            <a href="" target="_blank"><i class="fa fa-github"></i></a>
          </div>
        </div>
      </div>

      <div className="card">
        <div className="card-image"></div>
        <div className="card-text">
          <span className="name">MK</span>
          <h2>Post One</h2>
          <p><div className="2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium quam pariatur enim,</div></p>
        </div>
        <div className="card-contact">
          <div className="contact contact-1">
            <a href="" target="_blank"><i class="fa fa-github"></i></a>
          </div>
          <div className="contact contact-2 border-sides">
            <a href="" target="_blank"><i class="fa fa-linkedin"></i></a>
          </div>
          <div className="contact contact-3">
            <a href="" target="_blank"><i class="fa fa-github"></i></a>
          </div>
        </div>
      </div>

      <div className="card">
        <div className="card-image"></div>
        <div className="card-text">
          <span className="name">SL</span>
          <h2>Post One</h2>
          <p><div className="2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium quam pariatur enim,</div></p>
        </div>
        <div className="card-contact" style={{ background: "#FCAF38" }}>
          <div className="contact contact-1">
            <a href="" target="_blank"><i class="fa fa-github"></i></a>
          </div>
          <div className="contact contact-2 border-sides">
            <a href="" target="_blank"><i class="fa fa-linkedin"></i></a>
          </div>
          <div className="contact contact-3">
            <a href="" target="_blank"><i class="fa fa-github"></i></a>
          </div>
        </div>
      </div>
    </div >
  )
}

export default TeamCard;