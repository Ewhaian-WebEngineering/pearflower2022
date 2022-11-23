import React from 'react';
import Timetable from './timetable';
import Timttable_M from './timetable_m';

function index() {
    // console.log(matchMedia("screen and (max-width:768px)").matches);
    if (matchMedia("screen and (max-width:768px)").matches) {
        return <Timttable_M />;
      } else {
        return <Timetable />;
      }
}

export default index;