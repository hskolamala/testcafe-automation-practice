import { t } from "testcafe";

fixture("testcafe demo");

test("my-first-test", async (t) => {
  const response = await t.request(`https://reqres.in/api/users/2`);
  console.log(response.status);
});
