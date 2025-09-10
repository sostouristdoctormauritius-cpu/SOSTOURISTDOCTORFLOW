import { AppConfigStoreModel } from "./AppConfigStore"

test("can be created", () => {
  const instance = AppConfigStoreModel.create({})

  expect(instance).toBeTruthy()
})
