export default defineNuxtRouteMiddleware (() => {
    // console.log("global working");
    const pageVisitCount = usePageVisitCount();
    pageVisitCount.value++;
})