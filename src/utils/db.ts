import { openDB, IDBPDatabase } from "idb";

const DB_NAME = "DB";
const DB_VERSION = 1;
const AUTH_STORE_NAME = "auth";
const ITEMS_STORE_NAME = "items";

// initialization DB
export const initDB = async (): Promise<IDBPDatabase> => {
  return openDB(DB_NAME, DB_VERSION, {
    upgrade(db) {
      if (!db.objectStoreNames.contains(ITEMS_STORE_NAME)) {
        db.createObjectStore(ITEMS_STORE_NAME, {
          keyPath: "id",
          autoIncrement: true,
        });
      }
      if (!db.objectStoreNames.contains(AUTH_STORE_NAME)) {
        db.createObjectStore(AUTH_STORE_NAME, { keyPath: "id" });
      }
    },
  });
};

// login
export const saveToken = async (token: string): Promise<void> => {
  const db = await initDB();
  await db.put(AUTH_STORE_NAME, { id: "authToken", value: token });
};

// check token
export const getToken = async (): Promise<string | null> => {
  const db = await initDB();
  const record = await db.get(AUTH_STORE_NAME, "authToken");
  return record?.value || null;
};

// logout
export const clearToken = async (): Promise<void> => {
  const db = await initDB();
  await db.delete(AUTH_STORE_NAME, "authToken");
};
