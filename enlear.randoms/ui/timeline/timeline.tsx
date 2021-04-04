import React from 'react';
import './timeline.css';

export interface TimeLineItem {
    day: number,
    month: string,
    text: string
}

export interface TimelineProps extends React.HTMLAttributes<HTMLDivElement> {
    /**
     * Timeline Items
     */
    items: TimeLineItem[]
};

export const Timeline = ({ items, children, ...rest }: TimelineProps) => {
    return (
        <section className="timeline-wrapper">
            <div className="middle-line"></div>

            { items.map((item, index) => (
                <div key={index} className={`box ${index%2 == 0? 'box-top': 'box-bottom'}`}>
                    <div className="date">
                        <p>{item.day}</p>
                        <p>{item.month}</p>
                    </div>
                    <div className="box-content">
                        <p>{item.text}</p>
                    </div>
                </div>
            ))}

        </section>
    )
};