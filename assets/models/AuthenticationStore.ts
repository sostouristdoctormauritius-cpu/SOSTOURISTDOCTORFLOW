import { Instance, SnapshotOut, types } from "mobx-state-tree"

const UserProfileModel = types
  .model("UserProfile", {
    role: types.string,
    isEmailVerified: types.boolean,
    userProfile: types.maybeNull(types.frozen()),
    doctorProfile: types.maybeNull(types.frozen()),
    name: types.maybe(types.string),
    email: types.string,
    createdAt: types.string,
    updatedAt: types.string,
    id: types.string,
 
  })
  .actions((self) => ({
    updateProfile(data: Partial<typeof self>) {
      Object.assign(self, data)
    },
  }))

export const AuthenticationStoreModel = types
  .model("AuthenticationStore")
  .props({
    authToken: types.maybe(types.string),
    authEmail: types.maybe(types.string),
    streamToken: types.maybe(types.string),
    profilePic: types.maybe(types.string),
    user: types.maybeNull(UserProfileModel),
    phone: types.maybe(types.string),
    countryCode:types.maybe(types.string),
  })
  .views((store) => ({
    get isAuthenticated() {
      return !!store.authToken
    },
    get validationError() {
      if (!store.authEmail) {
        return "can't be blank"
      }
      if (store.authEmail.length < 6) {
        return "must be at least 6 characters"
      }
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(store.authEmail)) {
        return "must be a valid email address"
      }
      return ""
    },
  }))
  .actions((store) => ({
    setAuthToken(value?: string) {
      store.authToken = value
    },
    setProfilePic(value?: string) {
      store.profilePic = value
    },
    setAuthEmail(value: string) {
      store.authEmail = value.replace(/ /g, "")
    },
    setUserProfile(value: any) {
      if (!value) {
        store.user = null
        return
      }
      // If user already exists, update it
      if (store.user) {
        store.user.updateProfile(value)
      } else {
        // Create new user instance
        store.user = UserProfileModel.create(value)
      }
    },
    setStreamToken(token: string) {
      store.streamToken = token
    },
    setAuthPhone(value?: string) {
      store.phone = value
    },
    setAuthCountryCode(value?: string) {
      store.countryCode = value
    },
    logout() {
      store.authToken = undefined
      store.profilePic = undefined
      store.user = null
      store.authEmail = ""
      store.phone= '';
      store.countryCode="";
    },
  }))

export interface AuthenticationStore extends Instance<typeof AuthenticationStoreModel> {}

export interface AuthenticationStoreSnapshot extends SnapshotOut<typeof AuthenticationStoreModel> {}
