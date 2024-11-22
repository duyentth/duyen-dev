import * as React from "react";
import Timeline from "@mui/lab/Timeline";
import TimelineItem, { timelineItemClasses } from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import SchoolIcon from "@mui/icons-material/School";
import CodeIcon from "@mui/icons-material/Code";
import BugReportIcon from "@mui/icons-material/BugReport";
import Typography from "@mui/material/Typography";
import { List, ListItem, ListItemIcon, ListItemText } from "@mui/material";
import FiberManualRecordOutlinedIcon from "@mui/icons-material/FiberManualRecordOutlined";
import experiences from "../../../experiences.json";
import { useMediaQuery } from "@mui/material";

const timelineDotIconMap = {
  SchoolIcon: <SchoolIcon />,
  CodeIcon: <CodeIcon />,
  BugReportIcon: <BugReportIcon />,
};

export default function Experience() {
  const isLargeScreen = useMediaQuery("(min-width:768px)");
  return (
    <section id="experience" className="mt-40 scroll-mt-36 ">
      <div className="flex flex-col space-y-10 p-10">
        <div className=" text-3xl md:text-4xl font-semibold underline">
          Experiences
        </div>

        <div className="mt-10">
          <Timeline
            position={isLargeScreen ? "alternate" : "right"}
            sx={
              !isLargeScreen
                ? {
                    [`& .${timelineItemClasses.root}:before`]: {
                      flex: 0,
                      padding: 0,
                    },
                  }
                : {}
            }
          >
            {experiences.map((exp, index) => (
              <TimelineItem key={index}>
                <TimelineSeparator className="justify-items-start">
                  <TimelineDot variant="filled" color="primary">
                    {timelineDotIconMap[exp.timelineDotIcon]}
                  </TimelineDot>
                  <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent sx={{ py: "12px", px: 2 }}>
                  <Typography component="span" variant="h6">
                    {exp.position}
                    {" - "}
                    {exp.companyName}
                  </Typography>
                  <Typography color="text.secodary">{exp.address}</Typography>
                  <Typography>{exp.timeline}</Typography>
                  <List>
                    {exp.descriptions.map((desc, idx) => (
                      <ListItem key={idx} alignItems="flex-start">
                        <ListItemIcon>
                          <FiberManualRecordOutlinedIcon fontSize="small" />
                        </ListItemIcon>
                        <ListItemText>{desc}</ListItemText>
                      </ListItem>
                    ))}
                  </List>
                </TimelineContent>
              </TimelineItem>
            ))}
          </Timeline>
        </div>
      </div>
    </section>
  );
}
