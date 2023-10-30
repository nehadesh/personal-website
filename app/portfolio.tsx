// pages/portfolio.tsx
'use client'
import Image from 'next/image';
import { Space_Grotesk } from 'next/font/google';
import { BrandColors } from './Colors';
import { CSSProperties, Component, HTMLAttributes } from 'react';

const space_grotesk_font = Space_Grotesk({weight: '400', subsets: ['latin']}); 

const mainContentStyle: CSSProperties = {
    display: 'flex', 
    flexDirection: 'row', 
    fontFamily: space_grotesk_font.style.fontFamily, 
    flexWrap: 'wrap',
    alignItems: 'center',
    alignContent: 'center',
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
    marginTop: '10vh',
    marginBottom: '10vh',
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

const taglineStyle: CSSProperties = {
    fontFamily: space_grotesk_font.style.fontFamily, 
    color: BrandColors.RoseQuartz,
    fontSize: '4vw',
    marginLeft: '0vw',
};

const workSummaryBoxStyle: CSSProperties = {
    backgroundColor: BrandColors.DarkestPurple, 
    borderRadius: 8, 
    padding: '10px 20px 10px 20px',
    color: BrandColors.RoseQuartz,
    width: '100%',
};

const workTitleStyle: CSSProperties = {
    fontSize: '3vw',
    textAlign: 'center',
};

const workSummarySubtext: CSSProperties = {
    fontSize: '1.5vw',
    textAlign: 'left',
    marginLeft: '1.5vw'
};


export default class Portfolio extends Component {
    render() {
        return (
            <div style={mainContentStyle}>
                <div style={rowStyle}>
                    <div style={{...columnStyle, flex: '40%'}}>
                        <div>
                        <Image
                            src="/neha_deshpande_resized.png"
                            alt="Neha Deshpande"
                            width={500}
                            height={100}
                            priority
                            style={personalImageStyle}
                        />
                        </div>
                        <div style={workSummaryBoxStyle}>
                            <h5 style={workTitleStyle}>Software Engineer</h5>
                        </div>
                    </div>
                    <div style={{...columnStyle, flex: '60%'}}>
                        <h1 style={nameStyle}>Neha Deshpande</h1>
                        <div className='line-1 anim-typewriter' style={taglineStyle}>
                            I am a Developer
                        </div>
                        <div style={rowStyle}>
                            <div style={columnStyle}>
                                <div style={workSummaryBoxStyle}>helloooooo</div>
                            </div>
                            <div style={columnStyle}>
                                <div style={workSummaryBoxStyle}>worlddddddddddddddd</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
          );
    }
}
