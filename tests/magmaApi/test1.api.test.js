import { t } from "testcafe";

fixture("magma api's");

test("magma-api-test", async (t) => {
  const response = await t.request(`https://reqres.in/api/users/2`);
  console.log(response.status);
});
