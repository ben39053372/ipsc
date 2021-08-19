import { AxiosPromise } from 'axios';
import { courseClient } from '../services/courseServer';

export const getAllCourses = (): AxiosPromise<Course> => {
  return courseClient({
    method: 'GET',
  });
};

export const createCourse = (course: Course) => {
  return courseClient({
    method: 'POST',
    data: course,
  });
};

export const removeCourse = (courseId: string) => {
  return courseClient({
    method: 'DELETE',
    url: `/${courseId}`,
  });
};
