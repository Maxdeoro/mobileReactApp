import { atom } from "jotai";
import { authAtom } from "../../auth/model/auth.state";
import axios, { AxiosError } from "axios";
import { StudentCourseDescription } from "./course.model";
import { API } from "../api/api";

export const courseAtom = atom<CourseState>({
    courses: [],
    isLoading: false,
    error: null,
});

export const loadCourseAtom = atom(
    async (get) => {
        return get(courseAtom);
    },
    async (get, set) => {
        try {
            const {access_token} = await get(authAtom);
            set(courseAtom, {
                courses: [],
                isLoading: true,
                error: null,
            });
            const {data} = await axios.get<StudentCourseDescription[]>(
                API.my, {
                    params: {
                        studentCourse: 'dontMy',
                    },
                    headers: {
                        Autorization: `Bearer ${access_token}`,
                    },
                }
            );
            set(courseAtom,{
                courses: data,
                isLoading: false,
                error: null,
            });
        } catch (error) {
            if(error instanceof AxiosError) {
                set(courseAtom, {
                    courses: [],
                    isLoading: false,
                    error: error.response?.data.message,
                });
            }
        }
    }
);

export interface CourseState {
    courses: StudentCourseDescription[];
    isLoading: boolean;
    error: string | null;
};