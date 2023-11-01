import Image from 'next/image'
import Portfolio from './portfolio'
import { SlStar } from 'react-icons/sl';

export default function Home() {
  return (
    <main className="main">
      <div className="content">
        <Portfolio/>
      </div>
      <div className="circles-area">
        <div className='circles'>       
              <div>
                <SlStar style={{color: 'white', opacity: '25%'}}/>
              </div>
              <div>
                <SlStar style={{color: 'white', opacity: '25%'}}/>
              </div>
              <div>
                <SlStar style={{color: 'white', opacity: '25%'}}/>
              </div>
              <div>
                <SlStar style={{ color: 'white', opacity: '25%'}}/>
              </div>
              <div>
                <SlStar style={{color: 'white', opacity: '25%'}}/>
              </div>
              <div>
                <SlStar style={{color: 'white', opacity: '25%'}}/>
              </div>
              <div>
                <SlStar style={{color: 'white', opacity: '25%'}}/>
              </div>
              <div>
                <SlStar style={{ color: 'white', opacity: '25%'}}/>
              </div>
              <div>
                <SlStar style={{color: 'white', opacity: '25%'}}/>
              </div>
              <div>
                <SlStar style={{color: 'white', opacity: '25%'}}/>
              </div>
          </div>
      </div>
    </main>
  )
}
