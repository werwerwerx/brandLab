import { Database } from "../shared/supabase/database.types";

export type InsertType<T extends keyof Database["public"]["Tables"]> =
Database["public"]["Tables"][T]["Insert"];

