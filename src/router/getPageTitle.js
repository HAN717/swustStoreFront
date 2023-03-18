const title = "西科周边好物";
export default function getPageTitle(pageTitle) {
    if (pageTitle) {
        return `${pageTitle}`;
    }
    return `${title}`;
}