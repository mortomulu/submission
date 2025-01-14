import { openDB, IDBPDatabase } from "idb";

const DB_NAME = "DB";
const DB_VERSION = 1; 
const AUTH_STORE_NAME = "auth";
const ITEMS_STORE_NAME = "items";

export const initDB = async (): Promise<IDBPDatabase> => {
  return openDB(DB_NAME, DB_VERSION, {
    upgrade(db) {
      if (!db.objectStoreNames.contains(ITEMS_STORE_NAME)) {
        db.createObjectStore(ITEMS_STORE_NAME, { keyPath: "id", autoIncrement: true });
      }
      if (!db.objectStoreNames.contains(AUTH_STORE_NAME)) {
        db.createObjectStore(AUTH_STORE_NAME, { keyPath: "id" });
      }
    },
  });
};
