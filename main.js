// const modules = import.meta.glob("/src/10/*.js", { import: 'name', eager: true });
// const modules = import.meta.glob("/src/10/*.js", { as: 'raw', eager: true });
// const modules = import.meta.glob("/src/10/*.js", { as: 'url', eager: true });
// const modules = import.meta.glob("/src/10/*.js");
// console.log(modules);

// Object.values(modules).forEach(async (module) => {
//   const data = await module();
//   console.log(data);
// });

console.log(import.meta.env);
