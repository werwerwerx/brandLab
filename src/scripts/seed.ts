import { createClient } from "@supabase/supabase-js";
import { ClothesTypesMap, GendersCollections } from "./seedData";
import { Database } from "../shared/supabase/database.types";
import { config } from 'dotenv';

config()
export const seed = async () => {
  console.log("🔄 [seed] Starting seeding process...");

  const supabase = createClient<Database>(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.SUPABASE_SERVICE_ROLE_KEY!
  );

  console.log("✅ [seed] Supabase client initialized.");

  // Insert gender collections first
  console.log("📥 [seed] Inserting gender collections...");
  const { data: genderCollections, error: genderError } = await supabase
    .from("collection_nodes")
    .insert(GendersCollections)
    .select();

  if (genderError) {
    console.error("❌ [seed] Failed to insert gender collections:", genderError);
    throw genderError;
  }

  if (!genderCollections) {
    throw new Error("❌ [seed] No data returned after inserting gender collections");
  }

  console.log("✅ [seed] Inserted gender collections:", genderCollections);

  // Prepare categories with parent_id references
  console.log("🧩 [seed] Preparing categories based on gender collections...");
  const categories = genderCollections.flatMap((col) => {
    const clothesTypes = ClothesTypesMap[col.name];
    if (!clothesTypes) {
      console.warn(`⚠️ [seed] No ClothesTypesMap found for gender '${col.name}'`);
      return [];
    }

    return clothesTypes.map((type) => ({
      ...type,
      parent_id: col.id,
    }));
  });

  console.log(`🧱 [seed] Prepared ${categories.length} categories to insert:`);
  console.dir(categories, { depth: null });

  // Insert categories
  console.log("📤 [seed] Inserting categories...");
  const { data: categoryData, error: categoryError } = await supabase
    .from("collection_nodes")
    .insert(categories)
    .select();

  if (categoryError) {
    console.error("❌ [seed] Failed to insert categories:", categoryError);
    throw categoryError;
  }

  console.log("✅ [seed] Successfully inserted categories:", categoryData);

  console.log("🎉 [seed] Seeding completed successfully!");
};
seed()