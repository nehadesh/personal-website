// pages/portfolio.tsx
'use client'
import Image from 'next/image';
import { Space_Grotesk } from 'next/font/google';
import { BrandColors } from './Colors';
import { CSSProperties, Component, HTMLAttributes } from 'react';

const space_grotesk_font = Space_Grotesk({weight: '400', subsets: ['latin']}); 

const mainContentStyle: CSSProperties = {
    width: '100%', 
    display: 'flex', 
    flexDirection: 'row', 
    fontFamily: space_grotesk_font.style.fontFamily, 
    flexWrap: 'wrap',
    alignItems: 'center',
    alignContent: 'center',
    marginTop: '40px',
};

const columnStyle: CSSProperties = {
    display: 'flex', 
    flexDirection: 'column', 
    alignItems: 'flex-start', 
    justifyContent: 'flex-start',
    flexWrap: 'wrap',
    flex: '50%',
    padding: '20px',
}

const rowStyle: CSSProperties = {
    display: 'flex', 
    flexDirection: 'row', 
    alignItems: 'flex-start', 
    justifyContent: 'flex-start',
    flexWrap: 'wrap',
    flex: '100%',
}

const headerStyle: CSSProperties = {
    display: 'flex', 
    flexDirection: 'row', 
    alignItems: 'center', 
}

const personalImageStyle: CSSProperties = { 
    width: 'auto', 
    height: 'auto',
    minWidth: '200px',
};

const nameStyle: CSSProperties = {
    fontFamily: space_grotesk_font.style.fontFamily, 
    color: BrandColors.TimberWolf,
    fontSize: '6vw',
    marginTop: '6vh',
};


export default class Portfolio extends Component {
    render() {
        return (
            <div style={mainContentStyle}>
                {/* <div style={{display: 'flex'}}>
                    <div style={{flex: '40%'}}>
                        <Image
                            src="/neha_deshpande.png"
                            alt="Neha Deshpande"
                            width={500}
                            height={100}
                            priority
                            style={personalImageStyle}
                        />
                    </div>
                    <div style={{flex: '60%'}}>
                        <div className='heading1'>
                        <div className='line-1 anim-typewriter'>
                            <h1 style={nameStyle}>Neha Deshpande</h1>
                        </div>
                    </div>
                    </div>
                </div> */}
                
                <div style={rowStyle}>
                    <div style={{...columnStyle, flex: '40%'}}>
                        <Image
                            src="/neha_deshpande.png"
                            alt="Neha Deshpande"
                            width={500}
                            height={100}
                            priority
                            style={personalImageStyle}
                        />
                        <div style={{backgroundColor: BrandColors.LightIndigo, borderRadius: 4}}>I am a developer</div>
                    </div>
                    <div style={{...columnStyle, flex: '60%'}}>
                        <h1 style={nameStyle}>Neha Deshpande</h1>
                        <div className='line-1 anim-typewriter'>
                            I am a Developer
                        </div>
                    </div>
                </div>
            </div>
          );
    }
}

