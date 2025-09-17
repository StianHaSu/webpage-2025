'use client';

import { title } from 'process';
import { Chrono } from 'react-chrono';
import work from "@/app/content/english/work.json"

interface Work {
    title: string,
    cardTitle: string,
    cardSubtitle: string
}

export default function Work() {
    const items: Work[] = work
    const theme = {
        primary: '#f2f4f3',
        secondary: '#22333b',
        titleColor: '#f2f4f3',
        cardTitleColor: '#f2f4f3',
        cardSubtitleColor: '#f2f4f3',
        textColor: '#f2f4f3',
        titleColorActive: '#f2f4f3',
        cardBgColor: '#22333b',
        nestedCardBgColor: '#f2f4f3',
        timelineBgColor: '#f2f4f3',
        cardDetailsColor: '#f2f4f3',
        shadowColor: 'rgba(0, 0, 0, 0.6)',
        cardDetailsBackGround: '#22333b',
    };

    const styleClasses = {
        cardText: "font-sans",
        title: "font-sans",
        cardTitle: "font-sans",
        cardSubtitle: 'font-sans',
        card: 'focus:opacity-100 opacity-20'
    }

    return (
        <div className='flex justify-center'>
            <div className='space-y-12'>
                <div className='flex justify-center'>
                    <h1 className='text-3xl font-sans font-thin'>Work experience</h1>
                </div>
                <div className="xl:w-[1100px] w-[350px] h-[400px]">
                    <Chrono 
                        classNames={styleClasses}  
                        fontSizes={{cardText: '5.5rem'}} theme={theme} disableToolbar={true} items={items} mode="VERTICAL"
                    />
                </div>
            </div>  
        </div>
    )
}