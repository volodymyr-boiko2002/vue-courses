import Main from "@/components/Main";
import SingleCourse from "@/components/SingleCourse";

export default [
    {path: '/', component: Main},
    {path: '/course/:id', component: SingleCourse},
    {path: '*', redirect: '/'},
]