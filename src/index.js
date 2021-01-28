import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function MediaCard({ profilePic, title, time, body, imgUrl }) {
  return <div>
    <div className="card-container">
      <img className="round" src={profilePic} />
      <div className="name"><a href="#"><b>{title}</b></a></div>
      <div className="content">
        <p>{body}</p>
      </div>
      <div className="square">
        <img className="square-post" src={imgUrl} />
      </div>
    </div>
  </div>
}

ReactDOM.render(
  <>
    <MediaCard profilePic="https://pbs.twimg.com/profile_images/1162267138842755075/zxLifsgg.jpg"
      title="@ImranKhan" body="Imran Ahmed Khan Niazi HI PP is the 22nd and current Prime Minister of Pakistan and the chairman of the Pakistan Tehreek-e-Insaf. Before entering politics, Khan was an international cricketer and captain of the Pakistan national cricket team, which he led to victory in the 1992 Cricket World Cup."
      imgUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQu5SmSUMqFF_TkfroF-Ll4I3boH-juOhHegg&usqp=CAU" />
      <br />
      <hr />
      <br />
    <MediaCard profilePic="https://upload.wikimedia.org/wikipedia/commons/4/46/PrimeMinisterNawazSharif.jpg"
      title="@NawazSharef" body="Mian Muhammad Nawaz Sharif is a Pakistani businessman and politician who served as the prime minister of Pakistan for three non-consecutive terms. Sharif is the longest-serving prime minister of Pakistan having served a total of more than 9 years."
      imgUrl="https://incpak.com/wp-content/uploads/2018/05/PMLN-Facebook-Cover.jpg" />
      <br />
      <br />
  </>,
  document.getElementById('root')
);