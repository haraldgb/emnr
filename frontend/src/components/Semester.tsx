import React from 'react';
import { MyCourse } from './MyCourse';
import { SemesterContainer, StyledTable, StyledTH } from 'styles/Containers';
import { BoldTitle } from 'styles/Text';

interface Semester {
  semester: string;
  courses: MyCourseProps[];
}

interface MyCourseProps {
  course_name: string;
  course_code: string;
  semester: string;
}

export const Semester: React.FC<Semester> = ({semester, courses}) => {
  return (
    <SemesterContainer margin='5vh 0'>
      <BoldTitle fontSize='24px' >{semester}</BoldTitle>
      <StyledTable>
        <thead>
          <tr>
            <StyledTH width='25%'>Fagkode</StyledTH>
            <StyledTH width='50%' textAlign='left'>
              Fagnavn
            </StyledTH>
            <StyledTH width='25%'>Din vurdering</StyledTH>
          </tr>
        </thead>
        <tbody>
          {courses.map((currentCourse) => {
            return (
              <MyCourse
                  courseCode={currentCourse.course_code}
                  courseName={currentCourse.course_name}
                  yourReview={"- - - "}
                  key={currentCourse.course_code}
              />
            )
          })}
        </tbody>
      </StyledTable>
    </SemesterContainer>
  );
}