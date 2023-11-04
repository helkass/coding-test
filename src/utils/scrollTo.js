/**
 *
 * @param {*} id section
 * @param {*} delay setTimeout number deps
 */
export const scrollTo = (id, delay) => {
   const section = document.querySelector(id);
   setTimeout(() => {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
   }, delay || 300);
};
