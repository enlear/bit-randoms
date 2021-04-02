import React from 'react';
import './timeline.css';

export interface TimelineProps extends React.HTMLAttributes<HTMLDivElement> {

};

export const Timeline = ( {children, ...rest}: TimelineProps ) => {
  return (
    <section className= "timeline-wrapper">
    <div className="middle-line"></div>

    <div className="box box-top">
        <div className="date">
            <p>20</p>
            <p>DEC</p>
        </div>
        <div className="box-content">
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod</p>
        </div>
    </div>

    <div className="box box-bottom">
        <div className="date">
            <p>11</p>
            <p>AUG</p>
        </div>
        <div className="box-content">
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod</p>
        </div>
    </div>

    <div className="box box-top">
        <div className="date">
            <p>25</p>
            <p>MAY</p>
        </div>
        <div className="box-content">
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod</p>
        </div>
    </div>

    <div className="box box-bottom">
        <div className="date">
            <p>13</p>
            <p>APR</p>
        </div>
        <div className="box-content">
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod</p>
        </div>
    </div>

    <div className="box box-top">
        <div className="date">
            <p>20</p>
            <p>FEB</p>
        </div>
        <div className="box-content">
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod</p>
        </div>
    </div>
</section>
  )
};