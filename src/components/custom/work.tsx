'use client';

import { title } from 'process';
// @ts-ignore
import { Chrono } from 'react-chrono';
import work_en from "@/app/content/english/work.json"
import work_no from "@/app/content/norwegian/work.json"
import { LanguageState, useLanguageStore } from "@/state/state-store"

interface Work {
    header: string,
    entries: WorkEntry[]
}

interface WorkEntry {
    title: string,
    cardTitle: string,
    cardSubtitle: string
}

export default function Work() {
    const language = useLanguageStore((state: LanguageState) => state.language);

    const work: Work = (language == "en") ? work_en : work_no;

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
        <div className='flex justify-center relative'>
            <div className='space-y-12 relative'>
                <div className='flex justify-center'>
                    <h1 className='text-3xl font-sans font-thin'>{work.header}</h1>
                </div>
                <div className="xl:w-[1100px] w-[350px] h-[400px] isolate relative">
                    <Chrono 
                        classNames={styleClasses}  
                        fontSizes={{cardText: '5.5rem'}} theme={theme} disableToolbar={true} items={work.entries} mode="VERTICAL"
                    />
                </div>
            </div>  
        </div>
    )
}