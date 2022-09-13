import { t } from "testcafe";

fixture("magma api's");

test("magma-api-test1", async (t) => {
  const response = await t.request(`https://reqres.in/api/users/2`);
  console.log(response.status);
});
test("magma-api-test2", async (t) => {
  const response = await t.request(`https://reqres.in/api/users/2`);
  console.log(response.status);
});
test("magma-api-test3", async (t) => {
  const response = await t.request(`https://reqres.in/api/users/2`);
  console.log(response.status);
});
