import { Instance, SnapshotIn, SnapshotOut, cast, types } from "mobx-state-tree"

const EmergencyContactModel = types.model("EmergencyContact", {
  title: types.string,
  phone: types.string,
  image: types.string,
})

const ConsultationModel = types.model("Consultation", {
  price: types.number,
  consultationType: types.string,
  currency: types.string,
  displayPrice: types.string,
})

/**
 * Model description here for TypeScript hints.
 */
export const AppConfigStoreModel = types
  .model("AppConfigStore")
  .props({
    emergencyContacts: types.optional(types.array(EmergencyContactModel), []),
    fees: types.optional(types.array(ConsultationModel), []),
  })
  .actions((store) => ({
    setEmergencyContacts(value: SnapshotIn<typeof EmergencyContactModel>[]) {
      store.emergencyContacts = cast(value)
    },
    setFees(value: SnapshotIn<typeof ConsultationModel>[]) {
      store.fees = cast(value)
    },
    clearAll() {
      store.emergencyContacts = cast([])
      store.fees = cast([])
    },
  }))

export interface AppConfigStore extends Instance<typeof AppConfigStoreModel> {}

export interface AppConfigStoreSnapshotOut extends SnapshotOut<typeof AppConfigStoreModel> {}

export interface AppConfigStoreSnapshotIn extends SnapshotIn<typeof AppConfigStoreModel> {}

export const createAppConfigStoreDefaultModel = () => types.optional(AppConfigStoreModel, {})
