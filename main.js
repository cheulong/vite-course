const modules = import.meta.glob("/src/10/*.js", { eager: true });
// const modules = import.meta.glob("/src/10/*.js");
console.log(modules);

// Object.values(modules).forEach(async (module) => {
//   const data = await module();
//   console.log(data);
// });

