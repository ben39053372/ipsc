import { serverClient } from '../utils/axios';

const DOMAIN = 'courses';

export const getAllCourses = () => {
  return serverClient.get(`/${DOMAIN}`);
};

export const createCourse = (course: Course) => {
  return serverClient.post(`/${DOMAIN}`, course);
};

export const removeCourse = (courseId: string) => {
  return serverClient.delete(`/${DOMAIN}/${courseId}`);
};
