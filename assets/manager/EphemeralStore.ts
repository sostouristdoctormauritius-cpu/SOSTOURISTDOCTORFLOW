import AsyncStorage from "@react-native-async-storage/async-storage"

class EphemeralStore {
  private readonly store: Map<string, any>

  constructor() {
    this.store = new Map()
  }

  get(key: string) {
    return this.store.get(key)
  }

  set(key: string, value: any) {
    this.store.set(key, value)
  }

  storeData = async (key: string, value: any) => {
    try {
      const jsonValue = JSON.stringify(value)
      await AsyncStorage.setItem(key, jsonValue)
      this.store.set(key, value)
    } catch (e) {
      console.error("Error storing data", e)
      throw e
    }
  }

  getData = async (key: string) => {
    try {
      const memoryValue = this.store.get(key)
      if (memoryValue !== undefined) {
        return memoryValue
      }

      const jsonValue = await AsyncStorage.getItem(key)
      const value = jsonValue != null ? JSON.parse(jsonValue) : null

      if (value !== null) {
        this.store.set(key, value)
      }

      return value
    } catch (e) {
      console.error("Error getting data", e)
      throw e
    }
  }

  removeData = async (key: string) => {
    try {
      this.store.delete(key)
      await AsyncStorage.removeItem(key)
    } catch (e) {
      console.error("Error removing data", e)
      throw e
    }
  }

  clear = async () => {
    try {
      this.store.clear()
      await AsyncStorage.clear()
    } catch (e) {
      console.error("Error clearing data", e)
      throw e
    }
  }
}

export default new EphemeralStore()
