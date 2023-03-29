import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import SchoolIcon from "@material-ui/icons/School";
import WorkIcon from "@material-ui/icons/Work";

function Experience() {
  return (
    <div className="experience">
      <VerticalTimeline lineColor="#3e497a">

        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          iconStyle={{ background: "#3e497a", color: "#fff" }}
          icon={<SchoolIcon />}
        >
         <h3> 2012 - 2017</h3>
            <p></p>
          <h3 className="vertical-timeline-element-title">
            Wilson Early College Academy (WECA), Wilson, NC
          </h3>
          <p> High School Diploma</p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          iconStyle={{ background: "#3e497a", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <h3> 2012 - 2017</h3>
            <p></p>
          <h3 className="vertical-timeline-element-title"> 
                Wilson Community College, Wilson, NC</h3>

          <h4 className="vertical-timeline-element-subtitle">
                Associate in Arts</h4>

          <p> Associate's Degree</p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          iconStyle={{ background: "#e9d35b", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <h3> 2016 - 2022</h3>
            <p></p>
          <h3 className="vertical-timeline-element-title">
            Sales Representative - Boost Mobile
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            Wilson, NC
          </h4>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          iconStyle={{ background: "#3e497a", color: "#fff" }}
          icon={<SchoolIcon />}
        >

          <h3> 2019 - 2022</h3>
            <p></p>
          <h3 className="vertical-timeline-element-title">
            East Carolina University, Greenville, NC
          </h3>

          <h4 className="vertical-timeline-element-subtitle">
            B.S. in Computer Science
          </h4>

          <p>Bachelor's Degree</p>
        </VerticalTimelineElement>
    
      </VerticalTimeline>
    </div>
  );
}

export default Experience;