import { changeFromToRegExp } from "./src/transformers";

const content = `
[Test](#algopy.lalala)
`;

const content2 = `
[Test](bla bla #algopy.lalala)
[Test](blabla#algopy.lalala)
`;

console.log(changeFromToRegExp(/\[(.+?)\]\(.*?#algopy\..*?\)/g, '$1')(content));
console.log(changeFromToRegExp(/\[(.+?)\]\(.*?#algopy\..*?\)/g, '$1')(content2));

