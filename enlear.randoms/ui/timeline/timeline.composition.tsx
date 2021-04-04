import React from 'react';
import { Timeline } from './timeline';

// sets the Component preview in gallery view
export const BasicTimeline = () => {

  const items = [
    {
      day: 20,
      month: "DEC",
      text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod"
    },
    {
      day: 11,
      month: "AUG",
      text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod"
    },
    {
      day: 25,
      month: "MAY",
      text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod"
    },
    {
      day: 13,
      month: "APR",
      text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod"
    },
    {
      day: 20,
      month: "FEB",
      text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod"
    }
  ]

  return <Timeline items={items} ></Timeline>;
};
