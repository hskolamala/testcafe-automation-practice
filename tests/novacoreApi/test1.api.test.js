import { t } from "testcafe";

fixture("novacore api's");

test("novacore-api-test", async (t) => {
  const response = await t.request(`https://reqres.in/api/users/2`);
  console.log(response.status);
});
