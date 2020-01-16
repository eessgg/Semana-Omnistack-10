import React, { useEffect } from "react";

import "./global.css";
import './App.css'
import './Sidebar.css'
import './Main.css'

// Navigator.geolocation.getCurrentPosition()


function App() {
  useEffect(() => {
    Navigator.geolocation.getCurrentPosition(
      (position) => {
        console.log(position)
      },
      (err) => {
        console.log(err)
      },
      {
        timeout: 30000,
      }
    )
  }, [])


  return (
    <div id="app">
      <aside>
        <strong> Cadastrar </strong>
        <form>
          <div className="input-block">
            <label htmlFor="github_username"> Usuario do Github </label>
            <input name="github_username" id="github_username" />
          </div>
          <div className="input-block">
            <label htmlFor="techs"> Tecnologias </label>
            <input name="techs" id="techs" />
          </div>
          <div className="input-group">

            <div className="input-block">
              <label htmlFor="latitude"> Latitude </label>
              <input name="latitude" id="latitude" />
            </div>

            <div className="input-block">
              <label htmlFor="longitude"> Longitude </label>
              <input name="longitude" id="longitude" />
            </div>
          </div>
          <button type="submit">Salvar</button>
        </form>
      </aside>
      <main>
        <ul>
          <li className="dev-item">
            <header>
              <img src="https://cdn2.iconfinder.com/data/icons/user-avatars-3/100/Boy_headphones-512.png" alt="sd" />
              <div className="user-info">
                <strong>Ester ggomes</strong>
                <span>React, JS, NOde</span>
              </div>
            </header>
          </li>
          <li className="dev-item">
            <header>
              <img src="https://cdn2.iconfinder.com/data/icons/user-avatars-3/100/Boy_headphones-512.png" alt="sd" />
              <div className="user-info">
                <strong>Ester ggomes</strong>
                <span>React, JS, NOde</span>
              </div>
            </header>
          </li>
          <li className="dev-item">
            <header>
              <img src="https://cdn2.iconfinder.com/data/icons/user-avatars-3/100/Boy_headphones-512.png" alt="sd" />
              <div className="user-info">
                <strong>Ester ggomes</strong>
                <span>React, JS, NOde</span>
              </div>
            </header>
          </li>
        </ul>

      </main>
    </div>
  );
}

export default App;
