import React from 'react'
import "./Stat.css"
export default function Stat() {
  return (
      <div className='nobg'>
          <div className="qouteStat">
              “Unlock Good Vibes! Key to happy spaces…
              Vibes are on….and so let the magic unfold”
              <div className="authorStat">
                  by-Raikarsgoodvibes
              </div>
          </div> 
          <div className="stat">
              <div className="statBox">
                  <div className="count">
                      3+
                      </div>
                  <div className="countName">
                      Decades Legacy
                  </div>
              </div>
              <div className="statBoxSaperator"></div>
              <div className="statBox">
                  <div className="count">
                      1000+
                  </div>
                  <div className="countName">
                      Products Variety
                  </div>
              </div>
              <div className="statBoxSaperator"></div>
              <div className="statBox">
                  <div className="count">
                      500+
                  </div>
                  <div className="countName">
                      Products Sold
                  </div>
              </div>
          </div>
    </div>
  )
}
