export const devImport = file => require("@/" + file + ".vue").default;
export const prodImport = file => () => import("@/" + file + ".vue");
export default process.env.NODE_ENV === "production" ? prodImport : devImport;
